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
      <TableComparisonColumn>Cách phòng thủ</TableComparisonColumn>
      <TableComparisonColumn>Điểm mạnh</TableComparisonColumn>
      <TableComparisonColumn>Điểm yếu</TableComparisonColumn>
    </TableComparisonColumns>
    <TableComparisonRows>
      <TableComparisonRow>
        <template #heading>ToolEmu<span class="defense-citation">Ruan et al., 2024</span></template>
        <TableComparisonCell align="left">Mô phỏng tool để đánh giá lệnh trong sandbox.</TableComparisonCell>
        <TableComparisonCell align="left">Phát hiện tình huống rủi ro trước triển khai.</TableComparisonCell>
        <TableComparisonCell align="left">Phụ thuộc emulator; không tự chặn mọi lệnh thật.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>PrivacyAsst<span class="defense-citation">Zhang et al., 2024</span></template>
        <TableComparisonCell align="left">Mã hóa đồng cấu; thay thế dữ liệu thuộc tính.</TableComparisonCell>
        <TableComparisonCell align="left">Hạn chế lộ thông tin riêng tư qua tool.</TableComparisonCell>
        <TableComparisonCell align="left">Tăng chi phí tính toán và truyền thông.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>Trusted tools &amp; auditing<span class="defense-citation">Deng et al., 2025 · survey</span></template>
        <TableComparisonCell align="left">Chỉ dùng tool tin cậy và kiểm toán chặt chuỗi cung ứng.</TableComparisonCell>
        <TableComparisonCell align="left">Thu hẹp thành phần được phép thực thi.</TableComparisonCell>
        <TableComparisonCell align="left">Còn ít nghiên cứu; tool đã duyệt vẫn có thể bị xâm phạm.</TableComparisonCell>
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

ToolEmu giúp thử tình huống trong môi trường mô phỏng; PrivacyAsst bảo vệ dữ liệu bằng mã hóa nhưng tăng chi phí. Mô phỏng vẫn phụ thuộc độ sát thực tế, còn tool cần được kiểm tra riêng.

Nguồn: Deng et al. (2025), mục 3.3.
-->
