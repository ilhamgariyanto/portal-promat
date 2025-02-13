import { useState, useRef, useEffect } from "react";
import DataTable from "react-data-table-component";
import { FaEye, FaCopy, FaChevronDown } from "react-icons/fa";
import { createPortal } from "react-dom";

const data = [
  { 
    id: 1, 
    url: "http://103.233.103.22:8090/geoserver/dilans/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=dilans%3Atoponimi_kesehatan_8467383&maxFeatures=50&outputFormat=application%2Fjson", 
    keterangan: "Dilans Toponomi Kesehatan" 
  },
];

const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const copyToClipboard = async (url) => {
  try {
    await navigator.clipboard.writeText(url);
    alert("Link berhasil disalin!");
  } catch (err) {
    alert("Gagal menyalin link: " + err);
  }
};

const ActionDropdown = ({ row }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (open && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 5,
        left: rect.left + window.scrollX,
      });
    }
  }, [open]);

  const handleView = () => {
    openInNewTab(row.url);
    setOpen(false);
  };

  const handleCopy = () => {
    copyToClipboard(row.url);
    setOpen(false);
  };

  return (
    <>
      <button
        ref={buttonRef}
        className="px-3 py-1 rounded bg-primary text-white shadow-md flex items-center gap-1 cursor-pointer hover:bg-primary-hover transition-transform duration-300 hover:scale-105"
        onClick={() => setOpen(!open)}
      >
        Pilih Aksi <FaChevronDown />
      </button>

      {open &&
        createPortal(
          <div
            ref={dropdownRef}
            className="absolute w-40 bg-white border border-secondary shadow-lg z-50"
            style={{ top: position.top, left: position.left }}
          >
            <button
              className="flex items-center gap-2 w-full px-3 py-2 text-left text-dark hover:bg-background hover:text-secondary transition-colors duration-300"
              onClick={handleView}
            >
              <FaEye /> View
            </button>
            <button
              className="flex items-center gap-2 w-full px-3 py-2 text-left text-dark hover:bg-background hover:text-secondary transition-colors duration-300"
              onClick={handleCopy}
            >
              <FaCopy /> Copy Link
            </button>
          </div>,
          document.body
        )}
    </>
  );
};

const MyDataTable = () => {
  const [filterText, setFilterText] = useState("");

  const filteredData = data.filter((row) =>
    row.keterangan.toLowerCase().includes(filterText.toLowerCase())
  );

  const columns = [
    { name: "ID", selector: (row) => row.id, sortable: true, wrap: true },
    {
      name: "URL",
      selector: (row) => row.url,
      sortable: true,
      wrap: true,
      cell: (row) => (
        <span title={row.url}>
          {row.url.length > 50 ? row.url.substring(0, 50) + "..." : row.url}
        </span>
      ),
    },
    { 
      name: "Keterangan", 
      selector: (row) => row.keterangan, 
      sortable: true, 
      wrap: true 
    },
    {
      name: "Aksi",
      cell: (row) => <ActionDropdown row={row} />,
      ignoreRowClick: true,
      allowOverflow: true,
      wrap: true,
    },
  ];

  return (
    <div className="p-6 shadow-lg bg-white text-dark">
      <h2 className="text-2xl font-bold text-secondary mb-4">Daftar URL</h2>
      <div className="mb-4">
        {/* <input
          type="text"
          placeholder="Cari URL..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="w-1/3 p-2 border border-secondary rounded focus:outline-none focus:ring-2 focus:ring-accent text-dark"
        /> */}
      </div>
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        highlightOnHover
        customStyles={{
          headCells: {
            style: {
              backgroundColor: "#EFB036",
              color: "#ffffff",
            },
          },
          rows: {
            style: {
              "&:hover": {
                backgroundColor: "#f9f9f9",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default MyDataTable;
