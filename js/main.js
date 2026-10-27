function updateCartBadge() {
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById("cartBadge");
  if (badge) badge.textContent = count;
}

function addToCart(productId, qty = 1) {
  const products = getProducts();
  const product = products.find(p => p.id == productId);
  if (!product) return;

  if (product.quantity <= 0) {
    alert("❌ Rất tiếc, sản phẩm này hiện đã hết hàng trong kho!");
    return;
  }

  const cart = getCart();
  const existing = cart.find(i => i.product.id == productId);

  if (existing) {
    if (existing.quantity + qty > product.quantity) {
      alert(`❌ Kho chỉ còn tối đa ${product.quantity} ly cho món này!`);
      return;
    }
    existing.quantity += qty;
  } else {
    cart.push({ product, quantity: qty });
  }

  saveCart(cart);
  updateCartBadge();
  alert(`✅ Đã thêm "${product.name}" vào giỏ hàng thành công!`);
}

// ==================== HERO SLIDER LOGIC ====================
function initHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll("#heroDots .dot");
  const prevBtn = document.getElementById("heroPrevBtn");
  const nextBtn = document.getElementById("heroNextBtn");

  // Nếu trang không có phần hero-slide (như các trang con), thoát hàm để không báo lỗi
  if (!slides || slides.length === 0) return;

  let currentIndex = 0;
  let slideInterval = null;

  function showSlide(index) {
    if (index >= slides.length) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = slides.length - 1;
    } else {
      currentIndex = index;
    }

    // Cập nhật hiển thị slide
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === currentIndex);
    });

    // Cập nhật chấm tròn vị trí
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }

  function startAutoPlay() {
    stopAutoPlay();
    slideInterval = setInterval(() => {
      showSlide(currentIndex + 1);
    }, 2000); // 1000ms =  giây đổi 1 lần
  }

  function stopAutoPlay() {
    if (slideInterval) {
      clearInterval(slideInterval);
      slideInterval = null;
    }
  }

  // Bấm nút chuyển tiếp (Next)
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      showSlide(currentIndex + 1);
      startAutoPlay();
    });
  }

  // Bấm nút lùi lại (Prev)
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      showSlide(currentIndex - 1);
      startAutoPlay();
    });
  }

  // Bấm vào các dấu chấm tròn
  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const idx = parseInt(e.target.dataset.index);
      showSlide(idx);
      startAutoPlay();
    });
  });

  // Tạm dừng khi người dùng rê chuột vào slider, chạy tiếp khi di chuột ra
  const container = document.querySelector(".hero-slider-container");
  if (container) {
    container.addEventListener("mouseenter", stopAutoPlay);
    container.addEventListener("mouseleave", startAutoPlay);
  }

  // Kích hoạt chạy tự động
  startAutoPlay();
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();
  if (typeof checkAuthStatus === "function") checkAuthStatus();
  initHeroSlider(); // Khởi tạo slider chuyển động
});
// Hàm Mua Ngay: Thêm vào giỏ rồi chuyển thẳng sang trang thanh toán checkout.html
function buyNow(productId, qty = 1) {
  const products = typeof getProducts === "function" ? getProducts() : [];
  const product = products.find(p => p.id == productId);
  if (!product) return;

  if (product.quantity <= 0) {
    alert("❌ Rất tiếc, sản phẩm này hiện đã hết hàng trong kho!");
    return;
  }

  const cart = typeof getCart === "function" ? getCart() : [];
  const existing = cart.find(i => i.product.id == productId);

  if (existing) {
    if (existing.quantity + qty > product.quantity) {
      alert(`❌ Kho chỉ còn tối đa ${product.quantity} ly cho món này!`);
      return;
    }
    existing.quantity += qty;
  } else {
    cart.push({ product, quantity: qty });
  }

  if (typeof saveCart === "function") saveCart(cart);
  if (typeof updateCartBadge === "function") updateCartBadge();

  // Chuyển thẳng sang trang thanh toán
  window.location.href = "checkout.html";
}