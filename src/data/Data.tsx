import {FaReact,FaJs,FaGitAlt,FaHtml5,FaFigma,} from 'react-icons/fa';
import {SiNextdotjs,SiRedux,SiTailwindcss,SiTypescript,SiSupabase,SiBootstrap,SiSass,SiVercel ,SiJquery ,SiPostman,SiWebstorm,SiAxios,SiReactrouter, SiVite} from 'react-icons/si';

import {nanoid} from "nanoid";
import { ReactNode } from "react";

export interface Links {
    id:string;
    href:string;
    text:string;
}
export type Skill = {
    id: string;
    title: string;
    icon: ReactNode; // JSX.Element یا ReactNode برای آیکن
    text: {
        en: string;
        fa: string;
    };
};
export interface Project {
    id:string
    img: string
    title: string;
    description: {
        en: string;
        fa: string;
    }
    demoUrl: string;
    githubUrl: string;
}
export const links:Links[]=[
    {id: nanoid(), href:'#home', text:'home'},
    {id: nanoid(), href:'#about', text:'about'},
    {id: nanoid(), href:'#contact', text:'contact'},
    {id: nanoid(), href:'#skillslist', text:'skills'},
    {id: nanoid(), href:'#projects', text:'projects'},
]

export const skills = [
    // 🧠 --- Advanced / Full-stack Level ---
    {
        id: nanoid(),
        title: 'Next.js',
        icon: <SiNextdotjs className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Expert in Next.js, leveraging SSR, SSG, ISR, and API Routes to build high-performance full-stack applications.',
            fa: 'توسعه‌دهنده متخصص در Next.js با تسلط بر SSR، SSG، ISR و API Routes برای ساخت اپلیکیشن‌های فول‌استک با کارایی و سرعت بالا.',
        },
    },
    {
        id: nanoid(),
        title: 'Vite',
        icon: <SiVite className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Proficient in Vite for rapid React development with lightning-fast builds and optimized HMR.',
            fa: 'تسلط بالا بر Vite برای توسعه سریع پروژه‌های React با بیلدهای بسیار سریع و HMR بهینه‌شده برای افزایش سرعت و بهره‌وری.',
        },
    },
    {
        id: nanoid(),
        title: 'Rendering & Architecture (CSR / SSR / SSG / ISR)',
        icon: <SiNextdotjs className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Deep understanding of rendering strategies (CSR, SSR, SSG, ISR) and architectural design in modern React apps.',
            fa: 'درک عمیق از انواع استراتژی‌های رندر شامل CSR، SSR، SSG و ISR و طراحی معماری در برنامه‌های React مدرن برای بهینه‌سازی عملکرد.',
        },
    },
    {
        id: nanoid(),
        title: 'Supabase & Strapi (Headless CMS)',
        icon: <SiSupabase className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Proficient with Supabase and Strapi for backend integration, authentication, and data management.',
            fa: 'تسلط کامل بر Supabase و Strapi برای یکپارچه‌سازی بک‌اند، مدیریت داده‌ها و پیاده‌سازی سیستم‌های احراز هویت کارآمد.',
        },
    },
    {
        id: nanoid(),
        title: 'Vercel Deployment',
        icon: <SiVercel className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Experienced in deploying and optimizing applications on Vercel with CI/CD workflows.',
            fa: 'دارای تجربه در استقرار و بهینه‌سازی اپلیکیشن‌ها در Vercel همراه با پیاده‌سازی گردش‌کار CI/CD برای استقرار خودکار و مستمر.',
        },
    },

    // ⚙️ --- React Ecosystem & State Management ---
    {
        id: nanoid(),
        title: 'React',
        icon: <FaReact className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Advanced React developer, building modular, performant UIs with Hooks, Context API, and React Router.',
            fa: 'تسلط کامل بررReact با تمرکز بر ساخت رابط‌های کاربری ماژولار، سریع و قابل نگهداری با استفاده از Hooks، Context API و React Router.',
        },
    },
    {
        id: nanoid(),
        title: 'Redux & Redux Toolkit',
        icon: <SiRedux className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Skilled in Redux Toolkit for predictable, scalable state management in complex React apps.',
            fa: ' دارای مهارت بالا در Redux Toolkit برای مدیریت وضعیت قابل پیش‌بینی، پایدار و مقیاس‌پذیر در برنامه‌های پیچیده React.',
        },
    },
    {
        id: nanoid(),
        title: 'TanStack Query & Axios',
        icon: <SiAxios className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Efficiently managing server state and API communication using TanStack Query and Axios.',
            fa: 'مدیریت کارآمد وضعیت سرور و ارتباط با API با استفاده از TanStack Query و Axios برای بهینه‌سازی عملکرد و کاهش درخواست‌های غیرضروری',
        },
    },
    {
        id: nanoid(),
        title: 'React Router',
        icon: <SiReactrouter className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Experienced in React Router for implementing client-side routing, nested routes, and protected paths in SPA projects.',
            fa: 'دارای تجربه در React Router برای پیاده‌سازی مسیر‌یابی سمت کاربر، مسیرهای تو در تو و مسیرهای محافظت‌شده در پروژه‌های تک‌صفحه‌ای (SPA).',
        },
    },
    {
        id: nanoid(),
        title: 'React Hook Form & Context API',
        icon: <FaReact className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Proficient in building optimized forms and shared state management with React Hook Form and Context API.',
            fa: 'تسلط بر طراحی و ساخت فرم‌های بهینه همراه با مدیریت وضعیت اشتراکی با استفاده از React Hook Form و Context API.',
        },
    },

    // 🎨 --- Styling & UI/UX Design ---
    {
        id: nanoid(),
        title: 'TailwindCSS',
        icon: <SiTailwindcss className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Creating modern, responsive, and clean UIs rapidly using TailwindCSS utility classes.',
            fa: 'ساخت سریع رابط‌های کاربری مدرن، واکنش‌گرا و تمیز با بهره‌گیری از کلاس‌های ابزاری TailwindCSS.',
        },
    },
    {
        id: nanoid(),
        title: 'styled-components & CSS Modules',
        icon: <SiSass className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Applying component-scoped styling through styled-components and CSS Modules for maintainability.',
            fa: 'به‌کارگیری استایل‌های سطح کامپوننت با styled-components و CSS Modules برای افزایش نگهداری‌پذیری و مقیاس‌پذیری کد.',
        },
    },
    {
        id: nanoid(),
        title: 'Bootstrap & Sass / SCSS',
        icon: <SiBootstrap className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Experienced in Bootstrap and SCSS for structured, responsive UI development.',
            fa: 'تجربه در استفاده از Bootstrap و SCSS برای توسعه رابط‌های کاربری ساختاریافته، واکنش‌گرا و سازگار با طراحی مدرن.',
        },
    },
    {
        id: nanoid(),
        title: 'Responsive Design & Figma',
        icon: <FaFigma className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Applying responsive design principles and using Figma for design systems and prototypes.',
            fa: '\'به‌کارگیری اصول طراحی واکنش‌گرا و استفاده از ابزار Figma برای ایجاد سیستم‌های طراحی منسجم و پروتوتایپ‌های تعاملی.',
        },
    },

    // 💻 --- Core Web Technologies ---
    {
        id: nanoid(),
        title: 'TypeScript',
        icon: <SiTypescript className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Writing clean, type-safe code in large-scale applications using TypeScript.',
            fa: 'نوشتن کد تمیز، مقیاس‌پذیر و ایمن از نظر نوع در پروژه‌های بزرگ با استفاده از TypeScript.',
        },
    },
    {
        id: nanoid(),
        title: 'JavaScript (ES6+)',
        icon: <FaJs className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Strong command of JavaScript (ES6+) features for building interactive, dynamic web experiences.',
            fa: 'تسلط بالا بر ویژگی‌های JavaScript (ES6+) برای ایجاد تجربه‌های وب تعاملی، داینامیک و کارآمد.',
        },
    },
    {
        id: nanoid(),
        title: 'HTML5 & CSS3',
        icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Solid foundation in HTML5 and CSS3 for building semantic, accessible, and responsive layouts.',
            fa: 'تسلط قوی بر HTML5 و CSS3 برای ساخت چیدمان‌های معنایی، دسترس‌پذیر و واکنش‌گرا با رعایت اصول استاندارد.',
        },
    },
    {
        id: nanoid(),
        title: 'jQuery',
        icon: <SiJquery  className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Experienced with jQuery for DOM manipulation and legacy project maintenance.',
            fa: 'تجربه در کار با jQuery برای دستکاری DOM و نگهداری پروژه‌های قدیمی در محیط‌های توسعه مدرن.',
        },
    },

    // 🧰 --- Tools & Workflow ---
    {
        id: nanoid(),
        title: 'Git / GitHub',
        icon: <FaGitAlt className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Proficient in Git version control and GitHub workflows for collaboration and project management.',
            fa: 'تسلط کامل بر Git و گردش‌کار GitHub برای همکاری تیمی، مدیریت نسخه‌ها و توسعه ساخت‌یافته پروژه‌ها.',
        },
    },
    {
        id: nanoid(),
        title: 'VSCode & WebStorm',
        icon: <SiWebstorm className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Efficient workflow using VSCode and WebStorm for debugging and code productivity.',
            fa: 'افزایش بهره‌وری در کدنویسی و دیباگ از طریق گردش‌کار بهینه با استفاده از VSCode و WebStorm.',
        },
    },
    {
        id: nanoid(),
        title: 'Postman',
        icon: <SiPostman className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Testing APIs and validating endpoints efficiently with Postman.',
            fa: 'تست کارآمد API ها و بررسی endpoint ها با استفاده از Postman برای اطمینان از صحت و عملکرد درخواست‌ها.',
        },
    },
];

export const projects: Project[] = [
    {
        id: nanoid(),
        img: "https://github.com/user-attachments/assets/5f117766-41e1-4f31-bc99-c1f3c505094f",
        title: "The Wild Oasis",
        description: {
            fa: "یک داشبورد مدرن و واکنش‌گرا با React که داده‌های رزرو، فعالیت مهمانان و فروش را با نمودارها و اعلان‌های تعاملی نمایش می‌دهد.",
            en: "A modern responsive React dashboard displaying booking data, guest activities, and sales analytics via interactive charts and notifications."
        },
        demoUrl: "https://the-wild-oasis-sigma-livid.vercel.app",
        githubUrl: "https://github.com/omidsdgi/world-wise",
    },
    {
        id: nanoid(),
        img: "https://github.com/user-attachments/assets/73f1a73c-001f-4724-a028-6a4aa82d00f6",
        title: "The Wild Oasis Website",
        description: {
            fa: "وب‌سایتی با Next.js (App Router) و TypeScript، بهینه‌سازی شده برای SEO و عملکرد سریع با SSR و Static Generation.",
            en: "A Next.js (App Router) & TypeScript website optimized for SEO and fast performance using SSR and Static Generation."
        },
        demoUrl: "https://the-wild-oasis-website-six-zeta.vercel.app",
        githubUrl: "https://github.com/omidsdgi/the-wild-oasis-website",
    },
    {
        id: nanoid(),
        img: "https://github.com/user-attachments/assets/73f1a73c-001f-4724-a028-6a4aa82d00f6",
        title: "Main Project Shopping",
        description: {
            fa: "سایت فروشگاهی با Next.js و TypeScript که فیلتر دسته‌بندی، لیست محصولات و مدیریت سبد خرید با React Context را پشتیبانی می‌کند.",
            en: "A Next.js & TypeScript e-commerce platform featuring product listings, category filters, and cart management via React Context."
        },
        demoUrl: "https://main-project-shopping.vercel.app",
        githubUrl: "https://github.com/omidsdgi/main-project-shopping",
    },
    {
        id: nanoid(),
        img: "https://github.com/user-attachments/assets/380c25c6-7760-4c4a-9a55-9f8ab97af742",
        title: "React Quiz",
        description: {
            fa: "اپلیکیشن آزمون آنلاین واکنش‌گرا با React و TypeScript، استفاده از useReducer و بهینه‌سازی با useMemo و useCallback.",
            en: "A responsive online quiz app with React & TypeScript, using useReducer and optimized with useMemo/useCallback."
        },
        demoUrl: "https://react-quiz-fg73.vercel.app/",
        githubUrl: "https://github.com/omidsdgi/React-Quiz",
    },
    {
        id: nanoid(),
        img: "https://github.com/user-attachments/assets/56de1f46-a2d1-4c41-8a2e-c9d1f97ef07b",
        title: "Fast React Pizza",
        description: {
            fa: "وب‌اپلیکیشن سفارش آنلاین پیتزا با React و Vite، مدیریت سبد خرید با Redux Toolkit و طراحی واکنش‌گرا با Tailwind CSS.",
            en: "A modern pizza ordering SPA with React & Vite, cart management via Redux Toolkit, and responsive layout using Tailwind CSS."
        },
        demoUrl: "https://fast-react-pizzas-navy.vercel.app/",
        githubUrl: "https://github.com/omidsdgi/fast-react-pizza",
    },
    {
        id: nanoid(),
        img: "https://github.com/user-attachments/assets/a35c48d0-9838-4b00-8b22-055788cc431d",
        title: "React Weather App",
        description: {
            fa: "اپلیکیشن آب‌وهوا با React و TypeScript که اطلاعات را از OpenWeather API دریافت می‌کند و با آیکون‌های انیمیشنی نمایش می‌دهد.",
            en: "A React & TypeScript weather app fetching data from OpenWeather API, displaying animated weather icons."
        },
        demoUrl: "https://weather-api-ihbu.vercel.app",
        githubUrl: "https://github.com/omidsdgi/weather-api",
    },
    {
        id: nanoid(),
        img: "https://github.com/user-attachments/assets/56de1f46-a2d1-4c41-8a2e-c9d1f97ef07b",
        title: "usePopcorn",
        description: {
            fa: "اپلیکیشن تک‌صفحه‌ای برای جستجوی فیلم با OMDb API، با هوک‌های سفارشی و ذخیره‌سازی محلی لیست مشاهده‌شده‌ها.",
            en: "A SPA for searching movies via OMDb API, with custom hooks and local storage for watched lists."
        },
        demoUrl: "https://movie-watch-list-gull.vercel.app",
        githubUrl: "https://github.com/omidsdgi/movieWatchList",
    },
    {
        id: nanoid(),
        img: "https://github.com/user-attachments/assets/56de1f46-a2d1-4c41-8a2e-c9d1f97ef07b",
        title: "Natours Project",
        description: {
            fa: "وب‌سایت فرانت‌اند حرفه‌ای با Sass و CSS مدرن (Flexbox, Grid, Animations)، معماری 7-1 Sass و روش BEM.",
            en: "A professional front-end website built with Sass & modern CSS (Flexbox, Grid, Animations), using 7-1 Sass architecture and BEM methodology."
        },
        demoUrl: "https://natours-project-orpin.vercel.app/",
        githubUrl: "https://github.com/omidsdgi/Natours-project",
    },
    {
        id: nanoid(),
        img: "https://github.com/user-attachments/assets/56de1f46-a2d1-4c41-8a2e-c9d1f97ef07b",
        title: "Omnio Food",
        description: {
            fa: "وب‌سایت استاتیک سفارش غذا با HTML5 و CSS3، طراحی واکنش‌گرا با Flexbox و Grid و انیمیشن‌های CSS.",
            en: "A fully static food-ordering website built with HTML5 & CSS3, responsive layout using Flexbox and Grid, with CSS animations."
        },
        demoUrl: "https://omnio-food-project.vercel.app/",
        githubUrl: "https://github.com/omidsdgi/omnio-food",
    },
];


