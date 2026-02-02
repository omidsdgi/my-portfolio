import Image from "next/image";
import { FC } from "react";
import SectionTitle from "@/components/SectionTitle";
import {useAppContext} from "@/contexts/GlobalContext";

export const AboutSection: FC = () => {
    const { lang } = useAppContext();

    return (
        <section id="about" className="py-20 bg-white dark:bg-slate-900">
            <div className="align-element">
                <SectionTitle text="code and coffee" showLangButton={true} />

                <div className="grid md:grid-cols-2 items-start gap-12 mt-12">
                    {/* Image Container with Scroll */}
                    <div className="w-full h-full md:sticky md:top-24">
                        <div className="relative overflow-y-auto rounded-2xl shadow-xl
                ring-1 ring-slate-200 dark:ring-slate-700 h-[800px]">
                            <Image
                                src="/image/shopping.png"
                                alt="Shopping Project Screenshot"
                                width={800}
                                height={1200}
                                priority
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <article className="flex flex-col justify-start">
                        {lang === 'fa' ? (
                            <div
                                dir="rtl"
                                className="rtl-text space-y-6 text-justify font-vazir text-lg leading-loose"
                            >
                                <p className="text-slate-700 dark:text-slate-300">
                                    به عنوان یک توسعه‌ دهنده فرانت‌اند با انگیزه، تجربه عملی در ساخت وب‌اپلیکیشن‌های مقیاس‌پذیر با استفاده از <strong className="text-emerald-600 dark:text-emerald-400">React</strong> و <strong className="text-emerald-600 dark:text-emerald-400">Next.js</strong> را دارم. مسیر یادگیری من با دوره‌های آنلاین فرانت‌اند در سایت Udemy آغاز شد و سپس با شرکت در بوت‌کمپ Navax College ادامه یافت، تا جایی که موفق به پیاده‌سازی ۱۵ پروژه عملی از جمله فروشگاه آنلاین کامل و سیستم آزمون‌سازی با طراحی شخصی ۳۰۰+ سوال تخصصی React که منعکس‌کننده درک عمیق از مفاهیم پیچیده و کاربردی این تکنولوژی است، شدم.
                                </p>

                                <p className="text-slate-700 dark:text-slate-300">
                                    تخصص من در کار با REST APIها، استفاده از React Hooks، و درک دقیق از <strong className="text-emerald-600 dark:text-emerald-400">رندر سمت کلاینت (CSR)</strong> و <strong className="text-emerald-600 dark:text-emerald-400">رندر سمت سرور (SSR)</strong> است. همچنین علاقه‌مند به یادگیری فناوری‌های نو هستم و آن‌ها را در پروژه‌های واقعی به کار می‌گیرم. تمرکز اصلی من بر نوشتن کد تمیز، قابل استفاده مجدد و قابل نگهداری است که منطبق با طراحی UI/UX ارائه‌شده باشد.
                                </p>

                                <p className="text-slate-700 dark:text-slate-300">
                                    علاوه بر حوزه فرانت اند، در کارگاه‌ها و دوره‌های پیشرفته‌ای مانند "کارگاه هوش مصنوعی برای توسعه‌دهندگان" شرکت کرده‌ام که تمرکز آن بر استفاده عملی از ابزارهای AI در فرآیند توسعه بود. همچنین ۲۵۰ ساعت آموزش پیشرفته CSS و Sass و JavaScript و React مربوط به دوره های Udemy را گذرانده‌ام که باعث تقویت توانایی من در طراحی چیدمان‌های مدرن و سیستم‌های طراحی شده است. در زمینه زبان انگلیسی نیز دارای سطح پیشرفته هستم و چهار سال آموزش مکالمه و ارتباطات فنی را در کانون زبان ایران گذرانده‌ام.
                                </p>

                                <p className="text-slate-700 dark:text-slate-300">
                                    در مجموع، امیدوارم بتوانم ترکیبی از مهارت فنی قوی، تجربه پروژه‌های واقعی، توانایی ارتباطی بالا و اشتیاق دائمی به یادگیری را به هر تیم و پروژه‌ای که به آن می‌پیوندم، ارائه دهم.
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-6 text-justify font-sans text-lg leading-relaxed">
                                <p className="text-slate-700 dark:text-slate-300">
                                    I'm a motivated front-end developer with hands-on experience in building scalable web applications using <strong className="text-emerald-600 dark:text-emerald-400">React</strong> and <strong className="text-emerald-600 dark:text-emerald-400">Next.js</strong>. My journey began with self-study through several front-end development courses on Udemy, followed by an intensive 8-month bootcamp at Navax College, where I Built 15 comprehensive projects including an e-commerce platform and quiz application featuring 300+ self-authored React questions, reflecting profound understanding of complex framework principles and best practices.
                                </p>

                                <p className="text-slate-700 dark:text-slate-300">
                                    I specialize in working with REST APIs, React Hooks, and understand the nuances of both <strong className="text-emerald-600 dark:text-emerald-400">Client-Side Rendering (CSR)</strong> and <strong className="text-emerald-600 dark:text-emerald-400">Server-Side Rendering (SSR)</strong>. My focus is on writing clean, reusable, and maintainable code that aligns closely with provided UI/UX designs. I also enjoy exploring new technologies and actively incorporate them into real-world projects.
                                </p>

                                <p className="text-slate-700 dark:text-slate-300">
                                    In addition to development, I've completed workshops and advanced courses such as the <em className="text-emerald-600 dark:text-emerald-400">AI Workshop for Developers</em>, focusing on practical use of AI tools in development, and the <em className="text-emerald-600 dark:text-emerald-400">Advanced CSS & Sass & JavaScript & React</em> course, enhancing my layout and design system capabilities. I'm also fluent in English, having completed four years of advanced conversation and technical communication training at the Iran Language Institute.
                                </p>

                                <p className="text-slate-700 dark:text-slate-300">
                                    Overall, I bring a solid combination of technical proficiency, real-world project experience, strong communication skills, and a passion for learning to every team and project I join.
                                </p>
                            </div>
                        )}
                    </article>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
