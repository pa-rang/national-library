import styled from "@emotion/styled";
import { Button } from 'antd';

const appearanceSet = {
  navy: `
    background-color: #011E57 !important;
    color: white !important;
  `,
  white: `
    background-color: white !important;
    color: #011E57 !important;
    border: 1px solid #011E57 ;
  `,
  gray:`
    background-color: #434343 !important;
    color: #979797 !important;
  `,
};
const sizeSet = {
  SMALL: `
  width: 210px !important;
  height: 48px !important;
  `,
  LARGE: `
  width: 250px !important;
  height: 40px !important;
  `,
};

const StyledButton = styled(Button)`
  width: 210px !important;
  margin: 5px auto !important;
  border-radius: 50px !important;
  text-align: center !important;
  font-weight: bold !important;
  font-size: 16px !important;
  ${({ appearance = 'black' }) => appearanceSet[appearance]};
  ${({ size = 'LARGE' }) => sizeSet[size]}
`;

export default StyledButton;