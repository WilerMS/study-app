import { useEffect, useState } from 'react';
import type { Subject } from '../types';
import { getSubject } from '../services/subjectService';

interface State {
  data: Subject | null;
  loading: boolean;
  error: string | null;
}

export function useSubject(id: string | undefined): State {
  const [state, setState] = useState<State>({ data: null, loading: true, error: null });

  useEffect(() => {
    if (!id) {
      setState({ data: null, loading: false, error: 'ID de asignatura no válido.' });
      return;
    }

    let cancelled = false;

    getSubject(id)
      .then((data) => {
        if (!cancelled) setState({ data, loading: false, error: data ? null : 'Asignatura no encontrada.' });
      })
      .catch(() => {
        if (!cancelled) setState({ data: null, loading: false, error: 'No se pudo cargar la asignatura.' });
      });

    return () => { cancelled = true; };
  }, [id]);

  return state;
}
