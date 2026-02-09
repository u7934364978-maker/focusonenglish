"use client";

import { useState } from "react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Cuánto dura cada programa?",
      answer: "Todos nuestros programas están diseñados para completarse en 90 días (3 meses). Cada mes tiene un enfoque específico: fundamentos, práctica intensiva y consolidación."
    },
    {
      question: "¿Qué niveles están disponibles?",
      answer: "Ofrecemos cursos para todos los niveles del Marco Común Europeo: A1, A2, B1, B2, C1 y C2. Puedes hacer nuestro test de nivel gratuito para saber cuál es el más adecuado para ti."
    },
    {
      question: "¿Los cursos están certificados?",
      answer: "Nuestros cursos están alineados con los estándares CEFR (Marco Común Europeo de Referencia), el estándar global de competencia lingüística."
    },
    {
      question: "¿Puedo cambiar de nivel durante el curso?",
      answer: "Sí, puedes ajustar tu nivel de aprendizaje en cualquier momento para que siempre estudies con el material adecuado a tu capacidad."
    },
    {
      question: "¿Hay acceso a profesores?",
      answer: "Todos los planes incluyen soporte por email. Los planes Premium y Enterprise incluyen sesiones 1:1 con profesores nativos certificados."
    },
    {
      question: "¿Qué pasa si no puedo terminar en 90 días?",
      answer: "No hay problema. Tu acceso al contenido se extiende más allá del período inicial para que puedas completarlo a tu propio ritmo."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-slate-600">
            Todo lo que necesitas saber sobre nuestros cursos
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-2 border-slate-200 rounded-xl overflow-hidden hover:border-coral-300 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="font-black text-slate-900">{faq.question}</span>
                <svg 
                  className={`w-5 h-5 text-slate-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                  <p className="text-slate-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
