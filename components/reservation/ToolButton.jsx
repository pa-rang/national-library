import styled from "@emotion/styled";

const ToolButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  width: 96px;
  height: 36px;

  background-color: ${(props) => (props.isSelected ? "#25C1F3" : "#fff")};
  border: ${(props) => (props.isSelected ? "none" : "1px solid #011e57")};
  border-radius: 100px;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => (props.isSelected ? "#fff" : "#011e57")};
  cursor: pointer;

  @media screen and (min-width: 1000px) {
    width: 131px;
    height: 49px;
    font-size: 21px;
  }
`;

const ToolButton = ({ text, isSelected }) => {
  return <ToolButtonWrapper isSelected={isSelected}>{text}</ToolButtonWrapper>;
};

export default ToolButton;
