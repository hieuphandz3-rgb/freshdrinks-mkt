const API_BASE = "http://localhost:3001";

// ==================== 1. SẢN PHẨM ====================
async function apiGetProducts() {
  try {
    const res = await fetch(`${API_BASE}/products`);
    return await res.json();
  } catch (err) {
    console.error("Lỗi lấy sản phẩm :", err);
    return [];
  }
}

async function apiAddProduct(productData) {
  try {
    const res = await fetch(`${API_BASE}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData)
    });
    return await res.json();
  } catch (err) {
    console.error("Lỗi thêm sản phẩm:", err);
  }
}

async function apiUpdateProduct(id, productData) {
  try {
    const res = await fetch(`${API_BASE}/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData)
    });
    return await res.json();
  } catch (err) {
    console.error("Lỗi sửa sản phẩm:", err);
  }
}

async function apiDeleteProduct(id) {
  try {
    await fetch(`${API_BASE}/products/${id}`, { method: "DELETE" });
  } catch (err) {
    console.error("Lỗi xóa sản phẩm:", err);
  }
}

// ==================== 2. DANH MỤC ====================
async function apiGetCategories() {
  try {
    const res = await fetch(`${API_BASE}/categories`);
    return await res.json();
  } catch (err) {
    console.error("Lỗi lấy danh mục:", err);
    return [];
  }
}

async function apiAddCategory(catData) {
  try {
    const res = await fetch(`${API_BASE}/categories`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(catData)
    });
    return await res.json();
  } catch (err) {
    console.error("Lỗi thêm danh mục:", err);
  }
}

async function apiUpdateCategory(id, catData) {
  try {
    const res = await fetch(`${API_BASE}/categories/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(catData)
    });
    return await res.json();
  } catch (err) {
    console.error("Lỗi sửa danh mục:", err);
  }
}

async function apiDeleteCategory(id) {
  try {
    await fetch(`${API_BASE}/categories/${id}`, { method: "DELETE" });
  } catch (err) {
    console.error("Lỗi xóa danh mục:", err);
  }
}

// ==================== 3. TÀI KHOẢN (USERS) ====================
async function apiGetUsers() {
  try {
    const res = await fetch(`${API_BASE}/users`);
    return await res.json();
  } catch (err) {
    return [];
  }
}

async function apiRegisterUser(userData) {
  try {
    const res = await fetch(`${API_BASE}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData)
    });
    return await res.json();
  } catch (err) {
    console.error("Lỗi đăng ký:", err);
  }
}

async function apiUpdateUserPassword(id, newUserData) {
  try {
    const res = await fetch(`${API_BASE}/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUserData)
    });
    return await res.json();
  } catch (err) {
    console.error(err);
  }
}

// ==================== 4. ĐƠN HÀNG (ORDERS) ====================
async function apiGetOrders() {
  try {
    const res = await fetch(`${API_BASE}/orders`);
    return await res.json();
  } catch (err) {
    return [];
  }
}

async function apiCreateOrder(orderData) {
  try {
    const res = await fetch(`${API_BASE}/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData)
    });
    return await res.json();
  } catch (err) {
    console.error("Lỗi đặt hàng:", err);
  }
}

// ==================== 5. BÀI VIẾT (ARTICLES) ====================
async function apiGetArticles() {
  try {
    const res = await fetch(`${API_BASE}/articles`);
    return await res.json();
  } catch (err) {
    console.error("Lỗi lấy bài viết:", err);
    return [];
  }
}

async function apiAddArticle(articleData) {
  try {
    const res = await fetch(`${API_BASE}/articles`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(articleData)
    });
    return await res.json();
  } catch (err) {
    console.error("Lỗi thêm bài viết:", err);
  }
}

async function apiUpdateArticle(id, articleData) {
  try {
    const res = await fetch(`${API_BASE}/articles/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(articleData)
    });
    return await res.json();
  } catch (err) {
    console.error("Lỗi sửa bài viết:", err);
  }
}

async function apiDeleteArticle(id) {
  try {
    await fetch(`${API_BASE}/articles/${id}`, { method: "DELETE" });
  } catch (err) {
    console.error("Lỗi xóa bài viết:", err);
  }
}

// ==================== 6. GIỎ HÀNG (LOCALSTORAGE) ====================
function getCart() {
  return JSON.parse(localStorage.getItem("fd_cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("fd_cart", JSON.stringify(cart));
}

// ==================== 7. BỔ SUNG: HÀM LẤY SẢN PHẨM & DANH MỤC CHO INDEX/MAIN ====================
function getProducts() {
  const local = localStorage.getItem("fd_products");
  return local ? JSON.parse(local) : [];
}

function getCategories() {
  const local = localStorage.getItem("fd_categories");
  return local ? JSON.parse(local) : [];
}