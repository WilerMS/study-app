import type { Subject } from "../../types";

export const comunicacion: Subject = {
  id: "comunicacion-liderazgo",
  name: "Comunicación y Liderazgo",
  icon: "🗣️",
  topics: [
    {
      id: 1,
      name: "Actividad 1",
      description: "Liderazgo y comunicación (caso Luis Aragonés, España 2008)",
      questions: [
        {
          id: 1,
          question:
            "Según el texto, ¿cuál es una de las habilidades profesionales fundamentales de todo líder que dirige un equipo?",
          options: [
            "La comunicación",
            "El dominio técnico de la tarea",
            "La autoridad jerárquica",
            "La capacidad física",
          ],
          correct: 0,
          explanation:
            "El texto sitúa la comunicación como habilidad profesional fundamental del líder, porque no es posible liderar sin comunicar: es la herramienta social con la que se guía al equipo. El dominio técnico o la autoridad formal ayudan, pero sin comunicación un líder resulta ineficaz y no logra sus objetivos.",
        },
        {
          id: 2,
          question: "¿Por qué se dice que no se puede liderar sin comunicar?",
          options: [
            "Porque comunicar es la vía por la que el líder guía y coordina al equipo",
            "Porque comunicar sustituye a la toma de decisiones",
            "Porque la comunicación evita cualquier conflicto",
            "Porque el líder debe hablar más que nadie",
          ],
          correct: 0,
          explanation:
            "Liderar consiste en orientar a las personas hacia un objetivo común, y eso se hace comunicando: transmitiendo metas, escuchando y coordinando. Un líder que no comunica es normalmente ineficaz. No es que la comunicación sustituya a decidir ni que elimine los conflictos por sí sola, ni se trata de hablar más que los demás.",
        },
        {
          id: 3,
          question:
            "¿En qué estado mental se encontraba la selección española antes de la llegada de Luis Aragonés en 2004?",
          options: [
            "Con una mentalidad negativa y pesimista por fracasos históricos",
            "Con exceso de confianza y optimismo",
            "Sin ningún tipo de motivación económica",
            "Con una gran unidad interna",
          ],
          correct: 0,
          explanation:
            "El texto señala que, antes de Aragonés, la selección arrastraba una mentalidad negativa y una actitud pesimista debido a los fracasos históricos y las eliminaciones tempranas. Esa mentalidad, no la falta de talento, era el principal obstáculo, y por eso el líder actuó primero sobre el plano psicológico.",
        },
        {
          id: 4,
          question:
            "¿Cuáles son las tres dimensiones esenciales de una organización que conecta el texto?",
          options: [
            "Efectividad, atractividad y unidad",
            "Eficiencia, rentabilidad y crecimiento",
            "Estrategia, estructura y sistemas",
            "Liderazgo, comunicación y motivación",
          ],
          correct: 0,
          explanation:
            "El texto identifica tres dimensiones organizativas: efectividad (sistema formal, logro de metas), atractividad (sistema informal, motivaciones intrínsecas) y unidad (motivación de servir a los demás, confianza mutua). Son el marco con el que se analiza la selección como organización; las demás combinaciones pertenecen a otros modelos de gestión.",
        },
        {
          id: 5,
          question: "La dimensión de EFECTIVIDAD de una organización se refiere a…",
          options: [
            "El sistema formal, centrado en lograr objetivos y optimizar recursos",
            "El sistema informal y espontáneo del grupo",
            "La confianza mutua entre los miembros",
            "El beneficio económico de la empresa",
          ],
          correct: 0,
          explanation:
            "La efectividad es la dimensión del sistema formal: definir tareas y roles, lograr metas y optimizar recursos. Aragonés la trabajó fijando funciones concretas para cada jugador, lo que llevó a sumar 28 puntos en la clasificación de 2007. El sistema informal es la atractividad, y la confianza mutua corresponde a la unidad.",
        },
        {
          id: 6,
          question: "La dimensión de ATRACTIVIDAD de una organización se refiere a…",
          options: [
            "El sistema informal o espontáneo, ligado a motivaciones intrínsecas (crecimiento, aprendizaje, autorrealización)",
            "El sistema formal de tareas y recursos",
            "La comparación con otros equipos",
            "El cumplimiento de las normas escritas",
          ],
          correct: 0,
          explanation:
            "La atractividad es la dimensión del sistema informal o espontáneo, y mide la capacidad competitiva a través de motivaciones intrínsecas como el crecimiento profesional, el aprendizaje y la autorrealización. Aragonés la aumentó dando roles principales a jóvenes talentos como Xabi Alonso y creando un ambiente de cooperación voluntaria.",
        },
        {
          id: 7,
          question: "La dimensión de UNIDAD de una organización se basa en…",
          options: [
            "La motivación de hacer las cosas en beneficio de los demás, la confianza mutua y la identificación con la organización",
            "La optimización de recursos materiales",
            "El crecimiento profesional individual",
            "La rivalidad interna entre miembros",
          ],
          correct: 0,
          explanation:
            "La unidad se basa en la motivación de actuar en beneficio de los demás, y mide la confianza mutua y cuánto se identifican los miembros con la organización. Es la dimensión más profunda y la que, según el texto, marcó la verdadera diferencia. No tiene que ver con recursos, crecimiento individual ni rivalidad interna.",
        },
        {
          id: 8,
          question:
            "¿Qué dimensión organizativa fue, según el texto, la verdadera diferencia que Aragonés gestionó perfectamente?",
          options: ["La unidad", "La efectividad", "La atractividad", "La rentabilidad"],
          correct: 0,
          explanation:
            "El texto destaca que la unidad fue la dimensión que Aragonés gestionó de forma sobresaliente: consiguió confianza mutua e identificación del grupo con un objetivo común, transformando la mentalidad del equipo. La efectividad y la atractividad también las trabajó, pero la clave diferencial fue la unidad.",
        },
        {
          id: 9,
          question:
            "¿Cuál fue una decisión impopular pero transformadora que tomó Aragonés?",
          options: [
            "Apartar a jugadores veteranos y dar oportunidades a los más jóvenes",
            "Cambiar por completo el sistema táctico cada partido",
            "Reducir los entrenamientos del equipo",
            "Delegar todas las decisiones en los capitanes",
          ],
          correct: 0,
          explanation:
            "Aragonés tomó la decisión impopular de prescindir de veteranos y apostar por jugadores jóvenes, lo que supuso una transformación en el rendimiento del equipo. Una decisión difícil, técnica y emocional a la vez, que un buen líder debe saber gestionar aunque reciba críticas.",
        },
        {
          id: 10,
          question:
            "¿A qué joven talento menciona el texto como ejemplo de jugador al que Aragonés dio un rol principal?",
          options: ["Xabi Alonso", "David Villa", "Raúl González", "Michael Jordan"],
          correct: 0,
          explanation:
            "El texto cita a Xabi Alonso como ejemplo de joven talento al que Aragonés dio un papel protagonista al renovar el equipo, aumentando así la atractividad de la organización. David Villa aparece por su lesión en semifinales, Raúl fue el jugador excluido, y Michael Jordan pertenece al caso del Dream Team (Actividad 2).",
        },
        {
          id: 11,
          question:
            "¿Cuántos puntos terminó sumando la selección en la fase de clasificación de 2007, según el texto?",
          options: ["28 puntos", "18 puntos", "38 puntos", "24 puntos"],
          correct: 0,
          explanation:
            "El texto indica que el equipo cerró la clasificación de 2007 con 28 puntos y ganó todos sus partidos en la fase de grupos de la Eurocopa, ejemplo del buen funcionamiento de la dimensión de efectividad (el sistema formal de tareas y roles definido por Aragonés).",
        },
        {
          id: 12,
          question:
            "Según el texto, ¿cuál es una ventaja competitiva del trabajo en equipo bien coordinado?",
          options: [
            "La flexibilidad operativa y la complementariedad, sin depender de una única estrella",
            "La total independencia de cada jugador",
            "La reducción del número de jugadores necesarios",
            "La eliminación de la figura del entrenador",
          ],
          correct: 0,
          explanation:
            "Un equipo bien coordinado aporta flexibilidad operativa y complementariedad: la fuerza está en el conjunto, no en un jugador irremplazable, por lo que no depende de una sola estrella. Combinar energías permite vencer a rivales que sí dependen de individualidades. No implica prescindir de jugadores ni del entrenador.",
        },
        {
          id: 13,
          question:
            "¿Qué ejemplo usa el texto para ilustrar la 'resiliencia ante lo inesperado' del equipo?",
          options: [
            "La lesión de David Villa en el minuto 30 de la semifinal contra Rusia",
            "La expulsión de un jugador en la final",
            "La ausencia del entrenador en un partido",
            "El cambio de estadio a última hora",
          ],
          correct: 0,
          explanation:
            "El texto usa la lesión de David Villa en el minuto 30 de la semifinal contra Rusia: si el equipo dependiera de individualidades, perder a su mejor jugador habría supuesto perder el partido, pero al funcionar como sistema integrado, el grupo reaccionó gracias a la sincronización. Es un ejemplo de resiliencia a través del apoyo mutuo.",
        },
        {
          id: 14,
          question:
            "Según el texto, un grupo unificado se caracteriza porque…",
          options: [
            "No depende de un único líder o de un jugador irremplazable, pues la fuerza está en todo el equipo",
            "Depende totalmente de su jugador estrella",
            "Necesita un líder que tome todas las decisiones",
            "Funciona mejor cuanto más individualista es cada miembro",
          ],
          correct: 0,
          explanation:
            "Un grupo unificado reparte la fuerza en el conjunto, de modo que no depende de un único líder ni de un jugador irremplazable. Esto le da robustez frente a bajas o imprevistos. Depender de una estrella o del individualismo es precisamente lo contrario a la unidad que da ventaja competitiva.",
        },
        {
          id: 15,
          question: "Según el texto, el liderazgo, además de dar órdenes técnicas o tácticas, implica…",
          options: [
            "Gestionar las emociones y los sentimientos del grupo",
            "Controlar únicamente los resultados económicos",
            "Evitar cualquier contacto personal con el equipo",
            "Imponer decisiones sin explicarlas",
          ],
          correct: 0,
          explanation:
            "El texto vincula emoción y liderazgo: dirigir a personas también es gestionar sus emociones y sentimientos, porque las habilidades emocionales del líder impactan directamente en el rendimiento y la productividad del equipo. No basta con lo técnico o táctico; la gestión emocional 'desbloquea' el potencial del grupo.",
        },
        {
          id: 16,
          question:
            "Cuando Aragonés asumió el cargo en 2004, ¿cuál fue su prioridad principal?",
          options: [
            "Destruir la mentalidad negativa que arrastraba el equipo",
            "Cambiar por completo el sistema táctico",
            "Contratar nuevos jugadores extranjeros",
            "Aumentar los ingresos por publicidad",
          ],
          correct: 0,
          explanation:
            "Su prioridad no fue cambiar tácticas, sino destruir la mentalidad negativa del equipo, formada por experiencias pasadas que habían creado modelos mentales pesimistas en jugadores y aficionados. Actuó primero en el plano psicológico, porque ahí estaba el verdadero freno del rendimiento.",
        },
        {
          id: 17,
          question: "¿Cuál fue la estrategia emocional de Aragonés para cambiar la mentalidad del grupo?",
          options: [
            "Inyectar emociones positivas basadas en determinación, hambre competitiva y ambición",
            "Aumentar la presión con amenazas de sanciones",
            "Reducir las expectativas para evitar la frustración",
            "Ignorar el estado de ánimo de los jugadores",
          ],
          correct: 0,
          explanation:
            "Aragonés actuó sobre el nivel psicológico inyectando emociones positivas: determinación, hambre competitiva y ambición, haciendo que el grupo creyera en sus propias capacidades desde el principio. Al gestionar las emociones de forma inteligente, mejoró las actitudes y comportamientos y generó la confianza mutua necesaria para ganar.",
        },
        {
          id: 18,
          question:
            "La primera herramienta de gestión de Aragonés es la 'toma de decisiones basada en…'",
          options: ["Credibilidad", "Antigüedad", "Popularidad", "Casualidad"],
          correct: 0,
          explanation:
            "La primera herramienta es la toma de decisiones basada en la credibilidad: mantenerse firme en decisiones difíciles, aun frente a las críticas, refuerza la autoridad del líder. No se basa en la antigüedad ni en buscar ser popular; precisamente tomó decisiones impopulares que fortalecieron su credibilidad.",
        },
        {
          id: 19,
          question:
            "¿Qué decisión arriesgada reforzó la autoridad de Aragonés como líder?",
          options: [
            "Excluir a la estrella Raúl González tras dos derrotas en la fase de clasificación",
            "Fichar a un nuevo portero titular",
            "Cambiar el color de la camiseta",
            "Renunciar a jugar la Eurocopa",
          ],
          correct: 0,
          explanation:
            "Aragonés excluyó a la estrella Raúl González tras dos derrotas en la clasificación, y se mantuvo firme pese a las duras críticas de la prensa. Esa consistencia reforzó su autoridad y envió un mensaje claro a los jóvenes: un líder debe ser coherente entre lo que dice y lo que hace.",
        },
        {
          id: 20,
          question:
            "La decisión de excluir a Raúl demuestra que un líder debe ser consistente entre…",
          options: [
            "Sus palabras y sus acciones",
            "Sus ingresos y sus gastos",
            "Su edad y su experiencia",
            "Su equipo y sus rivales",
          ],
          correct: 0,
          explanation:
            "El mensaje que envió esa decisión es que un líder debe ser consistente entre sus palabras y sus acciones (coherencia): si predica exigencia y meritocracia, debe aplicarla incluso con las estrellas. Esa coherencia es la base de la credibilidad y de la autoridad ante el grupo.",
        },
        {
          id: 21,
          question:
            "La segunda herramienta de Aragonés es una comunicación de tipo…",
          options: [
            "Inteligente y bidireccional (en dos direcciones)",
            "Estrictamente jerárquica y de arriba abajo",
            "Únicamente escrita",
            "Basada en el silencio",
          ],
          correct: 0,
          explanation:
            "En lugar de un modelo puramente jerárquico, Aragonés usó una comunicación inteligente y bidireccional, combinando distintas direcciones (descendente, ascendente y horizontal) y la escucha activa. Esto le dio información real del equipo y facilitó la coordinación, frente a un modelo unidireccional de arriba abajo.",
        },
        {
          id: 22,
          question: "¿Para qué usó Aragonés la comunicación DESCENDENTE (downward)?",
          options: [
            "Para transmitir las responsabilidades y metas de cada jugador",
            "Para escuchar las quejas de los jugadores",
            "Para coordinar a los jugadores entre sí",
            "Para hablar con la prensa",
          ],
          correct: 0,
          explanation:
            "La comunicación descendente (del líder hacia el equipo) la usó para transmitir las responsabilidades y objetivos de cada jugador. Escuchar las necesidades sería comunicación ascendente, y coordinar a los jugadores entre sí es comunicación horizontal: cada dirección cumple una función distinta.",
        },
        {
          id: 23,
          question:
            "¿Para qué usó Aragonés la comunicación ASCENDENTE (upward) y la escucha activa?",
          options: [
            "Para entender las necesidades de sus jugadores",
            "Para dar órdenes tácticas",
            "Para imponer sanciones",
            "Para reducir los entrenamientos",
          ],
          correct: 0,
          explanation:
            "La comunicación ascendente (del equipo hacia el líder) junto con la escucha activa le sirvió para entender las necesidades de sus jugadores, obteniendo información valiosa del grupo. Dar órdenes es comunicación descendente; la ascendente consiste precisamente en recibir y escuchar.",
        },
        {
          id: 24,
          question: "¿Qué permitió la comunicación HORIZONTAL entre los jugadores?",
          options: [
            "Coordinarse entre ellos para superar problemas inesperados",
            "Comunicarse solo con el entrenador",
            "Evitar hablar durante los partidos",
            "Competir entre sí por el puesto",
          ],
          correct: 0,
          explanation:
            "La comunicación horizontal (entre iguales, jugador-jugador) permitió coordinarse para superar problemas inesperados durante los partidos, actuando como un sistema integrado. Es distinta de la vertical con el entrenador y clave para la resiliencia del equipo ante imprevistos como una lesión.",
        },
        {
          id: 25,
          question:
            "La tercera herramienta de Aragonés es el uso estratégico de…",
          options: [
            "Narrativas de alto impacto (el lenguaje como recurso estratégico)",
            "Sanciones económicas",
            "Entrenamientos extra",
            "Fichajes caros",
          ],
          correct: 0,
          explanation:
            "La tercera herramienta es el uso estratégico de narrativas de alto impacto: emplear el lenguaje como recurso para mover las emociones y las acciones del grupo hacia un beneficio común. Un buen líder cuenta historias que inspiran, no recurre a sanciones ni a soluciones puramente materiales.",
        },
        {
          id: 26,
          question: "¿Cuál fue el resultado final de la gestión de Aragonés según el texto?",
          options: [
            "España ganó la Eurocopa",
            "España quedó eliminada en cuartos",
            "El equipo se disolvió",
            "Aragonés dimitió antes de la final",
          ],
          correct: 0,
          explanation:
            "El resultado fue que España ganó la Eurocopa, transformándose de un rival considerado fácil en campeón. El texto lo presenta como prueba de que un gran líder que sabe comunicar puede reconstruir un equipo 'roto' y crear valor, cambiando incluso la imagen externa del grupo.",
        },
        {
          id: 27,
          question:
            "Según el texto, la comunicación no es solo enviar mensajes, sino que tiene un impacto directo en…",
          options: [
            "La productividad del equipo",
            "El presupuesto de la organización",
            "El calendario de partidos",
            "La climatología del estadio",
          ],
          correct: 0,
          explanation:
            "El texto subraya que la comunicación no consiste solo en enviar mensajes: impacta directamente en la productividad y el rendimiento del equipo. Aragonés usó sus habilidades comunicativas para mejorar el rendimiento y, a la vez, la imagen externa de la selección.",
        },
        {
          id: 28,
          question: "Según el texto, ¿cómo suele ser un líder que no sabe comunicar?",
          options: [
            "Ineficaz y no logra sus objetivos",
            "Muy respetado por el grupo",
            "Independiente y autosuficiente",
            "Más creativo que los demás",
          ],
          correct: 0,
          explanation:
            "El texto afirma que un líder incapaz de comunicar suele ser ineficaz y no consigue sus objetivos, porque no puede guiar realmente al equipo. La comunicación es la habilidad social que hace posible el liderazgo efectivo; sin ella, el resto de cualidades no se traduce en resultados.",
        },
        {
          id: 29,
          question:
            "Además del rendimiento, ¿qué otra cosa mejoró Aragonés con su gestión comunicativa?",
          options: [
            "La imagen externa del equipo",
            "El precio de las entradas",
            "El número de patrocinadores extranjeros",
            "La duración de los partidos",
          ],
          correct: 0,
          explanation:
            "El texto señala que Aragonés no solo mejoró el rendimiento del equipo, sino también su imagen externa: la percepción pública pasó de 'rival fácil' a candidato al título. La comunicación eficaz proyecta hacia fuera la transformación interna del grupo.",
        },
        {
          id: 30,
          question:
            "¿Qué tipo de ambiente creó Aragonés al renovar el equipo y dar protagonismo a los jóvenes?",
          options: [
            "Un ambiente de cooperación voluntaria basado en el trabajo en equipo",
            "Un ambiente de competencia individual entre estrellas",
            "Un ambiente de miedo y sanciones",
            "Un ambiente de indiferencia hacia los resultados",
          ],
          correct: 0,
          explanation:
            "Al renovar el equipo, Aragonés creó un ambiente de cooperación voluntaria basado en el trabajo en equipo y el juego de toque, lo que aumentó la motivación del grupo (dimensión de atractividad). No fomentó la competencia individual ni un clima de miedo, sino la colaboración.",
        },
      ],
    },
    {
      id: 2,
      name: "Actividad 2",
      description:
        "Cómo construir un equipo de alto rendimiento (caso Dream Team 1992)",
      questions: [
        {
          id: 1,
          question: "¿En qué consiste el reto del trabajo en equipo?",
          options: [
            "En conectar de forma coordinada el talento, las ideas y el conocimiento de todos los miembros",
            "En reunir a los profesionales más brillantes en una sala",
            "En que cada persona trabaje de forma independiente",
            "En reducir el número de personas del grupo",
          ],
          correct: 0,
          explanation:
            "El reto del trabajo en equipo consiste en conectar de manera coordinada el talento, las ideas y el conocimiento de todos los miembros para lograr un objetivo común. No basta con juntar a los mejores; lo difícil (y valioso) es coordinarlos y hacer que se complementen, superando el individualismo.",
        },
        {
          id: 2,
          question: "¿Cuál es la diferencia fundamental entre un EQUIPO y un GRUPO?",
          options: [
            "En un equipo los miembros se complementan y comparten responsabilidades; en un grupo cada uno trabaja individualmente sin colaboración real",
            "Un equipo tiene más personas que un grupo",
            "Un grupo siempre logra mejores resultados que un equipo",
            "No hay ninguna diferencia entre ambos",
          ],
          correct: 0,
          explanation:
            "Un grupo es solo un conjunto de personas que persiguen la misma meta pero sin coordinación; un equipo, en cambio, se caracteriza porque sus miembros se complementan, comparten responsabilidades y colaboran de verdad hacia un objetivo común. La diferencia no es el tamaño, sino el nivel de coordinación y colaboración.",
        },
        {
          id: 3,
          question: "Según el texto, ¿cuál es hoy el reto más difícil para construir un equipo?",
          options: [
            "Superar el individualismo para crear una identidad colectiva",
            "Conseguir financiación para el equipo",
            "Reducir el número de reuniones",
            "Contratar más personal técnico",
          ],
          correct: 0,
          explanation:
            "El reto más difícil es superar el individualismo para crear una identidad colectiva: transformar un conjunto de talentos individuales en un verdadero equipo con sentido de pertenencia. Cuando esa conexión se logra, el potencial del equipo es ilimitado. No es una cuestión de dinero, reuniones o personal.",
        },
        {
          id: 4,
          question: "¿Qué caso de estudio utiliza la Actividad 2 para ilustrar el trabajo en equipo?",
          options: [
            "El Dream Team de baloncesto de 1992",
            "La selección española de fútbol de 2008",
            "El equipo de Fórmula 1 de Ferrari",
            "La NASA en el proyecto Apolo",
          ],
          correct: 0,
          explanation:
            "La Actividad 2 usa el Dream Team de baloncesto de 1992 (con superestrellas como Michael Jordan y Magic Johnson) para mostrar que juntar talentos individuales extraordinarios no garantiza el éxito inmediato. La selección de fútbol de 2008 corresponde a la Actividad 1.",
        },
        {
          id: 5,
          question:
            "¿Qué demostró el Dream Team de 1992 al principio de su preparación?",
          options: [
            "Que juntar personas extraordinarias no garantiza el éxito: perdieron contra un equipo universitario",
            "Que las estrellas individuales siempre ganan",
            "Que no hacía falta entrenar",
            "Que el talento individual es lo único importante",
          ],
          correct: 0,
          explanation:
            "Al principio, el Dream Team perdió contra un equipo universitario porque los jugadores se centraban solo en su talento individual y no en colaborar entre sí. Esto demostró que sumar personas extraordinarias no basta: sin conexión y coordinación, el potencial no se materializa.",
        },
        {
          id: 6,
          question: "¿Cuáles son las cinco bases o fundamentos de la cohesión de equipo?",
          options: [
            "Dimensión emocional, incentivo, motivación, expectativas y comparación",
            "Estrategia, estructura, sistemas, personal y estilo",
            "Planificar, organizar, dirigir, coordinar y controlar",
            "Confianza, respeto, empatía, disciplina y jerarquía",
          ],
          correct: 0,
          explanation:
            "El texto define cinco bases de la cohesión: dimensión emocional (emociones compartidas), incentivo (feedback constructivo continuo), motivación (necesidades individuales y compartidas), expectativas (beneficios de pertenecer) y comparación (equilibrio con otros equipos). Son los pilares que mantienen unidos a los miembros de un grupo.",
        },
        {
          id: 7,
          question: "La 'dimensión emocional' como base de la cohesión consiste en…",
          options: [
            "Gestionar las emociones, los intangibles y los sentimientos compartidos dentro del entorno de trabajo",
            "Establecer el organigrama de la empresa",
            "Comparar el grupo con otros equipos",
            "Definir los salarios de cada miembro",
          ],
          correct: 0,
          explanation:
            "La dimensión emocional consiste en gestionar las emociones, los intangibles y los sentimientos compartidos en el entorno laboral. Es la base que atiende el 'clima' afectivo del equipo, distinta del incentivo (feedback), la comparación (con otros grupos) o cuestiones formales como los salarios.",
        },
        {
          id: 8,
          question: "El 'incentivo' como base de la cohesión se define como…",
          options: [
            "Un proceso continuo de feedback constructivo que ayuda a aceptar las reglas y crear una cultura común",
            "Un bono económico anual",
            "La comparación con la competencia",
            "La selección rigurosa de personal",
          ],
          correct: 0,
          explanation:
            "El incentivo es un proceso continuo de retroalimentación (feedback) constructiva entre el trabajador y el grupo, que ayuda a las personas a aceptar las reglas y a construir una cultura común. Aquí no se refiere a un bono económico, sino a la mejora continua a través del feedback.",
        },
        {
          id: 9,
          question: "La 'motivación' como base de la cohesión se centra en…",
          options: [
            "Satisfacer tanto las necesidades individuales como las compartidas de los profesionales del grupo",
            "Aumentar únicamente los beneficios de la empresa",
            "Comparar a unos miembros con otros",
            "Reducir la carga de trabajo",
          ],
          correct: 0,
          explanation:
            "La motivación, como fundamento de la cohesión, se centra en satisfacer tanto las necesidades individuales como las compartidas de los miembros. Atender ambos planos (lo personal y lo colectivo) mantiene a las personas comprometidas con el equipo.",
        },
        {
          id: 10,
          question: "Las 'expectativas' como base de la cohesión se refieren a…",
          options: [
            "La alineación del personal respecto a los beneficios que obtendrán por pertenecer y contribuir al equipo",
            "El calendario de vacaciones",
            "La comparación con equipos rivales",
            "Las emociones compartidas del grupo",
          ],
          correct: 0,
          explanation:
            "Las expectativas son la alineación del personal en cuanto a los beneficios concretos que obtendrán por el mero hecho de pertenecer y aportar al equipo. Cuando las expectativas están alineadas, aumenta el compromiso; se diferencian de la comparación (con otros equipos) y de la dimensión emocional.",
        },
        {
          id: 11,
          question: "La 'comparación' como base de la cohesión significa…",
          options: [
            "Establecer un equilibrio y comparación transparente entre el propio grupo y otros equipos de la organización",
            "Comparar los sueldos de los miembros entre sí",
            "Enfrentar a los miembros del mismo equipo",
            "Ignorar lo que hacen los demás equipos",
          ],
          correct: 0,
          explanation:
            "La comparación consiste en establecer un equilibrio y una comparación transparente entre el propio grupo y otros equipos de la organización. Sirve de referencia para situarse y mejorar, sin caer en la rivalidad interna ni en la opacidad.",
        },
        {
          id: 12,
          question:
            "¿Cuáles son las cuatro etapas del proceso evolutivo por el que madura un equipo?",
          options: [
            "Formación (training), conflicto, normalización (norming) y desempeño (performing)",
            "Inicio, elaboración, construcción y transición",
            "Análisis, diseño, implementación y pruebas",
            "Planificación, ejecución, control y cierre",
          ],
          correct: 0,
          explanation:
            "El texto describe cuatro etapas de maduración del equipo: formación (training), conflicto (storming), normalización (norming) y desempeño (performing). Es el modelo clásico de desarrollo de grupos: los miembros primero se conocen, luego surgen tensiones, después acuerdan normas y finalmente rinden al máximo. Las otras opciones son fases de otros procesos (proyecto, software).",
        },
        {
          id: 13,
          question:
            "La cohesión de un equipo aumenta cuando el líder transforma las metas globales de la empresa en…",
          options: [
            "Objetivos claros y medibles, que crean identidad compartida y orgullo",
            "Normas rígidas e inflexibles",
            "Tareas individuales sin conexión",
            "Comparaciones con la competencia",
          ],
          correct: 0,
          explanation:
            "La cohesión crece cuando el líder convierte los objetivos globales de la compañía en metas claras y medibles, porque eso genera una identidad compartida y un sentido de orgullo en el equipo. La claridad y la medición dan dirección; normas rígidas o tareas aisladas no fomentan la cohesión.",
        },
        {
          id: 14,
          question: "¿Por qué el trabajo en equipo es una ventaja competitiva?",
          options: [
            "Porque logra un potencial mayor que el de los individuos trabajando por separado",
            "Porque reduce el número de trabajadores",
            "Porque elimina la necesidad de innovar",
            "Porque evita la toma de decisiones",
          ],
          correct: 0,
          explanation:
            "El trabajo en equipo es ventaja competitiva porque alcanza un potencial superior al de los individuos aislados: es la base del funcionamiento de las organizaciones modernas. Un equipo bien estructurado multiplica el valor, gana flexibilidad y sostiene un buen ambiente interno; no se trata de reducir plantilla ni de dejar de innovar.",
        },
        {
          id: 15,
          question:
            "Según el texto, cuando las personas trabajan juntas, el conocimiento…",
          options: [
            "No solo se suma, sino que se incrementa de forma exponencial",
            "Se mantiene igual que si trabajaran solas",
            "Disminuye por la confusión del grupo",
            "Se pierde entre los miembros",
          ],
          correct: 0,
          explanation:
            "El texto explica que las habilidades y el conocimiento de los miembros no se limitan a sumarse, sino que se incrementan exponencialmente al trabajar juntos, gracias a la interacción y el intercambio. Es la 'multiplicación del valor', una de las razones estratégicas por las que el equipo supera al individuo.",
        },
        {
          id: 16,
          question:
            "Según el texto, ¿cómo se consigue una mayor calidad en las soluciones dentro de un equipo?",
          options: [
            "Analizando los problemas desde diferentes puntos de vista",
            "Dejando decidir a una sola persona",
            "Reduciendo la diversidad del grupo",
            "Evitando el debate entre los miembros",
          ],
          correct: 0,
          explanation:
            "La mayor calidad se logra analizando los problemas desde distintos puntos de vista: la diversidad de perspectivas del equipo permite encontrar mejores soluciones que una sola mente. Reducir la diversidad o evitar el debate empobrece las soluciones, justo lo contrario de lo que aporta el equipo.",
        },
        {
          id: 17,
          question: "El 'enriquecimiento por diversidad' en un equipo consiste en que…",
          options: [
            "La variedad de estilos de trabajo aumenta la satisfacción personal y el valor total de la empresa",
            "Todos los miembros piensen exactamente igual",
            "Se contrate solo a perfiles idénticos",
            "Se elimine cualquier diferencia entre personas",
          ],
          correct: 0,
          explanation:
            "El enriquecimiento por diversidad significa que contar con una variedad de estilos de trabajo incrementa tanto la satisfacción personal como el valor total de la compañía. La diversidad es una fuente de valor; homogeneizar a todos los perfiles eliminaría precisamente esa riqueza.",
        },
        {
          id: 18,
          question: "La 'respuesta en tiempo real' como ventaja del equipo se refiere a…",
          options: [
            "La capacidad de ajustar rápidamente su visión al enfrentar nuevos retos",
            "Responder correos electrónicos de inmediato",
            "Trabajar sin ningún plan previo",
            "Mantener siempre la misma estrategia",
          ],
          correct: 0,
          explanation:
            "La respuesta en tiempo real es la capacidad del equipo de actuar como un grupo altamente flexible que ajusta su visión con rapidez ante nuevos desafíos. Es una ventaja de dinamismo y flexibilidad operativa, muy superior a la rigidez de las estructuras jerárquicas formales.",
        },
        {
          id: 19,
          question:
            "Según el texto, ¿por qué los equipos se adaptan mejor que las estructuras jerárquicas?",
          options: [
            "Porque la velocidad de un equipo para reorganizar sus funciones es mucho mayor que la rigidez de las jerarquías formales",
            "Porque los equipos no tienen normas",
            "Porque las jerarquías no toman decisiones",
            "Porque los equipos evitan cualquier cambio",
          ],
          correct: 0,
          explanation:
            "Los equipos se adaptan mejor porque su velocidad para reorganizar funciones supera con creces la rigidez de las estructuras jerárquicas formales. Esa capacidad de adaptación les permite responder a los cambios del mercado más rápido, algo que las jerarquías rígidas hacen con dificultad.",
        },
        {
          id: 20,
          question: "El 'soporte intelectual y emocional' del equipo aporta que…",
          options: [
            "Se crean dinámicas de solidaridad que reducen el estrés en situaciones de alta presión",
            "Se elimina toda emoción del trabajo",
            "Cada persona resuelva sus problemas sola",
            "Se aumente la competencia interna",
          ],
          correct: 0,
          explanation:
            "El soporte intelectual y emocional consiste en que los equipos generan dinámicas de solidaridad que reducen el estrés en momentos de alta presión. El apoyo mutuo actúa como amortiguador emocional, algo que no ocurre cuando cada persona afronta los problemas en solitario.",
        },
        {
          id: 21,
          question:
            "Los 'laboratorios de excelencia' como ventaja del trabajo en equipo significan que…",
          options: [
            "Trabajar juntos por un propósito común mejora los estándares de rendimiento de toda la organización",
            "Solo el departamento de I+D puede innovar",
            "El equipo trabaja aislado del resto de la empresa",
            "Se reduce el rendimiento general",
          ],
          correct: 0,
          explanation:
            "Los 'laboratorios de excelencia' expresan que, al trabajar juntos por un propósito común, los equipos elevan los estándares generales de rendimiento de toda la organización, contagiando buenas prácticas. No es exclusivo de un departamento ni implica aislamiento: el equipo eleva el nivel del conjunto.",
        },
        {
          id: 22,
          question:
            "¿Cuál es la primera de las diez estrategias para construir un equipo de alto rendimiento?",
          options: [
            "Definir la importancia del propósito, explicando con claridad la relevancia y urgencia del proyecto",
            "Implementar sistemas de recompensa",
            "Seleccionar rigurosamente a los colaboradores",
            "Informar del progreso del proyecto",
          ],
          correct: 0,
          explanation:
            "La primera estrategia es definir la importancia del propósito: explicar con claridad la relevancia y la urgencia del proyecto para que cada persona entienda por qué debe esforzarse. Dar sentido al trabajo es el punto de partida; las recompensas o la selección de personas vienen después.",
        },
        {
          id: 23,
          question:
            "Al seleccionar a los colaboradores del equipo, ¿en qué hay que centrarse según el texto?",
          options: [
            "En lograr un buen equilibrio entre habilidades técnicas y capacidad de resolución de problemas",
            "En elegir solo a los que tengan más experiencia",
            "En contratar únicamente a amigos de confianza",
            "En buscar el mayor número posible de personas",
          ],
          correct: 0,
          explanation:
            "Hay que seleccionar rigurosamente buscando un equilibrio entre habilidades técnicas y capacidad de resolución de problemas. Un equipo de alto rendimiento necesita tanto competencia técnica como capacidad de afrontar imprevistos; no se trata solo de experiencia, afinidad personal ni cantidad de gente.",
        },
        {
          id: 24,
          question:
            "Establecer reglas de comportamiento desde el principio implica especificar…",
          options: [
            "Cómo se gestionan los desacuerdos, cada cuánto habrá reuniones y cómo se toman las decisiones",
            "El salario exacto de cada miembro",
            "El color de la ropa de trabajo",
            "Los rivales a los que hay que vencer",
          ],
          correct: 0,
          explanation:
            "Fijar reglas de comportamiento desde el inicio significa especificar cómo se gestionarán los desacuerdos, la regularidad de las reuniones y la forma de tomar decisiones. Estas 'reglas del juego' reducen la incertidumbre y previenen conflictos, dando un marco claro de funcionamiento al equipo.",
        },
        {
          id: 25,
          question: "¿Cómo debe gestionarse el feedback en un equipo de alto rendimiento?",
          options: [
            "De forma positiva y constructiva, con un lenguaje optimista que reconozca lo bueno y ayude a mejorar",
            "Solo señalando los errores de cada persona",
            "Evitando cualquier comentario sobre el trabajo",
            "De forma anónima y esporádica",
          ],
          correct: 0,
          explanation:
            "El feedback debe gestionarse de manera positiva y constructiva, con un lenguaje optimista que reconozca las acciones beneficiosas y ayude a las personas a mejorar. Un feedback centrado solo en lo negativo desmotiva; el objetivo es reforzar lo bueno y orientar el crecimiento.",
        },
        {
          id: 26,
          question: "¿Para qué sirven los sistemas de reconocimiento en un equipo?",
          options: [
            "Para reforzar el compromiso a largo plazo de cada miembro mediante recompensas",
            "Para castigar a quienes cometen errores",
            "Para comparar a los miembros entre sí públicamente",
            "Para reducir el sueldo de los menos productivos",
          ],
          correct: 0,
          explanation:
            "Los sistemas de reconocimiento crean recompensas que refuerzan el compromiso a largo plazo de los miembros del equipo. Reconocer el esfuerzo mantiene la motivación en el tiempo; no se trata de castigar, exponer ni penalizar económicamente a las personas.",
        },
        {
          id: 27,
          question:
            "Según el texto, ¿cómo empezó a mejorar el Dream Team tras su derrota inicial?",
          options: [
            "Los entrenadores estandarizaron las reglas y cambiaron las expectativas individuales por la complementariedad",
            "Ficharon a jugadores aún más famosos",
            "Redujeron el número de entrenamientos",
            "Dejaron que cada estrella jugara por su cuenta",
          ],
          correct: 0,
          explanation:
            "La situación cambió cuando los entrenadores estandarizaron las reglas durante los entrenamientos y transformaron las expectativas individuales en complementariedad. Así el equipo ganó madurez y cohesión, convirtiendo un conjunto de estrellas en una 'máquina colectiva' imbatible. La clave fue la coordinación, no fichar más estrellas.",
        },
        {
          id: 28,
          question: "Según la conclusión del texto, un equipo real…",
          options: [
            "No aparece por arte de magia ni se crea solo juntando a los mejores profesionales en una sala",
            "Se forma automáticamente al reunir talento",
            "No necesita reglas ni objetivos",
            "Depende solo de la suerte",
          ],
          correct: 0,
          explanation:
            "La conclusión es clara: un equipo excelente no surge por arte de magia ni se logra simplemente reuniendo a los mejores en una sala. Se construye estableciendo reglas claras desde el principio y haciendo que cada persona se sienta cómoda, valorada y parte de algo importante.",
        },
        {
          id: 29,
          question:
            "¿Con qué objetivo se deben gestionar activamente las primeras reuniones del equipo?",
          options: [
            "Para reducir la incertidumbre inicial del grupo",
            "Para asignar de inmediato los salarios",
            "Para elegir al peor jugador",
            "Para evitar que las personas se conozcan",
          ],
          correct: 0,
          explanation:
            "Las primeras reuniones deben gestionarse activamente para reducir la incertidumbre inicial del grupo: al controlar esas primeras interacciones, el líder da seguridad y dirección cuando el equipo aún no se conoce (etapa de formación). No es el momento de salarios ni de evitar el contacto, sino de generar confianza.",
        },
        {
          id: 30,
          question:
            "¿Por qué conviene informar al grupo con regularidad sobre el progreso del proyecto?",
          options: [
            "Para que los miembros puedan tomar decisiones informadas",
            "Para vigilar y controlar a cada persona",
            "Para generar competencia entre ellos",
            "Para ocultar los problemas del proyecto",
          ],
          correct: 0,
          explanation:
            "Informar con regularidad y aportar nuevos datos de forma constante permite que los miembros tomen decisiones informadas. La transparencia sobre el avance mantiene al equipo alineado y capacitado para reaccionar; no busca vigilar, enfrentar ni esconder problemas.",
        },
      ],
    },
  ],
};
