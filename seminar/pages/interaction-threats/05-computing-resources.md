---
layout: shifting-intro
hideInToc: true
clicks: 2
transition: slide-left
---

# Computing Resources

<div v-if="$clicks < 2" class="seminar-content">
  <p class="seminar-lead"><strong>Quản lý tài nguyên và cách ly yếu có thể gây từ chối dịch vụ hoặc ảnh hưởng agent khác</strong></p>
  <div class="seminar-resource-grid">
    <ContentCard variant="resource" title="Cạn kiệt tài nguyên" number="1">
      <p>Bắt agent làm việc nặng liên tục, người dùng khác bị từ chối dịch vụ.</p>
      <p class="seminar-operational">Thiếu giới hạn tài nguyên</p>
    </ContentCard>
    <ContentCard variant="resource" title="Phân bổ kém hiệu quả" number="2">
      <p>Prompt không được kiểm tra làm tốn thời gian xử lý, việc quan trọng bị chậm.</p>
      <p class="seminar-operational">Thiếu đánh giá truy vấn, phân bổ ưu tiên</p>
    </ContentCard>
    <ContentCard variant="resource" title="Cách ly kém giữa agent" number="3">
      <p>Agent xấu đọc hoặc can thiệp dữ liệu, tiến trình của agent khác.</p>
      <p class="seminar-operational">Thiếu cơ chế cách ly giữa agent</p>
    </ContentCard>
    <ContentCard variant="resource" title="Không giám sát" number="4">
      <p>Tài nguyên tăng vọt bất thường nhưng không ai phát hiện.</p>
      <p class="seminar-operational">Thiếu metrics, cảnh báo</p>
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
        <template #heading>LLM coercion<span class="defense-citation"><a href="https://arxiv.org/abs/2402.14020" target="_blank" rel="noopener noreferrer">Geiping et al., 2024</a></span></template>
        <TableComparisonCell align="left">Nghiên cứu tấn công ép LLM thực hiện hành vi ngoài ý muốn.</TableComparisonCell>
        <TableComparisonCell align="left">Phân tích các kiểu tấn công, gồm denial of service.</TableComparisonCell>
        <TableComparisonCell align="left">Nghiên cứu tấn công; không phải cơ chế quota.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>LLM-based DDoS detection<span class="defense-citation"><a href="https://doi.org/10.1007/978-3-031-51630-6_6" target="_blank" rel="noopener noreferrer">Guastalla et al., 2024</a></span></template>
        <TableComparisonCell align="left">Dùng few-shot learning hoặc fine-tuning để phát hiện DDoS.</TableComparisonCell>
        <TableComparisonCell align="left">Áp dụng LLM cho nhận diện DDoS bằng few-shot hoặc fine-tuning.</TableComparisonCell>
        <TableComparisonCell align="left">Bằng chứng trên hai bộ dữ liệu mạng; chưa đánh giá cách ly agent.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>When2Ask<span class="defense-citation"><a href="https://arxiv.org/pdf/2306.03604" target="_blank" rel="noopener noreferrer">Hu et al., 2023</a></span></template>
        <TableComparisonCell align="left">Dùng RL để học khi nào agent cần hỏi LLM.</TableComparisonCell>
        <TableComparisonCell align="left">Giảm tương tác dư thừa trên MiniGrid và Habitat.</TableComparisonCell>
        <TableComparisonCell align="left">Tối ưu việc gọi LLM; không phải lập lịch CPU/GPU.</TableComparisonCell>
      </TableComparisonRow>
    </TableComparisonRows>
  </TableComparison>
</div>

<!--
GHI CHÚ THUYẾT TRÌNH

[click]

Bốn nguy cơ: resource exhaustion, inefficient allocation, insufficient isolation, unmonitored usage; tổng hợp survey p.20.

Thiếu quota, ưu tiên, cách ly, metrics là diễn giải vận hành của nhóm; không gán cho một paper DevOps.

Bảng phân biệt nghiên cứu tấn công, phát hiện DDoS và tối ưu lượt hỏi LLM; không coi cả ba là cơ chế cách ly CPU/GPU.

[click]

Bảng tiếp theo giới thiệu phương pháp, điểm mạnh và điểm yếu / giới hạn. Với mỗi hàng, giải thích cơ chế trước, sau đó nêu kết quả hoặc khả năng đã được mô tả, rồi chốt phạm vi bằng chứng. Giới hạn đánh giá không đồng nghĩa phương pháp thất bại ở mọi bối cảnh. Các chi tiết và nguồn kiểm tra nằm bên dưới.
-->
