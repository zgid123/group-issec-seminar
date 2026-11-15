---
layout: shifting-intro
hideInToc: true
clicks: 2
transition: slide-left
---

# Jailbreak

<div v-if="$clicks < 2">
  <p><strong>Vượt ràng buộc an toàn của một agent có thể kéo theo cả hệ nhiều agent.</strong></p>
  <div class="jailbreak-overview">
    <JailbreakDiagram />
    <div class="jailbreak-cards">
      <ContentCard title="Hiệu ứng domino">
        <p>Một agent bị phá kéo theo cả hệ nhiều agent</p>
      </ContentCard>
      <ContentCard title="Đầu vào đa phương thức">
        <p>Lệnh độc giấu trong ảnh, giọng nói, khó phát hiện</p>
      </ContentCard>
      <ContentCard title="Hậu quả nặng hơn">
        <p>Agent bị phá có thể làm hành động vật lý nguy hiểm</p>
      </ContentCard>
    </div>
  </div>
</div>
<div v-else>
  <TableComparison dense :animation="false" row-header-width="24%">
    <TableComparisonColumns>
      <TableComparisonColumn>Cách phòng thủ</TableComparisonColumn>
      <TableComparisonColumn>Điểm mạnh</TableComparisonColumn>
      <TableComparisonColumn>Điểm yếu</TableComparisonColumn>
    </TableComparisonColumns>
    <TableComparisonRows>
      <TableComparisonRow>
        <template #heading>Filtering<span class="defense-citation">Schwinn et al., 2023</span></template>
        <TableComparisonCell align="left">Sàng lọc đầu vào để phát hiện và chặn prompt độc hại.</TableComparisonCell>
        <TableComparisonCell align="left">Có thể thêm lớp kiểm tra trước khi gọi LLM.</TableComparisonCell>
        <TableComparisonCell align="left">Phụ thuộc bộ lọc; có thể bỏ sót hoặc chặn nhầm.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>Certified defense<span class="defense-citation">Kumar et al., 2024</span></template>
        <TableComparisonCell align="left">Kiểm tra các phần của prompt bằng mô hình phát hiện nội dung độc hại.</TableComparisonCell>
        <TableComparisonCell align="left">Có bảo đảm trong phạm vi giả định của phương pháp.</TableComparisonCell>
        <TableComparisonCell align="left">Tốn nhiều lượt kiểm tra; bảo đảm không bao phủ mọi kiểu jailbreak.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>Multi-agent debate<span class="defense-citation">Chern et al., 2024</span></template>
        <TableComparisonCell align="left">Nhiều agent thảo luận, phản biện và tự đánh giá câu trả lời.</TableComparisonCell>
        <TableComparisonCell align="left">Có thêm phản hồi để phát hiện và sửa câu trả lời không an toàn.</TableComparisonCell>
        <TableComparisonCell align="left">Tăng chi phí; các agent vẫn có thể cùng mắc lỗi.</TableComparisonCell>
      </TableComparisonRow>
    </TableComparisonRows>
  </TableComparison>
</div>

<!--
[click]

Jailbreak khiến agent vượt ràng buộc an toàn. Trong hệ nhiều agent, đầu vào độc có thể lan qua trao đổi giữa các agent. Đầu vào còn có thể là ảnh hoặc âm thanh, không chỉ văn bản.

[click]

Lọc đầu vào, kiểm tra prompt và dùng nhiều agent phản biện. “Certified” chỉ có bảo đảm trong các giả định của phương pháp, không áp dụng cho mọi kiểu tấn công.

Nguồn: Deng et al. (2025), mục 3.1.2.
-->
