import { useId } from 'react';
import { GrPlan } from 'react-icons/gr';
import { GiUpgrade } from 'react-icons/gi';
import { BsHouseHeart } from 'react-icons/bs';
import { MdOutlineRealEstateAgent } from 'react-icons/md';

export function useServicesData() {
  const services = [
    // 1
    {
      id: useId(),
      title: 'Наша миссия',
      icon: MdOutlineRealEstateAgent,
      description:
        'Миссия нашего агентства недвижимости заключается в том, чтобы предоставлять нашим клиентам самый высокий уровень профессиональных услуг в области недвижимости. Мы стремимся помочь нашим клиентам достичь своих целей в покупке, продаже или аренде недвижимости на Северном Кипре.',
    },
    {
      id: useId(),
      title: 'Наше виденье',
      icon: BsHouseHeart,
      description:
        'Независимо от того, ищете ли вы дом для семьи, квартиру для аренды, коммерческую недвижимость для бизнеса или инвестиционные возможности на рынке недвижимости, мы готовы предоставить вам наши знания и опыт, чтобы помочь вам достичь ваших целей.',
    },
    {
      id: useId(),
      title: 'Наши ценности',
      icon: GiUpgrade,
      description:
        'Мы стремимся к тому, чтобы наши клиенты были полностью удовлетворены нашими услугами, и поэтому мы делаем все возможное, чтобы обеспечить нашим клиентам индивидуальный подход и высококачественное обслуживание.',
    },
    {
      id: useId(),
      title: 'Сильный штат',
      icon: GrPlan,
      description:
        'Мы являемся профессионалами в области недвижимости на Северном Кипре. Наша команда состоит из высококвалифицированных специалистов, имеющих большой опыт работы в этой области.',
    },
    // 2
    {
      id: useId(),
      title: 'Большой выбор недвижимости',
      icon: GrPlan,
      description:
        'Мы предлагаем широкий выбор недвижимости на Северном Кипре, включая квартиры, виллы, дома и земельные участки. Наша база данных постоянно обновляется, поэтому мы можем предложить вам самые актуальные варианты.',
    },
    {
      id: useId(),
      icon: GrPlan,
      title: 'Долгосрочные отношения',
      description:
        'Мы ценим своих клиентов и стремимся установить с ними долгосрочные отношения. Мы не только помогаем нашим клиентам купить или продать недвижимость, но и предоставляем им послепродажное обслуживание, чтобы они могли чувствовать себя поддержанными и защищенными в любое время.',
    },
    {
      id: useId(),
      title: 'Юридическая поддержка',
      icon: GrPlan,
      description:
        'Мы предоставляем полную юридическую поддержку нашим клиентам, чтобы гарантировать, что все сделки проходят законно и безопасно. Мы имеем обширный опыт в работе с законодательством Северного Кипра, поэтому вы можете быть уверены, что ваша сделка будет выполнена в соответствии с местными требованиями и нормами.',
    },
  ];

  return { services };
}
