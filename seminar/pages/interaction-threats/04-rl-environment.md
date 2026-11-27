---
layout: shifting-intro
hideInToc: true
clicks: 2
transition: slide-left
---

# RL Environment

<div v-if="$clicks < 2" class="seminar-content">
  <p class="seminar-lead"><strong>Đầu độc điểm thưởng là một cách tấn công quá trình học tăng cường</strong></p>
  <div class="seminar-rl-layout">
    <RLThreatDiagram />
    <ContentCard variant="explanation">
      <strong>Cơ chế:</strong> phản hồi môi trường bị thao túng có thể dẫn agent học một policy lệch mục tiêu.
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
        <template #heading>ERNIE<span class="defense-citation"><a href="https://arxiv.org/abs/2310.10810" target="_blank" rel="noopener noreferrer">Bukharin et al., 2023</a></span></template>
        <TableComparisonCell align="left">Adversarial regularization cho policy trong multi-agent RL.</TableComparisonCell>
        <TableComparisonCell align="left">Đưa regularization vào policy để xử lý nhiễu và hành động đối kháng.</TableComparisonCell>
        <TableComparisonCell align="left">Thử trên traffic và particle environments; chưa đánh giá LLM agent.</TableComparisonCell>
      </TableComparisonRow>
    </TableComparisonRows>
  </TableComparison>
  <Takeaway>
    Theo survey: nghiên cứu phòng thủ cho agent dùng RL <strong>còn rất ít</strong>.
  </Takeaway>
</div>

<!--
GHI CHÚ THUYẾT TRÌNH

[click]

Đầu độc phản hồi/điểm thưởng có thể làm lệch policy; đây là một loại tấn công RL, không phải duy nhất.

Inverse RL suy ra hàm thưởng từ hành vi; kiến thức nền, không tự nó là một exploit.

ERNIE nghiên cứu robust multi-agent RL; không trình bày là đã chặn reward poisoning trong LLM agent.

[click]

Bảng tiếp theo giới thiệu phương pháp, điểm mạnh và điểm yếu / giới hạn. Với mỗi hàng, giải thích cơ chế trước, sau đó nêu kết quả hoặc khả năng đã được mô tả, rồi chốt phạm vi bằng chứng. Giới hạn đánh giá không đồng nghĩa phương pháp thất bại ở mọi bối cảnh. Các chi tiết và nguồn kiểm tra nằm bên dưới.
-->
