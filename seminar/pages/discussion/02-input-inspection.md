---
layout: shifting-intro
hideInToc: true
transition: slide-left
---

# 1. Kiểm tra đầu vào nhanh và chính xác

<div class="seminar-content">
  <p class="seminar-lead">Efficient and effective input inspection</p>
  <div class="seminar-two">
    <ContentCard title="Khoảng trống">
      <p>Phát hiện còn bỏ sót; kiểm tra tốn thời gian khiến khó dùng trong thực tế.</p>
    </ContentCard>
    <ContentCard title="Hướng nghiên cứu" tone="gray">
      <p>Tự động kiểm tra theo thời gian thực, cân bằng độ chính xác và chi phí xử lý.</p>
    </ContentCard>
  </div>
  <Takeaway class="mt-6">
    <strong>Câu hỏi nghiên cứu:</strong> Làm sao phát hiện lệnh độc nhanh mà vẫn xử lý đúng yêu cầu hợp lệ?
  </Takeaway>
</div>

<!--
GHI CHÚ THUYẾT TRÌNH

[click]

Hướng nghiên cứu là cải thiện cả độ chính xác lẫn tốc độ kiểm tra đầu vào. Một cơ chế kiểm tra cần phát hiện được lệnh độc nhưng vẫn xử lý được yêu cầu hợp lệ với chi phí phù hợp. Đây là hướng nghiên cứu survey đề xuất, không phải kết quả của một detector cụ thể.

---

KIỂM CHỨNG NGUỒN — 1. Kiểm tra đầu vào nhanh và chính xác
Cập nhật: 2026-11-26. Số trang dưới đây là trang PDF của survey, tương ứng 182:n; không phải số slide.

NGUỒN TỔNG QUAN
Zehang Deng, Yongjian Guo, Changzhou Han, Wanlun Ma, Junwu Xiong, Sheng Wen, Yang Xiang (2025). AI Agents Under Threat: A Survey of Key Security Challenges and Future Pathways. ACM Computing Surveys 57(7), Article 182, February 2025. https://doi.org/10.1145/3716628
Vị trí: §5: Efficient and effective input inspection, trang 24.
Mở PDF: https://dl.acm.org/doi/pdf/10.1145/3716628#page=24

NỘI DUNG / VÍ DỤ / SƠ ĐỒ
• Khoảng trống tốc độ/độ chính xác và hướng kiểm tra tự động; không dùng ASR của Maatphor làm độ chính xác detector.
  Nguồn: Survey §5: Efficient and effective input inspection, tr. 24.
• Các câu hỏi nghiên cứu được diễn đạt lại để thảo luận; không phải kết quả đã được chứng minh.
  Nguồn: Survey §5: Efficient and effective input inspection, tr. 24.

THÔNG TIN ĐẦY ĐỦ CỦA TỪNG NGUỒN DÙNG TRÊN SLIDE
Slide này tổng hợp trực tiếp survey; không sử dụng paper gốc riêng để minh chứng kết quả.
-->
