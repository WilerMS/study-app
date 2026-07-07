import type { Subject } from "../../types";

export const estadistica: Subject = {
  id: "estadistica",
  name: "Estadística",
  icon: "📊",
  topics: [
    {
      id: 1,
      name: "Actividad 1: Distribuciones de probabilidad (Poisson y aproximaciones)",
      questions: [
        {
          id: 1,
          question:
            "¿Qué distribución se debe usar para modelar el número de llamadas telefónicas recibidas por minuto?",
          options: [
            "La distribución de Poisson",
            "La distribución binomial",
            "La distribución normal",
            "La distribución uniforme",
          ],
          correct: 0,
          explanation:
            "Se usa la distribución de Poisson porque modela el número de eventos independientes que ocurren en un intervalo de tiempo continuo a una tasa constante, que es exactamente el caso de las llamadas por minuto. La binomial cuenta éxitos en un número fijo de ensayos, la normal es continua y la uniforme asigna igual probabilidad a todos los valores.",
        },
        {
          id: 2,
          question: "¿Cuándo es adecuado usar la distribución de Poisson?",
          options: [
            "Cuando se analiza el número de eventos independientes en un intervalo de tiempo (o espacio) continuo",
            "Cuando hay exactamente dos resultados posibles",
            "Cuando la variable toma valores en un intervalo continuo",
            "Cuando todos los valores son igual de probables",
          ],
          correct: 0,
          explanation:
            "La distribución de Poisson es adecuada para contar el número de eventos independientes que suceden en un intervalo de tiempo o espacio continuo, cuando ocurren a una tasa media constante. Los dos resultados 'éxito/fracaso' describen la binomial/Bernoulli, y los valores igualmente probables la uniforme.",
        },
        {
          id: 3,
          question: "¿Cuál es la variable aleatoria del problema?",
          options: [
            "El número de llamadas recibidas por minuto (X)",
            "La duración de cada llamada",
            "El número de operadores disponibles",
            "El coste de las llamadas",
          ],
          correct: 0,
          explanation:
            "La variable aleatoria es X = número de llamadas recibidas en un minuto, que es lo que se quiere modelar con la Poisson. Es una variable discreta (toma valores 0, 1, 2, …). La duración, el número de operadores o el coste no son la variable definida en el problema.",
        },
        {
          id: 4,
          question: "¿Cuál es el parámetro de la distribución de Poisson en este problema?",
          options: [
            "La tasa de ocurrencia λ = 30 (llamadas por minuto)",
            "La probabilidad p = 0,5",
            "El número de ensayos n = 60",
            "La desviación estándar σ = 30",
          ],
          correct: 0,
          explanation:
            "La Poisson tiene un único parámetro: la tasa de ocurrencia λ (lambda), que aquí vale 30 llamadas por minuto. λ representa a la vez la media y la varianza de la distribución. No se define con p y n (eso es la binomial) ni con σ directamente.",
        },
        {
          id: 5,
          question:
            "¿Qué función de R calcula la probabilidad puntual P(X = k) de una Poisson?",
          options: ["dpois()", "ppois()", "rpois()", "qpois()"],
          correct: 0,
          explanation:
            "dpois() calcula la probabilidad puntual (función de masa) P(X = k) de una Poisson. ppois() da la probabilidad acumulada P(X ≤ k), rpois() genera valores aleatorios y qpois() es la función cuantil. La 'd' de dpois corresponde a 'density/masa de probabilidad'.",
        },
        {
          id: 6,
          question:
            "¿Cuál es la fórmula de la función de probabilidad de Poisson para P(X = 25) con λ = 30?",
          options: [
            "P(X=25) = e⁻³⁰ · 30²⁵ / 25!",
            "P(X=25) = 30²⁵ / 25",
            "P(X=25) = e⁻²⁵ · 25³⁰ / 30!",
            "P(X=25) = 25/30",
          ],
          correct: 0,
          explanation:
            "La función de masa de Poisson es P(X=k) = e⁻λ · λᵏ / k!. Sustituyendo λ=30 y k=25 queda P(X=25) = e⁻³⁰ · 30²⁵ / 25!. Las demás opciones intercambian los papeles de λ y k o simplifican mal la fórmula.",
        },
        {
          id: 7,
          question: "Para calcular P(X > 35), ¿qué estrategia se aplica?",
          options: [
            "El suceso complementario: P(X > 35) = 1 − P(X ≤ 35)",
            "Sumar directamente P(X = 36) + P(X = 37) + … hasta el infinito",
            "Calcular solo P(X = 35)",
            "Dividir 35 entre λ",
          ],
          correct: 0,
          explanation:
            "Se usa el suceso complementario: P(X > 35) = 1 − P(X ≤ 35). Como el espacio muestral de una Poisson es infinito, no es viable sumar infinitos términos hacia arriba, así que se calcula la acumulada hasta 35 y se resta de 1. Es mucho más práctico que la suma infinita.",
        },
        {
          id: 8,
          question: "¿Por qué se recurre al complementario para calcular P(X > 35) en una Poisson?",
          options: [
            "Porque el espacio muestral es infinito y no es viable sumar infinitos términos",
            "Porque la Poisson no permite calcular probabilidades acumuladas",
            "Porque P(X > 35) siempre es 0",
            "Porque 35 es mayor que λ",
          ],
          correct: 0,
          explanation:
            "El espacio muestral de una Poisson es infinito (X puede tomar cualquier valor 0, 1, 2, …), por lo que sumar P(X=36) + P(X=37) + … sería una suma infinita inviable. Calcular el complementario 1 − P(X ≤ 35) transforma el problema en una suma finita y sencilla.",
        },
        {
          id: 9,
          question: "¿Qué función de R calcula la probabilidad acumulada P(X ≤ k) de una Poisson?",
          options: ["ppois()", "dpois()", "rpois()", "mean()"],
          correct: 0,
          explanation:
            "ppois() calcula la probabilidad acumulada P(X ≤ k), que es justo lo que se necesita para aplicar el complementario en P(X > 35). dpois() da la probabilidad puntual, rpois() genera muestras aleatorias y mean() calcula medias. La 'p' de ppois corresponde a 'probabilidad acumulada'.",
        },
        {
          id: 10,
          question: "¿Qué representa P(X ≤ 35) en este problema?",
          options: [
            "La probabilidad acumulada de recibir entre 0 y 35 llamadas en un minuto",
            "La probabilidad de recibir exactamente 35 llamadas",
            "La probabilidad de recibir más de 35 llamadas",
            "La media de llamadas",
          ],
          correct: 0,
          explanation:
            "P(X ≤ 35) es la probabilidad acumulada de recibir 35 llamadas o menos, es decir, la suma de las probabilidades desde 0 hasta 35 llamadas. No es la probabilidad puntual de exactamente 35 (eso sería P(X = 35)) ni de más de 35.",
        },
        {
          id: 11,
          question:
            "¿Por qué es adecuada la aproximación de esta Poisson a una distribución normal?",
          options: [
            "Porque la tasa de ocurrencia λ = 30 es un número grande",
            "Porque λ es un número pequeño",
            "Porque la variable es continua",
            "Porque solo hay dos resultados posibles",
          ],
          correct: 0,
          explanation:
            "Una Poisson se aproxima bien a una normal cuando su tasa λ es grande; con λ = 30 (un valor alto) la aproximación es adecuada. Cuando λ crece, la Poisson se vuelve más simétrica y campaniforme, pareciéndose a la normal. Con λ pequeña la aproximación no sería válida.",
        },
        {
          id: 12,
          question:
            "¿En qué condiciones se aproximan la distribución de Poisson y la binomial?",
          options: [
            "Cuando el número de ensayos n es grande y la probabilidad de éxito p es pequeña",
            "Cuando n es pequeño y p es grande",
            "Cuando p = 0,5 exactamente",
            "Cuando n = p",
          ],
          correct: 0,
          explanation:
            "La Poisson y la binomial se asemejan cuando n es grande y p pequeña (eventos raros en muchos ensayos), de modo que λ ≈ n·p. En este caso n = 1000 y p = 0,03, condiciones que hacen adecuada la aproximación. Con n pequeño o p grande la aproximación no funciona.",
        },
        {
          id: 13,
          question:
            "¿Cuáles son los parámetros de la aproximación binomial de este problema?",
          options: [
            "n = 1000 ensayos y p = 0,03 de probabilidad de éxito",
            "n = 30 y p = 0,5",
            "n = 25 y p = 30",
            "n = 60 y p = 0,5",
          ],
          correct: 0,
          explanation:
            "La binomial siempre necesita dos parámetros: n (número de ensayos) y p (probabilidad de éxito). Aquí n = 1000 y p = 30/1000 = 0,03. El producto n·p = 30 coincide con la λ de la Poisson, lo que muestra la relación entre ambas distribuciones.",
        },
        {
          id: 14,
          question: "En la aproximación binomial, ¿cómo se obtiene la probabilidad de éxito p = 0,03?",
          options: [
            "Dividiendo la tasa entre el número de ensayos: 30 / 1000",
            "Multiplicando 30 por 1000",
            "Restando 1000 − 30",
            "Es un valor fijo de 0,5",
          ],
          correct: 0,
          explanation:
            "La probabilidad de éxito se obtiene dividiendo la tasa media (30 llamadas) entre el número de ensayos considerado (1000): p = 30/1000 = 0,03. Así se reparte la tasa de la Poisson en muchos ensayos con probabilidad pequeña, cumpliendo las condiciones de la aproximación.",
        },
        {
          id: 15,
          question:
            "Usando la aproximación binomial (n=1000, p=0,03), la probabilidad de recibir 25 llamadas es aproximadamente…",
          options: ["0,0511 (5,11 %)", "0,50 (50 %)", "0,25 (25 %)", "0,95 (95 %)"],
          correct: 0,
          explanation:
            "El cálculo con la binomial da P(X = 25) ≈ 0,0511, es decir, un 5,11 %. Es un valor bajo porque la probabilidad total se reparte entre todas las cantidades posibles de llamadas; ningún valor concreto acumula una probabilidad muy alta cuando hay muchos resultados posibles alrededor de la media 30.",
        },
        {
          id: 16,
          question: "En la aproximación normal, ¿cuál es la media μ?",
          options: ["μ = 30 (igual a la tasa)", "μ = 5,47", "μ = 1000", "μ = 0,03"],
          correct: 0,
          explanation:
            "En la aproximación normal, la media μ coincide con la tasa media de la Poisson: μ = 30. En una Poisson, media y varianza son iguales a λ, por lo que la media de la normal aproximada hereda ese valor. 5,47 sería la desviación estándar, no la media.",
        },
        {
          id: 17,
          question:
            "En la aproximación normal, ¿cómo se calcula la desviación estándar σ?",
          options: [
            "Como la raíz cuadrada de la media: √30 ≈ 5,477",
            "Como la propia media: 30",
            "Como la media al cuadrado: 900",
            "Como 30/2 = 15",
          ],
          correct: 0,
          explanation:
            "En la Poisson la varianza es igual a la media (λ = 30), y la desviación estándar es su raíz cuadrada: σ = √30 ≈ 5,477. Esta propiedad (media = varianza = λ) es característica de la Poisson y permite obtener σ directamente de λ.",
        },
        {
          id: 18,
          question: "En una distribución de Poisson, ¿qué relación hay entre la media y la varianza?",
          options: [
            "Son iguales: ambas valen λ",
            "La varianza es el doble de la media",
            "La media es la raíz de la varianza",
            "No tienen ninguna relación",
          ],
          correct: 0,
          explanation:
            "Una propiedad distintiva de la Poisson es que su media y su varianza son iguales y valen ambas λ. Por eso, con λ = 30, la media es 30 y la varianza es 30, y la desviación estándar es √30. Es una característica que la diferencia de otras distribuciones.",
        },
        {
          id: 19,
          question:
            "¿Cuál es la fórmula para tipificar (estandarizar) una variable X y convertirla en Z?",
          options: [
            "z = (x − μ) / σ",
            "z = (x + μ) · σ",
            "z = x · σ / μ",
            "z = μ / (x − σ)",
          ],
          correct: 0,
          explanation:
            "La tipificación convierte una variable normal X en la normal estándar Z mediante z = (x − μ) / σ: se resta la media y se divide por la desviación estándar. Así se mide a cuántas desviaciones estándar está x de la media, permitiendo usar la tabla de la normal estándar.",
        },
        {
          id: 20,
          question:
            "Para x = 20, con μ = 30 y σ = 5,477, el valor tipificado Z es aproximadamente…",
          options: ["−1,8257", "1,8257", "−10", "0,20"],
          correct: 0,
          explanation:
            "Aplicando z = (x − μ)/σ = (20 − 30)/5,477 = −10/5,477 ≈ −1,8257. El signo negativo indica que x = 20 está por debajo de la media (a 1,83 desviaciones estándar por debajo). Es simétrico al valor de x = 40.",
        },
        {
          id: 21,
          question:
            "Para x = 40, con μ = 30 y σ = 5,477, el valor tipificado Z es aproximadamente…",
          options: ["1,8257", "−1,8257", "10", "0,40"],
          correct: 0,
          explanation:
            "Aplicando z = (x − μ)/σ = (40 − 30)/5,477 = 10/5,477 ≈ 1,8257. El signo positivo indica que x = 40 está por encima de la media. Al estar 20 y 40 a la misma distancia de la media 30, sus valores Z son opuestos (±1,8257).",
        },
        {
          id: 22,
          question:
            "La probabilidad de que haya entre 20 y 40 llamadas, P(−1,82 ≤ Z ≤ 1,82), es aproximadamente…",
          options: ["0,9452 (94,52 %)", "0,50 (50 %)", "0,0511 (5,11 %)", "0,25 (25 %)"],
          correct: 0,
          explanation:
            "P(−1,82 ≤ Z ≤ 1,82) = P(Z ≤ 1,82) − P(Z ≤ −1,82) ≈ 0,9452, es decir, un 94,52 %. Es una probabilidad muy alta porque el rango [20, 40] está centrado en la media 30 y abarca casi dos desviaciones estándar a cada lado.",
        },
        {
          id: 23,
          question: "¿Por qué es tan alta la probabilidad de que haya entre 20 y 40 llamadas?",
          options: [
            "Porque la media (30) está justo en el centro de ese rango",
            "Porque 20 y 40 son valores imposibles",
            "Porque la desviación estándar es enorme",
            "Porque la Poisson siempre da probabilidades altas",
          ],
          correct: 0,
          explanation:
            "La probabilidad es alta porque la media λ = 30 se sitúa justo en el centro del rango [20, 40], que además abarca casi dos desviaciones estándar a cada lado (donde se concentra la mayor parte de la masa de probabilidad de una distribución campaniforme). Los valores cercanos a la media son los más probables.",
        },
        {
          id: 24,
          question: "¿Qué software se utilizó para refrendar los cálculos de esta actividad?",
          options: ["R", "Excel", "Python", "MATLAB"],
          correct: 0,
          explanation:
            "Se utilizó R, empleando funciones como dpois(), ppois() y las de la normal para comprobar automáticamente los resultados calculados a mano. R es un lenguaje y entorno muy usado en estadística por su amplia colección de funciones de distribuciones de probabilidad.",
        },
        {
          id: 25,
          question: "¿Qué tipo de variable aleatoria es la que sigue una distribución de Poisson?",
          options: [
            "Discreta (toma valores 0, 1, 2, …)",
            "Continua (toma cualquier valor de un intervalo)",
            "Cualitativa",
            "Constante",
          ],
          correct: 0,
          explanation:
            "La Poisson es una distribución de variable discreta: cuenta números enteros de eventos (0, 1, 2, 3, …). No puede tomar valores fraccionarios, a diferencia de la normal, que es continua. Por eso su función es de masa de probabilidad y no de densidad.",
        },
        {
          id: 26,
          question: "¿Qué condiciones deben cumplir los eventos para seguir una distribución de Poisson?",
          options: [
            "Deben ser independientes y ocurrir a una tasa media constante",
            "Deben depender unos de otros",
            "Deben ocurrir siempre a la vez",
            "Deben tener probabilidad 0,5 cada uno",
          ],
          correct: 0,
          explanation:
            "Para modelarse con Poisson, los eventos deben ser independientes entre sí (que ocurra uno no afecta a los demás) y suceder a una tasa media constante en el intervalo considerado. Si los eventos fueran dependientes o la tasa variara, la Poisson no sería el modelo adecuado.",
        },
        {
          id: 27,
          question: "La distribución normal es una distribución de variable…",
          options: ["Continua", "Discreta", "Cualitativa", "Uniforme"],
          correct: 0,
          explanation:
            "La distribución normal es de variable continua: puede tomar cualquier valor dentro de un intervalo real, y su gráfica es la clásica campana de Gauss. Por eso se usa su función de densidad y las probabilidades se calculan como áreas (integrales) bajo la curva.",
        },
        {
          id: 28,
          question: "¿Qué distribución sigue la variable tipificada Z?",
          options: [
            "Una normal estándar, con media 0 y desviación estándar 1",
            "Una Poisson con λ = 1",
            "Una binomial con p = 0,5",
            "Una uniforme en [0, 1]",
          ],
          correct: 0,
          explanation:
            "La variable tipificada Z = (X − μ)/σ sigue una distribución normal estándar N(0, 1): media 0 y desviación estándar 1. Esta estandarización permite usar una única tabla (la de la normal estándar) para calcular probabilidades de cualquier variable normal.",
        },
        {
          id: 29,
          question:
            "Para calcular la probabilidad de que Z esté entre dos valores, se hace…",
          options: [
            "La diferencia de las acumuladas: P(Z ≤ mayor) − P(Z ≤ menor)",
            "La suma de las dos acumuladas",
            "El producto de las dos probabilidades",
            "La media de los dos valores",
          ],
          correct: 0,
          explanation:
            "La probabilidad de que Z caiga entre dos valores se obtiene restando las probabilidades acumuladas: P(a ≤ Z ≤ b) = P(Z ≤ b) − P(Z ≤ a). Se resta el área hasta el valor menor del área hasta el valor mayor, quedándose con el área intermedia.",
        },
        {
          id: 30,
          question:
            "El hecho de que P(X = 25) sea baja (≈ 5 %) se explica porque…",
          options: [
            "La probabilidad total se reparte entre todas las cantidades posibles de llamadas",
            "Recibir 25 llamadas es imposible",
            "La media es mucho menor que 25",
            "La distribución está mal definida",
          ],
          correct: 0,
          explanation:
            "P(X = 25) es baja porque, al haber muchos valores posibles alrededor de la media (30), la probabilidad total (que suma 1) se reparte entre todos ellos, y ningún valor concreto acumula un porcentaje muy alto. No es que 25 sea imposible: de hecho está cerca de la media, pero comparte probabilidad con muchos vecinos.",
        },
      ],
    },
    {
      id: 2,
      name: "Actividad 2: Regresión lineal (altura y peso)",
      questions: [
        {
          id: 1,
          question: "¿Qué relación se analiza en esta actividad de regresión lineal?",
          options: [
            "La relación entre la altura (cm) y el peso (kg) en niños",
            "La relación entre la edad y las notas escolares",
            "La relación entre el peso y la presión arterial",
            "La relación entre la altura y la edad",
          ],
          correct: 0,
          explanation:
            "La investigación médica analiza la relación entre la altura (en cm) y el peso (en kg) de una muestra de niños, para estudiar cómo se relacionan ambas variables cuantitativas mediante la regresión y la correlación.",
        },
        {
          id: 2,
          question: "¿De cuántos niños se compone la muestra del estudio?",
          options: ["6 niños", "10 niños", "30 niños", "100 niños"],
          correct: 0,
          explanation:
            "La muestra se compone de 6 niños tomados en un consultorio pediátrico, con sus valores de altura y peso. Es una muestra pequeña, lo que permite hacer los cálculos a mano y verificarlos con R.",
        },
        {
          id: 3,
          question:
            "Con Σx = 870 y N = 6, ¿cuál es la media de la altura (x̄)?",
          options: ["145 cm", "150 cm", "125 cm", "170 cm"],
          correct: 0,
          explanation:
            "La media se calcula como Σxᵢ / N = 870 / 6 = 145 cm. La media marginal de la altura resume el valor central de esa variable en la muestra, y sirve de base para calcular varianzas, covarianza y las rectas de regresión.",
        },
        {
          id: 4,
          question: "Con Σy = 225 y N = 6, ¿cuál es la media del peso (ȳ)?",
          options: ["37,5 kg", "40 kg", "35 kg", "45 kg"],
          correct: 0,
          explanation:
            "La media del peso es Σyᵢ / N = 225 / 6 = 37,5 kg. Junto con la media de la altura (145 cm), define el punto (145; 37,5) por el que pasan ambas rectas de regresión.",
        },
        {
          id: 5,
          question: "¿Cuánto vale la suma de todas las alturas (Σx)?",
          options: ["870", "225", "127.900", "33.500"],
          correct: 0,
          explanation:
            "La suma de las alturas es Σx = 120 + 130 + 140 + 150 + 160 + 170 = 870. Este sumatorio, junto con Σy, Σx², Σy² y Σxy, es uno de los valores base que se necesitan para aplicar las fórmulas de medias, varianzas, covarianza y regresión.",
        },
        {
          id: 6,
          question: "¿Cuánto vale la suma de todos los pesos (Σy)?",
          options: ["225", "870", "8.875", "33.500"],
          correct: 0,
          explanation:
            "La suma de los pesos es Σy = 25 + 30 + 35 + 40 + 45 + 50 = 225. Dividido entre N = 6 da la media del peso (37,5 kg). Es otro de los sumatorios imprescindibles para los cálculos de la actividad.",
        },
        {
          id: 7,
          question: "¿Cuánto vale la suma de los productos altura × peso (Σxy)?",
          options: ["33.500", "127.900", "8.875", "225"],
          correct: 0,
          explanation:
            "El sumatorio de los productos es Σxy = 3.000 + 3.900 + 4.900 + 6.000 + 7.200 + 8.500 = 33.500. Este valor es clave para calcular la covarianza y los coeficientes de las rectas de regresión, ya que relaciona ambas variables entre sí.",
        },
        {
          id: 8,
          question: "En esta muestra, la covarianza entre altura y peso es positiva. ¿Qué significa?",
          options: [
            "Que a medida que crece la altura (x), también crece el peso (y)",
            "Que a medida que crece la altura, el peso disminuye",
            "Que no hay relación entre altura y peso",
            "Que la altura y el peso son iguales",
          ],
          correct: 0,
          explanation:
            "Una covarianza positiva indica que las dos variables tienden a variar en el mismo sentido: cuando la altura aumenta, el peso también aumenta (en promedio). Si fuera negativa, se moverían en direcciones opuestas, y si fuera cero, no habría relación lineal.",
        },
        {
          id: 9,
          question: "¿Cuánto vale el coeficiente de correlación de Pearson en esta muestra?",
          options: ["1", "0", "−1", "0,5"],
          correct: 0,
          explanation:
            "El coeficiente de correlación de Pearson vale 1, el valor máximo posible. Esto indica una correlación lineal directa perfecta: todos los puntos caen exactamente sobre la recta de regresión. Es coherente con los datos, que crecen de forma perfectamente proporcional (cada 10 cm de altura, 5 kg de peso).",
        },
        {
          id: 10,
          question: "¿Qué significa que el coeficiente de correlación de Pearson sea igual a 1?",
          options: [
            "Que existe una correlación lineal directa perfecta y todos los puntos caen sobre la recta",
            "Que no hay ninguna relación entre las variables",
            "Que la relación es inversa perfecta",
            "Que la relación es débil",
          ],
          correct: 0,
          explanation:
            "Un valor de r = 1 significa correlación lineal directa perfecta: al aumentar una variable, la otra aumenta de forma exactamente proporcional, y todos los puntos se sitúan justo sobre la recta de regresión. Un valor de −1 sería inversa perfecta y 0 ausencia de relación lineal.",
        },
        {
          id: 11,
          question: "¿Cómo se calcula el coeficiente de correlación de Pearson?",
          options: [
            "Dividiendo la covarianza entre el producto de las desviaciones estándar de ambas variables",
            "Multiplicando las dos medias",
            "Sumando las dos varianzas",
            "Dividiendo la media entre la varianza",
          ],
          correct: 0,
          explanation:
            "El coeficiente de Pearson es r = covarianza(x,y) / (σx · σy): la covarianza dividida entre el producto de las desviaciones estándar de cada variable. Al normalizar la covarianza, se obtiene un valor adimensional entre −1 y 1 que mide la fuerza y el sentido de la relación lineal.",
        },
        {
          id: 12,
          question: "¿Cuál es la ecuación de la recta de regresión de Y (peso) sobre X (altura)?",
          options: [
            "y = (1/2)x − 35",
            "y = 2x + 70",
            "y = x − 35",
            "y = (1/2)x + 35",
          ],
          correct: 0,
          explanation:
            "La recta de regresión de Y sobre X es y = (1/2)x − 35, que permite predecir el peso a partir de la altura. Se obtiene con las fórmulas de la pendiente (a partir de la covarianza y la varianza de x) y la ordenada. Como r = 1, todos los puntos caen exactamente sobre ella.",
        },
        {
          id: 13,
          question: "En la recta y = (1/2)x − 35, ¿qué indica la pendiente positiva de 1/2?",
          options: [
            "Que la recta es creciente: a más altura, mayor peso",
            "Que la recta es decreciente",
            "Que no hay relación entre las variables",
            "Que el peso disminuye al aumentar la altura",
          ],
          correct: 0,
          explanation:
            "Una pendiente positiva (1/2) indica que la recta de regresión es creciente: cada centímetro más de altura se asocia con medio kilo más de peso. Confirma la relación directa entre las variables, coherente con la covarianza positiva y el coeficiente de Pearson igual a 1.",
        },
        {
          id: 14,
          question: "En la recta y = (1/2)x − 35, ¿qué representa la ordenada en el origen (−35)?",
          options: [
            "El valor teórico de y (peso) cuando x (altura) es 0, sin sentido físico real",
            "El peso real de un niño de altura media",
            "La pendiente de la recta",
            "El coeficiente de correlación",
          ],
          correct: 0,
          explanation:
            "La ordenada en el origen (−35) es el valor que tomaría el peso si la altura fuera 0. Es un valor puramente teórico y matemático, sin sentido físico real (un niño no puede medir 0 cm ni pesar −35 kg): solo indica dónde cortaría la recta al eje Y.",
        },
        {
          id: 15,
          question:
            "Usando la recta y = (1/2)x − 35, ¿cuál es el peso predicho para una altura de 145 cm?",
          options: ["37,5 kg", "40 kg", "35 kg", "72,5 kg"],
          correct: 0,
          explanation:
            "Sustituyendo x = 145 en la recta: y = (1/2)(145) − 35 = 72,5 − 35 = 37,5 kg. Es lógico que coincida con la media del peso, porque 145 cm es precisamente la media de la altura, y la recta de regresión siempre pasa por el punto de las medias (145; 37,5).",
        },
        {
          id: 16,
          question: "¿Cuál es la ecuación de la recta de regresión de X (altura) sobre Y (peso)?",
          options: [
            "x = 2y + 70",
            "x = (1/2)y − 35",
            "x = y + 70",
            "x = 2y − 70",
          ],
          correct: 0,
          explanation:
            "La recta de regresión de X sobre Y es x = 2y + 70, que sirve para predecir la altura a partir del peso. Es una recta distinta de la de Y sobre X: cada regresión minimiza los errores en una variable diferente, aunque ambas pasan por el punto de las medias.",
        },
        {
          id: 17,
          question: "En la recta x = 2y + 70, ¿qué significa la pendiente 2?",
          options: [
            "Que por cada kilogramo de peso, la altura sube 2 centímetros",
            "Que por cada centímetro de altura, el peso sube 2 kilos",
            "Que la recta es decreciente",
            "Que no hay relación entre las variables",
          ],
          correct: 0,
          explanation:
            "En la recta de X sobre Y, la pendiente 2 significa que por cada kilogramo más de peso, la altura estimada aumenta 2 centímetros. Es una recta creciente, coherente con la relación directa entre ambas variables.",
        },
        {
          id: 18,
          question:
            "Usando la recta x = 2y + 70, ¿cuál es la altura predicha para un peso de 42 kg?",
          options: ["154 cm", "150 cm", "145 cm", "160 cm"],
          correct: 0,
          explanation:
            "Sustituyendo y = 42 en la recta: x = 2(42) + 70 = 84 + 70 = 154 cm. Así, con la recta de regresión de X sobre Y se predice que un niño de 42 kg mediría unos 154 cm.",
        },
        {
          id: 19,
          question: "¿Qué indica que ambas rectas de regresión sean crecientes?",
          options: [
            "Que existe una relación directa entre altura y peso",
            "Que existe una relación inversa",
            "Que no hay relación entre las variables",
            "Que los datos son erróneos",
          ],
          correct: 0,
          explanation:
            "Que ambas rectas tengan pendiente positiva (crecientes) confirma la relación directa entre altura y peso: cuando una variable aumenta, la otra también. Esto concuerda con la covarianza positiva y con el coeficiente de correlación de Pearson igual a 1.",
        },
        {
          id: 20,
          question:
            "¿Por qué todos los puntos de la muestra caen exactamente sobre la recta de regresión?",
          options: [
            "Porque el coeficiente de correlación de Pearson es 1 (correlación perfecta)",
            "Porque la muestra es muy grande",
            "Porque la covarianza es cero",
            "Porque las variables son independientes",
          ],
          correct: 0,
          explanation:
            "Los puntos caen justo sobre la recta porque la correlación es perfecta (r = 1): existe una relación lineal exacta entre altura y peso, sin dispersión alguna. Cuando |r| = 1, no hay error residual y todos los datos se alinean sobre la recta de regresión.",
        },
        {
          id: 21,
          question: "¿Qué mide el coeficiente de correlación de Pearson?",
          options: [
            "La fuerza y el sentido (directo o inverso) de la relación lineal entre dos variables",
            "La media de las dos variables",
            "El número de datos de la muestra",
            "La diferencia entre el máximo y el mínimo",
          ],
          correct: 0,
          explanation:
            "El coeficiente de Pearson mide la fuerza y el sentido de la relación lineal entre dos variables: su signo indica si la relación es directa (+) o inversa (−) y su magnitud (cercanía a 1) indica cuán fuerte es. No mide medias, tamaños de muestra ni rangos.",
        },
        {
          id: 22,
          question: "¿Entre qué valores puede oscilar el coeficiente de correlación de Pearson?",
          options: [
            "Entre −1 y 1",
            "Entre 0 y 1",
            "Entre 0 y 100",
            "Entre −∞ y +∞",
          ],
          correct: 0,
          explanation:
            "El coeficiente de Pearson siempre toma valores entre −1 y 1. El valor 1 indica correlación directa perfecta, −1 correlación inversa perfecta y 0 ausencia de relación lineal. Al estar acotado y ser adimensional, permite comparar la intensidad de relaciones entre distintos pares de variables.",
        },
        {
          id: 23,
          question:
            "¿Qué diferencia hay entre un coeficiente de Pearson de 1 y uno de −1?",
          options: [
            "1 indica relación directa perfecta; −1 indica relación inversa perfecta",
            "Ambos indican ausencia de relación",
            "1 es débil y −1 es fuerte",
            "No hay ninguna diferencia",
          ],
          correct: 0,
          explanation:
            "Un valor de 1 indica correlación directa perfecta (ambas variables aumentan juntas), mientras que −1 indica correlación inversa perfecta (cuando una aumenta, la otra disminuye), también con todos los puntos sobre la recta. Ambos son igual de 'fuertes' (perfectos), pero de sentido opuesto.",
        },
        {
          id: 24,
          question: "¿Qué representa la varianza marginal de una variable?",
          options: [
            "La variabilidad o dispersión de esa variable por sí sola respecto a su media",
            "La relación entre las dos variables",
            "La media de la variable",
            "El número de datos",
          ],
          correct: 0,
          explanation:
            "La varianza marginal mide la variabilidad o dispersión de una única variable respecto a su propia media, sin tener en cuenta la otra. Se calcula para cada variable por separado (altura y peso) y su raíz cuadrada es la desviación estándar, que interviene en el cálculo de Pearson.",
        },
        {
          id: 25,
          question: "¿Qué mide la covarianza entre dos variables?",
          options: [
            "Cómo varían conjuntamente las dos variables (si tienden a moverse en el mismo sentido o en sentidos opuestos)",
            "La media de cada variable por separado",
            "El valor máximo de las variables",
            "El número de observaciones",
          ],
          correct: 0,
          explanation:
            "La covarianza mide cómo varían conjuntamente dos variables: si es positiva, tienden a aumentar juntas; si es negativa, cuando una sube la otra baja; y si es cero, no hay relación lineal. A diferencia del coeficiente de Pearson, la covarianza no está normalizada, por lo que su magnitud depende de las unidades.",
        },
        {
          id: 26,
          question: "La desviación estándar de una variable se obtiene como…",
          options: [
            "La raíz cuadrada de su varianza",
            "El cuadrado de su varianza",
            "La mitad de su media",
            "La suma de sus valores",
          ],
          correct: 0,
          explanation:
            "La desviación estándar es la raíz cuadrada de la varianza. Se usa porque devuelve la dispersión a las unidades originales de la variable (la varianza está en unidades al cuadrado). En el cálculo de Pearson se emplean las desviaciones estándar de ambas variables.",
        },
        {
          id: 27,
          question:
            "En la recta y = (1/2)x − 35, ¿tiene sentido físico el peso predicho cuando la altura es 0?",
          options: [
            "No, es un valor teórico (la ordenada −35) sin sentido físico real",
            "Sí, un niño de 0 cm pesaría −35 kg",
            "Sí, es el peso medio",
            "No, porque la pendiente es negativa",
          ],
          correct: 0,
          explanation:
            "No tiene sentido físico: la ordenada en el origen (−35) es solo el valor matemático donde la recta corta el eje Y, correspondiente a una altura de 0 cm, algo imposible en la realidad. Las rectas de regresión son válidas dentro del rango de los datos observados, no en extrapolaciones absurdas.",
        },
        {
          id: 28,
          question:
            "En la recta x = 2y + 70, ¿tiene sentido físico la altura predicha cuando el peso es 0?",
          options: [
            "No, es un valor teórico (70 cm si el peso fuera 0), sin sentido real",
            "Sí, un niño de 0 kg mediría exactamente 70 cm",
            "Sí, es la altura media",
            "No, porque no existe la recta",
          ],
          correct: 0,
          explanation:
            "No tiene sentido físico: la ordenada 70 indica que, teóricamente, un niño de 0 kg 'mediría' 70 cm, algo imposible en la práctica. Es solo el punto de corte matemático de la recta con el eje; las predicciones fiables se dan dentro del rango de datos reales.",
        },
        {
          id: 29,
          question: "¿Para qué sirve la recta de regresión de Y sobre X?",
          options: [
            "Para predecir los valores de Y (peso) a partir de los de X (altura)",
            "Para predecir la altura a partir del peso",
            "Para calcular la media de X",
            "Para ordenar los datos",
          ],
          correct: 0,
          explanation:
            "La recta de regresión de Y sobre X sirve para estimar o predecir la variable dependiente Y (peso) a partir de la variable independiente X (altura). Si lo que se quiere es predecir la altura a partir del peso, se usa la otra recta (X sobre Y).",
        },
        {
          id: 30,
          question: "¿Qué software se usó para refrendar los cálculos de la regresión?",
          options: ["R", "SPSS", "Excel", "Stata"],
          correct: 0,
          explanation:
            "Se utilizó R y sus funciones (como cor() para la correlación y lm() para el modelo lineal) para comprobar que los cálculos hechos a mano (medias, varianzas, covarianza, Pearson y rectas) eran correctos. R es una herramienta estándar en análisis estadístico y regresión.",
        },
      ],
    },
    {
      id: 3,
      name: "Banco de preguntas examen",
      questions: [
        {
          id: 1,
          question:
            "¿Cuál de las siguientes definiciones describe mejor a una población en estadística?",
          options: [
            "Un subconjunto de la muestra.",
            "Un grupo de individuos u objetos de interés que se estudian.",
            "Una muestra aleatoria de individuos.",
            "Un conjunto de datos obtenidos de un experimento.",
          ],
          correct: 1,
          explanation:
            "La población es el conjunto completo de individuos u objetos de interés que se quiere estudiar. La muestra es un subconjunto de la población (no al revés), por lo que la población no puede ser un subconjunto de la muestra ni una muestra aleatoria: es el todo del que se extraen las muestras.",
        },
        {
          id: 2,
          question:
            "En una muestra, la frecuencia relativa de un valor de una variable aleatoria se calcula como:",
          options: [
            "El número de veces que aparece el valor dividido por el tamaño total de la muestra.",
            "La suma de todos los valores dividida por el número de valores.",
            "La diferencia entre el valor más alto y el más bajo.",
            "El valor que aparece con más frecuencia en la muestra.",
          ],
          correct: 0,
          explanation:
            "La frecuencia relativa es el número de veces que aparece un valor (frecuencia absoluta) dividido entre el tamaño total de la muestra, y representa la proporción de ese valor. La segunda opción es la media, la tercera el rango y la cuarta la moda.",
        },
        {
          id: 3,
          question:
            "¿Cuál de las siguientes es una característica de una variable aleatoria discreta?",
          options: [
            "Toma un número infinito de valores en un intervalo.",
            "Toma un conjunto finito o contable de valores.",
            "Solo toma valores negativos.",
            "Solo toma valores enteros positivos.",
          ],
          correct: 1,
          explanation:
            "Una variable aleatoria discreta toma un conjunto finito o infinito numerable (contable) de valores, como 0, 1, 2, 3… Tomar infinitos valores en un intervalo continuo es propio de las variables continuas. No está restringida a valores negativos ni exclusivamente a enteros positivos.",
        },
        {
          id: 4,
          question:
            "Frecuencia de bromas: Thomas 43,5 %, Alex 26,1 %, Rob 21,7 % e Inez 8,7 %. ¿Qué conclusión NO se sigue de estos datos?",
          options: [
            "Thomas es el responsable de la mayoría de las bromas.",
            "Alex, Inez y Rob son responsables de más de la mitad de las bromas.",
            "Inez y Rob son responsables del 30,4 % de las bromas.",
            "Las bromas de Alex son las más caras.",
          ],
          correct: 3,
          explanation:
            "El coste de las bromas no aparece en los datos (solo hay frecuencias), así que 'las bromas de Alex son las más caras' no se puede deducir. En cambio, sí se sigue que Alex + Inez + Rob suman 56,5 % (más de la mitad) y que Inez + Rob suman 30,4 %; y Thomas, con el 43,5 %, es quien más bromas hace.",
        },
        {
          id: 5,
          question:
            "Diagrama de caja: equipo 1 con caja pequeña (~14–20 min) y dos atípicos altos; equipo 2 con caja grande (~20–30 min). ¿Qué opción es FALSA?",
          options: [
            "Como la caja del equipo 2 es más grande, contiene más puntos de datos que la del equipo 1.",
            "El tiempo de proceso parece diferir entre los grupos, lo que puede investigarse más a fondo.",
            "El 75 % de los datos del equipo 2 está por encima de 20 min, mientras que ~75 % del equipo 1 está por debajo.",
            "El equipo 1 tiene dos valores atípicos que requieren una inspección más detallada.",
          ],
          correct: 0,
          explanation:
            "Es falsa la primera: el tamaño de la caja refleja la dispersión (el rango intercuartílico), NO el número de datos. Una caja más grande indica mayor variabilidad, no más observaciones. Las demás afirmaciones interpretan correctamente el diagrama (diferencia entre grupos, cuartiles y atípicos).",
        },
        {
          id: 6,
          question:
            "Se registran tipo de queja (cualitativa) y tiempo de resolución en días (cuantitativa). ¿Qué gráfico visualiza mejor ambas variables a la vez?",
          options: [
            "Gráfico de tarta de la variable «Tipo de queja».",
            "Histograma de la variable «Tiempo de resolución».",
            "Diagrama de caja y bigotes por tipo de queja.",
            "Gráfico de dispersión del «Tiempo de resolución» vs. «Tipo de queja».",
          ],
          correct: 2,
          explanation:
            "El diagrama de caja y bigotes por tipo de queja muestra a la vez la variable cualitativa (categorías en el eje, un box por tipo) y la distribución de la cuantitativa (tiempo de resolución) en cada categoría. El de tarta y el histograma solo representan una variable, y el de dispersión requiere dos variables cuantitativas.",
        },
        {
          id: 7,
          question:
            "En una clase con 10 rubias, 20 morenas, 5 rubios y 10 morenos, los sucesos 'ser hombre' y 'ser mujer' son:",
          options: [
            "Sucesos independientes entre sí.",
            "Sucesos incompatibles entre sí.",
            "Cada uno es un suceso imposible.",
            "Ninguno de los anteriores.",
          ],
          correct: 1,
          explanation:
            "'Ser hombre' y 'ser mujer' son sucesos incompatibles (mutuamente excluyentes): no pueden ocurrir a la vez en la misma persona, por lo que su intersección es vacía. No son independientes (de hecho, saber uno determina el otro), ni imposibles (ambos ocurren en la clase).",
        },
        {
          id: 8,
          question:
            "Se lanzan dos dados y se anota la suma de los puntos. La probabilidad de que la suma sea siete es:",
          options: ["1/6", "1/3", "5/36", "1/2"],
          correct: 0,
          explanation:
            "Hay 36 resultados equiprobables al lanzar dos dados. La suma 7 se obtiene con 6 combinaciones: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). Por tanto P(suma=7) = 6/36 = 1/6. Es la suma más probable, precisamente porque tiene el mayor número de combinaciones favorables.",
        },
        {
          id: 9,
          question:
            "A y B tienen probabilidad 1/2 y 1/5 de suspender; suspenden a la vez con probabilidad 1/10. La probabilidad de que al menos uno suspenda es:",
          options: ["2/5", "1/10", "3/10", "3/5"],
          correct: 3,
          explanation:
            "Por la regla de la unión: P(A∪B) = P(A) + P(B) − P(A∩B) = 1/2 + 1/5 − 1/10 = 5/10 + 2/10 − 1/10 = 6/10 = 3/5. Se resta la intersección para no contar dos veces el caso en que ambos suspenden.",
        },
        {
          id: 10,
          question: "¿Qué describe la función de distribución acumulada F(x)?",
          options: [
            "La probabilidad de que X tome un valor específico.",
            "La densidad de probabilidad en torno a un valor x.",
            "La probabilidad de que X tome un valor menor o igual que x.",
            "La media de los valores posibles de X.",
          ],
          correct: 2,
          explanation:
            "La función de distribución acumulada F(x) = P(X ≤ x) da la probabilidad de que la variable tome un valor menor o igual que x. La probabilidad de un valor específico es la función de masa (discreta), la densidad es f(x) (continua) y la media es la esperanza, conceptos distintos.",
        },
        {
          id: 11,
          question:
            "¿Qué propiedad debe cumplir la suma de todos los valores de la función de masa de probabilidad P(X)?",
          options: [
            "La suma debe ser igual a 0.",
            "La suma debe ser menor que 1.",
            "La suma debe ser igual a 1.",
            "La suma debe ser mayor que 1.",
          ],
          correct: 2,
          explanation:
            "La suma de todas las probabilidades de una función de masa debe ser igual a 1, porque abarca todos los resultados posibles del experimento (la certeza total). Además, cada probabilidad individual debe estar entre 0 y 1. Es uno de los axiomas básicos de la probabilidad.",
        },
        {
          id: 12,
          question:
            "¿Qué característica tiene la función de densidad de probabilidad f(x) de una variable aleatoria continua?",
          options: [
            "f(x) es siempre una función constante.",
            "La integral de f(x) sobre todo el espacio es igual a 1.",
            "f(x) proporciona la probabilidad de que X tome el valor exacto x.",
            "f(x) siempre toma valores negativos.",
          ],
          correct: 1,
          explanation:
            "En una variable continua, la integral de la función de densidad f(x) sobre todo el espacio vale 1 (el área total bajo la curva es la certeza). La densidad no es siempre constante, no puede ser negativa, y no da la probabilidad de un valor exacto (que en una continua es 0): las probabilidades se calculan como áreas entre dos valores.",
        },
        {
          id: 13,
          question: "Una variable aleatoria sigue una distribución uniforme discreta si:",
          options: [
            "Todos los valores de la variable siempre tienen probabilidad 1.",
            "Todos los valores de la variable siempre tienen probabilidad 0,5.",
            "Todos los valores de la variable tienen la misma probabilidad.",
            "No existe la distribución uniforme discreta.",
          ],
          correct: 2,
          explanation:
            "En una distribución uniforme discreta, todos los valores posibles tienen exactamente la misma probabilidad (por ejemplo, cada cara de un dado equilibrado tiene 1/6). No pueden tener todos probabilidad 1 ni 0,5 (la suma debe ser 1): la probabilidad de cada valor es 1/n, siendo n el número de valores.",
        },
        {
          id: 14,
          question: "¿Cuál de las siguientes características define una distribución binomial?",
          options: [
            "Tiene un número infinito de ensayos.",
            "Cada ensayo puede resultar en más de dos posibles resultados.",
            "La probabilidad de éxito cambia en cada ensayo.",
            "Tiene un número fijo de ensayos y dos posibles resultados (éxito o fracaso).",
          ],
          correct: 3,
          explanation:
            "La binomial se caracteriza por un número fijo de ensayos independientes, cada uno con solo dos resultados (éxito/fracaso) y una probabilidad de éxito constante. Las demás opciones la contradicen: el número de ensayos es fijo (no infinito), hay solo dos resultados y p no cambia entre ensayos.",
        },
        {
          id: 15,
          question:
            "¿Cuál es la varianza de una variable aleatoria X que sigue una distribución de Bernoulli con parámetro p?",
          options: ["p(1 − p)", "p²", "√(p(1 − p))", "1 − p"],
          correct: 0,
          explanation:
            "En una Bernoulli con parámetro p, la media es p y la varianza es p(1 − p). La opción √(p(1−p)) es la desviación estándar (raíz de la varianza), no la varianza. La varianza mide la dispersión y es máxima cuando p = 0,5.",
        },
        {
          id: 16,
          question:
            "¿Cuál de las siguientes situaciones es un ejemplo clásico de un proceso que sigue una distribución de Poisson?",
          options: [
            "El número de caras al lanzar una moneda diez veces.",
            "El número de coches que pasan por un peaje en una hora.",
            "La altura promedio de los estudiantes en una clase.",
            "La probabilidad de obtener un seis al lanzar un dado.",
          ],
          correct: 1,
          explanation:
            "El número de coches que pasan por un peaje en una hora es un ejemplo típico de Poisson: cuenta eventos independientes que ocurren a una tasa media en un intervalo de tiempo. El número de caras en 10 lanzamientos es binomial, la altura promedio es una media (variable continua) y el seis en un dado es una probabilidad simple.",
        },
        {
          id: 17,
          question:
            "Un centro recibe seis llamadas por minuto y se define la variable 'número de llamadas por minuto'. ¿Cuál es la esperanza matemática?",
          options: ["6", "6/60 = 0,1", "1/6", "No es posible saberlo."],
          correct: 0,
          explanation:
            "En una distribución de Poisson, la esperanza matemática (media) es igual al parámetro λ. Como la tasa es de 6 llamadas por minuto y la variable se define por minuto, λ = 6 y E[X] = 6. Se espera recibir, en promedio, 6 llamadas cada minuto.",
        },
        {
          id: 18,
          question:
            "Un centro recibe seis llamadas por minuto (Poisson, λ = 6). ¿Cuál es la probabilidad de recibir exactamente seis llamadas en un minuto?",
          options: [
            "1 (es el suceso seguro).",
            "1/6",
            "0,16",
            "No es posible saberlo con esos datos.",
          ],
          correct: 2,
          explanation:
            "Aplicando P(X=6) = e⁻⁶ · 6⁶ / 6! ≈ 0,161, es decir, alrededor de 0,16. Aunque la media sea 6, la probabilidad de obtener exactamente ese valor no es 1 (no es un suceso seguro): la probabilidad se reparte entre todos los posibles números de llamadas.",
        },
        {
          id: 19,
          question:
            "Si se cuenta con diez observaciones para calcular una probabilidad usando la t-Student, ¿cuántos grados de libertad hay?",
          options: ["9", "10", "11", "8"],
          correct: 0,
          explanation:
            "En la distribución t-Student aplicada a una muestra, los grados de libertad son n − 1. Con n = 10 observaciones, los grados de libertad son 10 − 1 = 9. Se resta 1 porque al estimar la media muestral se 'pierde' un grado de libertad.",
        },
        {
          id: 20,
          question:
            "En una distribución uniforme continua en el intervalo [0, 10], ¿cuál es la función de densidad de probabilidad en ese intervalo?",
          options: ["10", "1", "1/10", "No se puede calcular."],
          correct: 2,
          explanation:
            "En una uniforme continua en [a, b], la densidad es constante e igual a 1/(b − a). Para [0, 10] vale 1/(10 − 0) = 1/10. Así, el área total bajo la densidad (base 10 × altura 1/10) es 1, como debe ser para toda función de densidad.",
        },
        {
          id: 21,
          question: "La distribución binomial B(n, p) se aproxima a la normal si:",
          options: [
            "n es grande y np ≥ 5 y nq ≥ 5",
            "n es grande y np ≤ 5 y nq ≥ 5.",
            "n es grande y p ≤ 0,01.",
            "Ninguna de las anteriores es verdadera.",
          ],
          correct: 0,
          explanation:
            "La binomial se aproxima bien a la normal cuando n es grande y se cumple que np ≥ 5 y nq ≥ 5 (siendo q = 1 − p). Estas condiciones aseguran que la distribución sea suficientemente simétrica. Si p es muy pequeña (np < 5), la mejor aproximación sería la de Poisson, no la normal.",
        },
        {
          id: 22,
          question: "¿Cuál de los siguientes es un ejemplo de inferencia estadística?",
          options: [
            "Determinar la media de una población a partir de una muestra.",
            "Calcular la moda de un conjunto de datos.",
            "Representar los datos en un histograma.",
            "Recopilar datos de una población completa.",
          ],
          correct: 0,
          explanation:
            "La inferencia estadística consiste en obtener conclusiones sobre una población a partir de una muestra, como estimar la media poblacional. Calcular la moda o hacer un histograma es estadística descriptiva, y recopilar datos de toda la población es un censo, no una inferencia (no hay que 'inferir' si se mide el total).",
        },
        {
          id: 23,
          question: "¿Qué es una estimación puntual?",
          options: [
            "Un rango de valores donde se espera que se encuentre el parámetro poblacional.",
            "Un valor único que se utiliza como aproximación del parámetro poblacional.",
            "Una comparación entre dos parámetros poblacionales.",
            "Una técnica que siempre elimina el error de estimación.",
          ],
          correct: 1,
          explanation:
            "Una estimación puntual es un único valor calculado a partir de la muestra que se usa como aproximación de un parámetro de la población (por ejemplo, la media muestral como estimación de la media poblacional). Un rango de valores sería una estimación por intervalos (intervalo de confianza), y ninguna estimación elimina por completo el error.",
        },
        {
          id: 24,
          question: "¿Cuál de los siguientes NO es un ejemplo de sesgo?",
          options: [
            "Selección de una muestra no representativa de la población.",
            "Uso de un instrumento de medición defectuoso.",
            "Variabilidad inherente en los datos debido al azar.",
            "Errores sistemáticos en la recopilación de datos.",
          ],
          correct: 2,
          explanation:
            "La variabilidad inherente debida al azar es error aleatorio, NO sesgo. El sesgo es un error sistemático que desvía los resultados en una dirección concreta (muestras no representativas, instrumentos defectuosos, errores sistemáticos de recogida). El azar produce dispersión, pero no una desviación sistemática.",
        },
        {
          id: 25,
          question:
            "¿Qué decisión se toma si el valor del estadístico de contraste cae dentro de la región crítica?",
          options: [
            "Se rechaza la hipótesis nula.",
            "Se acepta la hipótesis alternativa.",
            "Se rechaza la hipótesis alternativa.",
            "No se toma ninguna decisión.",
          ],
          correct: 0,
          explanation:
            "Si el estadístico de contraste cae en la región crítica (de rechazo), se rechaza la hipótesis nula (H₀). Formalmente no se 'acepta' la alternativa, sino que se rechaza H₀ a favor de H₁: en contraste de hipótesis se habla de rechazar o no rechazar la nula, no de aceptar hipótesis con certeza.",
        },
        {
          id: 26,
          question: "¿Qué es el p-valor en un contraste de hipótesis?",
          options: [
            "La probabilidad de que la hipótesis alternativa sea verdadera.",
            "La probabilidad de cometer un error tipo I.",
            "La probabilidad de obtener un valor igual o más extremo que el observado, asumiendo que H₀ es verdadera.",
            "El valor crítico utilizado para definir la región de rechazo.",
          ],
          correct: 2,
          explanation:
            "El p-valor es la probabilidad de obtener un resultado igual o más extremo que el observado, suponiendo que la hipótesis nula H₀ es cierta. No es la probabilidad de que H₁ sea verdadera ni el valor crítico; y aunque se compara con el nivel de significación α (la probabilidad de error tipo I), no es lo mismo que α.",
        },
        {
          id: 27,
          question: "¿Cómo se interpreta un p-valor de 0,01?",
          options: [
            "Hay un 1 % de probabilidad de que H₀ sea verdadera.",
            "Hay un 1 % de probabilidad de observar un resultado tan extremo como el obtenido, suponiendo que H₀ es verdadera.",
            "Hay un 99 % de probabilidad de que H₁ sea verdadera.",
            "Hay un 1 % de probabilidad de cometer un error tipo II.",
          ],
          correct: 1,
          explanation:
            "Un p-valor de 0,01 significa que, si H₀ fuera cierta, habría solo un 1 % de probabilidad de observar un resultado tan extremo (o más) como el obtenido. NO es la probabilidad de que H₀ sea verdadera ni de que H₁ lo sea: el p-valor se calcula asumiendo H₀ cierta, no dice cuán probable es H₀.",
        },
        {
          id: 28,
          question: "¿Qué indica una covarianza positiva entre dos variables?",
          options: [
            "Que las variables no están relacionadas linealmente.",
            "Que, en promedio, cuando una variable aumenta, la otra también aumenta.",
            "Que las variables se mueven en direcciones opuestas.",
            "Que no hay relación entre las variables.",
          ],
          correct: 1,
          explanation:
            "Una covarianza positiva indica que, en promedio, cuando una variable aumenta, la otra también lo hace (se mueven en el mismo sentido). Una covarianza negativa indicaría direcciones opuestas y una cercana a cero, ausencia de relación lineal. Es la base para calcular el coeficiente de correlación.",
        },
        {
          id: 29,
          question: "¿Qué indica un valor de ρ = 0,8?",
          options: [
            "Una relación directa débil entre las variables.",
            "Una relación directa fuerte entre las variables.",
            "Una relación indirecta fuerte entre las variables.",
            "Que no hay relación entre las variables.",
          ],
          correct: 1,
          explanation:
            "Un coeficiente de correlación ρ = 0,8 indica una relación directa (positiva) y fuerte, ya que está cerca de 1. El signo positivo indica el sentido (directo) y la magnitud próxima a 1 indica la intensidad (fuerte). Si fuera negativo indicaría relación inversa, y un valor cercano a 0 indicaría relación débil o nula.",
        },
        {
          id: 30,
          question: "¿Cómo se calcula el coeficiente de correlación de Pearson?",
          options: [
            "Dividiendo la suma de las desviaciones al cuadrado por el tamaño de la muestra menos uno.",
            "Dividiendo la covarianza entre las dos variables por el producto de sus desviaciones estándar.",
            "Multiplicando las varianzas marginales de las dos variables.",
            "Dividiendo la suma de los valores individuales de las variables.",
          ],
          correct: 1,
          explanation:
            "El coeficiente de correlación de Pearson se calcula dividiendo la covarianza de las dos variables entre el producto de sus desviaciones estándar: r = cov(x,y)/(σx·σy). Esta normalización produce un valor adimensional entre −1 y 1. La primera opción describe una varianza muestral, no la correlación.",
        },
      ],
    },
  ],
};
