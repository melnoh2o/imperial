import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const CustomPhoneInput = ({ isHigh, ...props }) => {
  const isHigherThan200 = isHigh ? '82px' : '200px';

  return (
    <PhoneInput
      {...props}
      country={'cy'}
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
        transition: 'all 0.3s ease-in',

        '.form-control:focus,.form-control:hover, .form-control:active': {
          backgroundColor: 'var(--gray4)',
          borderBottomColor: 'var(--black)',
          color: 'var(--black)',
        },
      }}
      containerStyle={{
        '&.flag-dropdown': {
          backgroundColor: 'var(--gray4)',
        },
      }}
      flagStyle={{
        '&.flag-dropdown': {
          backgroundColor: 'var(--gray4)',
        },
        '&img': {
          width: 30,
          height: 15,
        },
      }}
      dropdownStyle={{
        maxHeight: isHigherThan200,
      }}
    />
  );
};

export default CustomPhoneInput;
