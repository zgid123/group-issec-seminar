---
title: "Bảo mật AI agent: tấn công và giải pháp"
theme: "@alphacifer/slidev-academic-theme"
colorSchema: light
addons:
  - "@alphacifer/slidev-addon-theme"
background: ./assets/main.png
layout: dim-cover
dim: true
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

# Bảo mật AI agent

## Tấn công và giải pháp

<Speaker
  :team="[
    'Dương Tấn Huỳnh Phong',
    'Trần Trọng Hoàng',
  ]"
  date="2026-11-15"
/>

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
class: complete-references
columns: 2
references:
  - authors: "Zehang Deng et al."
    year: 2025
    title: "AI Agents Under Threat: A Survey of Key Security Challenges and Future Pathways."
    url: "https://doi.org/10.1145/3716628"
  - authors: "Neel Jain et al."
    year: 2023
    title: "Baseline defenses for adversarial attacks against aligned language models."
    url: "https://arxiv.org/pdf/2309.00614"
  - authors: "Gabriel Alon and Michael Kamfonas"
    year: 2023
    title: "Detecting language model attacks with perplexity."
    url: "https://arxiv.org/pdf/2308.14132"
  - authors: "Xiangming Gu et al."
    year: 2024
    title: "Agent smith: A single image can jailbreak one million multimodal LLM agents exponentially fast."
    url: "https://arxiv.org/pdf/2402.08567"
  - authors: "Leo Schwinn et al."
    year: 2023
    title: "Adversarial attacks and defenses in large language models: Old and new threats."
    url: "https://arxiv.org/pdf/2310.19737"
  - authors: "Aounon Kumar et al."
    year: 2024
    title: "Certifying LLM safety against adversarial prompting."
    url: "https://arxiv.org/pdf/2309.02705"
  - authors: "Steffi Chern et al."
    year: 2024
    title: "Combating adversarial attacks with multi-agent debate."
    url: "https://arxiv.org/pdf/2401.05998"
  - authors: "Bao Gia Doan et al."
    year: 2020
    title: "Februus: Input purification defense against trojan attacks on deep neural network systems."
    url: "https://arxiv.org/abs/1908.03369"
---

# References (1/7)

---
layout: references
hideInToc: true
class: complete-references
columns: 2
references:
  - authors: "Tianlong Chen et al."
    year: 2022
    title: "Quarantine: Sparsity can uncover the trojan attack trigger for free."
    url: "https://arxiv.org/abs/2205.11819"
  - authors: "Long Ouyang et al."
    year: 2022
    title: "Training language models to follow instructions with human feedback."
    url: "https://arxiv.org/abs/2203.02155"
  - authors: "Baihan Lin et al."
    year: 2023
    title: "Towards healthy AI: large language models need therapists too."
    url: "https://arxiv.org/pdf/2304.00416"
  - authors: "Weihao Tan et al."
    year: 2024
    title: "True knowledge comes from practice: Aligning large language models with embodied environments via reinforcement learning."
    url: "https://arxiv.org/abs/2401.14151"
  - authors: "Sirui Hong et al."
    year: 2024
    title: "MetaGPT: Meta programming for a multi-agent collaborative framework."
    url: "https://arxiv.org/abs/2308.00352"
  - authors: "Jerry Wei et al."
    year: 2024
    title: "Long-form factuality in large language models."
    url: "https://arxiv.org/pdf/2403.18802"
  - authors: "Nouha Dziri et al."
    year: 2021
    title: "Neural path hunter: Reducing hallucination in dialogue systems via path grounding."
    url: "https://aclanthology.org/2021.emnlp-main.168/"
---

# References (2/7)

---
layout: references
hideInToc: true
class: complete-references
columns: 2
references:
  - authors: "Yilun Du et al."
    year: 2023
    title: "Improving factuality and reasoning in language models through multiagent debate."
    url: "https://arxiv.org/pdf/2305.14325"
  - authors: "Jason Wei et al."
    year: 2022
    title: "Chain-of-thought prompting elicits reasoning in large language models."
    url: "https://arxiv.org/abs/2201.11903"
  - authors: "W. Hua et al."
    year: 2024
    title: "TrustAgent: Towards Safe and Trustworthy LLM-based Agents."
    url: "https://aclanthology.org/2024.findings-emnlp.585/"
  - authors: "Zelong Li et al."
    year: 2024
    title: "Formal-LLM: Integrating formal language and natural language for controllable LLM-based agents."
    url: "https://arxiv.org/pdf/2402.00798"
  - authors: "Fangzhou Wu et al."
    year: 2024
    title: "WIPI: A new web threat for LLM-driven web agents."
    url: "https://arxiv.org/pdf/2402.16965"
  - authors: "Embrace The Red"
    year: 2023
    title: "Indirect Prompt Injection via YouTube Transcripts."
    url: "https://embracethered.com/blog/posts/2023/chatgpt-plugin-youtube-indirect-prompt-injection/"
  - authors: "Embrace The Red"
    year: 2023
    title: "ChatGPT Plugins: Data Exfiltration Via Images & Cross Plugin Request Forgery."
    url: "https://embracethered.com/blog/posts/2023/chatgpt-webpilot-data-exfil-via-markdown-injection/"
---

# References (3/7)

---
layout: references
hideInToc: true
class: complete-references
columns: 2
references:
  - authors: "Yangjun Ruan et al."
    year: 2024
    title: "Identifying the risks of LM agents with an LM-emulated sandbox."
    url: "https://arxiv.org/abs/2309.15817"
  - authors: "Xinyu Zhang et al."
    year: 2024
    title: "PrivacyAsst: Safeguarding User Privacy in Tool-Using Large Language Model Agents."
    url: "https://ieeexplore.ieee.org/document/10458329"
  - authors: "Lukas Pöhler et al."
    year: 2024
    title: "A technological perspective on misuse of available AI."
    url: "https://arxiv.org/pdf/2403.15325"
  - authors: "Kai Greshake et al."
    year: 2023
    title: "Not what you’ve signed up for: Compromising real-world LLM-integrated applications with indirect prompt injection."
    url: "https://arxiv.org/abs/2302.12173"
  - authors: "Chun Fai Chan et al."
    year: 2023
    title: "Detection and defense against prominent attacks on preconditioned LLM-integrated virtual assistants."
    url: "https://arxiv.org/abs/2401.00994"
  - authors: "Keegan Hines et al."
    year: 2024
    title: "Defending against indirect prompt injection attacks with spotlighting."
    url: "https://arxiv.org/pdf/2403.14720"
  - authors: "Alexander Bukharin et al."
    year: 2023
    title: "Robust multi-agent reinforcement learning via adversarial regularization: Theoretical foundation and stable algorithms."
    url: "https://arxiv.org/abs/2310.10810"
---

# References (4/7)

---
layout: references
hideInToc: true
class: complete-references
columns: 2
references:
  - authors: "Saurabh Arora et al."
    year: 2021
    title: "A survey of inverse reinforcement learning: Challenges, methods and progress."
    url: "https://arxiv.org/abs/1806.06877"
  - authors: "Jonas Geiping et al."
    year: 2024
    title: "Coercing LLMs to do and reveal (almost) anything."
    url: "https://arxiv.org/abs/2402.14020"
  - authors: "Michael Guastalla et al."
    year: 2024
    title: "Application of large language models to DDoS attack detection."
    url: "https://doi.org/10.1007/978-3-031-51630-6_6"
  - authors: "Bin Hu et al."
    year: 2023
    title: "Enabling intelligent interactions between an agent and an LLM: A reinforcement learning approach."
    url: "https://arxiv.org/pdf/2306.03604"
  - authors: "Stav Cohen et al."
    year: 2024
    title: "Here comes the AI worm: Unleashing zero-click worms that target GenAI-powered applications."
    url: "https://arxiv.org/pdf/2403.02817"
  - authors: "Sumeet Ramesh Motwani et al."
    year: 2023
    title: "A perfect collusion benchmark: How can AI agents be prevented from colluding with information-theoretic undetectability?."
    url: "https://openreview.net/forum?id=FXZFrOvIoc"
  - authors: "Yifan Zeng et al."
    year: 2024
    title: "AutoDefense: Multi-agent LLM defense against jailbreak attacks."
    url: "https://arxiv.org/pdf/2403.04783"
---

# References (5/7)

---
layout: references
hideInToc: true
class: complete-references
columns: 2
references:
  - authors: "Meta Fundamental AI Research Diplomacy Team (FAIR) et al."
    year: 2022
    title: "Human-level play in the game of Diplomacy by combining language models with strategic reasoning."
    url: "https://doi.org/10.1126/science.ade9097"
  - authors: "Qinghua Lu et al."
    year: 2024
    title: "Towards Responsible Generative AI: A Reference Architecture for Designing Foundation Model based Agents."
    url: "https://arxiv.org/abs/2311.13148v3"
  - authors: "Wei Zou et al."
    year: 2024
    title: "PoisonedRAG: Knowledge Corruption Attacks to Retrieval-Augmented Generation of Large Language Models."
    url: "https://arxiv.org/pdf/2402.07867"
  - authors: "Shenglai Zeng et al."
    year: 2024
    title: "The good and the bad: Exploring privacy issues in retrieval-augmented generation (RAG)."
    url: "https://arxiv.org/pdf/2402.16893"
  - authors: "Haoran Li et al."
    year: 2023
    title: "Sentence embedding leaks more information than you expect: Generative embedding inversion attack to recover the whole sentence."
    url: "https://aclanthology.org/2023.findings-acl.881/"
  - authors: "John Morris et al."
    year: 2023
    title: "Text embeddings reveal (almost) as much as text."
    url: "https://aclanthology.org/2023.emnlp-main.765/"
  - authors: "Yiran Ding et al."
    year: 2024
    title: "LongRoPE: Extending LLM context window beyond 2 million tokens."
    url: "https://arxiv.org/pdf/2402.13753"
---

# References (6/7)

---
layout: references
hideInToc: true
class: complete-references
columns: 2
references:
  - authors: "Yongchao Chen et al."
    year: 2023
    title: "Scalable multi-robot collaboration with large language models: Centralized or decentralized systems?"
    url: "https://arxiv.org/html/2309.15943v2"
  - authors: "Xijie Huang et al."
    year: 2023
    title: "Fewer is More: Boosting LLM Reasoning with Reinforced Context Pruning."
    url: "https://arxiv.org/pdf/2312.08901"
  - authors: "Tian Dong et al."
    year: 2023
    title: "Unleashing cheapfakes through trojan plugins of large language models."
    url: "https://arxiv.org/pdf/2312.00374v1"
  - authors: "Tong Liu et al."
    year: 2023
    title: "Demystifying rce vulnerabilities in LLM-integrated apps."
    url: "https://arxiv.org/pdf/2309.02926"
  - authors: "Fábio Perez and Ian Ribeiro"
    year: 2022
    title: "Ignore previous prompt: Attack techniques for language models."
    url: "https://arxiv.org/abs/2211.09527"
  - authors: "Fangzhou Wu et al."
    year: 2024
    title: "A new era in LLM security: Exploring security concerns in real-world LLM-based systems."
    url: "https://arxiv.org/pdf/2402.18649"
  - authors: "Wenkai Yang et al."
    year: 2024
    title: "Watch out for your agents! Investigating backdoor threats to LLM-Based agents."
    url: "https://arxiv.org/pdf/2402.11208"
---

# References (7/7)

---
layout: thanks
hideInToc: true
---
