---
layout: shifting-intro
hideInToc: true
clicks: 2
transition: slide-left
---

# Long-term Memory

<div v-if="$clicks < 2" class="seminar-content">
  <p class="seminar-lead"><strong>PoisonedRAG cho thấy vài văn bản độc có thể làm lệch câu trả lời trong thiết lập thực nghiệm</strong></p>
  <MemoryThreatDiagram />
  <div class="seminar-three seminar-below">
    <ContentCard title="Đầu độc" tone="peach">
      <p>5 văn bản độc / câu hỏi mục tiêu; ASR 90% trong thí nghiệm</p>
    </ContentCard>
    <ContentCard title="Rò rỉ riêng tư" tone="peach">
      <p>Prompt có cấu trúc rút dữ liệu; dịch ngược embedding (<a href="https://aclanthology.org/2023.findings-acl.881/" target="_blank" rel="noopener noreferrer">Li et al., 2023</a>; <a href="https://aclanthology.org/2023.emnlp-main.765/" target="_blank" rel="noopener noreferrer">Morris et al., 2023</a>)</p>
    </ContentCard>
    <ContentCard title="Mâu thuẫn, thời gian" tone="peach">
      <p>Lưu cả "Trái Đất tròn" và "phẳng"; sai mốc hiệu lực</p>
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
        <template #heading>PoisonedRAG<span class="defense-citation"><a href="https://arxiv.org/pdf/2402.07867" target="_blank" rel="noopener noreferrer">Zou et al., 2024</a></span></template>
        <TableComparisonCell align="left">Chèn văn bản độc để RAG trả lời theo mục tiêu kẻ tấn công.</TableComparisonCell>
        <TableComparisonCell align="left">Làm rõ điểm yếu của RAG bằng tấn công và thử nghiệm phòng thủ.</TableComparisonCell>
        <TableComparisonCell align="left">Các defense được thử chưa đủ; kết quả gắn với thiết lập của bài.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>RAG privacy<span class="defense-citation"><a href="https://arxiv.org/pdf/2402.16893" target="_blank" rel="noopener noreferrer">Zeng et al., 2024</a></span></template>
        <TableComparisonCell align="left">Dùng truy vấn tấn công để khảo sát rò rỉ dữ liệu truy xuất.</TableComparisonCell>
        <TableComparisonCell align="left">Phân biệt rò rỉ từ kho truy xuất và từ dữ liệu huấn luyện.</TableComparisonCell>
        <TableComparisonCell align="left">Là nghiên cứu rủi ro; chưa cung cấp bảo đảm riêng tư tổng quát.</TableComparisonCell>
      </TableComparisonRow>
    </TableComparisonRows>
  </TableComparison>
</div>

<!--
GHI CHÚ THUYẾT TRÌNH

[click]

PoisonedRAG: năm văn bản độc cho mỗi câu hỏi mục tiêu, 90% ASR trong thiết lập của bài; không phải một con số chung cho mọi RAG.

Truy vấn làm rò rỉ dữ liệu từ kho truy xuất.

Khôi phục văn bản từ sentence embeddings.

Dữ liệu mâu thuẫn/lỗi thời là rủi ro survey nêu. Ví dụ Trái Đất tròn/phẳng là minh họa, không phải thí nghiệm PoisonedRAG.

[click]

Bảng tiếp theo giới thiệu phương pháp, điểm mạnh và điểm yếu / giới hạn. Với mỗi hàng, giải thích cơ chế trước, sau đó nêu kết quả hoặc khả năng đã được mô tả, rồi chốt phạm vi bằng chứng. Giới hạn đánh giá không đồng nghĩa phương pháp thất bại ở mọi bối cảnh. Các chi tiết và nguồn kiểm tra nằm bên dưới.
-->
