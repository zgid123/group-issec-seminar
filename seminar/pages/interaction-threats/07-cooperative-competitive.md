---
layout: shifting-intro
hideInToc: true
clicks: 2
transition: slide-left
---

# Cooperative & Competitive

<div v-if="$clicks < 2" class="seminar-content">
  <p class="seminar-lead"><strong>Tương tác đa agent có thể làm lan truyền lỗi và tạo động cơ hành vi đối kháng</strong></p>
  <div class="seminar-interactions">
    <ContentCard title="Hợp tác (cooperative)" variant="panel">
      <CooperativeDiagram />
      <ul>
        <li>
          <strong><a href="https://arxiv.org/pdf/2403.02817" target="_blank" rel="noopener noreferrer">Sâu Morris II (Cohen et al., 2024)</a>:</strong> prompt độc tự nhân bản sang agent khác
        </li>
        <li>
          <strong>Thông đồng ngầm</strong> qua kênh công khai
        </li>
        <li>
          <strong>Khuếch đại hallucination</strong> qua hợp tác (<a href="https://arxiv.org/abs/2308.00352" target="_blank" rel="noopener noreferrer">MetaGPT, Hong et al., 2024</a>); lan tin sai
        </li>
        <li>
          Mặt tốt: AutoDefense dùng nhiều agent để lọc phản hồi có hại
        </li>
      </ul>
    </ContentCard>
    <ContentCard title="Cạnh tranh (competitive)" variant="panel" tone="gray">
      <CompetitiveDiagram />
      <ul>
        <li>
          <strong>Cicero</strong> (Meta, game Diplomacy): kết hợp ngôn ngữ và lập kế hoạch chiến lược trong trò chơi đàm phán
        </li>
        <li>
          Tạo đầu vào đối kháng để hạ đối thủ
        </li>
        <li>
          Theo survey (2025): phòng thủ vẫn là <strong>câu hỏi mở</strong>
        </li>
      </ul>
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
        <template #heading>AutoDefense<span class="defense-citation"><a href="https://arxiv.org/pdf/2403.04783" target="_blank" rel="noopener noreferrer">Zeng et al., 2024</a></span></template>
        <TableComparisonCell align="left">Nhiều agent phân vai để lọc câu trả lời có hại của LLM.</TableComparisonCell>
        <TableComparisonCell align="left">Giảm jailbreak thành công trong các thí nghiệm của bài.</TableComparisonCell>
        <TableComparisonCell align="left">Phòng thủ ở câu trả lời; không đánh giá mọi rủi ro đa agent.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>Reference architecture<span class="defense-citation"><a href="https://arxiv.org/abs/2311.13148v3" target="_blank" rel="noopener noreferrer">Lu et al., 2024</a></span></template>
        <TableComparisonCell align="left">Kiến trúc gồm planning, execution, giám sát và guardrail.</TableComparisonCell>
        <TableComparisonCell align="left">Tổ chức rõ các thành phần giám sát và guardrail trong thiết kế.</TableComparisonCell>
        <TableComparisonCell align="left">Là hướng dẫn kiến trúc; chưa chứng nhận hiệu quả ngăn tấn công.</TableComparisonCell>
      </TableComparisonRow>
    </TableComparisonRows>
  </TableComparison>
</div>

<!--
GHI CHÚ THUYẾT TRÌNH

[click]

Morris II: self-replicating prompts lan qua hệ ứng dụng dùng RAG; không tự lây trong mọi hệ.

Thông đồng qua kênh giao tiếp công khai là rủi ro được survey mô tả.

Hallucination có thể lan qua chuỗi agent đơn giản.

Cicero phối hợp ngôn ngữ và strategic reasoning trong Diplomacy; không dùng nó làm bằng chứng học lừa dối.

Tạo đầu vào đối kháng và câu hỏi mở về phòng thủ cạnh tranh là nhận định của survey (2025), không phải khảo sát cập nhật đến 2026.

[click]

Bảng tiếp theo giới thiệu phương pháp, điểm mạnh và điểm yếu / giới hạn. Với mỗi hàng, giải thích cơ chế trước, sau đó nêu kết quả hoặc khả năng đã được mô tả, rồi chốt phạm vi bằng chứng. Giới hạn đánh giá không đồng nghĩa phương pháp thất bại ở mọi bối cảnh. Các chi tiết và nguồn kiểm tra nằm bên dưới.
-->
