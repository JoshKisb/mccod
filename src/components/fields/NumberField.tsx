import React from 'react';

interface NumberFieldProps {
  value: number;
  onChange: (value: number) => void;
}

const NumberField: React.FC<NumberFieldProps> = ({ value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    onChange(newValue);
  };

  return <input type="number" value={value} onChange={handleChange} />;
};

export default NumberField;