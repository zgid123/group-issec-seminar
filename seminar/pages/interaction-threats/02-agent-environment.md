---
layout: shifting-intro
hideInToc: true
clicks: 2
transition: slide-left
---

# Agent2Environment

<div v-if="$clicks < 2" class="seminar-content">
  <p class="seminar-lead"><strong>Môi trường không chỉ nhận lệnh từ agent mà còn phản hồi ngược để điều khiển agent</strong></p>
  <div class="seminar-environment-top">
    <EnvironmentInteractionDiagram />
    <ContentCard variant="small">
      Agent2Environment có cả <strong>chiều đi và chiều về</strong>: hành động tác động môi trường; dữ liệu môi trường tác động agent.
    </ContentCard>
  </div>
  <div class="seminar-five seminar-below">
    <ContentCard variant="compact" title="Web, dữ liệu ngoài" number="1">
      <p>Indirect prompt injection</p>
    </ContentCard>
    <ContentCard variant="compact" title="Học tăng cường (RL)" number="2" tone="gray">
      <p>Đầu độc điểm thưởng</p>
    </ContentCard>
    <ContentCard variant="compact" title="Giả lập, sandbox" number="3">
      <p>Gắn bó cảm xúc, lạm dụng</p>
    </ContentCard>
    <ContentCard variant="compact" title="Hạ tầng tính toán" number="4" tone="gray">
      <p>Cạn tài nguyên, thiếu cách ly</p>
    </ContentCard>
    <ContentCard variant="compact" title="Thế giới vật lý" number="5" tone="gray">
      <p>Cảm biến bị giả mạo</p>
    </ContentCard>
  </div>
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
        <template #heading>Misuse analysis<span class="defense-citation"><a href="https://arxiv.org/pdf/2403.15325" target="_blank" rel="noopener noreferrer">Pöhler et al., 2024</a></span></template>
        <TableComparisonCell align="left">Xây dựng ba kịch bản lạm dụng công nghệ AI sẵn có.</TableComparisonCell>
        <TableComparisonCell align="left">Phân tích điểm có thể kiểm soát để hạn chế lạm dụng.</TableComparisonCell>
        <TableComparisonCell align="left">Phân tích tình huống; không phải benchmark bộ lọc.</TableComparisonCell>
      </TableComparisonRow>
    </TableComparisonRows>
  </TableComparison>
</div>

<!--
GHI CHÚ THUYẾT TRÌNH

[click]

Tương tác có hai chiều: hành động tác động môi trường và phản hồi tác động agent. Agent2Tool cũng có thể mang rủi ro từ phản hồi.

Môi trường mô phỏng/vật lý có nguy cơ bị thao túng hoặc lạm dụng; các ví dụ là tóm tắt survey.

[click]

Bảng tiếp theo giới thiệu phương pháp, điểm mạnh và điểm yếu / giới hạn. Với mỗi hàng, giải thích cơ chế trước, sau đó nêu kết quả hoặc khả năng đã được mô tả, rồi chốt phạm vi bằng chứng. Giới hạn đánh giá không đồng nghĩa phương pháp thất bại ở mọi bối cảnh. Các chi tiết và nguồn kiểm tra nằm bên dưới.
-->
