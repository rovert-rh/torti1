import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetPagination, searchPagination } from '../../slices/productPaginationSlice';

const Search = ({ showSelect }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');
  const [selectedState, setSelectedState] = useState(''); // Agregamos el estado seleccionado

  // Define la lista de estados
  const estados = [
    'Estado 1',
    'Estado 2',
    'Estado 3',
    // Agrega más estados según tus necesidades
  ];

  const searchHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      dispatch(searchPagination({ search: keyword }));
    } else {
      dispatch(resetPagination());
    }

    navigate('/ecommerce');
  };

  return (
    <form onSubmit={searchHandler}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control rounded-pill homesearch"
          placeholder="Busca tu producto..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        {showSelect && (
          <select
            className="form-control rounded-pill homesearch"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="">Selecciona un estado</option>
            {estados.map((estado, index) => (
              <option key={index} value={estado}>
                {estado}
              </option>
            ))}
          </select>
        )}

        <div className="input-group-append">
          <button id="search_btn" className="btn rounded-pill">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
