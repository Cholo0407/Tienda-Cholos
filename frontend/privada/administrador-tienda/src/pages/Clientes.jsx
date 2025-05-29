import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import Swal from 'sweetalert2';
import axios from 'axios';
import ActionButtons from '../components/Clientes/Butoon';

const columns = (handleDelete) => [
  {
    name: 'Acciones',
    cell: row => <ActionButtons onDelete={() => handleDelete(row._id)} />,
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
    name: 'Telefono',
    selector: row => row.phone,
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
    selector: row => row.age,
    cell: row => (
      <input type="checkbox" checked={row.age >= 18} readOnly />
    ),
    center: true,
  },
  {
    name: 'Email',
    selector: row => row.mail,
    sortable: true,
  },
];

export default function SuperDataTable() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:4000/api/customers', {
        withCredentials: true,
      });
      setData(response.data);
    } catch (error) {
      console.error('Error al obtener clientes:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudieron cargar los clientes desde el servidor.',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleRowSelected = state => {
    setSelectedRows(state.selectedRows);
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:4000/api/customers/${id}`, {
          withCredentials: true,
        });
        setData(prevData => prevData.filter(row => row._id !== id));
        Swal.fire({
          icon: 'success',
          title: 'Cliente eliminado correctamente',
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        console.error('Error al eliminar cliente:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo eliminar el cliente.',
        });
      }
    }
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
        progressPending={loading}
      />
    </div>
  );
}
