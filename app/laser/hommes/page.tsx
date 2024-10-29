// LaserHommes.js
"use client";

import React from "react";

export default function page() {
  const tarifsHommes = [
    { zone: "Nuque", prix: "89€" },
    { zone: "Barbe", prix: "99€" },
    { zone: "Aisselles", prix: "99€" },
    { zone: "Torse", prix: "189€" },
    { zone: "Dos", prix: "199€" },
    { zone: "Épaules", prix: "129€" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* En-tête */}
      <div className="bg-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4">
            Épilation Laser Hommes
          </h1>
          <p className="text-xl text-center text-teal-100">
            Solutions d&apos;épilation permanente pour hommes
          </p>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="space-y-4">
            {tarifsHommes.map((item, index) => (
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

        {/* Avantages */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Résultats Durables
            </h3>
            <p className="text-gray-600">
              Une solution permanente pour réduire significativement la pilosité
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Confort Optimal
            </h3>
            <p className="text-gray-600">
              Traitement rapide et confortable avec notre technologie de pointe
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Suivi Personnalisé
            </h3>
            <p className="text-gray-600">
              Un accompagnement sur mesure tout au long de votre traitement
            </p>
          </div>
        </div>

        {/* Informations importantes */}
        <div className="mt-12 bg-gray-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Informations importantes
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              • Une consultation préalable est obligatoire pour déterminer
              l&apos;éligibilité au traitement
            </li>
            <li>• Prévoir 6 à 8 séances espacées de 6 à 8 semaines</li>
            <li>
              • Éviter l&apos;exposition solaire avant et après le traitement
            </li>
            <li>• Les tarifs peuvent varier selon la densité pilaire</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-teal-600 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-semibold mb-4">
            Prêt à commencer votre traitement ?
          </h3>
          <p className="mb-6 text-teal-100">
            Prenez rendez-vous pour une consultation gratuite
          </p>
          <button className="bg-white text-teal-600 px-8 py-3 rounded-lg hover:bg-teal-50 transition">
            Réserver maintenant
          </button>
        </div>
      </div>
    </div>
  );
}
