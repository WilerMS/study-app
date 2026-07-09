import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { Topic } from '../types';
import { getTopic } from '../services/subjectService';

interface State {
  data: Topic | null;
  loading: boolean;
  error: string | null;
}

export function useTopic(subjectId: string | undefined, topicId: string | undefined): State {
  const { t } = useTranslation();
  const [state, setState] = useState<State>({ data: null, loading: true, error: null });

  useEffect(() => {
    const parsedTopicId = Number(topicId);

    if (!subjectId || !topicId || isNaN(parsedTopicId)) {
      setState({ data: null, loading: false, error: t('errors.topicInvalidParams') });
      return;
    }

    let cancelled = false;

    getTopic(subjectId, parsedTopicId)
      .then((data) => {
        if (!cancelled) setState({ data, loading: false, error: data ? null : t('errors.topicNotFound') });
      })
      .catch(() => {
        if (!cancelled) setState({ data: null, loading: false, error: t('errors.topicLoad') });
      });

    return () => { cancelled = true; };
  }, [subjectId, topicId, t]);

  return state;
}
