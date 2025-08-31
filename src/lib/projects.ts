export interface Project {
    title: string;
    description: string;
    demoUrl: string;
    githubUrl: string;
}

export const projects: Project[] = [
    {
        title: "Main project shopping",
        description: "سایت فروشگاهی مدرن با تمرکز بر تجربه کاربری و عملکرد بهینه. این پروژه با استفاده از Next.js و TypeScript توسعه داده شده و دارای قابلیت‌هایی مانند سبد خرید، نمایش محصولات، فیلتر دسته‌بندی، و طراحی واکنش‌گرا است. این سیستم از React Context برای مدیریت مؤثر وضعیت سبد خرید و API‌های RESTful برای تعامل با سرور بهره می‌برد، و با استفاده از تکنیک‌های lazy loading، ریسپانسیو کامل و اعتبارسنجی قوی روی فرم‌ها، تجربه‌ای سریع و مطمئن را به کاربران ارائه می‌دهد. داده‌ها از طریق CMS مدیریت می‌شوند و رابط کاربری با تمرکز بر سادگی و وضوح طراحی شده است.",
        demoUrl: "https://main-project-shopping.vercel.app",
        githubUrl: "https://github.com/omidsdgi/main-project-shopping",

    },
    {
        title: "React Quiz",
        description: "React Quiz – اپلیکیشن آزمون آنلاین واکنش‌گرا با React و TypeScript است. این پروژه یک سیستم پویا برای پاسخ‌دهی به سوالات چندگزینه‌ای ارائه می‌دهد که امکان مشاهده فوری نتیجه و امتیاز نهایی را فراهم می‌کند. سوالات بر اساس مباحث ارائه شده در دوره Ultimate React Course (Udemy) طراحی شده‌اند تا درک عمیق و پیشرفته‌ای از مفاهیم React به نمایش بگذارند، از جمله: state management با useReducer، مدیریت فرم‌ها، اصول component lifecycle، hooks پیشرفته (useMemo، useCallback، useEffect)، مدیریت مسیرها با React Router و بهینه‌سازی عملکرد React.",
        demoUrl: "https://react-quiz-fg73.vercel.app/",
        githubUrl: "https://github.com/omidsdgi/React-Quiz",

    },
    {
        title: "React Weather App",
        description: "یک اپلیکیشن واکنش‌گرا برای نمایش اطلاعات آب‌وهوا با استفاده از OpenWeather API. این پروژه با React و TypeScript توسعه داده شده و با تمرکز بر تجربه کاربری طراحی شده است. کاربر می‌تواند با وارد کردن نام شهر، اطلاعاتی مانند دمای فعلی، وضعیت آسمان، رطوبت، و سرعت باد را مشاهده کند. از آیکون‌های متحرک برای نمایش وضعیت آب‌وهوا (مانند بارانی، آفتابی و ابری) استفاده شده که تجربه‌ی بصری جذابی فراهم می‌کند.",
        demoUrl: "https://weather-api-ihbu.vercel.app///",
        githubUrl: "https://github.com/omidsdgi/weather-api",
    },
    {
        title: "usePopcorn",
        description: "usePopcorn یک برنامه تک‑صفحه‌ای است که با ‎create‑react‑app ساخته شده و جست‌وجوی عنوان فیلم را با نگه‌داشتن مقدار query در ‎useState انجام می‌دهد و در نهایت دو جعبه (لیست نتایج و لیست دیده‌شده‌ها) را رندر می‌کند\n" +

            ". در پشت صحنه، هوک اختصاصی ‎useMovies با استفاده از fetch و ‎AbortController داده‌های سرویس ‎OMDb را واکشی کرده و وضعیت‌های «در حال بارگیری»، «خطا» و فهرست فیلم‌ها را مدیریت می‌کند" +
            ". برای ماندگاری داده‌ها،‎useLocalStorageState مقادیر را در ‎localStorage ذخیره کرده و با هر تغییر، مقدار سریالایز‎شده را به‌روزرسانی می‌کند. برنامه قابلیت جست‌وجو، امتیازدهی ★و ذخیرهٔ آفلاین فهرست فیلم‌های دیده‌شده را در یک کدبیس تمیز و ماژولار پیاده می‌کند.",
        demoUrl: "https://movie-watch-list-gull.vercel.app//",
        githubUrl: "https://github.com/omidsdgi/movieWatchList",
    },
    {
        title: "Natours project ",
        description: "پروژه Natours یک وب‌سایت فرانت‌اند حرفه‌ای است که با استفاده از Sass و ویژگی‌های مدرن CSS مانند Flexbox، Grid، animation، و transitions طراحی شده است. در این پروژه ساختار کد CSS با رویکرد ماژولار و معماری 7-1 (Seven-One Pattern) در Sass پیاده‌سازی شده تا خوانایی، نگهداری و توسعه آسان‌تر شود. طراحی کاملاً ریسپانسیو بوده و شامل انیمیشن‌های روان، افکت‌های پارالاکس، و layoutهای چندستونه است. این پروژه نمونه‌ای عالی از تسلط بر پیش‌پردازنده Sass، معماری BEM، و پیاده‌سازی رابط کاربری حرفه‌ای بدون استفاده از فریم‌ورک‌های جاوااسکریپتی است.",
        demoUrl: "https://natours-project-orpin.vercel.app/",
        githubUrl: "https://github.com/omidsdgi/Natours-project",
    },
    {
        title: "Omnio Food ",
        description: "Omnio Food یک وب‌سایت استاتیک سفارش غذاست که به‌طور کامل با HTML5 و CSS3 پیاده‌سازی شده و از JavaScript برای منوی ناوبری و تعاملات جزئی استفاده می‌کند. این پروژه تمرکز ویژه‌ای بر طراحی واکنش‌گرا (Responsive) دارد؛ هریک از صفحات با بهره‌گیری از Flexbox و Grid چیدمان تمیز و مدرنی ارائه می‌دهند، در حالی که جلوه‌های بصری (Hover/Fade) با CSS Animation و Transitions پیاده شده‌اند تا تجربه کاربری روانی خلق شود. این مخزن نمونه‌ای جمع‌وجور برای نشان دادن توانمندی در ساخت رابط کاربری بدون فریم‌ورک، سازمان‌دهی کدهای CSS به‌صورت ماژولار، و بهینه‌سازی تصاویر و فایل‌ها برای بارگذاری سریع است.",
        demoUrl: "https://omnio-food-project.vercel.app/",
        githubUrl: "https://github.com/omidsdgi/omnio-food",
    },


];
