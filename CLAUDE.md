# Study App — Guía del proyecto

App de tests para estudiar las asignaturas del examen final tipo test de la carrera. El objetivo es tener **30 preguntas por cada "cosa" que entra en el examen** (cada actividad y cada banco de preguntas), para poder practicar hasta dominarlas.

## Estructura del examen (contexto)

Cada Prueba de Validación final tiene 10 preguntas tipo test:

- **3 preguntas** de la **Actividad 1**
- **4 preguntas** de la **Actividad 2**
- **3 preguntas** del **Banco de Preguntas** (Test de los temas)

Algunas asignaturas solo tienen una actividad, o solo el banco. Se hace test de lo que haya.

## Arquitectura de datos

- Todas las preguntas viven en `src/data/` en formato tipado (`src/types/index.ts`: `Subject → Topic → Question`).
- **Un archivo `.ts` por asignatura** en `src/data/subjects/` que exporta un `Subject`.
- `src/data/subjects.ts` es el **agregador**: importa cada asignatura y las expone en `export const subjects: Subject[]`.
- El flujo de carga es: `subjects.ts` → `services/subjectService.ts` → `hooks/useSubjects.ts` → páginas.

Modelo de datos:

```ts
interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
}
interface Topic {
  id: number;
  name: string;
  description?: string;
  questions: Question[];
}
interface Subject {
  id: string;
  name: string;
  icon?: string;
  topics: Topic[];
}
```

`correct` es el **índice 0-based** de la opción correcta dentro de `options`.

Cada asignatura tiene **un `Topic` por cada archivo PDF** (Actividad 1, Actividad 2, Banco de preguntas). El `name` es el **título corto** (`"Actividad 1"`, `"Actividad 2"`, `"Banco de preguntas"`) y `description` es la **temática** que resume el contenido (p. ej. `"Operaciones con matrices y resolución de sistemas lineales"`). La UI muestra el título en negrita y la descripción atenuada debajo. El banco usa siempre `name: "Banco de preguntas"` con `description: "Test tipo examen de todos los temas"`.

## Cómo generar los tests a partir de los PDFs

Los PDFs originales están en `/mnt/c/Users/Wiler/Documents/unipro/Repaso` (una carpeta por asignatura). Para extraer texto **no hay poppler**; usar Python con **pymupdf**:

```bash
pip install --break-system-packages pymupdf   # si no está
python3 -c "import fitz; d=fitz.open('archivo.pdf'); print('\n'.join(d[p].get_text() for p in range(d.page_count)))"
```

### Reglas por tipo de archivo

- **Actividades** (`ACTIVIDAD_...`, `EXTRAORDINARY_ACTIVITY_...`): analizar el contenido del PDF y **redactar 30 preguntas** inventando opciones plausibles + la correcta. Preguntas sobre lo que realmente dice la actividad (datos concretos, definiciones, decisiones, cálculos). Si la actividad trae cálculos (matrices, integrales, series, estadística), **resolverlos** y crear preguntas con los valores reales.
- **Bancos de preguntas** (`Banco...`): extraer **TODAS** las preguntas con enunciado y opciones **EXACTOS** tal como aparecen en el PDF. Los bancos **NO traen la solución marcada** (lo dice el propio documento), así que hay que **deducir la respuesta correcta** y escribir la explicación. Suelen ser 30 preguntas.

### Estilo de las explicaciones (importante)

Las explicaciones deben ser **profundas**: explicar **por qué la correcta es correcta** y **por qué las demás no lo son**, añadiendo contexto teórico. No valen explicaciones de una línea superficiales. Ver `procesos.ts` o `calculo.ts` como referencia de calidad.

### Idioma

Todo en **español**, aunque el PDF original esté en inglés (p. ej. Comunicación y Liderazgo, Deontología). Se traducen los conceptos al español para estudiar.

## Flujo cuando el usuario adjunte nuevos PDFs

Cuando el usuario adjunte una actividad o banco que falta:

1. Identificar a qué asignatura pertenece (ver tabla de estado abajo).
2. Extraer el texto con pymupdf.
3. Añadir un nuevo `Topic` al archivo `.ts` de esa asignatura (o crear el archivo si es una asignatura nueva y añadirla al agregador `subjects.ts`).
4. Seguir las reglas de arriba (30 preguntas si es actividad; extraer exacto + deducir correcta si es banco).
5. Verificar con `npx tsc --noEmit` y `npm run build`.

## Estado actual (asignaturas y topics existentes)

| Asignatura                          | Archivo                  | Act 1 | Act 2 | Banco | Estado                         |
| ----------------------------------- | ------------------------ | ----- | ----- | ----- | ------------------------------ |
| Álgebra y Matemática Discreta       | `algebra.ts`             | ✅    | ✅    | n/a   | Completa (no existe banco)     |
| Cálculo y Métodos Numéricos         | `calculo.ts`             | ✅    | ✅    | ✅    | Completa                       |
| Comunicación y Liderazgo            | `comunicacion.ts`        | ✅    | ✅    | n/a   | Completa (no existe banco)     |
| Deontología y Legislación           | `deontologia.ts`         | ✅    | ✅    | n/a   | Completa (no existe banco)     |
| Diseño Avanzado de Algoritmos       | `diseno-algoritmos.ts`   | ✅    | —     | —     | Suspendida: repetir el próximo curso |
| Estadística                         | `estadistica.ts`         | ✅    | ✅    | ✅    | Completa                       |
| Fundamentos Físicos de la Informática | `fundamentos-fisicos.ts` | ✅  | ✅    | n/a   | Curso 2026-27 · Act1 (30), Act2 (30), Tests (50); falta Temario |
| Informática Gráfica y Visualización | `informatica-grafica.ts` | —     | —     | ✅    | Suspendida: repetir el próximo curso |
| Procesos de Ingeniería del Software | `procesos.ts`            | ✅    | ✅    | ✅    | Completa                       |

**Asignaturas del curso 2026-27 (no hay banco):** llevan 4 topics de 30 preguntas mínimo: Actividad 1 (id 1), Actividad 2 (id 2), Temario (id 3) y Tests de los temas (id 4). Las preguntas de los tests se copian **literalmente** desde los `.md` guardados en `unipro/<asignatura>/tests/N.md` (en el examen salen idénticas). No se incluyen las preguntas con varias respuestas correctas (el modelo solo admite un `correct`) ni las que el campus no ha confirmado. La app baraja las opciones, así que se evitan las de "Todas las anteriores".

"n/a" = la asignatura **no tiene banco de preguntas**: en el examen todas las preguntas salen de las actividades y del temario. "Suspendida" = el usuario la repetirá el curso siguiente; cuando traiga los PDFs nuevos (pueden cambiar las actividades), añadir o sustituir los topics. Cada topic completo tiene 30 preguntas.

## Comandos útiles

- `npm run dev` — servidor de desarrollo.
- `npx tsc --noEmit` — comprobar tipos.
- `npm run build` — build de producción (verifica que todo carga).
