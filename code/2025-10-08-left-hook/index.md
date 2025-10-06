---
slug: left-hool
title: Left Hook
authors: [pangpond]
tags: [code, git]
---

Lefthook คือเครื่องมือจัดการ Git hooks ที่รวดเร็วและทรงพลัง ใช้สำหรับรันสคริปต์อัตโนมัติในขั้นตอนต่างๆ ของ Git ช่วยให้ทีมรักษาคุณภาพโค้ดโดยอัตโนมัติก่อนที่จะ commit!

<!-- truncate -->

## lefthook for tsx project

```yaml
pre-commit:
  parallel: true
  commands:
    lint:
      glob: "*.{js,ts,jsx,tsx}"
      run: npx eslint {staged_files}
    types:
      glob: "*.{js,ts, jsx, tsx}"
      run: npx tsc
commit-msg:
  parallel: true
  commands:
    commitlint:
      run: npx commitlint --edit
```

### สิ่งที่ Lefthook ทำในโปรเจ็กต์นี้:

#### Pre-commit hooks:

- Lint: รัน ESLint กับไฟล์ที่ staged (.js, .ts, .jsx, .tsx)
- Types: รัน TypeScript compiler เพื่อตรวจสอบ type errors

#### Commit-msg hooks:

- Commitlint: ตรวจสอบรูปแบบ commit message ตาม Conventional Commits

### ประโยชน์ของ Lefthook:

1. ความเร็ว: เขียนด้วย Go ทำให้เร็วกว่า Git hooks ปกติ
2. Parallel execution: รันคำสั่งหลายๆ ตัวพร้อมกันได้
3. Flexible: กำหนดเงื่อนไขการรันได้ละเอียด (glob patterns)
4. Easy setup: กำหนดค่าในไฟล์ YAML เดียว

## การติดตั้ง:

```bash
# ติดตั้ง lefthook
npm install --save-dev lefthook

# ติดตั้ง git hooks
npx lefthook install
```

## lefthook for PHP project

```yaml
pre-commit:
  parallel: true
  commands:
    # PHP Syntax Check
    php-lint:
      glob: "*.php"
      run: php -l {staged_files}

    # PHP Code Sniffer
    phpcs:
      glob: "*.php"
      run: vendor/bin/phpcs {staged_files}

    # PHP CS Fixer
    php-cs-fixer:
      glob: "*.php"
      run: vendor/bin/php-cs-fixer fix --dry-run --diff {staged_files}

    # PHPStan (Static Analysis)
    phpstan:
      glob: "*.php"
      run: vendor/bin/phpstan analyse {staged_files}
commit-msg:
  commands:
    # Conventional Commits
    commitlint:
      run: npx commitlint --edit
```

## การติดตั้ง:

```bash
# ติดตั้ง lefthook
vendor/bin/lefthook install
```
