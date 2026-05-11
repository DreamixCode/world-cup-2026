import { Link } from "react-router-dom";

export default function MatchLink({
  id,
  hostTeam,
  guestTeam,
  iconHost,
  iconGuest,
  isLink,
}) {
  return (
    <div className="min-w-md">
      {isLink ? (
        <Link to={`/matches/${id}`}>
          <div className="flex items-center gap-2">
            {iconHost}
            <span className="whitespace-nowrap">{hostTeam}</span>
            <span>-</span>
            <span>{guestTeam}</span>
            {iconGuest}
          </div>
        </Link>
      ) : (
        <div className="flex items-center gap-2">
          {iconHost}
          <span className="whitespace-nowrap">{hostTeam}</span>
          <span>-</span>
          <span>{guestTeam}</span>
          {iconGuest}
        </div>
      )}
    </div>
  );
}
