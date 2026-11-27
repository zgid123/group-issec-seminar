# KIỂM CHỨNG NGUỒN — Indirect Prompt Injection

Slide: [pages/interaction-threats/03-indirect-prompt-injection.md](../../../pages/interaction-threats/03-indirect-prompt-injection.md)

Cập nhật: 2026-11-26. Số trang dưới đây là trang PDF của survey, tương ứng 182:n; không phải số slide.

## NGUỒN TỔNG QUAN

Zehang Deng, Yongjian Guo, Changzhou Han, Wanlun Ma, Junwu Xiong, Sheng Wen, Yang Xiang (2025). AI Agents Under Threat: A Survey of Key Security Challenges and Future Pathways. ACM Computing Surveys 57(7), Article 182, February 2025. https://doi.org/10.1145/3716628
Vị trí: §4.1.1, trang 18, 19.
Mở PDF: https://dl.acm.org/doi/pdf/10.1145/3716628#page=18

## NỘI DUNG / VÍ DỤ / SƠ ĐỒ

- Chỉ dẫn độc nằm trong dữ liệu agent truy xuất, vượt ranh giới dữ liệu/chỉ dẫn.
  Nguồn: Kai Greshake et al. (2023), mục tài liệu số 56 trong survey.
  Vị trí kiểm tra: Abstract: injecting prompts into data likely to be retrieved.
- Sơ đồ website/email là minh họa luồng tấn công; cần agent đọc và làm theo payload.
  Nguồn: Survey §4.1.1, tr. 18, 19.

## PHƯƠNG PHÁP — ĐIỂM MẠNH — ĐIỂM YẾU / GIỚI HẠN


Self-reminder — Chun Fai Chan et al. (2023), mục tài liệu số 17.
Phương pháp: Nhắc lại chỉ dẫn ban đầu mỗi lần gửi prompt tới trợ lý.
Điểm mạnh: Đưa lại chỉ dẫn gốc vào mỗi lượt để nhắc phạm vi nhiệm vụ.
Điểm yếu / giới hạn: Prompt dài hơn làm tăng chi phí; thử nghiệm trên GPT-3.5.
Phần đã đối chiếu: §IV.C, §V, §VI/Table II. Bài đánh giá Self-Reminder dựa trên ý tưởng của Xie et al.; không phải nghiên cứu riêng về nội dung web độc hại.
Nguồn đã dùng kiểm tra: https://arxiv.org/abs/2401.00994

Spotlighting — Keegan Hines et al. (2024), mục tài liệu số 64.
Phương pháp: Biến đổi dữ liệu để đánh dấu nguồn đầu vào không tin cậy.
Điểm mạnh: Giảm thành công của indirect injection trong các thử nghiệm GPT.
Điểm yếu / giới hạn: Bằng chứng thuộc mô hình và tập tấn công được thử.
Phần đã đối chiếu: Abstract. Điểm cốt lõi là cung cấp tín hiệu nguồn gốc xuyên suốt dữ liệu, thay vì để LLM coi mọi đoạn văn là cùng mức tin cậy.
Nguồn đã dùng kiểm tra: https://arxiv.org/abs/2403.14720

Cách diễn giải giới hạn: phạm vi dữ liệu/mô hình được thử không chứng minh phương pháp thất bại ở nơi khác. Giới hạn phạm vi và thiếu bảo đảm toàn hệ là nhận xét về bằng chứng, không phải số đo mới.

## THÔNG TIN ĐẦY ĐỦ CỦA TỪNG NGUỒN DÙNG TRÊN SLIDE


Kai Greshake, Sahar Abdelnabi, Shailesh Mishra, Christoph Endres, Thorsten Holz, and Mario Fritz (2023). Not what you’ve signed up for: Compromising real-world LLM-integrated applications with indirect prompt injection.
Bản gốc: https://arxiv.org/abs/2302.12173
Truy ngược survey: mục tài liệu số 56, bibliography tr. 29; xuất hiện trong nội dung survey tr. 3, 5, 6, 7, 8, 18. https://dl.acm.org/doi/pdf/10.1145/3716628#page=29
Mục ghi trong survey: Kai Greshake, Sahar Abdelnabi, Shailesh Mishra, Christoph Endres, Thorsten Holz, and Mario Fritz (2023). Not what you’ve signed up for: Compromising real-world LLM-integrated applications with indirect prompt injection. In Proceedings of the AISec . 79–90.
Mức kiểm chứng: Đã đối chiếu abstract gốc; không phải kiểm tra toàn văn hoặc tái lập thí nghiệm.

Chun Fai Chan, Daniel Wankit Yip, and Aysan Esmradi (2023). Detection and defense against prominent attacks on preconditioned LLM-integrated virtual assistants.
Bản gốc: https://arxiv.org/abs/2401.00994
Truy ngược survey: mục tài liệu số 17, bibliography tr. 27; xuất hiện trong nội dung survey tr. 6, 7, 19, 27. https://dl.acm.org/doi/pdf/10.1145/3716628#page=27
Mục ghi trong survey: Chun Fai Chan, Daniel Wankit Yip, and Aysan Esmradi (2023). Detection and defense against prominent attacks on preconditioned LLM-integrated virtual assistants. In Proceedings of the CSDE . IEEE.
Mức kiểm chứng: §IV.C, §V, §VI/Table II. Bài đánh giá Self-Reminder dựa trên ý tưởng của Xie et al.; không phải nghiên cứu riêng về nội dung web độc hại.

Keegan Hines, Gary Lopez, Matthew Hall, Federico Zarfati, Yonatan Zunger, and Emre Kiciman (2024). Defending against indirect prompt injection attacks with spotlighting.
Bản gốc: https://arxiv.org/pdf/2403.14720
Truy ngược survey: mục tài liệu số 64, bibliography tr. 29; xuất hiện trong nội dung survey tr. 18, 19. https://dl.acm.org/doi/pdf/10.1145/3716628#page=29
Mục ghi trong survey: Keegan Hines, Gary Lopez, Matthew Hall, Federico Zarfati, Yonatan Zunger, and Emre Kiciman (2024). Defending against indirect prompt injection attacks with spotlighting. Retrieved from https://arxiv.org/pdf/2403.14720
Mức kiểm chứng: Abstract. Điểm cốt lõi là cung cấp tín hiệu nguồn gốc xuyên suốt dữ liệu, thay vì để LLM coi mọi đoạn văn là cùng mức tin cậy.
