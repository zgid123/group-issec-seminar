---
layout: shifting-intro
hideInToc: true
clicks: 2
transition: slide-left
---

# Misalignment

<div v-if="$clicks < 2" class="seminar-content">
  <p class="seminar-lead"><strong>Misalignment: agent làm khác ý con người vì dữ liệu, vì chiều lòng, vì không hiểu thế giới</strong></p>
  <div class="seminar-three seminar-misalignment">
    <ContentCard variant="tall" title="Dữ liệu huấn luyện" number="1">
      <p>Nội dung độc chiếm khoảng 0,2% dữ liệu tiền huấn luyện của LLaMA2. Thiên vị giới tính, chủng tộc, vùng miền đi theo vào agent.</p>
    </ContentCard>
    <ContentCard variant="tall" title="Người và agent" number="2">
      <p>Sycophancy: agent chiều theo ý người dùng, kể cả chọn đáp án mà nó biết là sai.</p>
    </ContentCard>
    <ContentCard variant="tall" title="Môi trường embodied" number="3">
      <p>Được bảo bật đèn xanh cho người đi bộ, agent bật ngay dù đèn xe làn bên cạnh cũng đang xanh.</p>
    </ContentCard>
  </div>
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

Ví dụ: agent đồng ý với người dùng dù họ sai, hoặc bật đèn cho người đi bộ mà không xét đèn xe.

[click]

Phản hồi của người và kiểm tra hành động giúp giảm độ lệch, nhưng vẫn phụ thuộc dữ liệu và bối cảnh sử dụng.

Nguồn: Deng et al. (2025), mục 3.2.2.
-->
