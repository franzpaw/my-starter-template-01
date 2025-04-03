"use client";

import { useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "@/lib/storage-helper";
import Link from "next/link";

// CookieBanner component that displays a banner for cookie consent.
export default function CookieBanner() {
    const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Retrieve cookie consent status from local storage on component mount
    useEffect(() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", null);
        setCookieConsent(storedCookieConsent);
        setIsLoading(false);
    }, []);

    // Update local storage when cookieConsent changes
    useEffect(() => {
        if (cookieConsent !== null) {
            setLocalStorage("cookie_consent", cookieConsent);
        }
    }, [cookieConsent]);

    // Do not render the banner if loading or consent is already given
    if (isLoading || cookieConsent !== null) {
        return null;
    }

    return (
        <div className={`fixed bottom-10 left-0 right-0 mx-auto max-w-2xl z-30 px-4`}>
            <div className="relative">
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200 shadow-xl m-4 flex flex-col items-center gap-6 p-6 rounded-xl backdrop-blur-sm">
                    <div className="flex flex-col items-center gap-3">
                        <div className="text-2xl animate-bounce">🍪</div>
                        <h2 className="text-lg font-semibold text-slate-900">Cookie-Einstellungen</h2>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm text-slate-600 leading-relaxed max-w-xl text-center">
                            Diese Website verwendet Cookies 🔐
                            Wir nutzen Cookies, um das Nutzererlebnis zu verbessern. Mit einem Klick auf &quot;Alle akzeptieren&quot; stimmen Sie der Verwendung aller Cookies zu. Alternativ können Sie über &quot;Cookie-Einstellungen&quot; Ihre Präferenzen anpassen. Weitere Informationen finden Sie in unserer <Link href="/datenschutzerklaerung" className="text-blue-600 hover:text-blue-800 underline decoration-blue-600/30 hover:decoration-blue-800 transition-colors">Datenschutzerklärung</Link>.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                        <button 
                            className="group relative px-6 py-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:shadow-lg"
                            onClick={() => setCookieConsent(false)}
                        >
                            <span className="flex items-center justify-center gap-2">
                                <span className="group-hover:-rotate-12 transition-transform duration-200">🛡️</span>
                                Nur notwendige
                            </span>
                        </button>
                        <button 
                            className="group relative px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:shadow-lg"
                            onClick={() => setCookieConsent(true)}
                        >
                            <span className="flex items-center justify-center gap-2">
                                <span className="group-hover:-rotate-12 transition-transform duration-200">✨</span>
                                Alle akzeptieren
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}