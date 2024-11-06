// pages/faq.tsx
"use client";
"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const Accordion = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item mb-4 border-b border-gray-300">
      <motion.button
        onClick={() => setOpen(!open)}
        style={{ cursor: "pointer", color: "#007bff", fontSize: "18px", fontWeight: "bold", background: "none", border: "none" }}
        aria-expanded={open}
        animate={{ rotate: open ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="w-full text-left"
      >
        {question}
      </motion.button>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="mt-2"
      >
        <p>{answer}</p>
      </motion.div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="faq-container p-4">
      <h1 className="text-2xl font-bold mb-6">Foire aux Questions (FAQ)</h1>

      <Accordion
        question="1. Qu'est-ce que l'épilation laser et comment cela fonctionne-t-il ?"
        answer="L'épilation laser est une méthode de réduction permanente des poils, qui utilise des faisceaux lumineux concentrés..."
      />
      <Accordion
        question="2. L'épilation laser est-elle douloureuse ?"
        answer="La plupart des clients ressentent une légère sensation de picotement ou de chaleur pendant le traitement..."
      />
      <Accordion
        question="3. Combien de séances d'épilation laser sont nécessaires ?"
        answer="Le nombre de séances varie en fonction de chaque individu, mais en moyenne, 6 à 8 séances sont recommandées..."
      />
      <Accordion
        question="4. Les résultats de l'épilation laser sont-ils permanents ?"
        answer="L'épilation laser offre une réduction permanente des poils, mais il est possible que quelques poils faibles réapparaissent au fil des ans. Des séances d'entretien peuvent être nécessaires pour maintenir des résultats optimaux."
      />
     <Accordion
          question="5. Est-ce que l'épilation laser convient à toutes les peaux et à tous les types de poils ?"
          answer="Oui, notre technologie de pointe est adaptée à tous les types de peau, y compris les peaux claires et foncées. Les meilleurs résultats sont obtenus sur les poils foncés et épais, mais les poils clairs peuvent également être traités avec succès."
        />
        <Accordion
          question="6. Les soins sont-ils sûrs ?"
          answer="Oui, tous nos soins sont réalisés par des professionnels qualifiés et certifiés. Nous utilisons des équipements de dernière génération, approuvés par les autorités sanitaires, pour garantir votre sécurité et la qualité des traitements."
        />
        <Accordion
          question="7. Quels appareils utilisez-vous pour l'épilation laser ?"
          answer="Nous utilisons des appareils de dernière génération, comme le laser Alexandrite et le Nd
, qui sont reconnus pour leur efficacité et leur sécurité. Nos appareils sont régulièrement entretenus et calibrés pour des performances optimales."
        />
        <Accordion
          question="8. Quelles sont les précautions avant et après un soin d'épilation laser ?"
          answer="Avant le soin, il est recommandé d'éviter l'exposition au soleil et d'arrêter l'épilation à la cire ou à la pince. Après le traitement, il est conseillé de protéger votre peau du soleil et d'hydrater régulièrement la zone traitée."
        />
        <Accordion
          question="9. Est-ce que l'épilation laser est efficace sur les poils du visage ?"
          answer="Oui, l'épilation laser est très efficace pour l'épilation du visage, y compris la lèvre supérieure, le menton et les joues. Cependant, une consultation préalable est nécessaire pour déterminer le meilleur traitement pour votre peau et vos poils."
        />
        <Accordion
          question="10. Le personnel est-il qualifié pour effectuer les traitements ?"
          answer="Oui, notre équipe est composée de professionnels expérimentés et certifiés dans l'esthétique et l'épilation laser. Chaque membre de notre personnel suit une formation continue pour être au courant des dernières avancées en matière de soins et de sécurité."
        />
        <Accordion
          question="11. Puis-je continuer mes activités normales après un soin d'épilation laser ?"
          answer="Après une séance, vous pouvez généralement reprendre vos activités normales, mais il est conseillé d'éviter la chaleur excessive (sauna, sport intensif) et l'exposition au soleil pendant 24 à 48 heures."
        />
        <Accordion
          question="12. Combien de temps dure chaque séance d'épilation laser ?"
          answer="La durée d'une séance dépend de la zone traitée. Par exemple, une séance pour le visage dure environ 15 à 30 minutes, tandis qu'une séance pour une grande zone comme les jambes peut durer jusqu'à 1 heure."
        />
        <Accordion
          question="13. Est-ce que les soins sont adaptés aux hommes ?"
          answer="Oui, nos soins d'épilation laser conviennent aussi bien aux hommes qu'aux femmes. Que ce soit pour le dos, le torse, les jambes ou le visage, nous offrons des traitements personnalisés pour répondre aux besoins spécifiques de chaque client."
        />
        <Accordion
          question="14. Y a-t-il des effets secondaires après l'épilation laser ?"
          answer="Les effets secondaires sont rares et généralement légers. Vous pourriez ressentir un léger rougeur ou une sensation de chaleur sur la peau après le traitement, mais cela disparaît généralement dans les heures suivant la séance."
        />

        <Accordion
          question="15. Comment puis-je prendre rendez-vous ?"
          answer="Vous pouvez prendre rendez-vous directement sur notre site web en ligne, par téléphone ou en nous envoyant un message via nos réseaux sociaux. Nous sommes disponibles pour répondre à toutes vos questions et fixer une consultation personnalisée."
        />

        <Accordion
          question="16. Est-ce que vous proposez des offres spéciales ou des forfaits ?"
          answer="Oui, nous proposons régulièrement des offres spéciales et des forfaits pour des séances d'épilation laser ou des soins esthétiques. Consultez notre page 'Offres' pour découvrir nos promotions actuelles."
        />

        <Accordion
          question="17. Quels types de soins esthétiques proposez-vous ?"
          answer="Nous proposons une large gamme de soins esthétiques incluant des traitements anti-âge, des soins de la peau comme les hydrafacials et les peelings, ainsi que des injections de toxine botulique et d’acide hyaluronique."
        />

        <Accordion
          question="18. Puis-je payer par carte bancaire ou en plusieurs fois ?"
          answer="Oui, nous acceptons les paiements par carte bancaire, et nous proposons également des options de paiement en plusieurs fois pour rendre nos soins encore plus accessibles."
        />

        <Accordion
          question="19. Quels sont les horaires d'ouverture de votre cabinet ?"
          answer="Nous sommes ouverts du lundi au samedi, de 9h00 à 19h00. Vous pouvez consulter notre page 'Contact' pour connaître nos horaires spécifiques ou prendre rendez-vous en ligne à tout moment."
        />

        <Accordion
          question="20. Avez-vous des témoignages ou avis de clients satisfaits ?"
          answer="Oui, nous avons de nombreux témoignages de clients satisfaits qui partagent leur expérience sur notre site et nos réseaux sociaux. Vous pouvez consulter ces avis pour avoir une idée plus précise de la qualité de nos soins."
        />
      </div>
  
  );
};


export default FAQ;




    
       


