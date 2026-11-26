---
layout: shifting-intro
hideInToc: true
clicks: 2
transition: slide-left
---

# Misalignment

<div v-if="$clicks < 2" class="seminar-content">
  <p class="seminar-lead"><strong>Misalignment: agent làm khác ý con người vì dữ liệu, vì chiều lòng, vì không hiểu thế giới</strong></p>
  <MisalignmentDiagram />
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
        <template #heading>RLHF<span class="defense-citation">Ouyang et al., 2022</span></template>
        <TableComparisonCell align="left">Học từ đánh giá và ưu tiên của con người.</TableComparisonCell>
        <TableComparisonCell align="left">Điều chỉnh hành vi theo mong muốn người dùng.</TableComparisonCell>
        <TableComparisonCell align="left">Phản hồi sai hoặc thiên vị có thể gây lệch tiếp.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>SafeguardGPT<span class="defense-citation">Lin et al., 2023</span></template>
        <TableComparisonCell align="left">Nhiều agent mô phỏng trị liệu để điều chỉnh hành vi chatbot.</TableComparisonCell>
        <TableComparisonCell align="left">Có phản hồi để sửa hành vi có hại.</TableComparisonCell>
        <TableComparisonCell align="left">Phạm vi chatbot; chưa bảo đảm mọi hành động của agent.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>TWOSOME<span class="defense-citation">Tan et al., 2024</span></template>
        <TableComparisonCell align="left">Chấm điểm các hành động khả dụng bằng LLM và học từ phần thưởng môi trường.</TableComparisonCell>
        <TableComparisonCell align="left">Hạn chế việc sinh hành động không hợp lệ.</TableComparisonCell>
        <TableComparisonCell align="left">Hành động hợp lệ chưa chắc an toàn; phụ thuộc reward và tập hành động.</TableComparisonCell>
      </TableComparisonRow>
    </TableComparisonRows>
  </TableComparison>
</div>

<!--
[click]

Misalignment là khi agent làm khác điều con người mong muốn. Ba nguồn trên slide là dữ liệu huấn luyện, cách đáp ứng người dùng và hiểu biết về môi trường.

Sơ đồ đọc theo hàng: nguồn lệch, đầu vào, agent, hành vi thực tế (đỏ) so với điều con người mong đợi (xanh). Ví dụ "đáp án B" ở hàng 2 là minh họa, không lấy từ survey.

Ví dụ: agent đồng ý với người dùng dù họ sai, hoặc bật đèn cho người đi bộ mà không xét đèn xe.

[click]

Phản hồi của người và kiểm tra hành động giúp giảm độ lệch, nhưng vẫn phụ thuộc dữ liệu và bối cảnh sử dụng.

Nguồn: Deng et al. (2025), mục 3.2.2.
-->
