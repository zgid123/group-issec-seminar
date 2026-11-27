# KIỂM CHỨNG NGUỒN — Agent2Tool & Supply Chain

Slide: [pages/execution-threats/10-agent2tool-supply-chain.md](../../../pages/execution-threats/10-agent2tool-supply-chain.md)

Cập nhật: 2026-11-26. Số trang dưới đây là trang PDF của survey, tương ứng 182:n; không phải số slide.

## NGUỒN TỔNG QUAN

Zehang Deng, Yongjian Guo, Changzhou Han, Wanlun Ma, Junwu Xiong, Sheng Wen, Yang Xiang (2025). AI Agents Under Threat: A Survey of Key Security Challenges and Future Pathways. ACM Computing Surveys 57(7), Article 182, February 2025. https://doi.org/10.1145/3716628
Vị trí: §3.3.1–§3.3.2, trang 17, 18.
Mở PDF: https://dl.acm.org/doi/pdf/10.1145/3716628#page=17

## NỘI DUNG / VÍ DỤ / SƠ ĐỒ

- Webpage độc điều khiển web agent: WIPI.
  Nguồn: Fangzhou Wu et al. (2024), mục tài liệu số 200 trong survey.
  Vị trí kiểm tra: Abstract: publicly accessible webpages.
- YouTube transcript chèn chỉ dẫn đổi hành vi.
  Nguồn: Embrace The Red (2023), mục tài liệu số 147 trong survey.
  Vị trí kiểm tra: Bài demo chính tác giả, mục Proof of Concept; survey Table 1 p.6.
- Dữ liệu web độc qua WebPilot gây rò rỉ lịch sử bằng Markdown image; plugin không nhất thiết là độc hại.
  Nguồn: Embrace The Red (2023), mục tài liệu số 45 trong survey.
  Vị trí kiểm tra: Bài demo chính tác giả, Untrusted Data and Markdown Injection / Proof of Concept.
- Nguồn 147 và 45 là báo cáo demo kỹ thuật, không gọi là paper bình duyệt.
  Nguồn: Survey §3.3.1–§3.3.2, tr. 17, 18.

## PHƯƠNG PHÁP — ĐIỂM MẠNH — ĐIỂM YẾU / GIỚI HẠN


ToolEmu — Yangjun Ruan et al. (2024), mục tài liệu số 150.
Phương pháp: LLM mô phỏng thực thi tool; evaluator tìm hành vi rủi ro.
Điểm mạnh: Tạo tình huống rủi ro để đánh giá tool mà không dựng tool thật.
Điểm yếu / giới hạn: Mô phỏng chưa phản ánh hoàn toàn việc thực thi tool thật.
Phần đã đối chiếu: Abstract. ToolEmu giúp tạo tình huống rủi ro mà không dựng tool thật. Kiểm tra bằng người cho thấy emulator không phải bản sao hoàn hảo của thực tế.
Nguồn đã dùng kiểm tra: https://arxiv.org/abs/2309.15817

PrivacyAsst — Xinyu Zhang et al. (2024), mục tài liệu số 225.
Phương pháp: Hai hướng: mã hóa đồng cấu và trộn thuộc tính đầu vào.
Điểm mạnh: Cung cấp hai cách bảo vệ dữ liệu khi tương tác với tool.
Điểm yếu / giới hạn: Mới minh họa bằng hai case study; phải chọn cách theo tác vụ.
Phần đã đối chiếu: Nguồn đã đọc: README chính thức, phần Introduction và New Components; PDF công khai chưa tải thành công. Giải pháp shuffling kết hợp attribute forgery và attribute shuffling; bỏ nhận định tăng chi phí chưa đối chiếu.
Nguồn đã dùng kiểm tra: https://github.com/Eyr3/PrivacyAsst

Cách diễn giải giới hạn: phạm vi dữ liệu/mô hình được thử không chứng minh phương pháp thất bại ở nơi khác. Giới hạn phạm vi và thiếu bảo đảm toàn hệ là nhận xét về bằng chứng, không phải số đo mới.

## THÔNG TIN ĐẦY ĐỦ CỦA TỪNG NGUỒN DÙNG TRÊN SLIDE


Fangzhou Wu, Shutong Wu, Yulong Cao, and Chaowei Xiao (2024). WIPI: A new web threat for LLM-driven web agents.
Bản gốc: https://arxiv.org/pdf/2402.16965
Truy ngược survey: mục tài liệu số 200, bibliography tr. 35; xuất hiện trong nội dung survey tr. 6, 7, 17, 18. https://dl.acm.org/doi/pdf/10.1145/3716628#page=35
Mục ghi trong survey: Fangzhou Wu, Shutong Wu, Yulong Cao, and Chaowei Xiao (2024). WIPI: A new web threat for LLM-driven web agents. Retrieved from https://arxiv.org/pdf/2402.16965
Mức kiểm chứng: Đã đối chiếu abstract gốc; không phải kiểm tra toàn văn hoặc tái lập thí nghiệm.

Embrace The Red (2023). Indirect Prompt Injection via YouTube Transcripts.
Bản gốc: https://embracethered.com/blog/posts/2023/chatgpt-plugin-youtube-indirect-prompt-injection/
Truy ngược survey: mục tài liệu số 147, bibliography tr. 33; xuất hiện trong nội dung survey tr. 6, 7. https://dl.acm.org/doi/pdf/10.1145/3716628#page=33
Mục ghi trong survey: Embrace The Red (2023). Indirect Prompt Injection via YouTube Transcripts · Embrace The Red—embracethered.com. Retrieved from https://embracethered.com/blog/posts/2023/chatgpt-plugin-youtube-indirect-prompt-injection/
Mức kiểm chứng: Đã đọc báo cáo demo kỹ thuật của tác giả; đây là blog nghiên cứu, không phải paper bình duyệt.
Khác biệt phiên bản/định danh: Survey Table 1 p.6 trỏ mục 147 cho YouTube transcript; đoạn thân bài p.18 trỏ mục 68 khác. Dùng mục 147 và demo gốc để định danh ví dụ.

Embrace The Red (2023). ChatGPT Plugins: Data Exfiltration Via Images & Cross Plugin Request Forgery.
Bản gốc: https://embracethered.com/blog/posts/2023/chatgpt-webpilot-data-exfil-via-markdown-injection/
Truy ngược survey: mục tài liệu số 45, bibliography tr. 29; xuất hiện trong nội dung survey tr. 6, 7, 18. https://dl.acm.org/doi/pdf/10.1145/3716628#page=29
Mục ghi trong survey: Embrace The Red (2023). ChatGPT Plugins: Data Exfiltration Via Images & Cross Plugin Request Forgery. Retrieved from https://embracethered.com/blog/posts/2023/chatgpt-webpilot-data-exfil-via-markdown-injection/
Mức kiểm chứng: Đã đọc báo cáo demo kỹ thuật của tác giả; đây là blog nghiên cứu, không phải paper bình duyệt.
Khác biệt phiên bản/định danh: Survey gọi ví dụ này là malicious plugin; báo cáo gốc mô tả malicious retrieved data. Slide theo nguồn gốc, không cáo buộc bản thân WebPilot là plugin độc.

Yangjun Ruan, Honghua Dong, Andrew Wang, Silviu Pitis, Yongchao Zhou, Jimmy Ba, Yann Dubois, Chris J. Maddison, and Tatsunori Hashimoto (2024). Identifying the risks of LM agents with an LM-emulated sandbox.
Bản gốc: https://arxiv.org/abs/2309.15817
Truy ngược survey: mục tài liệu số 150, bibliography tr. 33; xuất hiện trong nội dung survey tr. 6, 7, 14, 17, 26. https://dl.acm.org/doi/pdf/10.1145/3716628#page=33
Mục ghi trong survey: Yangjun Ruan, Honghua Dong, Andrew Wang, Silviu Pitis, Yongchao Zhou, Jimmy Ba, Yann Dubois, Chris J. Maddison, and Tatsunori Hashimoto (2024). Identifying the risks of LM agents with an LM-emulated sandbox. In Proceedings of the ICLR .
Mức kiểm chứng: Abstract. ToolEmu giúp tạo tình huống rủi ro mà không dựng tool thật. Kiểm tra bằng người cho thấy emulator không phải bản sao hoàn hảo của thực tế.

Xinyu Zhang, Huiyu Xu, Zhongjie Ba, Zhibo Wang, Yuan Hong, Jian Liu, Zhan Qin, and Kui Ren (2024). PrivacyAsst: Safeguarding User Privacy in Tool-Using Large Language Model Agents.
Bản gốc: https://ieeexplore.ieee.org/document/10458329
Truy ngược survey: mục tài liệu số 225, bibliography tr. 36; xuất hiện trong nội dung survey tr. 17, 26. https://dl.acm.org/doi/pdf/10.1145/3716628#page=36
Mục ghi trong survey: Xinyu Zhang, Huiyu Xu, Zhongjie Ba, Zhibo Wang, Yuan Hong, Jian Liu, Zhan Qin, and Kui Ren (2024). PrivacyAsst: Safeguarding user privacy in tool-using large language model agents. IEEE Transactions on Dependable and Secure Computing 21, 6 (2024), 5242–5258.
Mức kiểm chứng: Nguồn đã đọc: README chính thức, phần Introduction và New Components; PDF công khai chưa tải thành công. Giải pháp shuffling kết hợp attribute forgery và attribute shuffling; bỏ nhận định tăng chi phí chưa đối chiếu.
