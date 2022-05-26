import React, {useState, forwardRef} from 'react';

const formatPhoneNumber = (value:string) => {
  if(!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, '');
  const phoneNumberLength = phoneNumber.length;
  if(phoneNumberLength < 4) return phoneNumber;
  if(phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3,6)}-${phoneNumber.slice(6,10)}`;
}

const PhoneNumberInput = forwardRef((props, ref:React.LegacyRef<HTMLInputElement>) => {
  const [inputValue, setInputValue] = useState('');
 
  const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setInputValue(formattedPhoneNumber)
  }
  
  return (
    <input
      {...props}
      onChange={e => handleInput(e)}
      value={inputValue}
      placeholder='Телефон в формате (999) 999-9999'
      required
      type="tel"
      ref={ref}
    />
  )
})

export default PhoneNumberInput;
