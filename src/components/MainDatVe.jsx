import SeatRow from './SeatRow'
import './style.scss'
import data from '../data/danhSachGhe.json'
import SeatInfo from './SeatInfo'
const MainDatVe = () => {
  return (
    <div className='bookingMovie'>
      <div className='overlay'></div>
      <div className='content'>
        <div className='grid grid-cols-12 gap-4'>
          <div className='col-span-8'>
            <h1 className="text-center text-yellow-500 text-3xl">Đặt vé xem phim THANHLUCIFER</h1>
            <h1 className="text-center text-xl text-white">Màn hình </h1>
            <div className='screen mt-3'></div>
            <div>
              {data.map((hangGhe, index) => {
                if (index === 0) {
                  return (
                    <div key={index}>
                      <SeatRow hangGhe={hangGhe} soHangGhe={index} />
                    </div>
                  )
                } else {
                  return (
                    <div key={index}>
                      <SeatRow hangGhe={hangGhe} soHangGhe={index} />
                    </div>
                  )
                }
              })}
            </div>
          </div>
          <div className='col-span-4'>
            <h1 className="text-3xl text-white">DANH SÁCH GHẾ BẠN CHỌN</h1>
            <ul className='mt-3'>
              <li className='text-white flex text-xl align-middle gap-3'>
                <button className='gheDuocChon'></button>
                <span>Ghế đã đặt</span>
              </li>
              <li className='text-white flex text-xl align-middle gap-3 mt-1'>
                <button className='gheDangChon'></button>
                <span>Ghế đang chọn</span>
              </li>
              <li className='text-white flex text-xl align-middle gap-3 mt-1'>
                <button className='ghe ml-0'></button>
                <span>Ghế chưa đặt</span>
              </li>
            </ul>
            <div className='mt-3'>
             <SeatInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainDatVe