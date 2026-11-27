# KIỂM CHỨNG NGUỒN — Hallucination

Slide: [pages/execution-threats/07-hallucination.md](../../../pages/execution-threats/07-hallucination.md)

Cập nhật: 2026-11-26. Số trang dưới đây là trang PDF của survey, tương ứng 182:n; không phải số slide.

## NGUỒN TỔNG QUAN

Zehang Deng, Yongjian Guo, Changzhou Han, Wanlun Ma, Junwu Xiong, Sheng Wen, Yang Xiang (2025). AI Agents Under Threat: A Survey of Key Security Challenges and Future Pathways. ACM Computing Surveys 57(7), Article 182, February 2025. https://doi.org/10.1145/3716628
Vị trí: §3.2.3, trang 14, 15.
Mở PDF: https://dl.acm.org/doi/pdf/10.1145/3716628#page=14

## NỘI DUNG / VÍ DỤ / SƠ ĐỒ

- Nối agent đơn giản có thể gây cascading hallucinations; đây là động cơ thiết kế MetaGPT, không phải mọi hợp tác đều làm tăng lỗi.
  Nguồn: Sirui Hong et al. (2024), mục tài liệu số 65 trong survey.
  Vị trí kiểm tra: Abstract, naive chaining / cascading hallucinations.

## PHƯƠNG PHÁP — ĐIỂM MẠNH — ĐIỂM YẾU / GIỚI HẠN


SAFE — Jerry Wei et al. (2024), mục tài liệu số 191.
Phương pháp: Tách câu trả lời thành các fact, kiểm tra bằng Google Search.
Điểm mạnh: Đánh giá tính đúng của nội dung dài bằng bằng chứng tìm kiếm.
Điểm yếu / giới hạn: Là bộ đánh giá; không tự sửa câu trả lời.
Phần đã đối chiếu: Abstract. SAFE xác định một fact có được kết quả tìm kiếm hỗ trợ hay không. Không gọi đây là cơ chế bảo đảm mọi thông tin đúng.
Nguồn đã dùng kiểm tra: https://arxiv.org/abs/2403.18802

Neural Path Hunter — Nouha Dziri et al. (2021), mục tài liệu số 43.
Phương pháp: Fact critic tìm lỗi; truy vấn knowledge graph để sửa entity.
Điểm mạnh: Phát hiện và sửa entity bằng tri thức từ knowledge graph.
Điểm yếu / giới hạn: Cần knowledge graph phù hợp; phạm vi thử nghiệm là OpenDialKG.
Phần đã đối chiếu: Đã đọc §3 của toàn văn: hai module là token-level hallucination critic và entity mention retriever. Bài đánh giá trên OpenDialKG.
Nguồn đã dùng kiểm tra: https://aclanthology.org/2021.emnlp-main.168/

Multi-agent debate — Yilun Du et al. (2023), mục tài liệu số 41.
Phương pháp: Nhiều LLM đề xuất rồi phản biện đáp án qua nhiều vòng.
Điểm mạnh: Cải thiện suy luận và factuality trong các tác vụ được thử.
Điểm yếu / giới hạn: Kết quả thực nghiệm; không chứng nhận đồng thuận luôn đúng.
Phần đã đối chiếu: Đã đọc §5 Limitations and Discussion của toàn văn. Tác giả ghi nhận tốn nhiều thế hệ câu trả lời hơn, khó xử lý debate dài và vẫn có thể đồng thuận về đáp án sai.
Nguồn đã dùng kiểm tra: https://arxiv.org/abs/2305.14325

Cách diễn giải giới hạn: phạm vi dữ liệu/mô hình được thử không chứng minh phương pháp thất bại ở nơi khác. Giới hạn phạm vi và thiếu bảo đảm toàn hệ là nhận xét về bằng chứng, không phải số đo mới.

## THÔNG TIN ĐẦY ĐỦ CỦA TỪNG NGUỒN DÙNG TRÊN SLIDE


Sirui Hong, Mingchen Zhuge, Jonathan Chen, Xiawu Zheng, Yuheng Cheng, Jinlin Wang, Ceyao Zhang, Zili Wang, Steven Ka Shing Yau, Zijuan Lin, Liyang Zhou, Chenyu Ran, Lingfeng Xiao, Chenglin Wu, and Jürgen Schmidhuber (2024). MetaGPT: Meta programming for a multi-agent collaborative framework.
Bản gốc: https://arxiv.org/abs/2308.00352
Truy ngược survey: mục tài liệu số 65, bibliography tr. 29; xuất hiện trong nội dung survey tr. 21. https://dl.acm.org/doi/pdf/10.1145/3716628#page=29
Mục ghi trong survey: Sirui Hong, Mingchen Zhuge, Jonathan Chen, Xiawu Zheng, Yuheng Cheng, Jinlin Wang, Ceyao Zhang, Zili Wang, Steven Ka Shing Yau, Zijuan Lin, Liyang Zhou, Chenyu Ran, Lingfeng Xiao, Chenglin Wu, and Jürgen Schmidhuber (2024). MetaGPT: Meta programming for a multi-agent collaborative framework. In Proceedings of the ICLR .
Mức kiểm chứng: Đã đối chiếu abstract gốc; không phải kiểm tra toàn văn hoặc tái lập thí nghiệm.

Jerry Wei, Chengrun Yang, Xinying Song, Yifeng Lu, Nathan Hu, Dustin Tran, Daiyi Peng, Ruibo Liu, Da Huang, Cosmo Du et al (2024). Long-form factuality in large language models.
Bản gốc: https://arxiv.org/pdf/2403.18802
Truy ngược survey: mục tài liệu số 191, bibliography tr. 34; xuất hiện trong nội dung survey tr. 15. https://dl.acm.org/doi/pdf/10.1145/3716628#page=34
Mục ghi trong survey: Jerry Wei, Chengrun Yang, Xinying Song, Yifeng Lu, Nathan Hu, Dustin Tran, Daiyi Peng, Ruibo Liu, Da Huang, Cosmo Du et al (2024). Long-form factuality in large language models. Retrieved from https://arxiv.org/pdf/2403.18802
Mức kiểm chứng: Abstract. SAFE xác định một fact có được kết quả tìm kiếm hỗ trợ hay không. Không gọi đây là cơ chế bảo đảm mọi thông tin đúng.

Nouha Dziri, Andrea Madotto, Osmar Zaïane, and Avishek Joey Bose (2021). Neural path hunter: Reducing hallucination in dialogue systems via path grounding.
Bản gốc: https://aclanthology.org/2021.emnlp-main.168/
Truy ngược survey: mục tài liệu số 43, bibliography tr. 29; xuất hiện trong nội dung survey tr. 15. https://dl.acm.org/doi/pdf/10.1145/3716628#page=29
Mục ghi trong survey: Nouha Dziri, Andrea Madotto, Osmar Zaïane, and Avishek Joey Bose (2021). Neural path hunter: Reducing hallucination in dialogue systems via path grounding. In Proceedings of the EMNLP .
Mức kiểm chứng: Đã đọc §3 của toàn văn: hai module là token-level hallucination critic và entity mention retriever. Bài đánh giá trên OpenDialKG.

Yilun Du, Shuang Li, Antonio Torralba, Joshua B. Tenenbaum, and Igor Mordatch (2023). Improving factuality and reasoning in language models through multiagent debate.
Bản gốc: https://arxiv.org/pdf/2305.14325
Truy ngược survey: mục tài liệu số 41, bibliography tr. 28; xuất hiện trong nội dung survey tr. 6, 7, 15. https://dl.acm.org/doi/pdf/10.1145/3716628#page=28
Mục ghi trong survey: Yilun Du, Shuang Li, Antonio Torralba, Joshua B. Tenenbaum, and Igor Mordatch (2023). Improving factuality and reasoning in language models through multiagent debate. Retrieved from https://arxiv.org/pdf/2305.14325
Mức kiểm chứng: Đã đọc §5 Limitations and Discussion của toàn văn. Tác giả ghi nhận tốn nhiều thế hệ câu trả lời hơn, khó xử lý debate dài và vẫn có thể đồng thuận về đáp án sai.
