import styled from "@emotion/styled";

const TimeBlockWrapper = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  margin-right: 2px;
  margin-bottom: 14px;

  .time {
    margin-right: 3px;
    font-size: 12px;
  }

  .time-blocks {
    width: 47px;
    height: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .time-block {
    width: 7px;
    background-color: ${(props) => (props.isPossible ? "#fff" : "#C4C4C4")};
  }

  @media screen and (min-width: 1000px) {
    margin-bottom: 20px;
    margin-right: 15px;

    .time {
      font-size: 18px;
    }
    .time-blocks {
      width: 82px;
      height: 26px;
    }
    .time-block {
      width: 12px;
      height: 26px;
    }
  }
`;

const TimeBlock = ({ isPossible }) => {
  return (
    <TimeBlockWrapper isPossible={isPossible}>
      <div className="time">10</div>
      <div className="time-blocks">
        <div className="time-block"></div>
        <div className="time-block"></div>
        <div className="time-block"></div>
        <div className="time-block"></div>
        <div className="time-block"></div>
        <div className="time-block"></div>
      </div>
    </TimeBlockWrapper>
  );
};

export default TimeBlock;
