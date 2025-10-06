---
slug: conventional-commits
title: Conventional Commits
authors: [pangpond]
tags: [code]
---

Conventional Commits คือมาตรฐานการเขียน commit message ที่ช่วยให้ทีมพัฒนาสื่อสารการเปลี่ยนแปลงของโค้ดได้ชัดเจนและเป็นระบบ การยึดรูปแบบนี้ช่วยให้ทีมทำงานสอดคล้องกัน, ค้นหาความเปลี่ยนแปลงย้อนหลังสะดวก และรองรับการสร้างเวอร์ชัน/รีลีสแบบอัตโนมัติได้ง่ายขึ้น.

<!-- truncate -->

## รูปแบบพื้นฐาน:

```bash
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

#### ประเภท ใน Conventional Commits:

- `feat`: ฟีเจอร์ใหม่
- `fix`: แก้ไขบัค
- `docs`: เอกสาร
- `style`: การจัดรูปแบบโค้ด
- `refactor`: ปรับปรุงโค้ด
- `test`: เพิ่ม/แก้ไขเทส
- `chore`: งานบำรุงรักษา, การตั้งค่า, การอัปเดต dependencies

การใช้ chore ช่วยให้ทีมเข้าใจได้ทันทีว่าการเปลี่ยนแปลงนั้นเป็นการปรับปรุงที่ไม่ส่งผลต่อฟังก์ชันการทำงานหลักของโปรแกรม

#### ตัวอย่างการใช้ chore:

````bash
git commit -m "chore: update .gitignore"
git commit -m "chore: reorganize folder structure"
git commit -m "chore: update dependencies"
git commit -m "chore: configure build tools"```
````

## ประเภทหลัก (Types)

### `feat` - ฟีเจอร์ใหม่

```bash
git commit -m "feat: add user authentication"
git commit -m "feat(auth): implement OAuth login"
```

### `fix` - แก้ไขบัค

```bash
git commit -m "fix: resolve memory leak in image processing"
git commit -m "fix(api): handle null response properly"
```

### `docs` - เอกสาร

```bash
git commit -m "docs: update API documentation"
git commit -m "docs: add installation guide"
```

### `style` - การจัดรูปแบบโค้ด

```bash
git commit -m "style: fix indentation in components"
git commit -m "style: remove unused imports"
```

### `refactor` - ปรับปรุงโค้ด

```bash
git commit -m "refactor: extract validation logic"
git commit -m "refactor(utils): optimize data processing"
```

### `test` - เพิ่ม/แก้ไขเทส

```bash
git commit -m "test: add unit tests for user service"
git commit -m "test: fix flaky integration test"
```

### `chore` - งานบำรุงรักษา

```bash
git commit -m "chore: update dependencies"
git commit -m "chore: configure build tools"
```

## ประโยชน์

1. **ความชัดเจน**: เข้าใจได้ทันทีว่า commit นี้ทำอะไร
2. **Automation**: ใช้สร้าง changelog อัตโนมัติ
3. **Versioning**: ใช้กำหนด version bumping
4. **Team Communication**: ทีมเข้าใจการเปลี่ยนแปลงได้ง่าย

## ตัวอย่างครบถ้วน

```bash
feat(auth): add OAuth2 integration

- Implement Google OAuth2 login
- Add JWT token validation
- Update user model for OAuth data

Closes #123
```

## สรุป

Conventional Commits ช่วยให้การจัดการโปรเจ็กต์เป็นระบบและมีประสิทธิภาพมากขึ้น โดยเฉพาะเมื่อใช้ร่วมกับเครื่องมืออย่าง lefthook และ commitlint เพื่อตรวจสอบรูปแบบ commit message อัตโนมัติ
