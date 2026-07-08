import type { Subject } from "../../types";

export const deontologia: Subject = {
  id: "deontologia-legislacion",
  name: "Deontología y Legislación",
  icon: "⚖️",
  topics: [
    {
      id: 1,
      name: "Actividad 1",
      description:
        "Brecha de seguridad y protección de datos (RGPD, caso NetContent S.A.)",
      questions: [
        {
          id: 1,
          question:
            "¿Cuál es el principal reglamento que aplica a la brecha de seguridad de NetContent S.A. sobre datos personales?",
          options: [
            "El Reglamento General de Protección de Datos (RGPD/GDPR)",
            "La norma ISO 9001",
            "El Código de Comercio",
            "La Ley de Propiedad Intelectual",
          ],
          correct: 0,
          explanation:
            "El marco principal es el RGPD (Reglamento General de Protección de Datos), que regula el tratamiento de datos personales y establece las obligaciones ante una brecha de seguridad. La ISO 9001 es de calidad, no de protección de datos, y las otras normas regulan ámbitos distintos (mercantil, propiedad intelectual).",
        },
        {
          id: 2,
          question:
            "¿En qué plazo máximo debe notificar la empresa la brecha a la autoridad de control?",
          options: [
            "En menos de 72 horas desde que tiene conocimiento de ella",
            "En un plazo de 30 días",
            "En menos de 24 horas",
            "En un plazo de 1 semana",
          ],
          correct: 0,
          explanation:
            "El RGPD obliga a notificar la brecha a la autoridad de control en menos de 72 horas desde que se tiene conocimiento del incidente. Es un plazo estricto porque los datos filtrados suponen un riesgo para los derechos de los usuarios; si se supera, la empresa debe justificar el retraso.",
        },
        {
          id: 3,
          question:
            "¿A qué autoridad debe notificar NetContent S.A. la brecha de seguridad en España?",
          options: [
            "A la Agencia Española de Protección de Datos (AEPD)",
            "A la Policía Nacional",
            "Al Banco de España",
            "A la Comisión Europea directamente",
          ],
          correct: 0,
          explanation:
            "La notificación debe dirigirse a la Agencia Española de Protección de Datos (AEPD), la autoridad de control competente en España, que dispone incluso de un formulario web para que el delegado de protección de datos comunique el incidente. No se notifica directamente a la policía, al Banco de España ni a la Comisión Europea.",
        },
        {
          id: 4,
          question:
            "¿A cuántos clientes afectó la fuga de datos confidenciales de NetContent S.A.?",
          options: ["500.000 clientes", "50.000 clientes", "5.000 clientes", "5 millones de clientes"],
          correct: 0,
          explanation:
            "Según el caso, se filtraron datos confidenciales de 500.000 clientes. El número de afectados es un dato que debe figurar en la notificación a la AEPD, porque ayuda a determinar el alcance y la gravedad de la brecha.",
        },
        {
          id: 5,
          question:
            "Si la empresa no notifica la brecha dentro de las 72 horas, ¿qué debe hacer?",
          options: [
            "Justificar el motivo del retraso",
            "Pagar automáticamente una multa fija",
            "Cerrar la empresa",
            "Nada, el plazo es orientativo",
          ],
          correct: 0,
          explanation:
            "El RGPD permite notificar más tarde de 72 horas solo si la empresa justifica las razones del retraso. El plazo no es meramente orientativo: superarlo sin justificación es un incumplimiento. La notificación tardía debe ir acompañada de la explicación del motivo.",
        },
        {
          id: 6,
          question: "¿Qué información debe incluir la notificación de la brecha a la AEPD?",
          options: [
            "Descripción de la brecha, categorías y número de afectados, contacto del DPO, posibles consecuencias y medidas adoptadas",
            "Únicamente el nombre del atacante",
            "Solo el balance económico de la empresa",
            "Exclusivamente una disculpa pública",
          ],
          correct: 0,
          explanation:
            "La notificación debe describir la brecha (qué categoría de datos se ve afectada y cuántos clientes), incluir el contacto del delegado de protección de datos (DPO), las posibles consecuencias (fraudes, estafas) y las medidas adoptadas para remediar y mitigar los efectos. Es un contenido reglado, no una simple disculpa.",
        },
        {
          id: 7,
          question:
            "Si en el momento de notificar la empresa no dispone de toda la información, ¿qué puede hacer?",
          options: [
            "Aportar la información específica de forma incremental (progresiva)",
            "Esperar a tenerlo todo aunque pasen semanas",
            "No notificar hasta cerrar la investigación",
            "Notificar solo verbalmente",
          ],
          correct: 0,
          explanation:
            "El RGPD permite una notificación incremental: si al comunicar la brecha no se dispone de todos los datos, se puede aportar la información adicional de forma progresiva. Así se cumple el plazo de 72 horas sin tener que esperar a cerrar toda la investigación.",
        },
        {
          id: 8,
          question: "¿Por qué es obligatoria la notificación de esta brecha concreta?",
          options: [
            "Porque el tipo de datos filtrados supone un riesgo para los derechos de los usuarios",
            "Porque la empresa quiere hacer publicidad",
            "Porque lo exige el Código Penal",
            "Porque no hay copias de seguridad",
          ],
          correct: 0,
          explanation:
            "La notificación es obligatoria porque los datos filtrados (críticos: contraseñas, tarjetas) suponen un riesgo para los derechos y libertades de las personas. El RGPD gradúa las obligaciones según el riesgo: cuando este es alto, la notificación a la autoridad e incluso a los afectados es preceptiva.",
        },
        {
          id: 9,
          question: "Además de a la AEPD, ¿a quién debe informar la empresa de la brecha?",
          options: [
            "A los clientes afectados",
            "A sus competidores",
            "A los medios de comunicación obligatoriamente",
            "A ninguna otra parte",
          ],
          correct: 0,
          explanation:
            "Cuando la brecha entraña un alto riesgo, la empresa también debe informar directamente a los clientes afectados. En este caso es obligatorio porque se filtraron datos críticos (contraseñas y tarjetas de crédito) con riesgo para la seguridad financiera de los usuarios.",
        },
        {
          id: 10,
          question: "¿Por qué debe NetContent S.A. informar directamente a los clientes afectados?",
          options: [
            "Porque se filtraron datos críticos (contraseñas y tarjetas) con alto riesgo para su seguridad financiera",
            "Porque los clientes lo han solicitado por escrito",
            "Porque lo exige la ISO 27001",
            "Porque la AEPD no puede hacerlo",
          ],
          correct: 0,
          explanation:
            "La comunicación a los afectados es obligatoria porque los datos filtrados son críticos (contraseñas y datos de tarjetas de crédito) y suponen un alto riesgo financiero. Informarles permite que tomen medidas de protección (cambiar contraseñas, vigilar movimientos), reduciendo el daño potencial.",
        },
        {
          id: 11,
          question: "¿Cómo debe ser la comunicación de la brecha a los clientes afectados?",
          options: [
            "Clara, transparente y fácil de entender",
            "Técnica y detallada, solo para expertos",
            "Confidencial y oculta",
            "Redactada en lenguaje jurídico complejo",
          ],
          correct: 0,
          explanation:
            "La comunicación a los usuarios debe ser clara y fácil de entender: informar de forma transparente sobre el ataque, qué datos concretos se filtraron, cómo contactar al DPO, las consecuencias y qué recomendaciones seguir para protegerse. Un lenguaje técnico o jurídico complejo impediría que el usuario comprenda el riesgo y actúe.",
        },
        {
          id: 12,
          question:
            "El derecho de ACCESO del RGPD permite al usuario…",
          options: [
            "Solicitar confirmación de si se tratan sus datos y saber cuáles se han filtrado",
            "Eliminar sus datos de los servidores",
            "Llevar sus datos a otra plataforma",
            "Modificar datos incorrectos",
          ],
          correct: 0,
          explanation:
            "El derecho de acceso permite al usuario pedir a la empresa que confirme si sus datos están siendo tratados y conocer qué datos se han visto afectados. La empresa debe facilitar sus datos personales, aunque no está obligada a revelar todos sus procesos internos. Eliminar datos es supresión, llevarlos es portabilidad y corregirlos es rectificación.",
        },
        {
          id: 13,
          question: "El derecho de SUPRESIÓN del RGPD permite al usuario…",
          options: [
            "Solicitar que sus datos se eliminen de los servidores de la empresa",
            "Acceder a la información sobre su tratamiento",
            "Oponerse al uso de sus datos",
            "Corregir datos erróneos",
          ],
          correct: 0,
          explanation:
            "El derecho de supresión (o 'derecho al olvido') permite al usuario solicitar que sus datos personales sean eliminados de los servidores de la empresa. Se diferencia del acceso (conocer el tratamiento), la oposición (que no se usen) y la rectificación (corregir errores).",
        },
        {
          id: 14,
          question: "El derecho de PORTABILIDAD del RGPD permite al usuario…",
          options: [
            "Obtener sus datos en un formato estructurado para trasladarlos a otra plataforma",
            "Eliminar sus datos definitivamente",
            "Impedir decisiones automatizadas",
            "Acceder al código fuente de la empresa",
          ],
          correct: 0,
          explanation:
            "El derecho de portabilidad permite al usuario obtener todos sus datos personales en un formato estructurado y reutilizable, para copiarlos en otra plataforma (por ejemplo, de la competencia). Facilita el control del usuario sobre sus datos y evita el 'secuestro' de la información por parte de una empresa.",
        },
        {
          id: 15,
          question: "El derecho de OPOSICIÓN del RGPD permite al usuario…",
          options: [
            "Solicitar que sus datos personales dejen de utilizarse (por ejemplo, para fines lucrativos)",
            "Copiar sus datos a otra empresa",
            "Corregir datos incorrectos",
            "Confirmar si se tratan sus datos",
          ],
          correct: 0,
          explanation:
            "El derecho de oposición permite al usuario solicitar que sus datos personales no se sigan usando, de modo que la empresa no pueda emplearlos, por ejemplo, para obtener beneficio económico o para analizarlos con ese fin. No es lo mismo que portar los datos (portabilidad) ni que corregirlos (rectificación).",
        },
        {
          id: 16,
          question: "El derecho de RECTIFICACIÓN del RGPD permite al usuario…",
          options: [
            "Modificar los datos que sean erróneos o incorrectos",
            "Eliminar todos sus datos",
            "Oponerse al tratamiento",
            "Trasladar sus datos a otra plataforma",
          ],
          correct: 0,
          explanation:
            "El derecho de rectificación (corrección) da al usuario la capacidad de modificar los datos personales que estén equivocados o sean inexactos. Garantiza que la información tratada sea correcta y actualizada; es distinto de suprimir, oponerse o portar los datos.",
        },
        {
          id: 17,
          question:
            "El derecho relativo a las DECISIONES AUTOMATIZADAS del RGPD permite al usuario…",
          options: [
            "Solicitar que sus datos no se utilicen para decisiones automatizadas",
            "Automatizar el borrado de sus datos",
            "Acceder a los algoritmos secretos de la empresa",
            "Portar sus datos automáticamente",
          ],
          correct: 0,
          explanation:
            "Este derecho permite al usuario solicitar que sus datos no se empleen en decisiones tomadas de forma totalmente automatizada (por ejemplo, perfilado o decisiones algorítmicas que le afecten). Protege a la persona frente a decisiones adoptadas sin intervención humana significativa.",
        },
        {
          id: 18,
          question:
            "¿Qué acciones legales pueden emprender los clientes contra NetContent S.A.?",
          options: [
            "Denunciar para que se sancione a la empresa y reclamar una indemnización por daños",
            "Únicamente escribir una queja informal",
            "Solo cambiar de proveedor",
            "No pueden emprender ninguna acción legal",
          ],
          correct: 0,
          explanation:
            "Los clientes pueden demandar/denunciar a la empresa para que las autoridades la sancionen si la investigación demuestra que la plataforma no tenía seguridad suficiente, y además pueden reclamar una indemnización si sus datos se han hecho públicos y han sufrido pérdidas económicas. Los derechos del RGPD son exigibles legalmente.",
        },
        {
          id: 19,
          question: "¿Cuándo tienen los clientes derecho a reclamar una indemnización?",
          options: [
            "Si sus datos personales se han hecho públicos y han perdido dinero por ello",
            "Siempre que reciban publicidad",
            "Solo si la empresa cierra",
            "Nunca, la indemnización no está prevista",
          ],
          correct: 0,
          explanation:
            "Los usuarios pueden reclamar una compensación si su información personal se ha hecho pública y, como consecuencia, han sufrido un perjuicio económico. La responsabilidad de la empresa surge cuando la brecha causa un daño real y demostrable a los afectados.",
        },
        {
          id: 20,
          question:
            "Según el RGPD, ¿qué figura es el proveedor de ciberseguridad que trata los datos por cuenta de NetContent S.A.?",
          options: [
            "Un encargado del tratamiento (data processor)",
            "El responsable del tratamiento",
            "La autoridad de control",
            "El delegado de protección de datos",
          ],
          correct: 0,
          explanation:
            "El proveedor que procesa datos por cuenta de la empresa es, según el RGPD, un encargado del tratamiento (data processor), y por ello debe cumplir varias obligaciones legales. El responsable del tratamiento es la empresa que decide sobre los datos (NetContent S.A.), y el DPO es la persona que supervisa el cumplimiento.",
        },
        {
          id: 21,
          question:
            "¿Cuál es una obligación clave del proveedor de ciberseguridad al detectar el incidente?",
          options: [
            "Informar inmediatamente a la empresa",
            "Notificar él mismo a la AEPD en nombre de la empresa",
            "Ocultar el incidente para no alarmar",
            "Publicarlo en redes sociales",
          ],
          correct: 0,
          explanation:
            "El encargado del tratamiento debe informar inmediatamente a la empresa (responsable) en cuanto detecta el incidente. Esto es crucial porque el responsable solo dispone de 72 horas para notificar a la AEPD; una comunicación rápida ayuda a cumplir el plazo legal y a reducir el impacto.",
        },
        {
          id: 22,
          question:
            "¿Por qué es tan importante que el proveedor informe rápidamente del incidente a la empresa?",
          options: [
            "Porque la empresa solo tiene 72 horas para notificar a la AEPD",
            "Porque el proveedor cobra por hora",
            "Porque así se evita pagar impuestos",
            "Porque la AEPD cierra los fines de semana",
          ],
          correct: 0,
          explanation:
            "La rapidez es clave porque el plazo de 72 horas para notificar a la AEPD empieza a contar desde que se conoce el incidente. Si el proveedor tarda en avisar, la empresa podría incumplir su obligación legal. Una notificación ágil permite cumplir los plazos y mitigar el impacto de la brecha.",
        },
        {
          id: 23,
          question:
            "¿Con qué tipo de información debe asistir el proveedor a la empresa durante la investigación?",
          options: [
            "Información técnica: registros del sistema (logs), informes de seguridad y evidencias del ataque",
            "Información publicitaria y de marketing",
            "Datos personales de sus propios empleados",
            "Su plan de negocio confidencial",
          ],
          correct: 0,
          explanation:
            "El proveedor debe asistir aportando información técnica como los registros del sistema (logs), informes de seguridad y las evidencias que permitan identificar cómo se produjo el ataque y qué datos se vieron afectados. Esta información ayuda a determinar el alcance de la brecha y los riesgos para los afectados.",
        },
        {
          id: 24,
          question:
            "¿Qué debe hacer el proveedor con la evidencia digital durante la investigación?",
          options: [
            "Conservarla y custodiarla correctamente, de forma confidencial, por si hay acciones legales futuras",
            "Eliminarla para liberar espacio",
            "Publicarla en su web",
            "Entregarla a la competencia",
          ],
          correct: 0,
          explanation:
            "El proveedor debe conservar y custodiar toda la evidencia digital de forma correcta y confidencial, tratándola conforme a la ley, por si en el futuro hubiera acciones legales. Preservar la integridad de las pruebas es esencial para las investigaciones y para proteger la privacidad de los afectados.",
        },
        {
          id: 25,
          question:
            "Si la investigación demuestra que la brecha se debió a negligencia del proveedor (no instalar actualizaciones, ignorar alertas…), ¿qué consecuencias afronta?",
          options: [
            "Puede ser demandado, obligado a indemnizar los daños e implementar medidas de seguridad adicionales",
            "No tiene ninguna responsabilidad",
            "Solo debe pedir disculpas",
            "Recibe una recompensa por colaborar",
          ],
          correct: 0,
          explanation:
            "Si la brecha se debió a negligencia del proveedor (por ejemplo, no aplicar parches, configuraciones inseguras o ignorar alertas), la empresa puede emprender acciones legales, reclamar una indemnización por los daños y exigirle implementar medidas de seguridad adicionales. El proveedor responde por incumplir sus obligaciones contractuales y legales.",
        },
        {
          id: 26,
          question:
            "¿Debe aplicarse el RGPD aunque la empresa esté fuera de la Unión Europea?",
          options: [
            "Sí, si trata datos de ciudadanos de la UE (principio de extraterritorialidad)",
            "No, el RGPD solo aplica a empresas europeas",
            "Solo si la empresa lo decide voluntariamente",
            "No, basta con la ley local",
          ],
          correct: 0,
          explanation:
            "El RGPD tiene alcance extraterritorial: se aplica a cualquier empresa que trate datos personales de ciudadanos de la UE, aunque esté establecida fuera de la Unión. Por eso NetContent S.A. debe cumplir el RGPD si procesa datos de usuarios europeos, independientemente de su ubicación.",
        },
        {
          id: 27,
          question:
            "¿Qué obliga el principio de «privacidad desde el diseño y por defecto» (privacy by design and by default)?",
          options: [
            "A integrar la protección de datos en el sistema desde el principio y con la configuración más protectora por defecto",
            "A pedir permiso al usuario solo al final del desarrollo",
            "A cifrar los datos únicamente si hay un ataque",
            "A eliminar todos los datos cada cierto tiempo",
          ],
          correct: 0,
          explanation:
            "La privacidad desde el diseño y por defecto exige que la empresa incorpore la protección de datos en el sistema desde el inicio del desarrollo y que la configuración por defecto sea la más protectora para el usuario. No es un añadido posterior: la protección debe estar 'de fábrica' en el diseño del sistema.",
        },
        {
          id: 28,
          question:
            "¿Qué es la Evaluación de Impacto en la Protección de Datos (DPIA)?",
          options: [
            "Un análisis que identifica y reduce los riesgos antes de desplegar sistemas que traten datos de alto riesgo",
            "Un informe económico anual de la empresa",
            "Una auditoría de la calidad del software",
            "Una encuesta de satisfacción de clientes",
          ],
          correct: 0,
          explanation:
            "La Evaluación de Impacto (DPIA, Data Protection Impact Assessment) es un análisis obligatorio cuando se van a tratar datos de alto riesgo: sirve para identificar y reducir esos riesgos antes de poner en marcha los sistemas. Es una medida preventiva del RGPD, no un informe financiero ni una auditoría de calidad.",
        },
        {
          id: 29,
          question:
            "Además del RGPD, ¿qué regulación de Estados Unidos deben tener en cuenta las plataformas globales?",
          options: [
            "La California Consumer Privacy Act (CCPA)",
            "La norma PCI-DSS",
            "El Código Penal español",
            "La ISO 9001",
          ],
          correct: 0,
          explanation:
            "La California Consumer Privacy Act (CCPA) regula la privacidad de los usuarios de California y es relevante porque las plataformas globales también operan en el mercado estadounidense. La PCI-DSS es un estándar de seguridad para datos de tarjetas (no una ley de privacidad general), y las otras opciones pertenecen a ámbitos distintos.",
        },
        {
          id: 30,
          question:
            "¿Qué estándar internacional es clave para gestionar la seguridad de la información mediante controles estructurados y gestión de riesgos?",
          options: [
            "ISO/IEC 27001",
            "PCI-DSS",
            "COBIT",
            "GDPR",
          ],
          correct: 0,
          explanation:
            "La ISO/IEC 27001 es el estándar de referencia para gestionar la seguridad de la información, definiendo controles de seguridad estructurados, gestión de riesgos y políticas de control de acceso. La PCI-DSS es específica para datos de tarjetas de pago, COBIT (junto con ITIL) se centra en el gobierno de TI, y el RGPD es una regulación legal, no un estándar técnico.",
        },
      ],
    },
    {
      id: 2,
      name: "Actividad 2",
      description:
        "Confidencialidad y responsabilidad profesional (caso Juan Pérez, LegalTech Solutions)",
      questions: [
        {
          id: 1,
          question:
            "¿Qué principios de responsabilidad profesional violó Juan Pérez al compartir información confidencial?",
          options: [
            "Integridad, confidencialidad y profesionalidad",
            "Transparencia, publicidad y rapidez",
            "Innovación, creatividad y flexibilidad",
            "Rentabilidad, eficiencia y crecimiento",
          ],
          correct: 0,
          explanation:
            "Juan Pérez vulneró los principios de integridad, confidencialidad y profesionalidad establecidos (también recogidos en el RGPD), al permitir que una persona no autorizada accediera a información de la empresa. Estos principios exigen tratar la información de forma segura y protegerla frente a accesos no autorizados.",
        },
        {
          id: 2,
          question:
            "Al compartir información con un competidor, ¿qué deber profesional incumplió Juan Pérez?",
          options: [
            "El deber de secreto profesional",
            "El deber de publicidad",
            "El deber de innovación",
            "El deber de rentabilidad",
          ],
          correct: 0,
          explanation:
            "Al filtrar información a un competidor, Juan Pérez incumplió el deber de secreto profesional y la obligación de proteger los activos sensibles de la empresa, además de no seguir las políticas y procedimientos de seguridad de la organización. El secreto profesional es una obligación central en muchas profesiones.",
        },
        {
          id: 3,
          question: "Desde el punto de vista penal, ¿cómo podría considerarse la conducta de Juan Pérez?",
          options: [
            "Espionaje industrial, según el Código Penal español",
            "Una simple falta administrativa",
            "Un delito de estafa bancaria",
            "Un incumplimiento fiscal",
          ],
          correct: 0,
          explanation:
            "Penalmente, su conducta podría considerarse espionaje industrial según el Código Penal español, porque reveló información confidencial y detalles técnicos de un software propiedad de la empresa sin autorización. No es una mera falta administrativa: afecta a secretos empresariales y a la propiedad intelectual.",
        },
        {
          id: 4,
          question: "Desde el punto de vista civil, ¿qué puede reclamar la empresa a Juan Pérez?",
          options: [
            "Una indemnización por los daños causados",
            "Una disculpa pública únicamente",
            "La devolución de su salario íntegro",
            "Nada, la vía civil no aplica",
          ],
          correct: 0,
          explanation:
            "En el plano civil, la empresa puede reclamar una indemnización por los daños: si la fuga de información provocó pérdidas económicas o la pérdida de una ventaja competitiva, Juan Pérez podría ser responsable de esas consecuencias. La responsabilidad civil busca reparar el perjuicio causado.",
        },
        {
          id: 5,
          question:
            "Además de las vías penal y civil, ¿qué otras consecuencias puede afrontar Juan Pérez?",
          options: [
            "Sanciones profesionales, como inhabilitación o expulsión de colegios profesionales",
            "Un ascenso en la empresa",
            "La obligación de dar una charla",
            "Ninguna consecuencia adicional",
          ],
          correct: 0,
          explanation:
            "Puede afrontar sanciones profesionales, ya que el secreto profesional es una obligación en muchas profesiones y su violación puede acarrear medidas disciplinarias, inhabilitación profesional o expulsión de asociaciones/colegios profesionales, según las circunstancias del caso.",
        },
        {
          id: 6,
          question:
            "¿Qué medida técnica ayuda a identificar quién accedió a la información y qué acciones realizó?",
          options: [
            "Los registros de auditoría (audit logs)",
            "Las campañas de marketing",
            "Las copias en papel",
            "Las redes sociales corporativas",
          ],
          correct: 0,
          explanation:
            "Los registros de auditoría (audit logs) mantienen un histórico de todas las actividades del sistema, lo que permite identificar quién accedió a la información y qué acciones se realizaron si ocurre un incidente. Son fundamentales para la trazabilidad y la rendición de cuentas.",
        },
        {
          id: 7,
          question:
            "¿Qué medida ayuda a evitar que los datos sensibles se transfieran, copien o compartan sin autorización?",
          options: [
            "El cifrado y las herramientas DLP (Data Loss Prevention)",
            "El uso de contraseñas simples",
            "La publicación de los datos en abierto",
            "La eliminación de los registros de acceso",
          ],
          correct: 0,
          explanation:
            "La información confidencial debe cifrarse y protegerse con herramientas DLP (Prevención de Pérdida de Datos), que impiden que los datos sensibles se transfieran, copien o compartan sin autorización. El cifrado protege el contenido y las DLP controlan su movimiento fuera de los canales permitidos.",
        },
        {
          id: 8,
          question: "¿Qué medida organizativa debería haber ofrecido LegalTech Solutions a sus empleados?",
          options: [
            "Formación regular en seguridad de la información y obligaciones de confidencialidad",
            "Más días de vacaciones",
            "Acceso libre a toda la información de la empresa",
            "Bonificaciones por compartir datos",
          ],
          correct: 0,
          explanation:
            "La empresa debería proporcionar formación regular sobre seguridad de la información, obligaciones de confidencialidad y los riesgos de manejar datos sensibles. Muchos incidentes tienen su origen en el factor humano, por lo que concienciar y formar a los empleados es una medida preventiva esencial.",
        },
        {
          id: 9,
          question:
            "Respecto al acceso a la información, ¿qué deberían hacer los empleados de LegalTech Solutions?",
          options: [
            "Firmar acuerdos de confidencialidad y acceder solo a la información necesaria para su puesto",
            "Tener acceso total a todos los sistemas",
            "Compartir sus credenciales con los compañeros",
            "Guardar la información en dispositivos personales",
          ],
          correct: 0,
          explanation:
            "Todos los empleados deberían firmar acuerdos de confidencialidad y acceder únicamente a la información necesaria para sus responsabilidades específicas (principio de mínimo privilegio). Limitar el acceso reduce la superficie de riesgo y la posibilidad de fugas no autorizadas.",
        },
        {
          id: 10,
          question:
            "¿Qué impacto principal tiene la fuga de información en la reputación de LegalTech Solutions?",
          options: [
            "La pérdida de confianza de los clientes, que la perciben como una empresa insegura",
            "Un aumento inmediato de las ventas",
            "Una mejora de su imagen pública",
            "Ningún impacto reputacional",
          ],
          correct: 0,
          explanation:
            "La fuga daña gravemente la reputación: los clientes pueden percibir a LegalTech Solutions como una empresa insegura, incapaz de proteger información sensible, lo que erosiona la confianza y dificulta captar nuevos clientes. En el sector legal y tecnológico, la confidencialidad es un activo reputacional crítico.",
        },
        {
          id: 11,
          question:
            "¿Qué relación comercial concreta puede perder LegalTech Solutions a causa de la fuga?",
          options: [
            "La relación con TechInnovate",
            "La relación con la AEPD",
            "La relación con sus proveedores de limpieza",
            "La relación con sus antiguos empleados",
          ],
          correct: 0,
          explanation:
            "La empresa puede perder la relación con TechInnovate, ya que la fuga dio acceso a un competidor a información valiosa (software no patentado y estrategia de negocio). La divulgación pública del incidente, además, genera dudas sobre la eficacia de sus controles internos.",
        },
        {
          id: 12,
          question:
            "Como medida de mitigación, ¿qué debería hacer la empresa respecto a Juan Pérez?",
          options: [
            "Finalizar la relación con él y emprender acciones legales para demostrar tolerancia cero",
            "Ascenderlo para calmar la situación",
            "Ignorar lo sucedido",
            "Aumentarle el acceso a los sistemas",
          ],
          correct: 0,
          explanation:
            "La empresa debería terminar la relación con Juan Pérez y emprender acciones legales, demostrando que no tolera las brechas de confidencialidad ni las faltas a la ética profesional. Actuar con firmeza envía un mensaje claro tanto interna como externamente y ayuda a proteger la reputación.",
        },
        {
          id: 13,
          question:
            "Para mostrar transparencia durante la investigación, ¿qué debería hacer la empresa?",
          options: [
            "Cooperar y aportar todas las evidencias disponibles, como logs y registros de seguridad",
            "Ocultar los registros del sistema",
            "Negar el incidente públicamente",
            "Destruir las pruebas",
          ],
          correct: 0,
          explanation:
            "La empresa debe cooperar con la investigación y aportar todas las evidencias disponibles (registros del sistema, logs de seguridad), demostrando transparencia. Colaborar con la investigación y preservar las pruebas refuerza la credibilidad de la empresa y facilita esclarecer el alcance del incidente.",
        },
        {
          id: 14,
          question: "¿A qué especialista debería recurrir la empresa para investigar el incidente?",
          options: [
            "A un experto en ciberseguridad",
            "A un experto en marketing",
            "A un asesor fiscal",
            "A un diseñador gráfico",
          ],
          correct: 0,
          explanation:
            "LegalTech Solutions debería contratar a un experto en ciberseguridad para investigar el incidente, determinar el alcance de la fuga, identificar las debilidades de seguridad y recomendar medidas correctivas. Es el perfil técnico adecuado para analizar la brecha y reforzar las defensas.",
        },
        {
          id: 15,
          question:
            "¿Por qué debería la empresa informar a los clientes afectados sobre el incidente?",
          options: [
            "Para reconstruir la confianza y demostrar responsabilidad (rendición de cuentas)",
            "Para asustar a la competencia",
            "Para vender más productos",
            "Porque no tiene otra opción legal jamás",
          ],
          correct: 0,
          explanation:
            "Informar a los clientes afectados y explicarles las acciones que se están tomando para mejorar la seguridad ayuda a reconstruir la confianza y a demostrar responsabilidad y rendición de cuentas (accountability). La transparencia ante los clientes es clave para recuperar la reputación tras un incidente.",
        },
        {
          id: 16,
          question:
            "¿Qué papel juega la ética profesional en el manejo de información confidencial en el derecho digital?",
          options: [
            "Un papel fundamental para proteger la información y mantener la confianza",
            "Un papel secundario e irrelevante",
            "Solo importa si hay una multa",
            "Ninguno, basta con la tecnología",
          ],
          correct: 0,
          explanation:
            "La ética profesional es fundamental en el derecho digital porque abogados y profesionales tecnológicos manejan grandes cantidades de información confidencial (datos personales, código fuente, estrategias, secretos comerciales). Deben actuar con responsabilidad para proteger esa información y mantener la confianza en los servicios digitales.",
        },
        {
          id: 17,
          question: "Según el texto, muchos incidentes de seguridad están causados por…",
          options: [
            "Acciones humanas (el factor interno)",
            "Fallos exclusivamente del hardware",
            "Desastres naturales",
            "Errores del sistema operativo",
          ],
          correct: 0,
          explanation:
            "Aunque las medidas técnicas (cifrado, firewalls, DLP) protegen frente a ataques externos, muchos incidentes son causados por acciones humanas (el factor interno). Por eso la ética profesional, que exige a las personas respetar la confidencialidad, es tan importante como la tecnología para prevenir riesgos.",
        },
        {
          id: 18,
          question: "¿Qué exige la ética profesional a los empleados respecto a la información?",
          options: [
            "Respetar la confidencialidad y manejar la información de forma responsable",
            "Compartirla libremente para agilizar el trabajo",
            "Publicarla si puede ser útil a otros",
            "Guardarla en dispositivos personales",
          ],
          correct: 0,
          explanation:
            "La ética profesional exige a los empleados respetar la confidencialidad y manejar la información de manera responsable. Esta obligación se refuerza además con el principio de integridad y confidencialidad del RGPD. El comportamiento responsable de las personas es la primera línea de defensa frente a las fugas.",
        },
        {
          id: 19,
          question: "Según el texto, la ética profesional va más allá de…",
          options: [
            "Simplemente cumplir la ley, porque la tecnología evoluciona más rápido que la legislación",
            "La formación técnica de los empleados",
            "El uso de contraseñas seguras",
            "La firma de contratos laborales",
          ],
          correct: 0,
          explanation:
            "La ética profesional va más allá de cumplir la ley: como la tecnología evoluciona mucho más rápido que la legislación, aparecen situaciones nuevas antes de que existan normas específicas. En esos casos, los principios éticos guían las decisiones responsables cuando la ley aún no regula el escenario concreto.",
        },
        {
          id: 20,
          question:
            "Cuando la ley no regula una situación específica, ¿qué principios ayudan a proteger la información?",
          options: [
            "La privacidad desde el diseño (privacy by design) y la seguridad por defecto (security by default)",
            "La publicidad y la transparencia total de todos los datos",
            "La eliminación periódica de todos los datos",
            "La externalización de toda la seguridad",
          ],
          correct: 0,
          explanation:
            "Ante vacíos legales, principios como la privacidad desde el diseño y la seguridad por defecto ayudan a los profesionales a tomar decisiones responsables, garantizando que la información confidencial esté protegida aunque la ley no regule expresamente esa situación concreta.",
        },
        {
          id: 21,
          question:
            "¿Qué artículo del Código Penal español podría aplicarse al caso de Juan Pérez?",
          options: [
            "El artículo 197.2 (descubrimiento y revelación de secretos)",
            "El artículo 138 (homicidio)",
            "El artículo 234 (hurto)",
            "El artículo 379 (seguridad vial)",
          ],
          correct: 0,
          explanation:
            "Aplica el artículo 197.2 del Código Penal (descubrimiento y revelación de secretos): castiga a quien accede o utiliza datos personales o confidenciales almacenados en sistemas digitales sin autorización. Juan Pérez accedió a información protegida sin permiso y la usó vulnerando el deber de confidencialidad y custodia.",
        },
        {
          id: 22,
          question: "¿Qué conducta castiga concretamente el artículo 197.2 del Código Penal?",
          options: [
            "Acceder o usar datos confidenciales almacenados en sistemas digitales sin autorización",
            "Conducir sin carné",
            "No pagar los impuestos a tiempo",
            "Incumplir un contrato de alquiler",
          ],
          correct: 0,
          explanation:
            "El artículo 197.2 castiga el acceso o uso no autorizado de datos personales o confidenciales almacenados en sistemas o ficheros digitales. En el caso, Juan Pérez accedió a información protegida sin permiso y la utilizó vulnerando su deber de confidencialidad y custodia de datos sensibles.",
        },
        {
          id: 23,
          question:
            "Además del 197.2, ¿cómo puede calificarse la conducta de compartir el software y la estrategia con un competidor?",
          options: [
            "Como espionaje industrial relacionado con la revelación de secretos empresariales",
            "Como una infracción de tráfico",
            "Como un delito ecológico",
            "Como una falta leve sin relevancia",
          ],
          correct: 0,
          explanation:
            "Compartir con un competidor un software no patentado e información estratégica de negocio puede considerarse espionaje industrial ligado a la revelación de secretos empresariales. El competidor podría obtener una enorme ventaja de mercado, afectando la propiedad intelectual y la posición competitiva de TechInnovate.",
        },
        {
          id: 24,
          question: "¿Qué tipo de información compartió Juan Pérez con el competidor?",
          options: [
            "Software no patentado e información estratégica de negocio",
            "Fotografías personales de empleados",
            "Facturas de la luz de la oficina",
            "El menú de la cafetería",
          ],
          correct: 0,
          explanation:
            "Juan Pérez compartió software que aún no estaba patentado e información estratégica de negocio, es decir, secretos comerciales de alto valor. Por eso el caso afecta a la propiedad intelectual y a la ventaja competitiva de la empresa, y puede constituir espionaje industrial.",
        },
        {
          id: 25,
          question:
            "¿Qué lección clave sobre el riesgo interno deben aprender los despachos de este caso?",
          options: [
            "El riesgo interno debe tomarse en serio: los empleados son un factor de riesgo en la protección de datos",
            "Solo hay que protegerse de los ataques externos",
            "Los empleados nunca son un riesgo",
            "La seguridad es responsabilidad exclusiva del cliente",
          ],
          correct: 0,
          explanation:
            "La lección es que el riesgo interno debe tomarse en serio: la seguridad no consiste solo en protegerse de ataques externos, porque muchos incidentes los provocan usuarios internos. Los despachos deben considerar a los empleados como un factor de riesgo dentro de sus estrategias de protección de datos.",
        },
        {
          id: 26,
          question:
            "¿Qué política de control de acceso deberían implementar los despachos según las lecciones del caso?",
          options: [
            "Control de acceso basado en roles, siguiendo el principio de mínimo privilegio",
            "Acceso total para todos los empleados",
            "Acceso sin contraseñas para agilizar el trabajo",
            "Compartir un único usuario para todo el despacho",
          ],
          correct: 0,
          explanation:
            "Deberían implementar un control de acceso basado en roles (RBAC) siguiendo el principio de mínimo privilegio: cada empleado accede solo a la información necesaria para su trabajo específico, reduciendo el riesgo de divulgación no autorizada. Cuanto menor sea el acceso innecesario, menor es el riesgo de fuga.",
        },
        {
          id: 27,
          question: "¿En qué consiste el principio de mínimo privilegio?",
          options: [
            "Cada empleado accede únicamente a la información imprescindible para su tarea concreta",
            "Todos los empleados acceden a todo por si acaso",
            "El jefe accede a todo y el resto a nada",
            "Nadie accede a ninguna información",
          ],
          correct: 0,
          explanation:
            "El principio de mínimo privilegio establece que cada usuario debe tener únicamente los permisos y accesos imprescindibles para desempeñar su función concreta. Al limitar el acceso a lo estrictamente necesario, se reduce la superficie de exposición y el riesgo de que la información sensible se filtre.",
        },
        {
          id: 28,
          question: "¿Para qué sirven los registros de auditoría (audit logs) y la trazabilidad?",
          options: [
            "Para identificar quién accedió a la información, cuándo y qué acciones realizó (rendición de cuentas)",
            "Para acelerar el rendimiento del sistema",
            "Para hacer publicidad de la empresa",
            "Para eliminar datos automáticamente",
          ],
          correct: 0,
          explanation:
            "Los registros de auditoría automáticos permiten identificar quién accedió a la información, en qué momento y qué acciones ejecutó, lo cual es esencial para la rendición de cuentas (accountability) y para las investigaciones. La trazabilidad hace posible reconstruir lo ocurrido y atribuir responsabilidades.",
        },
        {
          id: 29,
          question:
            "¿En qué consiste la preparación forense y la preservación de evidencias tras una brecha?",
          options: [
            "En conservar la evidencia digital sin alterarla, manteniendo su integridad para usarla en procesos legales",
            "En borrar todos los datos del incidente",
            "En publicar las pruebas en internet",
            "En modificar los logs para ocultar errores",
          ],
          correct: 0,
          explanation:
            "La preparación forense (forensic readiness) consiste en conservar correctamente la evidencia digital tras una brecha, manteniendo la integridad de los datos y asegurando que las pruebas recogidas no se alteren, de modo que puedan utilizarse en procedimientos legales si es necesario. Preservar las pruebas es clave para la investigación y la justicia.",
        },
        {
          id: 30,
          question:
            "¿Por qué es especialmente crítica la confidencialidad en el sector legal y tecnológico?",
          options: [
            "Porque los clientes confían a la empresa información sensible como software nuevo y estrategias de negocio",
            "Porque no existen leyes que lo regulen",
            "Porque los datos no tienen ningún valor",
            "Porque nunca ocurren incidentes en ese sector",
          ],
          correct: 0,
          explanation:
            "En el sector legal y tecnológico la confidencialidad es crítica porque los clientes confían a la empresa información muy sensible, como software nuevo, secretos comerciales y estrategias de negocio. Por eso proteger esa información es una responsabilidad central: una fuga daña al cliente, la reputación de la empresa y la confianza en los servicios digitales.",
        },
      ],
    },
  ],
};
