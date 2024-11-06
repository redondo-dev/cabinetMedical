// app/contact/page.tsx

import ContactForm from "../components/ContactForm/ContactFormClient"

export default function ContactPage() {
  return (
    <main className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Contactez-nous</h1>
          <p className="mt-4 text-lg text-gray-600">
            Remplissez le formulaire ci-dessous et nous vous répondrons dans les
            plus brefs délais.
          </p>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
