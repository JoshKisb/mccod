import React from 'react';
import PropTypes from 'prop-types';
import { SingleSelectField } from '@dhis2/ui';

const SelectField = ({ name, label, value, onChange, options, ...rest }) => (
  <SingleSelectField 
    name={name}
    label={label}
    selected={value}
    onChange={onChange}
    options={options}
    {...rest}
  />
);

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SelectField;