import React from 'react';
import PropTypes from 'prop-types';

const CheckboxOrRadioGroup = (props) => (  
  <div>
    <label className="form-label">{props.title}</label>
    <div className="checkbox-group">
      {props.options.map((opt,i) => {
        return (
          <div className="form-check" key={i}>
            <label key={opt} className="form-check-label capitalize">
          <input
              className = "form-check-input"
              name={props.setName}
              onChange={props.controlFunc}
              value={opt}
              checked={ props.selectedOptions.indexOf(opt) > -1 }
              type={props.type} /> 
               {opt}
          </label>
              </div>
        );
      })}
    </div>
  </div>
);

CheckboxOrRadioGroup.propTypes = {  
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
  setName: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  selectedOptions: PropTypes.array,
  controlFunc: PropTypes.func.isRequired
};

export default CheckboxOrRadioGroup;