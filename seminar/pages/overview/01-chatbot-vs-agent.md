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
  <div v-click="3" class="comparison-takeaway">
    <strong>Vì sao điều này quan trọng:</strong>
    <div>- Khi chatbot bị lừa, nó nói sai.</div>
    <div>- Khi agent bị lừa, nó <strong>làm sai thật:</strong> gửi email, xóa file, chạy lệnh, lộ dữ liệu.</div>
  </div>
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

.comparison-takeaway {
  padding: 14px 18px;
  border-radius: 12px;
  color: #27232e;
  background: #fbe8e3;
  font-size: 18px;
  line-height: 1.35;
}
</style>

<!--
Nguồn nguyên bản: ../refs/hoang-slides.pptx, slide 3 (đếm từ 1).
Định nghĩa của paper: AI agent là phần mềm tự động thực hiện nhiệm vụ hoặc ra quyết định dựa trên mục tiêu và dữ liệu đầu vào. Nó tự nhận đầu vào, tự suy luận và lên kế hoạch, rồi tự hành động.
So sánh đơn giản: chatbot giống người tư vấn chỉ nói, còn agent giống trợ lý được giao chìa khóa: tự đi làm việc rồi báo lại.
Điểm khác quan trọng là vòng lặp: agent làm một bước, quan sát kết quả (observation), rồi quyết định bước tiếp theo. Vòng lặp này làm agent mạnh, nhưng cũng tạo nhiều chỗ để tấn công hơn.
Paper gộp cả hai loại agent: agent dựa trên LLM (có thể đa phương thức: ảnh, giọng nói) và agent dựa trên học tăng cường (RL).
Tái tạo nội dung và sơ đồ bằng HTML/CSS trong Vue để chỉnh sửa trực tiếp trong Slidev.
-->
