import { useState } from 'react';
import type { Product } from '../types/Product';

interface ProductDetailsProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) return null;

 const nextImage = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault(); // Previene el comportamiento por defecto
  setCurrentImageIndex((prevIndex) => 
    prevIndex === product.thumbnail.length - 1 ? 0 : prevIndex + 1
  );
};

const prevImage = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault(); // Previene el comportamiento por defecto
  setCurrentImageIndex((prevIndex) => 
    prevIndex === 0 ? product.thumbnail.length - 1 : prevIndex - 1
  );
};

const goToImage = (index: number, e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault(); // Previene el comportamiento por defecto
  setCurrentImageIndex(index);
};

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              {/* Imagen principal */}
              <img 
                src={product.thumbnail[currentImageIndex]} 
                alt={product.title} 
                className="w-full rounded-lg"
              />
              
              {/* Flechas de navegación */}
              {product.thumbnail.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white"
                    aria-label="Previous image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white"
                    aria-label="Next image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
              
              {/* Indicadores de posición */}
              {product.thumbnail.length > 1 && (
                <div className="flex justify-center mt-4 space-x-2">
                  {product.thumbnail.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => goToImage(index , e)}
                      className={`w-3 h-3 rounded-full ${currentImageIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
            
            <div>
              <p className="text-xl font-semibold text-blue-600">${product.price}</p>
              <p className="text-gray-600 mt-2">{product.description}</p>
              
              <div className="mt-6">
                <h3 className="font-semibold text-gray-800">Detalles:</h3>
                <ul className="mt-2 space-y-2">
                  <li><span className="font-medium">Marca:</span> {product.brand}</li>
                  <li><span className="font-medium">Peso:</span> {product.description}</li>
                  <li><span className="font-medium">Dimensiones:</span> {product.stock}</li>
                  <li><span className="font-medium">Color:</span> {product.category}</li>
                  <li><span className="font-medium">Material:</span> {product.id}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};