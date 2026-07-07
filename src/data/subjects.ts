import type { Subject } from "../types";
import { algebra } from "./subjects/algebra";
import { calculo } from "./subjects/calculo";
import { comunicacion } from "./subjects/comunicacion";
import { deontologia } from "./subjects/deontologia";
import { disenoAlgoritmos } from "./subjects/diseno-algoritmos";
import { estadistica } from "./subjects/estadistica";
import { informaticaGrafica } from "./subjects/informatica-grafica";
import { procesos } from "./subjects/procesos";

export const subjects: Subject[] = [
  algebra,
  calculo,
  comunicacion,
  deontologia,
  disenoAlgoritmos,
  estadistica,
  informaticaGrafica,
  procesos,
];
