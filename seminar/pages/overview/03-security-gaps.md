---
layout: shifting-intro
hideInToc: true
clicks: 2
transition: slide-left
---

# Bốn khoảng trống bảo mật

<div class="gaps-stage">
  <RectangleOrbitTetrad v-if="$clicks < 2" :height="360" :animation="false">
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
</div>

<style>
.gaps-stage {
  height: 365px;
  margin-top: 12px;
}

</style>

<!--
Nguồn: Deng et al., 2025, Mục 1, Fig. 1.
Nguồn nguyên bản: ../refs/hoang-slides.pptx, slide 6 (đếm từ 1).
Đây là khung phân tích chính của bài. Bốn lý do làm agent khó bảo mật:
- Gap 1, đầu vào nhiều bước: người dùng nói chuyện qua lại nhiều lượt. Có người mô tả mơ hồ khiến agent hiểu sai, có người cố tình lừa. Liên quan khối Perception.
- Gap 2, bên trong phức tạp: agent chạy theo chuỗi vòng lặp ngầm (định dạng prompt, LLM lập kế hoạch, gọi tool). Nhiều trạng thái trung gian không nhìn thấy được, nên lỗi bảo mật không phát hiện kịp. Liên quan Brain và Action.
- Gap 3, môi trường thay đổi: cùng một agent nhưng chạy ở môi trường phát triển, triển khai, máy chủ từ xa khác nhau thì hành vi có thể khác. Liên quan Agent2Environment.
- Gap 4, bên ngoài không đáng tin: agent hiện nay mặc định tin tool, trang web, agent khác. Đây là nguồn gốc của indirect prompt injection. Liên quan Agent2Agent và Memory.
Mẹo nhớ: Gap 1–2 là chuyện bên trong một agent, Gap 3–4 là chuyện khi agent ra ngoài.
Tái tạo nội dung và sơ đồ bằng HTML/CSS trong Vue để chỉnh sửa trực tiếp trong Slidev.
-->
