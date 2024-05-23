import React from 'react';

interface TextFieldProps {
  value: string;
  onChange: (value: string) => void;
}

const TextField: React.FC<TextFieldProps> = ({ value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
};

export default TextField;