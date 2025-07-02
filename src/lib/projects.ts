export interface Project {
    title: string;
    description: string;
    demoUrl: string;
    githubUrl: string;
}

export const projects: Project[] = [
    {
        title: "main project shopping",
        description: "سایت فروشگاهی مدرن با تمرکز بر تجربه کاربری و عملکرد بهینه. این پروژه با استفاده از Next.js و TypeScript توسعه داده شده و دارای قابلیت‌هایی مانند سبد خرید، نمایش محصولات، فیلتر دسته‌بندی، و طراحی واکنش‌گرا است. این سیستم از React Context برای مدیریت مؤثر وضعیت سبد خرید و API‌های RESTful برای تعامل با سرور بهره می‌برد، و با استفاده از تکنیک‌های lazy loading، ریسپانسیو کامل و اعتبارسنجی قوی روی فرم‌ها، تجربه‌ای سریع و مطمئن را به کاربران ارائه می‌دهد. داده‌ها از طریق CMS مدیریت می‌شوند و رابط کاربری با تمرکز بر سادگی و وضوح طراحی شده است.",
        demoUrl: "https://main-project-shopping.vercel.app",
        githubUrl: "https://https://github.com/omidsdgi/main-project-shopping",

    },

    {
        title: "React Weather App",
        description: "یک اپلیکیشن واکنش‌گرا برای نمایش اطلاعات آب‌وهوا با استفاده از OpenWeather API. این پروژه با React و TypeScript توسعه داده شده و با تمرکز بر تجربه کاربری طراحی شده است. کاربر می‌تواند با وارد کردن نام شهر، اطلاعاتی مانند دمای فعلی، وضعیت آسمان، رطوبت، و سرعت باد را مشاهده کند. از آیکون‌های متحرک برای نمایش وضعیت آب‌وهوا (مانند بارانی، آفتابی و ابری) استفاده شده که تجربه‌ی بصری جذابی فراهم می‌کند.",
        demoUrl: "https://weather-api-v1-eta.vercel.app/",
        githubUrl: "https://github.com/omidsdgi/weather-api",
    },

];
