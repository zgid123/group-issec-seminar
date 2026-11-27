---
layout: shifting-intro
hideInToc: true
clicks: 2
transition: slide-left
---

# Bốn khoảng trống bảo mật

<RectangleOrbitTetrad v-if="$clicks < 2" :height="360">
  <RectangleOrbitTetradCenter title="AI agent" />
  <RectangleOrbitTetradCallout>
    <RectangleOrbitTetradHeading>Gap 1</RectangleOrbitTetradHeading>
    <RectangleOrbitTetradContent>Đầu vào nhiều bước, khó đoán trước<br />→ Perception</RectangleOrbitTetradContent>
  </RectangleOrbitTetradCallout>
  <RectangleOrbitTetradCallout>
    <RectangleOrbitTetradHeading>Gap 2</RectangleOrbitTetradHeading>
    <RectangleOrbitTetradContent>Thực thi bên trong phức tạp, khó quan sát<br />→ Brain, Action</RectangleOrbitTetradContent>
  </RectangleOrbitTetradCallout>
  <RectangleOrbitTetradCallout>
    <RectangleOrbitTetradHeading>Gap 3</RectangleOrbitTetradHeading>
    <RectangleOrbitTetradContent>Môi trường vận hành luôn thay đổi<br />→ Agent2Environment</RectangleOrbitTetradContent>
  </RectangleOrbitTetradCallout>
  <RectangleOrbitTetradCallout>
    <RectangleOrbitTetradHeading>Gap 4</RectangleOrbitTetradHeading>
    <RectangleOrbitTetradContent>Tương tác với bên ngoài không đáng tin<br />→ Agent2Agent, Memory</RectangleOrbitTetradContent>
  </RectangleOrbitTetradCallout>
</RectangleOrbitTetrad>

<GapsDiagram v-else />

<!--
GHI CHÚ THUYẾT TRÌNH

[click]

Có bốn điểm khó kiểm soát: đầu vào thay đổi qua nhiều lượt; xử lý bên trong phức tạp; môi trường vận hành thay đổi; và dữ liệu bên ngoài có thể không đáng tin.

[click]

Trên sơ đồ, chỉ từng vị trí tương ứng. Một yêu cầu ban đầu bình thường vẫn có thể dẫn đến hành động sai sau vài lần trao đổi.

---

KIỂM CHỨNG NGUỒN — Bốn khoảng trống bảo mật
Cập nhật: 2026-11-26. Số trang dưới đây là trang PDF của survey, tương ứng 182:n; không phải số slide.

NGUỒN TỔNG QUAN
Zehang Deng, Yongjian Guo, Changzhou Han, Wanlun Ma, Junwu Xiong, Sheng Wen, Yang Xiang (2025). AI Agents Under Threat: A Survey of Key Security Challenges and Future Pathways. ACM Computing Surveys 57(7), Article 182, February 2025. https://doi.org/10.1145/3716628
Vị trí: §2.2; Figure 1, trang 3, 5.
Mở PDF: https://dl.acm.org/doi/pdf/10.1145/3716628#page=3

NỘI DUNG / VÍ DỤ / SƠ ĐỒ
• Bốn khoảng trống và liên hệ thành phần agent: tổng hợp §2.2; cách bố trí là minh họa.
  Nguồn: Survey §2.2; Figure 1, tr. 3, 5.

THÔNG TIN ĐẦY ĐỦ CỦA TỪNG NGUỒN DÙNG TRÊN SLIDE
Slide này tổng hợp trực tiếp survey; không sử dụng paper gốc riêng để minh chứng kết quả.
-->
