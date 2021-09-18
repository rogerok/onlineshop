import React from "react";

import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "./../../redux/cart/cart.action";
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  RemoveButton,
  Arrow,
  ValueOfQuantity,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <TextContainer quantity>
        <Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
        <ValueOfQuantity>{quantity}</ValueOfQuantity>
        <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
      </TextContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
