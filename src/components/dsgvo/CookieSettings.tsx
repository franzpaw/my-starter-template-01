"use client";
import { useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "@/lib/storage-helper";

interface CookieSettingsProps {
  onClose: () => void;
}

export default function CookieSettings({ onClose }: CookieSettingsProps) {
  const [consent, setConsent] = useState<boolean>(true);

  useEffect(() => {
    const stored = getLocalStorage("cookie_consent", null);
    if (stored !== null) {
      setConsent(stored);
    }
  }, []);

  const handleSave = () => {
    setLocalStorage("cookie_consent", consent);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-screen sm:w-auto max-w-md animate-in fade-in zoom-in duration-300">
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-8 rounded-xl shadow-xl border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-2xl">🎯</div>
            <h2 className="text-xl font-semibold text-slate-900">Cookie-Einstellungen</h2>
          </div>

          <div className="mb-6">
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Bitte wählen Sie aus, ob Sie alle Cookies zulassen möchten oder nur die technisch notwendigen.
            </p>
            <div className="space-y-4">
              <label className="flex items-start p-3 rounded-lg hover:bg-white/60 transition-colors cursor-pointer group">
                <div className="relative flex items-center h-6">
                  <input
                    type="radio"
                    name="cookieConsent"
                    value="true"
                    checked={consent === true}
                    onChange={() => setConsent(true)}
                    className="peer sr-only"
                  />
                  <div className="w-4 h-4 border-2 border-blue-300 rounded-full peer-checked:border-blue-500 peer-checked:border-8 transition-all"></div>
                </div>
                <div className="ml-3">
                  <span className="font-medium text-slate-900 flex items-center gap-2">
                    Alle Cookies akzeptieren
                    <span className="text-sm group-hover:-rotate-12 transition-transform duration-200">✨</span>
                  </span>
                  <p className="text-xs text-slate-500 mt-1">Ermöglicht erweiterte Funktionen</p>
                </div>
              </label>

              <label className="flex items-start p-3 rounded-lg hover:bg-white/60 transition-colors cursor-pointer group">
                <div className="relative flex items-center h-6">
                  <input
                    type="radio"
                    name="cookieConsent"
                    value="false"
                    checked={consent === false}
                    onChange={() => setConsent(false)}
                    className="peer sr-only"
                  />
                  <div className="w-4 h-4 border-2 border-blue-300 rounded-full peer-checked:border-blue-500 peer-checked:border-8 transition-all"></div>
                </div>
                <div className="ml-3">
                  <span className="font-medium text-slate-900 flex items-center gap-2">
                    Nur notwendige Cookies
                    <span className="text-sm group-hover:-rotate-12 transition-transform duration-200">🛡️</span>
                  </span>
                  <p className="text-xs text-slate-500 mt-1">Nur essenzielle Funktionen werden aktiviert</p>
                </div>
              </label>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Abbrechen
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Speichern
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
