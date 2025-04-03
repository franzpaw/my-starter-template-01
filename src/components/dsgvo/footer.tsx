"use client";

import Link from "next/link";
import { useState } from "react";
import CookieSettings from "./CookieSettings";

export default function Footer() {
  const [showCookieSettings, setShowCookieSettings] = useState(false);

  return (
    <footer className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
          <Link
            href="/datenschutzerklaerung"
            className="hover:text-gray-700 transition-colors"
          >
            Datenschutzerklärung
          </Link>
          <Link
            href="/impressum"
            className="hover:text-gray-700 transition-colors"
          >
            Impressum
          </Link>
          <Link
            href="/cookies"
            className="hover:text-gray-700 transition-colors"
          >
            Cookie-Richtlinie
          </Link>
          <button
            onClick={() => setShowCookieSettings(true)}
            className="hover:text-gray-700 transition-colors"
          >
            Cookie-Einstellungen
          </button>
          <span className="text-gray-400">|</span>
          <span>Franz Pawlus © {new Date().getFullYear()}</span>
        </div>
      </div>
      {showCookieSettings && <CookieSettings onClose={() => setShowCookieSettings(false)} />}
    </footer>
  );
}
