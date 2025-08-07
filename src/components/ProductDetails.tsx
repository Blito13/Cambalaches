import { useState } from 'react';
import type { Product } from '../types/Product';
import { WhatsAppButton } from './WhatsAppButton';
interface ProductDetailsProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) return null;


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
            <div className="relative w-full aspect-video md:aspect-[3/4] lg:aspect-square transition-all duration-300">
              
              <img 
                key={product.id}
                src={product.thumbnail[currentImageIndex]} 
                alt={product.title} 
                className="w-full h-full object-cover bg-gray-50 rounded-lg transition-transform transform hover:scale-105 "
              />
              {product.thumbnail.length > 1 && (
                <>
                  <button
                    onClick={()=>setCurrentImageIndex(currentImageIndex===0 ?currentImageIndex : currentImageIndex-1)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white"
                    aria-label="Previous image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={()=>setCurrentImageIndex(currentImageIndex===product.thumbnail.length-1?currentImageIndex:currentImageIndex+1) }
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white"
                    aria-label="Next image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
              {product.thumbnail.length > 1 && (
                <div className="flex justify-center mt-4 space-x-2">
                  {product.thumbnail.map((_, index) => (
                    <button
                      key={index}
                      onClick={()=>setCurrentImageIndex(index)}
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
                  <li><span className="font-medium">Dimensiones:</span> {product.stock}</li>
                  <li><span className="font-medium">Color:</span> {product.category}</li>
                </ul>
              </div>
            </div>
                <WhatsAppButton/> 
          </div>
        </div>
      </div>
    </div>
  );
};