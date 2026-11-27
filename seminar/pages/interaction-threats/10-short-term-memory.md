---
layout: shifting-intro
hideInToc: true
clicks: 2
transition: slide-left
---

# Short-term Memory

<div v-if="$clicks < 2" class="seminar-content">
  <p class="seminar-lead"><strong>Bộ nhớ ngắn hạn: như trí nhớ làm việc của người, chỉ trong một phiên.</strong></p>
  <div class="seminar-two">
    <ContentCard title="Giới hạn ngữ cảnh">
      <p>Context bị giới hạn số token; có thể mất thông tin khi chuyển phiên.</p>
    </ContentCard>
    <ContentCard title="Bộ nhớ không đồng bộ">
      <p>Thiếu cơ chế đồng bộ có thể khiến các agent giữ thông tin và mục tiêu không nhất quán.</p>
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
        <template #heading>LongRoPE<span class="defense-citation"><a href="https://arxiv.org/pdf/2402.13753" target="_blank" rel="noopener noreferrer">Ding et al., 2024</a></span></template>
        <TableComparisonCell align="left">Tìm positional interpolation và mở rộng context theo giai đoạn.</TableComparisonCell>
        <TableComparisonCell align="left">Mở rộng context tới 2.048.000 token trong thí nghiệm.</TableComparisonCell>
        <TableComparisonCell align="left">Đánh giá trên LLaMA2/Mistral; chưa kiểm chứng an toàn bộ nhớ.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>Multi-robot planning<span class="defense-citation"><a href="https://arxiv.org/html/2309.15943v2" target="_blank" rel="noopener noreferrer">Chen et al., 2023</a></span></template>
        <TableComparisonCell align="left">So sánh phối hợp tập trung, phân tán và hai dạng kết hợp.</TableComparisonCell>
        <TableComparisonCell align="left">Một dạng kết hợp có hiệu quả và khả năng mở rộng tốt hơn.</TableComparisonCell>
        <TableComparisonCell align="left">Bốn tác vụ 2D và mô phỏng 3D; không chứng nhận đồng bộ bộ nhớ.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>CoT-Influx<span class="defense-citation"><a href="https://arxiv.org/pdf/2312.08901" target="_blank" rel="noopener noreferrer">Huang et al., 2023</a></span></template>
        <TableComparisonCell align="left">Chọn ví dụ CoT và cắt token ít quan trọng để vừa context.</TableComparisonCell>
        <TableComparisonCell align="left">Đánh giá cải thiện suy luận trên năm bộ dữ liệu toán.</TableComparisonCell>
        <TableComparisonCell align="left">Nén ví dụ trong prompt; không tóm tắt lịch sử agent.</TableComparisonCell>
      </TableComparisonRow>
    </TableComparisonRows>
  </TableComparison>
</div>

<!--
GHI CHÚ THUYẾT TRÌNH

[click]

Context hữu hạn và thiếu đồng bộ có thể gây mất thông tin; phụ thuộc thiết kế hệ thống.

LongRoPE, multi-robot planning và CoT-Influx là hướng liên quan đến context/phối hợp; không phải ba phòng thủ an ninh đã được chứng nhận.

[click]

Bảng tiếp theo giới thiệu phương pháp, điểm mạnh và điểm yếu / giới hạn. Với mỗi hàng, giải thích cơ chế trước, sau đó nêu kết quả hoặc khả năng đã được mô tả, rồi chốt phạm vi bằng chứng. Giới hạn đánh giá không đồng nghĩa phương pháp thất bại ở mọi bối cảnh. Các chi tiết và nguồn kiểm tra nằm bên dưới.
-->
