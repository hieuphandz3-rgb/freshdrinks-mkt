function renderAdminStats() {
  const orders = getOrders();
  const products = getProducts();

  const totalRev = orders.reduce((s, o) => s + o.total, 0);
  const totalSold = orders.reduce((s, o) => s + o.items.reduce((sum, i) => sum + i.qty, 0), 0);
  const totalStock = products.reduce((s, p) => s + p.quantity, 0);

  if (document.getElementById("statRev")) document.getElementById("statRev").innerText = `${totalRev.toLocaleString('vi-VN')} đ`;
  if (document.getElementById("statSold")) document.getElementById("statSold").innerText = `${totalSold} ly`;
  if (document.getElementById("statStock")) document.getElementById("statStock").innerText = `${totalStock} ly`;
}

function showOrderDetail(orderId) {
  const orders = getOrders();
  const order = orders.find(o => o.id === orderId);
  if (!order) return;

  const modal = document.getElementById("modalOverlay");
  modal.innerHTML = `
    <div class="modal-content" style="padding:24px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
        <h3 style="font-size:18px;">Chi Tiết Đơn Hàng: ${order.id}</h3>
        <button onclick="document.getElementById('modalOverlay').classList.remove('active')" style="border:none;background:none;font-size:24px;cursor:pointer;">&times;</button>
      </div>
      <p>Người nhận: <strong>${order.customer}</strong> (${order.phone})</p>
      <p>Địa chỉ giao hàng: <strong>${order.address || 'Tại quầy'}</strong></p>
      <p>Ngày đặt: <strong>${order.date}</strong></p>
      <hr style="margin:14px 0; border:none; border-top:1px solid #e5e7eb;"/>
      <h4 style="margin-bottom:8px;">Danh sách đồ uống:</h4>
      <div style="max-height:180px; overflow-y:auto;">
        ${order.items.map(i => `
          <div style="display:flex;justify-content:space-between;margin-bottom:8px;font-size:14px;">
            <span>${i.name} <strong>x${i.qty}</strong></span>
            <strong>${(i.price * i.qty).toLocaleString('vi-VN')} đ</strong>
          </div>
        `).join('')}
      </div>
      <hr style="margin:14px 0; border:none; border-top:1px solid #e5e7eb;"/>
      <h3 style="text-align:right;color:#b45309;">Tổng thanh toán: ${order.total.toLocaleString('vi-VN')} đ</h3>
    </div>
  `;
  modal.classList.add("active");
}