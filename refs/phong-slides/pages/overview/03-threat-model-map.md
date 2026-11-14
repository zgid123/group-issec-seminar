---
layout: shifting-intro
hideInToc: true
transition: slide-left
---

# Threat models: tác nhân và bối cảnh

**Ai gây đe dọa, hoặc rủi ro phát sinh trong bối cảnh triển khai nào?**

| Threat model | Vùng rủi ro | Tác động tiêu biểu |
| --- | --- | --- |
| **User ác ý** | Cả 6 nhóm rủi ro | Đổi mục tiêu, lộ dữ liệu |
| **Developer ác ý** | <span style="background:#c9def6;padding:0.08em 0.28em;border-radius:0.18em">Perception</span> | Phản hồi độc hại, sai lệch |
| **Plugin provider ác ý** | <span style="background:#a4c9ed;padding:0.08em 0.28em;border-radius:0.18em">Brain</span> | Thông tin sai, tool độc hại |
| **Data provider ác ý** | <span style="background:#a4c9ed;padding:0.08em 0.28em;border-radius:0.18em">Brain</span> · <span style="background:#ddf0d3;padding:0.08em 0.28em;border-radius:0.18em">Environment</span> | Đầu ra sai, nhiễm/lộ dữ liệu |
| **LLM deployment** | <span style="background:#a4c9ed;padding:0.08em 0.28em;border-radius:0.18em">Brain</span> · <span style="background:#ddf0d3;padding:0.08em 0.28em;border-radius:0.18em">Environment</span> | Hallucination, giảm hiệu năng |
| **Agent deployment** | <span style="background:#c7cff0;padding:0.08em 0.28em;border-radius:0.18em">Agent2Agent</span> | Lừa dối, giảm hiệu năng |

<!--
Nguồn: Deng et al. (2025), Table 1, trang PDF 6; đối chiếu trực tiếp bảng trong PDF được cung cấp. Gom các hàng nghiên cứu theo đúng sáu nhãn trong cột Threat Model. Nhãn trên slide rút gọn: User ác ý = malicious user; Developer ác ý = malicious developer; Plugin provider ác ý = malicious plugin provider; Data provider ác ý = malicious data provider. Hai nhãn deployment giữ nguyên. Environment là nhãn rút gọn của agent2environment.
Bốn hàng đầu là tác nhân ác ý: người dùng, nhà phát triển, nhà cung cấp plugin, nhà cung cấp dữ liệu. Hai hàng cuối là bối cảnh triển khai LLM và agent; không diễn giải chúng như hai loại kẻ tấn công. Đây là cách survey đặt nhãn, không phải một đặc tả đầy đủ quyền truy cập và năng lực của đối thủ.
Các tác động là bản dịch tóm lược Target Effects tương ứng, không phải tình huống mới tự đặt. Malicious developer: Jiang et al. [80], bias/toxic/disinformation response. Malicious plugin provider: Dong et al. [39], misinformation/malicious tool use. Malicious data provider: Yang et al. [211] ở Brain và Greshake et al. [56] ở Environment. LLM deployment: hallucination và performance degradation. Agent deployment: các hàng Agent Smith, Motwani, Hoodwinked, Xu và Park trong nhóm agent2agent.
Malicious user xuất hiện ở cả sáu nhóm, nhưng mỗi nghiên cứu chỉ khảo sát các tác động cụ thể. Không hiểu hàng tổng hợp này là mọi người dùng ác ý đều tác động đồng thời lên mọi thành phần. Màu phân biệt risk source, không phải mức độ nghiêm trọng. Không đưa các thang attack/defense efficacy lên slide này vì chúng không mô tả threat model.
Thông điệp: Risk Source trả lời rủi ro ở đâu; Threat Model trả lời tác nhân hoặc bối cảnh nào được nghiên cứu. Hai cột là hai góc nhìn khác nhau. Phần tiếp theo đi vào cơ chế tấn công và phòng vệ theo từng vùng rủi ro.
-->
