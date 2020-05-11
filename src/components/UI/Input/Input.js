import React from 'react';
import classes from './Input.css';
const input = (props) => {
  let inputElement = null;

  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          onChange={props.changed}
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          onChange={props.changed}
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select
          onChange={props.changed}
          className={classes.InputElement}
          value={props.value}
        >
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;

    case 'radio':
      inputElement = props.elementConfig.options.map((option) => (
        <div className={classes.RadioElement}>
          <label>{option.displayValue}</label>
          <input
            onChange={props.changed}
            type={option.type}
            value={option.value}
            name={option.commonName}
          />
        </div>
      ));
      break;

    default:
      inputElement = (
        <input
          onChange={props.changed}
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
  }
  return (
    <div>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
