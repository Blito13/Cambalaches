import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase/config';

// Definición de tipos
interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  stock: number;
  brand: string;
  category: string;
  ownerNumber: number;
  thumbnail: string[];
}

interface ProductsState {
  products: Product[];
  details: string;
  loading: string,
  error: string | null,
}

interface ContactPayload {
  number: string;
  text: string; 
}



const initialState: ProductsState = {
  products: [],
  details: "",
  loading: 'idle',
  error: null as string | null,
};

export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetchProducts',
  async () => {
    const querySnapshot = await getDocs(collection(db, 'productos'));
    console.log("Products", querySnapshot);
    const productsData= querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Product[];
    console.log("Products fetche", productsData);
    return productsData;
  }
);

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    showDetails: (state, action: PayloadAction<{id: string}>) => {
      const { id } = action.payload;
      state.details = id;
    },
    contactOwner: (state, action: PayloadAction<ContactPayload>) => {
      const { number, text } = action.payload;
      const whatsappLink = `whatsapp://send?phone=${number}&text=${encodeURIComponent(text)}`;
      window.location.href = whatsappLink;
    }
  },
   extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        console.log("Products fetched successfully", action.payload);
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message || 'Error al cargar productos';
      });
  },
});

export default ProductSlice.reducer;
export const { setProducts, showDetails, contactOwner } = ProductSlice.actions;