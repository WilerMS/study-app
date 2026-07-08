import type { Subject } from "../../types";

export const procesos: Subject = {
  id: "procesos-ingenieria-software",
  name: "Procesos de Ingeniería del Software",
  icon: "⚙️",
  topics: [
    {
      id: 1,
      name: "Actividad 1",
      description:
        "Planificación y gestión de proyecto software (Scrum + ISO/IEC 12207)",
      questions: [
        {
          id: 1,
          question:
            "¿Qué marco de trabajo ágil se elige para gestionar el equipo de 5 desarrolladores del proyecto?",
          options: ["Kanban", "Scrum", "Proceso Unificado (UP)", "Cascada"],
          correct: 1,
          explanation:
            "Se elige Scrum porque está pensado para equipos pequeños y autoorganizados: con solo 5 personas elimina intermediarios y burocracia, la coordinación diaria se resuelve en Dailies de 15 minutos y el trabajo se organiza en Sprints con un objetivo claro. Kanban es un método de flujo continuo sin iteraciones fijas ni roles definidos, por lo que no aporta la cadencia de entrega que se busca; el Proceso Unificado y la Cascada son enfoques más pesados y documentales, inadecuados para validar rápido un MVP con un equipo reducido.",
        },
        {
          id: 2,
          question:
            "¿Qué norma internacional se combina con Scrum para asegurar que el software sea robusto ante el alto crecimiento?",
          options: [
            "ISO/IEC 25010",
            "ISO 9001",
            "ISO/IEC 12207",
            "ISO/IEC 27001",
          ],
          correct: 2,
          explanation:
            "La ISO/IEC 12207 es la norma que define los procesos del ciclo de vida del software (definición de requisitos, diseño, implementación, aseguramiento de la calidad, etc.), y aquí se usa para dar rigor de ingeniería a la agilidad de Scrum. Conviene no confundirla: la ISO/IEC 25010 define el modelo de calidad del producto, la ISO 9001 es un estándar genérico de gestión de la calidad de cualquier organización, y la ISO/IEC 27001 trata de seguridad de la información. Solo la 12207 aborda específicamente los procesos del ciclo de vida del software.",
        },
        {
          id: 3,
          question: "¿Cómo se plantea inicialmente el producto para salir al mercado rápido?",
          options: [
            "Como un producto completo 'todo en uno' desde el primer día",
            "Como un MVP (Producto Mínimo Viable) centrado en la Facturación",
            "Como un prototipo desechable sin arquitectura",
            "Como una versión beta cerrada solo para pruebas internas",
          ],
          correct: 1,
          explanation:
            "El producto arranca como un MVP (Producto Mínimo Viable): la versión más pequeña que aporta valor real y permite validar la idea con clientes de pago cuanto antes. Construir el producto completo 'todo en uno' desde el inicio retrasaría meses la salida al mercado y arriesgaría el presupuesto; un prototipo desechable no serviría porque se tira, y precisamente el MVP se diseña con arquitectura escalable para reutilizarlo; y una beta interna cerrada no genera el feedback de usuarios reales que aquí se persigue.",
        },
        {
          id: 4,
          question: "¿En qué módulo se centra exclusivamente el MVP inicial?",
          options: ["Contabilidad", "Inventario", "Facturación", "Recursos Humanos"],
          correct: 2,
          explanation:
            "El MVP se centra exclusivamente en Facturación porque es la funcionalidad núcleo que resuelve el dolor más inmediato del cliente y permite empezar a cobrar. Contabilidad, Inventario y Recursos Humanos también forman parte de la visión 'todo en uno', pero se dejan como módulos posteriores que se activarán de forma incremental una vez validada y consolidada la facturación, evitando dispersar el esfuerzo del equipo pequeño.",
        },
        {
          id: 5,
          question: "¿En qué se basa el modelo de negocio de la plataforma SaaS?",
          options: [
            "Un pago único de licencia perpetua",
            "Publicidad dentro de la aplicación",
            "Una suscripción mensual por empresa que varía según los usuarios activos",
            "Una comisión por cada factura emitida",
          ],
          correct: 2,
          explanation:
            "El modelo es una suscripción mensual por empresa cuyo coste escala con el número de usuarios activos; es el modelo típico del SaaS porque genera ingresos recurrentes y crece con el uso del cliente. El pago único no encaja con software en la nube que evoluciona constantemente, la publicidad es propia de productos de consumo masivo (no B2B), y cobrar por factura emitida penalizaría el uso y desincentivaría al cliente a facturar en la plataforma.",
        },
        {
          id: 6,
          question: "¿Qué escala se utiliza para asignar los Puntos de Historia (Story Points)?",
          options: [
            "Escala lineal del 1 al 10",
            "Potencias de 2 (1, 2, 4, 8, 16)",
            "Escala de Fibonacci (1, 2, 3, 5, 8)",
            "Horas de trabajo estimadas",
          ],
          correct: 2,
          explanation:
            "Se usa la escala de Fibonacci (1, 2, 3, 5, 8) porque los saltos crecientes entre valores reflejan la incertidumbre: cuanto mayor es una historia, menos precisos somos al estimarla, y Fibonacci fuerza a elegir entre magnitudes claramente distintas en lugar de discutir diferencias mínimas. Una escala lineal daría una falsa sensación de precisión, y estimar en horas es justamente lo que se evita, porque el tiempo depende de quién programe y mezcla tamaño con velocidad individual.",
        },
        {
          id: 7,
          question: "¿Por qué no se estima el esfuerzo en horas?",
          options: [
            "Porque las horas no se pueden medir",
            "Porque el tiempo es subjetivo y depende de quién programe",
            "Porque Scrum lo prohíbe explícitamente",
            "Porque el cliente no entiende las horas",
          ],
          correct: 1,
          explanation:
            "No se estima en horas porque el tiempo es subjetivo: una misma tarea le lleva más o menos según la experiencia de cada desarrollador. Los Story Points miden esfuerzo, complejidad y riesgo de forma relativa (comparando historias entre sí), lo que produce estimaciones más estables del equipo. No es que las horas no se puedan medir ni que Scrum lo prohíba formalmente; y aunque el cliente entienda las horas, ese no es el motivo: el problema es la fiabilidad de la estimación.",
        },
        {
          id: 8,
          question:
            "¿Qué técnica de estimación consiste en que los desarrolladores voten a la vez con cartas el peso de cada historia?",
          options: ["Planning Poker", "T-shirt sizing", "Delphi", "Puntos de función"],
          correct: 0,
          explanation:
            "El Planning Poker consiste en que todo el equipo vota simultáneamente con cartas (normalmente valores Fibonacci) el tamaño de cada historia; al mostrarlas a la vez se evita el sesgo de anclaje, y si hay mucha dispersión se debate y se vuelve a votar hasta el consenso. El T-shirt sizing usa tallas (S/M/L) de forma más gruesa, el método Delphi se basa en rondas anónimas de expertos, y los Puntos de Función son una métrica de tamaño funcional que se calcula, no se vota.",
        },
        {
          id: 9,
          question: "¿Cuál es la duración fija de cada Sprint del proyecto?",
          options: ["1 semana", "2 semanas", "1 mes", "3 meses"],
          correct: 1,
          explanation:
            "Cada Sprint dura 2 semanas fijas, un ritmo habitual en Scrum que equilibra dos cosas: es lo bastante corto para obtener feedback frecuente y reaccionar a los cambios, pero lo bastante largo para completar historias con valor entregable. Sprints de 1 semana generarían demasiada sobrecarga de ceremonias, y de 1 o 3 meses se alejarían del ciclo corto de inspección y adaptación que da agilidad al proyecto.",
        },
        {
          id: 10,
          question: "¿En qué formato se escriben los Criterios de Aceptación de las historias de usuario?",
          options: [
            "UML",
            "Gherkin (Dado/Cuando/Entonces)",
            "Pseudocódigo",
            "Diagramas de flujo",
          ],
          correct: 1,
          explanation:
            "Los criterios de aceptación se escriben en Gherkin, con la estructura Dado (contexto) / Cuando (acción) / Entonces (resultado esperado), porque describe el comportamiento en lenguaje natural estructurado que entienden tanto negocio como desarrollo y que además es directamente automatizable en pruebas. UML sirve para modelar estructura y comportamiento del sistema, no criterios de aceptación; el pseudocódigo y los diagramas de flujo describen algoritmos, no condiciones de aceptación de una historia.",
        },
        {
          id: 11,
          question: "¿Qué diagrama UML se usa para estructurar los datos del MVP antes de programar?",
          options: [
            "Diagrama de secuencia",
            "Diagrama de casos de uso",
            "Diagrama de clases",
            "Diagrama de despliegue",
          ],
          correct: 2,
          explanation:
            "Se emplea el diagrama de clases porque es el que modela la estructura estática de los datos: las entidades (Organización, Ítem, Factura), sus atributos y las relaciones entre ellas, que es justo lo que el equipo necesita fijar antes de programar. El diagrama de secuencia modela la interacción temporal entre objetos, el de casos de uso las interacciones actor-sistema, y el de despliegue la distribución física en servidores; ninguno describe la estructura de datos.",
        },
        {
          id: 12,
          question: "¿Cuáles son las tres entidades clave del modelo conceptual del MVP?",
          options: [
            "Usuario, Rol y Permiso",
            "Organización, Ítem y Factura",
            "Cliente, Producto y Pedido",
            "Empresa, Empleado y Suscripción",
          ],
          correct: 1,
          explanation:
            "Las tres entidades son Organización (la empresa cliente y sus datos), Ítem (cada producto o servicio con su precio base) y Factura (que agrupa ítems, aplica el IVA y calcula el total). Son el núcleo mínimo para que funcione la facturación. Las demás combinaciones (usuarios/roles, cliente/producto/pedido, empresa/empleado/suscripción) describen conceptos que existen alrededor del sistema, pero no son el modelo de datos central que el MVP necesita para emitir facturas.",
        },
        {
          id: 13,
          question: "¿Qué porcentaje de IVA aplica el sistema en las pruebas de cálculo?",
          options: ["10%", "16%", "21%", "4%"],
          correct: 2,
          explanation:
            "El sistema aplica el 21%, que es el tipo general del IVA (España/Andorra usan el 21% como tipo estándar en el contexto del ejercicio), y es el valor con el que se validan los cálculos de subtotal, impuesto y total. Los tipos del 10% y el 4% corresponden a tipos reducido y superreducido de ciertos bienes, y el 16% no es un tipo vigente en este contexto; el ejercicio verifica explícitamente el 21% sobre el subtotal.",
        },
        {
          id: 14,
          question:
            "En el ejemplo, si se seleccionan ítems por 10€ y 20€, el sistema muestra un subtotal de 30€ y un impuesto de 6.30€. ¿Cuál es el total?",
          options: ["30.00€", "36.30€", "36.00€", "6.30€"],
          correct: 1,
          explanation:
            "El total es 36.30€, resultado de sumar el subtotal (30€) más el IVA del 21% sobre ese subtotal (30 × 0,21 = 6.30€). La opción 30.00€ ignora el impuesto, 36.00€ correspondería a un IVA mal calculado, y 6.30€ es únicamente la cuota del impuesto, no el total a pagar. Este escenario es precisamente el criterio de aceptación 'Calcular correctamente la factura con el IVA'.",
        },
        {
          id: 15,
          question: "¿Qué significa DoD (Definition of Done)?",
          options: [
            "Definición de Requisitos",
            "Definición de Terminado (lista de control de calidad)",
            "Documento de Diseño",
            "Definición de Objetivos y Dependencias",
          ],
          correct: 1,
          explanation:
            "DoD es la Definición de Terminado: la lista de condiciones que una historia debe cumplir para considerarse realmente acabada (pasa las pruebas automáticas, funciona en web y móvil, los cálculos son correctos y el código está revisado y subido al repositorio). Es un acuerdo de calidad compartido por todo el equipo. No debe confundirse con los criterios de aceptación (que son específicos de cada historia): el DoD es transversal a todas. Las demás opciones son siglas inventadas o conceptos distintos.",
        },
        {
          id: 16,
          question:
            "¿Qué técnica estática (sin ejecutar código) se aplica para detectar fallos de lógica al momento?",
          options: [
            "Pruebas de estrés",
            "Revisión por pares (revisión de código)",
            "Pruebas unitarias automáticas",
            "Integración continua",
          ],
          correct: 1,
          explanation:
            "La revisión por pares (que otro desarrollador lea el código de su compañero) es una técnica estática porque analiza el código sin ejecutarlo, y permite detectar errores de lógica, malas prácticas o despistes en el momento. Las pruebas de estrés, las pruebas unitarias y la integración continua son técnicas dinámicas: todas requieren ejecutar el software para observar su comportamiento, por lo que no encajan en la categoría de análisis estático.",
        },
        {
          id: 17,
          question: "¿En qué consisten las pruebas de caja negra?",
          options: [
            "Probar el código por dentro, revisando su estructura interna",
            "Probar las funciones desde el punto de vista del usuario, sin ver el código",
            "Medir la cobertura de código",
            "Analizar el rendimiento del sistema bajo carga",
          ],
          correct: 1,
          explanation:
            "En la caja negra se prueba el sistema por su comportamiento externo: se dan unas entradas y se comprueba que las salidas son las esperadas, sin conocer ni mirar la implementación interna (como haría un usuario). Probar el código por dentro es caja blanca; medir la cobertura es una métrica asociada a la caja blanca; y analizar el rendimiento bajo carga es una prueba no funcional de estrés, no una técnica de diseño de casos de prueba funcional.",
        },
        {
          id: 18,
          question: "¿En qué consisten las pruebas de caja blanca?",
          options: [
            "Probar la interfaz sin conocer el código",
            "Probar el código por dentro, verificando su estructura interna",
            "Simular usuarios reales del negocio",
            "Comprobar los tiempos de respuesta",
          ],
          correct: 1,
          explanation:
            "La caja blanca prueba el código por dentro: conociendo su estructura interna, se diseñan casos que recorran sus caminos, ramas y condiciones (por ejemplo, forzar que se ejecute un determinado 'if'). Probar la interfaz sin conocer el código es caja negra; simular usuarios reales del negocio son pruebas de aceptación; y comprobar tiempos de respuesta es una prueba de rendimiento. La clave de la caja blanca es la visibilidad de la lógica interna.",
        },
        {
          id: 19,
          question:
            "¿Qué horizonte de planificación de Scrum corresponde al medio plazo (3 a 6 meses)?",
          options: [
            "Horizonte de Iteración (Sprint)",
            "Horizonte de Release (Lanzamiento)",
            "Horizonte de Daily",
            "Horizonte de Producto",
          ],
          correct: 1,
          explanation:
            "El Horizonte de Release (Lanzamiento) es la planificación a medio plazo (3-6 meses) en la que se estima cuántos Sprints harán falta para tener el MVP listo para el mercado. El Horizonte de Iteración es el corto plazo (lo que cabe en un Sprint de 2 semanas), el 'Daily' no es un horizonte de planificación sino la reunión diaria de coordinación, y 'Producto' se refiere a la visión global, no a la ventana de 3-6 meses.",
        },
        {
          id: 20,
          question:
            "¿Cómo se llama la reunión diaria de 15 minutos en la que el equipo se coordina?",
          options: ["Sprint Review", "Retrospectiva", "Daily (reunión diaria)", "Planning Poker"],
          correct: 2,
          explanation:
            "La Daily (Daily Scrum) es la reunión diaria de 15 minutos en la que el equipo sincroniza el trabajo del día y detecta impedimentos. La Sprint Review se hace al final del Sprint para mostrar el incremento al cliente; la Retrospectiva, también al cierre del Sprint, sirve para mejorar el proceso del equipo; y el Planning Poker es una técnica de estimación, no una ceremonia diaria. Solo la Daily tiene esa cadencia y duración.",
        },
        {
          id: 21,
          question:
            "¿Por qué se descarta la metodología tradicional (cascada) para este proyecto?",
          options: [
            "Porque no permite documentar el proyecto",
            "Porque exige definir todo al inicio y no entrega nada hasta el final",
            "Porque no es compatible con equipos grandes",
            "Porque no permite hacer pruebas",
          ],
          correct: 1,
          explanation:
            "La cascada se descarta porque es secuencial y rígida: obliga a fijar todos los requisitos al principio y no entrega software funcionando hasta el final, de modo que se tardaría cerca de un año en lanzar y, para entonces, los requisitos habrían cambiado o el presupuesto se habría agotado. No es cierto que no permita documentar (de hecho documenta mucho) ni que impida hacer pruebas; y el problema no es la incompatibilidad con equipos grandes, sino su falta de flexibilidad ante la incertidumbre del mercado.",
        },
        {
          id: 22,
          question:
            "¿Por qué se descarta el Proceso Unificado (UP) para este equipo de 5 desarrolladores?",
          options: [
            "Porque no es iterativo",
            "Porque genera demasiada documentación pesada y requiere roles muy especializados",
            "Porque no usa UML",
            "Porque no permite subir código a producción",
          ],
          correct: 1,
          explanation:
            "El UP se descarta porque, aunque es iterativo, está muy centrado en la arquitectura y genera abundante documentación formal desde el inicio, además de requerir roles especializados (analistas, arquitectos, etc.) que un equipo pequeño y multifuncional no puede cubrir sin ralentizarse. Es falso que no sea iterativo (sí lo es) o que no use UML (precisamente lo usa mucho); su inconveniente aquí es el peso del proceso frente a la agilidad que necesita el proyecto.",
        },
        {
          id: 23,
          question:
            "¿Cómo se cumple el 'Proceso de Definición de Requisitos' de la ISO/IEC 12207 dentro de Scrum?",
          options: [
            "Escribiendo un documento de requisitos exhaustivo al inicio",
            "Traduciendo las necesidades del cliente a un Product Backlog ordenado por prioridad",
            "Generando automáticamente el código desde modelos",
            "Realizando pruebas de aceptación con el cliente",
          ],
          correct: 1,
          explanation:
            "El proceso de definición de requisitos de la ISO/IEC 12207 se materializa en Scrum a través del Product Backlog: las necesidades del cliente se capturan como historias de usuario y se ordenan por prioridad, actualizándose de forma continua. Escribir un documento exhaustivo al inicio sería el enfoque tradicional que Scrum evita; generar código desde modelos es MDD (otro proceso distinto); y las pruebas de aceptación pertenecen a la fase de validación, no a la definición de requisitos.",
        },
        {
          id: 24,
          question: "¿Para qué sirven las herramientas de integración continua en el proyecto?",
          options: [
            "Para diseñar la interfaz de usuario",
            "Para mezclar y testear el código automáticamente y de forma constante, evitando fallos al final",
            "Para gestionar las suscripciones de los clientes",
            "Para escribir las historias de usuario",
          ],
          correct: 1,
          explanation:
            "La integración continua (CI) automatiza la fusión del código de los distintos desarrolladores y ejecuta las pruebas cada vez que se sube un cambio, de modo que los errores se detectan de inmediato y no se acumulan hasta el final (donde serían mucho más caros de corregir). No tiene que ver con diseñar la interfaz, gestionar suscripciones (eso es lógica de negocio) ni redactar historias de usuario (tarea del Product Owner): su propósito es la calidad e integración constante del código.",
        },
        {
          id: 25,
          question: "¿Qué prueba NO funcional se diseñó para el MVP?",
          options: [
            "Test de inserción de ítems",
            "Test de cálculo del IVA",
            "Test de carga concurrente (estrés) simulando 100 usuarios simultáneos",
            "Test de multi-usuario y roles",
          ],
          correct: 2,
          explanation:
            "El test de carga concurrente es una prueba no funcional porque no comprueba QUÉ hace el sistema, sino CÓMO responde bajo condiciones exigentes (rendimiento y escalabilidad con 100 usuarios simultáneos). El test de cálculo del IVA y el de inserción de ítems verifican funcionalidades concretas (requisitos funcionales), y el test de multi-usuario valida reglas de negocio y permisos, que también son funcionales. Solo la carga/estrés mide atributos de calidad como el rendimiento.",
        },
        {
          id: 26,
          question:
            "¿Cuál es el requisito de rendimiento exigido en la prueba de carga concurrente?",
          options: [
            "Responder en menos de 2 segundos sin bloquear ni mezclar datos",
            "Soportar exactamente 50 usuarios",
            "No superar el 50% de uso de CPU",
            "Responder en menos de 10 segundos",
          ],
          correct: 0,
          explanation:
            "El requisito de rendimiento fija que, con 100 usuarios de distintas empresas guardando facturas a la vez, el sistema responda en menos de 2 segundos sin bloquear la base de datos ni mezclar datos entre organizaciones. Es un requisito no funcional bien formulado porque es medible y verificable. Las otras cifras (50 usuarios, 50% de CPU, 10 segundos) no corresponden al criterio definido en la actividad.",
        },
        {
          id: 27,
          question: "¿Qué valida el Test de Multi-usuario?",
          options: [
            "Que el cálculo del IVA es correcto",
            "Que un empleado con rol 'emisor' puede crear facturas pero no borrar la organización ni cambiar la suscripción",
            "Que el sistema soporta 100 usuarios a la vez",
            "Que los ítems se guardan con su precio base",
          ],
          correct: 1,
          explanation:
            "El test de multi-usuario valida el control de acceso basado en roles: comprueba que un empleado con rol 'emisor' puede realizar sus tareas (crear facturas) pero no acciones administrativas reservadas (borrar la organización o cambiar la suscripción). Comprobar el IVA o el guardado de ítems son otros casos de prueba funcionales distintos, y soportar 100 usuarios a la vez es la prueba de carga; aquí lo que se verifica es la correcta separación de permisos.",
        },
        {
          id: 28,
          question: "¿De cuántos desarrolladores se compone el equipo del proyecto?",
          options: ["3", "5", "8", "10"],
          correct: 1,
          explanation:
            "El equipo lo forman 5 desarrolladores multifuncionales. Ese tamaño reducido es la razón de fondo de muchas decisiones del proyecto: hace ideal a Scrum (Dailies ágiles, poca burocracia), permite un Planning Poker en el que todos participan, y descarta procesos pesados como el UP que exigirían roles muy especializados. Las demás cifras no corresponden a la composición descrita en la actividad.",
        },
        {
          id: 29,
          question:
            "En la simulación de Planning Poker, ¿cuántos Puntos de Historia se asignan finalmente a la Historia-001?",
          options: ["3 puntos", "5 puntos", "8 puntos", "13 puntos"],
          correct: 1,
          explanation:
            "La historia se queda con 5 puntos. En la primera ronda hubo dispersión (tres '5', un '3' y un '8'); tras debatir —el del '8' advirtió del riesgo de sincronización del cálculo del IVA en web y móvil, y el del '3' creía que solo se calcularía al guardar— en la segunda votación todos coincidieron en '5' y se alcanzó el consenso. Este proceso de converger tras la discusión es justamente el objetivo del Planning Poker.",
        },
        {
          id: 30,
          question: "¿Cuál es la principal ventaja del enfoque modular basado en MVP?",
          options: [
            "Reducir el número de desarrolladores necesarios",
            "Validar la idea de negocio rápido y empezar a cobrar suscripciones antes de gastar todo el presupuesto",
            "Eliminar la necesidad de hacer pruebas",
            "Evitar el uso de la norma ISO/IEC 12207",
          ],
          correct: 1,
          explanation:
            "La gran ventaja del enfoque modular con MVP es salir pronto al mercado para validar la idea con clientes reales y empezar a generar ingresos por suscripción antes de agotar el presupuesto, ajustando el producto según el feedback. No reduce el equipo necesario ni elimina las pruebas (al contrario, se apoya en calidad continua) ni evita la ISO/IEC 12207 (que se integra deliberadamente): su valor está en reducir riesgo de mercado y financiero mediante entregas tempranas.",
        },
      ],
    },
    {
      id: 2,
      name: "Actividad 2",
      description: "Diseño de solución distribuida (SOA, ESB y calidad)",
      questions: [
        {
          id: 1,
          question:
            "¿Qué tipo de arquitectura distribuida se elige para conectar los tres sistemas del cliente?",
          options: [
            "Arquitectura monolítica",
            "Arquitectura Orientada a Servicios (SOA)",
            "Arquitectura cliente-servidor tradicional",
            "Arquitectura peer-to-peer",
          ],
          correct: 1,
          explanation:
            "Se elige SOA (Service Oriented Architecture) porque permite envolver cada sistema existente en un servicio con una interfaz común, de modo que se comunican por contratos sin conocer su implementación interna; es ideal para integrar sistemas heterogéneos (incluido un ERP legado). Una arquitectura monolítica uniría todo en un único bloque difícil de mantener, la cliente-servidor tradicional no resuelve la integración entre sistemas dispares, y la peer-to-peer, sin nodos centrales de coordinación, no aporta la mediación y traducción de protocolos que aquí se necesita.",
        },
        {
          id: 2,
          question: "¿Cuál es el cliente del escenario de esta actividad?",
          options: [
            "Una startup de facturación SaaS",
            "Logística Global XXI",
            "Un banco digital",
            "Una tienda de comercio electrónico",
          ],
          correct: 1,
          explanation:
            "El cliente es Logística Global XXI, una compañía logística digital cuyos tres sistemas (ERP de almacenes, sistema externo de envíos y app de clientes) funcionan de forma aislada. La startup de facturación SaaS corresponde a la Actividad 1, no a esta; el banco digital y la tienda de e-commerce no aparecen en el escenario. Identificar bien el dominio (logística) es clave porque condiciona los servicios que se diseñan (inventario, seguimiento de envío y pedidos).",
        },
        {
          id: 3,
          question: "¿Cuántos sistemas independientes tiene el cliente y cuáles son?",
          options: [
            "Dos: un ERP y una app móvil",
            "Tres: un ERP legado, un sistema externo de envíos y una app móvil/web de clientes",
            "Cuatro: ERP, CRM, envíos y app móvil",
            "Uno solo, un ERP monolítico",
          ],
          correct: 1,
          explanation:
            "Son tres sistemas desconectados: el ERP propio y antiguo de los almacenes, un sistema externo para el seguimiento de envíos y la aplicación móvil/web que atiende a los clientes. Ese aislamiento es el problema de fondo: genera datos duplicados e inconsistentes y obliga a cruzar información a mano. Las otras opciones (dos, cuatro con CRM, o uno monolítico) no coinciden con el escenario planteado.",
        },
        {
          id: 4,
          question: "¿Cómo se describe el ERP de almacenes del cliente?",
          options: [
            "Un sistema moderno basado en microservicios",
            "Un sistema legado (antiguo y difícil de modificar)",
            "Una API REST reciente",
            "Un servicio en la nube de terceros",
          ],
          correct: 1,
          explanation:
            "El ERP se describe como un sistema legado: antiguo, cerrado, con tecnología obsoleta y difícil de modificar. Por eso no se reemplaza (costaría mucho y es arriesgado) sino que se 'envuelve' con un servicio y un adaptador que traduce sus formatos, haciéndolo parecer moderno. No es un sistema de microservicios, ni una API REST reciente, ni un servicio en la nube de terceros: precisamente su carácter legado justifica toda la estrategia de integración.",
        },
        {
          id: 5,
          question:
            "¿Cuál es el principal problema de tener los tres sistemas completamente desconectados?",
          options: [
            "El coste de las licencias",
            "Datos duplicados e inconsistentes por falta de interoperabilidad",
            "La falta de personal técnico",
            "El exceso de documentación",
          ],
          correct: 1,
          explanation:
            "El problema principal es la falta de interoperabilidad, que provoca datos duplicados e inconsistentes: si un cliente compra en la app, el ERP del almacén no se entera en tiempo real y hay que trasladar los datos manualmente, con riesgo de vender sin stock real. El coste de licencias, la falta de personal o el exceso de documentación no son el foco del escenario; el verdadero cuello de botella es que los sistemas no se comunican entre sí.",
        },
        {
          id: 6,
          question:
            "¿Qué componente central de comunicación se propone para integrar los sistemas?",
          options: [
            "Una base de datos compartida",
            "Un Enterprise Service Bus (ESB)",
            "Un servidor FTP",
            "Un API Gateway de solo lectura",
          ],
          correct: 1,
          explanation:
            "Se propone un Enterprise Service Bus (ESB), que actúa como autopista central de comunicación: unifica protocolos, enruta y traduce los mensajes entre sistemas y expone una capa de APIs común. Una base de datos compartida acoplaría fuertemente los sistemas (todos dependerían de su esquema), un servidor FTP solo transferiría ficheros sin lógica de integración, y un API Gateway de solo lectura no permitiría orquestar las operaciones de escritura (compras, descuento de stock) que el flujo requiere.",
        },
        {
          id: 7,
          question: "¿Cómo se conecta el ERP antiguo al ESB?",
          options: [
            "Directamente mediante una API REST",
            "A través de un adaptador que traduce los formatos antiguos al estándar del bus",
            "Mediante acceso directo a su base de datos",
            "No se conecta, se reemplaza por completo",
          ],
          correct: 1,
          explanation:
            "El ERP se conecta al ESB mediante un adaptador que traduce sus formatos antiguos al formato estándar del bus, sin tocar el sistema legado. No puede conectarse por API REST directamente porque es antiguo y no la expone; acceder directo a su base de datos crearía un acoplamiento frágil y saltaría su lógica de negocio; y reemplazarlo por completo es justo lo que se quiere evitar por coste y riesgo. El adaptador es el patrón que 'moderniza' el legado sin reescribirlo.",
        },
        {
          id: 8,
          question:
            "Según el autor citado, SOA es una forma de hacer que programas distintos hablen entre ellos usando un formato común. ¿Quién es ese autor?",
          options: ["Thomas Erl", "Andrew Tanenbaum", "Ken Schwaber", "Martin Fowler"],
          correct: 0,
          explanation:
            "Es Thomas Erl, referente en SOA, quien plantea que la arquitectura orientada a servicios hace que programas antes aislados se comuniquen mediante un formato o 'idioma' común, evitando la duplicación de datos. Andrew Tanenbaum es la referencia en sistemas distribuidos (paso de mensajes), Ken Schwaber es cocreador de Scrum, y Martin Fowler es conocido por patrones de arquitectura y microservicios. Atribuir cada idea a su autor es importante para citar correctamente en el examen.",
        },
        {
          id: 9,
          question:
            "¿Qué autor aporta la teoría de sistemas distribuidos que defiende comunicar componentes mediante paso de mensajes?",
          options: ["Thomas Erl", "Andrew Tanenbaum", "Roy Fielding", "Barry Boehm"],
          correct: 1,
          explanation:
            "Andrew Tanenbaum es la referencia clásica en sistemas distribuidos, y su teoría sostiene que, para que un conjunto de sistemas sea flexible, los componentes deben comunicarse pasando mensajes (bajo acoplamiento), justo lo que hace SOA. Thomas Erl se asocia a SOA en concreto, Roy Fielding definió el estilo arquitectónico REST, y Barry Boehm es conocido por el modelo en espiral y COCOMO. La idea de 'paso de mensajes entre componentes autónomos' corresponde a Tanenbaum.",
        },
        {
          id: 10,
          question: "¿Cómo se diseñan los servicios en cuanto a la gestión del estado?",
          options: [
            "Con estado (stateful), guardando la sesión del usuario",
            "Sin estado (stateless): reciben datos, responden y se olvidan",
            "Guardando el estado en cookies del cliente",
            "Compartiendo el estado a través de la base de datos del ERP",
          ],
          correct: 1,
          explanation:
            "Los servicios se diseñan stateless: cada petición se procesa de forma independiente sin recordar las anteriores, lo que facilita el mantenimiento y, sobre todo, la escalabilidad horizontal (se pueden levantar múltiples instancias del servicio detrás de un balanceador sin preocuparse por dónde estaba la sesión). Ser stateful ataría cada usuario a una instancia concreta; guardar estado en cookies o en la BD del ERP reintroduciría acoplamiento y complejidad que precisamente se evitan.",
        },
        {
          id: 11,
          question: "¿Qué ventaja aporta que los servicios sean stateless (sin estado)?",
          options: [
            "Permiten guardar la sesión del usuario indefinidamente",
            "Facilitan el mantenimiento y permiten levantar los servicios en varios servidores si hay mucho tráfico",
            "Eliminan la necesidad de hacer pruebas",
            "Reducen la seguridad del sistema",
          ],
          correct: 1,
          explanation:
            "La ventaja clave del diseño stateless es la escalabilidad y el mantenimiento: como ninguna petición depende del estado guardado de otra, se pueden replicar los servicios en varios servidores y repartir la carga sin problemas de sincronización de sesión. No sirve para guardar la sesión indefinidamente (es justo lo contrario), no elimina la necesidad de pruebas, y no reduce la seguridad; su beneficio es soportar picos de tráfico de forma sencilla.",
        },
        {
          id: 12,
          question:
            "¿Qué estándar nativo de SOA se propone para unificar la seguridad (cifrado, firmas y control de acceso)?",
          options: ["OAuth 2.0", "WS-Security", "JWT", "TLS/SSL"],
          correct: 1,
          explanation:
            "Se propone WS-Security, un estándar de la familia de servicios web (SOAP) nativo del ecosistema SOA, que incorpora cifrado de mensajes, firmas digitales y control de acceso a nivel de mensaje, permitiendo asegurar las fronteras entre sistemas sin programar la seguridad tres veces. OAuth 2.0 es un protocolo de autorización, JWT es un formato de token, y TLS/SSL cifra el canal de transporte pero no el mensaje ni aporta firma a nivel de contenido; WS-Security es el que la actividad cita como estándar SOA.",
        },
        {
          id: 13,
          question: "¿Cuántos servicios se diseñan y cuáles son?",
          options: [
            "Dos: inventario y pedidos",
            "Tres: gestión de inventario, seguimiento de envío y gestión de pedidos",
            "Cuatro: inventario, envíos, pedidos y facturación",
            "Uno solo que envuelve todo el ERP",
          ],
          correct: 1,
          explanation:
            "Se diseñan tres servicios de negocio: gestión de inventario (envuelve el ERP y expone el stock), seguimiento de envío (unifica las APIs externas de transporte) y gestión de pedidos (gestiona la creación y modificación de compras). Cada uno tiene alta granularidad y bajo acoplamiento. No son dos, ni cuatro con facturación (que no aparece en este escenario logístico), ni un único servicio monolítico: la separación en tres responsabilidades es intencionada para mantener la independencia.",
        },
        {
          id: 14,
          question: "¿Qué servicio envuelve al ERP y expone las operaciones de stock del almacén?",
          options: [
            "Servicio de gestión de pedidos",
            "Servicio de gestión de inventario",
            "Servicio de seguimiento de envío",
            "Servicio de autenticación",
          ],
          correct: 1,
          explanation:
            "El servicio de gestión de inventario es el que envuelve al ERP legado y expone las operaciones de stock como funciones de negocio, ocultando que por debajo hay un sistema antiguo. El de gestión de pedidos maneja las compras, el de seguimiento de envío unifica las APIs externas de transporte, y no hay un 'servicio de autenticación' entre los tres diseñados. La idea de 'envolver el ERP' apunta específicamente al inventario.",
        },
        {
          id: 15,
          question: "¿Qué granularidad tienen los servicios diseñados?",
          options: ["Baja", "Alta", "Media", "Nula"],
          correct: 1,
          explanation:
            "Los servicios tienen granularidad alta (son de grano grueso): cada uno encapsula un proceso de negocio completo (gestionar inventario, seguir un envío, tramitar un pedido) en lugar de exponer operaciones técnicas mínimas. Esto es coherente con SOA, donde interesan servicios orientados al negocio, reutilizables y con bajo acoplamiento. Una granularidad baja (grano fino) multiplicaría las llamadas y el acoplamiento; 'media' o 'nula' no describen el diseño planteado.",
        },
        {
          id: 16,
          question: "¿Qué nivel de acoplamiento se busca entre los servicios?",
          options: [
            "Acoplamiento fuerte para mayor rendimiento",
            "Acoplamiento mínimo (débil) para que las piezas sean independientes",
            "Dependencias circulares entre servicios",
            "Acoplamiento total con el ERP",
          ],
          correct: 1,
          explanation:
            "Se busca acoplamiento mínimo (débil): los servicios se comunican por contratos/interfaces y no conocen la implementación interna de los demás, así se puede cambiar o sustituir una pieza sin afectar al resto (por ejemplo, cambiar de ERP sin tocar la app). El acoplamiento fuerte y las dependencias circulares harían el sistema rígido y frágil, y acoplarse totalmente al ERP recrearía el problema original de sistemas dependientes entre sí.",
        },
        {
          id: 17,
          question: "¿Qué patrón se usa para coordinar el flujo de datos entre los servicios?",
          options: [
            "Coreografía descentralizada",
            "Orquestación mediante un motor de orquestación central",
            "Comunicación directa punto a punto",
            "Polling periódico",
          ],
          correct: 1,
          explanation:
            "Se usa la orquestación: un motor central dirige el flujo, llamando a los servicios en el orden correcto y coordinando la transacción de negocio completa (comprobar stock, descontar unidades, generar la etiqueta de envío, confirmar). En la coreografía cada servicio reacciona por su cuenta a eventos, sin un director; la comunicación punto a punto acoplaría los servicios entre sí; y el polling periódico sería ineficiente. La ventaja de la orquestación es el control centralizado del proceso y del manejo de errores.",
        },
        {
          id: 18,
          question:
            "Cuando un cliente realiza una compra, ¿cuál es el primer paso que ejecuta el motor de orquestación?",
          options: [
            "Generar la etiqueta de transporte",
            "Llamar al servicio de gestión de inventario para comprobar si hay stock",
            "Confirmar la compra y responder a la app",
            "Cobrar la suscripción al cliente",
          ],
          correct: 1,
          explanation:
            "El primer paso es consultar al servicio de gestión de inventario si hay stock, porque no tiene sentido continuar con el resto del proceso (descontar unidades, generar etiqueta, confirmar) si el producto no está disponible. Generar la etiqueta y confirmar la compra son pasos posteriores que dependen de que haya stock, y cobrar una suscripción pertenece al escenario de la Actividad 1, no a este flujo logístico de compra.",
        },
        {
          id: 19,
          question: "¿Por qué se elige la orquestación centralizada frente a otras opciones?",
          options: [
            "Porque es más barata de implementar",
            "Porque un componente central puede, si algo falla, cancelar los pasos anteriores y asegurar que los datos no queden inconsistentes",
            "Porque elimina la necesidad de un ESB",
            "Porque no requiere pruebas de integración",
          ],
          correct: 1,
          explanation:
            "La orquestación se elige por el control transaccional: al haber un componente central que gobierna todo el flujo, si un paso falla puede deshacer (compensar) los pasos anteriores y evitar que los datos queden en un estado inconsistente (por ejemplo, stock descontado sin envío generado). No se elige por ser más barata, no elimina el ESB (se apoya en él para comunicarse), y desde luego no evita las pruebas de integración, que siguen siendo necesarias.",
        },
        {
          id: 20,
          question:
            "¿Qué tipo de prueba se realiza en la fase de desarrollo sobre los métodos de cada servicio?",
          options: [
            "Pruebas de aceptación",
            "Pruebas unitarias",
            "Pruebas de sistema",
            "Pruebas de integración",
          ],
          correct: 1,
          explanation:
            "En la fase de desarrollo se hacen pruebas unitarias, que validan de forma aislada los métodos y funciones de cada servicio antes de desplegarlo, detectando errores lo antes posible y de forma barata. Las pruebas de integración llegan después (comunicación entre servicios por el ESB), las de sistema evalúan el conjunto en condiciones reales, y las de aceptación se hacen con usuarios de negocio en preproducción. La unidad es el nivel más bajo y temprano de la pirámide de pruebas.",
        },
        {
          id: 21,
          question:
            "¿Qué tipo de prueba verifica la comunicación de los servicios a través del ESB y la traducción de protocolos?",
          options: [
            "Pruebas unitarias",
            "Pruebas de integración",
            "Pruebas de aceptación",
            "Pruebas de caja blanca",
          ],
          correct: 1,
          explanation:
            "Las pruebas de integración se realizan en la fase de ensamblaje y verifican que los servicios se comunican correctamente a través del ESB, que la traducción de protocolos funciona y que los datos fluyen sin perderse entre interfaces. Las unitarias prueban componentes aislados (no su comunicación), las de aceptación validan requisitos con usuarios reales, y la caja blanca es una técnica de diseño de casos según la estructura interna, no un nivel de prueba centrado en la integración.",
        },
        {
          id: 22,
          question:
            "¿Qué tipo de prueba simula condiciones reales e incluye pruebas de rendimiento, carga y estrés?",
          options: [
            "Pruebas unitarias",
            "Pruebas de sistema",
            "Pruebas de integración",
            "Pruebas de humo",
          ],
          correct: 1,
          explanation:
            "Las pruebas de sistema evalúan el producto completo en la fase de despliegue, simulando condiciones reales de uso, e incluyen pruebas no funcionales de rendimiento, carga y estrés (por ejemplo, muchas peticiones simultáneas contra el bus). Las unitarias y de integración se centran en componentes o sus conexiones, y las pruebas de humo son una comprobación rápida y superficial de que lo básico funciona tras un despliegue, no una evaluación completa bajo carga.",
        },
        {
          id: 23,
          question: "¿Qué pruebas se realizan con usuarios reales del negocio en preproducción?",
          options: [
            "Pruebas de aceptación",
            "Pruebas unitarias",
            "Pruebas de caja blanca",
            "Pruebas de regresión",
          ],
          correct: 0,
          explanation:
            "Las pruebas de aceptación se realizan en preproducción con usuarios reales del negocio para validar que el sistema cumple los requisitos y resuelve sus necesidades (responden a '¿es el producto que necesitamos?'). Las unitarias y de caja blanca las ejecuta el equipo técnico sobre el código, y las de regresión comprueban que cambios nuevos no rompen lo existente; ninguna de esas se define por la participación de usuarios de negocio, que es la seña de las de aceptación.",
        },
        {
          id: 24,
          question:
            "En la prueba de caja negra del servicio de inventario se consulta un producto inexistente { id_producto: 'Ninguno' }. ¿Qué resultado se espera?",
          options: [
            "Que devuelva stock 0",
            "Que rechace la petición con un mensaje de error y código HTTP 404",
            "Que cree el producto automáticamente",
            "Que devuelva un error HTTP 500",
          ],
          correct: 1,
          explanation:
            "Se espera que el servicio interprete correctamente la entrada inválida y responda con un error controlado 'artículo no encontrado' y código HTTP 404 (recurso no existente). Devolver stock 0 sería incorrecto porque el producto no existe (no es que tenga cero unidades); crearlo automáticamente sería un efecto indeseado; y un HTTP 500 indicaría un fallo interno del servidor, no una petición sobre un recurso inexistente. La caja negra valida ese comportamiento externo sin mirar el código.",
        },
        {
          id: 25,
          question: "¿Qué comprueba la prueba de caja blanca diseñada para el servicio de inventario?",
          options: [
            "Que la interfaz responde con HTTP 404 ante datos inválidos",
            "Que se ejecuta un condicional interno al consultar un producto con stock por debajo del mínimo",
            "Que el sistema soporta muchos usuarios simultáneos",
            "Que los usuarios reales validan el sistema",
          ],
          correct: 1,
          explanation:
            "La prueba de caja blanca verifica la lógica interna: al consultar un producto que existe pero cuyo stock está por debajo del mínimo, se comprueba que efectivamente se ejecuta el bloque condicional previsto para ese caso. Responder 404 ante datos inválidos es la prueba de caja negra (comportamiento externo), soportar muchos usuarios es una prueba de carga, y que usuarios reales validen el sistema es aceptación; solo la caja blanca se define por comprobar caminos y condiciones del código.",
        },
        {
          id: 26,
          question:
            "En las reflexiones finales, ¿qué arquitectura alternativa se propone como mejora sobre el ESB síncrono?",
          options: [
            "Una arquitectura monolítica",
            "Una arquitectura basada en eventos (asíncrona)",
            "Una arquitectura cliente-servidor",
            "Una arquitectura de tres capas",
          ],
          correct: 1,
          explanation:
            "Como evolución se propone una arquitectura basada en eventos y asíncrona: en lugar de que el usuario espere a que todo el proceso termine (como en el flujo síncrono orquestado), la app lanza un evento y se libera, y el trabajo continúa en segundo plano. Volver a un monolito o a cliente-servidor sería un retroceso, y la arquitectura de tres capas es un patrón de organización interna que no resuelve el problema de la espera síncrona; el enfoque por eventos es el que aporta desacoplo temporal y resiliencia.",
        },
        {
          id: 27,
          question: "¿Cuál es la ventaja principal de una arquitectura basada en eventos y asíncrona?",
          options: [
            "El usuario lanza un evento y sigue navegando mientras el proceso se ejecuta en los servidores",
            "Elimina la necesidad de un ESB",
            "Reduce el número de servicios necesarios",
            "Hace innecesarias las pruebas de carga",
          ],
          correct: 0,
          explanation:
            "La ventaja principal es el desacoplo temporal: el usuario realiza una acción, la aplicación emite un evento y le devuelve el control de inmediato, mientras el procesamiento ocurre después en los servidores (mejor experiencia y mayor resiliencia ante caídas de sistemas externos). No elimina la necesidad de un mecanismo de mensajería/ESB ni reduce por sí misma el número de servicios, y desde luego no hace innecesarias las pruebas de carga: su beneficio es que el usuario no queda bloqueado esperando.",
        },
        {
          id: 28,
          question: "¿A qué se conecta la aplicación móvil y web en la solución basada en el ESB?",
          options: [
            "Directamente al ERP legado",
            "Directamente a las APIs externas de transporte",
            "A una capa de APIs unificada expuesta de forma segura por el propio ESB",
            "A la base de datos central compartida",
          ],
          correct: 2,
          explanation:
            "La app se conecta a una capa de APIs unificada que el propio ESB expone de forma segura, sin saber qué hay detrás. Así, la aplicación no necesita conocer los detalles del ERP ni de las APIs de transporte, y estos pueden cambiar sin afectarla. Conectarla directamente al ERP legado o a las APIs externas recrearía el acoplamiento que se quiere eliminar, y conectarla a una base de datos compartida rompería el encapsulamiento de cada servicio.",
        },
        {
          id: 29,
          question:
            "¿Qué beneficio aporta que los sistemas se comuniquen por contrato/interfaz?",
          options: [
            "Que se puede eliminar el ESB",
            "Que si un sistema cambia en el futuro, la transición es invisible para los demás sistemas",
            "Que se reduce el número de pruebas necesarias",
            "Que se elimina la necesidad de seguridad",
          ],
          correct: 1,
          explanation:
            "Comunicarse por contrato significa que cada sistema solo depende de la interfaz acordada, no de la implementación del otro; por eso, si mañana se sustituye el ERP por otro, mientras el nuevo cumpla el mismo contrato la transición es invisible para la app y los demás servicios. Esto no permite eliminar el ESB (que es quien media), no reduce las pruebas necesarias (habría que probar el nuevo componente), ni elimina la seguridad: su beneficio es la flexibilidad y evolución independiente de las piezas.",
        },
        {
          id: 30,
          question:
            "Con una arquitectura dirigida por eventos, si el sistema de un transportista externo se cae de madrugada, ¿qué ocurre con los pedidos?",
          options: [
            "Se pierden y hay que reintroducirlos a mano",
            "Se guardan en una cola segura y se procesan cuando el sistema vuelve a estar en línea",
            "Se rechazan y se avisa al cliente del error",
            "Se detiene todo el sistema hasta que vuelva el transportista",
          ],
          correct: 1,
          explanation:
            "En una arquitectura por eventos, los pedidos que no se pueden procesar de inmediato se almacenan en una cola segura de mensajes y se procesan automáticamente en cuanto el sistema del transportista vuelve a estar disponible, garantizando la continuidad del negocio. No se pierden ni hay que reintroducirlos, no se rechazan de golpe, y no se detiene el sistema completo: precisamente la mensajería asíncrona aporta tolerancia a fallos frente a caídas de sistemas externos.",
        },
      ],
    },
    {
      id: 3,
      name: "Banco de preguntas",
      description: "Test tipo examen de todos los temas",
      questions: [
        {
          id: 1,
          question: "Un objetivo esencial de SOA es…",
          options: [
            "Reemplazar componentes por clases.",
            "Aumentar el tamaño del código.",
            "Limitar la reutilización a un único proveedor.",
            "Facilitar interoperabilidad e integración.",
          ],
          correct: 3,
          explanation:
            "El objetivo esencial de SOA es facilitar la interoperabilidad e integración: permite que sistemas heterogéneos (distintas tecnologías y proveedores) se comuniquen mediante servicios con interfaces estándar. Las otras opciones son contrarias a su filosofía: SOA no sustituye componentes por clases (trabaja a mayor nivel de abstracción), no busca aumentar el código sino reutilizarlo, y precisamente promueve la reutilización abierta, no limitada a un único proveedor.",
        },
        {
          id: 2,
          question: "¿Por qué el software se considera un producto intangible?",
          options: [
            "Porque siempre se distribuye por Internet.",
            "Porque su valor radica en su diseño y lógica, no en soporte físico.",
            "Porque no requiere mantenimiento.",
            "Porque solo existe en la nube.",
          ],
          correct: 1,
          explanation:
            "El software es intangible porque su valor reside en el diseño, la lógica y el conocimiento que encierra, no en un soporte material; de esta propiedad se deriva otra clave: no se desgasta físicamente. No es intangible por distribuirse por Internet (puede venir en soportes físicos), ni porque no requiera mantenimiento (sí lo requiere, y mucho), ni porque solo exista en la nube (puede ejecutarse en local). Lo esencial es que es un producto lógico, no físico.",
        },
        {
          id: 3,
          question: "¿Qué relación existe entre un modelo y la realidad del sistema?",
          options: [
            "El modelo reproduce la realidad exacta sin omisiones.",
            "El modelo es más complejo que el sistema real.",
            "El modelo representa solo una parte del sistema desde una perspectiva concreta.",
            "El modelo y la realidad son equivalentes.",
          ],
          correct: 2,
          explanation:
            "Un modelo es una abstracción que representa solo una parte del sistema desde una perspectiva concreta, omitiendo deliberadamente los detalles irrelevantes para ese punto de vista; esa simplificación es justamente su utilidad. Por eso no reproduce la realidad exacta sin omisiones ni es equivalente a ella (sería tan complejo como el propio sistema y no ayudaría), y tampoco es más complejo que el sistema real: un modelo siempre es más simple que aquello que modela.",
        },
        {
          id: 4,
          question: "El Proceso Unificado (UP) se caracteriza principalmente por ser:",
          options: [
            "Secuencial y rígido, con fases que nunca se solapan.",
            "Iterativo e incremental, dirigido por casos de uso y centrado en la arquitectura.",
            "Una metodología exclusiva para prototipos académicos.",
            "Una norma ISO de procesos obligatoria.",
          ],
          correct: 1,
          explanation:
            "El UP es iterativo e incremental, dirigido por casos de uso y centrado en la arquitectura, y organiza el trabajo en fases (Inicio, Elaboración, Construcción y Transición) que sí se solapan. No es secuencial y rígido como la cascada, no es una metodología solo académica (se usa en la industria), y no es una norma ISO obligatoria, sino un marco de proceso de desarrollo. Sus tres señas de identidad son: casos de uso, arquitectura e iteraciones.",
        },
        {
          id: 5,
          question: "El Manifiesto Ágil prioriza:",
          options: [
            "Procesos y herramientas sobre individuos e interacciones.",
            "Documentación exhaustiva sobre software funcionando.",
            "Respuesta al cambio sobre seguir un plan rígido.",
            "Contratación con el cliente sobre colaboración.",
          ],
          correct: 2,
          explanation:
            "El Manifiesto Ágil valora la respuesta al cambio por encima de seguir un plan rígido, reconociendo que los requisitos evolucionan. Las otras opciones invierten los cuatro valores del manifiesto, que priorizan: individuos e interacciones sobre procesos y herramientas, software funcionando sobre documentación exhaustiva, y colaboración con el cliente sobre negociación de contratos. Cada opción incorrecta pone justo el término que el manifiesto sitúa en segundo lugar.",
        },
        {
          id: 6,
          question: "Las pruebas de regresión se utilizan principalmente para:",
          options: [
            "Medir el tiempo de compilación.",
            "Comprobar que nuevas modificaciones no rompen funcionalidades existentes.",
            "Diseñar la arquitectura del sistema.",
            "Asegurar la usabilidad de la interfaz gráfica.",
          ],
          correct: 1,
          explanation:
            "Las pruebas de regresión comprueban que los cambios recientes (nuevas funciones o correcciones) no han roto funcionalidades que antes funcionaban; por eso se re-ejecutan pruebas ya existentes tras cada modificación, y encajan de forma natural con la integración continua. No miden tiempos de compilación (eso es una métrica de build), no sirven para diseñar arquitectura, y la usabilidad se evalúa con otro tipo de pruebas específicas de experiencia de usuario.",
        },
        {
          id: 7,
          question: "¿Qué es un sistema distribuido según la definición del material?",
          options: [
            "Un único ordenador con múltiples procesos paralelos.",
            "Un modelo de programación para algoritmos concurrentes.",
            "Un sistema operativo con soporte para procesos remotos.",
            "Un conjunto de componentes autónomos que aparecen como un sistema único para el usuario.",
          ],
          correct: 3,
          explanation:
            "Un sistema distribuido es un conjunto de componentes autónomos, ubicados en máquinas distintas, que se coordinan y se presentan al usuario como un único sistema coherente (transparencia). Un solo ordenador con procesos paralelos no es distribuido (no hay reparto entre máquinas), un modelo de programación concurrente es una técnica y no un sistema, y un sistema operativo con procesos remotos es una pieza concreta, no la definición general. La clave es 'componentes autónomos que parecen uno solo'.",
        },
        {
          id: 8,
          question:
            "En una arquitectura orientada a servicios, un servicio software se caracteriza por…",
          options: [
            "Ser un componente con estado permanente.",
            "Exponer una interfaz pública, explícita y accesible.",
            "Requerir depender de la plataforma en la que se ejecuta.",
            "Necesitar ejecutarse siempre en el lado servidor.",
          ],
          correct: 1,
          explanation:
            "Un servicio SOA se caracteriza por exponer una interfaz pública, explícita y accesible, independiente de la plataforma, que otros consumidores invocan sin conocer su implementación. Lo habitual es que sea stateless (no de estado permanente), que sea independiente de la plataforma (no dependiente de ella), y no está obligado a ejecutarse siempre en el servidor. La interfaz bien definida y accesible es lo que permite el bajo acoplamiento y la reutilización.",
        },
        {
          id: 9,
          question: "La portabilidad se refiere a:",
          options: [
            "Capacidad de recuperarse ante fallos.",
            "Facilidad para aprender a usar el sistema.",
            "Capacidad de ejecutarse en distintos entornos con cambios mínimos.",
            "Uso eficiente de CPU y memoria.",
          ],
          correct: 2,
          explanation:
            "La portabilidad es la capacidad del software de ejecutarse en distintos entornos o plataformas con cambios mínimos o nulos. Las otras opciones describen atributos de calidad diferentes del modelo ISO/IEC 25010: la recuperación ante fallos es fiabilidad (tolerancia a fallos), la facilidad de aprendizaje es usabilidad, y el uso eficiente de CPU y memoria es eficiencia de desempeño. Conviene distinguir bien cada característica de calidad.",
        },
        {
          id: 10,
          question: "¿Cuál es la característica más importante de un modelo?",
          options: [
            "Que incluya todos los detalles del sistema.",
            "Que permita ocultar la complejidad mediante abstracción.",
            "Que siempre se represente en UML.",
            "Que sea equivalente al código fuente.",
          ],
          correct: 1,
          explanation:
            "La característica esencial de un modelo es la abstracción: ocultar la complejidad y quedarse solo con lo relevante para un propósito. Incluir todos los detalles contradice la idea de modelar (sería tan complejo como el sistema real), no tiene por qué representarse siempre en UML (UML es una notación entre otras), y no es equivalente al código fuente (un modelo está a mayor nivel de abstracción). Modelar es simplificar para entender.",
        },
        {
          id: 11,
          question: "La verificación en el desarrollo de software responde a la pregunta:",
          options: [
            "¿Estamos construyendo el producto correctamente?",
            "¿Es este el producto que el usuario necesita?",
            "¿Estamos listos para la fase de mantenimiento?",
            "¿Se han cumplido los estándares ISO?",
          ],
          correct: 0,
          explanation:
            "La verificación responde a '¿estamos construyendo el producto correctamente?', es decir, si el software cumple su especificación y está bien construido. No debe confundirse con la validación, que responde a '¿es este el producto que el usuario necesita?' (opción 2). Las otras dos opciones no corresponden ni a verificación ni a validación: la preparación para el mantenimiento y el cumplimiento de estándares ISO son cuestiones distintas del par verificación/validación.",
        },
        {
          id: 12,
          question: "En un diagrama de casos de uso, un actor representa:",
          options: [
            "Una entidad externa (persona u otro sistema) que interactúa con el sistema.",
            "Una clase en la base de datos.",
            "Un proceso batch interno del software.",
            "Un módulo interno del sistema.",
          ],
          correct: 0,
          explanation:
            "En un diagrama de casos de uso, un actor es una entidad externa al sistema (una persona con un rol, o incluso otro sistema) que interactúa con él desde fuera de sus límites. No es una clase de la base de datos (eso se modela en el diagrama de clases), ni un proceso interno, ni un módulo del sistema: por definición, el actor está fuera de la frontera del sistema y representa a quién o qué lo usa.",
        },
        {
          id: 13,
          question: "¿Cuál de las siguientes es una propiedad no funcional típica?",
          options: [
            "Cálculo del total del carrito.",
            "Registro de nuevos usuarios.",
            "Tiempo de respuesta < 2 s bajo carga.",
            "Exportar informe a PDF.",
          ],
          correct: 2,
          explanation:
            "El 'tiempo de respuesta < 2 s bajo carga' es un requisito no funcional porque no describe una función concreta, sino una cualidad de cómo debe comportarse el sistema (rendimiento). Las otras tres opciones son requisitos funcionales: describen acciones que el sistema debe hacer (calcular el total, registrar usuarios, exportar a PDF). La distinción clave es funcional = qué hace; no funcional = cómo de bien lo hace (rendimiento, seguridad, usabilidad, etc.).",
        },
        {
          id: 14,
          question: "¿Cuál de las siguientes no es una fase del Proceso Unificado?",
          options: ["Inicio.", "Elaboración.", "Construcción.", "Retiro."],
          correct: 3,
          explanation:
            "Las cuatro fases del Proceso Unificado son Inicio, Elaboración, Construcción y Transición; 'Retiro' no es una de ellas. En Inicio se define el alcance, en Elaboración se estabiliza la arquitectura y se mitigan riesgos, en Construcción se desarrolla el grueso del sistema, y en Transición se despliega al usuario. El retiro o baja de un sistema pertenece al ciclo de vida general del software (por ejemplo en la ISO/IEC 12207), pero no es una fase del UP.",
        },
        {
          id: 15,
          question: "El formato más usado para escribir una historia de usuario es:",
          options: [
            "«El sistema debe…».",
            "«Como quiero para…».",
            "«Diagrama de clases…».",
            "«Dado/Cuando/Entonces…».",
          ],
          correct: 1,
          explanation:
            "El formato de historia de usuario es «Como [rol] quiero [objetivo] para [beneficio]», que capta quién, qué y para qué en lenguaje de negocio. «El sistema debe…» es el estilo de un requisito tradicional, «Diagrama de clases» es una técnica de modelado, y «Dado/Cuando/Entonces» (Gherkin) es el formato de los criterios de aceptación, no de la historia en sí. No hay que confundir la historia con sus criterios de aceptación.",
        },
        {
          id: 16,
          question: "En Scrum, el Product Backlog es:",
          options: [
            "Una lista priorizada de necesidades del producto.",
            "Una lista diaria de tareas técnicas.",
            "Un registro de bugs encontrados.",
            "Un cronograma fijo de entregas.",
          ],
          correct: 0,
          explanation:
            "El Product Backlog es la lista priorizada y viva de todas las necesidades y requisitos del producto, gestionada por el Product Owner. La lista diaria de tareas técnicas del Sprint es el Sprint Backlog (no el Product Backlog), un registro de bugs es solo una parte de lo que podría contener, y Scrum evita los cronogramas fijos de entregas porque planifica de forma adaptativa. La palabra clave es 'priorizada' y 'del producto', no del Sprint.",
        },
        {
          id: 17,
          question: "¿Cuál es un objetivo clave en el diseño de sistemas distribuidos?",
          options: [
            "Aumentar el tamaño del monolito.",
            "Ocultar la red al usuario mediante transparencia.",
            "Reemplazar el hardware por software.",
            "Eliminar la concurrencia.",
          ],
          correct: 1,
          explanation:
            "Un objetivo clave en sistemas distribuidos es la transparencia: ocultar al usuario la complejidad de la red y la distribución (dónde están los datos, cómo se comunican los nodos) para que el conjunto se perciba como un único sistema. Aumentar un monolito va en contra de distribuir, 'reemplazar hardware por software' no es un objetivo del diseño distribuido, y eliminar la concurrencia es imposible y no deseado: la concurrencia es inherente a los sistemas distribuidos, se gestiona, no se elimina.",
        },
        {
          id: 18,
          question: "En RPC, la comunicación es principalmente:",
          options: [
            "Asíncrona por defecto.",
            "Síncrona: el cliente espera la respuesta.",
            "Basada en eventos sin bloqueo.",
            "Sin necesidad de red.",
          ],
          correct: 1,
          explanation:
            "En RPC (Remote Procedure Call) la comunicación es principalmente síncrona: el cliente invoca un procedimiento remoto como si fuera local y queda bloqueado esperando la respuesta del servidor. No es asíncrona ni basada en eventos sin bloqueo por defecto (esos son otros modelos, como la mensajería), y desde luego necesita la red para comunicar cliente y servidor. La semántica de 'llamada bloqueante que espera resultado' es la esencia de RPC.",
        },
        {
          id: 19,
          question: "¿Cuál es el patrón de interacción fundamental en SOA?",
          options: [
            "Cliente–middleware–base de datos.",
            "Orquestador–proxy–adaptador.",
            "Proveedor–consumidor–registro.",
            "Cliente–servidor tradicional.",
          ],
          correct: 2,
          explanation:
            "El patrón fundamental en SOA es Proveedor–consumidor–registro: el proveedor publica su servicio en un registro (directorio), el consumidor lo busca allí y, una vez localizado, lo invoca. Este triángulo permite el descubrimiento dinámico y el bajo acoplamiento. Las otras opciones describen esquemas distintos (capas técnicas, componentes concretos o el clásico cliente-servidor), pero no el patrón de interacción publicar-descubrir-invocar propio de SOA.",
        },
        {
          id: 20,
          question: "¿Qué propiedad reduce el impacto de cambios internos entre servicios?",
          options: [
            "Acoplamiento débil.",
            "Acoplamiento fuerte.",
            "Intercambio de estructuras internas.",
            "Uso de dependencias circulares.",
          ],
          correct: 0,
          explanation:
            "El acoplamiento débil reduce el impacto de los cambios: si los servicios dependen solo del contrato/interfaz y no de la implementación interna del otro, un cambio interno en un servicio no obliga a modificar los demás. El acoplamiento fuerte, el intercambio de estructuras internas y las dependencias circulares producen el efecto contrario: propagan los cambios y hacen el sistema rígido y frágil. El bajo acoplamiento es un principio central de SOA.",
        },
        {
          id: 21,
          question: "¿Por qué los modelos pierden utilidad durante el desarrollo?",
          options: [
            "Porque están mal dibujados.",
            "Porque son incompatibles con la programación orientada a objetos.",
            "Porque se quedan desactualizados respecto al sistema real.",
            "Porque son demasiado formales.",
          ],
          correct: 2,
          explanation:
            "Los modelos pierden utilidad cuando se quedan desactualizados: el código evoluciona pero el modelo no se mantiene al día, así que deja de reflejar el sistema real y ya no sirve para razonar sobre él. No es por estar mal dibujados, ni por incompatibilidad con la POO (los modelos UML encajan perfectamente con ella), ni por ser demasiado formales; el problema práctico habitual es la falta de sincronización entre el modelo y la realidad que representa.",
        },
        {
          id: 22,
          question: "¿Cuál es uno de los objetivos fundamentales del MDD?",
          options: [
            "Abandonar por completo el código manual.",
            "Aumentar la complejidad del sistema.",
            "Generar automáticamente parte del sistema a partir de modelos.",
            "Sustituir todos los modelos por prototipos.",
          ],
          correct: 2,
          explanation:
            "El MDD (Model-Driven Development) busca elevar el nivel de abstracción para generar automáticamente parte del sistema a partir de los modelos, aumentando la productividad y la consistencia. No pretende abandonar por completo el código manual (siempre suele quedar código a medida), no busca aumentar la complejidad sino reducirla, y no sustituye los modelos por prototipos: al contrario, coloca los modelos en el centro del desarrollo como artefactos productivos.",
        },
        {
          id: 23,
          question: "La validación en pruebas de software significa:",
          options: [
            "Revisar el código con un analizador estático.",
            "Comprobar que el producto final cumple las necesidades reales del usuario.",
            "Ejecutar pruebas unitarias de bajo nivel.",
            "Medir la cobertura de código con herramientas.",
          ],
          correct: 1,
          explanation:
            "La validación comprueba que el producto final cumple las necesidades reales del usuario, respondiendo a '¿estamos construyendo el producto correcto?'. Se distingue de la verificación (conformidad con la especificación) y de técnicas concretas: revisar con un analizador estático o medir cobertura son formas de verificación, y las pruebas unitarias comprueban componentes de bajo nivel. La validación mira el resultado desde la perspectiva de las necesidades del usuario.",
        },
        {
          id: 24,
          question:
            "En Python, la librería más usada para escribir pruebas unitarias modernas es:",
          options: ["Unittest.", "Robot Framework.", "Pytest.", "Selenium."],
          correct: 2,
          explanation:
            "Pytest es hoy la librería más usada para pruebas unitarias modernas en Python por su sintaxis concisa (simples asserts), sus fixtures y su rico ecosistema de plugins. unittest es la alternativa estándar de la biblioteca (más verbosa y de estilo xUnit), Robot Framework se orienta a pruebas de aceptación con lenguaje de palabras clave, y Selenium automatiza la interacción con navegadores para pruebas de interfaz web, no pruebas unitarias.",
        },
        {
          id: 25,
          question: "¿Qué implica que el software «no se desgasta» físicamente?",
          options: [
            "Que no puede fallar.",
            "Que solo falla por hardware.",
            "Que sus fallos provienen de defectos de diseño/código o cambios mal gestionados.",
            "Que no necesita pruebas.",
          ],
          correct: 2,
          explanation:
            "Que el software no se desgaste implica que sus fallos no aparecen por el uso o el paso del tiempo (como una pieza mecánica), sino que provienen de defectos de diseño o de código latentes, o de cambios mal gestionados durante el mantenimiento. No significa que no pueda fallar (falla, pero por otras causas), ni que solo falle por hardware, ni que no necesite pruebas: de hecho, como los defectos están 'dentro', las pruebas son imprescindibles para descubrirlos.",
        },
        {
          id: 26,
          question:
            "¿Qué norma define las características de calidad de software en 8 dimensiones?",
          options: ["ISO/IEC 12207.", "ISO/IEC 25010.", "CMMI.", "IEEE 830."],
          correct: 1,
          explanation:
            "La ISO/IEC 25010 define el modelo de calidad del producto software en 8 características: adecuación funcional, eficiencia de desempeño, compatibilidad, usabilidad, fiabilidad, seguridad, mantenibilidad y portabilidad. La ISO/IEC 12207 trata de los procesos del ciclo de vida (no de las dimensiones de calidad del producto), CMMI es un modelo de madurez de procesos, e IEEE 830 es un estándar de especificación de requisitos. Solo la 25010 enumera esas 8 dimensiones de calidad.",
        },
        {
          id: 27,
          question: "¿Cuál es el rol de UML dentro del Proceso Unificado?",
          options: [
            "Sustituir toda la documentación escrita.",
            "Servir como notación estándar para modelar requisitos, diseño y arquitectura.",
            "Medir métricas de rendimiento del sistema en producción.",
            "Definir la estructura del código en un lenguaje de programación específico.",
          ],
          correct: 1,
          explanation:
            "En el UP, UML es la notación estándar para modelar el sistema en sus distintas vistas (requisitos con casos de uso, diseño con clases y secuencia, arquitectura, etc.) a lo largo de las iteraciones. No sustituye toda la documentación escrita (la complementa), no mide métricas de rendimiento en producción (es una notación de modelado, no de monitorización), y no está atado a un lenguaje de programación concreto: UML es independiente del lenguaje de implementación.",
        },
        {
          id: 28,
          question: "Una métrica de software es:",
          options: [
            "Una prueba automatizada que detecta errores.",
            "Una medida cuantitativa usada para evaluar atributos de procesos, productos o proyectos de software.",
            "Una herramienta de integración continua.",
            "Una metodología ágil para estimar historias.",
          ],
          correct: 1,
          explanation:
            "Una métrica de software es una medida cuantitativa que permite evaluar atributos de procesos, productos o proyectos (por ejemplo, líneas de código, complejidad ciclomática, cobertura o velocidad del equipo), útil para tomar decisiones basadas en datos. No es una prueba automatizada (eso detecta errores, no mide atributos), ni una herramienta de CI, ni una metodología de estimación; una métrica es, ante todo, una medida.",
        },
        {
          id: 29,
          question: "Una entrega incremental significa:",
          options: [
            "Publicar todo el producto únicamente al final.",
            "Entregar partes operativas del producto en ciclos cortos.",
            "Hacer prototipos desechables sin valor.",
            "Solo entregar documentación intermedia.",
          ],
          correct: 1,
          explanation:
            "La entrega incremental consiste en entregar partes funcionales y operativas del producto en ciclos cortos, aportando valor de forma progresiva y obteniendo feedback temprano. Publicar todo solo al final es el enfoque en cascada (lo contrario a incremental), los prototipos desechables no son entregas de producto real, y entregar solo documentación intermedia no aporta software funcionando. Lo distintivo del incremento es que cada entrega es utilizable.",
        },
        {
          id: 30,
          question: "¿Qué caracteriza a un sistema distribuido abierto?",
          options: [
            "Que todos sus componentes son propiedad del mismo proveedor.",
            "Que no permite integrar nuevos componentes.",
            "Que usa estándares públicos que permiten interoperabilidad.",
            "Que funciona únicamente con protocolos propietarios.",
          ],
          correct: 2,
          explanation:
            "Un sistema distribuido abierto se caracteriza por usar estándares públicos y bien definidos que permiten la interoperabilidad y la incorporación de componentes de distintos proveedores. Por eso las otras opciones describen justo lo contrario de 'abierto': depender de un único proveedor, no permitir integrar nuevos componentes o funcionar solo con protocolos propietarios son rasgos de un sistema cerrado. La apertura se define por los estándares comunes.",
        },
      ],
    },
  ],
};
