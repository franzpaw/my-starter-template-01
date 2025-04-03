export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Cookie-Richtlinie</h1>
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Was sind Cookies?</h2>
        <p className="mb-4">
          Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Gerät gespeichert werden.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Wie wir Cookies verwenden</h2>
        <p className="mb-4">
          Diese Website verwendet Cookies nur für essenzielle Funktionen und optional für erweiterte Funktionen.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Ihre Einwilligung</h2>
        <p className="mb-4">
          Sie können Ihre Cookie-Einstellungen jederzeit in den Cookie-Einstellungen anpassen.
        </p>
      </div>
    </div>
  );
}
