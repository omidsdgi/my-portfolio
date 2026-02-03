# 🚀 Portfolio Website - Refactored Version

## ✨ تغییرات و بهبودهای اعمال شده

### 🎨 1. Theme Management (Dark & Light Mode)
- ✅ **تنظیم تم Slate & Emerald** در تمام حالت‌های Dark و Light
- ✅ **پشتیبانی از System Theme Detection** - تشخیص خودکار تم سیستم کاربر
- ✅ **ThemeToggle Component** بهبود یافته با انیمیشن نرم
- ✅ **رنگ‌بندی یکپارچه** در تمام کامپوننت‌ها

**رنگ‌های استفاده شده:**
- Primary: Emerald (500-600)
- Background Light: Slate (50-100)
- Background Dark: Slate (800-900)
- Text Light: Slate (700-900)
- Text Dark: Slate (50-300)

---

### 🔤 2. Typography & Fonts
**فونت‌های بهینه شده:**
- **Inter** - فونت اصلی (Clean & Modern)
- **Poppins** - برای تیترها (Display & Emphasis)
- **Vazir** - برای محتوای فارسی (Persian Content)

**مزایا:**
- بهینه‌سازی با `next/font` برای عملکرد بهتر
- پشتیبانی کامل از RTL برای فارسی
- خوانایی عالی در تمام اندازه‌های صفحه

---

### 📌 3. Fixed Navbar
- ✅ **Navbar ثابت در بالای صفحه** با `position: fixed`
- ✅ **Blur Effect** هنگام اسکرول
- ✅ **Smooth Scroll** برای navigation links
- ✅ **Offset اتوماتیک** برای جلوگیری از پنهان شدن محتوا زیر navbar

**کد اصلی:**
```typescript
const handleSmoothScroll = (e: React.MouseEvent, href: string) => {
  e.preventDefault();
  const element = document.getElementById(href.replace('#', ''));
  if (element) {
    const navHeight = 80;
    const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
};
```

---

### 🔄 4. RTL Support (راست‌چین کردن فارسی)
- ✅ **متن‌های فارسی کاملاً راست‌چین و کشیده**
- ✅ **تیترها در سمت راست** هنگام زبان فارسی
- ✅ **Line-height بهینه** برای متن فارسی (2)
- ✅ **Letter-spacing مناسب** برای خوانایی بهتر

**کلاس RTL:**
```css
.rtl-text {
  direction: rtl;
  text-align: right;
  font-family: var(--font-vazir);
  line-height: 2;
  letter-spacing: 0.02em;
}
```

---

### 🖼️ 5. About Section Image Height Fix
- ✅ **تصویر Sticky** در دسکتاپ - همیشه قابل مشاهده
- ✅ **max-height محدود** برای جلوگیری از بزرگی بیش از حد
- ✅ **Aspect Ratio حفظ شده** در تمام سایزها
- ✅ **Hover Effect** با scale animation

**کد اصلی:**
```typescript
<div className="w-full h-full md:sticky md:top-24">
  <div className="max-h-[600px] md:max-h-[700px] overflow-hidden">
    <Image ... className="hover:scale-105 transition-transform duration-500" />
  </div>
</div>
```

---

### 🔧 6. مشکلات Critical رفع شده

#### ❌ مشکل: Dark Mode Button در Navbar
**قبل:**
```typescript
<button onClick={document.documentElement.classList.toggle('dark')}>
```
**بعد:**
```typescript
<ThemeToggle /> // استفاده از next-themes
```

#### ❌ مشکل: Hardcoded Dark Class
**قبل:**
```html
<Html lang="en" className="dark">
```
**بعد:**
```html
<Html lang="en" className="scroll-smooth">
```

#### ❌ مشکل: متن فارسی Encoded
**قبل:**
```
Ø¨Ù‡ Ø¹Ù†ÙˆØ§Ù†...
```
**بعد:**
```
به عنوان یک توسعه‌دهنده...
```

---

### 🎯 7. تغییرات Medium Priority

1. **Accessibility بهبود یافته:**
   - ARIA labels برای تمام دکمه‌ها و لینک‌ها
   - Semantic HTML tags
   - Focus states واضح با ring effect

2. **Performance Optimization:**
   - Image lazy loading
   - Font optimization با `next/font`
   - CSS variables برای theme switching سریع

3. **Code Quality:**
   - TypeScript interfaces کامل
   - Consistent naming conventions
   - Proper component structure

4. **SEO Improvements:**
   - Meta tags کامل
   - Open Graph tags
   - Twitter Card metadata

---

### 📁 8. ساختار فولدر جدید

```
project-root/
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── SkillList.tsx
│   ├── SkillCard.tsx
│   ├── Projects.tsx
│   ├── ProjectCard.tsx
│   ├── SectionTitle.tsx
│   ├── ThemeToggle.tsx
│   └── Footer.tsx
├── contexts/
│   └── GlobalContext.tsx
├── data/
│   └── Data.tsx
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx
├── styles/
│   └── globals.css
└── public/
    ├── fonts/
    │   ├── Vazir-Regular.woff2
    │   ├── Vazir-Medium.woff2
    │   └── Vazir-Bold.woff2
    └── image/
        ├── Omid.png
        └── shopping.png
```

---

## 🚀 نصب و راه‌اندازی

### پیش‌نیازها:
```bash
npm install next-themes
npm install lucide-react
npm install react-icons
npm install nanoid
npm install tailwindcss
```

### فونت Vazir:
1. دانلود فونت Vazir از [GitHub](https://github.com/rastikerdar/vazir-font)
2. کپی فایل‌های `.woff2` به `public/fonts/`
3. تنظیم در `_app.tsx` انجام شده است

---

## 🎨 کلاس‌های CSS سفارشی

### Utility Classes:
- `.align-element` - Container با max-width
- `.rtl-text` - متن فارسی راست‌چین
- `.card` - کارت با shadow و hover effect
- `.btn-primary` - دکمه اصلی با emerald theme
- `.section-title` - تیتر بخش‌ها
- `.gradient-text` - متن با gradient emerald
- `.nav-link` - لینک‌های navbar

---

## 🔍 نکات مهم

### 1. Theme Switching:
```typescript
import { useTheme } from 'next-themes';

const { theme, setTheme, systemTheme } = useTheme();
```

### 2. Language Switching:
```typescript
import { useLangContext } from '@/contexts/GlobalContext';

const { lang, toggleLang } = useLangContext();
```

### 3. Smooth Scroll:
همه لینک‌های navbar به صورت خودکار smooth scroll دارند.

---

## 📊 چک‌لیست تکمیل شده

### ✅ اقدامات Critical:
- [x] تنظیم تم Slate & Emerald
- [x] Dark Mode با System Detection
- [x] بهترین فونت‌ها (Inter, Poppins, Vazir)
- [x] Navbar ثابت در بالای صفحه
- [x] Smooth Scroll برای NavLinks
- [x] نوشته‌های فارسی راست‌چین و کشیده
- [x] مدیریت ارتفاع تصویر About
- [x] رفع مشکلات encoding
- [x] حذف hardcoded dark class
- [x] استفاده از ThemeToggle component

### ✅ اقدامات Medium:
- [x] Accessibility improvements
- [x] SEO optimization
- [x] TypeScript interfaces
- [x] Consistent naming
- [x] Performance optimization

---

## 🎯 نتیجه

پروژه به صورت کامل بازنویسی شد با:
- ✨ UI/UX مدرن و حرفه‌ای
- 🎨 Theme Management قوی
- 🌐 پشتیبانی کامل از RTL
- ⚡ Performance بهینه
- ♿ Accessibility عالی
- 🔍 SEO Friendly
- 📱 Fully Responsive

---

## 📞 تماس

برای هرگونه سوال یا مشکل، لطفاً با من تماس بگیرید.

**Omid Sadeghi**
- GitHub: [@omidsdgi](https://github.com/omidsdgi)
- Telegram: [@omidsdgi](https://t.me/omidsdgi)
- Email: omid69sdgi@gmail.com
