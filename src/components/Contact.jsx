import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from "../AppContext";

const Contact = () => {
    const { darkTheme } = useContext(AppContext);

    const [textColor, setTextColor] = useState('');
    const [linkColor, setLinkColor] = useState('');

    useEffect(() => {
        setTextColor(darkTheme ? "text-white" : "text-gray-900");
        setLinkColor(darkTheme ? "text-blue-200" : "text-blue-900");
    }, [darkTheme]);

    return (
        <section className={"min-h-[90vh] flex flex-col items-center justify-center px-6 py-12 " + textColor}>
            <div className="rounded-lg shadow-lg p-8 max-w-2xl w-full">
                <h2 className="text-4xl font-bold mb-4 text-center">Contact Me</h2>
                <p className="text-lg text-center max-w-xl mt-4 mb-8">
                    Feel free to reach out to me for collaborations, internships, or just to chat about tech!
                </p>
                <div className="mt-6 space-y-4 text-center">
                    <p>Email: <a href="mailto:anmolkhurana490@gmail.com" target="_blank" className={"hover:underline " + linkColor}>anmolkhurana490@gmail.com</a></p>

                    <p>LinkedIn: <a href="https://www.linkedin.com/in/anmol-khurana-3b274425b" target="_blank" className={"hover:underline " + linkColor}>https://www.linkedin.com/in/anmol-khurana-3b274425b</a></p>

                    <p>GitHub: <a href="https://github.com/anmolkhurana490" target="_blank" className={"hover:underline " + linkColor}>https://github.com/anmolkhurana490</a></p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
