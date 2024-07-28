import { configureStore } from '@reduxjs/toolkit'
import datveSlide from './slides/datveSlide'


export const store = configureStore({
  reducer: {
    datveSlide
  },
})