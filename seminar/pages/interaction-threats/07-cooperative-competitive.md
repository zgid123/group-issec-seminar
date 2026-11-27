---
layout: shifting-intro
hideInToc: true
clicks: 2
transition: slide-left
---

# Cooperative & Competitive

<div v-if="$clicks < 2" class="seminar-content">
  <p class="seminar-lead"><strong>Tương tác đa agent có thể làm lan truyền lỗi và tạo động cơ hành vi đối kháng</strong></p>
  <div class="seminar-interactions">
    <ContentCard title="Hợp tác (cooperative)" variant="panel">
      <CooperativeDiagram />
      <ul>
        <li>
          <strong><a href="https://arxiv.org/pdf/2403.02817" target="_blank" rel="noopener noreferrer">Sâu Morris II (Cohen et al., 2024)</a>:</strong> prompt độc tự nhân bản sang agent khác
        </li>
        <li>
          <strong>Thông đồng ngầm</strong> qua kênh công khai
        </li>
        <li>
          <strong>Khuếch đại hallucination</strong> qua hợp tác (<a href="https://arxiv.org/abs/2308.00352" target="_blank" rel="noopener noreferrer">MetaGPT, Hong et al., 2024</a>); lan tin sai
        </li>
        <li>
          Mặt tốt: AutoDefense dùng nhiều agent để lọc phản hồi có hại
        </li>
      </ul>
    </ContentCard>
    <ContentCard title="Cạnh tranh (competitive)" variant="panel" tone="gray">
      <CompetitiveDiagram />
      <ul>
        <li>
          <strong>Cicero</strong> (Meta, game Diplomacy): kết hợp ngôn ngữ và lập kế hoạch chiến lược trong trò chơi đàm phán
        </li>
        <li>
          Tạo đầu vào đối kháng để hạ đối thủ
        </li>
        <li>
          Theo survey (2025): phòng thủ vẫn là <strong>câu hỏi mở</strong>
        </li>
      </ul>
    </ContentCard>
  </div>
</div>
<div v-else>
  <TableComparison dense :spacing="2" :animation="false" row-header-width="24%">
    <TableComparisonColumns>
      <TableComparisonColumn>Phương pháp</TableComparisonColumn>
      <TableComparisonColumn>Điểm mạnh</TableComparisonColumn>
      <TableComparisonColumn>Điểm yếu / giới hạn</TableComparisonColumn>
    </TableComparisonColumns>
    <TableComparisonRows>
      <TableComparisonRow>
        <template #heading>AutoDefense<span class="defense-citation"><a href="https://arxiv.org/pdf/2403.04783" target="_blank" rel="noopener noreferrer">Zeng et al., 2024</a></span></template>
        <TableComparisonCell align="left">Nhiều agent phân vai để lọc câu trả lời có hại của LLM.</TableComparisonCell>
        <TableComparisonCell align="left">Giảm jailbreak thành công trong các thí nghiệm của bài.</TableComparisonCell>
        <TableComparisonCell align="left">Phòng thủ ở câu trả lời; không đánh giá mọi rủi ro đa agent.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>Reference architecture<span class="defense-citation"><a href="https://arxiv.org/abs/2311.13148v3" target="_blank" rel="noopener noreferrer">Lu et al., 2024</a></span></template>
        <TableComparisonCell align="left">Kiến trúc gồm planning, execution, giám sát và guardrail.</TableComparisonCell>
        <TableComparisonCell align="left">Tổ chức rõ các thành phần giám sát và guardrail trong thiết kế.</TableComparisonCell>
        <TableComparisonCell align="left">Là hướng dẫn kiến trúc; chưa chứng nhận hiệu quả ngăn tấn công.</TableComparisonCell>
      </TableComparisonRow>
    </TableComparisonRows>
  </TableComparison>
</div>

<!--
GHI CHÚ THUYẾT TRÌNH

[click]

Morris II: self-replicating prompts lan qua hệ ứng dụng dùng RAG; không tự lây trong mọi hệ.

Thông đồng qua kênh giao tiếp công khai là rủi ro được survey mô tả.

Hallucination có thể lan qua chuỗi agent đơn giản.

Cicero phối hợp ngôn ngữ và strategic reasoning trong Diplomacy; không dùng nó làm bằng chứng học lừa dối.

Tạo đầu vào đối kháng và câu hỏi mở về phòng thủ cạnh tranh là nhận định của survey (2025), không phải khảo sát cập nhật đến 2026.

[click]

Bảng tiếp theo giới thiệu phương pháp, điểm mạnh và điểm yếu / giới hạn. Với mỗi hàng, giải thích cơ chế trước, sau đó nêu kết quả hoặc khả năng đã được mô tả, rồi chốt phạm vi bằng chứng. Giới hạn đánh giá không đồng nghĩa phương pháp thất bại ở mọi bối cảnh. Các chi tiết và nguồn kiểm tra nằm bên dưới.

---

KIỂM CHỨNG NGUỒN — Cooperative & Competitive
Cập nhật: 2026-11-26. Số trang dưới đây là trang PDF của survey, tương ứng 182:n; không phải số slide.

NGUỒN TỔNG QUAN
Zehang Deng, Yongjian Guo, Changzhou Han, Wanlun Ma, Junwu Xiong, Sheng Wen, Yang Xiang (2025). AI Agents Under Threat: A Survey of Key Security Challenges and Future Pathways. ACM Computing Surveys 57(7), Article 182, February 2025. https://doi.org/10.1145/3716628
Vị trí: §4.2.1–§4.2.2, trang 21, 22.
Mở PDF: https://dl.acm.org/doi/pdf/10.1145/3716628#page=21

NỘI DUNG / VÍ DỤ / SƠ ĐỒ
• Morris II: self-replicating prompts lan qua hệ ứng dụng dùng RAG; không tự lây trong mọi hệ.
  Nguồn: Stav Cohen et al. (2024), mục tài liệu số 28 trong survey.
  Vị trí kiểm tra: Abstract: RAG-based inference / email assistants.
• Thông đồng qua kênh giao tiếp công khai là rủi ro được survey mô tả.
  Nguồn: Sumeet Ramesh Motwani et al. (2023), mục tài liệu số 122 trong survey.
  Vị trí kiểm tra: Survey pp.21–22, steganography/collusion; bản gốc bị chặn truy cập khi kiểm tra.
• Hallucination có thể lan qua chuỗi agent đơn giản.
  Nguồn: Sirui Hong et al. (2024), mục tài liệu số 65 trong survey.
  Vị trí kiểm tra: Abstract: cascading hallucinations.
• Cicero phối hợp ngôn ngữ và strategic reasoning trong Diplomacy; không dùng nó làm bằng chứng học lừa dối.
  Nguồn: Meta Fundamental AI Research Diplomacy Team (FAIR) et al. (2022), mục tài liệu số 47 trong survey.
  Vị trí kiểm tra: Survey p.22; tên bài gốc và mô tả hệ thống.
• Tạo đầu vào đối kháng và câu hỏi mở về phòng thủ cạnh tranh là nhận định của survey (2025), không phải khảo sát cập nhật đến 2026.
  Nguồn: Survey §4.2.1–§4.2.2, tr. 21, 22.

PHƯƠNG PHÁP — ĐIỂM MẠNH — ĐIỂM YẾU / GIỚI HẠN

AutoDefense — Yifan Zeng et al. (2024), mục tài liệu số 221.
Phương pháp: Nhiều agent phân vai để lọc câu trả lời có hại của LLM.
Điểm mạnh: Giảm jailbreak thành công trong các thí nghiệm của bài.
Điểm yếu / giới hạn: Phòng thủ ở câu trả lời; không đánh giá mọi rủi ro đa agent.
Phần đã đối chiếu: Abstract. Cơ chế response filtering là phần chính; bài không chứng minh ngăn thông đồng hay worm trong mọi hệ.
Nguồn đã dùng kiểm tra: https://arxiv.org/abs/2403.04783

Reference architecture — Qinghua Lu et al. (2024), mục tài liệu số 108.
Phương pháp: Kiến trúc gồm planning, execution, giám sát và guardrail.
Điểm mạnh: Tổ chức rõ các thành phần giám sát và guardrail trong thiết kế.
Điểm yếu / giới hạn: Là hướng dẫn kiến trúc; chưa chứng nhận hiệu quả ngăn tấn công.
Phần đã đối chiếu: Abstract; §§3.3–3.5 của bản v3. Bản v1 có tên Building the Future of Responsible AI; v3 đổi thành Towards Responsible Generative AI. Bỏ khẳng định rằng bài đã kiểm chứng chặn lệnh không đảo ngược.
Nguồn đã dùng kiểm tra: https://arxiv.org/abs/2311.13148v3

Cách diễn giải giới hạn: phạm vi dữ liệu/mô hình được thử không chứng minh phương pháp thất bại ở nơi khác. Giới hạn phạm vi và thiếu bảo đảm toàn hệ là nhận xét về bằng chứng, không phải số đo mới.

THÔNG TIN ĐẦY ĐỦ CỦA TỪNG NGUỒN DÙNG TRÊN SLIDE

Stav Cohen, Ron Bitton, and Ben Nassi (2024). Here comes the AI worm: Unleashing zero-click worms that target GenAI-powered applications.
Bản gốc: https://arxiv.org/pdf/2403.02817
Truy ngược survey: mục tài liệu số 28, bibliography tr. 28; xuất hiện trong nội dung survey tr. 5, 6, 7, 21, 24. https://dl.acm.org/doi/pdf/10.1145/3716628#page=28
Mục ghi trong survey: Stav Cohen, Ron Bitton, and Ben Nassi (2024). Here comes the AI worm: Unleashing zero-click worms that target GenAI-powered applications. Retrieved from https://arxiv.org/pdf/2403.02817
Mức kiểm chứng: Đã đối chiếu abstract gốc; không phải kiểm tra toàn văn hoặc tái lập thí nghiệm.

Sumeet Ramesh Motwani, Mikhail Baranchuk, Lewis Hammond, and Christian Schroeder de Witt (2023). A perfect collusion benchmark: How can AI agents be prevented from colluding with information-theoretic undetectability?.
Bản gốc: https://openreview.net/forum?id=FXZFrOvIoc
Truy ngược survey: mục tài liệu số 122, bibliography tr. 32; xuất hiện trong nội dung survey tr. 6, 7, 21. https://dl.acm.org/doi/pdf/10.1145/3716628#page=32
Mục ghi trong survey: Sumeet Ramesh Motwani, Mikhail Baranchuk, Lewis Hammond, and Christian Schroeder de Witt (2023). A perfect collusion benchmark: How can AI agents be prevented from colluding with information-theoretic undetectability?. In Proceedings of the NeurIPS Workshop .
Mức kiểm chứng: Dẫn qua survey pp.21–22. Trang OpenReview yêu cầu xác minh trình duyệt; chưa xác nhận nội dung toàn văn gốc.

Sirui Hong, Mingchen Zhuge, Jonathan Chen, Xiawu Zheng, Yuheng Cheng, Jinlin Wang, Ceyao Zhang, Zili Wang, Steven Ka Shing Yau, Zijuan Lin, Liyang Zhou, Chenyu Ran, Lingfeng Xiao, Chenglin Wu, and Jürgen Schmidhuber (2024). MetaGPT: Meta programming for a multi-agent collaborative framework.
Bản gốc: https://arxiv.org/abs/2308.00352
Truy ngược survey: mục tài liệu số 65, bibliography tr. 29; xuất hiện trong nội dung survey tr. 21. https://dl.acm.org/doi/pdf/10.1145/3716628#page=29
Mục ghi trong survey: Sirui Hong, Mingchen Zhuge, Jonathan Chen, Xiawu Zheng, Yuheng Cheng, Jinlin Wang, Ceyao Zhang, Zili Wang, Steven Ka Shing Yau, Zijuan Lin, Liyang Zhou, Chenyu Ran, Lingfeng Xiao, Chenglin Wu, and Jürgen Schmidhuber (2024). MetaGPT: Meta programming for a multi-agent collaborative framework. In Proceedings of the ICLR .
Mức kiểm chứng: Đã đối chiếu abstract gốc; không phải kiểm tra toàn văn hoặc tái lập thí nghiệm.

Meta Fundamental AI Research Diplomacy Team (FAIR)., Anton Bakhtin, Noam Brown, Emily Dinan, Gabriele Farina, Colin Flaherty, Daniel Fried, et al (2022). Human-level play in the game of Diplomacy by combining language models with strategic reasoning.
Bản gốc: https://doi.org/10.1126/science.ade9097
Truy ngược survey: mục tài liệu số 47, bibliography tr. 29; xuất hiện trong nội dung survey tr. 22. https://dl.acm.org/doi/pdf/10.1145/3716628#page=29
Mục ghi trong survey: Meta Fundamental AI Research Diplomacy Team (FAIR)., Anton Bakhtin, Noam Brown, Emily Dinan, Gabriele Farina, Colin Flaherty, Daniel Fried, et al (2022). Human-level play in the game of Diplomacy by combining language models with strategic reasoning. Science 378, 6624 (2022), 1067–1074.
Mức kiểm chứng: Dẫn qua survey p.22 cho mô tả Cicero. DOI nhà xuất bản bị chặn khi kiểm tra; không suy ra thực nghiệm lừa dối.

Yifan Zeng, Yiran Wu, Xiao Zhang, Huazheng Wang, and Qingyun Wu (2024). AutoDefense: Multi-agent LLM defense against jailbreak attacks.
Bản gốc: https://arxiv.org/pdf/2403.04783
Truy ngược survey: mục tài liệu số 221, bibliography tr. 36; xuất hiện trong nội dung survey tr. 22. https://dl.acm.org/doi/pdf/10.1145/3716628#page=36
Mục ghi trong survey: Yifan Zeng, Yiran Wu, Xiao Zhang, Huazheng Wang, and Qingyun Wu (2024). AutoDefense: Multi-agent LLM defense against jailbreak attacks. Retrieved from https://arxiv.org/pdf/2403.04783
Mức kiểm chứng: Abstract. Cơ chế response filtering là phần chính; bài không chứng minh ngăn thông đồng hay worm trong mọi hệ.

Qinghua Lu, Liming Zhu, Xiwei Xu, Zhenchang Xing, Stefan Harrer, and Jon Whittle (2024). Towards Responsible Generative AI: A Reference Architecture for Designing Foundation Model based Agents.
Bản gốc: https://arxiv.org/abs/2311.13148v3
Truy ngược survey: mục tài liệu số 108, bibliography tr. 31; xuất hiện trong nội dung survey tr. 22. https://dl.acm.org/doi/pdf/10.1145/3716628#page=31
Mục ghi trong survey: Qinghua Lu, Liming Zhu, Xiwei Xu, Zhenchang Xing, Stefan Harrer, and Jon Whittle (2023). Building the future of responsible AI: A reference architecture for designing large language model based agents. Retrieved from https: //arxiv.org/pdf/2311.13148
Mức kiểm chứng: Abstract; §§3.3–3.5 của bản v3. Bản v1 có tên Building the Future of Responsible AI; v3 đổi thành Towards Responsible Generative AI. Bỏ khẳng định rằng bài đã kiểm chứng chặn lệnh không đảo ngược.
Khác biệt phiên bản/định danh: Survey dẫn bản 2023 “Building the future of responsible AI…”. Nội dung kiến trúc đã đối chiếu bản v3 (3-4-2024), tên mới như trên; cùng arXiv:2311.13148.
-->
