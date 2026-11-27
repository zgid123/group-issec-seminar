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

---

KIỂM CHỨNG NGUỒN — 7. Quản lý bộ nhớ an toàn
Cập nhật: 2026-11-26. Số trang dưới đây là trang PDF của survey, tương ứng 182:n; không phải số slide.

NGUỒN TỔNG QUAN
Zehang Deng, Yongjian Guo, Changzhou Han, Wanlun Ma, Junwu Xiong, Sheng Wen, Yang Xiang (2025). AI Agents Under Threat: A Survey of Key Security Challenges and Future Pathways. ACM Computing Surveys 57(7), Article 182, February 2025. https://doi.org/10.1145/3716628
Vị trí: §5: Robust memory management, trang 26, 27.
Mở PDF: https://dl.acm.org/doi/pdf/10.1145/3716628#page=26

NỘI DUNG / VÍ DỤ / SƠ ĐỒ
• Benchmark và truy xuất bộ nhớ an toàn theo survey.
  Nguồn: Survey §5: Robust memory management, tr. 26, 27.
• Các câu hỏi nghiên cứu được diễn đạt lại để thảo luận; không phải kết quả đã được chứng minh.
  Nguồn: Survey §5: Robust memory management, tr. 26, 27.
• Ghi chú thuyết trình nhắc lại PoisonedRAG từ phần long-term memory để minh họa dữ liệu truy xuất bị đầu độc.
  Nguồn: Wei Zou et al. (2024), mục tài liệu số 235 trong survey.
  Vị trí kiểm tra: Abstract; survey §4.3.2, pp.23–24; liên hệ hướng quản lý bộ nhớ ở §5.

THÔNG TIN ĐẦY ĐỦ CỦA TỪNG NGUỒN DÙNG TRÊN SLIDE

Wei Zou, Runpeng Geng, Binghui Wang, and Jinyuan Jia (2024). PoisonedRAG: Knowledge Corruption Attacks to Retrieval-Augmented Generation of Large Language Models.
Bản gốc: https://arxiv.org/pdf/2402.07867
Truy ngược survey: mục tài liệu số 235, bibliography tr. 36; xuất hiện trong nội dung survey tr. 6, 7, 24, 26. https://dl.acm.org/doi/pdf/10.1145/3716628#page=36
Mục ghi trong survey: Wei Zou, Runpeng Geng, Binghui Wang, and Jinyuan Jia (2024). PoisonedRAG: Knowledge poisoning attacks to retrieval-augmented generation of large language models. Retrieved from https://arxiv.org/pdf/2402.07867
Mức kiểm chứng: Đã đối chiếu abstract gốc; không phải kiểm tra toàn văn hoặc tái lập thí nghiệm.
Khác biệt phiên bản/định danh: Tên trong survey: “Knowledge poisoning attacks…”. Trang arXiv hiện dùng “Knowledge Corruption Attacks…”. Cùng arXiv:2402.07867; số liệu 5 văn bản/câu hỏi và 90% đã đối chiếu abstract.
-->
