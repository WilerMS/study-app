import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { Subject } from '../types';
import { getSubject } from '../services/subjectService';

interface State {
  data: Subject | null;
  loading: boolean;
  error: string | null;
}

export function useSubject(id: string | undefined): State {
  const { t } = useTranslation();
  const [state, setState] = useState<State>({ data: null, loading: true, error: null });

  useEffect(() => {
    if (!id) {
      setState({ data: null, loading: false, error: t('errors.subjectInvalidId') });
      return;
    }

    let cancelled = false;

    getSubject(id)
      .then((data) => {
        if (!cancelled) setState({ data, loading: false, error: data ? null : t('errors.subjectNotFound') });
      })
      .catch(() => {
        if (!cancelled) setState({ data: null, loading: false, error: t('errors.subjectLoad') });
      });

    return () => { cancelled = true; };
  }, [id, t]);

  return state;
}
