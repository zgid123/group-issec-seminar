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
-->
