import React from 'react';
import { InputField } from "@dhis2/ui";

interface TextFieldProps {
  name: string;
  value?: string;
  label?: string;
  onChange?: (value: string) => void;
}

const TextField: React.FC<TextFieldProps> = ({ value, onChange, label, name }) => {
  const handleChange = (v) => {
    console.log("val", v)
  }
  return <InputField label={label} name={name} onChange={handleChange} />
};

export default TextField;