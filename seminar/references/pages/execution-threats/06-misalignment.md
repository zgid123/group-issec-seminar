# KIỂM CHỨNG NGUỒN — Misalignment

Slide: [pages/execution-threats/06-misalignment.md](../../../pages/execution-threats/06-misalignment.md)

Cập nhật: 2026-11-26. Số trang dưới đây là trang PDF của survey, tương ứng 182:n; không phải số slide.

## NGUỒN TỔNG QUAN

Zehang Deng, Yongjian Guo, Changzhou Han, Wanlun Ma, Junwu Xiong, Sheng Wen, Yang Xiang (2025). AI Agents Under Threat: A Survey of Key Security Challenges and Future Pathways. ACM Computing Surveys 57(7), Article 182, February 2025. https://doi.org/10.1145/3716628
Vị trí: §3.2.2, trang 12, 13, 14.
Mở PDF: https://dl.acm.org/doi/pdf/10.1145/3716628#page=12

## NỘI DUNG / VÍ DỤ / SƠ ĐỒ

- Dữ liệu độc/thiên vị, sycophancy và hiểu môi trường chưa đầy đủ: ba nhóm survey tổng hợp; không khẳng định mô hình “biết mình sai”.
  Nguồn: Survey §3.2.2, tr. 12, 13, 14.
- Đèn giao thông là tình huống ToolEmu mô phỏng, không phải tai nạn ngoài đời.
  Nguồn: Yangjun Ruan et al. (2024), mục tài liệu số 150 trong survey.
  Vị trí kiểm tra: Survey p.14, embodied environment; ToolEmu abstract xác định sandbox mô phỏng.

## PHƯƠNG PHÁP — ĐIỂM MẠNH — ĐIỂM YẾU / GIỚI HẠN


InstructGPT / RLHF — Long Ouyang et al. (2022), mục tài liệu số 130.
Phương pháp: Học từ minh họa và xếp hạng câu trả lời của con người.
Điểm mạnh: Người đánh giá ưu tiên InstructGPT hơn GPT-3 trên tập prompt của bài.
Điểm yếu / giới hạn: Mô hình vẫn mắc lỗi; đánh giá tập trung vào câu trả lời.
Phần đã đối chiếu: Abstract. Pipeline: supervised fine-tuning từ demonstrations, rồi tối ưu bằng phản hồi xếp hạng. Không phải chứng nhận an toàn khi gọi tool.
Nguồn đã dùng kiểm tra: https://arxiv.org/abs/2203.02155

SafeguardGPT — Baihan Lin et al. (2023), mục tài liệu số 98.
Phương pháp: Bốn vai: Chatbot, User, Therapist và Critic.
Điểm mạnh: Minh họa cải thiện hội thoại qua một tình huống mô phỏng.
Điểm yếu / giới hạn: Bằng chứng là ví dụ hội thoại, chưa phải đánh giá toàn hệ agent.
Phần đã đối chiếu: Đã đọc §4 và Figure 2 của toàn văn. Chatbot hỏi Therapist trước khi trả lời; Critic đánh giá lịch sử. Ví dụ dùng bốn instance GPT-3.5 và chủ động gợi chatbot hành vi cần sửa.
Nguồn đã dùng kiểm tra: https://arxiv.org/abs/2304.00416

TWOSOME — Weihao Tan et al. (2024), mục tài liệu số 171.
Phương pháp: Chấm xác suất các hành động hợp lệ; cập nhật LoRA bằng PPO.
Điểm mạnh: Gắn lựa chọn hành động với tập hành động hợp lệ của môi trường.
Điểm yếu / giới hạn: Đánh giá trên Overcooked và VirtualHome; chưa bao phủ toàn hệ agent.
Phần đã đối chiếu: Abstract. Actor và critic chia sẻ LLM đóng băng; LoRA được huấn luyện qua tương tác. Hành động thuộc tập hợp lệ không đồng nghĩa đã kiểm chứng an toàn.
Nguồn đã dùng kiểm tra: https://arxiv.org/abs/2401.14151

Cách diễn giải giới hạn: phạm vi dữ liệu/mô hình được thử không chứng minh phương pháp thất bại ở nơi khác. Giới hạn phạm vi và thiếu bảo đảm toàn hệ là nhận xét về bằng chứng, không phải số đo mới.

## THÔNG TIN ĐẦY ĐỦ CỦA TỪNG NGUỒN DÙNG TRÊN SLIDE


Yangjun Ruan, Honghua Dong, Andrew Wang, Silviu Pitis, Yongchao Zhou, Jimmy Ba, Yann Dubois, Chris J. Maddison, and Tatsunori Hashimoto (2024). Identifying the risks of LM agents with an LM-emulated sandbox.
Bản gốc: https://arxiv.org/abs/2309.15817
Truy ngược survey: mục tài liệu số 150, bibliography tr. 33; xuất hiện trong nội dung survey tr. 6, 7, 14, 17, 26. https://dl.acm.org/doi/pdf/10.1145/3716628#page=33
Mục ghi trong survey: Yangjun Ruan, Honghua Dong, Andrew Wang, Silviu Pitis, Yongchao Zhou, Jimmy Ba, Yann Dubois, Chris J. Maddison, and Tatsunori Hashimoto (2024). Identifying the risks of LM agents with an LM-emulated sandbox. In Proceedings of the ICLR .
Mức kiểm chứng: Dẫn qua survey; chưa đọc toàn văn bài gốc. Chỉ dùng cho khẳng định hẹp được ghi trong slide-sources.json.

Long Ouyang, Jeffrey Wu, Xu Jiang, Diogo Almeida, Carroll Wainwright, Pamela Mishkin, Chong Zhang, Sandhini Agarwal, Katarina Slama, Alex Ray et al (2022). Training language models to follow instructions with human feedback.
Bản gốc: https://arxiv.org/abs/2203.02155
Truy ngược survey: mục tài liệu số 130, bibliography tr. 32; xuất hiện trong nội dung survey tr. 14, 19. https://dl.acm.org/doi/pdf/10.1145/3716628#page=32
Mục ghi trong survey: Long Ouyang, Jeffrey Wu, Xu Jiang, Diogo Almeida, Carroll Wainwright, Pamela Mishkin, Chong Zhang, Sandhini Agarwal, Katarina Slama, Alex Ray et al (2022). Training language models to follow instructions with human feedback. NeurIPS .
Mức kiểm chứng: Abstract. Pipeline: supervised fine-tuning từ demonstrations, rồi tối ưu bằng phản hồi xếp hạng. Không phải chứng nhận an toàn khi gọi tool.

Baihan Lin, Djallel Bouneffouf, Guillermo Cecchi, and Kush R. Varshney (2023). Towards healthy AI: large language models need therapists too.
Bản gốc: https://arxiv.org/pdf/2304.00416
Truy ngược survey: mục tài liệu số 98, bibliography tr. 31; xuất hiện trong nội dung survey tr. 6, 7, 14. https://dl.acm.org/doi/pdf/10.1145/3716628#page=31
Mục ghi trong survey: Baihan Lin, Djallel Bouneffouf, Guillermo Cecchi, and Kush R. Varshney (2023). Towards healthy AI: large language models need therapists too. Retrieved from https://arxiv.org/pdf/2304.00416
Mức kiểm chứng: Đã đọc §4 và Figure 2 của toàn văn. Chatbot hỏi Therapist trước khi trả lời; Critic đánh giá lịch sử. Ví dụ dùng bốn instance GPT-3.5 và chủ động gợi chatbot hành vi cần sửa.

Weihao Tan, Wentao Zhang, Shanqi Liu, Longtao Zheng, Xinrun Wang, and Bo An (2024). True knowledge comes from practice: Aligning large language models with embodied environments via reinforcement learning.
Bản gốc: https://arxiv.org/abs/2401.14151
Truy ngược survey: mục tài liệu số 171, bibliography tr. 34; xuất hiện trong nội dung survey tr. 6, 7, 14. https://dl.acm.org/doi/pdf/10.1145/3716628#page=34
Mục ghi trong survey: Weihao Tan, Wentao Zhang, Shanqi Liu, Longtao Zheng, Xinrun Wang, and Bo An (2024). True knowledge comes from practice: Aligning large language models with embodied environments via reinforcement learning. In Proceedings of the ICLR .
Mức kiểm chứng: Abstract. Actor và critic chia sẻ LLM đóng băng; LoRA được huấn luyện qua tương tác. Hành động thuộc tập hợp lệ không đồng nghĩa đã kiểm chứng an toàn.
