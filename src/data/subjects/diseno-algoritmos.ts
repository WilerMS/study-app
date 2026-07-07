import type { Subject } from "../../types";

export const disenoAlgoritmos: Subject = {
  id: "diseno-avanzado-algoritmos",
  name: "Diseño Avanzado de Algoritmos",
  icon: "🧮",
  topics: [
    {
      id: 1,
      name: "Actividad 1: Subarreglo de suma máxima (recursión, divide y vencerás y Kadane)",
      questions: [
        {
          id: 1,
          question: "¿Qué problema se resuelve y compara en esta actividad?",
          options: [
            "El problema del subarreglo (subsecuencia) de suma máxima",
            "El problema del viajante de comercio",
            "La ordenación de una lista",
            "La búsqueda binaria en un array ordenado",
          ],
          correct: 0,
          explanation:
            "La actividad aborda el problema del subarreglo de suma máxima: encontrar qué parte contigua de una lista tiene la suma más alta. No es el problema del viajante (rutas óptimas), ni una ordenación, ni una búsqueda: el objetivo es localizar el subarreglo cuya suma de elementos sea máxima.",
        },
        {
          id: 2,
          question: "¿Qué tres algoritmos se comparan para resolver el problema?",
          options: [
            "Recursividad ingenua, divide y vencerás, y programación dinámica (Kadane)",
            "Ordenación por burbuja, quicksort y mergesort",
            "Búsqueda lineal, binaria y hash",
            "BFS, DFS y Dijkstra",
          ],
          correct: 0,
          explanation:
            "Se comparan tres enfoques: la recursividad ingenua (fuerza bruta), divide y vencerás, y la programación dinámica (algoritmo de Kadane). Cada uno representa un paradigma de diseño distinto, y el experimento mide cuánto consumen en tiempo de CPU y memoria a medida que crece la lista.",
        },
        {
          id: 3,
          question: "¿Para qué sirve la notación Big-O en el análisis de algoritmos?",
          options: [
            "Para describir cómo crece el coste (tiempo o memoria) de un algoritmo al aumentar el tamaño de la entrada",
            "Para medir el tamaño del código fuente",
            "Para contar el número de variables usadas",
            "Para indicar el lenguaje de programación",
          ],
          correct: 0,
          explanation:
            "La notación Big-O describe la complejidad de un algoritmo: cómo crece su coste temporal o espacial en función del tamaño de la entrada n, ignorando constantes y términos menores. Permite comparar algoritmos por su comportamiento asintótico, no por el tamaño del código ni el lenguaje empleado.",
        },
        {
          id: 4,
          question: "¿Cómo funciona la Versión A (recursiva ingenua)?",
          options: [
            "Explora todas las combinaciones posibles por fuerza bruta, sin almacenar resultados",
            "Divide el array a la mitad en cada paso",
            "Recorre el array una sola vez con un bucle",
            "Ordena el array antes de sumar",
          ],
          correct: 0,
          explanation:
            "La Versión A explora todos los intervalos posibles por fuerza bruta, mediante llamadas recursivas anidadas que avanzan el inicio o retrasan el fin, y suma cada intervalo. Como no almacena los estados ya calculados, repite constantemente los mismos cálculos. Dividir a la mitad es divide y vencerás (Versión B) y recorrer una vez es Kadane (Versión C).",
        },
        {
          id: 5,
          question: "¿Cuál es la complejidad TEMPORAL de la Versión A (recursiva ingenua)?",
          options: ["O(2ⁿ) — exponencial", "O(n log n)", "O(n)", "O(1)"],
          correct: 0,
          explanation:
            "La Versión A tiene complejidad temporal O(2ⁿ) (exponencial): cada paso se bifurca en dos llamadas recursivas y, al no guardar los cálculos anteriores, el árbol de recursión duplica el trabajo de forma redundante. Este crecimiento exponencial la hace inviable en cuanto la lista crece un poco.",
        },
        {
          id: 6,
          question: "¿Cuál es la complejidad ESPACIAL de la Versión A (recursiva ingenua)?",
          options: [
            "O(n) — por la profundidad del árbol de recursión",
            "O(2ⁿ)",
            "O(1)",
            "O(n²)",
          ],
          correct: 0,
          explanation:
            "Su complejidad espacial es O(n) porque, aunque no reserva estructuras de datos adicionales, la profundidad de la pila de recursión llega a acumular del orden de n llamadas activas antes de empezar a retornar. El coste temporal es exponencial, pero el espacial crece de forma lineal con la profundidad de la recursión.",
        },
        {
          id: 7,
          question: "¿Por qué la Versión A repite tantos cálculos y es tan ineficiente?",
          options: [
            "Porque no almacena (memoriza) los resultados de los subproblemas ya calculados",
            "Porque usa demasiadas variables",
            "Porque ordena el array repetidamente",
            "Porque está escrita en JavaScript",
          ],
          correct: 0,
          explanation:
            "La ineficiencia viene de que no memoriza los estados: al no guardar los resultados de los subproblemas ya resueltos, los vuelve a calcular una y otra vez, generando un trabajo exponencial redundante. Precisamente ese es el problema que la programación dinámica (Kadane) resuelve al reutilizar resultados.",
        },
        {
          id: 8,
          question: "¿Qué técnica de diseño emplea la Versión B?",
          options: [
            "Divide y vencerás (dividir el array a la mitad)",
            "Fuerza bruta exhaustiva",
            "Programación voraz (greedy)",
            "Backtracking",
          ],
          correct: 0,
          explanation:
            "La Versión B usa divide y vencerás: calcula un punto medio y divide el problema en subproblemas más pequeños (mitad izquierda y mitad derecha), resolviéndolos recursivamente y combinando resultados. No es fuerza bruta (Versión A), ni una estrategia voraz, ni backtracking: su seña es 'dividir para conquistar'.",
        },
        {
          id: 9,
          question: "En la Versión B (divide y vencerás), ¿en qué tres caminos se busca la suma máxima?",
          options: [
            "Lado izquierdo, lado derecho y cruce central",
            "Principio, medio y final del array",
            "Máximo, mínimo y media",
            "Ascendente, descendente y aleatorio",
          ],
          correct: 0,
          explanation:
            "La búsqueda se divide en tres casos: la suma máxima de la mitad izquierda (recursión), la de la mitad derecha (recursión) y la del cruce central (un subarreglo que atraviesa el punto medio). Al final se compara y se devuelve el mayor de los tres. El caso del cruce es clave porque el subarreglo óptimo puede quedar a caballo entre ambas mitades.",
        },
        {
          id: 10,
          question: "¿Qué calcula la función sumarCruce en la Versión B?",
          options: [
            "La racha (suma) máxima que atraviesa el punto medio del array",
            "La suma total de todo el array",
            "El número de elementos negativos",
            "El punto medio del array",
          ],
          correct: 0,
          explanation:
            "sumarCruce calcula la racha máxima que cruza el punto medio: recorre iterativamente desde el centro hacia la izquierda y hacia la derecha, sumando y quedándose con el mejor valor de cada lado, y devuelve su combinación. Es lo que permite considerar subarreglos que no caen enteros en una sola mitad.",
        },
        {
          id: 11,
          question: "¿Cuál es la complejidad TEMPORAL de la Versión B (divide y vencerás)?",
          options: ["O(n log n)", "O(2ⁿ)", "O(n)", "O(1)"],
          correct: 0,
          explanation:
            "La Versión B tiene complejidad temporal O(n log n): el 'log n' proviene de dividir el array a la mitad sucesivamente, y el factor 'n' del coste lineal de sumarCruce al recorrer el centro en cada nivel. Es mucho mejor que la exponencial de la Versión A, aunque peor que la lineal de Kadane.",
        },
        {
          id: 12,
          question:
            "¿Qué ecuación de recurrencia modela la complejidad de la Versión B (divide y vencerás)?",
          options: [
            "T(n) = 2·T(n/2) + c·n",
            "T(n) = T(n-1) + 1",
            "T(n) = 2ⁿ",
            "T(n) = T(n/2) + 1",
          ],
          correct: 0,
          explanation:
            "La recurrencia es T(n) = 2·T(n/2) + c·n: el '2·T(n/2)' refleja las dos llamadas recursivas sobre cada mitad, y el 'c·n' el coste lineal de combinar (sumarCruce). Resolviéndola (por el teorema maestro) se obtiene O(n log n). T(n)=T(n/2)+1 daría la búsqueda binaria O(log n), y T(n-1)+1 sería un recorrido lineal.",
        },
        {
          id: 13,
          question: "¿Cuál es la complejidad ESPACIAL de la Versión B (divide y vencerás)?",
          options: [
            "O(log n) — por el pico de llamadas en la pila al dividir a la mitad",
            "O(n)",
            "O(2ⁿ)",
            "O(1)",
          ],
          correct: 0,
          explanation:
            "Su complejidad espacial es O(log n) porque el pico de llamadas apiladas crece de forma logarítmica: al dividir el array por la mitad en cada nivel, la profundidad máxima de la recursión es del orden de log n. Es más económica en memoria que la Versión A, cuya pila crece linealmente.",
        },
        {
          id: 14,
          question: "¿Con qué nombre se conoce el algoritmo de la Versión C?",
          options: [
            "Algoritmo de Kadane",
            "Algoritmo de Dijkstra",
            "Algoritmo de Floyd",
            "Algoritmo de Prim",
          ],
          correct: 0,
          explanation:
            "La Versión C es el algoritmo de Kadane, la solución clásica y óptima al problema del subarreglo de suma máxima mediante programación dinámica. Dijkstra y Floyd resuelven caminos mínimos en grafos, y Prim calcula árboles de expansión mínima: ninguno resuelve este problema.",
        },
        {
          id: 15,
          question: "¿A qué paradigma de diseño de algoritmos pertenece el algoritmo de Kadane?",
          options: [
            "Programación dinámica",
            "Fuerza bruta",
            "Divide y vencerás",
            "Vuelta atrás (backtracking)",
          ],
          correct: 0,
          explanation:
            "Kadane es un algoritmo de programación dinámica: resuelve el problema reutilizando el resultado del subproblema anterior (la mejor racha que termina en la posición previa) para calcular el siguiente, evitando recomputaciones. Por eso logra tiempo lineal, frente a la fuerza bruta o el divide y vencerás.",
        },
        {
          id: 16,
          question: "¿Cómo recorre el array el algoritmo de Kadane?",
          options: [
            "En una única pasada, con un solo bucle for",
            "Con múltiples llamadas recursivas anidadas",
            "Dividiéndolo por la mitad repetidamente",
            "Recorriéndolo varias veces de principio a fin",
          ],
          correct: 0,
          explanation:
            "Kadane recorre el array en una sola pasada con un único bucle for, sin recursión. Esta simplicidad es la razón de su eficiencia lineal O(n): cada elemento se visita exactamente una vez. Es lo opuesto a la recursión anidada de la Versión A o a la división sucesiva de la Versión B.",
        },
        {
          id: 17,
          question: "¿Qué dos variables utiliza el algoritmo de Kadane?",
          options: [
            "maxActual (la racha actual) y maxGlobal (el mejor récord acumulado)",
            "inicio y fin del intervalo",
            "izquierdo, medio y derecho",
            "un array auxiliar de tamaño n",
          ],
          correct: 0,
          explanation:
            "Kadane usa solo dos variables: maxActual, que guarda la mejor racha que termina en la posición actual, y maxGlobal, que conserva el mejor valor encontrado en todo el recorrido. Al necesitar únicamente estas dos variables (sin estructuras auxiliares que crezcan con n), logra complejidad espacial constante O(1).",
        },
        {
          id: 18,
          question: "En cada iteración de Kadane, ¿qué decide la variable maxActual?",
          options: [
            "Si suma el elemento actual a la racha anterior o reinicia una nueva racha desde el elemento actual",
            "Si ordena el array",
            "Si divide el array por la mitad",
            "Cuántas llamadas recursivas hacer",
          ],
          correct: 0,
          explanation:
            "En cada paso, maxActual decide entre dos opciones: extender la racha anterior sumándole el elemento actual, o empezar una racha nueva desde el elemento actual (cuando arrastrar la suma previa resta valor). Se calcula como max(arr[i], maxActual + arr[i]). Esta decisión local óptima es la esencia de la programación dinámica de Kadane.",
        },
        {
          id: 19,
          question: "¿Cuándo reinicia Kadane la racha empezando desde el elemento actual?",
          options: [
            "Cuando arrastrar la suma anterior (por ser negativa) daría menos que empezar de nuevo",
            "Cuando encuentra un número par",
            "Cuando llega a la mitad del array",
            "Cada cinco elementos",
          ],
          correct: 0,
          explanation:
            "Kadane reinicia la racha cuando la suma acumulada anterior es tan negativa que arrastrarla empeoraría el resultado; es decir, cuando arr[i] es mayor que maxActual + arr[i]. En ese momento conviene descartar la racha previa y empezar una nueva desde el elemento actual, para no penalizar la suma con un pasado negativo.",
        },
        {
          id: 20,
          question: "¿Cuál es la complejidad TEMPORAL del algoritmo de Kadane (Versión C)?",
          options: ["O(n) — lineal", "O(n log n)", "O(2ⁿ)", "O(n²)"],
          correct: 0,
          explanation:
            "Kadane tiene complejidad temporal O(n) (lineal), ya que recorre el array una única vez con un solo bucle, haciendo un trabajo constante por elemento. Es la mejor complejidad posible para este problema, puesto que hay que leer todos los elementos al menos una vez.",
        },
        {
          id: 21,
          question: "¿Cuál es la complejidad ESPACIAL del algoritmo de Kadane (Versión C)?",
          options: [
            "O(1) — constante, solo usa dos variables",
            "O(n)",
            "O(log n)",
            "O(2ⁿ)",
          ],
          correct: 0,
          explanation:
            "Kadane tiene complejidad espacial O(1) (constante): solo necesita dos variables (maxActual y maxGlobal), independientemente del tamaño del array. No usa recursión que sature la pila ni estructuras auxiliares que crezcan con n, por eso su consumo de memoria es fijo.",
        },
        {
          id: 22,
          question: "Según el experimento, ¿cuál es el algoritmo más eficiente de los tres?",
          options: [
            "La Versión C (Kadane), por su coste totalmente lineal",
            "La Versión A (recursiva ingenua)",
            "La Versión B (divide y vencerás)",
            "Los tres son igual de eficientes",
          ],
          correct: 0,
          explanation:
            "El más eficiente es Kadane (Versión C), con tiempo O(n) y memoria O(1). La Versión A es inservible por su coste exponencial, y aunque la Versión B (O(n log n)) es viable, sigue siendo peor que la lineal de Kadane. El experimento confirma que Kadane gana claramente en tiempo a medida que crece la lista.",
        },
        {
          id: 23,
          question:
            "¿Con qué tamaño de array colapsó ya la Versión A, tardando casi 10 segundos?",
          options: [
            "Con solo 30 elementos",
            "Con 10.000 elementos",
            "Con 1.000.000 de elementos",
            "Con 100 elementos",
          ],
          correct: 0,
          explanation:
            "La Versión A colapsó con solo 30 elementos, tardando casi 10 segundos, lo que confirma su complejidad exponencial O(2ⁿ). Este dato ilustra de forma dramática por qué un algoritmo exponencial es inviable: con una entrada minúscula ya se dispara el tiempo de ejecución.",
        },
        {
          id: 24,
          question:
            "¿Por qué se tuvo que omitir la Versión A en los arrays de gran tamaño?",
          options: [
            "Porque su tiempo exponencial la hacía inviable (tardaría demasiado)",
            "Porque daba resultados incorrectos",
            "Porque consumía toda la RAM",
            "Porque no estaba programada",
          ],
          correct: 0,
          explanation:
            "Se omitió la Versión A en arrays grandes porque su complejidad exponencial O(2ⁿ) haría que tardara un tiempo prohibitivo (astronómico) en terminar. No es que fallara o diera resultados erróneos: simplemente resulta computacionalmente inviable en cuanto la entrada crece, por eso solo se midió con 30 elementos.",
        },
        {
          id: 25,
          question:
            "¿Cómo se calculó el tiempo medio de CPU para cada tamaño de array?",
          options: [
            "Realizando 5 ejecuciones por cada tamaño y promediando",
            "Con una única ejecución",
            "Estimándolo teóricamente sin ejecutar",
            "Preguntando al sistema operativo",
          ],
          correct: 0,
          explanation:
            "Para obtener un tiempo medio fiable se realizaron 5 ejecuciones por cada tamaño de array y se promediaron los tiempos. Repetir las mediciones y promediar reduce el efecto de fluctuaciones puntuales (otros procesos, caché), dando una métrica más representativa que una sola ejecución.",
        },
        {
          id: 26,
          question:
            "¿Qué función de Node.js se usó para medir con precisión el tiempo de ejecución?",
          options: [
            "process.hrtime.bigint() (convertido a milisegundos)",
            "Date.now()",
            "console.time()",
            "setTimeout()",
          ],
          correct: 0,
          explanation:
            "Se usó process.hrtime.bigint(), que ofrece un reloj de alta resolución (nanosegundos) ideal para medir tiempos muy cortos con precisión, convirtiendo después el resultado a milisegundos. Date.now() tiene menor resolución y setTimeout no mide tiempos: programa ejecuciones futuras.",
        },
        {
          id: 27,
          question: "¿Qué métrica de memoria se midió en el experimento?",
          options: [
            "La Memoria Residente (RSS) mediante process.memoryUsage().rss",
            "El tamaño del disco duro",
            "La memoria de la GPU",
            "El número de ficheros abiertos",
          ],
          correct: 0,
          explanation:
            "Se midió la Memoria Residente (RSS, Resident Set Size) con process.memoryUsage().rss, que indica la memoria física que el proceso ocupa realmente en RAM, junto con la diferencia neta respecto al inicio. No se midió disco, GPU ni ficheros: el interés era el consumo de RAM de cada algoritmo.",
        },
        {
          id: 28,
          question:
            "Según la discusión, ¿por qué la diferencia de memoria se estabiliza a partir de cierto tamaño?",
          options: [
            "Porque el sistema operativo asigna la memoria en bloques fijos y no pide más hasta agotar el bloque actual",
            "Porque los algoritmos dejan de usar memoria",
            "Porque el array deja de crecer",
            "Porque se apaga el recolector de basura",
          ],
          correct: 0,
          explanation:
            "La diferencia de memoria se estabiliza porque el sistema operativo asigna la RAM en bloques fijos: hasta que no se supera el bloque actualmente reservado, no se solicitan más recursos, por lo que la diferencia medida no varía. No es que los algoritmos dejen de usar memoria, sino cómo el SO gestiona la reserva.",
        },
        {
          id: 29,
          question:
            "¿A qué atribuyó el autor el leve consumo de memoria detectado en las primeras pasadas (array de 10.000)?",
          options: [
            "Al motor V8 de Node.js, que asigna recursos para abordar las primeras cargas pesadas",
            "A un error del algoritmo de Kadane",
            "A un fallo del hardware",
            "A un virus en el sistema",
          ],
          correct: 0,
          explanation:
            "El leve consumo inicial se atribuye al motor V8 de Node.js, que en las primeras pasadas (más pesadas por la compilación/optimización JIT y la reserva inicial) asigna recursos para afrontar la carga. Es un comportamiento normal del entorno de ejecución, no un fallo del algoritmo ni del hardware.",
        },
        {
          id: 30,
          question: "¿Cuál es la conclusión principal del experimento?",
          options: [
            "Elegir un buen algoritmo ahorra un coste enorme de rendimiento; Kadane es la mejor opción por ser lineal",
            "Todos los algoritmos rinden igual en la práctica",
            "La recursividad ingenua es la mejor opción",
            "La memoria es el único factor que importa",
          ],
          correct: 0,
          explanation:
            "La conclusión es que la elección del algoritmo tiene un impacto enorme en el rendimiento: la Versión A es inútil por su coste exponencial, la Versión B es viable pero mejorable, y Kadane (Versión C) es la mejor opción por su coste totalmente lineal O(n) y memoria constante O(1). Un buen diseño algorítmico ahorra muchísimo tiempo y recursos.",
        },
      ],
    },
  ],
};
