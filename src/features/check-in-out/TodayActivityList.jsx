import styled from "styled-components";

import TodayItem from "./TodayItem";

const TodayList = styled.ul`
  overflow: scroll;
  overflow-x: hidden;

  /* Removing scrollbars for webkit, firefox, and ms, respectively */
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const NoActivity = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
`;

function TodayActivityList({ activities }) {
  if (!activities?.length) return <NoActivity>No activity today...</NoActivity>;

  return (
    <TodayList>
      {activities.map((activity) => (
        <TodayItem activity={activity} key={activity.id} />
      ))}
    </TodayList>
  );
}

export default TodayActivityList;
