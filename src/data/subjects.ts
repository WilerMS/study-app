import type { Subject } from "../types";

export const subjects: Subject[] = [
  {
    id: "example",
    name: "Asignatura de ejemplo",
    icon: "📚",
    topics: [
      {
        id: 1,
        name: "Tema 1: Introducción",
        questions: [
          {
            id: 1,
            question: "¿Cuál es el hueso más largo del cuerpo humano?",
            options: ["Húmero", "Fémur", "Tibia", "Radio"],
            correct: 1,
            explanation:
              "El fémur es el hueso más largo y robusto del cuerpo humano, con una longitud media de 50 cm en adultos.",
          },
          {
            id: 2,
            question: "¿Cuántos huesos tiene el cuerpo humano adulto?",
            options: ["206", "208", "210", "212"],
            correct: 0,
            explanation:
              "El esqueleto humano adulto tiene 206 huesos. Los bebés nacen con unos 270, que se van fusionando con la edad.",
          },
          {
            id: 3,
            question: "¿Cuántos huesos tiene el cuerpo humano adulto?",
            options: ["206", "208", "210", "212"],
            correct: 0,
            explanation:
              "El esqueleto humano adulto tiene 206 huesos. Los bebés nacen con unos 270, que se van fusionando con la edad.",
          },
        ],
      },
      {
        id: 2,
        name: "Banco de preguntas examen",
        questions: [],
      },
    ],
  },
  {
    id: "estructura-de-datos",
    name: "Estructura de Datos",
    icon: "💻",
    topics: [
      {
        id: 1,
        name: "Introducción a las Estructuras de Datos",
        questions: [],
      },
    ],
  },
];
