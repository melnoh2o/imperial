import { useTranslation } from 'react-i18next';
import { useMutation } from '@tanstack/react-query';
import { useForm } from '@mantine/form';
import { Stack, TextInput, Checkbox } from '@mantine/core';

import { Variants } from '../../../constants/animation';
import { MailServices } from '../../../services/mailServices';
import Loader from '../../Loader';
import CustomPhoneInput from '../../CustomPhoneInput';
import { SuccessMessage, useInputStyles } from '../../styles/index.js';
import { Button, CheckboxTitle, FormWrapper, useCheckboxStyles } from './styles';
import NumberInput from '../../NumberInput';

const ModalForm = () => {
  const { t } = useTranslation();

  const { mutateAsync, isLoading, isSuccess } = useMutation({ mutationFn: MailServices.submitTourRequest });

  const form = useForm({
    initialValues: {
      phone: '',
      name: '',
      price: 0 || '',
      communicationMethod: '',
    },
    validate: {
      name: (value) => (value.length < 2 ? t('tourModal.form.nameInput.validation') : null),
      phone: (value) => (value.length < 3 ? t('tourModal.form.phoneInput.validation') : null),
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
      await mutateAsync({
        ...values,
        communicationMethod: String(values.communicationMethod),
      });
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
          <TextInput
            {...form.getInputProps('name')}
            placeholder={t('tourModal.form.nameInput.placeholder')}
            classNames={{ input }}
          />
          <CustomPhoneInput {...form.getInputProps('phone')} />
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
            placeholder={t('tourModal.form.priceInput.placeholder')}
            classNames={{ input }}
          />
          <Stack spacing={5}>
            <CheckboxTitle>{t('tourModal.form.checkbox.title')}</CheckboxTitle>
            <Checkbox.Group {...form.getInputProps('communicationMethod')}>
              <Checkbox value="WhatsApp" label="WhatsApp" classNames={{ label, input: checkboxInput }} />
              <Checkbox
                value="Telegram"
                label="Telegram"
                mt={5}
                classNames={{ label, input: checkboxInput }}
              />
            </Checkbox.Group>
          </Stack>
          <Button disabled={isLoading}>
            {isLoading ? <Loader size={25} /> : t('tourModal.form.btnText')}
          </Button>
        </FormWrapper>
      ) : (
        <SuccessMessage initial="hidden" exit="exit" animate="enter" variants={Variants.opacity} custom={1.2}>
          {t('tourModal.form.successMessage')}
        </SuccessMessage>
      )}
    </>
  );
};

export default ModalForm;
