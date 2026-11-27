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
        <p>Một agent bị phá có thể lây sang agent khác trong thiết lập có trao đổi dữ liệu</p>
      </ContentCard>
      <ContentCard title="Đầu vào đa phương thức">
        <p>Ảnh hoặc âm thanh có thể mang đầu vào đối kháng</p>
      </ContentCard>
      <ContentCard title="Hậu quả nặng hơn">
        <p>Agent bị phá có thể làm hành động vật lý nguy hiểm</p>
      </ContentCard>
    </div>
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
        <template #heading>Defense evaluation<span class="defense-citation"><a href="https://arxiv.org/pdf/2310.19737" target="_blank" rel="noopener noreferrer">Schwinn et al., 2023</a></span></template>
        <TableComparisonCell align="left">Kiểm tra cách đánh giá độ bền của các biện pháp phòng thủ.</TableComparisonCell>
        <TableComparisonCell align="left">Chỉ ra nguy cơ đánh giá quá cao độ an toàn.</TableComparisonCell>
        <TableComparisonCell align="left">Là nghiên cứu đánh giá; không đề xuất bộ lọc chung.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>Erase-and-check<span class="defense-citation"><a href="https://arxiv.org/pdf/2309.02705" target="_blank" rel="noopener noreferrer">Kumar et al., 2024</a></span></template>
        <TableComparisonCell align="left">Xóa token và kiểm tra các chuỗi con bằng safety filter.</TableComparisonCell>
        <TableComparisonCell align="left">Chứng nhận an toàn cho tấn công có kích thước giới hạn.</TableComparisonCell>
        <TableComparisonCell align="left">Bảo đảm gắn với bộ lọc và mô hình tấn công đã định nghĩa.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>Multi-agent debate<span class="defense-citation"><a href="https://arxiv.org/pdf/2401.05998" target="_blank" rel="noopener noreferrer">Chern et al., 2024</a></span></template>
        <TableComparisonCell align="left">Cho mô hình bị jailbreak tranh luận với mô hình khác.</TableComparisonCell>
        <TableComparisonCell align="left">Giảm toxicity khi tranh luận với mô hình an toàn hoặc mạnh hơn.</TableComparisonCell>
        <TableComparisonCell align="left">Tranh luận đa agent nói chung chỉ cải thiện ít trong bài.</TableComparisonCell>
      </TableComparisonRow>
    </TableComparisonRows>
  </TableComparison>
</div>

<!--
GHI CHÚ THUYẾT TRÌNH

[click]

Lây jailbreak giữa agent qua ảnh: Agent Smith; chỉ áp dụng trong thiết lập trao đổi của bài.

Đầu vào đa phương thức và hậu quả vật lý: nhóm nguy cơ được survey tổng hợp, không phải khả năng của mọi agent.

[click]

Bảng tiếp theo giới thiệu phương pháp, điểm mạnh và điểm yếu / giới hạn. Với mỗi hàng, giải thích cơ chế trước, sau đó nêu kết quả hoặc khả năng đã được mô tả, rồi chốt phạm vi bằng chứng. Giới hạn đánh giá không đồng nghĩa phương pháp thất bại ở mọi bối cảnh. Các chi tiết và nguồn kiểm tra nằm bên dưới.
-->
