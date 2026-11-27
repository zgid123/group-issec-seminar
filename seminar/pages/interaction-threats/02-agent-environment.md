---
layout: shifting-intro
hideInToc: true
clicks: 2
transition: slide-left
---

# Agent2Environment

<div v-if="$clicks < 2" class="seminar-content">
  <p class="seminar-lead"><strong>Môi trường không chỉ nhận lệnh từ agent mà còn phản hồi ngược để điều khiển agent</strong></p>
  <div class="seminar-environment-top">
    <EnvironmentInteractionDiagram />
    <ContentCard variant="small">
      Agent2Environment có cả <strong>chiều đi và chiều về</strong>: hành động tác động môi trường; dữ liệu môi trường tác động agent.
    </ContentCard>
  </div>
  <div class="seminar-five seminar-below">
    <ContentCard variant="compact" title="Web, dữ liệu ngoài" number="1">
      <p>Indirect prompt injection</p>
    </ContentCard>
    <ContentCard variant="compact" title="Học tăng cường (RL)" number="2" tone="gray">
      <p>Đầu độc điểm thưởng</p>
    </ContentCard>
    <ContentCard variant="compact" title="Giả lập, sandbox" number="3">
      <p>Gắn bó cảm xúc, lạm dụng</p>
    </ContentCard>
    <ContentCard variant="compact" title="Hạ tầng tính toán" number="4" tone="gray">
      <p>Cạn tài nguyên, thiếu cách ly</p>
    </ContentCard>
    <ContentCard variant="compact" title="Thế giới vật lý" number="5" tone="gray">
      <p>Cảm biến bị giả mạo</p>
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
        <template #heading>Misuse analysis<span class="defense-citation"><a href="https://arxiv.org/pdf/2403.15325" target="_blank" rel="noopener noreferrer">Pöhler et al., 2024</a></span></template>
        <TableComparisonCell align="left">Xây dựng ba kịch bản lạm dụng công nghệ AI sẵn có.</TableComparisonCell>
        <TableComparisonCell align="left">Phân tích điểm có thể kiểm soát để hạn chế lạm dụng.</TableComparisonCell>
        <TableComparisonCell align="left">Phân tích tình huống; không phải benchmark bộ lọc.</TableComparisonCell>
      </TableComparisonRow>
    </TableComparisonRows>
  </TableComparison>
</div>

<!--
GHI CHÚ THUYẾT TRÌNH

[click]

Tương tác có hai chiều: hành động tác động môi trường và phản hồi tác động agent. Agent2Tool cũng có thể mang rủi ro từ phản hồi.

Môi trường mô phỏng/vật lý có nguy cơ bị thao túng hoặc lạm dụng; các ví dụ là tóm tắt survey.

[click]

Bảng tiếp theo giới thiệu phương pháp, điểm mạnh và điểm yếu / giới hạn. Với mỗi hàng, giải thích cơ chế trước, sau đó nêu kết quả hoặc khả năng đã được mô tả, rồi chốt phạm vi bằng chứng. Giới hạn đánh giá không đồng nghĩa phương pháp thất bại ở mọi bối cảnh. Các chi tiết và nguồn kiểm tra nằm bên dưới.

---

KIỂM CHỨNG NGUỒN — Agent2Environment
Cập nhật: 2026-11-26. Số trang dưới đây là trang PDF của survey, tương ứng 182:n; không phải số slide.

NGUỒN TỔNG QUAN
Zehang Deng, Yongjian Guo, Changzhou Han, Wanlun Ma, Junwu Xiong, Sheng Wen, Yang Xiang (2025). AI Agents Under Threat: A Survey of Key Security Challenges and Future Pathways. ACM Computing Surveys 57(7), Article 182, February 2025. https://doi.org/10.1145/3716628
Vị trí: §4.1; §4.1.3; §4.1.5, trang 18, 19, 20, 21.
Mở PDF: https://dl.acm.org/doi/pdf/10.1145/3716628#page=18

NỘI DUNG / VÍ DỤ / SƠ ĐỒ
• Tương tác có hai chiều: hành động tác động môi trường và phản hồi tác động agent. Agent2Tool cũng có thể mang rủi ro từ phản hồi.
  Nguồn: Survey §4.1; §4.1.3; §4.1.5, tr. 18, 19, 20, 21.
• Môi trường mô phỏng/vật lý có nguy cơ bị thao túng hoặc lạm dụng; các ví dụ là tóm tắt survey.
  Nguồn: Survey §4.1; §4.1.3; §4.1.5, tr. 18, 19, 20, 21.

PHƯƠNG PHÁP — ĐIỂM MẠNH — ĐIỂM YẾU / GIỚI HẠN

Misuse analysis — Lukas Pöhler et al. (2024), mục tài liệu số 140.
Phương pháp: Xây dựng ba kịch bản lạm dụng công nghệ AI sẵn có.
Điểm mạnh: Phân tích điểm có thể kiểm soát để hạn chế lạm dụng.
Điểm yếu / giới hạn: Phân tích tình huống; không phải benchmark bộ lọc.
Phần đã đối chiếu: Abstract. Các kịch bản thuộc an ninh chính trị, số và vật lý. Hàng cũ đã diễn giải thành một phương pháp phát hiện được đánh giá; đã bỏ diễn giải đó.
Nguồn đã dùng kiểm tra: https://arxiv.org/abs/2403.15325

Cách diễn giải giới hạn: phạm vi dữ liệu/mô hình được thử không chứng minh phương pháp thất bại ở nơi khác. Giới hạn phạm vi và thiếu bảo đảm toàn hệ là nhận xét về bằng chứng, không phải số đo mới.

THÔNG TIN ĐẦY ĐỦ CỦA TỪNG NGUỒN DÙNG TRÊN SLIDE

Lukas Pöhler, Valentin Schrader, Alexander Ladwein, and Florian von Keller (2024). A technological perspective on misuse of available AI.
Bản gốc: https://arxiv.org/pdf/2403.15325
Truy ngược survey: mục tài liệu số 140, bibliography tr. 32; xuất hiện trong nội dung survey tr. 2, 20. https://dl.acm.org/doi/pdf/10.1145/3716628#page=32
Mục ghi trong survey: Lukas Pöhler, Valentin Schrader, Alexander Ladwein, and Florian von Keller (2024). A technological perspective on misuse of available AI. Retrieved from https://arxiv.org/pdf/2403.15325
Mức kiểm chứng: Abstract. Các kịch bản thuộc an ninh chính trị, số và vật lý. Hàng cũ đã diễn giải thành một phương pháp phát hiện được đánh giá; đã bỏ diễn giải đó.
-->
