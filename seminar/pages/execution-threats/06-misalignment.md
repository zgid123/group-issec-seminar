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
      <TableComparisonColumn>Phương pháp</TableComparisonColumn>
      <TableComparisonColumn>Điểm mạnh</TableComparisonColumn>
      <TableComparisonColumn>Điểm yếu / giới hạn</TableComparisonColumn>
    </TableComparisonColumns>
    <TableComparisonRows>
      <TableComparisonRow>
        <template #heading>InstructGPT / RLHF<span class="defense-citation"><a href="https://arxiv.org/abs/2203.02155" target="_blank" rel="noopener noreferrer">Ouyang et al., 2022</a></span></template>
        <TableComparisonCell align="left">Học từ minh họa và xếp hạng câu trả lời của con người.</TableComparisonCell>
        <TableComparisonCell align="left">Người đánh giá ưu tiên InstructGPT hơn GPT-3 trên tập prompt của bài.</TableComparisonCell>
        <TableComparisonCell align="left">Mô hình vẫn mắc lỗi; đánh giá tập trung vào câu trả lời.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>SafeguardGPT<span class="defense-citation"><a href="https://arxiv.org/pdf/2304.00416" target="_blank" rel="noopener noreferrer">Lin et al., 2023</a></span></template>
        <TableComparisonCell align="left">Bốn vai: Chatbot, User, Therapist và Critic.</TableComparisonCell>
        <TableComparisonCell align="left">Minh họa cải thiện hội thoại qua một tình huống mô phỏng.</TableComparisonCell>
        <TableComparisonCell align="left">Bằng chứng là ví dụ hội thoại, chưa phải đánh giá toàn hệ agent.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>TWOSOME<span class="defense-citation"><a href="https://arxiv.org/abs/2401.14151" target="_blank" rel="noopener noreferrer">Tan et al., 2024</a></span></template>
        <TableComparisonCell align="left">Chấm xác suất các hành động hợp lệ; cập nhật LoRA bằng PPO.</TableComparisonCell>
        <TableComparisonCell align="left">Gắn lựa chọn hành động với tập hành động hợp lệ của môi trường.</TableComparisonCell>
        <TableComparisonCell align="left">Đánh giá trên Overcooked và VirtualHome; chưa bao phủ toàn hệ agent.</TableComparisonCell>
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

Bảng tiếp theo giới thiệu phương pháp, điểm mạnh và điểm yếu / giới hạn. Với mỗi hàng, giải thích cơ chế trước, sau đó nêu kết quả hoặc khả năng đã được mô tả, rồi chốt phạm vi bằng chứng. Giới hạn đánh giá không đồng nghĩa phương pháp thất bại ở mọi bối cảnh. Các chi tiết và nguồn kiểm tra nằm bên dưới.
-->
