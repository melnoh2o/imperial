import { useMutation } from '@tanstack/react-query';
import { Modal, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';

import useStore from '../../store';
import { MailServices } from '../../services/mailServices';
import { Variants } from '../../constants/animation';
import TextInput from '../TextInput';
import CustomPhoneInput from '../CustomPhoneInput';
import Loader from '../Loader';
import { FormButton, SuccessMessage, useInputStyles } from '../styles/index';
import { FormWrapper, Label, useStyles } from './styles';

const CallBackFormModal = () => {
  const isOpen = useStore((store) => store.isCallbackFormOpen);
  const onClose = useStore((store) => store.closeCallbackModal);

  const { mutateAsync, isLoading, isSuccess } = useMutation({ mutationFn: MailServices.senMail });

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
    },
    validate: {
      name: (value) => (value.length < 2 ? 'Пожалуйста, введите имя!' : null),
      phone: (value) => (value.length < 3 ? 'Пожалуйста, введите номер телефона!' : null),
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
      title="Оставьте заявку и получите от нашего эксперта актуальные цены, планировки и условия"
      styles={{
        inner: {
          zIndex: 2000,
        },
        content: {
          borderRadius: 0,
        },
        body: {
          padding: '40px 45px',
        },
        header: {
          padding: '40px 45px 20px',
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
            label="Имя"
            placeholder="Имя"
            {...form.getInputProps('name')}
            classNames={{ input, label }}
          />
          <Stack spacing={0}>
            <Label>Номер телефона</Label>
            <CustomPhoneInput {...form.getInputProps('phone')} isHigh={true} />
            {/* {form.errors && form.errors.phone && <p>{form.errors.phone}</p>} */}
          </Stack>
          <FormButton
            disabled={isLoading}
            initial="hidden"
            exit="exit"
            animate="enter"
            variants={Variants.opacity}
            custom={1.2}
          >
            {isLoading ? <Loader size={25} /> : 'Оставить заявку'}
          </FormButton>
        </FormWrapper>
      ) : (
        <SuccessMessage initial="hidden" exit="exit" animate="enter" variants={Variants.opacity} custom={1.2}>
          Спасибо, наш эксперт предоставит информацию в ближайшее время
        </SuccessMessage>
      )}
    </Modal>
  );
};

export default CallBackFormModal;
