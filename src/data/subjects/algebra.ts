import type { Subject } from "../../types";

export const algebra: Subject = {
  id: "algebra-matematica-discreta",
  name: "Álgebra y Matemática Discreta",
  icon: "🔢",
  topics: [
    {
      id: 1,
      name: "Actividad 1: Operaciones con matrices y resolución de sistemas lineales",
      questions: [
        {
          id: 1,
          question:
            "La matriz A = [[4, 0, 2], [-1, 1, 1], [1, -2, -3]] tiene dimensión…",
          options: ["2 × 3", "3 × 3", "3 × 1", "1 × 3"],
          correct: 1,
          explanation:
            "La dimensión de una matriz se expresa como filas × columnas. A tiene 3 filas y 3 columnas, por lo que es 3 × 3 y además es cuadrada (mismo número de filas que de columnas), condición necesaria para poder calcular su determinante y su inversa.",
        },
        {
          id: 2,
          question: "La matriz B = [-10, 2, 0]ᵀ (vector columna) tiene dimensión…",
          options: ["1 × 3", "3 × 3", "3 × 1", "3 × 2"],
          correct: 2,
          explanation:
            "B es un vector columna con 3 filas y 1 sola columna, por tanto su dimensión es 3 × 1. Al no ser cuadrada, no tiene determinante ni inversa. Su número de filas (3) coincide con el número de columnas de A (3), lo que sí permite el producto A · B.",
        },
        {
          id: 3,
          question: "En la matriz -3A, ¿cuál es el elemento de la posición (1,1)?",
          options: ["-12", "12", "-1", "4"],
          correct: 0,
          explanation:
            "Multiplicar una matriz por un escalar consiste en multiplicar cada uno de sus elementos por ese escalar. El elemento (1,1) de A es 4, así que en -3A vale 4 × (-3) = -12. Las demás opciones olvidan el signo o el factor.",
        },
        {
          id: 4,
          question: "En la matriz -3A, ¿cuál es el elemento de la posición (1,3)?",
          options: ["6", "-6", "2", "-2"],
          correct: 1,
          explanation:
            "El elemento (1,3) de A es 2; al calcular -3A se multiplica por -3, obteniendo 2 × (-3) = -6. Recuerda que la multiplicación por escalar afecta a TODOS los elementos por igual, conservando la dimensión de la matriz.",
        },
        {
          id: 5,
          question:
            "¿Por qué se puede realizar el producto A · B con A de 3×3 y B de 3×1?",
          options: [
            "Porque ambas son matrices cuadradas",
            "Porque el número de columnas de A (3) coincide con el número de filas de B (3)",
            "Porque tienen el mismo número de filas",
            "Porque el determinante de A es distinto de cero",
          ],
          correct: 1,
          explanation:
            "Dos matrices se pueden multiplicar solo si el número de columnas de la primera coincide con el número de filas de la segunda. A es 3×3 y B es 3×1: las 3 columnas de A casan con las 3 filas de B, así que el producto existe. Ni son ambas cuadradas (B no lo es) ni el determinante interviene en esta condición.",
        },
        {
          id: 6,
          question: "¿Qué dimensión tiene la matriz resultante del producto A · B?",
          options: ["3 × 3", "3 × 1", "1 × 3", "1 × 1"],
          correct: 1,
          explanation:
            "Al multiplicar una matriz m×n por una n×p, el resultado es m×p (se toman las filas de la primera y las columnas de la segunda). Aquí A es 3×3 y B es 3×1, luego A · B es 3×1: un vector columna con 3 elementos.",
        },
        {
          id: 7,
          question:
            "El primer elemento del producto A · B (fila 1) es 4·(-10) + 0·2 + 2·0. ¿Cuánto vale?",
          options: ["-40", "-8", "40", "-10"],
          correct: 0,
          explanation:
            "Cada elemento del producto es la suma de los productos de la fila de A por la columna de B. Para la primera fila: 4·(-10) + 0·2 + 2·0 = -40 + 0 + 0 = -40. Este es el procedimiento fila-por-columna que define el producto de matrices.",
        },
        {
          id: 8,
          question: "El resultado completo del producto A · B es…",
          options: [
            "(-40, 12, -14)ᵀ",
            "(-40, -12, 14)ᵀ",
            "(-8, 12, -14)ᵀ",
            "(40, -12, 14)ᵀ",
          ],
          correct: 0,
          explanation:
            "Fila 1: 4·(-10)+0·2+2·0 = -40. Fila 2: (-1)·(-10)+1·2+1·0 = 10+2 = 12. Fila 3: 1·(-10)+(-2)·2+(-3)·0 = -10-4 = -14. Por tanto A · B = (-40, 12, -14)ᵀ, un vector columna 3×1.",
        },
        {
          id: 9,
          question: "¿Se puede realizar el producto B · A (con B de 3×1 y A de 3×3)?",
          options: [
            "Sí, porque el producto de matrices siempre es posible",
            "No, porque el número de columnas de B (1) no coincide con el número de filas de A (3)",
            "Sí, y el resultado es igual a A · B",
            "No, porque B no es cuadrada",
          ],
          correct: 1,
          explanation:
            "Para B · A necesitaríamos que las columnas de B (1) igualaran a las filas de A (3), y 1 ≠ 3, así que el producto no existe. Esto ilustra que el producto de matrices no es conmutativo: que A · B exista no implica que B · A exista. El motivo no es que B no sea cuadrada, sino la incompatibilidad de dimensiones.",
        },
        {
          id: 10,
          question: "¿Por qué se puede calcular el determinante de A?",
          options: [
            "Porque A es una matriz cuadrada",
            "Porque todos sus elementos son distintos de cero",
            "Porque A tiene inversa",
            "Porque A es de dimensión 3 × 3 exactamente",
          ],
          correct: 0,
          explanation:
            "El determinante solo está definido para matrices cuadradas (mismo número de filas que de columnas). A es 3×3, por eso se puede calcular. No depende de que sus elementos sean no nulos ni de que tenga inversa (de hecho, es al revés: la inversa existe SI el determinante es distinto de cero).",
        },
        {
          id: 11,
          question: "¿Por qué NO se puede calcular el determinante de B?",
          options: [
            "Porque contiene un cero",
            "Porque B no es una matriz cuadrada (es 3 × 1)",
            "Porque su determinante sería cero",
            "Porque B es un vector",
          ],
          correct: 1,
          explanation:
            "El determinante solo existe para matrices cuadradas. B es 3×1 (vector columna), no cuadrada, así que ni siquiera tiene sentido hablar de su determinante. Que contenga un cero es irrelevante, y no es que su determinante 'sea cero': simplemente no está definido.",
        },
        {
          id: 12,
          question:
            "El determinante de A = [[4, 0, 2], [-1, 1, 1], [1, -2, -3]] vale…",
          options: ["-2", "2", "0", "-4"],
          correct: 0,
          explanation:
            "Desarrollando por la primera fila: det(A) = 4·(1·(-3) - 1·(-2)) - 0·(…) + 2·((-1)·(-2) - 1·1) = 4·(-3+2) + 2·(2-1) = 4·(-1) + 2·1 = -4 + 2 = -2. Como el determinante es distinto de cero, A es invertible y el sistema AX = B tiene solución única.",
        },
        {
          id: 13,
          question: "¿Por qué existe la matriz inversa de A?",
          options: [
            "Porque A es cuadrada y su determinante es distinto de cero",
            "Porque A es cuadrada, aunque su determinante sea cero",
            "Porque todos los elementos de A son enteros",
            "Porque A tiene más filas que columnas",
          ],
          correct: 0,
          explanation:
            "Una matriz tiene inversa si y solo si es cuadrada y su determinante es distinto de cero (matriz regular o no singular). A es 3×3 y det(A) = -2 ≠ 0, por lo que A⁻¹ existe. Si el determinante fuera cero, la matriz sería singular y no tendría inversa.",
        },
        {
          id: 14,
          question:
            "¿Cuál es la condición necesaria y suficiente para que una matriz cuadrada tenga inversa?",
          options: [
            "Que su determinante sea distinto de cero",
            "Que su determinante sea igual a cero",
            "Que todos sus elementos sean positivos",
            "Que sea de dimensión par",
          ],
          correct: 0,
          explanation:
            "Una matriz cuadrada es invertible exactamente cuando su determinante es distinto de cero. Si el determinante es cero, la matriz es singular: sus filas (o columnas) son linealmente dependientes y no admite inversa. El signo de los elementos o la paridad de la dimensión no influyen.",
        },
        {
          id: 15,
          question: "Una matriz cuadrada cuyo determinante es cero se denomina…",
          options: ["Singular", "Regular", "Identidad", "Simétrica"],
          correct: 0,
          explanation:
            "Una matriz con determinante cero se llama singular (o no invertible): no tiene inversa. Si el determinante es distinto de cero se llama regular o no singular. La identidad es un caso particular de matriz regular (su determinante es 1), y una matriz simétrica es la que coincide con su transpuesta, algo independiente del determinante.",
        },
        {
          id: 16,
          question:
            "¿Qué método se utiliza para resolver el sistema AX = B en la actividad?",
          options: [
            "Método de eliminación de Gauss",
            "Regla de Sarrus",
            "Método de mínimos cuadrados",
            "Interpolación de Lagrange",
          ],
          correct: 0,
          explanation:
            "Se resuelve por el método de eliminación de Gauss, que transforma la matriz ampliada del sistema en una forma escalonada mediante operaciones elementales por filas, permitiendo despejar las incógnitas. La regla de Sarrus solo sirve para calcular determinantes de 3×3, y las otras dos opciones pertenecen a otros ámbitos (ajuste de datos e interpolación).",
        },
        {
          id: 17,
          question:
            "Resolviendo AX = B con X = (x, y, z), ¿cuál es el valor de x?",
          options: ["-1", "1", "4", "-3"],
          correct: 0,
          explanation:
            "Al resolver el sistema (4x + 2z = -10; -x + y + z = 2; x - 2y - 3z = 0) se obtiene x = -1. Se puede comprobar sustituyendo en la primera ecuación junto con z = -3: 4·(-1) + 2·(-3) = -4 - 6 = -10 ✓.",
        },
        {
          id: 18,
          question:
            "Resolviendo AX = B con X = (x, y, z), ¿cuál es el valor de y?",
          options: ["4", "-4", "1", "-1"],
          correct: 0,
          explanation:
            "La solución del sistema da y = 4. Verificación con la segunda ecuación (-x + y + z = 2) usando x = -1 y z = -3: -(-1) + 4 + (-3) = 1 + 4 - 3 = 2 ✓.",
        },
        {
          id: 19,
          question:
            "Resolviendo AX = B con X = (x, y, z), ¿cuál es el valor de z?",
          options: ["-3", "3", "-1", "0"],
          correct: 0,
          explanation:
            "La solución del sistema da z = -3. Verificación con la tercera ecuación (x - 2y - 3z = 0) usando x = -1, y = 4: -1 - 2·4 - 3·(-3) = -1 - 8 + 9 = 0 ✓.",
        },
        {
          id: 20,
          question: "La solución completa del sistema AX = B es…",
          options: [
            "(x, y, z) = (-1, 4, -3)",
            "(x, y, z) = (1, -4, 3)",
            "(x, y, z) = (-1, -4, -3)",
            "(x, y, z) = (0, 2, -5)",
          ],
          correct: 0,
          explanation:
            "La única solución del sistema es (x, y, z) = (-1, 4, -3). Al ser det(A) ≠ 0, el sistema es compatible determinado, es decir, tiene una y solo una solución, que satisface simultáneamente las tres ecuaciones.",
        },
        {
          id: 21,
          question: "El producto de matrices, en general…",
          options: [
            "Es conmutativo: A · B = B · A siempre",
            "No es conmutativo: A · B ≠ B · A en general",
            "Solo se puede hacer entre matrices cuadradas",
            "Da siempre una matriz de la misma dimensión que los factores",
          ],
          correct: 1,
          explanation:
            "El producto de matrices NO es conmutativo: en general A · B ≠ B · A, e incluso puede que uno de los dos productos ni siquiera exista por incompatibilidad de dimensiones (como ocurre con A · B y B · A en esta actividad). Sí se pueden multiplicar matrices no cuadradas si las dimensiones encajan, y la dimensión del resultado depende de las de los factores.",
        },
        {
          id: 22,
          question: "¿En qué consiste esencialmente el método de eliminación de Gauss?",
          options: [
            "En calcular el determinante por la regla de Sarrus",
            "En transformar el sistema en una forma escalonada mediante operaciones elementales por filas",
            "En invertir siempre la matriz de coeficientes",
            "En sustituir valores aleatorios hasta acertar",
          ],
          correct: 1,
          explanation:
            "El método de Gauss reduce la matriz ampliada del sistema a una forma escalonada aplicando operaciones elementales por filas (intercambiar filas, multiplicar una fila por un escalar no nulo, sumar a una fila un múltiplo de otra). Una vez escalonada, se despejan las incógnitas por sustitución hacia atrás. No requiere calcular la inversa ni el determinante.",
        },
        {
          id: 23,
          question: "Una matriz es cuadrada cuando…",
          options: [
            "Tiene el mismo número de filas que de columnas",
            "Todos sus elementos son iguales",
            "Su determinante es 1",
            "Tiene más columnas que filas",
          ],
          correct: 0,
          explanation:
            "Una matriz es cuadrada si tiene el mismo número de filas que de columnas (n × n). Solo las matrices cuadradas tienen determinante e inversa. Que los elementos sean iguales o que el determinante valga 1 son propiedades particulares que no definen la condición de ser cuadrada.",
        },
        {
          id: 24,
          question: "El determinante de la matriz identidad de orden n es…",
          options: ["1", "0", "n", "-1"],
          correct: 0,
          explanation:
            "El determinante de la matriz identidad es siempre 1, independientemente de su orden, porque es una matriz diagonal con todos los elementos de la diagonal iguales a 1 (y el determinante de una matriz diagonal es el producto de su diagonal). Al ser distinto de cero, la identidad siempre es invertible (su inversa es ella misma).",
        },
        {
          id: 25,
          question:
            "Para poder multiplicar una matriz de dimensión m×n por otra de dimensión p×q, se requiere que…",
          options: ["m = q", "n = p", "m = p", "n = q"],
          correct: 1,
          explanation:
            "El producto de una matriz m×n por una p×q existe si y solo si n = p (columnas de la primera igual a filas de la segunda), y el resultado tiene dimensión m×q. Es la regla fundamental del producto matricial; las demás igualdades no garantizan la compatibilidad.",
        },
        {
          id: 26,
          question: "Calcular -3A es un ejemplo de…",
          options: [
            "Producto de dos matrices",
            "Multiplicación de una matriz por un escalar",
            "Cálculo de la matriz inversa",
            "Cálculo del determinante",
          ],
          correct: 1,
          explanation:
            "Multiplicar A por el número -3 es una multiplicación por escalar: cada elemento de la matriz se multiplica por ese número, y el resultado conserva la misma dimensión que A. No es un producto entre dos matrices (que sigue la regla fila-por-columna) ni tiene relación con la inversa o el determinante.",
        },
        {
          id: 27,
          question:
            "Un sistema de ecuaciones lineales AX = B con det(A) ≠ 0 es…",
          options: [
            "Compatible determinado (solución única)",
            "Compatible indeterminado (infinitas soluciones)",
            "Incompatible (sin solución)",
            "Imposible de resolver",
          ],
          correct: 0,
          explanation:
            "Si la matriz de coeficientes es cuadrada y su determinante es distinto de cero, el sistema es compatible determinado: tiene una única solución. Si el determinante fuera cero, el sistema sería compatible indeterminado (infinitas soluciones) o incompatible (ninguna), según el término independiente.",
        },
        {
          id: 28,
          question:
            "Dado que det(A) = -2 ≠ 0, el sistema AX = B de la actividad es…",
          options: [
            "Compatible determinado, con la única solución (-1, 4, -3)",
            "Compatible indeterminado, con infinitas soluciones",
            "Incompatible, sin solución",
            "No se puede clasificar",
          ],
          correct: 0,
          explanation:
            "Como det(A) = -2 es distinto de cero, el sistema es compatible determinado y su única solución es (x, y, z) = (-1, 4, -3). El determinante no nulo garantiza tanto la existencia de la inversa de A como la unicidad de la solución.",
        },
        {
          id: 29,
          question: "La matriz inversa A⁻¹ de una matriz A cumple la propiedad…",
          options: [
            "A · A⁻¹ = A⁻¹ · A = I (matriz identidad)",
            "A · A⁻¹ = 0 (matriz nula)",
            "A · A⁻¹ = A",
            "A⁻¹ = -A",
          ],
          correct: 0,
          explanation:
            "Por definición, la inversa de A es la matriz A⁻¹ tal que A · A⁻¹ = A⁻¹ · A = I, la matriz identidad. Es el análogo matricial del inverso multiplicativo de un número. No da la matriz nula, ni la propia A, ni coincide con -A (que sería la opuesta, no la inversa).",
        },
        {
          id: 30,
          question:
            "Además de Gauss, ¿cómo se puede resolver el sistema AX = B usando la inversa de A?",
          options: [
            "Calculando X = A⁻¹ · B",
            "Calculando X = A · B",
            "Calculando X = B · A⁻¹",
            "Calculando X = det(A) · B",
          ],
          correct: 0,
          explanation:
            "Si A es invertible, de AX = B se despeja multiplicando por la izquierda por A⁻¹: A⁻¹AX = A⁻¹B, es decir X = A⁻¹ · B. El orden importa (por eso es A⁻¹ · B y no B · A⁻¹, que ni siquiera sería compatible en dimensiones), y no interviene el determinante como factor directo.",
        },
      ],
    },
    {
      id: 2,
      name: "Actividad 2: Teoría de números (Teorema Chino del Resto) y operaciones con conjuntos",
      questions: [
        {
          id: 1,
          question:
            "¿Qué teorema se utiliza para resolver el sistema de congruencias x≡1 (mód 4), x≡2 (mód 5), x≡3 (mód 7)?",
          options: [
            "Teorema Chino del Resto",
            "Pequeño Teorema de Fermat",
            "Teorema de Euler",
            "Teorema fundamental de la aritmética",
          ],
          correct: 0,
          explanation:
            "El Teorema Chino del Resto (TCR) resuelve sistemas de varias congruencias simultáneas cuando los módulos son coprimos entre sí, garantizando una solución única módulo el producto de los módulos. El Pequeño Teorema de Fermat y el de Euler tratan de potencias modulares, y el teorema fundamental de la aritmética se refiere a la factorización única en primos.",
        },
        {
          id: 2,
          question:
            "¿Qué condición deben cumplir los módulos para poder aplicar el Teorema Chino del Resto?",
          options: [
            "Deben ser coprimos entre sí (dos a dos)",
            "Deben ser todos números primos",
            "Deben ser todos pares",
            "Deben ser consecutivos",
          ],
          correct: 0,
          explanation:
            "El TCR requiere que los módulos sean coprimos dos a dos (que cada par tenga máximo común divisor 1). No hace falta que sean primos individualmente: por ejemplo 4 no es primo, pero 4, 5 y 7 son coprimos entre sí. Tampoco necesitan ser pares ni consecutivos.",
        },
        {
          id: 3,
          question: "Los módulos 4, 5 y 7 del sistema, ¿son coprimos entre sí?",
          options: [
            "Sí, cada par tiene máximo común divisor 1",
            "No, porque 4 no es primo",
            "No, porque comparten el factor 2",
            "Solo 5 y 7 lo son",
          ],
          correct: 0,
          explanation:
            "Sí: mcd(4,5)=1, mcd(4,7)=1 y mcd(5,7)=1, luego son coprimos dos a dos y se puede aplicar el TCR. Que 4 no sea primo no impide la coprimalidad: lo que importa es que no compartan factores comunes con los otros módulos. 4 = 2², pero ni 5 ni 7 contienen el factor 2.",
        },
        {
          id: 4,
          question:
            "En el Teorema Chino del Resto con módulos 4, 5 y 7, ¿cuál es el módulo del producto M?",
          options: ["140", "16", "70", "35"],
          correct: 0,
          explanation:
            "El módulo global es el producto de todos los módulos: M = 4 · 5 · 7 = 140. La solución del sistema es única módulo 140, es decir, todas las soluciones difieren en múltiplos de 140. Las otras cifras no corresponden a ese producto.",
        },
        {
          id: 5,
          question:
            "¿Cuál es la menor solución positiva del sistema x≡1 (mód 4), x≡2 (mód 5), x≡3 (mód 7)?",
          options: ["17", "23", "52", "7"],
          correct: 0,
          explanation:
            "La menor solución positiva es x = 17. Se comprueba fácilmente: 17 = 4·4 + 1 (resto 1 mód 4 ✓), 17 = 5·3 + 2 (resto 2 mód 5 ✓) y 17 = 7·2 + 3 (resto 3 mód 7 ✓). Cumple las tres congruencias a la vez.",
        },
        {
          id: 6,
          question: "La solución general del sistema de congruencias es…",
          options: [
            "x ≡ 17 (mód 140)",
            "x ≡ 17 (mód 16)",
            "x ≡ 3 (mód 140)",
            "x ≡ 140 (mód 17)",
          ],
          correct: 0,
          explanation:
            "Por el TCR, la solución es única módulo el producto de los módulos (140) y vale x ≡ 17 (mód 140). Esto significa que las soluciones son 17, 157, 297, … (y también 17 - 140 = -123, etc.), todas separadas por 140.",
        },
        {
          id: 7,
          question: "¿Cuánto vale 17 mód 4?",
          options: ["1", "2", "3", "0"],
          correct: 0,
          explanation:
            "17 dividido entre 4 da cociente 4 y resto 1 (17 = 4·4 + 1), por lo que 17 mód 4 = 1. Esto confirma la primera congruencia del sistema, x ≡ 1 (mód 4).",
        },
        {
          id: 8,
          question: "¿Cuánto vale 17 mód 7?",
          options: ["3", "2", "1", "4"],
          correct: 0,
          explanation:
            "17 = 7·2 + 3, así que el resto es 3 y 17 mód 7 = 3. Esto verifica la tercera congruencia, x ≡ 3 (mód 7), y junto con las otras dos confirma que 17 es solución del sistema.",
        },
        {
          id: 9,
          question:
            "El conjunto A = {x ∈ ℕ | 1 ≤ x ≤ 10} definido por extensión es…",
          options: [
            "{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}",
            "{0, 1, 2, …, 10}",
            "{1, 3, 5, 7, 9}",
            "{2, 4, 6, 8, 10}",
          ],
          correct: 0,
          explanation:
            "Definir por extensión es listar todos sus elementos. A son los naturales entre 1 y 10 (ambos incluidos): {1,2,3,4,5,6,7,8,9,10}. No incluye el 0 (la condición es 1 ≤ x) y no se limita a impares ni a pares.",
        },
        {
          id: 10,
          question: "Con B = {3, 6, 9} y C = {2, 3, 5, 7, 10}, ¿cuál es B ∪ C?",
          options: [
            "{2, 3, 5, 6, 7, 9, 10}",
            "{3}",
            "{2, 5, 7, 10}",
            "{2, 3, 3, 5, 6, 7, 9, 10}",
          ],
          correct: 0,
          explanation:
            "La unión B ∪ C reúne todos los elementos que están en B o en C (sin repetir): {2, 3, 5, 6, 7, 9, 10}. El 3 aparece en ambos conjuntos pero en un conjunto no se repiten elementos, por eso figura una sola vez.",
        },
        {
          id: 11,
          question: "Con B = {3, 6, 9} y C = {2, 3, 5, 7, 10}, ¿cuál es B ∩ C?",
          options: ["{3}", "{ } (vacío)", "{3, 6, 9}", "{2, 3, 5, 6, 7, 9, 10}"],
          correct: 0,
          explanation:
            "La intersección B ∩ C son los elementos comunes a ambos conjuntos. El único elemento que está a la vez en B y en C es el 3, por lo que B ∩ C = {3}. No es vacío porque sí comparten un elemento.",
        },
        {
          id: 12,
          question:
            "El complemento de C respecto de A (A \\ C), con A = {1,…,10} y C = {2,3,5,7,10}, es…",
          options: [
            "{1, 4, 6, 8, 9}",
            "{2, 3, 5, 7, 10}",
            "{1, 4, 6, 8}",
            "{ } (vacío)",
          ],
          correct: 0,
          explanation:
            "El complemento de C respecto de A son los elementos de A que NO están en C. Quitando de {1,…,10} los elementos de C = {2,3,5,7,10}, quedan {1, 4, 6, 8, 9}. El complemento siempre se calcula respecto a un conjunto universal, que aquí es A.",
        },
        {
          id: 13,
          question:
            "¿Cuántos elementos (pares ordenados) tiene el producto cartesiano B × C, con |B| = 3 y |C| = 5?",
          options: ["15", "8", "3", "5"],
          correct: 0,
          explanation:
            "El cardinal del producto cartesiano es el producto de los cardinales: |B × C| = |B| · |C| = 3 · 5 = 15. Es decir, hay 15 pares ordenados (b, c) posibles. La suma (8) correspondería a otra operación, no al producto cartesiano.",
        },
        {
          id: 14,
          question: "El producto cartesiano B × C es un conjunto de…",
          options: [
            "Pares ordenados (b, c) con b ∈ B y c ∈ C",
            "Números que están en B y en C",
            "Números que están en B o en C",
            "Subconjuntos de B",
          ],
          correct: 0,
          explanation:
            "El producto cartesiano B × C es el conjunto de todos los pares ordenados (b, c) donde el primer elemento pertenece a B y el segundo a C. No es una operación entre elementos individuales como la unión o la intersección: su resultado son parejas, y el orden dentro de cada par importa.",
        },
        {
          id: 15,
          question: "Con B = {3, 6, 9} y C = {2, 3, 5, 7, 10}, ¿pertenece el par (3, 2) a B × C?",
          options: [
            "Sí, porque 3 ∈ B y 2 ∈ C",
            "No, porque 2 ∉ B",
            "No, porque 3 está en ambos conjuntos",
            "Sí, pero solo si también (2, 3) pertenece",
          ],
          correct: 0,
          explanation:
            "En B × C el primer componente debe estar en B y el segundo en C. Como 3 ∈ B y 2 ∈ C, el par (3, 2) sí pertenece a B × C. El orden es lo decisivo: aquí lo que importa es de qué conjunto proviene cada posición del par.",
        },
        {
          id: 16,
          question: "Con B = {3, 6, 9} y C = {2, 3, 5, 7, 10}, ¿pertenece el par (2, 3) a B × C?",
          options: [
            "No, porque 2 ∉ B (el primer componente debe estar en B)",
            "Sí, porque 2 ∈ C y 3 ∈ B",
            "Sí, porque el orden no importa",
            "No, porque 3 ∉ C",
          ],
          correct: 0,
          explanation:
            "En B × C el primer componente debe pertenecer a B, y 2 no está en B, por lo que (2, 3) NO pertenece a B × C. Esto muestra que el producto cartesiano no es conmutativo: (2, 3) pertenecería a C × B, pero no a B × C. El orden del par es esencial.",
        },
        {
          id: 17,
          question:
            "¿Qué propiedad se verifica con la igualdad B ∩ (C ∪ A) = (B ∩ C) ∪ (B ∩ A)?",
          options: [
            "La propiedad distributiva de la intersección respecto de la unión",
            "La propiedad conmutativa",
            "La propiedad asociativa",
            "Las leyes de De Morgan",
          ],
          correct: 0,
          explanation:
            "Esa igualdad expresa la propiedad distributiva de la intersección respecto de la unión: A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C). La conmutativa se refiere al orden de los operandos, la asociativa al agrupamiento, y las leyes de De Morgan relacionan complementos con uniones e intersecciones.",
        },
        {
          id: 18,
          question:
            "¿Cuánto vale B ∩ (C ∪ A), con A = {1,…,10}, B = {3,6,9} y C = {2,3,5,7,10}?",
          options: ["{3, 6, 9}", "{3}", "{2, 3, 5, 7, 10}", "{ } (vacío)"],
          correct: 0,
          explanation:
            "Como C ⊆ A, la unión C ∪ A = A = {1,…,10}. Entonces B ∩ (C ∪ A) = B ∩ A = {3, 6, 9}, ya que todos los elementos de B están en A. Este resultado coincide con (B ∩ C) ∪ (B ∩ A) = {3} ∪ {3,6,9} = {3,6,9}, confirmando la propiedad distributiva.",
        },
        {
          id: 19,
          question: "Con A = {1,…,10} y C = {2,3,5,7,10}, ¿cuánto vale C ∪ A?",
          options: [
            "{1, 2, 3, 4, 5, 6, 7, 8, 9, 10} (= A)",
            "{2, 3, 5, 7, 10} (= C)",
            "{3}",
            "{1, 4, 6, 8, 9}",
          ],
          correct: 0,
          explanation:
            "Como todos los elementos de C ya están en A (C ⊆ A), la unión no añade nada nuevo: C ∪ A = A = {1,…,10}. Cuando un conjunto está contenido en otro, su unión es el conjunto mayor.",
        },
        {
          id: 20,
          question: "¿Es B = {3, 6, 9} un subconjunto de A = {1,…,10}?",
          options: [
            "Sí, porque todos los elementos de B están en A",
            "No, porque B tiene menos elementos que A",
            "No, porque 9 no está en A",
            "Solo parcialmente",
          ],
          correct: 0,
          explanation:
            "B es subconjunto de A (B ⊆ A) porque cada elemento de B (3, 6 y 9) pertenece también a A. La cantidad de elementos no importa para ser subconjunto: lo que se exige es que todos los elementos del primero estén en el segundo. Y 9 sí está en A = {1,…,10}.",
        },
        {
          id: 21,
          question: "¿Cuál es el cardinal del conjunto A = {1, 2, …, 10}?",
          options: ["10", "9", "11", "5"],
          correct: 0,
          explanation:
            "El cardinal es el número de elementos del conjunto. A contiene los naturales del 1 al 10, ambos incluidos, es decir, 10 elementos, por lo que |A| = 10. Es un error frecuente contar 9 por olvidar uno de los extremos.",
        },
        {
          id: 22,
          question: "La unión de dos conjuntos B ∪ C se define como…",
          options: [
            "El conjunto de elementos que están en B o en C (o en ambos)",
            "El conjunto de elementos que están en B y en C a la vez",
            "El conjunto de elementos que están solo en B",
            "El conjunto de pares ordenados de B y C",
          ],
          correct: 0,
          explanation:
            "La unión B ∪ C está formada por todos los elementos que pertenecen a B, a C o a ambos. No hay que confundirla con la intersección (elementos comunes a ambos) ni con el producto cartesiano (pares ordenados). En la unión, cada elemento aparece una sola vez aunque esté en los dos conjuntos.",
        },
        {
          id: 23,
          question: "La intersección de dos conjuntos B ∩ C se define como…",
          options: [
            "El conjunto de elementos que están en B y en C a la vez",
            "El conjunto de elementos que están en B o en C",
            "El conjunto de elementos que no están en ninguno",
            "La suma de los elementos de B y C",
          ],
          correct: 0,
          explanation:
            "La intersección B ∩ C está formada por los elementos comunes a ambos conjuntos, es decir, los que pertenecen a B y a C simultáneamente. Se distingue de la unión (que usa 'o') y no tiene que ver con sumar elementos ni con los que no están en ninguno.",
        },
        {
          id: 24,
          question:
            "El complemento de C respecto de A (con A como universal) está formado por…",
          options: [
            "Los elementos de A que NO están en C",
            "Los elementos de C que no están en A",
            "Todos los elementos de C",
            "Los elementos comunes a A y C",
          ],
          correct: 0,
          explanation:
            "El complemento de C respecto del conjunto universal A son los elementos que están en A pero NO en C (A \\ C). Siempre se define respecto a un universo de referencia (aquí A). No son los elementos de C, ni los comunes a ambos (eso sería la intersección).",
        },
        {
          id: 25,
          question:
            "¿Son B = {3, 6, 9} y C = {2, 3, 5, 7, 10} conjuntos disjuntos?",
          options: [
            "No, porque su intersección es {3}, no es vacía",
            "Sí, porque no tienen elementos en común",
            "Sí, porque tienen distinto cardinal",
            "No se puede saber sin el diagrama de Venn",
          ],
          correct: 0,
          explanation:
            "Dos conjuntos son disjuntos cuando su intersección es vacía. Aquí B ∩ C = {3} ≠ ∅, así que B y C NO son disjuntos: comparten el elemento 3. El cardinal distinto no tiene nada que ver con ser disjuntos, y se puede determinar sin recurrir al diagrama de Venn.",
        },
        {
          id: 26,
          question:
            "¿Cuántos números primos hay en el conjunto C = {2, 3, 5, 7, 10}?",
          options: ["4 (el 2, 3, 5 y 7)", "5 (todos)", "3 (el 3, 5 y 7)", "2 (el 5 y 7)"],
          correct: 0,
          explanation:
            "Los números primos de C son 2, 3, 5 y 7 (cada uno solo divisible por 1 y por sí mismo), es decir, 4 primos. El 10 no es primo porque es divisible por 2 y por 5 (10 = 2·5). Recuerda que el 2 sí es primo (es el único primo par).",
        },
        {
          id: 27,
          question: "Con B = {3, 6, 9} y C = {2, 3, 5, 7, 10}, ¿pertenece 10 a B ∪ C?",
          options: [
            "Sí, porque 10 ∈ C",
            "No, porque 10 ∉ B",
            "No, porque 10 no es primo",
            "Solo si también está en B",
          ],
          correct: 0,
          explanation:
            "Para pertenecer a la unión basta con estar en al menos uno de los conjuntos. Como 10 ∈ C, entonces 10 ∈ B ∪ C, aunque no esté en B. La unión no exige que el elemento esté en ambos conjuntos; con estar en uno es suficiente.",
        },
        {
          id: 28,
          question:
            "Con A = {1,…,10} y C = {2,3,5,7,10}, ¿pertenece 6 al complemento de C respecto de A?",
          options: [
            "Sí, porque 6 ∈ A y 6 ∉ C",
            "No, porque 6 ∈ C",
            "No, porque 6 no es primo",
            "Sí, porque 6 ∈ C",
          ],
          correct: 0,
          explanation:
            "El complemento de C respecto de A contiene los elementos de A que no están en C. Como 6 está en A = {1,…,10} pero no en C = {2,3,5,7,10}, entonces 6 sí pertenece al complemento (que es {1, 4, 6, 8, 9}).",
        },
        {
          id: 29,
          question: "¿Para qué sirve un diagrama de Venn?",
          options: [
            "Para representar gráficamente conjuntos y visualizar sus relaciones y operaciones",
            "Para resolver sistemas de congruencias",
            "Para calcular determinantes",
            "Para ordenar números de menor a mayor",
          ],
          correct: 0,
          explanation:
            "Un diagrama de Venn representa gráficamente los conjuntos como regiones (normalmente círculos) y permite visualizar de forma intuitiva sus relaciones y operaciones (unión, intersección, complemento, etc.). No sirve para resolver congruencias, calcular determinantes ni ordenar números.",
        },
        {
          id: 30,
          question: "La congruencia x ≡ 3 (mód 7) significa que…",
          options: [
            "x deja resto 3 al dividirse entre 7",
            "x es igual a 3 dividido entre 7",
            "x es múltiplo de 7 más 7",
            "x es divisible entre 3",
          ],
          correct: 0,
          explanation:
            "x ≡ 3 (mód 7) quiere decir que x y 3 dejan el mismo resto al dividirse entre 7; equivalentemente, que x deja resto 3 al dividirlo entre 7 (o que x - 3 es múltiplo de 7). No es una división ordinaria ni implica divisibilidad entre 3: es una relación de congruencia módulo 7.",
        },
      ],
    },
  ],
};
