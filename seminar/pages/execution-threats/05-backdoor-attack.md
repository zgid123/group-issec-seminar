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
      <TableComparisonColumn>Cách phòng thủ</TableComparisonColumn>
      <TableComparisonColumn>Điểm mạnh</TableComparisonColumn>
      <TableComparisonColumn>Điểm yếu</TableComparisonColumn>
    </TableComparisonColumns>
    <TableComparisonRows>
      <TableComparisonRow>
        <template #heading>Input purification<span class="defense-citation">Februus · Doan et al., 2020</span></template>
        <TableComparisonCell align="left">Loại vùng chứa trigger khỏi đầu vào.</TableComparisonCell>
        <TableComparisonCell align="left">Xử lý đầu vào trước khi mô hình suy luận.</TableComparisonCell>
        <TableComparisonCell align="left">Nghiên cứu trên DNN; chưa bảo đảm cho toàn bộ agent.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>Neuron removal<span class="defense-citation">Deng et al., 2025 · survey</span></template>
        <TableComparisonCell align="left">Loại neuron liên quan đến backdoor.</TableComparisonCell>
        <TableComparisonCell align="left">Can thiệp vào mô hình đã nhiễm.</TableComparisonCell>
        <TableComparisonCell align="left">Cần xác định đúng neuron; có thể ảnh hưởng tác vụ hợp lệ.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>Trigger recovery<span class="defense-citation">Quarantine · Chen et al., 2022</span></template>
        <TableComparisonCell align="left">Khai thác tính thưa để tìm trigger.</TableComparisonCell>
        <TableComparisonCell align="left">Giúp nhận diện dấu hiệu backdoor.</TableComparisonCell>
        <TableComparisonCell align="left">Tìm được trigger chưa đồng nghĩa bảo vệ mọi bước của agent.</TableComparisonCell>
      </TableComparisonRow>
    </TableComparisonRows>
  </TableComparison>
  <p>Phòng thủ hiện tại mới ở mức mô hình, chưa bao được cả hệ agent.</p>
</div>

<!--
[click]

Mô hình có backdoor có thể hoạt động bình thường cho đến khi gặp trigger. Khi đó, nó đổi câu trả lời hoặc âm thầm đổi các bước thực hiện.

Ví dụ trên slide: agent vẫn báo gửi email thành công, nhưng đã chèn link lừa đảo. Chỉ xem câu trả lời cuối sẽ khó nhận ra.

[click]

Các cách được nêu chủ yếu xử lý ở mức mô hình, chưa bao quát cả hệ agent.

Nguồn: Deng et al. (2025), mục 3.2.1.
-->
