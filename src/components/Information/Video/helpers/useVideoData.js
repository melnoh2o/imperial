import { useId } from 'react';
import { useTranslation } from 'react-i18next';

export function useVideoData() {
  const { t } = useTranslation();

  const data = [
    {
      id: useId(),
      title: t('information.video.firstItem.title'),
      description: t('information.video.firstItem.description'),
    },
    {
      id: useId(),
      title: t('information.video.secondItem.title'),
      description: t('information.video.secondItem.description'),
    },
    {
      id: useId(),
      title: t('information.video.thirdItem.title'),
      description: t('information.video.thirdItem.description'),
    },
  ];

  return { data };
}
