import React from 'react';
import PropTypes from 'prop-types';
import { InputField } from '@dhis2/ui';

const TextField = ({ name, label, value, onChange, ...rest }) => (
  <InputField
    name={name}
    label={label}
    value={value}
    onChange={onChange}
    {...rest}
  />
);

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextField;