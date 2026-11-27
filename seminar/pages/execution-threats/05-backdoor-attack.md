---
layout: shifting-intro
hideInToc: true
clicks: 2
transition: slide-left
---

# Backdoor Attack

<div v-if="$clicks < 2">
  <p><strong>Kết quả cuối có thể trông đúng trong khi các bước bên trong đã bị đổi.</strong></p>
  <BackdoorDiagram />
  <div class="backdoor-outcomes">
    <ContentCard title="Loại 1: đổi câu trả lời cuối">
      <p>Trigger nằm trong câu hỏi hoặc kết quả trung gian. Ví dụ: luôn gợi ý sản phẩm do kẻ tấn công chọn.</p>
    </ContentCard>
    <ContentCard title="Loại 2: giữ câu trả lời cuối">
      <p>Chỉ đổi đường đi bên trong. Ví dụ: email có link lừa đảo, hay luôn chọn một phần mềm nhất định.</p>
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
        <template #heading>Februus<span class="defense-citation"><a href="https://arxiv.org/abs/1908.03369" target="_blank" rel="noopener noreferrer">Doan et al., 2020</a></span></template>
        <TableComparisonCell align="left">Loại dấu hiệu trigger rồi phục hồi ảnh đầu vào.</TableComparisonCell>
        <TableComparisonCell align="left">Lọc dấu hiệu trigger và phục hồi ảnh ngay lúc chạy.</TableComparisonCell>
        <TableComparisonCell align="left">Trigger lớn có thể làm giảm chất lượng phục hồi; chỉ xét ảnh.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>Quarantine<span class="defense-citation"><a href="https://arxiv.org/abs/2205.11819" target="_blank" rel="noopener noreferrer">Chen et al., 2022</a></span></template>
        <TableComparisonCell align="left">Pruning để cô lập mạng con giữ backdoor rồi khôi phục trigger.</TableComparisonCell>
        <TableComparisonCell align="left">Cô lập mạng con backdoor để khôi phục trigger.</TableComparisonCell>
        <TableComparisonCell align="left">Đánh giá trên DNN thị giác; chưa có bằng chứng cho LLM agent.</TableComparisonCell>
      </TableComparisonRow>
    </TableComparisonRows>
  </TableComparison>
  <p>Các phòng thủ mô hình được survey (2025) dẫn chưa bảo vệ toàn hệ agent.</p>
</div>

<!--
GHI CHÚ THUYẾT TRÌNH

[click]

Hai loại backdoor: đổi kết quả cuối hoặc chỉ đổi quá trình trung gian.

Sơ đồ email chèn link: plugin Trojan; không gán việc này cho LLM đã bị cài backdoor.

Februus và Quarantine nghiên cứu mô hình thị giác; không suy ra đã bảo vệ toàn hệ LLM agent.

[click]

Bảng tiếp theo giới thiệu phương pháp, điểm mạnh và điểm yếu / giới hạn. Với mỗi hàng, giải thích cơ chế trước, sau đó nêu kết quả hoặc khả năng đã được mô tả, rồi chốt phạm vi bằng chứng. Giới hạn đánh giá không đồng nghĩa phương pháp thất bại ở mọi bối cảnh. Các chi tiết và nguồn kiểm tra nằm bên dưới.
-->
