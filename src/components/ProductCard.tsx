import type { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img 
        src={product.thumbnail[0]} 
        alt={product.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
        <p className="text-gray-600 mt-1">${product.price}</p>
        <p className="text-gray-500 text-sm mt-2 line-clamp-2">{product.description}</p>
        <div className="mt-4 flex justify-between">
          <button 
            onClick={() => onViewDetails(product)}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Ver detalles
          </button>
        </div>
      </div>
    </div>
  );
};