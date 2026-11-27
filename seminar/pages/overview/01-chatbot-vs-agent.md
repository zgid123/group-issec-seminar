---
layout: shifting-intro
hideInToc: true
transition: slide-left
---

# Chatbot và AI agent

<div class="chatbot-agent-comparison">
  <div class="comparison-row">
    <b class="comparison-label chatbot-label">Chatbot</b>
    <ChatbotDiagram />
  </div>
  <div v-click="2" class="comparison-row">
    <b class="comparison-label agent-label">AI agent</b>
    <AgentDiagram />
  </div>
  <Takeaway v-click="3">
    <strong>Vì sao điều này quan trọng:</strong>
    <div>
      - Với chatbot chỉ sinh văn bản, sai sót nằm ở câu trả lời.
    </div>
    <div>
      - Khi agent có quyền dùng tool, sai sót có thể thành <strong>hành động:</strong> gửi email, xóa file, chạy lệnh, lộ dữ liệu.
    </div>
  </Takeaway>
</div>

<style>
.chatbot-agent-comparison {
  display: grid;
  gap: 28px;
  margin-top: 24px;
}

.comparison-row {
  display: grid;
  grid-template-columns: 110px minmax(0, 1fr);
  align-items: start;
}

.comparison-label {
  padding-top: 17px;
  font-size: 20px;
  line-height: 1.2;
}

.chatbot-label {
  color: #6c6678;
}

.agent-label {
  color: #75518a;
}

</style>

<!--
GHI CHÚ THUYẾT TRÌNH

[click]

Ở đây so sánh chatbot chỉ sinh văn bản với agent có quyền gọi công cụ và hành động.

[click]

Agent còn gọi công cụ và thực hiện công việc. Sau mỗi bước, nó xem kết quả rồi quyết định làm gì tiếp.

[click]

Trả lời sai và làm sai có hậu quả khác nhau. Với agent, sai sót có thể dẫn đến gửi nhầm email, xóa file hoặc làm lộ dữ liệu.

---

KIỂM CHỨNG NGUỒN — Chatbot và AI agent
Cập nhật: 2026-11-26. Số trang dưới đây là trang PDF của survey, tương ứng 182:n; không phải số slide.

NGUỒN TỔNG QUAN
Zehang Deng, Yongjian Guo, Changzhou Han, Wanlun Ma, Junwu Xiong, Sheng Wen, Yang Xiang (2025). AI Agents Under Threat: A Survey of Key Security Challenges and Future Pathways. ACM Computing Surveys 57(7), Article 182, February 2025. https://doi.org/10.1145/3716628
Vị trí: §1; §2.1, trang 1, 2, 4, 5.
Mở PDF: https://dl.acm.org/doi/pdf/10.1145/3716628#page=1

NỘI DUNG / VÍ DỤ / SƠ ĐỒ
• So sánh chatbot chỉ sinh văn bản với agent có quyền hành động; gửi email/xóa file là ví dụ minh họa, không phải số liệu.
  Nguồn: Survey §1; §2.1, tr. 1, 2, 4, 5.

THÔNG TIN ĐẦY ĐỦ CỦA TỪNG NGUỒN DÙNG TRÊN SLIDE
Slide này tổng hợp trực tiếp survey; không sử dụng paper gốc riêng để minh chứng kết quả.
-->
