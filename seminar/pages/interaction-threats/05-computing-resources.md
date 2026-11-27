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

---

KIỂM CHỨNG NGUỒN — Computing Resources
Cập nhật: 2026-11-26. Số trang dưới đây là trang PDF của survey, tương ứng 182:n; không phải số slide.

NGUỒN TỔNG QUAN
Zehang Deng, Yongjian Guo, Changzhou Han, Wanlun Ma, Junwu Xiong, Sheng Wen, Yang Xiang (2025). AI Agents Under Threat: A Survey of Key Security Challenges and Future Pathways. ACM Computing Surveys 57(7), Article 182, February 2025. https://doi.org/10.1145/3716628
Vị trí: §4.1.4, trang 20.
Mở PDF: https://dl.acm.org/doi/pdf/10.1145/3716628#page=20

NỘI DUNG / VÍ DỤ / SƠ ĐỒ
• Bốn nguy cơ: resource exhaustion, inefficient allocation, insufficient isolation, unmonitored usage; tổng hợp survey p.20.
  Nguồn: Survey §4.1.4, tr. 20.
• Thiếu quota, ưu tiên, cách ly, metrics là diễn giải vận hành của nhóm; không gán cho một paper DevOps.
  Nguồn: Survey §4.1.4, tr. 20.
• Bảng phân biệt nghiên cứu tấn công, phát hiện DDoS và tối ưu lượt hỏi LLM; không coi cả ba là cơ chế cách ly CPU/GPU.
  Nguồn: Survey §4.1.4, tr. 20.

PHƯƠNG PHÁP — ĐIỂM MẠNH — ĐIỂM YẾU / GIỚI HẠN

LLM coercion — Jonas Geiping et al. (2024), mục tài liệu số 52.
Phương pháp: Nghiên cứu tấn công ép LLM thực hiện hành vi ngoài ý muốn.
Điểm mạnh: Phân tích các kiểu tấn công, gồm denial of service.
Điểm yếu / giới hạn: Nghiên cứu tấn công; không phải cơ chế quota.
Phần đã đối chiếu: Abstract. Không gán các cơ chế DevOps cho bài này.
Nguồn đã dùng kiểm tra: https://arxiv.org/abs/2402.14020

LLM-based DDoS detection — Michael Guastalla et al. (2024), mục tài liệu số 58.
Phương pháp: Dùng few-shot learning hoặc fine-tuning để phát hiện DDoS.
Điểm mạnh: Áp dụng LLM cho nhận diện DDoS bằng few-shot hoặc fine-tuning.
Điểm yếu / giới hạn: Bằng chứng trên hai bộ dữ liệu mạng; chưa đánh giá cách ly agent.
Phần đã đối chiếu: Abstract trên trang nhà xuất bản. SmartSP 2023; kỷ yếu xuất bản năm 2024.
Nguồn đã dùng kiểm tra: https://eudl.eu/doi/10.1007/978-3-031-51630-6_6

When2Ask — Bin Hu et al. (2023), mục tài liệu số 69.
Phương pháp: Dùng RL để học khi nào agent cần hỏi LLM.
Điểm mạnh: Giảm tương tác dư thừa trên MiniGrid và Habitat.
Điểm yếu / giới hạn: Tối ưu việc gọi LLM; không phải lập lịch CPU/GPU.
Phần đã đối chiếu: Abstract. Tác nhân học cách tránh hỏi dư thừa và cập nhật kế hoạch khi môi trường thay đổi.
Nguồn đã dùng kiểm tra: https://arxiv.org/abs/2306.03604

Cách diễn giải giới hạn: phạm vi dữ liệu/mô hình được thử không chứng minh phương pháp thất bại ở nơi khác. Giới hạn phạm vi và thiếu bảo đảm toàn hệ là nhận xét về bằng chứng, không phải số đo mới.

THÔNG TIN ĐẦY ĐỦ CỦA TỪNG NGUỒN DÙNG TRÊN SLIDE

Jonas Geiping, Alex Stein, Manli Shu, Khalid Saifullah, Yuxin Wen, and Tom Goldstein (2024). Coercing LLMs to do and reveal (almost) anything.
Bản gốc: https://arxiv.org/abs/2402.14020
Truy ngược survey: mục tài liệu số 52, bibliography tr. 29; xuất hiện trong nội dung survey tr. 5, 6, 7, 8, 20. https://dl.acm.org/doi/pdf/10.1145/3716628#page=29
Mục ghi trong survey: Jonas Geiping, Alex Stein, Manli Shu, Khalid Saifullah, Yuxin Wen, and Tom Goldstein (2024). Coercing LLMs to do and reveal (almost) anything. Retrieved from https://arxiv.org/abs/2402.14020
Mức kiểm chứng: Abstract. Không gán các cơ chế DevOps cho bài này.

Michael Guastalla, Yiyi Li, Arvin Hekmati, and Bhaskar Krishnamachari (2024). Application of large language models to DDoS attack detection.
Bản gốc: https://doi.org/10.1007/978-3-031-51630-6_6
Truy ngược survey: mục tài liệu số 58, bibliography tr. 29; xuất hiện trong nội dung survey tr. 20. https://dl.acm.org/doi/pdf/10.1145/3716628#page=29
Mục ghi trong survey: Michael Guastalla, Yiyi Li, Arvin Hekmati, and Bhaskar Krishnamachari (2023). Application of large language models to DDoS attack detection. In Proceedings of the SmartSP .
Mức kiểm chứng: Abstract trên trang nhà xuất bản. SmartSP 2023; kỷ yếu xuất bản năm 2024.
Khác biệt phiên bản/định danh: Survey ghi năm hội thảo 2023; trang Springer ghi xuất bản kỷ yếu ngày 5-2-2024. Slide dùng năm xuất bản 2024.

Bin Hu, Chenyang Zhao, Pu Zhang, Zihao Zhou, Yuanhang Yang, Zenglin Xu, and Bin Liu (2023). Enabling intelligent interactions between an agent and an LLM: A reinforcement learning approach.
Bản gốc: https://arxiv.org/pdf/2306.03604
Truy ngược survey: mục tài liệu số 69, bibliography tr. 30; xuất hiện trong nội dung survey tr. 6, 7, 14, 15, 20. https://dl.acm.org/doi/pdf/10.1145/3716628#page=30
Mục ghi trong survey: Bin Hu, Chenyang Zhao, Pu Zhang, Zihao Zhou, Yuanhang Yang, Zenglin Xu, and Bin Liu (2023). Enabling intelligent interactions between an agent and an LLM: A reinforcement learning approach. Retrieved from https://arxiv.org/ pdf/2306.03604
Mức kiểm chứng: Abstract. Tác nhân học cách tránh hỏi dư thừa và cập nhật kế hoạch khi môi trường thay đổi.
-->
