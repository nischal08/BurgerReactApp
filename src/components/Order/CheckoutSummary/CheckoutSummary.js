import React from 'react';
import Burger from './../../../components/Burger/Burger';
import Button from './../../UI/Button/Button';
import classes from './CheckoutSummary.ccs';
const CheckoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well !</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked>
        CANCEL
      </Button>
      <Button btnType="Success" clicked>
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
