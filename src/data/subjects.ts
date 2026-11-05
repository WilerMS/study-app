import type { Subject } from "../types";
import { algebra } from "./subjects/algebra";
import { calculo } from "./subjects/calculo";
import { comunicacion } from "./subjects/comunicacion";
import { deontologia } from "./subjects/deontologia";
import { disenoAlgoritmos } from "./subjects/diseno-algoritmos";
import { estadistica } from "./subjects/estadistica";
import { fundamentosFisicos } from "./subjects/fundamentos-fisicos";
import { informaticaGrafica } from "./subjects/informatica-grafica";
import { ingenieriaRequisitos } from "./subjects/ingenieria-requisitos";
import { procesos } from "./subjects/procesos";

export const subjects: Subject[] = [fundamentosFisicos, ingenieriaRequisitos];

// Asignaturas desactivadas: no se muestran en la app, pero se conservan sus preguntas.
// Para reactivar una, muévela a `subjects`.
export const archivedSubjects: Subject[] = [
  algebra,
  calculo,
  comunicacion,
  deontologia,
  disenoAlgoritmos,
  estadistica,
  informaticaGrafica,
  procesos,
];
