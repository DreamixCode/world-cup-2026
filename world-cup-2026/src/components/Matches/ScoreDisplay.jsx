export default function ScoreDisplay({
  myBet,
  hostTeamScore,
  guestTeamScore,
  shortStatus,
  hostTeamPen,
  guestTeamPen,
  hostTeamET,
  guestTeamET,
  layout = "desktop",
}) {
  if (layout === "compact") {
    const betHome = myBet?.bet?.home ?? "-";
    const betAway = myBet?.bet?.away ?? "-";
    const statusLabel = shortStatus || "FT";

    return (
      <div className="flex flex-col items-end justify-center gap-1 whitespace-nowrap">
        <div className="opacity-80 text-xs">{statusLabel}</div>
        <div className="tabular-nums">
          {betHome} : {betAway}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between sm:w-48 space-x-12 sm:space-x-8">
      {/* Bet info */}
      <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-1 pl-3">
        <div>{myBet?.bet?.home}</div>
        <div className="hidden sm:flex">{myBet && ":"}</div>
        <div>{myBet?.bet?.away}</div>
      </div>
      {/* Score info */}
      <div className="sm:flex sm:flex-row flex-col space-y-2 sm:space-y-0 sm:space-x-2">
        <div>FT</div>
        <div className="w-10 flex justify-center">
          {hostTeamScore} : {guestTeamScore}
        </div>
        {shortStatus === "PEN" && (
          <>
            <div>PEN</div>
            <div className="w-10 flex justify-center">
              {hostTeamPen} : {guestTeamPen}
            </div>
          </>
        )}
        {shortStatus === "AET" && (
          <>
            <div>ET</div>
            <div className="w-10 flex justify-center">
              {Number(hostTeamScore) + Number(hostTeamET)} :{" "}
              {Number(guestTeamScore) + Number(guestTeamET)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
