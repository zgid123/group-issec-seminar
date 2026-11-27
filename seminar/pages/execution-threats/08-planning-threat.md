---
layout: shifting-intro
hideInToc: true
clicks: 2
transition: slide-left
---

# Planning Threat

<div v-if="$clicks < 2" class="seminar-content">
  <p class="seminar-lead"><strong>Theo survey, lỗi đầu chuỗi có thể lan sang các bước lập kế hoạch sau.</strong></p>
  <PlanningStructuresDiagram />
  <p>Ví dụ phương pháp suy luận từng bước: <a href="https://arxiv.org/abs/2201.11903" target="_blank" rel="noopener noreferrer">Chain-of-Thought — Wei et al., 2022</a>.</p>
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
        <template #heading>TrustAgent<span class="defense-citation"><a href="https://aclanthology.org/2024.findings-emnlp.585/" target="_blank" rel="noopener noreferrer">Hua et al., 2024</a></span></template>
        <TableComparisonCell align="left">Dùng Agent Constitution trước, trong và sau lập kế hoạch.</TableComparisonCell>
        <TableComparisonCell align="left">Báo cáo cải thiện safety và helpfulness trong sandbox mô phỏng.</TableComparisonCell>
        <TableComparisonCell align="left">Khả năng tuân thủ phụ thuộc năng lực suy luận của LLM.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>Formal-LLM<span class="defense-citation"><a href="https://arxiv.org/pdf/2402.00798" target="_blank" rel="noopener noreferrer">Li et al., 2024</a></span></template>
        <TableComparisonCell align="left">Automaton giám sát quá trình sinh kế hoạch dựa trên stack.</TableComparisonCell>
        <TableComparisonCell align="left">Ràng buộc kế hoạch theo yêu cầu hình thức đã khai báo.</TableComparisonCell>
        <TableComparisonCell align="left">Phạm vi bảo đảm là các ràng buộc được biểu diễn.</TableComparisonCell>
      </TableComparisonRow>
    </TableComparisonRows>
  </TableComparison>
</div>

<!--
GHI CHÚ THUYẾT TRÌNH

[click]

Lỗi trung gian có thể lan truyền trong planning; bốn cấu trúc vẽ lại từ Figure 4.

Chain-of-Thought là phương pháp suy luận từng bước; bài gốc không được dùng làm bằng chứng tấn công.

[click]

Bảng tiếp theo giới thiệu phương pháp, điểm mạnh và điểm yếu / giới hạn. Với mỗi hàng, giải thích cơ chế trước, sau đó nêu kết quả hoặc khả năng đã được mô tả, rồi chốt phạm vi bằng chứng. Giới hạn đánh giá không đồng nghĩa phương pháp thất bại ở mọi bối cảnh. Các chi tiết và nguồn kiểm tra nằm bên dưới.
-->
