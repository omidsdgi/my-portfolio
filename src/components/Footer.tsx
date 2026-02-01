import { Phone, Send, GithubIcon, Mail } from 'lucide-react';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer
            id="contact"
            className="bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700"
        >
            <div className="align-element py-12">
                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Branding */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold font-display">
                            <span className="text-slate-900 dark:text-slate-50">Web</span>
                            <span className="text-emerald-600 dark:text-emerald-400">Dev</span>
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            Building modern web experiences with passion and precision.
                        </p>
                    </div>

                    {/* Contact Links */}
                    <div className="space-y-3">
                        <h4 className="font-bold text-slate-900 dark:text-slate-50 mb-4">Contact</h4>

                        <a
                            href="tel:+989112558264"
                            className="flex items-center gap-3 text-slate-600 dark:text-slate-400
                       hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group"
                        >
                            <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span className="text-sm">0911 255 8264</span>
                        </a>

                        <a
                            href="https://t.me/omidsdgi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-slate-600 dark:text-slate-400
                       hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group"
                        >
                            <Send className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span className="text-sm">Telegram</span>
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-3">
                        <h4 className="font-bold text-slate-900 dark:text-slate-50 mb-4">Social</h4>

                        <a
                            href="https://github.com/omidsdgi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-slate-600 dark:text-slate-400
                       hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group"
                        >
                            <GithubIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span className="text-sm">GitHub</span>
                        </a>

                        <a
                            href="mailto:omid69sdgi@gmail.com"
                            className="flex items-center gap-3 text-slate-600 dark:text-slate-400
                       hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group"
                        >
                            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span className="text-sm">Email</span>
                        </a>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-3">
                        <h4 className="font-bold text-slate-900 dark:text-slate-50 mb-4">Quick Links</h4>

                        <a
                            href="/#about"
                            className="block text-sm text-slate-600 dark:text-slate-400
                       hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="/#skillslist"
                            className="block text-sm text-slate-600 dark:text-slate-400
                       hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                        >
                            Skills
                        </a>
                        <a
                            href="/#projects"
                            className="block text-sm text-slate-600 dark:text-slate-400
                       hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                        >
                            Projects
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-200 dark:border-slate-700">
                    <p className="text-center text-sm text-slate-600 dark:text-slate-400">
                        &copy; {year} Omid Sadeghi. All rights reserved. Built with{' '}
                        <span className="text-emerald-600 dark:text-emerald-400">Next.js</span> &{' '}
                        <span className="text-emerald-600 dark:text-emerald-400">TypeScript</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
