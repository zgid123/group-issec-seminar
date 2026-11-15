---
layout: shifting-intro
hideInToc: true
transition: slide-left
---

# Threat models

<TableComparison dense row-header-width="32%">
  <TableComparisonColumns>
    <TableComparisonColumn width="28%">Vùng rủi ro</TableComparisonColumn>
    <TableComparisonColumn width="40%">Tác động tiêu biểu</TableComparisonColumn>
  </TableComparisonColumns>
  <TableComparisonRows>
    <TableComparisonRow>
      <template #heading>Malicious user</template>
      <TableComparisonCell>Cả 6 nhóm rủi ro</TableComparisonCell>
      <TableComparisonCell align="left">Đổi mục tiêu, lộ dữ liệu</TableComparisonCell>
    </TableComparisonRow>
    <TableComparisonRow>
      <template #heading>Malicious developer</template>
      <TableComparisonCell>Perception</TableComparisonCell>
      <TableComparisonCell align="left">Phản hồi độc hại, sai lệch</TableComparisonCell>
    </TableComparisonRow>
    <TableComparisonRow>
      <template #heading>Malicious plugin provider</template>
      <TableComparisonCell>Brain</TableComparisonCell>
      <TableComparisonCell align="left">Thông tin sai, công cụ độc hại</TableComparisonCell>
    </TableComparisonRow>
    <TableComparisonRow>
      <template #heading>Malicious data provider</template>
      <TableComparisonCell>Brain · Environment</TableComparisonCell>
      <TableComparisonCell align="left">Đầu ra sai, nhiễm/lộ dữ liệu</TableComparisonCell>
    </TableComparisonRow>
    <TableComparisonRow>
      <template #heading>LLM deployment</template>
      <TableComparisonCell>Brain · Environment</TableComparisonCell>
      <TableComparisonCell align="left">Ảo giác, giảm hiệu năng</TableComparisonCell>
    </TableComparisonRow>
    <TableComparisonRow>
      <template #heading>Agent deployment</template>
      <TableComparisonCell>Agent2Agent</TableComparisonCell>
      <TableComparisonCell align="left">Lừa dối, giảm hiệu năng</TableComparisonCell>
    </TableComparisonRow>
  </TableComparisonRows>
</TableComparison>

<!--
[click]

Risk Source cho biết rủi ro nằm ở đâu. Threat Model cho biết bên tấn công hoặc bối cảnh được nghiên cứu.

Bốn hàng đầu là các bên có thể cố tình gây hại. Hai hàng deployment là bối cảnh triển khai, không phải hai loại kẻ tấn công. Bảng tổng hợp nhiều nghiên cứu; không có nghĩa một đối thủ làm được tất cả những việc này cùng lúc.

Nguồn: Deng et al. (2025), Bảng 1.
-->
