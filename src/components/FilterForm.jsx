import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategory, setPriceRange, setTitleFilter, resetFilters } from '../redux/filterSlice'; // Asegúrate de que la ruta sea correcta

const categories = ['Electrónica', 'Ropa', 'Hogar', 'Deportes', 'Otros'];

export const FilterForm = () => {
  const dispatch = useDispatch();
  
  // Manejadores de eventos
  const handleCategoryChange = (e) => {
    dispatch(setCategory(e.target.value));
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    dispatch(setPriceRange({ [name]: Number(value) }));
  };

  const handleTitleSearch = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

  const handleReset = () => {
    dispatch(resetFilters());
  };

  return (
    <div className="filter-form">
      <h3>Filtrar Productos</h3>
      
      {/* Filtro por título */}
      <div className="form-group">
        <label htmlFor="title">Buscar por nombre:</label>
        <input
          type="text"
          id="title"
          onChange={handleTitleSearch}
          placeholder="Escribe un nombre..."
        />
      </div>
      
      {/* Filtro por categoría */}
      <div className="form-group">
        <label htmlFor="category">Categoría:</label>
        <select id="category" onChange={handleCategoryChange}>
          <option value="">Todas las categorías</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      
      {/* Filtro por rango de precio */}
      <div className="form-group">
        <label>Rango de precio:</label>
        <div className="price-range">
          <input
            type="number"
            name="min"
            placeholder="Mínimo"
            onChange={handlePriceChange}
          />
          <span> - </span>
          <input
            type="number"
            name="max"
            placeholder="Máximo"
            onChange={handlePriceChange}
          />
        </div>
      </div>
      
      {/* Botón para resetear */}
      <button type="button" onClick={handleReset} className="reset-btn">
        Limpiar Filtros
      </button>
    </div>
  );
};