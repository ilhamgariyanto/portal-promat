import cmdbuildClient from './cmdbuildClient';
import Cookies from 'js-cookie';

function getCookie(name) {
    return Cookies.get(name);
}

export async function getCMDBuildClassesDb() {
    try {
        const sessionId = getCookie('CMDBuild-Authorization');
        const classId = 'portal_dashboard';
        const response = await cmdbuildClient.get(`/classes/${classId}/cards`, {
            headers: {
                'Cmdbuild-authorization': sessionId,
            },
        });
        console.log('Response:', response.data);

        return response.data;
    } catch (error) {
        console.error('Error class:', error.response?.data || error.message);
        throw error;
    }
}

export async function getCMDBuildClassesGs() {
    try {
        const sessionId = getCookie('CMDBuild-Authorization');
        const classId = 'portal_geostories';
        const response = await cmdbuildClient.get(`/classes/${classId}/cards`, {
            headers: {
                'Cmdbuild-authorization': sessionId,
            },
        });
        console.log('Response:', response.data);

        return response.data;
    } catch (error) {
        console.error('Error class:', error.response?.data || error.message);
        throw error;
    }
}
