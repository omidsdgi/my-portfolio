
import Image from "next/image";
import {FC, useState} from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";

export const About: FC = () => {
    const [lang, setLang] = useState<'fa' | 'en'>('en');
    return (
        <>

            <section
                id="about"
                className="mx-auto grid items-center bg-[#fdf2e9] max-w-6xl gap-8 px-4 py-16 lg:grid-cols-2 lg:gap-12
                  text-gray-900 dark:bg-gray-900 dark:text-gray-100
                 transition-colors">
                <div
                    className="relative max-h-[600px] overflow-y-auto rounded-lg shadow-inner ring-1 ring-black/10 dark:ring-white/10">
                    <Image
                        src="/image/shopping.png"
                        alt="Screenshot of Shopping Project"
                        width={640}
                        height={1600}
                        priority
                        className="w-full h-auto object-top rounded-lg"
                    />
                </div>
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between mb-4">
                            {/* English Button */}
                            <button onClick={() => setLang('en')} className="px-2">
                                <h2
                                    className={`text-3xl font-semibold px-4 py-2 rounded transition-all border-[8px] flex items-center gap-2 ${
                                        lang === "en" ? "border-[#cf711f]" : "border-transparent"
                                    }`}
                                >
                                    About&nbsp;Me
                                    <ChevronRight size={24}/>
                                </h2>
                            </button>

                            {/* Persian Button */}
                            <button onClick={() => setLang('fa')} className="px-2">
                                <h2
                                    className={`text-3xl font-semibold px-4 py-2 rounded transition-all border-[8px] flex items-center gap-2 ${
                                        lang === "fa" ? "border-[#cf711f]" : "border-transparent"
                                    }`}
                                >
                                    <ChevronLeft size={24}/>
                                    دربارۀ من
                                </h2>
                            </button>
                        </div>
                        {lang === 'fa' ? (
                            <div dir="rtl" className="text-justify font-tahoma text-x leading-loose">
                                <p className="py-2"> به عنوان یک توسعه‌ دهنده فرانت‌اند با انگیزه‌، تجربه عملی در ساخت
                                    وب‌اپلیکیشن‌های مقیاس‌پذیر
                                    با استفاده از<strong>React</strong> و <strong>Next.js</strong> را دارم. مسیر یادگیری
                                    من با
                                    دوره‌های آنلاین فرانت‌اند در سایت Udemy آغاز شد و سپس با شرکت در بوت‌کمپ Navax
                                    college ادامه
                                    یافت، تا جایی که موفق به توسعه ۸ مینی‌پروژه و یک فروشگاه اینترنتی کامل شدم.</p>

                                <p className="py-2"> تخصص من در کار با REST APIها، استفاده از React Hooks، و درک دقیق
                                    از <strong>رندر سمت کلاینت(CSR)</strong> و <strong>رندر سمت سرور (SSR)</strong> است.
                                    همچنین علاقه‌مند به یادگیری فناوری‌های نو هستم و آن‌ها را در پروژه‌های واقعی به کار
                                    می‌گیرم. تمرکز اصلی من بر نوشتن کد تمیز، قابل استفاده مجدد و قابل نگهداری است که
                                    منطبق با طراحی UI/UX ارائه‌شده باشد.
                                </p>
                                <p className="py-2">
                                    علاوه بر حوزه فرانت اند، در کارگاه‌ها و دوره‌های پیشرفته‌ای مانند "کارگاه هوش مصنوعی
                                    برای توسعه‌دهندگان" شرکت کرده‌ام که تمرکز آن بر استفاده عملی از ابزارهای AI در
                                    فرآیند توسعه بود. همچنین آموزش پیشرفته CSS و Sass مربوط به دوره های Udemy را
                                    گذرانده‌ام که باعث تقویت توانایی من در طراحی چیدمان‌های مدرن و سیستم‌های طراحی شده
                                    است. در زمینه زبان انگلیسی نیز دارای سطح پیشرفته هستم و چهار سال آموزش مکالمه و
                                    ارتباطات فنی را در کانون زبان ایران گذرانده‌ام.
                                </p>
                                <p className="py-2">
                                    در مجموع، امیدوارم بتوانم ترکیبی از مهارت فنی قوی، تجربه پروژه‌های واقعی، توانایی
                                    ارتباطی بالا و اشتیاق دائمی به یادگیری را به هر تیم و پروژه‌ای که به آن می‌پیوندم،
                                    ارائه ‌دهم.
                                </p>
                            </div>) : (
                            <div className="font-lato text-lg text-justify leading-relaxed">
                                <p className="py-2">
                                    I'm a motivated front-end developer with hands-on experience in building scalable
                                    web applications
                                    using <strong>React</strong> and <strong>Next.js</strong>. My journey began with
                                    self-study through
                                    several front-end development courses on Udemy, followed by an intensive 8-month
                                    bootcamp at Navax
                                    College, where I developed 8 mini-projects and a full-fledged e-commerce
                                    application.
                                </p>

                                <p className="py-2">
                                    I specialize in working with REST APIs, React Hooks, and understand the nuances of
                                    both <strong>Client-Side
                                    Rendering (CSR)</strong> and <strong>Server-Side Rendering (SSR)</strong>. My focus
                                    is on writing
                                    clean, reusable, and maintainable code that aligns closely with provided UI/UX
                                    designs. I also enjoy
                                    exploring new technologies and actively incorporate them into real-world projects.
                                </p>
                                <p className="py-2">
                                    In addition to development, I’ve completed workshops and advanced courses such as
                                    the <em>AI
                                    Workshop for Developers</em>, focusing on practical use of AI tools in development,
                                    and
                                    the <em>Advanced CSS & Sass</em> course, enhancing my layout and design system
                                    capabilities.
                                    I'm also fluent in English, having completed four years of advanced conversation and
                                    technical
                                    communication training at the Iran Language Institute.
                                </p>
                                <p className="py-2">
                                    Overall, I bring a solid combination of technical proficiency, real-world project
                                    experience, strong
                                    communication skills, and a passion for learning to every team and project I join.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
