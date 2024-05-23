import React from 'react';
import PropTypes from 'prop-types';
import { InputField } from '@dhis2/ui';

const NumberField = ({ name, label, value, onChange, ...rest }) => (
  <InputField
    type="number"
    name={name}
    label={label}
    value={value}
    onChange={onChange}
    {...rest}
  />
);

NumberField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NumberField;