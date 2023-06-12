import { useTranslation } from 'react-i18next';
import { useMutation } from '@tanstack/react-query';
import { Stack, TextInput, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import { AiOutlineArrowRight } from 'react-icons/ai';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import { MailServices } from '../../../services/mailServices';
import { useNavLinks } from '../../../helpers/hooks/useNavLinks';
import { Variants } from '../../../constants/animation';
import Loader from '../../Loader';
import { Container, ContentWrapper, Subtitle, SuccessMessage, Title, TitleStack } from '../../styles';
import {
  ContactCardLink,
  ContactCardTitle,
  ContactCardWrapper,
  FlexContainer,
  FormButton,
  FormStack,
  FormWrapper,
  Grid,
  Separator,
  useInputStyles,
  Group,
  FormDescription,
  ContactGroup,
} from './styles';

const ContactForm = () => {
  const { t } = useTranslation();

  const { contacts } = useNavLinks();
  const {
    classes: { input, root },
  } = useInputStyles();

  const form = useForm({
    initialValues: {
      name: '',
      phone: '',
      mail: '',
      message: '',
    },
    validate: {
      name: (value) => (value.length < 2 ? 'Пожалуйста, введите имя!' : null),
      mail: (value) => (/^\S+@\S+$/.test(value) ? null : 'Пожалуйста, введите правильный формат почты!'),
      message: (value) => (value.length < 2 ? 'Пожалуйста, введите сообщение!' : null),
      phone: (value) => (value.length < 3 ? 'Пожалуйста, введите номер телефона!' : null),
    },
  });

  const { mutateAsync, isLoading, isSuccess } = useMutation({ mutationFn: MailServices.sentLetter });

  const handleSubmit = async (values) => {
    try {
      await mutateAsync(values);
      form.reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ContentWrapper $isFirst>
      <Container>
        <Grid initial="hidden" exit="exit" whileInView="enter">
          <FlexContainer>
            <Stack spacing={15}>
              <TitleStack>
                <Subtitle variants={Variants.opacity} custom={1.1}>
                  {t('contacts.form.subtitle')}
                </Subtitle>
                <Title variants={Variants.opacity} custom={1.2}>
                  {t('contacts.form.title')}
                </Title>
              </TitleStack>
              <FormDescription variants={Variants.opacity} custom={1.3}>
                {t('contacts.form.description')}
              </FormDescription>
            </Stack>
            <ContactGroup>
              {contacts &&
                contacts.slice(0, 2).map((socialLink) => (
                  <ContactCardWrapper key={socialLink.id} variants={Variants.opacity} custom={1.4}>
                    <Separator />
                    <ContactCardTitle>{socialLink.header}</ContactCardTitle>
                    <ContactCardLink href={socialLink.path}>{socialLink.title}</ContactCardLink>
                  </ContactCardWrapper>
                ))}
            </ContactGroup>
          </FlexContainer>

          {!isSuccess ? (
            <FormWrapper onSubmit={form.onSubmit(handleSubmit)}>
              <FormStack variants={Variants.opacity} custom={1.3}>
                <Group>
                  <TextInput
                    {...form.getInputProps('name')}
                    placeholder={t('contacts.form.nameInput.placeholder')}
                    classNames={{ input, root }}
                  />
                  <PhoneInput
                    country={'cy'}
                    {...form.getInputProps('phone')}
                    containerStyle={{
                      width: '45%',
                    }}
                    inputStyle={{
                      width: '100%',
                      height: '57px',
                      fontSize: 14,
                      lineHeight: 26,
                      fontWeight: 300,
                      border: 'none',
                      borderRadius: 0,
                      color: 'var(--black)',
                      borderBottom: '3px solid transparent',
                      padding: '16px 20px 10px 54px',
                      backgroundColor: 'var(--gray4)',
                    }}
                  />
                </Group>
                <TextInput
                  {...form.getInputProps('mail')}
                  placeholder={t('contacts.form.mailInput.placeholder')}
                  classNames={{ input }}
                />
                <Textarea
                  {...form.getInputProps('message')}
                  autosize
                  minRows={2}
                  placeholder={t('contacts.form.textarea.placeholder')}
                  classNames={{ input }}
                ></Textarea>
              </FormStack>
              <FormButton>
                {!isLoading ? (
                  <>
                    <span>{t('contacts.form.btnText')}</span>
                    <AiOutlineArrowRight />
                  </>
                ) : (
                  <Loader size={20} />
                )}
              </FormButton>
            </FormWrapper>
          ) : (
            <SuccessMessage>{t('contacts.form.successMessage')}</SuccessMessage>
          )}
        </Grid>
      </Container>
    </ContentWrapper>
  );
};

export default ContactForm;
