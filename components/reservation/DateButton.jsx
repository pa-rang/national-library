import styled from "@emotion/styled";

const DateButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 33px;
  margin-bottom: 2px;
  margin-right: 19px;
  min-width: 67px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 12px;

  border: ${(props) => (props.isSelected ? "none" : "1px solid #011e57")};
  background-color: ${(props) => (props.isSelected ? "#25C1F3" : "#fff")};
  color: ${(props) => (props.isSelected ? "#fff" : "#011e57")};
  cursor: pointer;

  @media screen and (min-width: 1000px) {
    width: 133px;
    height: 57px;
    font-size: 21px;
    margin-right: 24px;
  }
`;

const DateButton = ({ isSelected }) => {
  return (
    <DateButtonWrapper isSelected={isSelected}>05-17(월)</DateButtonWrapper>
  );
};

export default DateButton;
