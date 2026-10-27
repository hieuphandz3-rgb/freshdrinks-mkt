// Lấy thông tin tài khoản đang đăng nhập
function getCurrentUser() {
  return JSON.parse(localStorage.getItem("fd_currentUser")) || null;
}

// Xử lý đăng xuất
function logoutUser() {
  if (confirm("Bạn có chắc chắn muốn đăng xuất tài khoản?")) {
    localStorage.removeItem("fd_currentUser");
    alert("✅ Đã đăng xuất thành công!");
    window.location.reload();
  }
}

// Kiểm tra và hiển thị trạng thái đăng nhập lên Header
function checkAuthStatus() {
  const user = getCurrentUser();
  const authLink = document.getElementById("authNavLink");
  if (!authLink) return;

  const parentLi = authLink.parentElement;

  if (user) {
    // Đã đăng nhập: đổi thành tên người dùng và thêm nút Đăng xuất
    parentLi.innerHTML = `
      <div style="display: inline-flex; align-items: center; gap: 10px;">
        <span style="color: var(--primary, #f9d342); font-weight: 700; font-size: 14px;">
          <i class="fa-regular fa-circle-user"></i> ${user.name}
        </span>
        <button onclick="logoutUser()" style="
          background: #ef4444; 
          color: #fff; 
          border: none; 
          padding: 4px 10px; 
          border-radius: 6px; 
          font-weight: 700; 
          font-size: 12px; 
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: 0.2s;
        " title="Đăng xuất khỏi hệ thống">
          <i class="fa-solid fa-arrow-right-from-bracket"></i> Đăng xuất
        </button>
      </div>
    `;
  } else {
    // Chưa đăng nhập: giữ nguyên link dẫn tới trang login
    authLink.textContent = "Tài khoản";
    authLink.href = "login.html";
  }
}

// Tự động kiểm tra trạng thái mỗi khi trang web tải xong
document.addEventListener("DOMContentLoaded", checkAuthStatus);