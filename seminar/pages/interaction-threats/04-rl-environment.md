---
layout: shifting-intro
hideInToc: true
clicks: 2
transition: slide-left
---

# RL Environment

<div v-if="$clicks < 2" class="seminar-content">
  <p class="seminar-lead"><strong>Đầu độc điểm thưởng là một cách tấn công quá trình học tăng cường</strong></p>
  <div class="seminar-rl-layout">
    <RLThreatDiagram />
    <ContentCard variant="explanation">
      <strong>Cơ chế:</strong> phản hồi môi trường bị thao túng có thể dẫn agent học một policy lệch mục tiêu.
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
        <template #heading>ERNIE<span class="defense-citation"><a href="https://arxiv.org/abs/2310.10810" target="_blank" rel="noopener noreferrer">Bukharin et al., 2023</a></span></template>
        <TableComparisonCell align="left">Adversarial regularization cho policy trong multi-agent RL.</TableComparisonCell>
        <TableComparisonCell align="left">Đưa regularization vào policy để xử lý nhiễu và hành động đối kháng.</TableComparisonCell>
        <TableComparisonCell align="left">Thử trên traffic và particle environments; chưa đánh giá LLM agent.</TableComparisonCell>
      </TableComparisonRow>
    </TableComparisonRows>
  </TableComparison>
  <Takeaway>
    Theo survey: nghiên cứu phòng thủ cho agent dùng RL <strong>còn rất ít</strong>.
  </Takeaway>
</div>

<!--
GHI CHÚ THUYẾT TRÌNH

[click]

Đầu độc phản hồi/điểm thưởng có thể làm lệch policy; đây là một loại tấn công RL, không phải duy nhất.

Inverse RL suy ra hàm thưởng từ hành vi; kiến thức nền, không tự nó là một exploit.

ERNIE nghiên cứu robust multi-agent RL; không trình bày là đã chặn reward poisoning trong LLM agent.

[click]

Bảng tiếp theo giới thiệu phương pháp, điểm mạnh và điểm yếu / giới hạn. Với mỗi hàng, giải thích cơ chế trước, sau đó nêu kết quả hoặc khả năng đã được mô tả, rồi chốt phạm vi bằng chứng. Giới hạn đánh giá không đồng nghĩa phương pháp thất bại ở mọi bối cảnh. Các chi tiết và nguồn kiểm tra nằm bên dưới.

---

KIỂM CHỨNG NGUỒN — RL Environment
Cập nhật: 2026-11-26. Số trang dưới đây là trang PDF của survey, tương ứng 182:n; không phải số slide.

NGUỒN TỔNG QUAN
Zehang Deng, Yongjian Guo, Changzhou Han, Wanlun Ma, Junwu Xiong, Sheng Wen, Yang Xiang (2025). AI Agents Under Threat: A Survey of Key Security Challenges and Future Pathways. ACM Computing Surveys 57(7), Article 182, February 2025. https://doi.org/10.1145/3716628
Vị trí: §4.1.2, trang 19.
Mở PDF: https://dl.acm.org/doi/pdf/10.1145/3716628#page=19

NỘI DUNG / VÍ DỤ / SƠ ĐỒ
• Đầu độc phản hồi/điểm thưởng có thể làm lệch policy; đây là một loại tấn công RL, không phải duy nhất.
  Nguồn: Survey §4.1.2, tr. 19.
• Inverse RL suy ra hàm thưởng từ hành vi; kiến thức nền, không tự nó là một exploit.
  Nguồn: Saurabh Arora et al. (2021), mục tài liệu số 9 trong survey.
  Vị trí kiểm tra: Survey p.19; nguồn là survey về inverse RL.
• ERNIE nghiên cứu robust multi-agent RL; không trình bày là đã chặn reward poisoning trong LLM agent.
  Nguồn: Survey §4.1.2, tr. 19.

PHƯƠNG PHÁP — ĐIỂM MẠNH — ĐIỂM YẾU / GIỚI HẠN

ERNIE — Alexander Bukharin et al. (2023), mục tài liệu số 15.
Phương pháp: Adversarial regularization cho policy trong multi-agent RL.
Điểm mạnh: Đưa regularization vào policy để xử lý nhiễu và hành động đối kháng.
Điểm yếu / giới hạn: Thử trên traffic và particle environments; chưa đánh giá LLM agent.
Phần đã đối chiếu: Abstract; proceedings NeurIPS 2023. Regularization thúc đẩy tính liên tục Lipschitz; tác giả dùng Stackelberg game để giảm bất ổn huấn luyện. Không gán đây là thử nghiệm reward poisoning trên LLM agent.
Nguồn đã dùng kiểm tra: https://arxiv.org/abs/2310.10810

Cách diễn giải giới hạn: phạm vi dữ liệu/mô hình được thử không chứng minh phương pháp thất bại ở nơi khác. Giới hạn phạm vi và thiếu bảo đảm toàn hệ là nhận xét về bằng chứng, không phải số đo mới.

THÔNG TIN ĐẦY ĐỦ CỦA TỪNG NGUỒN DÙNG TRÊN SLIDE

Saurabh Arora and Prashant Doshi (2021). A survey of inverse reinforcement learning: Challenges, methods and progress.
Bản gốc: https://arxiv.org/abs/1806.06877
Truy ngược survey: mục tài liệu số 9, bibliography tr. 27; xuất hiện trong nội dung survey tr. 19, 27. https://dl.acm.org/doi/pdf/10.1145/3716628#page=27
Mục ghi trong survey: Saurabh Arora and Prashant Doshi (2021). A survey of inverse reinforcement learning: Challenges, methods and progress. Artific. Intell. 297 (Aug. 2021), 103500.
Mức kiểm chứng: Dẫn qua survey; chưa đọc toàn văn bài gốc. Chỉ dùng cho khẳng định hẹp được ghi trong slide-sources.json.

Alexander Bukharin, Yan Li, Yue Yu, Qingru Zhang, Zhehui Chen, Simiao Zuo, Chao Zhang, Songan Zhang, and Tuo Zhao (2023). Robust multi-agent reinforcement learning via adversarial regularization: Theoretical foundation and stable algorithms.
Bản gốc: https://arxiv.org/abs/2310.10810
Truy ngược survey: mục tài liệu số 15, bibliography tr. 27; xuất hiện trong nội dung survey tr. 19, 27. https://dl.acm.org/doi/pdf/10.1145/3716628#page=27
Mục ghi trong survey: Alexander Bukharin, Yan Li, Yue Yu, Qingru Zhang, Zhehui Chen, Simiao Zuo, Chao Zhang, Songan Zhang, and Tuo Zhao (2024). Robust multi-agent reinforcement learning via adversarial regularization: Theoretical foundation and stable algorithms. NeurIPS (2024).
Mức kiểm chứng: Abstract; proceedings NeurIPS 2023. Regularization thúc đẩy tính liên tục Lipschitz; tác giả dùng Stackelberg game để giảm bất ổn huấn luyện. Không gán đây là thử nghiệm reward poisoning trên LLM agent.
Khác biệt phiên bản/định danh: Survey ghi 2024; bài thuộc proceedings NeurIPS 2023. Slide dùng năm hội nghị 2023.
-->
