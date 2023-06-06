/**
 * 12/8/2021
 1 số hàm built-in
 * alert 
 * console 
 * confirm  
 * prompt
 * set timeout
 * set interval
 */

 var fullName = 'Ngo Quoc Sang';

//hien thi bang thong bao ngay khi mo trang web
alert('Hi Javascript');

//hien thi thong bao trong console
console.log('Day la 1 dong log');
console.log(fullName);

//tạo ra bảng xác nhận
confirm('xác nhận bạn trên 18+');

//tạo bảng xác nhận có khung nhập thông tin
prompt('Xác nhận bạn đủ 18 ');

// chay doan code sau 1 khoang thoi gian duoc an dinh va chi chay 1 lan (tinh theo ms)
setTimeout(function () {
    alert('Thong bao ham setTimeout');
}, 1000);

//chay doan code sau 1 khoang thoi gian va lap di lap lai (tinh theo ms)
setInterval(function () {
    console.log('Day la so random '+Math.random());
},10000)