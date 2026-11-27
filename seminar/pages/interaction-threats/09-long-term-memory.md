---
layout: shifting-intro
hideInToc: true
clicks: 2
transition: slide-left
---

# Long-term Memory

<div v-if="$clicks < 2" class="seminar-content">
  <p class="seminar-lead"><strong>PoisonedRAG cho thấy vài văn bản độc có thể làm lệch câu trả lời trong thiết lập thực nghiệm</strong></p>
  <MemoryThreatDiagram />
  <div class="seminar-three seminar-below">
    <ContentCard title="Đầu độc" tone="peach">
      <p>5 văn bản độc / câu hỏi mục tiêu; ASR 90% trong thí nghiệm</p>
    </ContentCard>
    <ContentCard title="Rò rỉ riêng tư" tone="peach">
      <p>Prompt có cấu trúc rút dữ liệu; dịch ngược embedding (<a href="https://aclanthology.org/2023.findings-acl.881/" target="_blank" rel="noopener noreferrer">Li et al., 2023</a>; <a href="https://aclanthology.org/2023.emnlp-main.765/" target="_blank" rel="noopener noreferrer">Morris et al., 2023</a>)</p>
    </ContentCard>
    <ContentCard title="Mâu thuẫn, thời gian" tone="peach">
      <p>Lưu cả "Trái Đất tròn" và "phẳng"; sai mốc hiệu lực</p>
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
        <template #heading>PoisonedRAG<span class="defense-citation"><a href="https://arxiv.org/pdf/2402.07867" target="_blank" rel="noopener noreferrer">Zou et al., 2024</a></span></template>
        <TableComparisonCell align="left">Chèn văn bản độc để RAG trả lời theo mục tiêu kẻ tấn công.</TableComparisonCell>
        <TableComparisonCell align="left">Làm rõ điểm yếu của RAG bằng tấn công và thử nghiệm phòng thủ.</TableComparisonCell>
        <TableComparisonCell align="left">Các defense được thử chưa đủ; kết quả gắn với thiết lập của bài.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>RAG privacy<span class="defense-citation"><a href="https://arxiv.org/pdf/2402.16893" target="_blank" rel="noopener noreferrer">Zeng et al., 2024</a></span></template>
        <TableComparisonCell align="left">Dùng truy vấn tấn công để khảo sát rò rỉ dữ liệu truy xuất.</TableComparisonCell>
        <TableComparisonCell align="left">Phân biệt rò rỉ từ kho truy xuất và từ dữ liệu huấn luyện.</TableComparisonCell>
        <TableComparisonCell align="left">Là nghiên cứu rủi ro; chưa cung cấp bảo đảm riêng tư tổng quát.</TableComparisonCell>
      </TableComparisonRow>
    </TableComparisonRows>
  </TableComparison>
</div>

<!--
GHI CHÚ THUYẾT TRÌNH

[click]

PoisonedRAG: năm văn bản độc cho mỗi câu hỏi mục tiêu, 90% ASR trong thiết lập của bài; không phải một con số chung cho mọi RAG.

Truy vấn làm rò rỉ dữ liệu từ kho truy xuất.

Khôi phục văn bản từ sentence embeddings.

Dữ liệu mâu thuẫn/lỗi thời là rủi ro survey nêu. Ví dụ Trái Đất tròn/phẳng là minh họa, không phải thí nghiệm PoisonedRAG.

[click]

Bảng tiếp theo giới thiệu phương pháp, điểm mạnh và điểm yếu / giới hạn. Với mỗi hàng, giải thích cơ chế trước, sau đó nêu kết quả hoặc khả năng đã được mô tả, rồi chốt phạm vi bằng chứng. Giới hạn đánh giá không đồng nghĩa phương pháp thất bại ở mọi bối cảnh. Các chi tiết và nguồn kiểm tra nằm bên dưới.

---

KIỂM CHỨNG NGUỒN — Long-term Memory
Cập nhật: 2026-11-26. Số trang dưới đây là trang PDF của survey, tương ứng 182:n; không phải số slide.

NGUỒN TỔNG QUAN
Zehang Deng, Yongjian Guo, Changzhou Han, Wanlun Ma, Junwu Xiong, Sheng Wen, Yang Xiang (2025). AI Agents Under Threat: A Survey of Key Security Challenges and Future Pathways. ACM Computing Surveys 57(7), Article 182, February 2025. https://doi.org/10.1145/3716628
Vị trí: §4.3.2, trang 23, 24.
Mở PDF: https://dl.acm.org/doi/pdf/10.1145/3716628#page=23

NỘI DUNG / VÍ DỤ / SƠ ĐỒ
• PoisonedRAG: năm văn bản độc cho mỗi câu hỏi mục tiêu, 90% ASR trong thiết lập của bài; không phải một con số chung cho mọi RAG.
  Nguồn: Wei Zou et al. (2024), mục tài liệu số 235 trong survey.
  Vị trí kiểm tra: Abstract: five malicious texts for each target question.
• Truy vấn làm rò rỉ dữ liệu từ kho truy xuất.
  Nguồn: Shenglai Zeng et al. (2024), mục tài liệu số 220 trong survey.
  Vị trí kiểm tra: Abstract: privacy of retrieved data.
• Khôi phục văn bản từ sentence embeddings.
  Nguồn: Haoran Li et al. (2023), mục tài liệu số 91 trong survey; John Morris et al. (2023), mục tài liệu số 120 trong survey.
  Vị trí kiểm tra: Survey p.24, embedding inversion; original abstracts.
• Dữ liệu mâu thuẫn/lỗi thời là rủi ro survey nêu. Ví dụ Trái Đất tròn/phẳng là minh họa, không phải thí nghiệm PoisonedRAG.
  Nguồn: Survey §4.3.2, tr. 23, 24.

PHƯƠNG PHÁP — ĐIỂM MẠNH — ĐIỂM YẾU / GIỚI HẠN

PoisonedRAG — Wei Zou et al. (2024), mục tài liệu số 235.
Phương pháp: Chèn văn bản độc để RAG trả lời theo mục tiêu kẻ tấn công.
Điểm mạnh: Làm rõ điểm yếu của RAG bằng tấn công và thử nghiệm phòng thủ.
Điểm yếu / giới hạn: Các defense được thử chưa đủ; kết quả gắn với thiết lập của bài.
Phần đã đối chiếu: Abstract. Năm văn bản độc là cho mỗi câu hỏi mục tiêu; kết quả 90% thuộc thiết lập thực nghiệm trên kho hàng triệu văn bản, không phải mọi RAG.
Nguồn đã dùng kiểm tra: https://arxiv.org/abs/2402.07867

RAG privacy — Shenglai Zeng et al. (2024), mục tài liệu số 220.
Phương pháp: Dùng truy vấn tấn công để khảo sát rò rỉ dữ liệu truy xuất.
Điểm mạnh: Phân biệt rò rỉ từ kho truy xuất và từ dữ liệu huấn luyện.
Điểm yếu / giới hạn: Là nghiên cứu rủi ro; chưa cung cấp bảo đảm riêng tư tổng quát.
Phần đã đối chiếu: Abstract. Phân biệt hai nguồn riêng tư: dữ liệu trong kho truy xuất và dữ liệu từng dùng huấn luyện LLM.
Nguồn đã dùng kiểm tra: https://arxiv.org/abs/2402.16893

Cách diễn giải giới hạn: phạm vi dữ liệu/mô hình được thử không chứng minh phương pháp thất bại ở nơi khác. Giới hạn phạm vi và thiếu bảo đảm toàn hệ là nhận xét về bằng chứng, không phải số đo mới.

THÔNG TIN ĐẦY ĐỦ CỦA TỪNG NGUỒN DÙNG TRÊN SLIDE

Wei Zou, Runpeng Geng, Binghui Wang, and Jinyuan Jia (2024). PoisonedRAG: Knowledge Corruption Attacks to Retrieval-Augmented Generation of Large Language Models.
Bản gốc: https://arxiv.org/pdf/2402.07867
Truy ngược survey: mục tài liệu số 235, bibliography tr. 36; xuất hiện trong nội dung survey tr. 6, 7, 24, 26. https://dl.acm.org/doi/pdf/10.1145/3716628#page=36
Mục ghi trong survey: Wei Zou, Runpeng Geng, Binghui Wang, and Jinyuan Jia (2024). PoisonedRAG: Knowledge poisoning attacks to retrieval-augmented generation of large language models. Retrieved from https://arxiv.org/pdf/2402.07867
Mức kiểm chứng: Abstract. Năm văn bản độc là cho mỗi câu hỏi mục tiêu; kết quả 90% thuộc thiết lập thực nghiệm trên kho hàng triệu văn bản, không phải mọi RAG.
Khác biệt phiên bản/định danh: Tên trong survey: “Knowledge poisoning attacks…”. Trang arXiv hiện dùng “Knowledge Corruption Attacks…”. Cùng arXiv:2402.07867; số liệu 5 văn bản/câu hỏi và 90% đã đối chiếu abstract.

Shenglai Zeng, Jiankun Zhang, Pengfei He, Yue Xing, Yiding Liu, Han Xu, Jie Ren, Shuaiqiang Wang, Dawei Yin, Yi Chang et al (2024). The good and the bad: Exploring privacy issues in retrieval-augmented generation (RAG).
Bản gốc: https://arxiv.org/pdf/2402.16893
Truy ngược survey: mục tài liệu số 220, bibliography tr. 36; xuất hiện trong nội dung survey tr. 6, 7, 24. https://dl.acm.org/doi/pdf/10.1145/3716628#page=36
Mục ghi trong survey: Shenglai Zeng, Jiankun Zhang, Pengfei He, Yue Xing, Yiding Liu, Han Xu, Jie Ren, Shuaiqiang Wang, Dawei Yin, Yi Chang et al (2024). The good and the bad: Exploring privacy issues in retrieval-augmented generation (RAG). Retrieved from https://arxiv.org/pdf/2402.16893
Mức kiểm chứng: Abstract. Phân biệt hai nguồn riêng tư: dữ liệu trong kho truy xuất và dữ liệu từng dùng huấn luyện LLM.

Haoran Li, Mingshi Xu, and Yangqiu Song (2023). Sentence embedding leaks more information than you expect: Generative embedding inversion attack to recover the whole sentence.
Bản gốc: https://aclanthology.org/2023.findings-acl.881/
Truy ngược survey: mục tài liệu số 91, bibliography tr. 31; xuất hiện trong nội dung survey tr. 24. https://dl.acm.org/doi/pdf/10.1145/3716628#page=31
Mục ghi trong survey: Haoran Li, Mingshi Xu, and Yangqiu Song (2023). Sentence embedding leaks more information than you expect: Generative embedding inversion attack to recover the whole sentence. In Proceedings of the ACL .
Mức kiểm chứng: Đã đối chiếu abstract gốc; không phải kiểm tra toàn văn hoặc tái lập thí nghiệm.

John Morris, Volodymyr Kuleshov, Vitaly Shmatikov, and Alexander Rush (2023). Text embeddings reveal (almost) as much as text.
Bản gốc: https://aclanthology.org/2023.emnlp-main.765/
Truy ngược survey: mục tài liệu số 120, bibliography tr. 32; xuất hiện trong nội dung survey tr. 24. https://dl.acm.org/doi/pdf/10.1145/3716628#page=32
Mục ghi trong survey: John Morris, Volodymyr Kuleshov, Vitaly Shmatikov, and Alexander Rush (2023). Text embeddings reveal (almost) as much as text. In Proceedings of the EMNLP .
Mức kiểm chứng: Đã đối chiếu abstract gốc; không phải kiểm tra toàn văn hoặc tái lập thí nghiệm.
-->
