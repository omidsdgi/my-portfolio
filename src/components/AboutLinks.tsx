
import Image from "next/image";
import {FC, useState} from "react";
import SectionTitle from "@/components/SectionTitle";

export const AboutLinks: FC = () => {
    const [lang, setLang] = useState<'fa' | 'en'>('en');
    return (

        <section id="about" className="bg-white py-20 mb-32">
            <div
                className="align-element grid md:grid-cols-2 items-start gap-12">
                    <div className="w-full">
                        <Image
                            src="/image/shopping.png"
                            alt="Screenshot of Shopping Project"
                            width={600}
                            height={400}
                            priority
                            className="rounded-lg object-cover w-full h-auto  "
                        />
                    </div>
                <article className="flex flex-col justify-center">
                    <SectionTitle text='code and coffe'/>
                    {lang === 'fa' ? (
                        <div dir="rtl" className="text-justify font-tahoma text-xl leading-loose space-y-4 mt-8">
                            <p className="text-slate-600 "> به عنوان یک توسعه‌ دهنده فرانت‌اند
                                با انگیزه‌، تجربه عملی در ساخت
                                وب‌اپلیکیشن‌های مقیاس‌پذیر
                                با استفاده از<strong>React</strong> و <strong>Next.js</strong> را دارم. مسیر
                                یادگیری
                                من با
                                دوره‌های آنلاین فرانت‌اند در سایت Udemy آغاز شد و سپس با شرکت در بوت‌کمپ Navax
                                college ادامه
                                یافت، تا جایی که موفق به پیاده‌سازی ۱۵ پروژه عملی از جمله فروشگاه آنلاین کامل و
                                سیستم آزمون‌سازی با طراحی شخصی ۳۰۰+ سوال تخصصی React که منعکس‌کننده درک عمیق از
                                مفاهیم پیچیده و کاربردی این تکنولوژی است، شدم</p>

                            <p className="text-slate-600 "> تخصص من در کار با REST APIها،
                                استفاده از React Hooks، و درک دقیق
                                از <strong>رندر سمت کلاینت(CSR)</strong> و <strong>رندر سمت سرور
                                    (SSR)</strong> است.
                                همچنین علاقه‌مند به یادگیری فناوری‌های نو هستم و آن‌ها را در پروژه‌های واقعی به
                                کار
                                می‌گیرم. تمرکز اصلی من بر نوشتن کد تمیز، قابل استفاده مجدد و قابل نگهداری است که
                                منطبق با طراحی UI/UX ارائه‌شده باشد.
                            </p>
                            <p className="text-slate-600 ">
                                علاوه بر حوزه فرانت اند، در کارگاه‌ها و دوره‌های پیشرفته‌ای مانند "کارگاه هوش
                                مصنوعی
                                برای توسعه‌دهندگان" شرکت کرده‌ام که تمرکز آن بر استفاده عملی از ابزارهای AI در
                                فرآیند توسعه بود. همچنین 250 ساعت آموزش پیشرفته CSS و Sass وJavaScript و React
                                مربوط به دوره های Udemy را
                                گذرانده‌ام که باعث تقویت توانایی من در طراحی چیدمان‌های مدرن و سیستم‌های طراحی
                                شده
                                است. در زمینه زبان انگلیسی نیز دارای سطح پیشرفته هستم و چهار سال آموزش مکالمه و
                                ارتباطات فنی را در کانون زبان ایران گذرانده‌ام.
                            </p>
                            <p className="text-slate-600 ">
                                در مجموع، امیدوارم بتوانم ترکیبی از مهارت فنی قوی، تجربه پروژه‌های واقعی،
                                توانایی
                                ارتباطی بالا و اشتیاق دائمی به یادگیری را به هر تیم و پروژه‌ای که به آن
                                می‌پیوندم،
                                ارائه ‌دهم.
                            </p>
                        </div>) : (
                        <div className="font-lato text-lg text-justify leading-relaxed space-y-4 mt-8">
                            <p className="text-slate-600">
                                I'm a motivated front-end developer with hands-on experience in building
                                scalable
                                web applications
                                using <strong>React</strong> and <strong>Next.js</strong>. My journey began with
                                self-study through
                                several front-end development courses on Udemy, followed by an intensive 8-month
                                bootcamp at Navax
                                College, where I Built 15 comprehensive projects including an e-commerce
                                platform and quiz application featuring 300+ self-authored React questions,
                                reflecting profound understanding of complex framework principles and best
                                practices
                            </p>
                            <p className="text-slate-600">
                                I specialize in working with REST APIs, React Hooks, and understand the nuances
                                of
                                both <strong>Client-Side
                                Rendering (CSR)</strong> and <strong>Server-Side Rendering (SSR)</strong>. My
                                focus
                                is on writing
                                clean, reusable, and maintainable code that aligns closely with provided UI/UX
                                designs. I also enjoy
                                exploring new technologies and actively incorporate them into real-world
                                projects.
                            </p>
                            <p className="text-slate-600">
                                In addition to development, I’ve completed workshops and advanced courses such
                                as
                                the <em>AI
                                Workshop for Developers</em>, focusing on practical use of AI tools in
                                development,
                                and
                                the <em>Advanced CSS & Sass & JavaScript & React</em> course, enhancing my
                                layout and design system
                                capabilities.
                                I'm also fluent in English, having completed four years of advanced conversation
                                and
                                technical
                                communication training at the Iran Language Institute.
                            </p>
                            <p className="text-slate-600">
                                Overall, I bring a solid combination of technical proficiency, real-world
                                project
                                experience, strong
                                communication skills, and a passion for learning to every team and project I
                                join.
                            </p>
                        </div>)}
                </article>
            </div>
        </section>
    );
};

export default AboutLinks;
