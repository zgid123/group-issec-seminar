---
layout: shifting-intro
hideInToc: true
transition: slide-left
---

# Kiểm chứng trước khi hành động

| Giải pháp trong survey | Cách làm | Mạnh / giới hạn |
| --- | --- | --- |
| Lọc trigger/neuron ref. 38, 83 | Xử lý backdoor trong mô hình | Nhắm đúng mô hình / chưa bao phủ cả agent |
| RLHF ref. 130; TWOSOME — Tan et al. (2024), ref. 171 | Căn chỉnh; chọn hành động trong môi trường | Hỗ trợ mục tiêu / tùy phản hồi và luật |
| RAG, sửa đáp án ref. 191, 233 | Đối chiếu nguồn, phát hiện phần bịa | Tăng căn cứ / nguồn cũng có thể sai |
| Grammar → automaton ref. 94 | Giới hạn bước hợp lệ | Chặn hành động sai luật / chỉ luật đã mã hóa |
<!--

Nguồn: Deng et al. (2025), §§3.2.1–4. Survey nêu lọc dữ liệu/neuron cho backdoor ref. 38,83, fine-tune RLHF ref. 130, TWOSOME trong embodied setting ref. 171, kiểm chứng/sửa hallucination ref. 191,233 và grammar chuyển thành automaton cho planning ref. 94. Survey cảnh báo phòng thủ backdoor thường chỉ xử lý mô hình, chưa cả agent. Chất lượng kết quả phụ thuộc dữ liệu, phản hồi và luật đã định nghĩa.
-->
