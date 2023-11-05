import React from 'react'

const Order = () => {
  return (
    <div class="purchase-history">
  <h2>Historial de Compras</h2>
  <ul>
    <li>
      <strong>Producto 1:</strong> $50
      <span class="purchase-date">Fecha: 2023-10-15</span>
    </li>
    <li>
      <strong>Producto 2:</strong> $30
      <span class="purchase-date">Fecha: 2023-09-28</span>
    </li>
    <li>
      <strong>Producto 3:</strong> $75
      <span class="purchase-date">Fecha: 2023-08-12</span>
    </li>
  </ul>
</div>
  )
}

export default Order