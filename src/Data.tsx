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
            fa: 'تسلط کامل بر Next.js با استفاده از SSR، SSG، ISR و API Routes برای ساخت برنامه‌های فول‌استک با کارایی بالا.',
        },
    },
    {
        id: nanoid(),
        title: 'Vite',
        icon: <SiVite className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Proficient in Vite for rapid React development with lightning-fast builds and optimized HMR.',
            fa: 'تسلط بر Vite برای توسعه سریع React با بیلدهای فوق‌العاده سریع و بهینه‌سازی HMR.',
        },
    },
    {
        id: nanoid(),
        title: 'Rendering & Architecture (CSR / SSR / SSG / ISR)',
        icon: <SiNextdotjs className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Deep understanding of rendering strategies (CSR, SSR, SSG, ISR) and architectural design in modern React apps.',
            fa: 'درک عمیق از استراتژی‌های رندر (CSR، SSR، SSG، ISR) و طراحی معماری در برنامه‌های مدرن React.',
        },
    },
    {
        id: nanoid(),
        title: 'Supabase & Strapi (Headless CMS)',
        icon: <SiSupabase className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Proficient with Supabase and Strapi for backend integration, authentication, and data management.',
            fa: 'تسلط بر Supabase و Strapi برای اتصال بک‌اند، احراز هویت و مدیریت داده‌ها.',
        },
    },
    {
        id: nanoid(),
        title: 'Vercel Deployment',
        icon: <SiVercel className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Experienced in deploying and optimizing applications on Vercel with CI/CD workflows.',
            fa: 'تجربه در استقرار و بهینه‌سازی برنامه‌ها در Vercel همراه با گردش‌کار CI/CD.',
        },
    },

    // ⚙️ --- React Ecosystem & State Management ---
    {
        id: nanoid(),
        title: 'React',
        icon: <FaReact className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Advanced React developer, building modular, performant UIs with Hooks, Context API, and React Router.',
            fa: 'توسعه‌دهنده حرفه‌ای React در ساخت رابط‌های کاربری ماژولار و بهینه با Hooks، Context API و React Router.',
        },
    },
    {
        id: nanoid(),
        title: 'Redux & Redux Toolkit',
        icon: <SiRedux className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Skilled in Redux Toolkit for predictable, scalable state management in complex React apps.',
            fa: 'مهارت در Redux Toolkit برای مدیریت وضعیت قابل پیش‌بینی و مقیاس‌پذیر در برنامه‌های React.',
        },
    },
    {
        id: nanoid(),
        title: 'TanStack Query & Axios',
        icon: <SiAxios className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Efficiently managing server state and API communication using TanStack Query and Axios.',
            fa: 'مدیریت کارآمد وضعیت سرور و ارتباط با API با استفاده از TanStack Query و Axios.',
        },
    },
    {
        id: nanoid(),
        title: 'React Router',
        icon: <SiReactrouter className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Experienced in React Router for implementing client-side routing, nested routes, and protected paths in SPA projects.',
            fa: 'تجربه در React Router برای پیاده‌سازی مسیر‌یابی سمت کاربر، مسیرهای تو در تو و مسیرهای محافظت‌شده در پروژه‌های SPA.',
        },
    },
    {
        id: nanoid(),
        title: 'React Hook Form & Context API',
        icon: <FaReact className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Proficient in building optimized forms and shared state management with React Hook Form and Context API.',
            fa: 'تسلط بر ساخت فرم‌های بهینه و مدیریت وضعیت اشتراکی با React Hook Form و Context API.',
        },
    },

    // 🎨 --- Styling & UI/UX Design ---
    {
        id: nanoid(),
        title: 'TailwindCSS',
        icon: <SiTailwindcss className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Creating modern, responsive, and clean UIs rapidly using TailwindCSS utility classes.',
            fa: 'ایجاد رابط‌های کاربری مدرن، واکنش‌گرا و تمیز با استفاده از کلاس‌های ابزاری TailwindCSS.',
        },
    },
    {
        id: nanoid(),
        title: 'styled-components & CSS Modules',
        icon: <SiSass className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Applying component-scoped styling through styled-components and CSS Modules for maintainability.',
            fa: 'به‌کارگیری استایل‌های مقیاس‌پذیر با styled-components و CSS Modules برای نگهداری آسان‌تر کد.',
        },
    },
    {
        id: nanoid(),
        title: 'Bootstrap & Sass / SCSS',
        icon: <SiBootstrap className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Experienced in Bootstrap and SCSS for structured, responsive UI development.',
            fa: 'تجربه در Bootstrap و SCSS برای توسعه رابط کاربری ساختاریافته و واکنش‌گرا.',
        },
    },
    {
        id: nanoid(),
        title: 'Responsive Design & Figma',
        icon: <FaFigma className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Applying responsive design principles and using Figma for design systems and prototypes.',
            fa: 'به‌کارگیری اصول طراحی واکنش‌گرا و استفاده از Figma برای سیستم‌های طراحی و پروتوتایپ.',
        },
    },

    // 💻 --- Core Web Technologies ---
    {
        id: nanoid(),
        title: 'TypeScript',
        icon: <SiTypescript className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Writing clean, type-safe code in large-scale applications using TypeScript.',
            fa: 'نوشتن کد تمیز و ایمن از نظر نوع در پروژه‌های بزرگ با TypeScript.',
        },
    },
    {
        id: nanoid(),
        title: 'JavaScript (ES6+)',
        icon: <FaJs className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Strong command of JavaScript (ES6+) features for building interactive, dynamic web experiences.',
            fa: 'تسلط بالا بر JavaScript (ES6+) برای ایجاد تجربه‌های وب پویا و تعاملی.',
        },
    },
    {
        id: nanoid(),
        title: 'HTML5 & CSS3',
        icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Solid foundation in HTML5 and CSS3 for building semantic, accessible, and responsive layouts.',
            fa: 'پایه قوی در HTML5 و CSS3 برای ساخت صفحات معنایی، دسترس‌پذیر و واکنش‌گرا.',
        },
    },
    {
        id: nanoid(),
        title: 'jQuery',
        icon: <SiJquery  className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Experienced with jQuery for DOM manipulation and legacy project maintenance.',
            fa: 'تجربه در jQuery برای دستکاری DOM و نگهداری پروژه‌های قدیمی.',
        },
    },

    // 🧰 --- Tools & Workflow ---
    {
        id: nanoid(),
        title: 'Git / GitHub',
        icon: <FaGitAlt className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Proficient in Git version control and GitHub workflows for collaboration and project management.',
            fa: 'تسلط بر Git و گردش‌کار GitHub برای همکاری و مدیریت پروژه‌ها.',
        },
    },
    {
        id: nanoid(),
        title: 'VSCode & WebStorm',
        icon: <SiWebstorm className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Efficient workflow using VSCode and WebStorm for debugging and code productivity.',
            fa: 'جریان کاری بهینه با استفاده از VSCode و WebStorm برای دیباگ و افزایش بهره‌وری کد.',
        },
    },
    {
        id: nanoid(),
        title: 'Postman',
        icon: <SiPostman className='h-16 w-16 text-emerald-500' />,
        text: {
            en: 'Testing APIs and validating endpoints efficiently with Postman.',
            fa: 'تست APIها و بررسی endpointها به‌صورت سریع و کارآمد با Postman.',
        },
    },
];

