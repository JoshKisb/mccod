import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from '@dhis2/ui';

const DateField = ({ name, label, value, onChange, ...rest }) => (
  <DatePicker
    name={name}
    label={label}
    value={value}
    onChange={onChange}
    {...rest}
  />
);

DateField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
};

export default DateField;