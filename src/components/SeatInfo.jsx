
import { useDispatch, useSelector } from 'react-redux';
import { cancelSeat } from '../redux/slides/datveSlide';
const SeatInfo = () => {
    const dispatch = useDispatch();
    const { danhSachGheDangDat, tongTien } = useSelector((state) => state.datveSlide);

    const handleCancel = (soGhe) => {
        if (danhSachGheDangDat.find(ghe => ghe.soGhe === soGhe)) {
            dispatch(cancelSeat(soGhe));
        } else {
            console.error('Ghế không tồn tại trong danh sách!');
        }
    };
    

    return (
        <div>
            <table className='border-separate border-spacing-2 border border-slate-500 text-white'>
                <thead>
                    <tr>
                        <th>Số ghế</th>
                        <th>Giá</th>
                        <th>Hủy</th>
                    </tr>
                </thead>
                <tbody>
                    {danhSachGheDangDat.map((ghe) => (
                        <tr key={ghe.soGhe}>
                            <td className='text-yellow-500'>{ghe.soGhe}</td>
                            <td className='text-yellow-500'>{ghe.gia}</td>
                            <td>
                                <button 
                                    className='text-red-500' 
                                    onClick={() => handleCancel(ghe.soGhe)}
                                >
                                    Hủy
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='mt-4 text-white m-0'>
                <h2 className='text-xl'>Tổng tiền: <span className='text-yellow-500'>{tongTien}</span> VNĐ</h2>
            </div>
        </div>
    );
};

export default SeatInfo;
