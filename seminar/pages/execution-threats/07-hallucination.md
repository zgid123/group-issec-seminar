---
layout: shifting-intro
hideInToc: true
clicks: 2
transition: slide-left
---

# Hallucination

<div v-if="$clicks < 2" class="seminar-content">
  <p class="seminar-lead"><strong>Agent bịa thông tin nghe hợp lý; trong hệ nhiều agent, lỗi nhỏ bị khuếch đại.</strong></p>
  <HallucinationDiagram />
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
        <template #heading>SAFE<span class="defense-citation"><a href="https://arxiv.org/pdf/2403.18802" target="_blank" rel="noopener noreferrer">Wei et al., 2024</a></span></template>
        <TableComparisonCell align="left">Tách câu trả lời thành các fact, kiểm tra bằng Google Search.</TableComparisonCell>
        <TableComparisonCell align="left">Đánh giá tính đúng của nội dung dài bằng bằng chứng tìm kiếm.</TableComparisonCell>
        <TableComparisonCell align="left">Là bộ đánh giá; không tự sửa câu trả lời.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>Neural Path Hunter<span class="defense-citation"><a href="https://aclanthology.org/2021.emnlp-main.168/" target="_blank" rel="noopener noreferrer">Dziri et al., 2021</a></span></template>
        <TableComparisonCell align="left">Fact critic tìm lỗi; truy vấn knowledge graph để sửa entity.</TableComparisonCell>
        <TableComparisonCell align="left">Phát hiện và sửa entity bằng tri thức từ knowledge graph.</TableComparisonCell>
        <TableComparisonCell align="left">Cần knowledge graph phù hợp; phạm vi thử nghiệm là OpenDialKG.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>Multi-agent debate<span class="defense-citation"><a href="https://arxiv.org/pdf/2305.14325" target="_blank" rel="noopener noreferrer">Du et al., 2023</a></span></template>
        <TableComparisonCell align="left">Nhiều LLM đề xuất rồi phản biện đáp án qua nhiều vòng.</TableComparisonCell>
        <TableComparisonCell align="left">Cải thiện suy luận và factuality trong các tác vụ được thử.</TableComparisonCell>
        <TableComparisonCell align="left">Kết quả thực nghiệm; không chứng nhận đồng thuận luôn đúng.</TableComparisonCell>
      </TableComparisonRow>
    </TableComparisonRows>
  </TableComparison>
</div>

<!--
[click]

Hallucination là thông tin sai nhưng nghe có vẻ hợp lý. Nếu agent sau dùng câu trả lời của agent trước làm dữ kiện, lỗi có thể lan qua cả hệ.

Hàng trên: ví dụ trong survey (mục 3.2.3, ref. [150]) — người dùng quên đưa email, agent bịa địa chỉ từ tên đồng nghiệp rồi cấp quyền ghi chú mật. Tên "Minh" là minh họa.

Hàng dưới: MetaGPT thấy hợp tác thường xuyên khuếch đại hallucination nhỏ; Pan et al. thấy lỗi lan truyền làm hiệu năng cả hệ giảm mạnh (survey mục 4.2.1). Kích thước chấm đỏ chỉ mang tính minh họa.

Nhiều agent cùng đồng ý chưa chứng minh thông tin đúng: chúng có thể cùng dựa vào một dữ kiện sai.

[click]

Bảng tiếp theo giới thiệu phương pháp, điểm mạnh và điểm yếu / giới hạn. Với mỗi hàng, giải thích cơ chế trước, sau đó nêu kết quả hoặc khả năng đã được mô tả, rồi chốt phạm vi bằng chứng. Giới hạn đánh giá không đồng nghĩa phương pháp thất bại ở mọi bối cảnh. Các chi tiết và nguồn kiểm tra nằm bên dưới.
-->
