import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { Subject } from '../types';
import { getSubjects } from '../services/subjectService';

interface State {
  data: Subject[];
  loading: boolean;
  error: string | null;
}

export function useSubjects(): State {
  const { t } = useTranslation();
  const [state, setState] = useState<State>({ data: [], loading: true, error: null });

  useEffect(() => {
    let cancelled = false;

    getSubjects()
      .then((data) => {
        if (!cancelled) setState({ data, loading: false, error: null });
      })
      .catch(() => {
        if (!cancelled) setState({ data: [], loading: false, error: t('errors.subjectsLoad') });
      });

    return () => { cancelled = true; };
  }, [t]);

  return state;
}
