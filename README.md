# ☕ FreshDrinks Artisan Coffee & Tea

Website thương mại điện tử cho chuỗi cà phê & trà trái cây, kèm **trang quản trị (Admin)** và **hệ thống cấu hình SEO** hoàn chỉnh.

> Bài tập môn **Java nâng cao (WEB2053)** — Frontend HTML/CSS/JavaScript thuần + `json-server` làm backend giả lập.

---

## 📋 Chức năng

### Phía khách hàng
| Trang | Mô tả |
|---|---|
| `index.html` | Trang chủ — hero slider 3 slide, sản phẩm chia nhóm (Bán chạy / Đang Hot / Tiêu chuẩn) có phân trang |
| `products.html` | Thực đơn đầy đủ, lọc theo danh mục, tìm kiếm, sắp xếp |
| `detail.html` | Chi tiết đồ uống — 3 tab (Mô tả / Thành phần / Hướng dẫn sử dụng), chọn số lượng, Mua ngay |
| `cart.html` | Giỏ hàng — tăng/giảm số lượng, xóa món, tính tổng tiền |
| `checkout.html` | Thanh toán — nhập thông tin giao hàng, kiểm tra tồn kho, tạo đơn |
| `success.html` | Xác nhận đặt hàng thành công |
| `login.html` | Đăng ký / Đăng nhập / Quên mật khẩu |

### Phía quản trị (`/admin`)
| Trang | Mô tả |
|---|---|
| `index.html` | Dashboard — tổng doanh thu, số ly đã bán, tồn kho, đơn hàng gần đây |
| `categories.html` | CRUD danh mục đồ uống |
| `products.html` | CRUD sản phẩm + thư viện ảnh mẫu + xem trước ảnh |
| `users.html` | Danh sách khách hàng, đếm số đơn đã đặt, xóa tài khoản |
| `orders.html` | Danh sách đơn hàng + modal xem chi tiết từng đơn |
| `seo.html` | **Cấu hình SEO & Facebook** — 4 module (xem bên dưới) |

---

## 🔍 Hệ thống cấu hình SEO (`admin/seo.html`)

Trang được tổ chức thành **4 module độc lập**, mỗi module có thẻ điều hướng + tab riêng:

### 1. Tối ưu SEO hệ thống
- Meta Title / Meta Description / Focus Keyword
- `robots.txt` (4 chế độ: index-follow, noindex-nofollow, …)
- Canonical URL, Sitemap XML, mã xác minh Google Search Console
- Google SERP preview cập nhật real-time
- Sinh sẵn block thẻ `<meta>` để dán vào `<head>`

### 2. Cấu hình SEO sản phẩm
- Nạp **21 sản phẩm** thật từ `db.json`, chọn từng món để tối ưu
- Meta Title / Description / Focus Keyword / Canonical Slug
- **Slug tự động bỏ dấu tiếng Việt** (`Trà Đào Cam Sả` → `tra-dao-cam-sa`)
- Schema Markup: `Product` / `MenuItem` / `FoodEstablishment` (kèm giá & tồn kho)
- Preview Google + Facebook, nút **Tự Động Sinh SEO**
- Bảng tổng quan 21 sản phẩm kèm điểm SEO từng món

### 3. Cấu hình SEO bài viết
- Nạp **5 bài viết blog** từ `db.json`
- Meta Title / Description / Keyword / Slug `/blog/...`
- Tác giả (E-E-A-T), Danh mục, Tags, Ảnh OG
- Schema: `BlogPosting` / `Article` / `NewsArticle` / `HowTo`
- Bài **draft** → tự sinh `noindex, follow`; bài **published** → `index, follow`
- Bảng tổng quan hiển thị trạng thái Đã đăng / Nháp

### 4. Cấu hình chức năng Facebook
- Facebook Pixel ID + Conversions API Token
- **6 sự kiện theo dõi bật/tắt được**: PageView, ViewContent, AddToCart, InitiateCheckout, Purchase, Search — mã Pixel sinh ra thay đổi theo lựa chọn
- Open Graph: `og:title`, `og:type`, `og:description`, `og:image`, `og:url`
- Fanpage URL, Facebook App ID
- Preview thẻ chia sẻ + block mã Pixel/OG hoàn chỉnh

### Điểm SEO tự động (chuẩn Rank Math)
Mỗi module có thanh điểm **0–100** với checklist ✅/❌ chi tiết theo trọng số:

| Tiêu chí | Điểm |
|---|---|
| Meta Title dài 45–65 ký tự | 10–20 |
| Meta Title chứa từ khóa chính | 10–15 |
| Meta Title chứa thương hiệu | 5–15 |
| Meta Description dài 120–160 ký tự | 10–20 |
| Meta Description chứa từ khóa | 10–15 |
| Slug chuẩn SEO | 10 |
| Ảnh OG | 10–15 |
| Tác giả / Tags / Schema | 10–15 |

**Cấu hình được lưu** vào `localStorage` (key `fd_seo_config_v2`), có nút **Xuất JSON**.

---

## 🛠 Công nghệ

- **HTML5 / CSS3** — Grid, Flexbox, biến CSS, responsive
- **JavaScript thuần (ES6+)** — không framework, không build step
- **json-server** — backend REST giả lập từ `db.json`
- **Font Awesome 6.5** — icon
- **Unsplash** — ảnh minh hoạ

---

## 📁 Cấu trúc thư mục

```
ASM copy/
├── index.html              # Trang chủ
├── products.html           # Thực đơn
├── detail.html             # Chi tiết sản phẩm
├── cart.html               # Giỏ hàng
├── checkout.html           # Thanh toán
├── success.html            # Đặt hàng thành công
├── login.html              # Đăng nhập / Đăng ký
├── db.json                 # Database (categories, products, articles, users, orders)
├── admin/
│   ├── index.html          # Dashboard
│   ├── categories.html     # Quản lý danh mục
│   ├── products.html       # Quản lý sản phẩm
│   ├── users.html          # Quản lý khách hàng
│   ├── orders.html         # Quản lý đơn hàng
│   └── seo.html            # ⭐ Cấu hình SEO & Facebook (4 module)
├── css/
│   ├── style.css           # Style phía khách hàng
│   └── admin.css           # Style phía quản trị
└── js/
    ├── data.js             # Lớp API (products, categories, users, orders, articles)
    ├── auth.js             # Đăng nhập / đăng xuất
    ├── main.js             # Giỏ hàng, tiện ích
    └── admin.js            # Thống kê, modal đơn hàng
```

---

## 🚀 Cách chạy

### Bước 1 — Khởi động json-server

```bash
npx json-server --watch db.json --port 3001
```

> Nếu cổng 3001 bận, đổi sang `--port 3000` và sửa `API_BASE` trong `js/data.js`.

### Bước 2 — Mở website

Mở `index.html` bằng trình duyệt, **hoặc** chạy static server:

```bash
npx serve .
# hoặc
python -m http.server 5500
```

> ⚠️ Nên chạy qua HTTP server thay vì mở trực tiếp `file://` — trình duyệt sẽ chặn `fetch()` tới `db.json` do chính sách CORS.

### Bước 3 — Truy cập Admin

```
http://localhost:5500/admin/index.html
```

Tài khoản mẫu trong `db.json`:

| Email | Mật khẩu |
|---|---|
| `an.nguyen@gmail.com` | `123` |

---

## 🔌 API endpoints (json-server)

| Method | Endpoint | Mô tả |
|---|---|---|
| GET | `/products` | Danh sách sản phẩm |
| POST | `/products` | Thêm sản phẩm |
| PUT | `/products/:id` | Cập nhật sản phẩm |
| DELETE | `/products/:id` | Xóa sản phẩm |
| GET/POST/PUT/DELETE | `/categories` | Danh mục |
| GET/POST/PUT/DELETE | `/articles` | Bài viết blog |
| GET/POST/PUT | `/users` | Tài khoản |
| GET/POST | `/orders` | Đơn hàng |

---

## 📝 Ghi chú

- Dữ liệu giỏ hàng lưu ở `localStorage` key `fd_cart`
- Phiên đăng nhập lưu ở `localStorage` key `fd_currentUser`
- Cấu hình SEO lưu ở `localStorage` key `fd_seo_config_v2`
- Trang SEO có **3 tầng dữ liệu dự phòng**: json-server → `db.json` → dữ liệu nhúng sẵn, nên không bao giờ hiển thị trống

---

© 2026 FreshDrinks Artisan Coffee & Tea
