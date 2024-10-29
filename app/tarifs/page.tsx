"use client";

import React, { useState } from "react";

export default function Tarifs() {
  const [activeTab, setActiveTab] = useState("laser");

  const categories = [
    { id: "laser", name: "Épilation Laser" },
    { id: "injection", name: "Injections" },
    { id: "peau", name: "Qualité de Peau" },
    { id: "hydrafacial", name: "Hydrafacial" },
  ];

  const tarifs = {
    laser: {
      femmes: [
        { zone: "Lèvre supérieure", prix: "49€" },
        { zone: "Menton", prix: "59€" },
        { zone: "Aisselles", prix: "79€" },
        { zone: "Maillot simple", prix: "89€" },
        { zone: "Maillot brésilien", prix: "99€" },
        { zone: "Maillot intégral", prix: "129€" },
        { zone: "Demi-jambes", prix: "159€" },
        { zone: "Jambes complètes", prix: "249€" },
      ],
      hommes: [
        { zone: "Nuque", prix: "89€" },
        { zone: "Barbe", prix: "99€" },
        { zone: "Aisselles", prix: "99€" },
        { zone: "Torse", prix: "189€" },
        { zone: "Dos", prix: "199€" },
        { zone: "Épaules", prix: "129€" },
      ],
    },
    injection: [
      { soin: "Acide hyaluronique lèvres", prix: "350€" },
      { soin: "Acide hyaluronique sillons", prix: "400€" },
    ],
    peau: [
      { soin: "Peeling superficiel", prix: "90€" },
      { soin: "Peeling médium", prix: "120€" },
      { soin: "Skinboosters", prix: "250€" },
      { soin: "Soin Hollywood", prix: "150€" },
    ],
    hydrafacial: [
      { soin: "Hydrafacial Basic", prix: "90€" },
      { soin: "Hydrafacial Premium", prix: "120€" },
      { soin: "Hydrafacial Deluxe", prix: "150€" },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* En-tête */}
      <div className="bg-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4">Nos Tarifs</h1>
          <p className="text-xl text-center text-teal-100">
            Des solutions adaptées à tous vos besoins
          </p>
        </div>
      </div>

      {/* Navigation des catégories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-lg transition-all ${
                activeTab === category.id
                  ? "bg-teal-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Contenu des tarifs */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {activeTab === "laser" && (
            <div className="grid md:grid-cols-2 gap-8">
              {/* Tarifs Femmes */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                  Femmes
                </h3>
                <div className="space-y-4">
                  {tarifs.laser.femmes.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
                    >
                      <span className="text-gray-700">{item.zone}</span>
                      <span className="font-semibold text-teal-600">
                        {item.prix}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tarifs Hommes */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                  Hommes
                </h3>
                <div className="space-y-4">
                  {tarifs.laser.hommes.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
                    >
                      <span className="text-gray-700">{item.zone}</span>
                      <span className="font-semibold text-teal-600">
                        {item.prix}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "injection" && (
            <div className="space-y-4">
              {tarifs.injection.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
                >
                  <span className="text-gray-700">{item.soin}</span>
                  <span className="font-semibold text-teal-600">
                    {item.prix}
                  </span>
                </div>
              ))}
            </div>
          )}

          {activeTab === "peau" && (
            <div className="space-y-4">
              {tarifs.peau.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
                >
                  <span className="text-gray-700">{item.soin}</span>
                  <span className="font-semibold text-teal-600">
                    {item.prix}
                  </span>
                </div>
              ))}
            </div>
          )}

          {activeTab === "hydrafacial" && (
            <div className="space-y-4">
              {tarifs.hydrafacial.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
                >
                  <span className="text-gray-700">{item.soin}</span>
                  <span className="font-semibold text-teal-600">
                    {item.prix}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Section Informations */}
        <div className="mt-12 bg-gray-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Informations importantes
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              • Les tarifs sont donnés à titre indicatif et peuvent varier selon
              les cas
            </li>
            <li>
              • Une consultation préalable est obligatoire pour certains soins
            </li>
            <li>• Possibilité de paiement en plusieurs fois</li>
            <li>
              • Les rendez-vous annulés moins de 48h à l&apos;avance seront
              facturés
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-teal-600 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-semibold mb-4">
            Prêt à commencer votre transformation ?
          </h3>
          <p className="mb-6 text-teal-100">
            Prenez rendez-vous pour une consultation personnalisée
          </p>
          <button className="bg-white text-teal-600 px-8 py-3 rounded-lg hover:bg-teal-50 transition">
            Réserver maintenant
          </button>
        </div>
      </div>
    </div>
  );
}
