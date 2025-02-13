import cmdbuildClient from './cmdbuildClient';
import Cookies from 'js-cookie';

export async function loginToCMDBuild(username, password) {
    try {
        const response = await cmdbuildClient.post('/sessions?scope=service&returnId=true', {
            username,
            password,
        });
        console.log('Login Response:', response.data);

        const token = response.data.data?._id;
        if (!token) {
            throw new Error('Token not found in response');
        }

        const userInfo = {
            userId: response.data.data?.userId,
            username: response.data.data?.username,
            role: response.data.data?.role,
        };

        Cookies.set('userInfo', JSON.stringify(userInfo), { expires: 1 });
        Cookies.set('CMDBuild-Authorization', token, { expires: 1 });

        return response.data;
    } catch (error) {
        console.error('Error logging in to CMDBuild:', error.response?.data || error.message);
        throw error;
    }
}

export async function logoutFromCMDBuild() {
    try {
        const sessionId = Cookies.get('CMDBuild-Authorization');
        if (!sessionId) {
            throw new Error('No session ID found in cookies');
        }

        await cmdbuildClient.delete(`/sessions/${sessionId}`, {
            headers: {
                'Cmdbuild-authorization': sessionId,
            },
        });

        Cookies.remove('CMDBuild-Authorization');
        Cookies.remove('userInfo');
        console.log('Logout successful');
    } catch (error) {
        console.error('Error logging out:', error);
        throw error;
    }
}
