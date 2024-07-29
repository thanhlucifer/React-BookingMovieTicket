
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  danhSachGheDangDat: [],
  tongTien: 0
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
        state.tongTien -= ghe.gia;
      } else {
        state.danhSachGheDangDat.push(ghe);
        state.tongTien += ghe.gia;
      }
    },
    cancelSeat: (state, action) => {
      const soGhe = action.payload;
      const ghe = state.danhSachGheDangDat.find(gheDangDat => gheDangDat.soGhe === soGhe);

      if (ghe) {
        state.danhSachGheDangDat = state.danhSachGheDangDat.filter(gheDangDat => gheDangDat.soGhe !== soGhe);
        state.tongTien -= ghe.gia; 
      }
    }
  }
});

export const { bookSeat, cancelSeat } = datveSlice.actions;


export default datveSlice.reducer;
