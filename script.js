// Khi cửa sổ trình duyệt đã tải xong toàn bộ tài nguyên
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const body = document.body;

    // Bước 1: Khóa cuộn trang ngay khi vừa vào
    body.classList.add('stop-scrolling');

    // Bước 2: Đợi đúng 2000ms (2 giây)
    setTimeout(() => {
        // Thêm class để kích hoạt hiệu ứng mờ dần trong CSS
        preloader.classList.add('fade-out');

        // Bước 3: Sau khi hiệu ứng mờ kết thúc, cho phép cuộn trang trở lại
        setTimeout(() => {
            body.classList.remove('stop-scrolling');
        }, 800); // Đợi thêm 0.8s khớp với thời gian transition của CSS
        
    }, 1500);
});


