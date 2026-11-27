---
layout: shifting-intro
hideInToc: true
clicks: 2
transition: slide-left
---

# Prompt Injection Attack


<p v-if="$clicks < 2"><strong>Lệnh của kẻ tấn công được chèn vào đầu vào để bẻ lái agent.</strong></p>

<div class="prompt-injection-stage">
  <div v-if="$clicks < 2">
    <PromptInjectionDiagram class="mt-4" />
    <div class="prompt-outcomes">
      <ContentCard title="Goal hijacking (cướp mục tiêu)">
        <p>Bẻ lái mục tiêu của ứng dụng. Với quyền thực thi mã, hậu quả có thể gồm chạy lệnh hoặc đánh cắp API key.</p>
      </ContentCard>
      <ContentCard title="Prompt leakage (rò rỉ prompt)">
        <p>Prompt độc có thể làm lộ hướng dẫn hoặc chi tiết gọi API của hệ RAG; phụ thuộc ứng dụng.</p>
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
        <template #heading>Paraphrasing<span class="defense-citation"><a href="https://arxiv.org/pdf/2309.00614" target="_blank" rel="noopener noreferrer">Jain et al., 2023</a></span></template>
        <TableComparisonCell align="left">Viết lại prompt bằng một LLM trước khi gửi tới mô hình đích.</TableComparisonCell>
        <TableComparisonCell align="left">Giảm tấn công hậu tố trong các thí nghiệm của bài.</TableComparisonCell>
        <TableComparisonCell align="left">Có suy giảm chất lượng trên AlpacaEval.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>Retokenization<span class="defense-citation"><a href="https://arxiv.org/pdf/2309.00614" target="_blank" rel="noopener noreferrer">Jain et al., 2023</a></span></template>
        <TableComparisonCell align="left">Dùng BPE-dropout để thay đổi cách chia token của prompt.</TableComparisonCell>
        <TableComparisonCell align="left">Thay đổi phân đoạn token mà không cần sửa mô hình đích.</TableComparisonCell>
        <TableComparisonCell align="left">Tăng số token và giảm chất lượng trên AlpacaEval.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>Perplexity detection<span class="defense-citation"><a href="https://arxiv.org/pdf/2308.14132" target="_blank" rel="noopener noreferrer">Alon &amp; Kamfonas, 2023</a></span></template>
        <TableComparisonCell align="left">Kết hợp perplexity GPT-2 và độ dài token trong LightGBM.</TableComparisonCell>
        <TableComparisonCell align="left">Phát hiện phần lớn hậu tố đối kháng trong tập kiểm tra.</TableComparisonCell>
        <TableComparisonCell align="left">Đánh giá trên tập hậu tố đối kháng; chưa bao phủ mọi prompt injection.</TableComparisonCell>
      </TableComparisonRow>
    </TableComparisonRows>
  </TableComparison>
  </div>
</div>

<style>
.prompt-outcomes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin-top: 18px;
}
</style>

<!--
GHI CHÚ THUYẾT TRÌNH

[click]

Goal hijacking và prompt leakage là hai mục tiêu tấn công.

RCE hoặc API-key theft là hậu quả phụ thuộc quyền và lỗi ứng dụng.

Rò rỉ prompt hoặc chi tiết API của hệ RAG.

Sơ đồ chèn lệnh là ví dụ minh họa; câu “ignore…” không bảo đảm khai thác thành công.

[click]

Bảng tiếp theo giới thiệu phương pháp, điểm mạnh và điểm yếu / giới hạn. Với mỗi hàng, giải thích cơ chế trước, sau đó nêu kết quả hoặc khả năng đã được mô tả, rồi chốt phạm vi bằng chứng. Giới hạn đánh giá không đồng nghĩa phương pháp thất bại ở mọi bối cảnh. Các chi tiết và nguồn kiểm tra nằm bên dưới.

---

KIỂM CHỨNG NGUỒN — Prompt Injection Attack
Cập nhật: 2026-11-26. Số trang dưới đây là trang PDF của survey, tương ứng 182:n; không phải số slide.

NGUỒN TỔNG QUAN
Zehang Deng, Yongjian Guo, Changzhou Han, Wanlun Ma, Junwu Xiong, Sheng Wen, Yang Xiang (2025). AI Agents Under Threat: A Survey of Key Security Challenges and Future Pathways. ACM Computing Surveys 57(7), Article 182, February 2025. https://doi.org/10.1145/3716628
Vị trí: §3.1.1, trang 8, 9, 10.
Mở PDF: https://dl.acm.org/doi/pdf/10.1145/3716628#page=8

NỘI DUNG / VÍ DỤ / SƠ ĐỒ
• Goal hijacking và prompt leakage là hai mục tiêu tấn công.
  Nguồn: Fábio Perez and Ian Ribeiro (2022), mục tài liệu số 137 trong survey.
  Vị trí kiểm tra: Survey p.8, đoạn mở đầu §3.1.1.
• RCE hoặc API-key theft là hậu quả phụ thuộc quyền và lỗi ứng dụng.
  Nguồn: Tong Liu et al. (2023), mục tài liệu số 103 trong survey.
  Vị trí kiểm tra: Survey p.8, Goal hijacking; không gộp với tấn công ảnh của Wu.
• Rò rỉ prompt hoặc chi tiết API của hệ RAG.
  Nguồn: Fangzhou Wu et al. (2024), mục tài liệu số 201 trong survey.
  Vị trí kiểm tra: Survey p.8, Prompt leakage.
• Sơ đồ chèn lệnh là ví dụ minh họa; câu “ignore…” không bảo đảm khai thác thành công.
  Nguồn: Survey §3.1.1, tr. 8, 9, 10.

PHƯƠNG PHÁP — ĐIỂM MẠNH — ĐIỂM YẾU / GIỚI HẠN

Paraphrasing — Neel Jain et al. (2023), mục tài liệu số 77.
Phương pháp: Viết lại prompt bằng một LLM trước khi gửi tới mô hình đích.
Điểm mạnh: Giảm tấn công hậu tố trong các thí nghiệm của bài.
Điểm yếu / giới hạn: Có suy giảm chất lượng trên AlpacaEval.
Phần đã đối chiếu: §4.2; kết quả Table 3 và Figure 4. Mô hình viết lại có thể làm mất chuỗi token đối kháng, nhưng cũng có thể làm thay đổi yêu cầu hợp lệ.
Nguồn đã dùng kiểm tra: https://arxiv.org/html/2309.00614v2

Retokenization — Neel Jain et al. (2023), mục tài liệu số 77.
Phương pháp: Dùng BPE-dropout để thay đổi cách chia token của prompt.
Điểm mạnh: Thay đổi phân đoạn token mà không cần sửa mô hình đích.
Điểm yếu / giới hạn: Tăng số token và giảm chất lượng trên AlpacaEval.
Phần đã đối chiếu: Bản v2, §4.3, Figure 5 và Table 6: BPE-dropout giảm ASR trên Vicuna/Guanaco trong thiết lập thử; làm tăng số token và giảm win rate AlpacaEval. Không hiệu quả đồng đều giữa các mô hình.
Nguồn đã dùng kiểm tra: https://arxiv.org/html/2309.00614v2

Perplexity detection — Gabriel Alon and Michael Kamfonas (2023), mục tài liệu số 6.
Phương pháp: Kết hợp perplexity GPT-2 và độ dài token trong LightGBM.
Điểm mạnh: Phát hiện phần lớn hậu tố đối kháng trong tập kiểm tra.
Điểm yếu / giới hạn: Đánh giá trên tập hậu tố đối kháng; chưa bao phủ mọi prompt injection.
Phần đã đối chiếu: Abstract: LightGBM kết hợp perplexity và độ dài nhằm giảm báo nhầm của ngưỡng perplexity đơn lẻ. Không gán hạn chế của baseline cho bộ phân loại được đề xuất.
Nguồn đã dùng kiểm tra: https://arxiv.org/abs/2308.14132

Cách diễn giải giới hạn: phạm vi dữ liệu/mô hình được thử không chứng minh phương pháp thất bại ở nơi khác. Giới hạn phạm vi và thiếu bảo đảm toàn hệ là nhận xét về bằng chứng, không phải số đo mới.

THÔNG TIN ĐẦY ĐỦ CỦA TỪNG NGUỒN DÙNG TRÊN SLIDE

Fábio Perez and Ian Ribeiro (2022). Ignore previous prompt: Attack techniques for language models.
Bản gốc: https://arxiv.org/abs/2211.09527
Truy ngược survey: mục tài liệu số 137, bibliography tr. 32; xuất hiện trong nội dung survey tr. 5, 6, 7, 8. https://dl.acm.org/doi/pdf/10.1145/3716628#page=32
Mục ghi trong survey: Fábio Perez and Ian Ribeiro (2022). Ignore previous prompt: Attack techniques for language models. NeurIPS (2022).
Mức kiểm chứng: Dẫn qua survey; chưa đọc toàn văn bài gốc. Chỉ dùng cho khẳng định hẹp được ghi trong slide-sources.json.

Tong Liu, Zizhuang Deng, Guozhu Meng, Yuekang Li, and Kai Chen (2023). Demystifying rce vulnerabilities in LLM-integrated apps.
Bản gốc: https://arxiv.org/pdf/2309.02926
Truy ngược survey: mục tài liệu số 103, bibliography tr. 31; xuất hiện trong nội dung survey tr. 6, 7, 8. https://dl.acm.org/doi/pdf/10.1145/3716628#page=31
Mục ghi trong survey: Tong Liu, Zizhuang Deng, Guozhu Meng, Yuekang Li, and Kai Chen (2023). Demystifying rce vulnerabilities in LLMintegrated apps. Retrieved from https://arxiv.org/pdf/2309.02926
Mức kiểm chứng: Dẫn qua survey; chưa đọc toàn văn bài gốc. Chỉ dùng cho khẳng định hẹp được ghi trong slide-sources.json.

Fangzhou Wu, Ning Zhang, Somesh Jha, Patrick McDaniel, and Chaowei Xiao (2024). A new era in LLM security: Exploring security concerns in real-world LLM-based systems.
Bản gốc: https://arxiv.org/pdf/2402.18649
Truy ngược survey: mục tài liệu số 201, bibliography tr. 35; xuất hiện trong nội dung survey tr. 5, 6, 7, 8, 18, 19. https://dl.acm.org/doi/pdf/10.1145/3716628#page=35
Mục ghi trong survey: Fangzhou Wu, Ning Zhang, Somesh Jha, Patrick McDaniel, and Chaowei Xiao (2024). A new era in LLM security: Exploring security concerns in real-world LLM-based systems. Retrieved from https://arxiv.org/pdf/2402.18649
Mức kiểm chứng: Dẫn qua survey; chưa đọc toàn văn bài gốc. Chỉ dùng cho khẳng định hẹp được ghi trong slide-sources.json.

Neel Jain, Avi Schwarzschild, Yuxin Wen, Gowthami Somepalli, John Kirchenbauer, Ping-yeh Chiang, Micah Goldblum, Aniruddha Saha, Jonas Geiping, and Tom Goldstein (2023). Baseline defenses for adversarial attacks against aligned language models.
Bản gốc: https://arxiv.org/pdf/2309.00614
Truy ngược survey: mục tài liệu số 77, bibliography tr. 30; xuất hiện trong nội dung survey tr. 9. https://dl.acm.org/doi/pdf/10.1145/3716628#page=30
Mục ghi trong survey: Neel Jain, Avi Schwarzschild, Yuxin Wen, Gowthami Somepalli, John Kirchenbauer, Ping-yeh Chiang, Micah Goldblum, Aniruddha Saha, Jonas Geiping, and Tom Goldstein (2023). Baseline defenses for adversarial attacks against aligned language models. Retrieved from https://arxiv.org/pdf/2309.00614
Mức kiểm chứng: §4.2; kết quả Table 3 và Figure 4. Mô hình viết lại có thể làm mất chuỗi token đối kháng, nhưng cũng có thể làm thay đổi yêu cầu hợp lệ. | Bản v2, §4.3, Figure 5 và Table 6: BPE-dropout giảm ASR trên Vicuna/Guanaco trong thiết lập thử; làm tăng số token và giảm win rate AlpacaEval. Không hiệu quả đồng đều giữa các mô hình.

Gabriel Alon and Michael Kamfonas (2023). Detecting language model attacks with perplexity.
Bản gốc: https://arxiv.org/pdf/2308.14132
Truy ngược survey: mục tài liệu số 6, bibliography tr. 27; xuất hiện trong nội dung survey tr. 9, 27. https://dl.acm.org/doi/pdf/10.1145/3716628#page=27
Mục ghi trong survey: Gabriel Alon and Michael Kamfonas (2023). Detecting language model attacks with perplexity. Retrieved from https: //arxiv.org/pdf/2308.14132
Mức kiểm chứng: Abstract: LightGBM kết hợp perplexity và độ dài nhằm giảm báo nhầm của ngưỡng perplexity đơn lẻ. Không gán hạn chế của baseline cho bộ phân loại được đề xuất.
-->
