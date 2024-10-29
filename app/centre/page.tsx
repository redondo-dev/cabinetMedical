
"use client";

import Image from "next/image";
import React from "react";

export default function Centre() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section avec image de fond */}
      <div className="relative h-[50vh] w-full">
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay sombre */}
        <Image
          src="https://t3.ftcdn.net/jpg/08/74/61/10/240_F_874611006_0Njv8pl9kkk496nOwWUgQLxNIPu33SuQ.jpg"
          width={300}
          height={300}
          alt="Centre médical"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Notre Centre Médical
          </h1>
        </div>
      </div>

      {/* Section Introduction */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-900">
              Un centre dédié à votre bien-être
            </h2>
            <p className="text-lg text-gray-600">
              Bienvenue dans notre centre médical esthétique de pointe. Nous combinons
              expertise médicale et technologies innovantes pour vous offrir les
              meilleurs soins dans un environnement confortable et accueillant.
            </p>
            <div className="flex gap-4">
              <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition">
                Prendre rendez-vous
              </button>
              <button className="border border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition">
                Nos services
              </button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://as1.ftcdn.net/v2/jpg/02/24/99/54/1000_F_224995411_j2pHY1iCmHaKxJ3i0cgVZhcwtnZNlW0L.jpg"
              width={300}
              height={300}
              alt="Intérieur du centre"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Section Points Forts */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Nos Points Forts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Point Fort 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expertise Médicale</h3>
              <p className="text-gray-600">
                Une équipe de professionnels qualifiés et expérimentés à votre service.
              </p>
            </div>

            {/* Point Fort 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Équipements Modernes</h3>
              <p className="text-gray-600">
                Des technologies de pointe pour des résultats optimaux.
              </p>
            </div>

            {/* Point Fort 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Suivi Personnalisé</h3>
              <p className="text-gray-600">
                Un accompagnement sur mesure tout au long de votre parcours.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Contact Rapide */}
      {/* <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-teal-600 rounded-lg shadow-xl p-8 text-white">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-semibold">
              Prenez rendez-vous dès maintenant
            </h2>
            <p className="text-lg text-teal-100">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition">
                Contactez-nous
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

