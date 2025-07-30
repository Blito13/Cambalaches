import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from './redux/productSlice';
import { RootState } from './redux/store'; // Asegúrate de importar tu tipo RootState

interface UseFetchResult<T> {
  data: T;
  loading?: boolean;
  error?: string | null;
}

export function useFetch<T>(url: string): UseFetchResult<T> {
  const dispatch = useDispatch();
  const products =  useSelector((state: RootState) => state.products);
  const [loading, setLoading] = useState(!products.length);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        dispatch(setProducts(result));
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, dispatch, products.length]);

  return { data: products as T, loading, error };
}