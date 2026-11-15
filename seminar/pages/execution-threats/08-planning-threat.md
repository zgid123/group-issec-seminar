---
layout: shifting-intro
hideInToc: true
clicks: 2
transition: slide-left
---

# Planning Threat

<div v-if="$clicks < 2" class="seminar-content">
  <p class="seminar-lead"><strong>Chain-of-thought có thể khuếch đại một lỗi nhỏ ở bước đầu thành thất bại lớn</strong></p>
  <PlanningStructuresDiagram />
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
        <template #heading>TrustAgent<span class="defense-citation">Hua et al., 2024</span></template>
        <TableComparisonCell align="left">Áp dụng quy tắc an toàn trước, trong và sau lập kế hoạch.</TableComparisonCell>
        <TableComparisonCell align="left">Kiểm soát nhiều thời điểm trong quá trình lập kế hoạch.</TableComparisonCell>
        <TableComparisonCell align="left">Phụ thuộc quy tắc và khả năng áp dụng đúng của mô hình.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>Formal-LLM<span class="defense-citation">Li et al., 2024</span></template>
        <TableComparisonCell align="left">Chuyển CFG thành PDA; chỉ chọn hành động hợp lệ ở trạng thái hiện tại.</TableComparisonCell>
        <TableComparisonCell align="left">Ràng buộc kế hoạch theo luật hình thức.</TableComparisonCell>
        <TableComparisonCell align="left">Chỉ bảo vệ những ràng buộc đã được mã hóa.</TableComparisonCell>
      </TableComparisonRow>
    </TableComparisonRows>
  </TableComparison>
</div>

<!--
[click]

Đọc bốn cấu trúc từ trái sang phải: tuần tự, lặp để sửa, rẽ nhánh và dạng cây. Mũi tên đỏ đánh dấu chỗ lỗi hoặc tấn công có thể ảnh hưởng các bước sau.

Có thêm nhánh giúp so sánh phương án, nhưng không tự bảo đảm kế hoạch đúng.

[click]

TrustAgent thêm quy tắc an toàn; Formal-LLM giới hạn hành động theo ràng buộc đã khai báo. Ràng buộc thiếu thì vẫn có thể bỏ lọt hành động sai.

Nguồn: Deng et al. (2025), mục 3.2.4, Hình 4.
-->
