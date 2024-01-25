import { configureStore } from '@reduxjs/toolkit';
import { contacsR } from './slice';

export const store = configureStore({
  reducer: contacsR,
});
