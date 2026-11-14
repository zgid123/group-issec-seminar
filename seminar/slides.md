---
title: "Bảo mật AI agent: tấn công và giải pháp"
theme: "@alphacifer/slidev-academic-theme"
colorSchema: light
addons:
  - "@alphacifer/slidev-addon-theme"
background: ./assets/main.png
drawings:
  persist: false
transition: slide-left
mdc: true
comark: true
hideInToc: true
fonts:
  sans: Roboto
  serif: Roboto
  mono: Roboto Mono
exportFilename: group-issec-seminar
---

# Bảo mật AI agent<br>Tấn công và giải pháp

<Speaker
  :team="[
    'Dương Tấn Huỳnh Phong',
    'Trần Trọng Hoàng',
  ]"
  date="2026-11-15"
/>

<!--
Nội dung ghép từ phong-slides và các slide 3, 5, 6 của hoang-slides. Thời lượng sẽ bổ sung sau. Ngày trên bìa tạm giữ từ phong-slides.
Survey Deng et al. (2025) provides the map. Selected original studies are named on the reference slide; their “Survey ref. n” labels match the bibliography inside the supplied PDF. Discussion of evidence and limitations remains based on the survey.
-->

---
layout: arc-toc
hideInToc: true
indexed: true
---

# Nội dung

---
src: ./pages/overview/main.md
---

---
src: ./pages/execution-threats/main.md
---

---
src: ./pages/interaction-threats/main.md
---

---
src: ./pages/discussion/main.md
---

---
layout: references
hideInToc: true
columns: 2
references:
  - authors: "Zehang Deng, Yongjian Guo, Changzhou Han, Wanlun Ma, Junwu Xiong, Sheng Wen, and Yang Xiang"
    year: 2025
    title: "AI Agents Under Threat: A Survey of Key Security Challenges and Future Pathways."
    url: https://doi.org/10.1145/3716628
  - authors: "Kai Greshake et al."
    year: 2023
    title: "Not What You’ve Signed Up For: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection."
    url: https://arxiv.org/pdf/2302.12173
  - authors: "Yangjun Ruan et al."
    year: 2024
    title: "Identifying the Risks of LM Agents with an LM-Emulated Sandbox (ToolEmu)."
    url: https://proceedings.iclr.cc/paper_files/paper/2024/file/7274ed909a312d4d869cc328ad1c5f04-Paper-Conference.pdf
  - authors: "Weihao Tan et al."
    year: 2024
    title: "True Knowledge Comes from Practice: Aligning Large Language Models with Embodied Environments via Reinforcement Learning."
    url: https://proceedings.iclr.cc/paper_files/paper/2024/file/ee60f53717bd9c2abdcca66dfbec65da-Paper-Conference.pdf
  - authors: "Yifan Zeng et al."
    year: 2024
    title: "AutoDefense: Multi-Agent LLM Defense Against Jailbreak Attacks."
    url: https://arxiv.org/pdf/2403.04783
---

# Survey và nghiên cứu tiêu biểu

<!--
Survey của Deng et al. cung cấp taxonomy và tổng quan. Các công trình tiêu biểu ở dưới được chọn từ chính danh mục tham khảo của survey; mã “Survey ref. n” khớp số [n] trong PDF. Không phải tất cả nghiên cứu được survey nhắc đến đều được liệt kê ở đây.
-->

---
layout: thanks
hideInToc: true
---
