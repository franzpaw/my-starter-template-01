export default function ImpressumPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Impressum</h1>
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
        <p className="mb-4">
          [Vorname Nachname]<br />
          [Straße Nr.]<br />
          [PLZ Stadt]
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Kontakt</h2>
        <p className="mb-4">
          Telefon: [Ihre Telefonnummer]<br />
          E-Mail: [Ihre E-Mail]
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p className="mb-4">
          [Vorname Nachname]<br />
          [Straße Nr.]<br />
          [PLZ Stadt]
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Haftung für Inhalte</h2>
        <p className="mb-4">
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
        </p>
      </div>
    </div>
  );
}
