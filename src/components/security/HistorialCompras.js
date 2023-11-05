import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrder } from '../../actions/orderAction'; 

const HistorialCompras = () => {
  const dispatch = useDispatch();
  const { ordenes, loading, error, totalPages } = useSelector((state) => state.orden); // Asegúrate de que el nombre del estado coincida con tu configuración de Redux

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getOrder(currentPage)); // Llama a la acción para obtener las órdenes al cargar el componente
  }, [dispatch, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>Órdenes Administrativas</h1>
      { loading ? (
        <p>Cargando órdenes...</p>
      ) : error ? (
        <p>Error al cargar las órdenes: {error.message}</p>
      ) : (
        <div>
          <ul>
            {ordenes.map((orden) => (
              <li key={orden._id}>
                <p>ID de la orden: qwqewqe</p>
                <p>Fecha de la orden:27</p>
                <p>Total: {orden.total}</p>
              </li>
            ))}
          </ul>
          <div className="pagination">
    {Array.from({ length: totalPages }, (_, index) => (
    <button
      key={index + 1}
      onClick={() => handlePageChange(index + 1)}
      className={index + 1 === currentPage ? 'active' : ''}
    >
      {index + 1}
    </button>
  ))}
</div>
        </div>
      )}
    </div>
  );
};

export default HistorialCompras;
