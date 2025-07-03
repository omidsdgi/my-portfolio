// components/Footer.tsx
import {
    Phone,
    Send,
    MessageCircle,
    Github,
    Mail,
} from 'lucide-react';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer id={"footer"} className="bg-background dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8 mt-12">
            <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm">&copy; {year} Omid. All rights reserved.</p>

                <div className="flex flex-wrap items-center gap-10">
                    {/* Phone */}
                    <p className="flex items-center hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors">
                        <Phone className="size-5 mr-2" aria-hidden="true" />
                        <span className="ltr:ml-2 rtl:mr-2">0911&nbsp;255&nbsp;8264</span>
                    </p>
                    {/* Telegram */}
                    <p className="flex items-center hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors">
                        <Send className="size-5 mr-2" aria-hidden="true" />
                        <span>Telegram <span className="ltr:ml-2 rtl:mr-2">0904&nbsp;614&nbsp;2853</span></span>
                    </p>

                    {/* GitHub */}
                    <a
                        href="https://github.com/omidsdgi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
                        aria-label="GitHub"
                    >
                        <Github className="size-5 mr-2" aria-hidden="true" />
                        <span>GitHub</span>
                    </a>

                    {/* Email */}
                    <a
                        href="https://mail.google.com/mail/?view=cm&to=omid69sdgi@gmail.com"
                        target="_blank"
                        className="flex items-center hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
                        aria-label="Send Email via Gmail"
                    >
                        <Mail className="size-5 mr-2" aria-hidden="true" />
                        <span>Email</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
