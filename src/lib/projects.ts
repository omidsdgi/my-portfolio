export interface Project {
    title: string;
    description: string;
    demoUrl: string;
    githubUrl: string;
}

export const projects: Project[] = [
    {
        title: "React Weather App",
        description: "اپ نمایش آب‌وهوا با OpenWeather API و آیکون‌های متحرک.",
        demoUrl: "https://weather-api-v1-eta.vercel.app/",
        githubUrl: "https://github.com/omidsdgi/weather-api",
    },
    {
        title: "Portfolio Website",
        description: "سایت شخصی برای معرفی نمونه‌کارها و مهارت‌ها.",
        demoUrl: "https://omiddev.vercel.app",
        githubUrl: "https://github.com/omiddev/portfolio",
    },
];