---
layout: shifting-intro
hideInToc: true
transition: slide-left
---

# 7. Quản lý bộ nhớ an toàn

<div class="seminar-content">
  <p class="seminar-lead">Robust memory management</p>
  <div class="seminar-two">
    <ContentCard title="Khoảng trống">
      <p>Dữ liệu độc có thể bị truy xuất lại; thông tin không đồng đều giữa các agent tạo thêm rủi ro.</p>
    </ContentCard>
    <ContentCard title="Hướng nghiên cứu" tone="gray">
      <p>Phát triển benchmark và cơ chế truy xuất để quản lý bộ nhớ an toàn, hiệu quả.</p>
    </ContentCard>
  </div>
  <Takeaway class="mt-6">
    <strong>Câu hỏi nghiên cứu:</strong> Làm sao tránh đưa dữ liệu đã bị đầu độc trở lại quá trình suy luận?
  </Takeaway>
</div>

<!--
GHI CHÚ THUYẾT TRÌNH

[click]

Lưu được nhiều thông tin chưa đủ; phải kiểm soát những gì được lấy ra dùng lại. Dữ liệu truy xuất bị đầu độc có thể ảnh hưởng câu trả lời, như ví dụ PoisonedRAG ở phần long-term memory. Survey cũng đặt vấn đề chênh lệch thông tin giữa các agent.
-->
