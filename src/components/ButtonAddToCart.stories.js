import React from 'react';

import ButtonAddToCart from './ButtonAddToCart'

export default {
  title: 'Example/ButtonAddToCart',
  component: ButtonAddToCart,
};

const Template = (args) => <ButtonAddToCart {...args} />;
export const DefaultButtonAddToCart = Template.bind({});
DefaultButtonAddToCart.args = {
    label : "Add to cart",
};
