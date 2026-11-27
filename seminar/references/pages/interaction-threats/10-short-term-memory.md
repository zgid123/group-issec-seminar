# KIỂM CHỨNG NGUỒN — Short-term Memory

Slide: [pages/interaction-threats/10-short-term-memory.md](../../../pages/interaction-threats/10-short-term-memory.md)

Cập nhật: 2026-11-26. Số trang dưới đây là trang PDF của survey, tương ứng 182:n; không phải số slide.

## NGUỒN TỔNG QUAN

Zehang Deng, Yongjian Guo, Changzhou Han, Wanlun Ma, Junwu Xiong, Sheng Wen, Yang Xiang (2025). AI Agents Under Threat: A Survey of Key Security Challenges and Future Pathways. ACM Computing Surveys 57(7), Article 182, February 2025. https://doi.org/10.1145/3716628
Vị trí: §4.3.1, trang 23.
Mở PDF: https://dl.acm.org/doi/pdf/10.1145/3716628#page=23

## NỘI DUNG / VÍ DỤ / SƠ ĐỒ

- Context hữu hạn và thiếu đồng bộ có thể gây mất thông tin; phụ thuộc thiết kế hệ thống.
  Nguồn: Survey §4.3.1, tr. 23.
- LongRoPE, multi-robot planning và CoT-Influx là hướng liên quan đến context/phối hợp; không phải ba phòng thủ an ninh đã được chứng nhận.
  Nguồn: Survey §4.3.1, tr. 23.

## PHƯƠNG PHÁP — ĐIỂM MẠNH — ĐIỂM YẾU / GIỚI HẠN


LongRoPE — Yiran Ding et al. (2024), mục tài liệu số 37.
Phương pháp: Tìm positional interpolation và mở rộng context theo giai đoạn.
Điểm mạnh: Mở rộng context tới 2.048.000 token trong thí nghiệm.
Điểm yếu / giới hạn: Đánh giá trên LLaMA2/Mistral; chưa kiểm chứng an toàn bộ nhớ.
Phần đã đối chiếu: Abstract. Mở rộng vị trí token và fine-tuning theo giai đoạn; đây là cải thiện context, không phải cơ chế chống dữ liệu độc trong memory.
Nguồn đã dùng kiểm tra: https://arxiv.org/abs/2402.13753

Multi-robot planning — Yongchao Chen et al. (2023), mục tài liệu số 23.
Phương pháp: So sánh phối hợp tập trung, phân tán và hai dạng kết hợp.
Điểm mạnh: Một dạng kết hợp có hiệu quả và khả năng mở rộng tốt hơn.
Điểm yếu / giới hạn: Bốn tác vụ 2D và mô phỏng 3D; không chứng nhận đồng bộ bộ nhớ.
Phần đã đối chiếu: Abstract và §I. State-action history dùng trạng thái/hành động để kiểm soát độ dài context. Hàng Memory synchronization trước đây mô tả sai trọng tâm của bài.
Nguồn đã dùng kiểm tra: https://arxiv.org/html/2309.15943v2

CoT-Influx — Xijie Huang et al. (2023), mục tài liệu số 72.
Phương pháp: Chọn ví dụ CoT và cắt token ít quan trọng để vừa context.
Điểm mạnh: Đánh giá cải thiện suy luận trên năm bộ dữ liệu toán.
Điểm yếu / giới hạn: Nén ví dụ trong prompt; không tóm tắt lịch sử agent.
Phần đã đối chiếu: Abstract: CoT-Influx dùng pruning hai mức (ví dụ và token), đánh giá suy luận trên năm bộ dữ liệu toán. Không phải tóm tắt lịch sử hội thoại.
Nguồn đã dùng kiểm tra: https://arxiv.org/abs/2312.08901

Cách diễn giải giới hạn: phạm vi dữ liệu/mô hình được thử không chứng minh phương pháp thất bại ở nơi khác. Giới hạn phạm vi và thiếu bảo đảm toàn hệ là nhận xét về bằng chứng, không phải số đo mới.

## THÔNG TIN ĐẦY ĐỦ CỦA TỪNG NGUỒN DÙNG TRÊN SLIDE


Yiran Ding, Li Lyna Zhang, Chengruidong Zhang, Yuanyuan Xu, Ning Shang, Jiahang Xu, Fan Yang, and Mao Yang (2024). LongRoPE: Extending LLM context window beyond 2 million tokens.
Bản gốc: https://arxiv.org/pdf/2402.13753
Truy ngược survey: mục tài liệu số 37, bibliography tr. 28; xuất hiện trong nội dung survey tr. 23. https://dl.acm.org/doi/pdf/10.1145/3716628#page=28
Mục ghi trong survey: Yiran Ding, Li Lyna Zhang, Chengruidong Zhang, Yuanyuan Xu, Ning Shang, Jiahang Xu, Fan Yang, and Mao Yang (2024). LongRoPE: Extending LLM context window beyond 2 million tokens. Retrieved from https://arxiv.org/pdf/2402. 13753
Mức kiểm chứng: Abstract. Mở rộng vị trí token và fine-tuning theo giai đoạn; đây là cải thiện context, không phải cơ chế chống dữ liệu độc trong memory.

Yongchao Chen, Jacob Arkin, Yang Zhang, Nicholas Roy, and Chuchu Fan (2023). Scalable multi-robot collaboration with large language models: Centralized or decentralized systems?
Bản gốc: https://arxiv.org/html/2309.15943v2
Truy ngược survey: mục tài liệu số 23, bibliography tr. 28; xuất hiện trong nội dung survey tr. 23. https://dl.acm.org/doi/pdf/10.1145/3716628#page=28
Mục ghi trong survey: Yongchao Chen, Jacob Arkin, Yang Zhang, Nicholas Roy, and Chuchu Fan (2023). Scalable multi-robot collaboration with large language models: Centralized or decentralized systems? Retrieved from https://arxiv.org/html/2309. 15943v2
Mức kiểm chứng: Abstract và §I. State-action history dùng trạng thái/hành động để kiểm soát độ dài context. Hàng Memory synchronization trước đây mô tả sai trọng tâm của bài.

Xijie Huang, Li Lyna Zhang, Kwang-Ting Cheng, and Mao Yang (2023). Fewer is More: Boosting LLM Reasoning with Reinforced Context Pruning.
Bản gốc: https://arxiv.org/pdf/2312.08901
Truy ngược survey: mục tài liệu số 72, bibliography tr. 30; xuất hiện trong nội dung survey tr. 23. https://dl.acm.org/doi/pdf/10.1145/3716628#page=30
Mục ghi trong survey: Xijie Huang, Li Lyna Zhang, Kwang-Ting Cheng, and Mao Yang (2023). Boosting LLM reasoning: Push the limits of few-shot learning with reinforced in-context pruning. Retrieved from https://arxiv.org/pdf/2312.08901
Mức kiểm chứng: Abstract: CoT-Influx dùng pruning hai mức (ví dụ và token), đánh giá suy luận trên năm bộ dữ liệu toán. Không phải tóm tắt lịch sử hội thoại.
Khác biệt phiên bản/định danh: Survey dùng tên “Boosting LLM reasoning: Push the limits of few-shot learning with reinforced in-context pruning”. Trang gốc hiện mang tên “Fewer is More…”, cùng arXiv:2312.08901. Giữ năm bản thảo 2023 như survey.
