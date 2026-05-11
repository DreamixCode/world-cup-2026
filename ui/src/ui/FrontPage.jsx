import React from "react";
import CountdownTimer from "./CountDownTimer";
import { ContentContainer } from "../components";
import LeaderBoardView from "../components/Leaderboard/LeaderBoardView";
import { MatchesView } from "../components/Matches";

function FrontPage() {
  return (
    <section className="grow">
      <ContentContainer
        className="bg-dec-primary max-w-full select-none h-full"
        style={{
          backgroundImage: "url(/colors-top.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <div className="flex flex-col xl:justify-between items-center sm:pt-24 pt-14 2xl:pt-28">
          <CountdownTimer targetDate={new Date("2026-06-11T22:00:00")} />
          <div className="max-w-full w-full">
            <MatchesView frontPage />
            <LeaderBoardView frontPage />
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}

export default FrontPage;
