---
layout: shifting-intro
hideInToc: true
clicks: 2
transition: slide-left
---

# Agent2Tool & Supply Chain

<div v-if="$clicks < 2" class="seminar-content">
  <p class="seminar-lead"><strong>Khi agent gọi tool, có ba điểm bị tấn công: lệnh gửi đi, chính tool, và dữ liệu trả về.</strong></p>
  <ActionThreatDiagram />
</div>
<div v-else>
  <TableComparison dense :spacing="2" :animation="false" row-header-width="24%">
    <TableComparisonColumns>
      <TableComparisonColumn>Phương pháp</TableComparisonColumn>
      <TableComparisonColumn>Điểm mạnh</TableComparisonColumn>
      <TableComparisonColumn>Điểm yếu / giới hạn</TableComparisonColumn>
    </TableComparisonColumns>
    <TableComparisonRows>
      <TableComparisonRow>
        <template #heading>ToolEmu<span class="defense-citation"><a href="https://arxiv.org/abs/2309.15817" target="_blank" rel="noopener noreferrer">Ruan et al., 2024</a></span></template>
        <TableComparisonCell align="left">LLM mô phỏng thực thi tool; evaluator tìm hành vi rủi ro.</TableComparisonCell>
        <TableComparisonCell align="left">Tạo tình huống rủi ro để đánh giá tool mà không dựng tool thật.</TableComparisonCell>
        <TableComparisonCell align="left">Mô phỏng chưa phản ánh hoàn toàn việc thực thi tool thật.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>PrivacyAsst<span class="defense-citation"><a href="https://ieeexplore.ieee.org/document/10458329" target="_blank" rel="noopener noreferrer">Zhang et al., 2024</a></span></template>
        <TableComparisonCell align="left">Hai hướng: mã hóa đồng cấu và trộn thuộc tính đầu vào.</TableComparisonCell>
        <TableComparisonCell align="left">Cung cấp hai cách bảo vệ dữ liệu khi tương tác với tool.</TableComparisonCell>
        <TableComparisonCell align="left">Mới minh họa bằng hai case study; phải chọn cách theo tác vụ.</TableComparisonCell>
      </TableComparisonRow>
    </TableComparisonRows>
  </TableComparison>
</div>

<!--
[click]

Đọc sơ đồ từ trái sang phải: người dùng giao việc, agent soạn lệnh (action input) gửi cho tool, tool thực thi và trả kết quả (observation), agent tổng hợp thành câu trả lời.

(1) Agent2Tool chủ động: lệnh do LLM sinh ra có thể cần quyền quá rộng, chạy lệnh rủi ro mà không hỏi người dùng (ToolEmu).
(2) Supply chain: bản thân tool có lỗ hổng hoặc đã bị xâm phạm, ví dụ trang web độc của WIPI, phụ đề YouTube bị sửa, plugin Webpilot lấy lịch sử chat.
(3) Agent2Tool bị động: dữ liệu trao đổi giữa agent và tool có thể bị chặn và lộ cho bên thứ ba (đã ghi nhận ở HuggingGPT, ToolFormer).

[click]

Bảng tiếp theo giới thiệu phương pháp, điểm mạnh và điểm yếu / giới hạn. Với mỗi hàng, giải thích cơ chế trước, sau đó nêu kết quả hoặc khả năng đã được mô tả, rồi chốt phạm vi bằng chứng. Giới hạn đánh giá không đồng nghĩa phương pháp thất bại ở mọi bối cảnh. Các chi tiết và nguồn kiểm tra nằm bên dưới.
-->
