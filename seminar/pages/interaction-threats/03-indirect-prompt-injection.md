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
      <TableComparisonColumn>Phương pháp</TableComparisonColumn>
      <TableComparisonColumn>Điểm mạnh</TableComparisonColumn>
      <TableComparisonColumn>Điểm yếu / giới hạn</TableComparisonColumn>
    </TableComparisonColumns>
    <TableComparisonRows>
      <TableComparisonRow>
        <template #heading>Self-reminder<span class="defense-citation"><a href="https://arxiv.org/abs/2401.00994" target="_blank" rel="noopener noreferrer">Chan et al., 2023</a></span></template>
        <TableComparisonCell align="left">Nhắc lại chỉ dẫn ban đầu mỗi lần gửi prompt tới trợ lý.</TableComparisonCell>
        <TableComparisonCell align="left">Đưa lại chỉ dẫn gốc vào mỗi lượt để nhắc phạm vi nhiệm vụ.</TableComparisonCell>
        <TableComparisonCell align="left">Prompt dài hơn làm tăng chi phí; thử nghiệm trên GPT-3.5.</TableComparisonCell>
      </TableComparisonRow>
      <TableComparisonRow>
        <template #heading>Spotlighting<span class="defense-citation"><a href="https://arxiv.org/pdf/2403.14720" target="_blank" rel="noopener noreferrer">Hines et al., 2024</a></span></template>
        <TableComparisonCell align="left">Biến đổi dữ liệu để đánh dấu nguồn đầu vào không tin cậy.</TableComparisonCell>
        <TableComparisonCell align="left">Giảm thành công của indirect injection trong các thử nghiệm GPT.</TableComparisonCell>
        <TableComparisonCell align="left">Bằng chứng thuộc mô hình và tập tấn công được thử.</TableComparisonCell>
      </TableComparisonRow>
    </TableComparisonRows>
  </TableComparison>
</div>

<!--
GHI CHÚ THUYẾT TRÌNH

[click]

Chỉ dẫn độc nằm trong dữ liệu agent truy xuất, vượt ranh giới dữ liệu/chỉ dẫn.

Sơ đồ website/email là minh họa luồng tấn công; cần agent đọc và làm theo payload.

[click]

Bảng tiếp theo giới thiệu phương pháp, điểm mạnh và điểm yếu / giới hạn. Với mỗi hàng, giải thích cơ chế trước, sau đó nêu kết quả hoặc khả năng đã được mô tả, rồi chốt phạm vi bằng chứng. Giới hạn đánh giá không đồng nghĩa phương pháp thất bại ở mọi bối cảnh. Các chi tiết và nguồn kiểm tra nằm bên dưới.
-->
