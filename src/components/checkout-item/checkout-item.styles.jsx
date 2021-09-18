import styled, { css } from "styled-components";

const quantityContainerStyles = css`
  padding-left: 20px;
  display: flex;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextContainer = styled.p`
  width: 23%;
  ${(props) => (props.quantity ? quantityContainerStyles : "")}
`;

export const Arrow = styled.span`
  cursor: pointer;
`;

export const ValueOfQuantity = styled.span`
  display: block;
  margin: 0 10px;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
