import { useEffect, useState } from 'react';
import type { Topic } from '../types';
import { getTopic } from '../services/subjectService';

interface State {
  data: Topic | null;
  loading: boolean;
  error: string | null;
}

export function useTopic(subjectId: string | undefined, topicId: string | undefined): State {
  const [state, setState] = useState<State>({ data: null, loading: true, error: null });

  useEffect(() => {
    const parsedTopicId = Number(topicId);

    if (!subjectId || !topicId || isNaN(parsedTopicId)) {
      setState({ data: null, loading: false, error: 'Parámetros de tema no válidos.' });
      return;
    }

    let cancelled = false;

    getTopic(subjectId, parsedTopicId)
      .then((data) => {
        if (!cancelled) setState({ data, loading: false, error: data ? null : 'Tema no encontrado.' });
      })
      .catch(() => {
        if (!cancelled) setState({ data: null, loading: false, error: 'No se pudo cargar el tema.' });
      });

    return () => { cancelled = true; };
  }, [subjectId, topicId]);

  return state;
}
