import styled from "@emotion/styled";
import TimeBlock from "./TimeBlock";

const SpaceCardWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 128px;
  margin-bottom: 24px;
  border-radius: 16px;
  box-shadow: 0px 0px 10px 5px rgba(97, 97, 97, 0.25);
  background-color: ${(props) => (props.isPossible ? "#25c1f3" : "#D7D8D9")};
  color: #fff;

  .card__number {
    font-weight: bold;
    font-size: 56px;
    margin-left: 18px;
  }

  .card__info {
    margin-left: 8px;

    &__status {
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 2px;
    }

    &__people {
      font-size: 12px;
    }

    &__time-blocks {
      display: flex;
      flex-wrap: wrap;
      margin-top: 6px;
    }
  }

  @media screen and (min-width: 1000px) {
    width: 585px;
    height: 226px;
    border-radius: 30px;
    margin-bottom: 32px;

    .card__number {
      font-size: 100px;
    }

    .card__info {
      margin-left: 13px;

      &__status {
        font-size: 24px;
      }

      &__people {
        font-size: 18px;
        margin-bottom: 30px;
      }
    }
  }
`;

const timeList = [10, 11, 12, 13, 14, 15, 16];

const SpaceCard = ({ isPossible, cardNum }) => {
  return (
    <SpaceCardWrapper isPossible={isPossible}>
      <div className="card__number">{cardNum}</div>
      <div className="card__info">
        <div className="card__info__status">
          {isPossible ? "이용가능" : "이용 불가"}
        </div>
        <div className="card__info__people">수용인원: 1명</div>
        <div className="card__info__time-blocks">
          {timeList.map((time, idx) => (
            <TimeBlock key={idx} isPossible={isPossible} time={time} />
          ))}
        </div>
      </div>
    </SpaceCardWrapper>
  );
};

export default SpaceCard;
