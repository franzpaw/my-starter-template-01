'use client'
import Link from 'next/link'
import { SignedIn, SignedOut } from '@clerk/nextjs'

export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SignedIn>
        <Link 
          href="/dashboard"
          className="inline-block mb-6 text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          ← Zurück zur Startseite
        </Link>
      </SignedIn>
      <SignedOut>
        <Link 
          href="/"
          className="inline-block mb-6 text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          ← Zurück zur Startseite
        </Link>
      </SignedOut>
      <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten
          daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Verantwortlicher</h2>
        <p className="mb-4">
          [Vorname Nachname]<br />
          [Straße Nr.]<br />
          [PLZ Stadt]<br />
          E-Mail: [Ihre E-Mail]
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Erhebung und Verarbeitung von Daten</h2>
        <p className="mb-4">
          Beim Besuch dieser Website werden automatisch bestimmte technische Informationen erhoben:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>IP-Adresse</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>Name und URL der abgerufenen Datei</li>
          <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
          <li>Browser und Betriebssystem</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies</h2>
        <p className="mb-4">
          Unsere Website verwendet Cookies. Nähere Informationen zu den verwendeten Cookies finden Sie in
          unserer <a href="/cookies" className="text-blue-600 hover:text-blue-800">Cookie-Richtlinie</a>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Ihre Rechte</h2>
        <p className="mb-4">
          Sie haben jederzeit das Recht auf:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Auskunft über Ihre gespeicherten Daten</li>
          <li>Berichtigung unrichtiger Daten</li>
          <li>Löschung Ihrer Daten</li>
          <li>Einschränkung der Verarbeitung</li>
          <li>Datenübertragbarkeit</li>
          <li>Widerruf erteilter Einwilligungen</li>
        </ul>
      </div>
    </div>
  );
}
