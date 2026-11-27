---
layout: shifting-intro
hideInToc: true
clicks: 2
transition: slide-left
---

# Prompt Injection Attack


<p v-if="$clicks < 2"><strong>Lệnh của kẻ tấn công được chèn vào đầu vào để bẻ lái agent.</strong></p>

<div class="prompt-injection-stage">
  <div v-if="$clicks < 2">
    <PromptInjectionDiagram class="mt-4" />
    <div class="prompt-outcomes">
      <ContentCard title="Goal hijacking (cướp mục tiêu)">
        <p>Bẻ lái mục tiêu của ứng dụng. Với quyền thực thi mã, hậu quả có thể gồm chạy lệnh hoặc đánh cắp API key.</p>
      </ContentCard>
      <ContentCard title="Prompt leakage (rò rỉ prompt)">
        <p>Prompt độc có thể làm lộ hướng dẫn hoặc chi tiết gọi API của hệ RAG; phụ thuộc ứng dụng.</p>
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
        <template #heading>Paraphrasing<span class="defense-citation"><a href="https://arxiv.org/pdf/2309.00614" target="_blank" rel="noopener noreferrer">Jain et al., 2023</a></span></template>
        <TableComparisonCell align="left">Viết lại prompt bằng một LLM trước khi gửi tới mô hình đích.</TableComparisonCell>
        <TableComparisonCell align="left">Giảm tấn công hậu tố trong các thí nghiệm của bài.</TableComparisonCell>
        <TableComparisonCell align="left">Có suy giảm chất lượng trên AlpacaEval.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>Retokenization<span class="defense-citation"><a href="https://arxiv.org/pdf/2309.00614" target="_blank" rel="noopener noreferrer">Jain et al., 2023</a></span></template>
        <TableComparisonCell align="left">Dùng BPE-dropout để thay đổi cách chia token của prompt.</TableComparisonCell>
        <TableComparisonCell align="left">Thay đổi phân đoạn token mà không cần sửa mô hình đích.</TableComparisonCell>
        <TableComparisonCell align="left">Tăng số token và giảm chất lượng trên AlpacaEval.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>Perplexity detection<span class="defense-citation"><a href="https://arxiv.org/pdf/2308.14132" target="_blank" rel="noopener noreferrer">Alon &amp; Kamfonas, 2023</a></span></template>
        <TableComparisonCell align="left">Kết hợp perplexity GPT-2 và độ dài token trong LightGBM.</TableComparisonCell>
        <TableComparisonCell align="left">Phát hiện phần lớn hậu tố đối kháng trong tập kiểm tra.</TableComparisonCell>
        <TableComparisonCell align="left">Đánh giá trên tập hậu tố đối kháng; chưa bao phủ mọi prompt injection.</TableComparisonCell>
      </TableComparisonRow>
    </TableComparisonRows>
  </TableComparison>
  </div>
</div>

<style>
.prompt-outcomes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin-top: 18px;
}
</style>

<!--
GHI CHÚ THUYẾT TRÌNH

[click]

Goal hijacking và prompt leakage là hai mục tiêu tấn công.

RCE hoặc API-key theft là hậu quả phụ thuộc quyền và lỗi ứng dụng.

Rò rỉ prompt hoặc chi tiết API của hệ RAG.

Sơ đồ chèn lệnh là ví dụ minh họa; câu “ignore…” không bảo đảm khai thác thành công.

[click]

Bảng tiếp theo giới thiệu phương pháp, điểm mạnh và điểm yếu / giới hạn. Với mỗi hàng, giải thích cơ chế trước, sau đó nêu kết quả hoặc khả năng đã được mô tả, rồi chốt phạm vi bằng chứng. Giới hạn đánh giá không đồng nghĩa phương pháp thất bại ở mọi bối cảnh. Các chi tiết và nguồn kiểm tra nằm bên dưới.
-->
