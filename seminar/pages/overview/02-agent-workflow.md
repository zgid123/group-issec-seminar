---
layout: shifting-intro
hideInToc: true
transition: slide-left
---

# Cấu trúc AI agent

<AgentWorkflowDiagram />

<!--
Nguồn nguyên bản: ../refs/hoang-slides.pptx, slide 5 (đếm từ 1).
Đây là khung khái niệm thống nhất (unified conceptual framework) của paper, cũng là "bản đồ" cho toàn bộ phần sau.
Bên trong một agent (intra-execution) có ba khối, giống con người:
- Perception là "mắt, tai": nhận đầu vào nhiều dạng và chuẩn bị prompt cho bộ não.
- Brain là "bộ não": chính là LLM, làm suy luận (reasoning), lập kế hoạch (planning), ra quyết định chọn tool.
- Action là "tay": gọi tool, API để làm từng việc con.
Bên ngoài (interaction): agent làm việc với môi trường, với agent khác, và với bộ nhớ. Paper xếp bộ nhớ vào nhóm "bên ngoài" vì việc truy xuất bộ nhớ có rủi ro riêng.
Tái tạo nội dung và sơ đồ bằng HTML/CSS trong Vue để chỉnh sửa trực tiếp trong Slidev.
-->
