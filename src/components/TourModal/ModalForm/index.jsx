import { useMutation } from '@tanstack/react-query';
import { useForm } from '@mantine/form';
import { Stack, TextInput, Checkbox } from '@mantine/core';

import { Variants } from '../../../constants/animation';
import { MailServices } from '../../../services/mailServices';
import Loader from '../../Loader';
import CustomPhoneInput from '../../CustomPhoneInput';
import { SuccessMessage, FormButton, useInputStyles } from '../../styles/index.js';
import { CheckboxTitle, FormWrapper, useCheckboxStyles } from './styles';

const ModalForm = () => {
  const { mutateAsync, isLoading, isSuccess } = useMutation({ mutationFn: MailServices.senMail });

  const form = useForm({
    initialValues: {
      phone: '',
      name: '',
      format: '',
    },
    validate: {
      name: (value) => (value.length < 2 ? 'Пожалуйста, введите имя!' : null),
      phone: (value) => (value.length < 3 ? 'Пожалуйста, введите номер телефона!' : null),
    },
  });

  const {
    classes: { input },
  } = useInputStyles();
  const {
    classes: { label, checkboxInput },
  } = useCheckboxStyles();

  const handleSubmit = async (values) => {
    try {
      await mutateAsync(values);
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!isSuccess ? (
        <FormWrapper
          onSubmit={form.onSubmit(handleSubmit)}
          initial="hidden"
          exit="exit"
          animate="enter"
          variants={Variants.opacity}
          custom={1.1}
        >
          <TextInput placeholder="Имя" {...form.getInputProps('name')} classNames={{ input }} />
          <CustomPhoneInput {...form.getInputProps('phone')} />
          <Stack spacing={5}>
            <CheckboxTitle>Выберите удобный для вас мессенджер для получения информации</CheckboxTitle>
            <Checkbox.Group {...form.getInputProps('format')}>
              <Checkbox value="WhatsApp" label="WhatsApp" classNames={{ label, input: checkboxInput }} />
              <Checkbox
                value="Telegram"
                label="Telegram"
                mt={5}
                classNames={{ label, input: checkboxInput }}
              />
            </Checkbox.Group>
          </Stack>
          <FormButton disabled={isLoading}>
            {isLoading ? <Loader size={25} /> : 'Получить детальную информацию'}
          </FormButton>
        </FormWrapper>
      ) : (
        <SuccessMessage initial="hidden" exit="exit" animate="enter" variants={Variants.opacity} custom={1.2}>
          Спасибо, наш эксперт предоставит информацию в ближайшее время
        </SuccessMessage>
      )}
    </>
  );
};

export default ModalForm;
