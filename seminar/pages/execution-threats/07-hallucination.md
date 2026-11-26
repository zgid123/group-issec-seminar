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
      <TableComparisonColumn>Cách phòng thủ</TableComparisonColumn>
      <TableComparisonColumn>Điểm mạnh</TableComparisonColumn>
      <TableComparisonColumn>Điểm yếu</TableComparisonColumn>
    </TableComparisonColumns>
    <TableComparisonRows>
      <TableComparisonRow>
        <template #heading>SAFE<span class="defense-citation">Wei et al., 2024</span></template>
        <TableComparisonCell align="left">Tách câu trả lời thành các nhận định và kiểm chứng bằng tìm kiếm.</TableComparisonCell>
        <TableComparisonCell align="left">Kiểm tra từng thông tin trong câu trả lời dài.</TableComparisonCell>
        <TableComparisonCell align="left">Phụ thuộc nguồn tìm kiếm; tăng chi phí kiểm chứng.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>Generate-and-correct<span class="defense-citation">Dziri et al., 2021</span></template>
        <TableComparisonCell align="left">Dùng knowledge graph và fact critic để sửa câu trả lời.</TableComparisonCell>
        <TableComparisonCell align="left">Sửa nội dung sau khi phát hiện thiếu căn cứ.</TableComparisonCell>
        <TableComparisonCell align="left">Phụ thuộc độ đầy đủ của tri thức và chất lượng critic.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>Multi-agent debate<span class="defense-citation">Du et al. · survey ref. 41</span></template>
        <TableComparisonCell align="left">Các agent phản biện và sửa đáp án qua nhiều vòng.</TableComparisonCell>
        <TableComparisonCell align="left">Có thêm cơ hội phát hiện lỗi.</TableComparisonCell>
        <TableComparisonCell align="left">Tốn nhiều lượt gọi; đồng thuận vẫn có thể sai.</TableComparisonCell>
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

Phân biệt kiểm tra thông tin với việc chỉ thêm lượt trao đổi. Hiệu quả còn tùy nhiệm vụ.

Nguồn: Deng et al. (2025), mục 3.2.3.
-->
