import ContentContainer from "./ContentContainer";

function Rules() {
  return (
    <div className="h-full bg-dec-theme p-10">
      <ContentContainer maxWidthClassName="max-w-2xl text-dec-theme bg-dec-background text-dec-h4 p-4 flex flex-col space-y-4 font-semibold">
        <p>
          In the game can participate everyone who is part of Dreamix. It
          doesn't matter if you are a football fan or not, you just have to
          predict the score of the game.
        </p>
        <p>The rules are so simple!</p>
        <p>
          You make a prediction for the score for every single match. You can
          make or change your bet until the start of the match.
        </p>
        <p>
          If you guess the exact result, you receive 3 points. If you guess only
          the sign of the result (the team that won or the draw), you receive 1
          point. You don't receive any points if nothing of the above mentioned
          happens.
        </p>
        <p>
          NB: For the elimination phase, bets are valid only for regular time of
          the match. Extra time and penalties won't be considered.
        </p>
        <p>
          At the end of the Euro 2024 Championship the one with most points wins
          :)
        </p>
      </ContentContainer>
    </div>
  );
}

export default Rules;
