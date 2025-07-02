import React from "react";

export default function Footer() {
    return (
        <footer className="bg-background dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8 mt-12">
            <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm">&copy; {new Date().getFullYear()} Omid. All rights reserved.</p>

                <div className="flex space-x-6">
                    <a
                        href="https://github.com/omidsdgi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
                        aria-label="GitHub"
                    >
                        GitHub
                    </a>

                    <a
                        href="mailto:omid69sdgi@gmail.com"
                        className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
                        aria-label="Email"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}
