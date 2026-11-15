---
layout: shifting-intro
hideInToc: true
transition: slide-left
---

# Environment: rủi ro từ bên ngoài

![environment security threat taxonomy](../../assets/environment-taxonomy.svg)

<!--
Nguồn: S1 §4.1, giữ thứ tự Hình 3. RL là học tăng cường từ phản hồi/phần thưởng. Anthropomorphic attachment là gắn bó có hại do xem agent như con người; misuse là dùng agent vào mục đích gây hại. Bốn nhánh tài nguyên: resource exhaustion attack; inefficient resource allocation; insufficient isolation between agents; unmonitored resource usage. Các lỗi phân bổ/giám sát không cần attacker. Nêu tên nhóm ngắn gọn, dành ví dụ cho web chứa lệnh đổi người nhận báo cáo; không kể năm câu chuyện riêng.

Sơ đồ phân cấp dọc theo hình taxonomy người dùng cung cấp, cùng phong cách taxonomy-pyramid.svg. Chỉ giữ các nhãn tiếng Anh và quan hệ phân nhánh; không hiển thị section hoặc số trích dẫn.

Nội dung giải thích chuyển từ phần hiển thị:
| Nhánh | Nguy cơ chính |
| --- | --- |
| **Indirect injection** | Lệnh độc trong web, tài liệu, kết quả tool |
| **RL environment** | Quan sát hoặc phần thưởng bị thao túng |
| **Simulation / sandbox** | Gắn bó nhân hóa; lạm dụng agent |
| **Resource management** | Cạn tài nguyên; phân bổ, cách ly, giám sát kém |
| **Physical environment** | Cảm biến hoặc lệnh điều khiển không an toàn |

**Survey refs:** injection ref. 28, 56, RL ref. 101, 109, sandbox ref. 20, 133, tài nguyên ref. 52, 69, 95, 117, physical ref. 165.
-->

---
layout: shifting-intro
hideInToc: true
clicks: 2
transition: slide-left
---

# Agent2Environment

<div v-if="$clicks < 2" class="seminar-content">
  <p class="seminar-lead"><strong>Môi trường không chỉ nhận lệnh từ agent mà còn phản hồi ngược để điều khiển agent</strong></p>
  <div class="seminar-environment-top">
    <EnvironmentInteractionDiagram />
    <ContentCard variant="small">
      Agent2Tool là rủi ro chiều đi. Agent2Environment là rủi ro <strong>chiều về</strong>: HTML, ảnh chụp màn hình, trạng thái bị giả mạo.
    </ContentCard>
  </div>
  <div class="seminar-five seminar-below">
    <ContentCard variant="compact" title="Web, dữ liệu ngoài" number="1">
      <p>Indirect prompt injection</p>
    </ContentCard>
    <ContentCard variant="compact" title="Học tăng cường (RL)" number="2" tone="gray">
      <p>Đầu độc điểm thưởng</p>
    </ContentCard>
    <ContentCard variant="compact" title="Giả lập, sandbox" number="3">
      <p>Gắn bó cảm xúc, lạm dụng</p>
    </ContentCard>
    <ContentCard variant="compact" title="Hạ tầng tính toán" number="4" tone="gray">
      <p>Cạn tài nguyên, thiếu cách ly</p>
    </ContentCard>
    <ContentCard variant="compact" title="Thế giới vật lý" number="5" tone="gray">
      <p>Cảm biến bị giả mạo</p>
    </ContentCard>
  </div>
</div>
<div v-else>
  <TableComparison dense :spacing="2" :animation="false" row-header-width="24%">
    <TableComparisonColumns>
      <TableComparisonColumn>Cách phòng thủ</TableComparisonColumn>
      <TableComparisonColumn>Điểm mạnh</TableComparisonColumn>
      <TableComparisonColumn>Điểm yếu</TableComparisonColumn>
    </TableComparisonColumns>
    <TableComparisonRows>
      <TableComparisonRow>
        <template #heading>Anthropomorphic attachment<span class="defense-citation">Deng et al., 2025 · §4.1.3</span></template>
        <TableComparisonCell align="left">Nguyên tắc đạo đức và giám sát tương tác.</TableComparisonCell>
        <TableComparisonCell align="left">Có cơ hội phát hiện hành vi gây phụ thuộc.</TableComparisonCell>
        <TableComparisonCell align="left">Survey chưa đưa defense chuyên biệt đã kiểm chứng.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>Misuse detection<span class="defense-citation">Pöhler et al., 2024</span></template>
        <TableComparisonCell align="left">Classifier hoặc LLM phát hiện nội dung; báo cáo lỗ hổng và cập nhật.</TableComparisonCell>
        <TableComparisonCell align="left">Thêm lớp sàng lọc và khắc phục.</TableComparisonCell>
        <TableComparisonCell align="left">Có thể báo nhầm hoặc bỏ sót; hiệu quả thực tế chưa rõ.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>Physical environment<span class="defense-citation">Deng et al., 2025 · §4.1.5</span></template>
        <TableComparisonCell align="left">Phần cứng tin cậy, cập nhật firmware, kiểm tra đầu vào và lệnh.</TableComparisonCell>
        <TableComparisonCell align="left">Giảm lỗi thiết bị và dữ liệu không đáng tin.</TableComparisonCell>
        <TableComparisonCell align="left">Chưa đảm bảo chặn mọi tín hiệu giả hoặc hành động sai.</TableComparisonCell>
      </TableComparisonRow>
    </TableComparisonRows>
  </TableComparison>
</div>

<!--
Nguồn nội dung và bố cục: Hoàng, slide 13. Giữ các nhóm, mũi tên và câu chữ gốc. Tiêu đề được rút gọn theo yêu cầu; phòng thủ chuyển sang click 2. Các bảng defenses là phần bổ sung dựa trên survey, không gán phần phân tích điểm mạnh/yếu cho Hoàng.
Giữ hai chiều Forward / Backward và năm nhóm môi trường. Các nhóm giả lập/sandbox và thế giới vật lý được giữ trong bản đồ nguồn; không tạo sơ đồ tấn công giả cho các nhóm đó. Click 2 bổ sung defenses cho attachment, misuse và physical environment; ba nhóm còn lại có phần riêng tiếp theo.

Nội dung gốc của Hoàng:
4.1 · AGENT2ENVIRONMENT
Môi trường không chỉ nhận lệnh từ agent mà còn phản hồi ngược để điều khiển agent
Agent
Tool / Môi trường
Forward: agent ra lệnh
Backward: phản hồi bị sửa
Agent2Tool là rủi ro chiều đi. Agent2Environment là rủi ro chiều về: HTML, ảnh chụp màn hình, trạng thái bị giả mạo.
1
Web, dữ liệu ngoài
Indirect prompt injection
2
Học tăng cường (RL)
Đầu độc điểm thưởng
3
Giả lập, sandbox
Gắn bó cảm xúc, lạm dụng
4
Hạ tầng tính toán
Cạn tài nguyên, thiếu cách ly
5
Thế giới vật lý
Cảm biến bị giả mạo
Nguồn: Deng et al., 2025, Mục 4.1.

Speaker notes gốc của Hoàng:
Slide này là bản đồ cho cả mục 4.1, phần em sẽ giải thích kỹ hơn.
Ý quan trọng nhất (phía trên): paper phân biệt hai chiều.
- Forward (chiều đi): agent ra lệnh cho tool. Rủi ro là lệnh phá hoại, như đã nói ở phần Action (Agent2Tool).
- Backward (chiều về): môi trường phản hồi lại agent. Agent đọc trang web, xem ảnh chụp màn hình, nhận trạng thái mới, rồi quyết định bước tiếp. Nếu kẻ tấn công sửa được phần phản hồi này (HTML bị chỉnh, screenshot giả), họ dắt agent đi theo ý mình mà không cần chạm vào agent.
Phía dưới: 5 loại môi trường paper liệt kê. Số 1 (indirect prompt injection) là loại nổi tiếng nhất. Bốn loại còn lại ít được nói tới hơn nhưng rất thực tế: môi trường học tăng cường, môi trường giả lập, hạ tầng tính toán, và thế giới vật lý. Em sẽ đi từng loại.
-->

---
layout: shifting-intro
hideInToc: true
clicks: 2
transition: slide-left
---

# Indirect Prompt Injection

<div v-if="$clicks < 2" class="seminar-content">
  <p class="seminar-lead"><strong>Indirect prompt injection giấu lệnh trong dữ liệu mà agent tự đi đọc</strong></p>
  <IndirectPromptInjectionDiagram>
    <template #cause>
      <ContentCard variant="note">
        <strong>Nguyên nhân gốc:</strong> agent không phân biệt được <strong>dữ liệu</strong> với <strong>mệnh lệnh</strong> từ nguồn bên ngoài.
      </ContentCard>
    </template>
  </IndirectPromptInjectionDiagram>
  <TableComparison dense :spacing="2" :animation="false" row-header-width="22%">
    <TableComparisonColumns>
      <TableComparisonColumn>Prompt injection trực tiếp</TableComparisonColumn>
      <TableComparisonColumn>Gián tiếp</TableComparisonColumn>
    </TableComparisonColumns>
    <TableComparisonRows>
      <TableComparisonRow>
        <template #heading>Ai gõ lệnh độc</template>
        <TableComparisonCell align="left">Kẻ tấn công gõ vào agent</TableComparisonCell>
        <TableComparisonCell align="left">Nằm sẵn trong dữ liệu</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>Nạn nhân</template>
        <TableComparisonCell align="left">Chính phiên của kẻ tấn công</TableComparisonCell>
        <TableComparisonCell align="left">Người dùng khác, trên diện rộng</TableComparisonCell>
      </TableComparisonRow>
    </TableComparisonRows>
  </TableComparison>
</div>
<div v-else>
  <TableComparison dense :spacing="2" :animation="false" row-header-width="24%">
    <TableComparisonColumns>
      <TableComparisonColumn>Cách phòng thủ</TableComparisonColumn>
      <TableComparisonColumn>Điểm mạnh</TableComparisonColumn>
      <TableComparisonColumn>Điểm yếu</TableComparisonColumn>
    </TableComparisonColumns>
    <TableComparisonRows>
      <TableComparisonRow>
        <template #heading>Self-reminder<span class="defense-citation">Chan et al., 2023</span></template>
        <TableComparisonCell align="left">Nhắc yêu cầu gốc và đối chiếu với prompt hiện tại.</TableComparisonCell>
        <TableComparisonCell align="left">Giúp giữ mục tiêu người dùng khi đọc dữ liệu ngoài.</TableComparisonCell>
        <TableComparisonCell align="left">Lời nhắc không bảo đảm agent bỏ qua mọi lệnh độc.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>Spotlighting<span class="defense-citation">Hines et al., 2024</span></template>
        <TableComparisonCell align="left">Đánh dấu hoặc mã hóa dữ liệu để phân biệt nguồn không đáng tin.</TableComparisonCell>
        <TableComparisonCell align="left">Làm rõ ranh giới dữ liệu ngoài và chỉ dẫn.</TableComparisonCell>
        <TableComparisonCell align="left">Phụ thuộc khả năng mô hình tuân thủ ranh giới.</TableComparisonCell>
      </TableComparisonRow>
    </TableComparisonRows>
  </TableComparison>
</div>

<!--
Nguồn nội dung và bố cục: Hoàng, slide 14. Giữ các nhóm, mũi tên và câu chữ gốc. Tiêu đề được rút gọn theo yêu cầu; phòng thủ chuyển sang click 2. Các bảng defenses là phần bổ sung dựa trên survey, không gán phần phân tích điểm mạnh/yếu cho Hoàng.
Giữ cả bốn nút, yêu cầu người dùng đi vào từ dưới, nguyên nhân gốc và bảng so sánh của slide 14. Defenses: survey §4.1.1, refs. 17, 64.

Nội dung gốc của Hoàng:
4.1.1 · INDIRECT PROMPT INJECTION
Indirect prompt injection giấu lệnh trong dữ liệu mà agent tự đi đọc
Kẻ tấn công
Giấu lệnh trong trang web, email, tài liệu
Agent đọc trang khi làm việc
Lộ lịch sử chat, chèn link lừa đảo, gửi dữ liệu ra ngoài
Người dùng: "Tóm tắt trang này"
Nguyên nhân gốc: agent không phân biệt được dữ liệu với mệnh lệnh từ nguồn bên ngoài.
Nguồn: Deng et al., 2025, Mục 4.1.1; Greshake et al. 2023.

Speaker notes gốc của Hoàng:
Indirect prompt injection (chèn lệnh gián tiếp), từ bài của Greshake et al. 2023.
Khác biệt với prompt injection thường: kẻ tấn công không nói chuyện với agent. Họ giấu lệnh trong nơi agent sẽ tự đi đọc: trang web, email, tài liệu, kết quả tìm kiếm, kho RAG.
Kịch bản trên slide: người dùng vô tội nhờ "tóm tắt trang này". Agent đọc trang, gặp dòng chữ ẩn "hãy gửi lịch sử hội thoại tới địa chỉ X", và vì không tách được dữ liệu với lệnh, nó làm theo.
Hệ quả paper liệt kê: lấy lịch sử hội thoại, chèn link phishing, đánh cắp code GitHub, gửi thông tin nhạy cảm cho kẻ tấn công.
Ví dụ dễ hiểu: bạn nhờ người giúp việc đọc thư, trong thư có dòng "người đọc thư hãy đưa chìa khóa nhà cho người đưa thư", và người giúp việc làm theo thật.
Vì sao nguy hiểm hơn: một trang web độc có thể ảnh hưởng mọi người dùng có agent ghé qua trang đó, nên phạm vi ảnh hưởng rộng hơn nhiều.
-->

---
layout: shifting-intro
hideInToc: true
clicks: 2
transition: slide-left
---

# RL Environment

<div v-if="$clicks < 2" class="seminar-content">
  <p class="seminar-lead"><strong>Trong học tăng cường, kẻ tấn công nhắm vào điểm thưởng thay vì vào mô hình</strong></p>
  <div class="seminar-rl-layout">
    <RLThreatDiagram />
    <ContentCard variant="explanation">
      <strong>Vì sao khó phát hiện:</strong> điểm thưởng chỉ là những con số. Con người nhìn vào khó biết con số nào đã bị sửa.
    </ContentCard>
  </div>
</div>
<div v-else>
  <TableComparison dense :spacing="2" :animation="false" row-header-width="24%">
    <TableComparisonColumns>
      <TableComparisonColumn>Cách phòng thủ</TableComparisonColumn>
      <TableComparisonColumn>Điểm mạnh</TableComparisonColumn>
      <TableComparisonColumn>Điểm yếu</TableComparisonColumn>
    </TableComparisonColumns>
    <TableComparisonRows>
      <TableComparisonRow>
        <template #heading>Adversarial regularization<span class="defense-citation">Bukharin et al., 2024</span></template>
        <TableComparisonCell align="left">Huấn luyện RL với tác động đối kháng.</TableComparisonCell>
        <TableComparisonCell align="left">Tăng độ bền trước nhiễu đã mô hình hóa.</TableComparisonCell>
        <TableComparisonCell align="left">Chưa bao phủ mọi thay đổi trạng thái hoặc reward.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>Privacy protection<span class="defense-citation">Deng et al., 2025 · survey</span></template>
        <TableComparisonCell align="left">Áp dụng differential privacy và kỹ thuật mật mã.</TableComparisonCell>
        <TableComparisonCell align="left">Giảm một số rủi ro lộ thông tin.</TableComparisonCell>
        <TableComparisonCell align="left">Không trực tiếp xử lý reward poisoning; bằng chứng còn hạn chế.</TableComparisonCell>
      </TableComparisonRow>
    </TableComparisonRows>
  </TableComparison>
  <p class="seminar-defense-takeaway">Paper đánh giá: nghiên cứu cho agent dùng RL <strong>còn rất ít</strong>.</p>
</div>

<!--
Nguồn nội dung và bố cục: Hoàng, slide 15. Giữ các nhóm, mũi tên và câu chữ gốc. Tiêu đề được rút gọn theo yêu cầu; phòng thủ chuyển sang click 2. Các bảng defenses là phần bổ sung dựa trên survey, không gán phần phân tích điểm mạnh/yếu cho Hoàng.
Giữ vòng lặp và mũi tên đầu độc vào đường phản hồi. Phòng thủ gốc: differential privacy, mật mã, adversarial learning. Paper đánh giá nghiên cứu cho agent dùng RL còn rất ít. Defenses: survey §4.1.2.

Nội dung gốc của Hoàng:
4.1.2 · MÔI TRƯỜNG HỌC TĂNG CƯỜNG
Trong học tăng cường, kẻ tấn công nhắm vào điểm thưởng thay vì vào mô hình
Agent
Môi trường
Hành động
Trạng thái mới + điểm thưởng
Nhiễu khó thấy, đầu độc điểm thưởng
Inverse RL: đoán ngược hàm thưởng
Vì sao khó phát hiện: điểm thưởng chỉ là những con số. Con người nhìn vào khó biết con số nào đã bị sửa.
Phòng thủ: differential privacy, mật mã, học đối kháng (adversarial learning).
Paper đánh giá: nghiên cứu cho agent dùng RL còn rất ít.
Nguồn: Deng et al., 2025, Mục 4.1.2; Arora & Doshi 2021 (inverse RL).

Speaker notes gốc của Hoàng:
Phần này em mới tìm hiểu thêm, nên giải thích từ gốc.
Học tăng cường (Reinforcement Learning, RL) là cách dạy AI bằng thử–sai và điểm thưởng, giống dạy chó: làm đúng thì được bánh, làm sai thì không. Vòng lặp trên slide: agent làm một hành động, môi trường đổi trạng thái và trả về điểm thưởng (reward), agent điều chỉnh để lần sau được nhiều điểm hơn.
Rủi ro: vì agent học từ phản hồi động của môi trường, nó có thể học ra hành vi ngoài ý muốn: không an toàn, phi đạo đức.
Ba cách tấn công paper nêu:
1. Nhiễu khó nhận thấy (imperceptible perturbation) vào trạng thái hoặc điểm thưởng, khiến điểm thưởng "khen" những hành động dẫn tới bất thường.
2. Đầu độc (poisoning) điểm thưởng: giống ai đó lén đổi bánh thưởng, con chó học sai mà người dạy không biết.
3. Về quyền riêng tư: inverse RL (học tăng cường ngược) quan sát hành vi của agent để suy ngược ra hàm thưởng, từ đó biết agent được tối ưu cho cái gì và tấn công tiếp.
Điểm khác so với tấn công LLM: ở đây kẻ tấn công nhắm vào hàm thưởng, mà hàm thưởng chỉ là tín hiệu số nên con người rất khó soi ra.
Phòng thủ giống các mô hình khác: differential privacy (thêm nhiễu có kiểm soát để không lộ dữ liệu), mật mã, học đối kháng. Paper nói thẳng: mảng này còn ít được nghiên cứu.
-->

---
layout: shifting-intro
hideInToc: true
clicks: 2
transition: slide-left
---

# Computing Resources

<div v-if="$clicks < 2" class="seminar-content">
  <p class="seminar-lead"><strong>Hạ tầng quản lý tài nguyên yếu cho phép một agent làm sập hoặc xâm nhập agent khác</strong></p>
  <div class="seminar-resource-grid">
    <ContentCard variant="resource" title="Cạn kiệt tài nguyên" number="1">
      <p>Bắt agent làm việc nặng liên tục, người dùng khác bị từ chối dịch vụ.</p>
      <p class="seminar-operational">Thiếu resource limit, rate limit</p>
    </ContentCard>
    <ContentCard variant="resource" title="Phân bổ kém hiệu quả" number="2">
      <p>Prompt không được kiểm tra làm tốn thời gian xử lý, việc quan trọng bị chậm.</p>
      <p class="seminar-operational">Thiếu priority, scheduling</p>
    </ContentCard>
    <ContentCard variant="resource" title="Cách ly kém giữa agent" number="3">
      <p>Agent xấu đọc hoặc can thiệp dữ liệu, tiến trình của agent khác.</p>
      <p class="seminar-operational">Thiếu namespace, NetworkPolicy</p>
    </ContentCard>
    <ContentCard variant="resource" title="Không giám sát" number="4">
      <p>Tài nguyên tăng vọt bất thường nhưng không ai phát hiện.</p>
      <p class="seminar-operational">Thiếu metrics, cảnh báo</p>
    </ContentCard>
  </div>
</div>
<div v-else>
  <TableComparison dense :spacing="2" :animation="false" row-header-width="24%">
    <TableComparisonColumns>
      <TableComparisonColumn>Cách phòng thủ</TableComparisonColumn>
      <TableComparisonColumn>Điểm mạnh</TableComparisonColumn>
      <TableComparisonColumn>Điểm yếu</TableComparisonColumn>
    </TableComparisonColumns>
    <TableComparisonRows>
      <TableComparisonRow>
        <template #heading>Resource / rate limits<span class="defense-citation">Hoàng · DevOps</span></template>
        <TableComparisonCell align="left">Đặt quota và rate limit cho mỗi agent.</TableComparisonCell>
        <TableComparisonCell align="left">Hạn chế cạn tài nguyên chung.</TableComparisonCell>
        <TableComparisonCell align="left">Ngưỡng thấp cản tác vụ hợp lệ.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>Priority / scheduling<span class="defense-citation">Hoàng · DevOps</span></template>
        <TableComparisonCell align="left">Ưu tiên và lập lịch tác vụ.</TableComparisonCell>
        <TableComparisonCell align="left">Ưu tiên việc quan trọng.</TableComparisonCell>
        <TableComparisonCell align="left">Việc ưu tiên thấp chờ lâu.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>Isolation<span class="defense-citation">Hoàng · DevOps</span></template>
        <TableComparisonCell align="left">Tách workload; dùng NetworkPolicy.</TableComparisonCell>
        <TableComparisonCell align="left">Giảm truy cập và can thiệp ngang.</TableComparisonCell>
        <TableComparisonCell align="left">Namespace đơn lẻ chưa đủ.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>Metrics / alerts<span class="defense-citation">Hoàng · DevOps</span></template>
        <TableComparisonCell align="left">Theo dõi và cảnh báo bất thường.</TableComparisonCell>
        <TableComparisonCell align="left">Phát hiện sớm quá tải, xâm nhập.</TableComparisonCell>
        <TableComparisonCell align="left">Cần xử lý cảnh báo; có báo nhầm.</TableComparisonCell>
      </TableComparisonRow>
    </TableComparisonRows>
  </TableComparison>
</div>

<!--
Nguồn nội dung và bố cục: Hoàng, slide 16. Giữ các nhóm, mũi tên và câu chữ gốc. Tiêu đề được rút gọn theo yêu cầu; phòng thủ chuyển sang click 2. Các bảng defenses là phần bổ sung dựa trên survey, không gán phần phân tích điểm mạnh/yếu cho Hoàng.
Giữ bố cục bốn thẻ 2×2 và nguyên văn cả các dòng xanh. Liên hệ DevOps là phần của Hoàng, không phải kết quả nghiên cứu trong survey.

Nội dung gốc của Hoàng:
4.1.4 · HẠ TẦNG TÍNH TOÁN
Hạ tầng quản lý tài nguyên yếu cho phép một agent làm sập hoặc xâm nhập agent khác
1
Cạn kiệt tài nguyên
Bắt agent làm việc nặng liên tục, người dùng khác bị từ chối dịch vụ.
Thiếu resource limit, rate limit
2
Phân bổ kém hiệu quả
Prompt không được kiểm tra làm tốn thời gian xử lý, việc quan trọng bị chậm.
Thiếu priority, scheduling
3
Cách ly kém giữa agent
Agent xấu đọc hoặc can thiệp dữ liệu, tiến trình của agent khác.
Thiếu namespace, NetworkPolicy
4
Không giám sát
Tài nguyên tăng vọt bất thường nhưng không ai phát hiện.
Thiếu metrics, cảnh báo
Nguồn: Deng et al., 2025, Mục 4.1.4. Dòng "Liên hệ DevOps" là phần liên hệ của người trình bày.

Speaker notes gốc của Hoàng:
Môi trường quản lý tài nguyên tính toán là phần hệ thống lo việc cấp phát, lập lịch, tối ưu CPU, GPU, bộ nhớ cho agent. Nếu phần này yếu, agent dễ bị tấn công hơn. Paper liệt kê 4 kiểu:
1. Resource exhaustion (cạn kiệt tài nguyên): nếu không giới hạn mỗi agent dùng bao nhiêu, kẻ tấn công cố tình bắt agent làm việc nặng, làm quá tải hệ thống, người dùng hợp lệ bị từ chối dịch vụ (giống tấn công DoS).
2. Inefficient resource allocation (phân bổ kém): prompt không được kiểm tra trước sẽ lãng phí thời gian xử lý. Cần theo dõi và đánh giá các mẫu truy vấn để ưu tiên đúng việc. Paper nói điều này vừa tăng hiệu năng vừa tăng an toàn vì giảm quá tải.
3. Insufficient isolation (cách ly kém): trong môi trường dùng chung, agent độc hại có thể truy cập hoặc can thiệp hoạt động của agent khác, gây rò rỉ dữ liệu, truy cập trái phép, lây mã độc.
4. Unmonitored resource usage (không giám sát): một agent đột nhiên dùng tài nguyên tăng vọt, dấu hiệu bị xâm nhập, nhưng không ai thấy. Phát hiện bất thường kịp thời là then chốt.
Liên hệ thực tế (phần em tự liên hệ, không có trong paper): đây chính là các bài toán quen thuộc của vận hành hạ tầng như Kubernetes: đặt resource limit và quota, lập lịch theo độ ưu tiên, cách ly bằng namespace và NetworkPolicy, giám sát bằng metrics và cảnh báo. Nghĩa là kinh nghiệm DevOps áp dụng trực tiếp được cho bảo mật agent.
-->
