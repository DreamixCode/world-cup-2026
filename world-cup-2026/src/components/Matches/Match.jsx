import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { format, isAfter, parseISO } from "date-fns";
import { useForm } from "react-hook-form";

import { useCreateBet } from "../../api";
import { getFlag } from "../../utils.jsx";
import MatchLink from "./MatchLink";
import BetForm from "./BetForm";
import ScoreDisplay from "./ScoreDisplay";

import { myBets1 } from "@/const";
import styles from "./Match.module.css";

function Match({
  hostTeam,
  guestTeam,
  date,
  id,
  hostTeamScore,
  guestTeamScore,
  hostTeamPen,
  guestTeamPen,
  hostTeamET,
  guestTeamET,
  longStatus,
  shortStatus,
  className,
}) {
  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);
  const [_, setBet] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const today = new Date();

  const myBets = myBets1;
  const myBet = myBets?.find((bet) => bet.matchId === id);

  const { register, watch, reset } = useForm({
    mode: "onChange",
    defaultValues: { home: "", away: "" },
  });

  useEffect(() => {
    if (myBet && !editMode) {
      reset({
        home: String(myBet?.bet?.home ?? ""),
        away: String(myBet?.bet?.away ?? ""),
      });
    } else if (!myBet && !editMode) {
      reset({ home: "", away: "" });
    }
  }, [myBet, editMode, reset]);

  useEffect(() => {
    if (myBet && editMode) {
      firstInputRef.current?.focus();
      firstInputRef.current?.select();
    }
  }, [myBet, editMode]);

  const homeRegister = register("home", { required: true });
  const awayRegister = register("away", { required: true });
  const homeValue = watch("home");
  const awayValue = watch("away");

  const { createBet, isLoadingCreate, error } = useCreateBet();

  const started = isAfter(today, new Date(date));
  const finished = longStatus === "Match Finished";
  const inactive = started || (Boolean(myBet) && !editMode);

  const sanitizeScore = (value) => value.replace(/\D/g, "").slice(0, 1);
  const handleBetSubmit = (data) => {
    setBet(true);
    createBet({ matchId: id, home: data.home, away: data.away });
  };
  const handleEditSubmit = (data) => {
    setBet(true);
    createBet({ matchId: id, home: data.home, away: data.away });
    setEditMode(false);
  };

  const onEdit = () => setEditMode(true);

  const iconHost = getFlag(hostTeam);
  const iconGuest = getFlag(guestTeam);

  const parsedDate = format?.(parseISO?.(date), "dd-MM-yyyy");
  const parsedTime = format?.(parseISO?.(date), "HH:mm");

  const canEnterEdit = !started && Boolean(myBet);
  const canSubmitEdit =
    Boolean(homeValue) && Boolean(awayValue) && !isLoadingCreate;

  return (
    <div
      className={classNames(
        "w-full relative border-b-2 font-extrabold px-2 items-center text-dec-sm sm:text-dec-base py-4 flex justify-center",
        error?.message && "h-28",
        className ?? "bg-dec-primary text-dec-background",
      )}
    >
      {error?.message && (
        <div className="absolute top-0 w-full pt-1 text-center items-center z-1">
          <p>Oops, something went wrong. Please, try again</p>
        </div>
      )}

      <div className="flex items-center gap-3 flex-nowrap overflow-x-auto no-scrollbar">
        <MatchLink
          id={id}
          hostTeam={hostTeam}
          guestTeam={guestTeam}
          iconHost={iconHost}
          iconGuest={iconGuest}
        />

        <div className="whitespace-nowrap">{parsedDate}</div>
        <div className="whitespace-nowrap">{parsedTime}</div>

        {!finished ? (
          <BetForm
            homeRegister={homeRegister}
            awayRegister={awayRegister}
            homeValue={homeValue}
            awayValue={awayValue}
            inactive={inactive}
            handleBet={handleBetSubmit}
            handleEdit={handleEditSubmit}
            isLoading={isLoadingCreate}
            editMode={editMode}
            canEnterEdit={canEnterEdit}
            canSubmitEdit={canSubmitEdit}
            onEdit={onEdit}
            firstInputRef={firstInputRef}
            secondInputRef={secondInputRef}
            sanitizeScore={sanitizeScore}
            className={styles}
            inputClassName="outline-none m-0.5 p-0.5 border-solid rounded-sm border-2 w-7 h-7 text-center text-dec-h4"
          />
        ) : (
          <ScoreDisplay
            myBet={myBet}
            hostTeamScore={hostTeamScore}
            guestTeamScore={guestTeamScore}
            shortStatus={shortStatus}
            hostTeamPen={hostTeamPen}
            guestTeamPen={guestTeamPen}
            hostTeamET={hostTeamET}
            guestTeamET={guestTeamET}
          />
        )}
      </div>
    </div>
  );
}

export default Match;
