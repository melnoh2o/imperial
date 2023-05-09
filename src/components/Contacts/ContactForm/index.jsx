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
                  КОНТАКТ
                </Subtitle>
                <Title variants={Variants.opacity} custom={1.2}>
                  Связь с нами:
                </Title>
              </TitleStack>
              <FormDescription variants={Variants.opacity} custom={1.3}>
                Если у вас есть вопросы, пожалуйста, заполните форму ниже. Мы свяжемся с вами в ближайшее
                время.
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
                  <TextInput {...form.getInputProps('name')} placeholder="Имя" classNames={{ input, root }} />
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
                <TextInput {...form.getInputProps('mail')} placeholder="Почта" classNames={{ input }} />
                <Textarea
                  {...form.getInputProps('message')}
                  autosize
                  minRows={2}
                  placeholder="Сообщение"
                  classNames={{ input }}
                ></Textarea>
              </FormStack>
              <FormButton>
                {!isLoading ? (
                  <>
                    <span>Отправить</span>
                    <AiOutlineArrowRight />
                  </>
                ) : (
                  <Loader size={20} />
                )}
              </FormButton>
            </FormWrapper>
          ) : (
            <SuccessMessage> Спасибо, наш эксперт предоставит информацию в ближайшее время</SuccessMessage>
          )}
        </Grid>
      </Container>
    </ContentWrapper>
  );
};

export default ContactForm;
