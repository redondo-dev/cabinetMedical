// LaserFemmes.js
"use client";

import React from "react";

export default function page() {
  const tarifsFemmes = [
    { zone: "Lèvre supérieure", prix: "49€" },
    { zone: "Menton", prix: "59€" },
    { zone: "Aisselles", prix: "79€" },
    { zone: "Maillot simple", prix: "89€" },
    { zone: "Maillot brésilien", prix: "99€" },
    { zone: "Maillot intégral", prix: "129€" },
    { zone: "Demi-jambes", prix: "159€" },
    { zone: "Jambes complètes", prix: "249€" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* En-tête */}
      <div className="bg-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4">
            Épilation Laser Femmes
          </h1>
          <p className="text-xl text-center text-teal-100">
            Une peau douce et soyeuse durablement
          </p>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="space-y-4">
            {tarifsFemmes.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="text-gray-700">{item.zone}</span>
                <span className="font-semibold text-teal-600">{item.prix}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Forfaits */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Nos Forfaits Avantageux
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-teal-600">
                Forfait 3 zones
              </h4>
              <p className="text-gray-600 mb-4">
                Bénéficiez de -15% sur le total de vos séances
              </p>
              <p className="text-sm text-gray-500">
                * Applicable sur les zones de votre choix
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-teal-600">
                Forfait intégral
              </h4>
              <p className="text-gray-600 mb-4">
                Bénéficiez de -20% sur le total de vos séances
              </p>
              <p className="text-sm text-gray-500">
                * Pour 4 zones ou plus
              </p>
            </div>
          </div>
        </div>

        {/* Avantages */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Technologie Avancée
            </h3>
            <p className="text-gray-600">
              Équipement dernière génération pour des résultats optimaux
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Personnalisation
            </h3>
            <p className="text-gray-600">
              Traitement adapté à votre type de peau et de pilosité
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Expertise
            </h3>
            <p className="text-gray-600">
              Personnel qualifié et expérimenté pour votre sécurité
            </p>
          </div>
        </div>

        {/* Informations importantes */}
        <div className="mt-12 bg-gray-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Informations importantes
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Consultation préalable offerte et obligatoire</li>
            <li>• Programme personnalisé de 6 à 8 séances</li>
            <li>• Paiement en plusieurs fois possible</li>
            <li>• Respect strict du protocole de sécurité</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-teal-600 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-semibold mb-4">
            Envie d&apos;une peau douce et soyeuse ?
          </h3>
          <p className="mb-6 text-teal-100">
            Réservez votre consultation gratuite dès maintenant
          </p>
          <button className="bg-white text-teal-600 px-8 py-3 rounded-lg hover:bg-teal-50 transition">
            Réserver maintenant
          </button>
        </div>
      </div>
    </div>
  );
}