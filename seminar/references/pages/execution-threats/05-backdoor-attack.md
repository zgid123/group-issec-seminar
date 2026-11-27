# KIỂM CHỨNG NGUỒN — Backdoor Attack

Slide: [pages/execution-threats/05-backdoor-attack.md](../../../pages/execution-threats/05-backdoor-attack.md)

Cập nhật: 2026-11-26. Số trang dưới đây là trang PDF của survey, tương ứng 182:n; không phải số slide.

## NGUỒN TỔNG QUAN

Zehang Deng, Yongjian Guo, Changzhou Han, Wanlun Ma, Junwu Xiong, Sheng Wen, Yang Xiang (2025). AI Agents Under Threat: A Survey of Key Security Challenges and Future Pathways. ACM Computing Surveys 57(7), Article 182, February 2025. https://doi.org/10.1145/3716628
Vị trí: §3.2.1, trang 12.
Mở PDF: https://dl.acm.org/doi/pdf/10.1145/3716628#page=12

## NỘI DUNG / VÍ DỤ / SƠ ĐỒ

- Hai loại backdoor: đổi kết quả cuối hoặc chỉ đổi quá trình trung gian.
  Nguồn: Wenkai Yang et al. (2024), mục tài liệu số 211 trong survey.
  Vị trí kiểm tra: Survey p.12, hai loại backdoor.
- Sơ đồ email chèn link: plugin Trojan; không gán việc này cho LLM đã bị cài backdoor.
  Nguồn: Tian Dong et al. (2023), mục tài liệu số 39 trong survey.
  Vị trí kiểm tra: Survey p.12, ví dụ email/plugin.
- Februus và Quarantine nghiên cứu mô hình thị giác; không suy ra đã bảo vệ toàn hệ LLM agent.
  Nguồn: Survey §3.2.1, tr. 12.

## PHƯƠNG PHÁP — ĐIỂM MẠNH — ĐIỂM YẾU / GIỚI HẠN


Februus — Bao Gia Doan et al. (2020), mục tài liệu số 38.
Phương pháp: Loại dấu hiệu trigger rồi phục hồi ảnh đầu vào.
Điểm mạnh: Lọc dấu hiệu trigger và phục hồi ảnh ngay lúc chạy.
Điểm yếu / giới hạn: Trigger lớn có thể làm giảm chất lượng phục hồi; chỉ xét ảnh.
Phần đã đối chiếu: Đã đọc abstract và phần Limitations của toàn văn. Phạm vi chính là trigger ảnh; trigger lớn có thể làm giảm chất lượng phục hồi/phân loại.
Nguồn đã dùng kiểm tra: https://arxiv.org/abs/1908.03369

Quarantine — Tianlong Chen et al. (2022), mục tài liệu số 21.
Phương pháp: Pruning để cô lập mạng con giữ backdoor rồi khôi phục trigger.
Điểm mạnh: Cô lập mạng con backdoor để khôi phục trigger.
Điểm yếu / giới hạn: Đánh giá trên DNN thị giác; chưa có bằng chứng cho LLM agent.
Phần đã đối chiếu: Abstract. Trojan lottery ticket giữ đặc trưng backdoor trong khi khả năng phân loại ảnh sạch suy giảm. Không gán đây là biện pháp đồng bộ hay bảo vệ toàn agent.
Nguồn đã dùng kiểm tra: https://arxiv.org/abs/2205.11819

Cách diễn giải giới hạn: phạm vi dữ liệu/mô hình được thử không chứng minh phương pháp thất bại ở nơi khác. Giới hạn phạm vi và thiếu bảo đảm toàn hệ là nhận xét về bằng chứng, không phải số đo mới.

## THÔNG TIN ĐẦY ĐỦ CỦA TỪNG NGUỒN DÙNG TRÊN SLIDE


Wenkai Yang, Xiaohan Bi, Yankai Lin, Sishuo Chen, Jie Zhou, and Xu Sun (2024). Watch out for your agents! Investigating backdoor threats to LLM-Based agents.
Bản gốc: https://arxiv.org/pdf/2402.11208
Truy ngược survey: mục tài liệu số 211, bibliography tr. 35; xuất hiện trong nội dung survey tr. 2, 6, 7, 12. https://dl.acm.org/doi/pdf/10.1145/3716628#page=35
Mục ghi trong survey: Wenkai Yang, Xiaohan Bi, Yankai Lin, Sishuo Chen, Jie Zhou, and Xu Sun (2024). Watch out for your agents! Investigating backdoor threats to LLM-Based agents. Retrieved from https://arxiv.org/pdf/2402.11208
Mức kiểm chứng: Dẫn qua survey; chưa đọc toàn văn bài gốc. Chỉ dùng cho khẳng định hẹp được ghi trong slide-sources.json.

Tian Dong, Guoxing Chen, Shaofeng Li, Minhui Xue, Rayne Holland, Yan Meng, Zhen Liu, and Haojin Zhu (2023). Unleashing cheapfakes through trojan plugins of large language models.
Bản gốc: https://arxiv.org/pdf/2312.00374v1
Truy ngược survey: mục tài liệu số 39, bibliography tr. 28; xuất hiện trong nội dung survey tr. 6, 7, 12. https://dl.acm.org/doi/pdf/10.1145/3716628#page=28
Mục ghi trong survey: Tian Dong, Guoxing Chen, Shaofeng Li, Minhui Xue, Rayne Holland, Yan Meng, Zhen Liu, and Haojin Zhu (2023). Unleashing cheapfakes through trojan plugins of large language models. Retrieved from https://arxiv.org/pdf/2312. 00374v1
Mức kiểm chứng: Dẫn qua survey; chưa đọc toàn văn bài gốc. Chỉ dùng cho khẳng định hẹp được ghi trong slide-sources.json.

Bao Gia Doan, Ehsan Abbasnejad, and Damith C Ranasinghe (2020). Februus: Input purification defense against trojan attacks on deep neural network systems.
Bản gốc: https://arxiv.org/abs/1908.03369
Truy ngược survey: mục tài liệu số 38, bibliography tr. 28; xuất hiện trong nội dung survey tr. 12. https://dl.acm.org/doi/pdf/10.1145/3716628#page=28
Mục ghi trong survey: Bao Gia Doan, Ehsan Abbasnejad, and Damith C Ranasinghe (2020). Februus: Input purification defense against trojan attacks on deep neural network systems. In Proceedings of the ACSAC . 897–912.
Mức kiểm chứng: Đã đọc abstract và phần Limitations của toàn văn. Phạm vi chính là trigger ảnh; trigger lớn có thể làm giảm chất lượng phục hồi/phân loại.

Tianlong Chen, Zhenyu Zhang, Yihua Zhang, Shiyu Chang, Sijia Liu, and Zhangyang Wang (2022). Quarantine: Sparsity can uncover the trojan attack trigger for free.
Bản gốc: https://arxiv.org/abs/2205.11819
Truy ngược survey: mục tài liệu số 21, bibliography tr. 28; xuất hiện trong nội dung survey tr. 12. https://dl.acm.org/doi/pdf/10.1145/3716628#page=28
Mục ghi trong survey: Tianlong Chen, Zhenyu Zhang, Yihua Zhang, Shiyu Chang, Sijia Liu, and Zhangyang Wang (2022). Quarantine: Sparsity can uncover the trojan attack trigger for free. In Proceedings of the CVPR .
Mức kiểm chứng: Abstract. Trojan lottery ticket giữ đặc trưng backdoor trong khi khả năng phân loại ảnh sạch suy giảm. Không gán đây là biện pháp đồng bộ hay bảo vệ toàn agent.
