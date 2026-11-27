---
layout: shifting-intro
hideInToc: true
clicks: 2
transition: slide-left
---

# Planning Threat

<div v-if="$clicks < 2" class="seminar-content">
  <p class="seminar-lead"><strong>Theo survey, lỗi đầu chuỗi có thể lan sang các bước lập kế hoạch sau.</strong></p>
  <PlanningStructuresDiagram />
  <p>Ví dụ phương pháp suy luận từng bước: <a href="https://arxiv.org/abs/2201.11903" target="_blank" rel="noopener noreferrer">Chain-of-Thought — Wei et al., 2022</a>.</p>
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
        <template #heading>TrustAgent<span class="defense-citation"><a href="https://aclanthology.org/2024.findings-emnlp.585/" target="_blank" rel="noopener noreferrer">Hua et al., 2024</a></span></template>
        <TableComparisonCell align="left">Dùng Agent Constitution trước, trong và sau lập kế hoạch.</TableComparisonCell>
        <TableComparisonCell align="left">Báo cáo cải thiện safety và helpfulness trong sandbox mô phỏng.</TableComparisonCell>
        <TableComparisonCell align="left">Khả năng tuân thủ phụ thuộc năng lực suy luận của LLM.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>Formal-LLM<span class="defense-citation"><a href="https://arxiv.org/pdf/2402.00798" target="_blank" rel="noopener noreferrer">Li et al., 2024</a></span></template>
        <TableComparisonCell align="left">Automaton giám sát quá trình sinh kế hoạch dựa trên stack.</TableComparisonCell>
        <TableComparisonCell align="left">Ràng buộc kế hoạch theo yêu cầu hình thức đã khai báo.</TableComparisonCell>
        <TableComparisonCell align="left">Phạm vi bảo đảm là các ràng buộc được biểu diễn.</TableComparisonCell>
      </TableComparisonRow>
    </TableComparisonRows>
  </TableComparison>
</div>

<!--
GHI CHÚ THUYẾT TRÌNH

[click]

Lỗi trung gian có thể lan truyền trong planning; bốn cấu trúc vẽ lại từ Figure 4.

Chain-of-Thought là phương pháp suy luận từng bước; bài gốc không được dùng làm bằng chứng tấn công.

[click]

Bảng tiếp theo giới thiệu phương pháp, điểm mạnh và điểm yếu / giới hạn. Với mỗi hàng, giải thích cơ chế trước, sau đó nêu kết quả hoặc khả năng đã được mô tả, rồi chốt phạm vi bằng chứng. Giới hạn đánh giá không đồng nghĩa phương pháp thất bại ở mọi bối cảnh. Các chi tiết và nguồn kiểm tra nằm bên dưới.

---

KIỂM CHỨNG NGUỒN — Planning Threat
Cập nhật: 2026-11-26. Số trang dưới đây là trang PDF của survey, tương ứng 182:n; không phải số slide.

NGUỒN TỔNG QUAN
Zehang Deng, Yongjian Guo, Changzhou Han, Wanlun Ma, Junwu Xiong, Sheng Wen, Yang Xiang (2025). AI Agents Under Threat: A Survey of Key Security Challenges and Future Pathways. ACM Computing Surveys 57(7), Article 182, February 2025. https://doi.org/10.1145/3716628
Vị trí: §3.2.4; Figure 4, trang 15, 16.
Mở PDF: https://dl.acm.org/doi/pdf/10.1145/3716628#page=15

NỘI DUNG / VÍ DỤ / SƠ ĐỒ
• Lỗi trung gian có thể lan truyền trong planning; bốn cấu trúc vẽ lại từ Figure 4.
  Nguồn: Survey §3.2.4; Figure 4, tr. 15, 16.
• Chain-of-Thought là phương pháp suy luận từng bước; bài gốc không được dùng làm bằng chứng tấn công.
  Nguồn: Jason Wei et al. (2022), mục tài liệu số 190 trong survey.
  Vị trí kiểm tra: Abstract: intermediate reasoning steps.

PHƯƠNG PHÁP — ĐIỂM MẠNH — ĐIỂM YẾU / GIỚI HẠN

TrustAgent — W. Hua et al. (2024), mục tài liệu số 70.
Phương pháp: Dùng Agent Constitution trước, trong và sau lập kế hoạch.
Điểm mạnh: Báo cáo cải thiện safety và helpfulness trong sandbox mô phỏng.
Điểm yếu / giới hạn: Khả năng tuân thủ phụ thuộc năng lực suy luận của LLM.
Phần đã đối chiếu: Đã đọc §3 và §3.1 của toàn văn. Quy tắc Agent Constitution được đưa vào ba giai đoạn planning. GPT-4 mô phỏng thực thi tool trong sandbox, không phải thử nghiệm an toàn của mọi tool thật.
Nguồn đã dùng kiểm tra: https://aclanthology.org/2024.findings-emnlp.585/

Formal-LLM — Zelong Li et al. (2024), mục tài liệu số 94.
Phương pháp: Automaton giám sát quá trình sinh kế hoạch dựa trên stack.
Điểm mạnh: Ràng buộc kế hoạch theo yêu cầu hình thức đã khai báo.
Điểm yếu / giới hạn: Phạm vi bảo đảm là các ràng buộc được biểu diễn.
Phần đã đối chiếu: Đã đọc §4.1 của toàn văn. PDA ràng buộc tính hợp lệ và khả năng thực thi theo constraints; tác giả nêu rõ không bảo đảm performance hay optimality.
Nguồn đã dùng kiểm tra: https://arxiv.org/abs/2402.00798

Cách diễn giải giới hạn: phạm vi dữ liệu/mô hình được thử không chứng minh phương pháp thất bại ở nơi khác. Giới hạn phạm vi và thiếu bảo đảm toàn hệ là nhận xét về bằng chứng, không phải số đo mới.

THÔNG TIN ĐẦY ĐỦ CỦA TỪNG NGUỒN DÙNG TRÊN SLIDE

Jason Wei, Xuezhi Wang, Dale Schuurmans, Maarten Bosma, Fei Xia, Ed Chi, Quoc V Le, Denny Zhou et al (2022). Chain-of-thought prompting elicits reasoning in large language models.
Bản gốc: https://arxiv.org/abs/2201.11903
Truy ngược survey: mục tài liệu số 190, bibliography tr. 34; xuất hiện trong nội dung survey tr. 11. https://dl.acm.org/doi/pdf/10.1145/3716628#page=34
Mục ghi trong survey: Jason Wei, Xuezhi Wang, Dale Schuurmans, Maarten Bosma, Fei Xia, Ed Chi, Quoc V Le, Denny Zhou et al (2022). Chain-of-thought prompting elicits reasoning in large language models. NeurIPS .
Mức kiểm chứng: Đã đối chiếu abstract gốc; không phải kiểm tra toàn văn hoặc tái lập thí nghiệm.

W. Hua, X. Yang, M. Jin, Z. Li, W. Cheng, R. Tang, and Y. Zhang (2024). TrustAgent: Towards Safe and Trustworthy LLM-based Agents.
Bản gốc: https://aclanthology.org/2024.findings-emnlp.585/
Truy ngược survey: mục tài liệu số 70, bibliography tr. 30; xuất hiện trong nội dung survey tr. 16, 26. https://dl.acm.org/doi/pdf/10.1145/3716628#page=30
Mục ghi trong survey: W. Hua, X. Yang, M. Jin, Z. Li, W. Cheng, R. Tang, and Y. Zhang (2024). November. Trustagent: Towards safe and trustworthy llm-based agents. In Findings of the Association for Computational Linguistics: EMNLP 2024 . 10000–10016.
Mức kiểm chứng: Đã đọc §3 và §3.1 của toàn văn. Quy tắc Agent Constitution được đưa vào ba giai đoạn planning. GPT-4 mô phỏng thực thi tool trong sandbox, không phải thử nghiệm an toàn của mọi tool thật.

Zelong Li, Wenyue Hua, Hao Wang, He Zhu, and Yongfeng Zhang (2024). Formal-LLM: Integrating formal language and natural language for controllable LLM-based agents.
Bản gốc: https://arxiv.org/pdf/2402.00798
Truy ngược survey: mục tài liệu số 94, bibliography tr. 31; xuất hiện trong nội dung survey tr. 16. https://dl.acm.org/doi/pdf/10.1145/3716628#page=31
Mục ghi trong survey: Zelong Li, Wenyue Hua, Hao Wang, He Zhu, and Yongfeng Zhang (2024). Formal-LLM: Integrating formal language and natural language for controllable LLM-based agents. Retrieved from https://arxiv.org/pdf/2402.00798
Mức kiểm chứng: Đã đọc §4.1 của toàn văn. PDA ràng buộc tính hợp lệ và khả năng thực thi theo constraints; tác giả nêu rõ không bảo đảm performance hay optimality.
-->
