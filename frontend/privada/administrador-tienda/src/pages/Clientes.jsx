import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import Swal from 'sweetalert2';
import ActionButtons from '../components/Clientes/Butoon';
import { rows as initialRows } from '../components/Clientes/data';

const columns = (handleDelete) => [
  {
    name: 'Acciones',
    cell: row => <ActionButtons onDelete={() => handleDelete(row.id)} />,
    width: '80px',
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
  
  {
    name: 'Nombre',
    selector: row => row.name,
    sortable: true,
  },
  {
    name: 'Edad',
    selector: row => row.age,
    sortable: true,
    right: true,
  },
  {
    name: 'Adulto',
    selector: row => row.adult,
    cell: row => (
      <input type="checkbox" checked={row.adult} readOnly />
    ),
    center: true,
  },
  {
    name: 'Cumpleaños',
    selector: row => row.birth,
    sortable: true,
  },
];

export default function SuperDataTable() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [data, setData] = useState(initialRows);

  const handleRowSelected = state => {
    setSelectedRows(state.selectedRows);
  };

  const handleDelete = (id) => {
    setData(prevData => prevData.filter(row => row.id !== id));
    Swal.fire({
      icon: 'success',
      title: 'Cliente eliminado',
      showConfirmButton: false,
      timer: 1500
    });
  };

  return (
    <div style={{ margin: 20, background: '#fff', borderRadius: 6, boxShadow: '0 2px 8px #eee' }}>
      <h3 style={{ padding: 16 }}>Clientes registrados</h3>
      <DataTable
        columns={columns(handleDelete)}
        data={data}
        selectableRows
        onSelectedRowsChange={handleRowSelected}
        pagination
        highlightOnHover
        responsive
        paginationRowsPerPageOptions={[5, 10, 25, 50, 'All']}
        paginationPerPage={5}
        paginationComponentOptions={{
          rowsPerPageText: 'Rows :',
          rangeSeparatorText: 'of',
          selectAllRowsItem: true,
          selectAllRowsItemText: 'All',
        }}
        customStyles={{
          headRow: { style: { minHeight: '48px', background: '#fafafa' } },
          rows: { style: { minHeight: '48px' } },
        }}
      />
    </div>
  );
}
