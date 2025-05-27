import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const models = [
  { id: 1, name: "Air Max 90", brand: "Nike", active: true, created: "2024-01-10" },
  { id: 2, name: "Ultraboost", brand: "Adidas", active: true, created: "2024-01-12" },
  { id: 3, name: "Chuck Taylor", brand: "Converse", active: false, created: "2024-01-15" },
  { id: 4, name: "Sk8-Hi", brand: "Vans", active: true, created: "2024-01-20" },
  { id: 5, name: "574", brand: "New Balance", active: false, created: "2024-01-22" },
  { id: 6, name: "Forum Low", brand: "Adidas", active: true, created: "2024-01-23" },
  { id: 7, name: "React Infinity", brand: "Nike", active: false, created: "2024-01-24" },
  { id: 8, name: "Old Skool", brand: "Vans", active: true, created: "2024-01-25" },
  { id: 9, name: "One Star", brand: "Converse", active: false, created: "2024-01-26" },
  { id: 10, name: "996", brand: "New Balance", active: true, created: "2024-01-27" },
  { id: 11, name: "Zoom Fly", brand: "Nike", active: true, created: "2024-01-28" },
  { id: 12, name: "Continental 80", brand: "Adidas", active: false, created: "2024-01-29" },
  { id: 13, name: "Sk8-Mid", brand: "Vans", active: true, created: "2024-01-30" },
  { id: 14, name: "CT70", brand: "Converse", active: false, created: "2024-02-01" },
  { id: 15, name: "1500", brand: "New Balance", active: true, created: "2024-02-02" },
  { id: 16, name: "Pegasus", brand: "Nike", active: true, created: "2024-02-03" },
  { id: 17, name: "ZX 2K", brand: "Adidas", active: false, created: "2024-02-04" },
  { id: 18, name: "Era", brand: "Vans", active: true, created: "2024-02-05" },
  { id: 19, name: "Weapon", brand: "Converse", active: false, created: "2024-02-06" },
  { id: 20, name: "327", brand: "New Balance", active: true, created: "2024-02-07" },
];

const ModelsTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const totalPages = Math.ceil(models.length / rowsPerPage);

  const handleNext = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value));
    setPage(0);
  };

  const currentData = models.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

  return (
    <div className="bg-white shadow-md rounded-md p-6 pt-6 relative z-10">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 text-left">Modelos Registrados</h2>

      <div className="overflow-x-auto rounded">
        <table className="w-full text-sm text-left text-gray-800 border-collapse">
          <thead className="bg-gray-100 text-xs uppercase text-gray-600 border-b">
            <tr>
              <th className="p-3"><input type="checkbox" /></th>
              <th className="p-3">Actions</th>
              <th className="p-3">Model</th>
              <th className="p-3">Brand</th>
              <th className="p-3">Active</th>
              <th className="p-3">Created</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((m) => (
              <tr key={m.id} className="border-b hover:bg-gray-50">
                <td className="p-3"><input type="checkbox" /></td>
                <td className="p-3 flex gap-2">
                  <button className="text-blue-500 hover:text-blue-700"><FaEdit /></button>
                  <button className="text-red-500 hover:text-red-700"><FaTrash /></button>
                </td>
                <td className="p-3">{m.name}</td>
                <td className="p-3">{m.brand}</td>
                <td className="p-3">
                  <input type="checkbox" checked={m.active} readOnly />
                </td>
                <td className="p-3">{m.created}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          Rows:
          <select
            value={rowsPerPage}
            onChange={handleChangeRowsPerPage}
            className="border rounded px-1 py-0.5 ml-1"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </div>
        <div>
          {page * rowsPerPage + 1}-{Math.min((page + 1) * rowsPerPage, models.length)} of {models.length}
        </div>
        <div className="space-x-2">
          <button onClick={() => setPage(0)} disabled={page === 0}>⏮️</button>
          <button onClick={handlePrev} disabled={page === 0}>◀️</button>
          <button onClick={handleNext} disabled={(page + 1) >= totalPages}>▶️</button>
          <button onClick={() => setPage(totalPages - 1)} disabled={(page + 1) >= totalPages}>⏭️</button>
        </div>
      </div>
    </div>
  );
};

export default ModelsTable;
