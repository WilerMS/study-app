import type { Subject } from "../../types";

export const calculo: Subject = {
  id: "calculo-metodos-numericos",
  name: "Cálculo y Métodos Numéricos",
  icon: "📐",
  topics: [
    {
      id: 1,
      name: "Actividad 1",
      description: "Cálculo integral y aplicaciones (estudio de f(x) = eˣ·sin x)",
      questions: [
        {
          id: 1,
          question: "¿Cuál es el dominio de la función f(x) = eˣ · sin(x)?",
          options: [
            "Todos los números reales (ℝ)",
            "Solo los reales positivos",
            "ℝ excepto los múltiplos de π",
            "El intervalo [-π, π]",
          ],
          correct: 0,
          explanation:
            "La función es el producto de eˣ y sin(x), y ambas están definidas y son continuas en todo ℝ, sin restricciones (no hay divisiones por cero, raíces de índice par ni logaritmos). El dominio del producto es la intersección de ambos dominios, es decir, todo ℝ. Los múltiplos de π son ceros de la función, no puntos excluidos del dominio.",
        },
        {
          id: 2,
          question: "¿Cuál es el punto de corte de f(x) = eˣ·sin(x) con el eje Y?",
          options: ["(0, 0)", "(0, 1)", "(1, 0)", "No corta el eje Y"],
          correct: 0,
          explanation:
            "El corte con el eje Y se obtiene evaluando en x = 0: f(0) = e⁰ · sin(0) = 1 · 0 = 0. Por tanto el punto es (0, 0). Como sin(0) = 0, el producto se anula pese a que e⁰ = 1.",
        },
        {
          id: 3,
          question: "¿Cuáles son los puntos de corte de f(x) = eˣ·sin(x) con el eje X?",
          options: [
            "x = kπ, con k ∈ ℤ",
            "x = 0 únicamente",
            "x = k·2π, con k ∈ ℤ",
            "No corta el eje X",
          ],
          correct: 0,
          explanation:
            "Para cortar el eje X se resuelve f(x) = 0, es decir eˣ·sin(x) = 0. Como eˣ nunca se anula, la ecuación se reduce a sin(x) = 0, cuyas soluciones son x = kπ con k entero: (0,0), (π,0), (2π,0)… Son infinitos cortes, uno por cada múltiplo de π.",
        },
        {
          id: 4,
          question:
            "¿Por qué el factor eˣ no aporta ningún corte con el eje X en f(x) = eˣ·sin(x)?",
          options: [
            "Porque eˣ es siempre positivo y nunca se anula",
            "Porque eˣ crece muy despacio",
            "Porque eˣ solo se anula en x = 0",
            "Porque eˣ es una función periódica",
          ],
          correct: 0,
          explanation:
            "La exponencial eˣ es estrictamente positiva para todo x real (su recorrido es (0, +∞)), por lo que nunca vale 0. Así, los ceros de la función provienen exclusivamente del factor sin(x). eˣ no es periódica ni se anula en ningún punto.",
        },
        {
          id: 5,
          question: "¿Tiene f(x) = eˣ·sin(x) simetría par?",
          options: [
            "No, porque f(x) ≠ f(-x)",
            "Sí, porque f(x) = f(-x)",
            "Sí, es simétrica respecto al eje Y",
            "Solo en el primer cuadrante",
          ],
          correct: 0,
          explanation:
            "Una función es par (simétrica respecto al eje Y) si f(x) = f(-x). Aquí eˣ·sin(x) ≠ e⁻ˣ·sin(-x), porque la exponencial rompe cualquier simetría del seno. Por tanto no es par.",
        },
        {
          id: 6,
          question: "¿Tiene f(x) = eˣ·sin(x) simetría impar?",
          options: [
            "No, porque f(-x) ≠ -f(x)",
            "Sí, porque es simétrica respecto al origen",
            "Sí, porque sin(x) es impar",
            "Solo para x > 0",
          ],
          correct: 0,
          explanation:
            "Una función es impar (simétrica respecto al origen) si f(-x) = -f(x). Aunque sin(x) sí es impar, al multiplicar por eˣ (que no tiene simetría) el producto pierde esa propiedad: f(-x) = e⁻ˣ·sin(-x) = -e⁻ˣ·sin(x) ≠ -eˣ·sin(x). No es impar.",
        },
        {
          id: 7,
          question: "¿Es f(x) = eˣ·sin(x) una función periódica?",
          options: [
            "No, porque eˣ altera la periodicidad de sin(x) haciendo crecer la amplitud",
            "Sí, con periodo 2π",
            "Sí, con periodo π",
            "Sí, porque contiene a sin(x)",
          ],
          correct: 0,
          explanation:
            "Aunque sin(x) es periódica (periodo 2π), el factor eˣ crece sin límite y amplifica cada vez más las oscilaciones, de modo que la función nunca repite exactamente sus valores. Por eso no es periódica: conserva los ceros en kπ, pero la amplitud es cada vez mayor.",
        },
        {
          id: 8,
          question: "¿Tiene f(x) = eˣ·sin(x) asíntotas verticales?",
          options: [
            "No, porque es continua en todo ℝ",
            "Sí, en x = kπ",
            "Sí, en x = 0",
            "Sí, infinitas",
          ],
          correct: 0,
          explanation:
            "Las asíntotas verticales aparecen donde la función tiende a ±∞ para un valor finito de x, típicamente por discontinuidades. Como eˣ·sin(x) es continua en todo ℝ (producto de funciones continuas), no tiene ninguna asíntota vertical.",
        },
        {
          id: 9,
          question: "¿Qué asíntota horizontal tiene f(x) = eˣ·sin(x)?",
          options: [
            "y = 0 cuando x → -∞",
            "y = 0 cuando x → +∞",
            "y = 1 cuando x → +∞",
            "No tiene ninguna asíntota horizontal",
          ],
          correct: 0,
          explanation:
            "Cuando x → -∞, eˣ → 0 y como sin(x) está acotado entre -1 y 1, el producto tiende a 0: hay asíntota horizontal y = 0 por la izquierda. En cambio, cuando x → +∞ no hay asíntota horizontal porque eˣ crece sin límite y las oscilaciones se amplifican.",
        },
        {
          id: 10,
          question:
            "¿Por qué f(x) = eˣ·sin(x) NO tiene asíntota horizontal cuando x → +∞?",
          options: [
            "Porque eˣ crece sin límite y amplifica las oscilaciones",
            "Porque sin(x) tiende a infinito",
            "Porque la función se hace constante",
            "Porque tiene una asíntota vertical",
          ],
          correct: 0,
          explanation:
            "Para x → +∞, eˣ tiende a infinito mientras sin(x) sigue oscilando entre -1 y 1; el producto oscila con amplitud cada vez mayor y no se aproxima a ningún valor fijo. Por eso no existe asíntota horizontal por la derecha (sin(x) no tiende a infinito: oscila).",
        },
        {
          id: 11,
          question: "¿Cuál es la primera derivada de f(x) = eˣ·sin(x)?",
          options: [
            "f'(x) = eˣ(sin x + cos x)",
            "f'(x) = eˣ·cos(x)",
            "f'(x) = eˣ(sin x - cos x)",
            "f'(x) = eˣ·sin(x)",
          ],
          correct: 0,
          explanation:
            "Aplicando la regla del producto (u·v)' = u'v + uv' con u = eˣ (u' = eˣ) y v = sin x (v' = cos x): f'(x) = eˣ·sin x + eˣ·cos x = eˣ(sin x + cos x). El factor eˣ se conserva porque es su propia derivada.",
        },
        {
          id: 12,
          question:
            "¿Qué regla de derivación se aplica para derivar f(x) = eˣ·sin(x)?",
          options: [
            "La regla del producto",
            "La regla de la cadena",
            "La regla del cociente",
            "La regla de L'Hôpital",
          ],
          correct: 0,
          explanation:
            "Como f es el producto de dos funciones (eˣ y sin x), se deriva con la regla del producto: (u·v)' = u'v + uv'. La regla de la cadena se usa para composiciones, la del cociente para divisiones, y L'Hôpital es para calcular límites indeterminados, no para derivar productos.",
        },
        {
          id: 13,
          question:
            "Los puntos críticos de f(x) = eˣ·sin(x) (donde f'(x) = 0) están en…",
          options: [
            "x = 3π/4 + kπ, con k ∈ ℤ",
            "x = kπ, con k ∈ ℤ",
            "x = π/2 + kπ, con k ∈ ℤ",
            "x = 0 únicamente",
          ],
          correct: 0,
          explanation:
            "Los puntos críticos resuelven f'(x) = eˣ(sin x + cos x) = 0. Como eˣ ≠ 0, queda sin x + cos x = 0, es decir tan x = -1, cuyas soluciones son x = 3π/4 + kπ. En esos puntos la función pasa de crecer a decrecer o viceversa.",
        },
        {
          id: 14,
          question:
            "En el intervalo (-π/4, 3π/4), evaluando f'(0) = 1 > 0, la función es…",
          options: ["Creciente", "Decreciente", "Constante", "Discontinua"],
          correct: 0,
          explanation:
            "El signo de la primera derivada indica el crecimiento. En x = 0, f'(0) = e⁰(sin 0 + cos 0) = 1·(0 + 1) = 1 > 0, así que en todo ese intervalo la función es creciente. Un valor positivo de la derivada equivale a función creciente.",
        },
        {
          id: 15,
          question:
            "En el intervalo (3π/4, 7π/4), evaluando f'(π) = -eπ < 0, la función es…",
          options: ["Decreciente", "Creciente", "Constante", "Tiene un máximo",],
          correct: 0,
          explanation:
            "En x = π, f'(π) = eπ(sin π + cos π) = eπ(0 - 1) = -eπ < 0. Como la derivada es negativa, la función es decreciente en ese intervalo. El signo negativo de la derivada implica decrecimiento.",
        },
        {
          id: 16,
          question: "¿Qué tipo de función es f(x) = eˣ·sin(x) en el intervalo x > 0?",
          options: [
            "Continua y derivable",
            "Continua pero no derivable",
            "Derivable pero no continua",
            "Discontinua en x = π",
          ],
          correct: 0,
          explanation:
            "Al ser producto de dos funciones continuas y derivables en todo ℝ, f también lo es en x > 0: es continua (no tiene saltos) y derivable (existe su derivada en cada punto, f'(x) = eˣ(sin x + cos x)). No presenta discontinuidades en ningún punto.",
        },
        {
          id: 17,
          question:
            "¿Qué herramienta matemática se usa para calcular el área encerrada bajo la gráfica de f(x)?",
          options: [
            "La integral definida",
            "La derivada",
            "El límite",
            "La regla de la cadena",
          ],
          correct: 0,
          explanation:
            "El área bajo la curva entre dos valores de x se calcula con la integral definida, que representa geométricamente ese área. La derivada da pendientes (no áreas), el límite estudia comportamientos tendenciales, y la regla de la cadena es una técnica de derivación.",
        },
        {
          id: 18,
          question:
            "Al calcular el área de una función que oscila (positiva y negativa), ¿por qué hay que separar los tramos por encima y por debajo del eje?",
          options: [
            "Para que las áreas de signo opuesto no se cancelen entre sí",
            "Para que la integral sea más rápida",
            "Porque la función no es continua",
            "Para evitar calcular la primitiva",
          ],
          correct: 0,
          explanation:
            "La integral definida da valores negativos donde la función está por debajo del eje X. Si se integra de un tirón, las áreas positivas y negativas se cancelan y se pierde el área real. Por eso se separan los tramos y se toma el valor absoluto de cada uno, sumándolos.",
        },
        {
          id: 19,
          question:
            "¿Cuál es la fórmula del área encerrada bajo la curva f(x) = eˣ·sin(x) entre a = 0 y b = 5π?",
          options: [
            "A = ∫₀^{5π} eˣ·sin(x) dx",
            "A = ∫₀^{5π} eˣ·cos(x) dx",
            "A = f(5π) - f(0)",
            "A = d/dx (eˣ·sin x)",
          ],
          correct: 0,
          explanation:
            "El área se plantea como la integral definida de la función entre los límites del intervalo: A = ∫₀^{5π} eˣ·sin(x) dx (separando después los tramos por signo). f(5π) - f(0) sería aplicar Barrow a la propia función, no a su primitiva, y una derivada no da un área.",
        },
        {
          id: 20,
          question: "¿Qué técnica es la más adecuada para resolver la integral ∫ eˣ·sin(x) dx?",
          options: [
            "Integración por partes (aplicada de forma cíclica)",
            "Integración inmediata",
            "Cambio de variable simple",
            "Fracciones parciales",
          ],
          correct: 0,
          explanation:
            "El producto de una exponencial por una función trigonométrica se resuelve por integración por partes, aplicándola dos veces hasta que reaparece la integral original y se despeja (integral cíclica). No es inmediata ni se resuelve por un cambio de variable simple, y las fracciones parciales son para cocientes de polinomios.",
        },
        {
          id: 21,
          question: "El resultado de ∫ eˣ·sin(x) dx es…",
          options: [
            "(eˣ(sin x - cos x))/2 + C",
            "eˣ·cos(x) + C",
            "eˣ(sin x + cos x) + C",
            "eˣ·sin(x) + C",
          ],
          correct: 0,
          explanation:
            "Aplicando integración por partes dos veces y despejando la integral que reaparece, se obtiene ∫ eˣ·sin(x) dx = eˣ(sin x - cos x)/2 + C. Se puede comprobar derivando ese resultado: se recupera eˣ·sin(x). No hay que confundirlo con la derivada, que es eˣ(sin x + cos x).",
        },
        {
          id: 22,
          question: "El área total de f(x) = eˣ·sin(x) en el intervalo (0, 5π) comprende…",
          options: [
            "La suma de las áreas de las cinco oscilaciones (por encima y por debajo del eje)",
            "Solo el área positiva del primer arco",
            "El valor de la función en x = 5π",
            "La pendiente media de la curva",
          ],
          correct: 0,
          explanation:
            "Entre 0 y 5π la curva corta el eje en 0, π, 2π, 3π, 4π y 5π, formando cinco oscilaciones (arcos), alternando por encima y por debajo del eje. El área total es la suma de las áreas (en valor absoluto) de esas cinco regiones, no solo de una ni un valor puntual de la función.",
        },
        {
          id: 23,
          question: "¿Cuánto vale f'(0), la primera derivada de f(x) = eˣ·sin(x) en x = 0?",
          options: ["1", "0", "e", "-1"],
          correct: 0,
          explanation:
            "f'(x) = eˣ(sin x + cos x), luego f'(0) = e⁰(sin 0 + cos 0) = 1·(0 + 1) = 1. Este valor positivo confirma que la función es creciente en el entorno de x = 0.",
        },
        {
          id: 24,
          question: "¿Cuánto vale f'(π), la primera derivada de f(x) = eˣ·sin(x) en x = π?",
          options: ["-eπ", "eπ", "0", "1"],
          correct: 0,
          explanation:
            "f'(π) = eπ(sin π + cos π) = eπ(0 + (-1)) = -eπ. Al ser negativo, indica que la función es decreciente en el entorno de x = π.",
        },
        {
          id: 25,
          question:
            "Para hallar los puntos críticos de una función, ¿qué hay que igualar a cero?",
          options: [
            "La primera derivada f'(x)",
            "La propia función f(x)",
            "La segunda derivada f''(x)",
            "El límite de la función",
          ],
          correct: 0,
          explanation:
            "Los puntos críticos son aquellos donde la primera derivada se anula (f'(x) = 0) o no existe; en ellos la función puede tener máximos, mínimos o cambios de monotonía. Igualar f(x) a cero da los cortes con el eje X (raíces), y la segunda derivada sirve para estudiar la concavidad, no para localizar puntos críticos.",
        },
        {
          id: 26,
          question:
            "Al resolver f'(x) = eˣ(sin x + cos x) = 0, ¿a qué ecuación trigonométrica se llega?",
          options: [
            "tan(x) = -1",
            "sin(x) = 0",
            "cos(x) = 0",
            "tan(x) = 1",
          ],
          correct: 0,
          explanation:
            "Como eˣ ≠ 0, la ecuación f'(x) = 0 equivale a sin x + cos x = 0, y dividiendo por cos x se obtiene tan x = -1, cuyas soluciones son x = 3π/4 + kπ. De ahí salen los puntos críticos de la función.",
        },
        {
          id: 27,
          question:
            "La regla de Barrow (2º Teorema Fundamental del Cálculo) permite…",
          options: [
            "Evaluar una integral definida como F(b) - F(a), siendo F una primitiva",
            "Calcular la derivada de una función en un punto",
            "Obtener la pendiente de la recta tangente",
            "Resolver ecuaciones no lineales",
          ],
          correct: 0,
          explanation:
            "La regla de Barrow establece que ∫ₐᵇ f(x) dx = F(b) - F(a), donde F es cualquier primitiva de f. Es la herramienta que conecta la integral definida (área) con la primitiva. No calcula derivadas ni pendientes, ni resuelve ecuaciones no lineales.",
        },
        {
          id: 28,
          question:
            "Entre dos ceros consecutivos kπ y (k+1)π, la función f(x) = eˣ·sin(x)…",
          options: [
            "Mantiene un signo constante (forma un arco completo por encima o por debajo del eje)",
            "Cambia de signo varias veces",
            "Es siempre positiva",
            "Se hace cero infinitas veces",
          ],
          correct: 0,
          explanation:
            "Como los únicos ceros son los múltiplos de π, entre dos consecutivos la función no vuelve a anularse, por lo que mantiene signo constante: describe un arco completo, positivo o negativo según el intervalo. Esto es precisamente lo que permite tratar cada oscilación por separado al calcular el área.",
        },
        {
          id: 29,
          question:
            "El efecto del factor eˣ sobre las oscilaciones de sin(x) en f(x) = eˣ·sin(x) es que…",
          options: [
            "Las hace de amplitud cada vez mayor a medida que x crece",
            "Las mantiene con amplitud constante",
            "Las reduce hasta desaparecer",
            "Las convierte en una recta",
          ],
          correct: 0,
          explanation:
            "El factor eˣ actúa como una envolvente que crece exponencialmente: multiplica al seno acotado y hace que cada oscilación tenga mayor amplitud que la anterior conforme x aumenta. Por eso la función no es periódica pese a conservar los ceros del seno.",
        },
        {
          id: 30,
          question:
            "¿Cuántas oscilaciones (arcos) forma f(x) = eˣ·sin(x) en el intervalo (0, 5π)?",
          options: ["5", "2", "10", "Infinitas"],
          correct: 0,
          explanation:
            "Los ceros en el intervalo son 0, π, 2π, 3π, 4π y 5π, que delimitan cinco tramos consecutivos (0-π, π-2π, 2π-3π, 3π-4π, 4π-5π), es decir, cinco oscilaciones alternando por encima y por debajo del eje. El área total es la suma de esas cinco regiones.",
        },
      ],
    },
    {
      id: 2,
      name: "Actividad 2",
      description: "Series de números reales",
      questions: [
        {
          id: 1,
          question: "En la serie Σ nⁿ/n! (n desde 1), ¿cuál es su término general aₙ?",
          options: ["aₙ = nⁿ/n!", "aₙ = n/n!", "aₙ = nⁿ", "aₙ = n!/nⁿ"],
          correct: 0,
          explanation:
            "El término general es la expresión que genera cada sumando de la serie en función de n; aquí es aₙ = nⁿ/n!. Identificarlo correctamente es el primer paso para aplicar cualquier criterio de convergencia.",
        },
        {
          id: 2,
          question: "En la serie Σ nⁿ/n! con n ≥ 1, ¿de qué signo son sus términos?",
          options: [
            "Todos positivos",
            "Alternan de signo",
            "Todos negativos",
            "Depende del valor de n",
          ],
          correct: 0,
          explanation:
            "Como n ≥ 1, tanto nⁿ como n! son positivos, así que su cociente aₙ = nⁿ/n! es positivo para todo n. Que sea una serie de términos positivos permite aplicar criterios como el del cociente (D'Alembert) o el de la raíz.",
        },
        {
          id: 3,
          question:
            "¿Qué criterio es el más adecuado para estudiar la convergencia de Σ nⁿ/n!?",
          options: [
            "El criterio del cociente (D'Alembert)",
            "El criterio de comparación con una integral",
            "El criterio de Leibniz",
            "El criterio de la serie geométrica",
          ],
          correct: 0,
          explanation:
            "Cuando el término general combina potencias y factoriales, el criterio del cociente de D'Alembert es el más cómodo, porque al hacer aₙ₊₁/aₙ se simplifican muy bien esos factores. El criterio de Leibniz es para series alternadas (no es el caso), y esta serie no es geométrica.",
        },
        {
          id: 4,
          question: "El criterio del cociente (D'Alembert) se basa en calcular el límite…",
          options: [
            "L = límₙ→∞ (aₙ₊₁ / aₙ)",
            "L = límₙ→∞ (aₙ · aₙ₊₁)",
            "L = límₙ→∞ (aₙ)^(1/n)",
            "L = límₙ→∞ (aₙ - aₙ₊₁)",
          ],
          correct: 0,
          explanation:
            "El criterio del cociente evalúa el límite del cociente entre un término y el anterior: L = límₙ→∞ (aₙ₊₁/aₙ). La expresión (aₙ)^(1/n) corresponde al criterio de la raíz (de Cauchy), que es otro criterio distinto.",
        },
        {
          id: 5,
          question: "En el criterio del cociente, si el límite L < 1, la serie…",
          options: ["Converge", "Diverge", "No se puede concluir", "Oscila"],
          correct: 0,
          explanation:
            "Si L < 1, cada término es proporcionalmente menor que el anterior de forma suficiente, y el criterio del cociente garantiza que la serie converge. Si L > 1 diverge, y si L = 1 el criterio no decide.",
        },
        {
          id: 6,
          question: "En el criterio del cociente, si el límite L > 1, la serie…",
          options: ["Diverge", "Converge", "No se puede concluir", "Es geométrica"],
          correct: 0,
          explanation:
            "Si L > 1, los términos no decrecen lo suficiente (de hecho tienden a crecer) y el criterio del cociente asegura que la serie diverge. Solo el caso L = 1 queda indeterminado.",
        },
        {
          id: 7,
          question: "En el criterio del cociente, si el límite L = 1, entonces…",
          options: [
            "El criterio no permite concluir nada (hay que usar otro)",
            "La serie siempre converge",
            "La serie siempre diverge",
            "La serie es geométrica",
          ],
          correct: 0,
          explanation:
            "Cuando L = 1, el criterio del cociente es inconcluyente: la serie podría converger o divergir, y hay que recurrir a otro criterio (comparación, integral, etc.). Es la principal limitación de este criterio.",
        },
        {
          id: 8,
          question:
            "Al aplicar el criterio del cociente a Σ nⁿ/n!, ¿a qué valor tiende el límite L?",
          options: ["e (≈ 2,718)", "1", "0", "+∞"],
          correct: 0,
          explanation:
            "El límite del cociente aₙ₊₁/aₙ para nⁿ/n! es exactamente el número e (≈ 2,718), pues aparece la expresión (1 + 1/n)ⁿ, cuyo límite es e. Como e > 1, el criterio determina el comportamiento de la serie.",
        },
        {
          id: 9,
          question: "Como en Σ nⁿ/n! el límite del cociente da L = e > 1, la serie es…",
          options: ["Divergente", "Convergente", "Geométrica", "Alternada"],
          correct: 0,
          explanation:
            "Al ser L = e ≈ 2,718 > 1, el criterio del cociente concluye que la serie Σ nⁿ/n! es divergente: sus términos no decrecen lo suficiente y la suma no tiende a un valor finito.",
        },
        {
          id: 10,
          question: "¿Cuál es la suma de la serie divergente Σ nⁿ/n!?",
          options: [
            "+∞ (no tiene suma finita)",
            "e",
            "0",
            "16/5",
          ],
          correct: 0,
          explanation:
            "Al ser divergente y de términos positivos crecientes, la serie no tiene suma finita: su suma es +∞. Solo las series convergentes tienen una suma finita; una serie divergente de términos positivos crece sin límite.",
        },
        {
          id: 11,
          question:
            "¿Por qué el criterio del cociente encaja tan bien con la serie Σ nⁿ/n!?",
          options: [
            "Porque el término contiene potencias y un factorial, que se simplifican al hacer aₙ₊₁/aₙ",
            "Porque la serie es geométrica",
            "Porque la serie es alternada",
            "Porque el término general tiende a cero",
          ],
          correct: 0,
          explanation:
            "El criterio del cociente brilla cuando hay potencias y factoriales, porque el cociente aₙ₊₁/aₙ cancela gran parte de esos factores: (n+1)!/n! = n+1 y (n+1)ⁿ⁺¹/nⁿ se simplifica en la expresión (1+1/n)ⁿ. La serie no es geométrica ni alternada.",
        },
        {
          id: 12,
          question: "La serie S = Σ 2·(3/8)ⁿ (n desde 0) es una serie…",
          options: ["Geométrica", "Armónica", "Alternada", "Aritmética"],
          correct: 0,
          explanation:
            "Tiene la forma aₙ = c·rⁿ (con una constante multiplicada por una razón elevada a n), que es la definición de serie geométrica. La serie armónica es Σ 1/n, una alternada cambia de signo, y una progresión aritmética suma una diferencia constante, no multiplica por una razón.",
        },
        {
          id: 13,
          question: "¿Cuál es la forma general de una serie geométrica?",
          options: [
            "aₙ = c·rⁿ (constante por razón elevada a n)",
            "aₙ = a + n·d (término inicial más n veces la diferencia)",
            "aₙ = 1/n",
            "aₙ = nⁿ/n!",
          ],
          correct: 0,
          explanation:
            "Una serie geométrica tiene términos de la forma aₙ = c·rⁿ, donde c es una constante y r es la razón (cada término se obtiene multiplicando el anterior por r). La forma a + n·d corresponde a una progresión aritmética, y 1/n a la serie armónica.",
        },
        {
          id: 14,
          question: "En la serie S = Σ 2·(3/8)ⁿ, ¿cuál es la razón r?",
          options: ["3/8", "2", "8/3", "1/2"],
          correct: 0,
          explanation:
            "La razón r es la base que aparece elevada a n: aquí r = 3/8. El 2 es la constante multiplicativa (c), no la razón. La razón es lo que determina si la serie geométrica converge o diverge.",
        },
        {
          id: 15,
          question: "En la serie S = Σ 2·(3/8)ⁿ que empieza en n = 0, ¿cuál es el primer término?",
          options: ["2", "3/8", "6/8", "16/5"],
          correct: 0,
          explanation:
            "El primer término se obtiene con n = 0: 2·(3/8)⁰ = 2·1 = 2. Cualquier número (distinto de 0) elevado a 0 es 1, por lo que el primer término coincide con la constante c = 2.",
        },
        {
          id: 16,
          question: "¿Cuál es la condición de convergencia de una serie geométrica?",
          options: [
            "|r| < 1",
            "|r| ≥ 1",
            "r > 0",
            "El término general debe ser positivo",
          ],
          correct: 0,
          explanation:
            "Una serie geométrica converge si y solo si el valor absoluto de la razón es menor que 1 (|r| < 1); en ese caso la suma tiende a un número finito. Si |r| ≥ 1 la serie diverge. El signo o la positividad del término no son la condición determinante.",
        },
        {
          id: 17,
          question: "Como en S = Σ 2·(3/8)ⁿ la razón es r = 3/8, la serie es…",
          options: [
            "Convergente, porque |3/8| < 1",
            "Divergente, porque |3/8| > 1",
            "Indeterminada",
            "Divergente, porque empieza en n = 0",
          ],
          correct: 0,
          explanation:
            "Como |r| = 3/8 = 0,375 < 1, la serie geométrica converge y su suma tiende a un número finito. El que empiece en n = 0 no afecta a la convergencia (solo al valor del primer término y a la suma).",
        },
        {
          id: 18,
          question:
            "¿Qué fórmula da la suma de una serie geométrica convergente que empieza en su primer término a₁?",
          options: [
            "S = a₁ / (1 - r)",
            "S = a₁ · (1 - r)",
            "S = a₁ / (1 + r)",
            "S = a₁ · rⁿ",
          ],
          correct: 0,
          explanation:
            "La suma de una serie geométrica infinita convergente (|r| < 1) es S = a₁/(1 - r), donde a₁ es el primer término y r la razón. Es una fórmula fundamental: solo válida cuando |r| < 1, pues si no la serie no tiene suma finita.",
        },
        {
          id: 19,
          question: "¿Cuál es la suma de la serie S = Σ 2·(3/8)ⁿ (n desde 0)?",
          options: ["16/5", "2/5", "8/5", "3/8"],
          correct: 0,
          explanation:
            "Aplicando S = a₁/(1 - r) con a₁ = 2 y r = 3/8: S = 2/(1 - 3/8) = 2/(5/8) = 2·(8/5) = 16/5. Por tanto la serie converge y su suma es 16/5 (= 3,2).",
        },
        {
          id: 20,
          question: "Si en una serie geométrica |r| ≥ 1, entonces la serie…",
          options: [
            "Diverge (no tiene suma finita)",
            "Converge siempre",
            "Converge solo si r es negativa",
            "Es armónica",
          ],
          correct: 0,
          explanation:
            "Cuando |r| ≥ 1, los términos no decrecen a cero (o no lo hacen lo bastante rápido) y la serie geométrica diverge, sin suma finita. La fórmula S = a₁/(1 - r) solo es válida para |r| < 1.",
        },
        {
          id: 21,
          question: "¿Qué significa que una serie sea convergente?",
          options: [
            "Que la suma de sus infinitos términos tiende a un número finito",
            "Que todos sus términos son positivos",
            "Que sus términos crecen sin límite",
            "Que es una serie geométrica",
          ],
          correct: 0,
          explanation:
            "Una serie es convergente cuando la sucesión de sus sumas parciales tiende a un valor finito, es decir, la suma total de sus infinitos términos existe y es un número real. Ni la positividad de los términos ni ser geométrica garantizan por sí solas la convergencia.",
        },
        {
          id: 22,
          question: "El factorial n! se define como…",
          options: [
            "El producto 1·2·3·…·n",
            "La suma 1 + 2 + 3 + … + n",
            "n elevado a n",
            "n dividido entre 2",
          ],
          correct: 0,
          explanation:
            "El factorial n! es el producto de todos los enteros positivos desde 1 hasta n (1·2·3·…·n). Por ejemplo, 4! = 1·2·3·4 = 24. No es una suma (eso es la fórmula de Gauss) ni una potencia; crece muy rápidamente, lo que lo hace clave en el criterio del cociente.",
        },
        {
          id: 23,
          question: "El criterio del cociente resulta especialmente útil cuando el término general contiene…",
          options: [
            "Factoriales y/o potencias",
            "Solo constantes",
            "Funciones trigonométricas",
            "Logaritmos únicamente",
          ],
          correct: 0,
          explanation:
            "El criterio del cociente es la herramienta preferida cuando aparecen factoriales y/o potencias, porque al dividir aₙ₊₁ entre aₙ estos factores se simplifican de forma notable. Para otros casos (por ejemplo términos con logaritmos o comparables a 1/nᵖ) suelen ser mejores el criterio de comparación o el integral.",
        },
        {
          id: 24,
          question: "La serie armónica Σ 1/n (n desde 1)…",
          options: [
            "Diverge, aunque su término general tienda a 0",
            "Converge a 1",
            "Es geométrica de razón 1",
            "Converge porque los términos tienden a 0",
          ],
          correct: 0,
          explanation:
            "La serie armónica es el ejemplo clásico de que 'el término general tienda a 0 NO garantiza la convergencia': aunque 1/n → 0, la serie Σ 1/n diverge. No es geométrica (no tiene razón constante) y su suma no es finita.",
        },
        {
          id: 25,
          question: "En S = Σ 2·(3/8)ⁿ, el término correspondiente a n = 0 vale…",
          options: ["2", "3/8", "0", "1"],
          correct: 0,
          explanation:
            "Para n = 0: 2·(3/8)⁰ = 2·1 = 2, ya que cualquier base no nula elevada a 0 es 1. Ese es el primer término (a₁) que se usa en la fórmula de la suma.",
        },
        {
          id: 26,
          question: "El cálculo 2 / (1 - 3/8) es igual a…",
          options: ["16/5", "2/5", "5/16", "8/5"],
          correct: 0,
          explanation:
            "Primero 1 - 3/8 = 5/8. Entonces 2/(5/8) = 2·(8/5) = 16/5. Dividir por una fracción equivale a multiplicar por su inversa, de ahí el 8/5. El resultado 16/5 es la suma de la serie geométrica.",
        },
        {
          id: 27,
          question: "Una serie geométrica con |r| < 1…",
          options: [
            "Converge y su suma es finita",
            "Diverge siempre",
            "Solo converge si empieza en n = 1",
            "No tiene término general definido",
          ],
          correct: 0,
          explanation:
            "Si |r| < 1, la serie geométrica converge y su suma es un número finito, dado por a₁/(1 - r). El índice desde el que empieza (0 o 1) cambia el valor de a₁ y de la suma, pero no la convergencia, que depende únicamente de |r|.",
        },
        {
          id: 28,
          question: "Si una serie diverge, ¿qué se puede decir de su suma?",
          options: [
            "No tiene una suma finita (tiende a ±∞ o no existe)",
            "Su suma siempre es 0",
            "Su suma siempre es 1",
            "Su suma es su primer término",
          ],
          correct: 0,
          explanation:
            "Una serie divergente no tiene suma finita: sus sumas parciales tienden a ±∞ o no se estabilizan en ningún valor. Por eso, para Σ nⁿ/n! (divergente) se escribe que la suma es +∞. Solo tiene sentido hablar de una suma concreta y finita cuando la serie converge.",
        },
        {
          id: 29,
          question:
            "¿Qué condición NECESARIA (pero no suficiente) debe cumplir el término general para que una serie converja?",
          options: [
            "Que aₙ → 0 cuando n → ∞",
            "Que aₙ → 1 cuando n → ∞",
            "Que todos los aₙ sean positivos",
            "Que la serie sea geométrica",
          ],
          correct: 0,
          explanation:
            "Para que una serie converja es necesario que su término general tienda a 0 (aₙ → 0); si no lo hace, diverge seguro. Pero no es suficiente: la serie armónica cumple 1/n → 0 y aun así diverge. En Σ nⁿ/n! el término ni siquiera tiende a 0, por lo que diverge.",
        },
        {
          id: 30,
          question:
            "El criterio del cociente (D'Alembert) y el criterio de la raíz (Cauchy) son ambos criterios de…",
          options: [
            "Convergencia de series de términos positivos",
            "Derivación de funciones",
            "Cálculo de áreas",
            "Resolución de sistemas lineales",
          ],
          correct: 0,
          explanation:
            "Tanto el criterio del cociente como el de la raíz sirven para estudiar la convergencia de series de términos positivos, comparando el crecimiento de los términos con el de una serie geométrica. No tienen que ver con derivar, calcular áreas ni resolver sistemas de ecuaciones.",
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
          question:
            "¿Qué teorema podemos aplicar para comprobar que la función f(x) = 2x - cos(x) corta al eje de abscisas?",
          options: [
            "Teorema de los valores intermedios.",
            "Teorema de Weierstrass.",
            "Teorema de Bolzano.",
            "Ninguno de los anteriores.",
          ],
          correct: 2,
          explanation:
            "El teorema de Bolzano garantiza que, si una función continua cambia de signo en los extremos de un intervalo [a,b] (f(a)·f(b) < 0), entonces tiene al menos una raíz en su interior; es el que asegura el corte con el eje X. El de Weierstrass garantiza máximos y mínimos absolutos en un cerrado, y el de los valores intermedios es más general, pero el aplicable directamente para asegurar una raíz es el de Bolzano.",
        },
        {
          id: 2,
          question: "Sean dos funciones f(x) y g(x), la siguiente afirmación es verdadera:",
          options: [
            "f(g(x)) está definida si y solo si x pertenece al dominio de g(x) y g(x) pertenece al dominio de f(x).",
            "f(g(x)) siempre está definida.",
            "f(g(x)) no está bien definida.",
            "Para que f(g(x)) esté definida, basta con que g(x) esté definida.",
          ],
          correct: 0,
          explanation:
            "Para evaluar la composición f(g(x)) hacen falta dos condiciones: que x esté en el dominio de g (para poder calcular g(x)) y, además, que ese resultado g(x) esté en el dominio de f (para poder aplicarle f). No siempre está definida, y no basta con que g(x) exista: el valor de salida de g debe ser una entrada válida para f.",
        },
        {
          id: 3,
          question:
            "«Según el teorema de Bolzano, la función f(x) = 1/(x+1) tiene una solución en el intervalo [-2, 0]». ¿Qué puedes concluir?",
          options: [
            "La afirmación es correcta.",
            "La afirmación es falsa.",
            "Faltan datos para determinar si la afirmación es correcta.",
            "Faltan datos para determinar si la afirmación es falsa.",
          ],
          correct: 1,
          explanation:
            "La afirmación es falsa porque Bolzano exige que la función sea continua en todo el intervalo cerrado, y f(x) = 1/(x+1) tiene una discontinuidad (asíntota vertical) en x = -1, que está dentro de [-2, 0]. Además, esa función nunca vale 0. Al no cumplirse la hipótesis de continuidad, no se puede aplicar el teorema.",
        },
        {
          id: 4,
          question:
            "Desde el punto de vista geométrico, ¿qué obtenemos al hallar la derivada de una función en un punto?",
          options: [
            "La pendiente de la recta normal a la función en dicho punto.",
            "La pendiente de la recta tangente a la función en dicho punto.",
            "La pendiente de la recta paralela a la función en dicho punto.",
            "La pendiente de la recta paralela a la función en cualquier punto.",
          ],
          correct: 1,
          explanation:
            "Geométricamente, la derivada en un punto es la pendiente de la recta tangente a la curva en ese punto. La recta normal es la perpendicular a la tangente (su pendiente es la opuesta e inversa), y las 'rectas paralelas a la función' no tienen sentido geométrico definido. La interpretación clave de la derivada es la tangente.",
        },
        {
          id: 5,
          question: "La regla de la cadena es:",
          options: [
            "Un teorema que indica cómo calcular la derivada de una función en un punto.",
            "Una regla para calcular de forma sencilla las derivadas sucesivas de una función continua.",
            "Una regla para calcular la derivada de las funciones compuestas.",
            "Una regla para calcular la derivada de funciones compuestas cuando no son continuas.",
          ],
          correct: 2,
          explanation:
            "La regla de la cadena permite derivar funciones compuestas f(g(x)): su derivada es f'(g(x))·g'(x). No es un método general para la derivada en un punto ni para derivadas sucesivas, y no tiene sentido hablar de derivar donde no hay continuidad (la derivabilidad implica continuidad). Es específicamente la herramienta para composiciones.",
        },
        {
          id: 6,
          question: "Señala cuál de las siguientes afirmaciones es correcta:",
          options: [
            "Dadas dos funciones f y g derivables en un punto, siempre se puede obtener la derivada de su producto.",
            "Dadas dos funciones f y g derivables en un punto, nunca se puede obtener la derivada de su producto.",
            "Dadas dos funciones f y g derivables en un punto, solo en ciertas condiciones se puede obtener la derivada de su producto.",
            "Ninguna de las anteriores.",
          ],
          correct: 0,
          explanation:
            "Si f y g son derivables en un punto, su producto también lo es y su derivada se obtiene con la regla del producto: (f·g)' = f'g + fg'. No hay condiciones adicionales ('nunca' o 'solo en ciertas condiciones' son falsas): la derivabilidad de ambas basta para derivar el producto siempre.",
        },
        {
          id: 7,
          question: "La regla de L'Hôpital:",
          options: [
            "Se puede utilizar para calcular cualquier límite.",
            "Solo se puede aplicar una vez.",
            "Permite realizar cálculo de extremos de forma sencilla.",
            "Ninguna de las anteriores.",
          ],
          correct: 3,
          explanation:
            "Ninguna de las tres primeras es correcta: L'Hôpital NO sirve para cualquier límite (solo para indeterminaciones del tipo 0/0 o ∞/∞), SÍ se puede aplicar más de una vez seguida (si tras aplicarla persiste la indeterminación), y no está pensada para calcular extremos (eso es tarea de las derivadas y los puntos críticos). Por tanto, la respuesta correcta es 'Ninguna de las anteriores'.",
        },
        {
          id: 8,
          question: "La regla de L'Hôpital:",
          options: [
            "Sólo se puede utilizar para calcular el límite de cociente de funciones.",
            "Únicamente se utiliza para el cálculo de límites indeterminados del tipo 0/0 o ∞/∞.",
            "Mediante operaciones algebraicas se puede utilizar para resolver cualquier tipo de indeterminación.",
            "Ninguna de las anteriores.",
          ],
          correct: 2,
          explanation:
            "L'Hôpital se aplica directamente a las indeterminaciones 0/0 e ∞/∞, pero otras formas indeterminadas (0·∞, ∞-∞, 1^∞, 0⁰, ∞⁰) pueden transformarse algebraicamente (con logaritmos, cambios a cociente, etc.) hasta convertirlas en 0/0 o ∞/∞ y entonces aplicar la regla. Por eso la opción más completa y correcta es que, mediante manipulaciones algebraicas, sirve para cualquier tipo de indeterminación.",
        },
        {
          id: 9,
          question: "Para resolver un problema de optimización:",
          options: [
            "Hay que calcular el límite de la función para buscar el máximo.",
            "La función a optimizar debe cumplir las restricciones del problema.",
            "A y B son correctas.",
            "Ninguna de las anteriores.",
          ],
          correct: 1,
          explanation:
            "En optimización, la función objetivo debe cumplir las restricciones del problema (condiciones que ligan las variables), y los extremos se buscan con las derivadas (puntos críticos), no con límites. Por eso la opción A es incorrecta y, en consecuencia, 'A y B' también; solo es válida la B.",
        },
        {
          id: 10,
          question: "Si una función tiene una asíntota horizontal, entonces:",
          options: [
            "Necesariamente tendrá también una asíntota oblicua por el mismo lado.",
            "No puede tener de ninguna manera una asíntota oblicua por el mismo lado.",
            "También tendrá una asíntota vertical por el mismo lado.",
            "No puede tener una asíntota vertical por el mismo lado.",
          ],
          correct: 1,
          explanation:
            "Las asíntotas horizontales y oblicuas son excluyentes por el mismo lado (+∞ o -∞): describen el comportamiento en el infinito y una función solo puede tener una de las dos por cada lado. Por tanto, si hay horizontal, no puede haber oblicua por ese mismo lado. Las verticales son independientes y sí pueden coexistir.",
        },
        {
          id: 11,
          question: "¿Qué tipo de función de una variable no tiene nunca ninguna asíntota?",
          options: [
            "Irracionales.",
            "Exponenciales.",
            "Polinómicas de grado > 1.",
            "Logarítmicas.",
          ],
          correct: 2,
          explanation:
            "Las funciones polinómicas de grado mayor que 1 no tienen asíntotas de ningún tipo: no tienen verticales (son continuas en todo ℝ), ni horizontales u oblicuas (tienden a ±∞ con crecimiento no lineal). Las exponenciales y logarítmicas sí tienen asíntotas horizontales o verticales, y las irracionales pueden tenerlas.",
        },
        {
          id: 12,
          question:
            "¿En qué tipo de función, si posee una asíntota horizontal u oblicua en +∞, entonces tiene la misma asíntota en -∞?",
          options: [
            "Racionales.",
            "Exponenciales.",
            "Polinómicas de grado > 1.",
            "Ninguna de las anteriores.",
          ],
          correct: 0,
          explanation:
            "En las funciones racionales, la asíntota horizontal u oblicua depende de los grados y coeficientes del numerador y denominador, y ese comportamiento es el mismo en +∞ y en -∞, por lo que comparten la misma asíntota por ambos lados. Las exponenciales tienen comportamiento distinto en cada extremo, y las polinómicas de grado > 1 no tienen asíntotas.",
        },
        {
          id: 13,
          question: "La integral definida:",
          options: [
            "Equivale al área encerrada bajo la curva y = f(x) y las rectas x = a y x = b.",
            "Es aquella integral en la que está definida su primitiva.",
            "Representa la pendiente de la curva del área bajo la gráfica de la integral.",
            "Ninguna de las anteriores.",
          ],
          correct: 0,
          explanation:
            "La integral definida ∫ₐᵇ f(x) dx representa geométricamente el área (con signo) encerrada entre la curva y = f(x), el eje X y las rectas verticales x = a y x = b. No se define por 'tener primitiva definida' ni representa una pendiente (eso es la derivada): su significado es el área acumulada.",
        },
        {
          id: 14,
          question: "Una integral inmediata:",
          options: [
            "Se define como aquella integral que se resuelve muy rápido.",
            "Es un método de integración que no necesita realizar ninguna transformación para ello.",
            "Puede identificarse de qué función procede la derivada que aparece bajo el signo de la integral.",
            "B y C son correctas.",
          ],
          correct: 3,
          explanation:
            "Una integral inmediata es aquella que se resuelve reconociendo directamente la primitiva, sin transformaciones ni técnicas adicionales (opción B), precisamente porque se identifica de qué función proviene la derivada que aparece en el integrando (opción C). Como ambas afirmaciones son correctas, la respuesta es 'B y C'. Lo definitorio no es la rapidez, sino la ausencia de transformación.",
        },
        {
          id: 15,
          question: "¿Cuál de las siguientes es una aplicación común de la integral definida?",
          options: [
            "Calcular la velocidad de un objeto dado su desplazamiento en función del tiempo.",
            "Encontrar el área bajo la gráfica de una función en un intervalo determinado.",
            "Determinar la pendiente de una curva en un punto específico.",
            "Calcular el valor máximo de una función continua en un intervalo.",
          ],
          correct: 1,
          explanation:
            "La aplicación por excelencia de la integral definida es calcular el área bajo la gráfica de una función en un intervalo. Obtener la velocidad a partir del desplazamiento y la pendiente en un punto son aplicaciones de la derivada, y hallar el valor máximo se hace con el estudio de derivadas/puntos críticos, no con la integral.",
        },
        {
          id: 16,
          question: "¿Qué se entiende por «integral indefinida» de una función f(x)?",
          options: [
            "Es el área bajo la curva de f(x) en un intervalo específico.",
            "Es el proceso inverso de la derivada de f(x), cuyo resultado incluye una constante de integración.",
            "Es el límite cuando x → ∞ de la función f(x).",
            "Es la suma de los valores de f(x) en un conjunto finito de puntos.",
          ],
          correct: 1,
          explanation:
            "La integral indefinida es la operación inversa de la derivada: busca la familia de primitivas F(x) tales que F'(x) = f(x), y por eso su resultado incluye una constante de integración '+ C'. El área en un intervalo es la integral definida (con límites), no la indefinida, que representa un conjunto de funciones.",
        },
        {
          id: 17,
          question:
            "Determina f(x) sabiendo que f'''(x) = 24x, f''(0) = 2, f'(0) = 1, f(0) = 0.",
          options: [
            "f(x) = x⁴ + x² + x + 1.",
            "f(x) = x⁴ + x² + x.",
            "f(x) = 4x⁴ + 2x² + x.",
            "No existe ninguna función que cumpla los requisitos.",
          ],
          correct: 1,
          explanation:
            "Integrando sucesivamente: f''(x) = ∫24x dx = 12x² + C₁, y como f''(0) = 2 ⇒ C₁ = 2, luego f''(x) = 12x² + 2. Después f'(x) = 4x³ + 2x + C₂, con f'(0) = 1 ⇒ C₂ = 1, así f'(x) = 4x³ + 2x + 1. Finalmente f(x) = x⁴ + x² + x + C₃, con f(0) = 0 ⇒ C₃ = 0. Por tanto f(x) = x⁴ + x² + x.",
        },
        {
          id: 18,
          question: "Es conveniente usar integración por partes en ∫ f(x)·g(x) dx si:",
          options: [
            "Al derivar ambas funciones f(x) y g(x), estas se simplifican.",
            "Al integrar ambas funciones f(x) y g(x), estas se simplifican.",
            "Las funciones f(x) y g(x) son continuas.",
            "Una se simplifica al derivarla y la otra, al integrarla.",
          ],
          correct: 3,
          explanation:
            "La integración por partes (∫u dv = uv - ∫v du) conviene cuando uno de los factores se simplifica al derivarlo (se elige como u) y el otro es fácil de integrar (se elige como dv). El caso típico es un polinomio (que baja de grado al derivar) multiplicado por una exponencial o trigonométrica. La continuidad sola no es criterio para elegir esta técnica.",
        },
        {
          id: 19,
          question: "En el test del cociente, si el resultado es igual a 1, podemos decir que:",
          options: [
            "Converge.",
            "No sabemos si converge o diverge.",
            "Diverge.",
            "Ninguna de las anteriores.",
          ],
          correct: 1,
          explanation:
            "Cuando el límite del criterio del cociente vale exactamente 1, el criterio es inconcluyente: la serie puede converger o divergir, y no se puede decidir con él; hay que recurrir a otro criterio. Solo con L < 1 (converge) o L > 1 (diverge) el criterio da una respuesta clara.",
        },
        {
          id: 20,
          question: "En el test de la raíz, si el resultado es mayor que 1, podemos decir que:",
          options: [
            "Converge.",
            "No sabemos si converge o diverge.",
            "Diverge.",
            "Ninguna de las anteriores.",
          ],
          correct: 2,
          explanation:
            "En el criterio de la raíz (Cauchy), si el límite de (aₙ)^(1/n) es mayor que 1, la serie diverge, igual que ocurre en el criterio del cociente. Si es menor que 1 converge, y si es exactamente 1 el criterio no decide.",
        },
        {
          id: 21,
          question: "Una sucesión de números reales…:",
          options: [
            "Si es convergente está acotada.",
            "Si está acotada es convergente.",
            "Si está acotada superiormente, también lo está inferiormente.",
            "Ninguna de las anteriores.",
          ],
          correct: 0,
          explanation:
            "Toda sucesión convergente está acotada (es un teorema clásico). El recíproco es falso: estar acotada no implica converger (por ejemplo, (-1)ⁿ está acotada pero oscila y no converge). Y estar acotada superiormente no implica estarlo inferiormente. Solo la primera afirmación es siempre cierta.",
        },
        {
          id: 22,
          question:
            "¿Cuál de las siguientes afirmaciones sobre el análisis numérico es correcta?",
          options: [
            "Se ocupa exclusivamente de la solución exacta de ecuaciones algebraicas.",
            "Se centra en desarrollar algoritmos para la resolución aproximada de problemas matemáticos y en estimar errores en los cálculos.",
            "No tiene aplicaciones prácticas y solo es relevante en el ámbito teórico.",
            "Se basa en métodos analíticos exactos y no usa métodos computacionales o aproximados.",
          ],
          correct: 1,
          explanation:
            "El análisis numérico desarrolla algoritmos para resolver de forma aproximada problemas matemáticos que no tienen (o no conviene buscar) solución exacta, y estudia y estima los errores de esas aproximaciones. Precisamente NO busca soluciones exactas ni prescinde de la computación: al contrario, es eminentemente práctico y computacional.",
        },
        {
          id: 23,
          question:
            "¿Cuál de las siguientes afirmaciones describe mejor los pilares fundamentales del análisis numérico?",
          options: [
            "Cálculo exacto de raíces algebraicas y soluciones exactas de problemas algebraicos y diferenciales.",
            "Aproximación de soluciones mediante algoritmos computacionales, análisis de errores y estabilidad de los métodos.",
            "Integración simbólica de funciones matemáticas complejas exclusivamente.",
            "Resolución de ecuaciones diferenciales mediante técnicas gráficas, sin computadoras ni algoritmos.",
          ],
          correct: 1,
          explanation:
            "Los tres pilares del análisis numérico son: la aproximación de soluciones mediante algoritmos computacionales, el análisis de errores (cuánto nos alejamos del valor real) y la estabilidad de los métodos (que pequeños errores no se amplifiquen). No se centra en soluciones exactas, ni solo en integración simbólica, ni renuncia a las computadoras.",
        },
        {
          id: 24,
          question:
            "¿Cuál de las siguientes afirmaciones es correcta sobre los tipos de algoritmos y sus propiedades?",
          options: [
            "Los constructivos generan una solución explícita en pasos finitos; los no constructivos dan solución indirecta y pueden no terminar nunca.",
            "Los constructivos pueden ser finitos o infinitos, pero los no constructivos siempre son finitos.",
            "Los finitos siempre dan solución explícita; los infinitos nunca terminan ni ofrecen solución práctica.",
            "Los no constructivos pueden ser finitos o infinitos y dan soluciones indirectas o aproximadas, mientras que los constructivos generan una solución explícita y siempre terminan en un número finito de pasos.",
          ],
          correct: 3,
          explanation:
            "La descripción correcta y completa es la opción D: los algoritmos constructivos producen una solución explícita y terminan en un número finito de pasos, mientras que los no constructivos pueden ser finitos o infinitos y proporcionan soluciones indirectas o aproximadas. Las demás opciones mezclan o invierten estas propiedades.",
        },
        {
          id: 25,
          question: "Los métodos numéricos para resolver ecuaciones no lineales:",
          options: [
            "Proporcionan la solución exacta del problema.",
            "Mediante una serie de operaciones algebraicas permiten obtener la solución de la ecuación.",
            "A y B son correctas.",
            "Ninguna de las anteriores.",
          ],
          correct: 3,
          explanation:
            "Los métodos numéricos para ecuaciones no lineales (bisección, Newton-Raphson, etc.) NO dan la solución exacta, sino una aproximación obtenida por iteración sucesiva hasta alcanzar una tolerancia, no por simples operaciones algebraicas cerradas. Por eso A y B son incorrectas y la respuesta es 'Ninguna de las anteriores'.",
        },
        {
          id: 26,
          question: "¿Cuál es el objetivo principal del método de bisección?",
          options: [
            "Encontrar la derivada de una función.",
            "Resolver sistemas de ecuaciones lineales.",
            "Encontrar las raíces de una función continua.",
            "Aproximar integrales definidas.",
          ],
          correct: 2,
          explanation:
            "El método de bisección busca raíces (ceros) de una función continua: partiendo de un intervalo donde la función cambia de signo (Bolzano), lo va dividiendo por la mitad y se queda con el subintervalo que sigue conteniendo la raíz, aproximándose a ella. No calcula derivadas, ni resuelve sistemas lineales, ni aproxima integrales.",
        },
        {
          id: 27,
          question:
            "¿Cuál de los siguientes escenarios puede causar que el método de Newton-Raphson falle?",
          options: [
            "La función es no continua.",
            "La derivada se anula en algún punto del intervalo.",
            "La función tiene múltiples raíces.",
            "Todas las anteriores.",
          ],
          correct: 1,
          explanation:
            "Newton-Raphson usa la fórmula xₙ₊₁ = xₙ - f(xₙ)/f'(xₙ); si la derivada f'(xₙ) se anula, se produce una división por cero y el método falla (o diverge). Ese es el escenario clásico de fallo. La no continuidad ya invalidaría las hipótesis del método, y tener varias raíces no lo hace fallar por sí mismo; el problema directo y característico es la derivada nula.",
        },
        {
          id: 28,
          question: "¿Cuál es el principio de inclusión-exclusión?",
          options: [
            "Se aplica para calcular la probabilidad de eventos dependientes.",
            "Es un método para determinar combinaciones sin repetición.",
            "Se usa para simplificar la suma de series aritméticas.",
            "Se utiliza para contar el número de elementos en la unión de dos o más conjuntos.",
          ],
          correct: 3,
          explanation:
            "El principio de inclusión-exclusión sirve para contar los elementos de la unión de dos o más conjuntos evitando contar dos veces los comunes: |A ∪ B| = |A| + |B| - |A ∩ B| (y su generalización para más conjuntos). No es una técnica de combinaciones ni de series aritméticas, aunque tenga aplicaciones en probabilidad.",
        },
        {
          id: 29,
          question:
            "En el formato IEEE 754, ¿qué significa que un número esté en «notación normalizada»?",
          options: [
            "Que el número tiene un formato específico con un número fijo de decimales.",
            "Que el primer dígito de la mantisa es siempre 1 (en binario).",
            "Que el número se representa sin parte fraccionaria.",
            "Que el número es un entero.",
          ],
          correct: 1,
          explanation:
            "En la representación normalizada de IEEE 754, la mantisa se ajusta de forma que su primer dígito (en binario) sea siempre 1; ese bit se sobreentiende (bit implícito) y no se almacena, lo que aprovecha mejor la precisión. No tiene que ver con un número fijo de decimales, ni con carecer de parte fraccionaria, ni con ser entero.",
        },
        {
          id: 30,
          question:
            "¿Cuál describe mejor el «error de redondeo» en la representación de números en un ordenador?",
          options: [
            "Es la diferencia entre el valor real y el valor representado debido a la limitación en la precisión de los números.",
            "Es el error que ocurre al realizar operaciones aritméticas con números enteros.",
            "Es el error que se produce al convertir un número de decimal a binario.",
            "Es el error que ocurre cuando se utiliza un número en notación normalizada.",
          ],
          correct: 0,
          explanation:
            "El error de redondeo es la diferencia entre el valor real de un número y el que realmente puede almacenar el ordenador, que dispone de una precisión finita (un número limitado de bits para la mantisa). No es exclusivo de la conversión decimal-binario ni de las operaciones con enteros: surge por la imposibilidad de representar exactamente la mayoría de los números reales.",
        },
      ],
    },
  ],
};
