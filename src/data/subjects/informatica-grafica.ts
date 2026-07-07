import type { Subject } from "../../types";

export const informaticaGrafica: Subject = {
  id: "informatica-grafica",
  name: "Informática Gráfica y Visualización",
  icon: "🖼️",
  topics: [
    {
      id: 1,
      name: "Banco de preguntas examen",
      questions: [
        {
          id: 1,
          question: "¿Cuál es la definición académica correcta de la informática gráfica?",
          options: [
            "La disciplina que genera películas animadas y videojuegos.",
            "El área encargada de diseñar hardware gráfico.",
            "La disciplina que estudia algoritmos, estructuras de datos y técnicas matemáticas para generar y visualizar imágenes 2D y 3D.",
            "Un conjunto de herramientas para editar imágenes.",
          ],
          correct: 2,
          explanation:
            "La informática gráfica es la disciplina que estudia los algoritmos, estructuras de datos y técnicas matemáticas necesarias para generar y visualizar imágenes 2D y 3D por ordenador. Las películas y videojuegos son aplicaciones (no la definición), el diseño de hardware es otra área, y editar imágenes es procesamiento de imágenes, no síntesis.",
        },
        {
          id: 2,
          question:
            "¿Qué ocurre cuando se aplica un escalado s < 1 en ambas dimensiones a un objeto 2D?",
          options: [
            "El objeto aumenta de tamaño.",
            "El objeto se desplaza al origen.",
            "El objeto se reduce de tamaño.",
            "El objeto se borra de la escena.",
          ],
          correct: 2,
          explanation:
            "Un factor de escala menor que 1 (0 < s < 1) reduce el tamaño del objeto, ya que cada coordenada se multiplica por un número menor que la unidad. Un factor mayor que 1 lo agrandaría, y uno igual a 1 lo dejaría igual. El escalado no borra ni traslada el objeto por sí solo.",
        },
        {
          id: 3,
          question: "¿Cuál es el efecto de una cizalla horizontal (shearing en X)?",
          options: [
            "Desplazar puntos verticalmente según su valor X.",
            "Rotar la figura respecto al eje X.",
            "Desplazar puntos horizontalmente en función de su valor Y.",
            "Reflejar la figura respecto al eje X.",
          ],
          correct: 2,
          explanation:
            "La cizalla horizontal (shearing en X) desplaza los puntos en horizontal una cantidad proporcional a su coordenada Y, 'inclinando' la figura. No es una rotación ni una reflexión: es una transformación que sesga la forma manteniendo la altura, deslizando las capas horizontales según su altura.",
        },
        {
          id: 4,
          question: "¿Cuál es el orden correcto de los sistemas de coordenadas en el pipeline 2D?",
          options: [
            "Vista → Mundo → Modelo → Dispositivo.",
            "Modelo → Mundo → Vista → Dispositivo.",
            "Dispositivo → Vista → Mundo → Modelo.",
            "Modelo → Dispositivo → Mundo → Vista.",
          ],
          correct: 1,
          explanation:
            "El pipeline transforma las coordenadas en el orden Modelo → Mundo → Vista → Dispositivo: cada objeto se define en su sistema local (modelo), se coloca en la escena (mundo), se observa desde la cámara (vista) y finalmente se proyecta a los píxeles de la pantalla (dispositivo). Es un flujo desde lo local hasta la pantalla.",
        },
        {
          id: 5,
          question: "¿Qué es un viewport en OpenGL?",
          options: [
            "El buffer que almacena los objetos del universo.",
            "Un sistema de coordenadas para modelar objetos.",
            "La zona de la ventana donde se dibuja el contenido de la ventana de recorte.",
            "Una estructura de datos para almacenar vértices.",
          ],
          correct: 2,
          explanation:
            "El viewport es la región rectangular de la ventana (en píxeles) donde se dibuja el contenido de la ventana de recorte del mundo. Define el 'dónde' se pinta en pantalla. No es un buffer de objetos, ni un sistema de coordenadas de modelado, ni una estructura para vértices.",
        },
        {
          id: 6,
          question: "¿Qué ocurre si no se define explícitamente un viewport en OpenGL?",
          options: [
            "OpenGL lanza un error de ejecución.",
            "Se usa un valor aleatorio.",
            "Se usa toda la ventana de salida como viewport.",
            "No se puede dibujar nada.",
          ],
          correct: 2,
          explanation:
            "Si no se llama a glViewport, OpenGL usa por defecto toda el área de la ventana como viewport. No genera error ni impide dibujar: simplemente asume que se quiere pintar en toda la ventana disponible hasta que se especifique otra región.",
        },
        {
          id: 7,
          question: "¿Cuál es el valor inicial de la matriz MODELVIEW en OpenGL?",
          options: [
            "Una matriz de ceros.",
            "Una matriz de unos.",
            "La matriz identidad.",
            "No tiene valor hasta que se inicializa manualmente.",
          ],
          correct: 2,
          explanation:
            "La matriz MODELVIEW se inicializa por defecto como la matriz identidad, que no produce ninguna transformación (deja los puntos igual). A partir de ahí, las transformaciones (traslaciones, rotaciones, escalados) se van acumulando multiplicando sobre esa identidad inicial.",
        },
        {
          id: 8,
          question: "¿Qué hace glRotatef(angle, x, y, z)?",
          options: [
            "Provoca un giro del punto (x, y, z) de tantos grados como indica angle.",
            "Realiza un giro alrededor del punto (x, y, z).",
            "Realiza un giro alrededor del eje que va del origen al punto (x, y, z) de tantos grados como indica angle.",
            "Gira el objeto según su centro de masa.",
          ],
          correct: 2,
          explanation:
            "glRotatef(angle, x, y, z) rota la escena 'angle' grados alrededor del eje definido por la recta que va del origen (0,0,0) al punto (x, y, z). Los valores x, y, z no son un punto que gira, sino la dirección del eje de rotación; por ejemplo (0,0,1) rota alrededor del eje Z.",
        },
        {
          id: 9,
          question: "¿Qué afirmación es correcta sobre la composición de transformaciones 3D?",
          options: [
            "Se suman las matrices una a una.",
            "Se multiplican en orden directo.",
            "Se multiplican en orden inverso al de aplicación.",
            "El resultado no depende del orden.",
          ],
          correct: 2,
          explanation:
            "Las transformaciones se componen multiplicando matrices, y debido a la notación de OpenGL (matrices por columnas), el orden de multiplicación es inverso al orden en que se aplican a los vértices. Además, el producto de matrices no es conmutativo, por lo que el orden SÍ importa: no se suman ni da igual el orden.",
        },
        {
          id: 10,
          question:
            "¿Qué elementos definen el sistema de coordenadas de la vista mediante gluLookAt()?",
          options: [
            "Ángulo de visión y distancia focal.",
            "Punto de vista, punto de referencia y vector 'up' de la cámara.",
            "Los ejes de coordenadas del mundo.",
            "Punto de vista y punto de referencia únicamente.",
          ],
          correct: 1,
          explanation:
            "gluLookAt define la cámara con tres elementos: el punto de vista (posición del ojo/cámara), el punto de referencia (hacia dónde se mira) y el vector 'up' (qué dirección es 'arriba'). El vector up es necesario para fijar la orientación (inclinación) de la cámara; sin él, la vista quedaría indeterminada.",
        },
        {
          id: 11,
          question: "¿Qué función establece el volumen de recorte ortogonal en OpenGL?",
          options: ["glFrustum()", "glTranslatef()", "glOrtho()", "glViewport()"],
          correct: 2,
          explanation:
            "glOrtho() define un volumen de recorte ortogonal (un paralelepípedo rectangular) para la proyección paralela. glFrustum() define el volumen en perspectiva (un frustum), glTranslatef() traslada, y glViewport() define la región de dibujo en la ventana, no el volumen de recorte.",
        },
        {
          id: 12,
          question: "¿Cuál es la función de la ventana de recorte en el pipeline 2D?",
          options: [
            "Ampliar todos los objetos de la escena.",
            "Determinar los colores visibles.",
            "Seleccionar la región del mundo que se visualizará en el viewport.",
            "Cambiar la resolución del viewport.",
          ],
          correct: 2,
          explanation:
            "La ventana de recorte (clipping window) delimita qué región del mundo se va a mostrar; su contenido se mapea después al viewport en la pantalla. Actúa como un 'recorte' que selecciona la porción de la escena visible. No amplía objetos, no decide colores ni cambia la resolución.",
        },
        {
          id: 13,
          question: "¿Qué forma tiene el volumen de recorte en proyección en perspectiva?",
          options: [
            "Un paralelepípedo oblicuo.",
            "Un paralelepípedo rectangular.",
            "Un cilindro.",
            "Un tronco de pirámide (frustum).",
          ],
          correct: 3,
          explanation:
            "En la proyección en perspectiva, el volumen de recorte tiene forma de tronco de pirámide o frustum: una pirámide con la punta (el ojo/cámara) recortada por los planos cercano y lejano. Esta forma es la que produce el efecto de que los objetos lejanos se ven más pequeños. La proyección ortogonal, en cambio, usa un paralelepípedo rectangular.",
        },
        {
          id: 14,
          question: "¿Qué valor representa fovy en gluPerspective()?",
          options: [
            "El ángulo horizontal de visión en grados.",
            "El ángulo vertical de visión en grados.",
            "La posición del plano lejano.",
            "La posición del plano cercano.",
          ],
          correct: 1,
          explanation:
            "fovy (field of view in y) es el ángulo vertical de visión, en grados, que abarca la cámara. Junto con la relación de aspecto (aspect) determina el ángulo de apertura del frustum. Los planos cercano y lejano se indican con otros parámetros (zNear y zFar).",
        },
        {
          id: 15,
          question:
            "¿Cuál es la diferencia entre proyección paralela ortogonal y proyección en perspectiva?",
          options: [
            "La ortogonal distorsiona más que la perspectiva.",
            "En la ortogonal las líneas son paralelas y perpendiculares al plano de proyección; en perspectiva convergen en un punto.",
            "La perspectiva no altera el tamaño aparente de los objetos con la distancia.",
            "Ambas usan el mismo volumen de recorte.",
          ],
          correct: 1,
          explanation:
            "En la proyección ortogonal, las líneas de proyección son paralelas entre sí y perpendiculares al plano de proyección, por lo que se conserva el tamaño de los objetos independientemente de la distancia (útil en planos técnicos). En la perspectiva, las líneas convergen en un punto de fuga y los objetos lejanos se ven más pequeños, imitando la visión humana.",
        },
        {
          id: 16,
          question: "¿Cuál es el objetivo de los algoritmos de eliminación de superficies ocultas?",
          options: [
            "Cambiar el punto de vista para ver superficies ocultas.",
            "Determinar qué partes no pertenecen a la escena.",
            "Decidir qué superficies son visibles desde un punto de vista determinado.",
            "Aplicar texturas realistas a superficies complejas.",
          ],
          correct: 2,
          explanation:
            "Los algoritmos de eliminación de superficies ocultas determinan qué superficies (o partes de ellas) son visibles desde un punto de vista dado y cuáles quedan tapadas por otras, para no dibujarlas. Es esencial para el realismo: sin ellos se verían caras que deberían estar ocultas detrás de otros objetos.",
        },
        {
          id: 17,
          question: "¿Cuál es el principio fundamental del algoritmo Z-buffer?",
          options: [
            "Pintar objetos del más cercano al más lejano.",
            "Determinar visibilidad con ecuaciones de intersección.",
            "Comparar la profundidad de cada píxel y registrar el más cercano.",
            "Eliminar objetos más allá de una distancia umbral.",
          ],
          correct: 2,
          explanation:
            "El Z-buffer (buffer de profundidad) almacena, para cada píxel, la profundidad (Z) del objeto más cercano dibujado hasta el momento. Al pintar un nuevo fragmento, compara su profundidad con la guardada y solo lo dibuja si está más cerca. Trabaja píxel a píxel, sin necesidad de ordenar los objetos previamente.",
        },
        {
          id: 18,
          question: "¿Qué hace la activación del control de profundidad en OpenGL?",
          options: [
            "Permite pintar todos los objetos en orden inverso desde la cámara.",
            "Activa el control de transparencia.",
            "Activa el uso del buffer de profundidad para decidir visibilidad.",
            "Obliga a redibujar la escena al cambiar la cámara.",
          ],
          correct: 2,
          explanation:
            "Activar el test de profundidad (glEnable(GL_DEPTH_TEST)) habilita el uso del buffer de profundidad (Z-buffer) para decidir qué fragmentos son visibles según su distancia a la cámara. No tiene que ver con la transparencia (blending) ni obliga a redibujar: simplemente permite la correcta ocultación de superficies.",
        },
        {
          id: 19,
          question: "¿Cuál es la librería de visión artificial de código abierto utilizada en este curso?",
          options: ["TensorFlow.", "OpenGL.", "OpenCV.", "NumPy."],
          correct: 2,
          explanation:
            "OpenCV (Open Source Computer Vision Library) es la librería de visión artificial de código abierto empleada en el curso para procesamiento y análisis de imágenes. TensorFlow es de aprendizaje automático, OpenGL es de gráficos (síntesis, no análisis) y NumPy es de cálculo numérico con arrays.",
        },
        {
          id: 20,
          question: "¿Cuál es el formato de color por defecto al cargar imágenes en OpenCV?",
          options: ["RGB.", "Grayscale.", "BGR.", "CMYK."],
          correct: 2,
          explanation:
            "OpenCV carga las imágenes en formato BGR (azul, verde, rojo) por defecto, en lugar del habitual RGB. Es un detalle importante: si se muestra una imagen de OpenCV con librerías que esperan RGB (como Matplotlib) sin convertir, los canales rojo y azul aparecen intercambiados.",
        },
        {
          id: 21,
          question: "¿Qué hace cv2.imshow()?",
          options: [
            "Muestra una imagen guardada en disco en el navegador.",
            "Muestra una ventana emergente con la imagen cargada.",
            "Muestra por consola los valores del array de la imagen.",
            "Genera un gráfico de barras del histograma.",
          ],
          correct: 1,
          explanation:
            "cv2.imshow() abre una ventana emergente del sistema que muestra la imagen cargada en memoria. No usa el navegador, no imprime los valores del array por consola (eso sería un print) ni genera histogramas. Suele acompañarse de cv2.waitKey() para mantener la ventana abierta.",
        },
        {
          id: 22,
          question: "¿Cuál es la diferencia entre informática gráfica y procesamiento de imágenes?",
          options: [
            "La informática gráfica mejora imágenes existentes.",
            "El procesamiento de imágenes genera contenido sintético.",
            "La informática gráfica se enfoca en la síntesis de imágenes y el procesamiento en el análisis de ellas.",
            "No existe una diferencia sustancial entre ambas.",
          ],
          correct: 2,
          explanation:
            "La informática gráfica se centra en la síntesis: generar imágenes nuevas a partir de modelos y datos. El procesamiento de imágenes hace lo contrario: analiza y transforma imágenes ya existentes (filtrado, detección, mejora). Son procesos inversos: una crea imágenes desde datos, el otro extrae datos desde imágenes.",
        },
        {
          id: 23,
          question: "¿Cuál de las siguientes descripciones corresponde a OpenGL?",
          options: [
            "Es un lenguaje de programación gráfico.",
            "Es un software libre para editar imágenes.",
            "Es una API multiplataforma y multilenguaje para gráficos 2D y 3D.",
            "Es un paquete gráfico solo disponible para sistemas Windows.",
          ],
          correct: 2,
          explanation:
            "OpenGL es una API (interfaz de programación) multiplataforma y multilenguaje para renderizar gráficos 2D y 3D, no un lenguaje de programación ni un editor de imágenes. Su carácter multiplataforma es una de sus ventajas: funciona en Windows, Linux, macOS, etc.",
        },
        {
          id: 24,
          question: "¿Qué es una reflexión en 2D?",
          options: [
            "Una simetría del objeto respecto a un eje o al origen.",
            "Una rotación parcial de un objeto alrededor de un punto.",
            "Una ampliación del objeto a lo largo de los ejes.",
            "Una deformación que estira el objeto.",
          ],
          correct: 0,
          explanation:
            "Una reflexión en 2D es una transformación de simetría: crea la imagen especular del objeto respecto a un eje (X, Y o una recta) o respecto al origen. No es una rotación (giro), ni un escalado (ampliación), ni una cizalla (deformación): produce un objeto 'espejo' del original.",
        },
        {
          id: 25,
          question: "¿Qué función de OpenGL define el área visible del universo en el viewport?",
          options: [
            "glViewport(…)",
            "glutInitWindowPosition(…)",
            "gluOrtho2D(…)",
            "Ninguna de las anteriores.",
          ],
          correct: 2,
          explanation:
            "gluOrtho2D(...) define la ventana de recorte 2D, es decir, qué región del mundo (universo) será visible y se mapeará al viewport. glViewport define la zona de la pantalla donde se dibuja (no qué parte del mundo se ve), y glutInitWindowPosition solo fija la posición de la ventana en el escritorio.",
        },
        {
          id: 26,
          question: "¿Qué es un cambio de coordenadas?",
          options: [
            "Un algoritmo que elimina vértices redundantes.",
            "El cálculo de las coordenadas de un punto respecto a un nuevo sistema.",
            "La reubicación física de un objeto en la memoria.",
            "Una transformación de color de los vértices.",
          ],
          correct: 1,
          explanation:
            "Un cambio de coordenadas consiste en expresar las coordenadas de un punto (o de un objeto) respecto a un sistema de referencia distinto del original. Es la base del pipeline gráfico (paso de modelo a mundo, a vista, etc.). No elimina vértices, no mueve datos en memoria ni cambia colores.",
        },
        {
          id: 27,
          question: "¿Qué limitación tiene el algoritmo Z-buffer?",
          options: [
            "Solo puede usarse con proyecciones ortogonales.",
            "No permite representar superficies transparentes.",
            "No funciona con escenas dinámicas.",
            "Solo admite un número limitado de objetos por escena.",
          ],
          correct: 1,
          explanation:
            "El Z-buffer, por sí solo, no gestiona bien la transparencia: al guardar solo la profundidad del fragmento más cercano por píxel, no puede combinar correctamente varias superficies translúcidas superpuestas (para ello hace falta ordenar y usar blending). Sí funciona con perspectiva, escenas dinámicas y muchos objetos.",
        },
        {
          id: 28,
          question:
            "¿Cuál es la principal diferencia entre algoritmos del espacio de objetos y del espacio de imagen?",
          options: [
            "Los del espacio de imagen funcionan solo en 2D.",
            "Los del espacio de objetos no funcionan con objetos de colores.",
            "Los del espacio de objetos calculan visibilidad píxel a píxel.",
            "Los del espacio de objetos tratan con objetos; los del espacio de imagen, con píxeles.",
          ],
          correct: 3,
          explanation:
            "Los algoritmos del espacio de objetos trabajan a nivel de las primitivas geométricas (objetos, polígonos), comparándolas entre sí, mientras que los del espacio de imagen trabajan a nivel de píxel de la pantalla (como el Z-buffer). Esta es su distinción fundamental: geometría frente a píxeles.",
        },
        {
          id: 29,
          question: "¿Qué tipo de dato tiene una imagen cargada con cv2.imread() en Python?",
          options: [
            "Lista de listas.",
            "Lista simple.",
            "Diccionario.",
            "ndarray de NumPy.",
          ],
          correct: 3,
          explanation:
            "cv2.imread() devuelve la imagen como un ndarray de NumPy (matriz multidimensional): filas × columnas × canales de color. Trabajar con arrays de NumPy permite manipular los píxeles de forma eficiente con operaciones vectorizadas, en lugar de listas de Python o diccionarios.",
        },
        {
          id: 30,
          question: "¿Qué hace cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)?",
          options: [
            "Invierte los colores de la imagen.",
            "Convierte la imagen de BGR a escala de grises.",
            "Ecualiza el histograma de la imagen.",
            "Aplica un filtro de desenfoque gaussiano.",
          ],
          correct: 1,
          explanation:
            "cv2.cvtColor con el código COLOR_BGR2GRAY convierte una imagen del formato BGR (el de OpenCV por defecto) a escala de grises, reduciendo los tres canales de color a un único canal de intensidad. No invierte colores, ni ecualiza el histograma, ni desenfoca: solo cambia el espacio de color a grises.",
        },
      ],
    },
  ],
};
