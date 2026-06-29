import { useEffect, useState } from 'react';
import type { Subject } from '../types';
import { getSubjects } from '../services/subjectService';

interface State {
  data: Subject[];
  loading: boolean;
  error: string | null;
}

export function useSubjects(): State {
  const [state, setState] = useState<State>({ data: [], loading: true, error: null });

  useEffect(() => {
    let cancelled = false;

    getSubjects()
      .then((data) => {
        if (!cancelled) setState({ data, loading: false, error: null });
      })
      .catch(() => {
        if (!cancelled) setState({ data: [], loading: false, error: 'No se pudieron cargar las asignaturas.' });
      });

    return () => { cancelled = true; };
  }, []);

  return state;
}
