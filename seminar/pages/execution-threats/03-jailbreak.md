---
layout: shifting-intro
hideInToc: true
clicks: 2
transition: slide-left
---

# Jailbreak

<div v-if="$clicks < 2">
  <p><strong>Vượt ràng buộc an toàn của một agent có thể kéo theo cả hệ nhiều agent.</strong></p>
  <div class="jailbreak-overview">
    <JailbreakDiagram />
    <div class="jailbreak-cards">
      <ContentCard title="Hiệu ứng domino">
        <p>Một agent bị phá có thể lây sang agent khác trong thiết lập có trao đổi dữ liệu</p>
      </ContentCard>
      <ContentCard title="Đầu vào đa phương thức">
        <p>Ảnh hoặc âm thanh có thể mang đầu vào đối kháng</p>
      </ContentCard>
      <ContentCard title="Hậu quả nặng hơn">
        <p>Agent bị phá có thể làm hành động vật lý nguy hiểm</p>
      </ContentCard>
    </div>
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
        <template #heading>Defense evaluation<span class="defense-citation"><a href="https://arxiv.org/pdf/2310.19737" target="_blank" rel="noopener noreferrer">Schwinn et al., 2023</a></span></template>
        <TableComparisonCell align="left">Kiểm tra cách đánh giá độ bền của các biện pháp phòng thủ.</TableComparisonCell>
        <TableComparisonCell align="left">Chỉ ra nguy cơ đánh giá quá cao độ an toàn.</TableComparisonCell>
        <TableComparisonCell align="left">Là nghiên cứu đánh giá; không đề xuất bộ lọc chung.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>Erase-and-check<span class="defense-citation"><a href="https://arxiv.org/pdf/2309.02705" target="_blank" rel="noopener noreferrer">Kumar et al., 2024</a></span></template>
        <TableComparisonCell align="left">Xóa token và kiểm tra các chuỗi con bằng safety filter.</TableComparisonCell>
        <TableComparisonCell align="left">Chứng nhận an toàn cho tấn công có kích thước giới hạn.</TableComparisonCell>
        <TableComparisonCell align="left">Bảo đảm gắn với bộ lọc và mô hình tấn công đã định nghĩa.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>Multi-agent debate<span class="defense-citation"><a href="https://arxiv.org/pdf/2401.05998" target="_blank" rel="noopener noreferrer">Chern et al., 2024</a></span></template>
        <TableComparisonCell align="left">Cho mô hình bị jailbreak tranh luận với mô hình khác.</TableComparisonCell>
        <TableComparisonCell align="left">Giảm toxicity khi tranh luận với mô hình an toàn hoặc mạnh hơn.</TableComparisonCell>
        <TableComparisonCell align="left">Tranh luận đa agent nói chung chỉ cải thiện ít trong bài.</TableComparisonCell>
      </TableComparisonRow>
    </TableComparisonRows>
  </TableComparison>
</div>

<!--
GHI CHÚ THUYẾT TRÌNH

[click]

Lây jailbreak giữa agent qua ảnh: Agent Smith; chỉ áp dụng trong thiết lập trao đổi của bài.

Đầu vào đa phương thức và hậu quả vật lý: nhóm nguy cơ được survey tổng hợp, không phải khả năng của mọi agent.

[click]

Bảng tiếp theo giới thiệu phương pháp, điểm mạnh và điểm yếu / giới hạn. Với mỗi hàng, giải thích cơ chế trước, sau đó nêu kết quả hoặc khả năng đã được mô tả, rồi chốt phạm vi bằng chứng. Giới hạn đánh giá không đồng nghĩa phương pháp thất bại ở mọi bối cảnh. Các chi tiết và nguồn kiểm tra nằm bên dưới.

---

KIỂM CHỨNG NGUỒN — Jailbreak
Cập nhật: 2026-11-26. Số trang dưới đây là trang PDF của survey, tương ứng 182:n; không phải số slide.

NGUỒN TỔNG QUAN
Zehang Deng, Yongjian Guo, Changzhou Han, Wanlun Ma, Junwu Xiong, Sheng Wen, Yang Xiang (2025). AI Agents Under Threat: A Survey of Key Security Challenges and Future Pathways. ACM Computing Surveys 57(7), Article 182, February 2025. https://doi.org/10.1145/3716628
Vị trí: §3.1.2, trang 10, 11.
Mở PDF: https://dl.acm.org/doi/pdf/10.1145/3716628#page=10

NỘI DUNG / VÍ DỤ / SƠ ĐỒ
• Lây jailbreak giữa agent qua ảnh: Agent Smith; chỉ áp dụng trong thiết lập trao đổi của bài.
  Nguồn: Xiangming Gu et al. (2024), mục tài liệu số 57 trong survey.
  Vị trí kiểm tra: Abstract; survey pp.10–11.
• Đầu vào đa phương thức và hậu quả vật lý: nhóm nguy cơ được survey tổng hợp, không phải khả năng của mọi agent.
  Nguồn: Survey §3.1.2, tr. 10, 11.

PHƯƠNG PHÁP — ĐIỂM MẠNH — ĐIỂM YẾU / GIỚI HẠN

Defense evaluation — Leo Schwinn et al. (2023), mục tài liệu số 154.
Phương pháp: Kiểm tra cách đánh giá độ bền của các biện pháp phòng thủ.
Điểm mạnh: Chỉ ra nguy cơ đánh giá quá cao độ an toàn.
Điểm yếu / giới hạn: Là nghiên cứu đánh giá; không đề xuất bộ lọc chung.
Phần đã đối chiếu: Đã đọc toàn văn: §3 về đánh giá phòng thủ và §4 Conclusion. Bài phân tích threat model, embedding-space attacks và sai sót trong đánh giá; không đề xuất bộ lọc đầu vào chung.
Nguồn đã dùng kiểm tra: https://arxiv.org/abs/2310.19737

Erase-and-check — Aounon Kumar et al. (2024), mục tài liệu số 84.
Phương pháp: Xóa token và kiểm tra các chuỗi con bằng safety filter.
Điểm mạnh: Chứng nhận an toàn cho tấn công có kích thước giới hạn.
Điểm yếu / giới hạn: Bảo đảm gắn với bộ lọc và mô hình tấn công đã định nghĩa.
Phần đã đối chiếu: Abstract: suffix, insertion và infusion là các kiểu tấn công được xét. Chứng nhận không đồng nghĩa mọi jailbreak đều bị chặn.
Nguồn đã dùng kiểm tra: https://arxiv.org/abs/2309.02705

Multi-agent debate — Steffi Chern et al. (2024), mục tài liệu số 25.
Phương pháp: Cho mô hình bị jailbreak tranh luận với mô hình khác.
Điểm mạnh: Giảm toxicity khi tranh luận với mô hình an toàn hoặc mạnh hơn.
Điểm yếu / giới hạn: Tranh luận đa agent nói chung chỉ cải thiện ít trong bài.
Phần đã đối chiếu: Đã đối chiếu abstract và phần kết quả của toàn văn: hiệu quả giảm toxicity phụ thuộc mô hình cùng tranh luận. Kết quả không áp dụng đồng đều cho mọi nhóm agent.
Nguồn đã dùng kiểm tra: https://arxiv.org/abs/2401.05998

Cách diễn giải giới hạn: phạm vi dữ liệu/mô hình được thử không chứng minh phương pháp thất bại ở nơi khác. Giới hạn phạm vi và thiếu bảo đảm toàn hệ là nhận xét về bằng chứng, không phải số đo mới.

THÔNG TIN ĐẦY ĐỦ CỦA TỪNG NGUỒN DÙNG TRÊN SLIDE

Xiangming Gu, Xiaosen Zheng, Tianyu Pang, Chao Du, Qian Liu, Ye Wang, Jing Jiang, and Min Lin (2024). Agent smith: A single image can jailbreak one million multimodal LLM agents exponentially fast.
Bản gốc: https://arxiv.org/pdf/2402.08567
Truy ngược survey: mục tài liệu số 57, bibliography tr. 29; xuất hiện trong nội dung survey tr. 6, 7, 10, 21. https://dl.acm.org/doi/pdf/10.1145/3716628#page=29
Mục ghi trong survey: Xiangming Gu, Xiaosen Zheng, Tianyu Pang, Chao Du, Qian Liu, Ye Wang, Jing Jiang, and Min Lin (2024). Agent smith: A single image can jailbreak one million multimodal LLM agents exponentially fast. Retrieved from https: //arxiv.org/pdf/2402.08567
Mức kiểm chứng: Đã đối chiếu abstract gốc; không phải kiểm tra toàn văn hoặc tái lập thí nghiệm.

Leo Schwinn, David Dobre, Stephan Günnemann, and Gauthier Gidel (2023). Adversarial attacks and defenses in large language models: Old and new threats.
Bản gốc: https://arxiv.org/pdf/2310.19737
Truy ngược survey: mục tài liệu số 154, bibliography tr. 33; xuất hiện trong nội dung survey tr. 6, 7, 11. https://dl.acm.org/doi/pdf/10.1145/3716628#page=33
Mục ghi trong survey: Leo Schwinn, David Dobre, Stephan Günnemann, and Gauthier Gidel (2023). Adversarial attacks and defenses in large language models: Old and new threats. Retrieved from https://arxiv.org/pdf/2310.19737
Mức kiểm chứng: Đã đọc toàn văn: §3 về đánh giá phòng thủ và §4 Conclusion. Bài phân tích threat model, embedding-space attacks và sai sót trong đánh giá; không đề xuất bộ lọc đầu vào chung.

Aounon Kumar, Chirag Agarwal, Suraj Srinivas, Soheil Feizi, and Hima Lakkaraju (2024). Certifying LLM safety against adversarial prompting.
Bản gốc: https://arxiv.org/pdf/2309.02705
Truy ngược survey: mục tài liệu số 84, bibliography tr. 30; xuất hiện trong nội dung survey tr. 11. https://dl.acm.org/doi/pdf/10.1145/3716628#page=30
Mục ghi trong survey: Aounon Kumar, Chirag Agarwal, Suraj Srinivas, Soheil Feizi, and Hima Lakkaraju (2024). Certifying LLM safety against adversarial prompting. Retrieved from https://arxiv.org/pdf/2309.02705
Mức kiểm chứng: Abstract: suffix, insertion và infusion là các kiểu tấn công được xét. Chứng nhận không đồng nghĩa mọi jailbreak đều bị chặn.

Steffi Chern, Zhen Fan, and Andy Liu (2024). Combating adversarial attacks with multi-agent debate.
Bản gốc: https://arxiv.org/pdf/2401.05998
Truy ngược survey: mục tài liệu số 25, bibliography tr. 28; xuất hiện trong nội dung survey tr. 6, 7, 10, 11. https://dl.acm.org/doi/pdf/10.1145/3716628#page=28
Mục ghi trong survey: Steffi Chern, Zhen Fan, and Andy Liu (2024). Combating adversarial attacks with multi-agent debate. Retrieved from https://arxiv.org/pdf/2401.05998
Mức kiểm chứng: Đã đối chiếu abstract và phần kết quả của toàn văn: hiệu quả giảm toxicity phụ thuộc mô hình cùng tranh luận. Kết quả không áp dụng đồng đều cho mọi nhóm agent.
-->
