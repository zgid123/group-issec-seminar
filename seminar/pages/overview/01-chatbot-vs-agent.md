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
      - Khi chatbot bị lừa, nó nói sai.
    </div>
    <div>
      - Khi agent bị lừa, nó <strong>làm sai thật:</strong> gửi email, xóa file, chạy lệnh, lộ dữ liệu.
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
[click]

Chatbot chủ yếu trả lời yêu cầu của người dùng.

[click]

Agent còn gọi công cụ và thực hiện công việc. Sau mỗi bước, nó xem kết quả rồi quyết định làm gì tiếp.

[click]

Trả lời sai và làm sai có hậu quả khác nhau. Với agent, sai sót có thể dẫn đến gửi nhầm email, xóa file hoặc làm lộ dữ liệu.
-->
