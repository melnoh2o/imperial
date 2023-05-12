import { Group } from '@mantine/core';
import { IoMdBed } from 'react-icons/io';
import { CiMoneyBill } from 'react-icons/ci';

import useStore from '../../../../store';
import { Variants } from '../../../../constants/animation';
import { CallbackButton, PriceGroup, PriceTitle, PricesStack, Stack, Wrapper } from './styles';

const PriceDescription = ({ prices }) => {
  const openCallbackModal = useStore((store) => store.openCallbackModal);

  return (
    <Wrapper>
      <PricesStack>
        <PriceTitle variants={Variants.opacity} custom={1.2}>
          Планировки и стоимость:
        </PriceTitle>

        <Stack variants={Variants.container} initial="hidden" whileInView="visible">
          {prices?.map((item) => (
            <PriceGroup key={item.id} variants={Variants.item}>
              <Group spacing={4}>
                <IoMdBed />
                <span>{item.description}</span>
              </Group>
              <Group spacing={4}>
                <CiMoneyBill />
                <span>{item.price}</span>
              </Group>
            </PriceGroup>
          ))}
          <CallbackButton
            type="button"
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onClick={openCallbackModal}
          >
            Оставить заявку
          </CallbackButton>
        </Stack>
      </PricesStack>
    </Wrapper>
  );
};

export default PriceDescription;
