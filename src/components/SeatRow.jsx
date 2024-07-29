/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import { bookSeat } from '../redux/slides/datveSlide';

const SeatRow = ({ hangGhe, soHangGhe }) => {
  const dispatch = useDispatch();
  const { danhSachGheDangDat } = useSelector((state) => state.datveSlide);

  const renderGhe = () => {
    return hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = '';
      let disabled = false;

      if (ghe.daDat) {
        cssGheDaDat = 'gheDuocChon';
        disabled = true;
      }

      let cssGheDangDat = '';
      const indexGheDangDat = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
      if (indexGheDangDat !== -1) {
        cssGheDangDat = 'gheDangChon';
      }

      return (
        <button
          key={index}
          disabled={disabled}
          className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
          onClick={() => dispatch(bookSeat(ghe))}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };

  const renderSeatLayout = () => {
    if (soHangGhe === 0) {
      return hangGhe.danhSachGhe.map((ghe, index) => (
        <button key={index} className='rowNumber '>{ghe.soGhe}</button>
      ));
    } else {
      return (
        <>
        <span className="firstChar">{hangGhe.hang}</span> {renderGhe()}
      </>
      );
    }
  };

  return (
    <div className="seatRow">
      {renderSeatLayout()}
    </div>
  );
};

export default SeatRow;
