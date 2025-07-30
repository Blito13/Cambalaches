import React from 'react';
import { useDispatch } from 'react-redux';
import { 
  setCategory, 
  setPriceRange, 
  setTitleFilter, 
  resetFilters 
} from '../redux/filterSlice';

// Definimos los tipos para las props (aunque este componente no recibe props)
interface FilterFormProps {}

// Tipo para las categorías
type ProductCategory = 'nuevos' | 'usados' | 'reacondicionados' | 'vintage' | 'coleccionables';

const categories: ProductCategory[] = ['nuevos', 'usados', 'reacondicionados', 'vintage', 'coleccionables'];

export const FilterForm: React.FC<FilterFormProps> = () => {
  const dispatch = useDispatch();
  
  // Manejadores de eventos con tipos
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCategory(e.target.value as ProductCategory | ''));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setPriceRange({ [name]: Number(value) }));
  };

  const handleTitleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitleFilter(e.target.value));
  };

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(resetFilters());
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Filtrar Productos</h3>
      
      {/* Filtro por título */}
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
          Buscar por nombre:
        </label>
        <input
          type="text"
          id="title"
          onChange={handleTitleSearch}
          placeholder="Escribe un nombre..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      {/* Filtro por categoría */}
      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
          Categoría:
        </label>
        <select 
          id="category" 
          onChange={handleCategoryChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Todas las categorías</option>
          {categories.map(cat => (
            <option key={cat} value={cat} className="capitalize">
              {cat}
            </option>
          ))}
        </select>
      </div>
      
      {/* Filtro por rango de precio */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Rango de precio:
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            name="min"
            placeholder="Mínimo"
            onChange={handlePriceChange}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-gray-500">-</span>
          <input
            type="number"
            name="max"
            placeholder="Máximo"
            onChange={handlePriceChange}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      {/* Botón para resetear */}
      <button 
        type="button" 
        onClick={handleReset}
        className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors duration-200"
      >
        Limpiar Filtros
      </button>
    </div>
  );
};