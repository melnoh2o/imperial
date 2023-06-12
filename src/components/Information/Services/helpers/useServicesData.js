import { useId } from 'react';
import { useTranslation } from 'react-i18next';
import { GrPlan } from 'react-icons/gr';
import { GiUpgrade } from 'react-icons/gi';
import { BsHouseHeart } from 'react-icons/bs';
import { MdOutlineRealEstateAgent } from 'react-icons/md';

export function useServicesData() {
  const { t } = useTranslation();

  const services = [
    // 1
    {
      id: useId(),
      icon: MdOutlineRealEstateAgent,
      title: t('information.services.firstItem.title'),
      description: t('information.services.firstItem.description'),
    },
    {
      id: useId(),
      icon: BsHouseHeart,
      title: t('information.services.secondItem.title'),
      description: t('information.services.secondItem.description'),
    },
    {
      id: useId(),
      icon: GiUpgrade,
      title: t('information.services.thirdItem.title'),
      description: t('information.services.thirdItem.description'),
    },

    // 2
    {
      id: useId(),
      icon: GrPlan,
      title: t('information.services.fourthItem.title'),
      description: t('information.services.fourthItem.description'),
    },
    {
      id: useId(),
      icon: GrPlan,
      title: t('information.services.fifthItem.title'),
      description: t('information.services.fifthItem.description'),
    },
    {
      id: useId(),
      icon: GrPlan,
      title: t('information.services.sixthItem.title'),
      description: t('information.services.sixthItem.description'),
    },
    {
      id: useId(),
      icon: GrPlan,
      title: t('information.services.seventhItem.title'),
      description: t('information.services.seventhItem.description'),
    },
  ];

  return { services };
}
