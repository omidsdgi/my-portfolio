import { Phone, Send, GithubIcon, Mail } from 'lucide-react';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer
            id="contact"
            className="bg-base-200 border-t border-base-300 text-base-content"
        >
            <div className="align-element py-12">
                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Branding */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold font-display group transition-colors duration-300">
  <span className="text-base-content group-hover:text-primary transition-colors duration-300">
    Web
  </span>
                            <span className="text-amber-300">Dev</span>
                        </h3>
                        <p className="text-base-content/70 text-sm leading-relaxed">
                            Building modern web experiences with passion and precision.
                        </p>
                    </div>

                    {/* Contact Links */}
                    <div className="space-y-3">
                        <h4 className="font-bold text-base-content mb-4">Contact</h4>

                        <a
                            href="tel:+989112558264"
                            className="flex items-center gap-3 text-base-content/70 hover:text-primary transition-colors group"
                        >
                            <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span className="text-sm">0911 255 8264</span>
                        </a>

                        <a
                            href="https://t.me/omidsdgi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-base-content/70 hover:text-primary transition-colors group"
                        >
                            <Send className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span className="text-sm">Telegram</span>
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-3">
                        <h4 className="font-bold text-base-content mb-4">Social</h4>

                        <a
                            href="https://github.com/omidsdgi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-base-content/70 hover:text-primary transition-colors group"
                        >
                            <GithubIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span className="text-sm">GitHub</span>
                        </a>

                        <a
                            href="mailto:omid69sdgi@gmail.com"
                            className="flex items-center gap-3 text-base-content/70 hover:text-primary transition-colors group"
                        >
                            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span className="text-sm">Email</span>
                        </a>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-3">
                        <h4 className="font-bold text-base-content mb-4">Quick Links</h4>

                        <a
                            href="/#about"
                            className="block text-sm text-base-content/70 hover:text-primary transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="/#skillslist"
                            className="block text-sm text-base-content/70 hover:text-primary transition-colors"
                        >
                            Skills
                        </a>
                        <a
                            href="/#projects"
                            className="block text-sm text-base-content/70 hover:text-primary transition-colors"
                        >
                            Projects
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-base-300">
                    <p className="text-center text-smtext-base-content/70">
                        &copy; {year} Omid Sadeghi. All rights reserved. Built with{' '}
                        <span className="text-primary">Next.js</span> &{' '}
                        <span className="text-secondary">TypeScript</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
