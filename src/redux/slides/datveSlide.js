
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  danhSachGheDangDat: []
};

const datveSlice = createSlice({
  name: 'datve', 
  initialState, 
  reducers: {
    bookSeat: (state, action) => {
      const ghe = action.payload;
      const index = state.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
      if (index !== -1) {
        state.danhSachGheDangDat.splice(index, 1); 
      } else {
        state.danhSachGheDangDat.push(ghe); 
      }
    },
    cancelSeat: (state, action) => {
      const soGhe = action.payload;
      state.danhSachGheDangDat = state.danhSachGheDangDat.filter(gheDangDat => gheDangDat.soGhe !== soGhe);
    }
  }
});

export const { bookSeat, cancelSeat } = datveSlice.actions;


export default datveSlice.reducer;
