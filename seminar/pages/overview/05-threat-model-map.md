---
layout: shifting-intro
hideInToc: true
transition: slide-left
---

# Threat models: ví dụ trong survey

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
GHI CHÚ THUYẾT TRÌNH

[click]

Risk Source cho biết rủi ro nằm ở đâu. Threat Model cho biết bên tấn công hoặc bối cảnh được nghiên cứu.

Bốn hàng đầu là các bên có thể cố tình gây hại. Hai hàng deployment là bối cảnh triển khai, không phải hai loại kẻ tấn công. Bảng tổng hợp nhiều nghiên cứu; không có nghĩa một đối thủ làm được tất cả những việc này cùng lúc.

---

KIỂM CHỨNG NGUỒN — Threat models: ví dụ trong survey
Cập nhật: 2026-11-26. Số trang dưới đây là trang PDF của survey, tương ứng 182:n; không phải số slide.

NGUỒN TỔNG QUAN
Zehang Deng, Yongjian Guo, Changzhou Han, Wanlun Ma, Junwu Xiong, Sheng Wen, Yang Xiang (2025). AI Agents Under Threat: A Survey of Key Security Challenges and Future Pathways. ACM Computing Surveys 57(7), Article 182, February 2025. https://doi.org/10.1145/3716628
Vị trí: Table 1, trang 6.
Mở PDF: https://dl.acm.org/doi/pdf/10.1145/3716628#page=6

NỘI DUNG / VÍ DỤ / SƠ ĐỒ
• Bảng quyền truy cập, mục tiêu và nạn nhân là các ví dụ trong Table 1, không phải định nghĩa đầy đủ của mỗi loại attacker.
  Nguồn: Survey Table 1, tr. 6.

THÔNG TIN ĐẦY ĐỦ CỦA TỪNG NGUỒN DÙNG TRÊN SLIDE
Slide này tổng hợp trực tiếp survey; không sử dụng paper gốc riêng để minh chứng kết quả.
-->
