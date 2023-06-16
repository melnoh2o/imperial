import { useTranslation } from 'react-i18next';
import { useMutation } from '@tanstack/react-query';
import { Modal, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';

import useStore from '../../store';
import { MailServices } from '../../services/mailServices';
import { Variants } from '../../constants/animation';
import TextInput from '../TextInput';
import CustomPhoneInput from '../CustomPhoneInput';
import NumberInput from '../NumberInput';
import Loader from '../Loader';
import { FormButton, SuccessMessage, useInputStyles } from '../styles/index';
import { FormWrapper, Label, useStyles } from './styles';

const CallBackFormModal = () => {
  const { t } = useTranslation();

  const isOpen = useStore((store) => store.isCallbackFormOpen);
  const onClose = useStore((store) => store.closeCallbackModal);

  const { mutateAsync, isLoading, isSuccess } = useMutation({ mutationFn: MailServices.submitRequest });

  const {
    classes: { input },
  } = useInputStyles();
  const {
    classes: { label },
  } = useStyles();

  const form = useForm({
    initialValues: {
      phone: '',
      name: '',
      price: 0 || '',
    },
    validate: {
      name: (value) => (value.length < 2 ? t('callbackModal.form.nameInput.validation') : null),
      phone: (value) => (value.length < 3 ? t('callbackModal.form.phoneInput.validation') : null),
    },
  });

  const handleSubmit = async (values) => {
    try {
      await mutateAsync(values);
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };
  // TODO:
  return (
    <Modal
      centered
      opened={isOpen}
      onClose={onClose}
      size={540}
      title={t('callbackModal.title')}
      styles={{
        inner: {
          zIndex: 2000,
        },
        content: {
          borderRadius: 0,
        },
        body: {
          padding:
            'clamp(1.88rem, calc(1.63rem + 1.22vw), 2.50rem) clamp(1.56rem, calc(1.07rem + 2.44vw), 2.81rem)',
        },
        header: {
          padding:
            'clamp(1.88rem, calc(1.63rem + 1.22vw), 2.50rem) clamp(1.56rem, calc(1.07rem + 2.44vw), 2.81rem) 20px',
          h2: {
            fontSize: 12,
            width: '80%',
            marginInline: 'auto',
            textAlign: 'center',
            color: 'var(--black)',
          },
        },
        close: {
          width: 25,
          height: 25,
          position: 'absolute',
          top: 25,
          right: 20,
          borderRadius: 0,
          transition: 'var(--transition)',

          svg: {
            width: 25,
            height: 25,
            color: 'var(--black)',
          },

          '&:hover': {
            background: 'var(--black)',

            svg: {
              color: 'var(--white)',
            },
          },
        },
      }}
    >
      {!isSuccess ? (
        <FormWrapper
          onSubmit={form.onSubmit(handleSubmit)}
          initial="hidden"
          exit="exit"
          animate="enter"
          variants={Variants.opacity}
          custom={1.1}
        >
          <TextInput
            label={t('callbackModal.form.nameInput.label')}
            placeholder={t('callbackModal.form.nameInput.label')}
            {...form.getInputProps('name')}
            classNames={{ input, label }}
          />
          <Stack spacing={0}>
            <Label>{t('callbackModal.form.phoneInput.label')}</Label>
            <CustomPhoneInput {...form.getInputProps('phone')} isHigh={true} />
          </Stack>
          <NumberInput
            {...form.getInputProps('price')}
            min={0}
            hideControls
            parser={(value) => value.replace(/\£\s?|(,*)/g, '')}
            formatter={(value) =>
              !Number.isNaN(parseFloat(value))
                ? `£ ${value}`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
                : '£ '
            }
            placeholder={t('callbackModal.form.priceInput.placeholder')}
            classNames={{ input }}
          />
          <FormButton
            disabled={isLoading}
            initial="hidden"
            exit="exit"
            animate="enter"
            variants={Variants.opacity}
            custom={1.2}
          >
            {isLoading ? <Loader size={25} /> : t('callbackModal.form.btnText')}
          </FormButton>
        </FormWrapper>
      ) : (
        <SuccessMessage initial="hidden" exit="exit" animate="enter" variants={Variants.opacity} custom={1.2}>
          {t('callbackModal.form.successMessage')}
        </SuccessMessage>
      )}
    </Modal>
  );
};

export default CallBackFormModal;
