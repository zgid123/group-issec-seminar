---
layout: shifting-intro
hideInToc: true
clicks: 2
transition: slide-left
---

# Agent2Tool & Supply Chain

<div v-if="$clicks < 2" class="seminar-content">
  <p class="seminar-lead"><strong>Hành động bị tấn công từ hai phía: lệnh agent gửi đi và chính công cụ nhận lệnh</strong></p>
  <ActionThreatDiagram />
  <div class="seminar-two seminar-below">
    <ContentCard title="Agent2Tool:" tone="gray">
      <p>tool được cấp quyền quá rộng nên chạy lệnh nguy hiểm không hỏi người dùng; dữ liệu cá nhân lộ cho bên thứ ba.</p>
    </ContentCard>
    <ContentCard title="Supply chain:" tone="gray">
      <p>tool hoặc plugin đã bị nhiễm. Ví dụ: trang web độc (WIPI), phụ đề YouTube bị sửa, plugin Webpilot lấy lịch sử chat.</p>
    </ContentCard>
  </div>
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

Theo sơ đồ: agent soạn lệnh, tool thực thi, trả kết quả, rồi agent trả lời. Rủi ro có thể nằm ở lệnh quá quyền, dữ liệu trao đổi hoặc chính tool đã bị xâm phạm.

[click]

ToolEmu giúp thử tình huống trong môi trường mô phỏng; PrivacyAsst bảo vệ dữ liệu bằng mã hóa nhưng tăng chi phí. Mô phỏng vẫn phụ thuộc độ sát thực tế, còn tool cần được kiểm tra riêng.

Nguồn: Deng et al. (2025), mục 3.3.
-->
