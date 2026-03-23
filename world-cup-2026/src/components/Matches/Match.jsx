import { lazy, Suspense, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { format, isAfter, parseISO } from "date-fns";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { useCreateBet } from "../../api";
import { getFlag } from "../../utils.jsx";
import MatchLink from "./MatchLink";
import BetForm from "./BetForm";
import ScoreDisplay from "./ScoreDisplay";

import { myBets1 } from "@/const";
import styles from "./Match.module.css";
import { useMedia } from "@/hooks";
import { Modal } from "../Modal/Modal";

const LazyMatchView = lazy(() => import("./MatchView"));

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
  isLink = true,
  disableInteraction = false,
  className,
}) {
  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);
  const [_, setBet] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [open, setOpen] = useState(false);
  const isLarge = useMedia(useMedia.LARGE);
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

  const matchDate = date ? new Date(date) : null;
  const started = matchDate ? isAfter(today, matchDate) : false;
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

  const parsedISODate = date ? parseISO(date) : null;
  const parsedDate = parsedISODate ? format(parsedISODate, "dd-MM-yyyy") : "--";
  const parsedTime = parsedISODate ? format(parsedISODate, "HH:mm") : "--:--";

  const canEnterEdit = !started && Boolean(myBet);
  const canSubmitEdit =
    Boolean(homeValue) && Boolean(awayValue) && !isLoadingCreate;
  const canOpenModal = !isLink && !disableInteraction;

  const matchLink = (
    <>
      {isLink ? (
        <MatchLink
          id={id}
          hostTeam={hostTeam}
          guestTeam={guestTeam}
          iconHost={iconHost}
          iconGuest={iconGuest}
          isLink
        />
      ) : canOpenModal ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="text-left cursor-pointer"
        >
          <MatchLink
            id={id}
            hostTeam={hostTeam}
            guestTeam={guestTeam}
            iconHost={iconHost}
            iconGuest={iconGuest}
            isLink={false}
          />
        </button>
      ) : (
        <MatchLink
          id={id}
          hostTeam={hostTeam}
          guestTeam={guestTeam}
          iconHost={iconHost}
          iconGuest={iconGuest}
          isLink={false}
        />
      )}
    </>
  );

  const dateTime = (
    <>
      <div className="whitespace-nowrap">{parsedDate}</div>
      <div className="whitespace-nowrap">{parsedTime}</div>
    </>
  );

  const defaultBetInputClassName =
    "outline-none m-0.5 p-0.5 border-solid rounded-sm border-2 w-7 h-7 text-center text-dec-h4";

  const BetFormView = (props) => (
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
      styles={styles}
      inputClassName={props?.inputClassName ?? defaultBetInputClassName}
      {...props}
    />
  );

  const ScoreDisplayView = (props) => (
    <ScoreDisplay
      myBet={myBet}
      hostTeamScore={hostTeamScore}
      guestTeamScore={guestTeamScore}
      shortStatus={shortStatus}
      hostTeamPen={hostTeamPen}
      guestTeamPen={guestTeamPen}
      hostTeamET={hostTeamET}
      guestTeamET={guestTeamET}
      {...props}
    />
  );

  return (
    <div
      className={classNames(
        "w-full relative border-b-2 font-extrabold px-2 items-center text-dec-sm sm:text-dec-base py-4 flex justify-center",
        error?.message && "h-28",
        className ?? "bg-dec-primary text-dec-background",
      )}
    >
      {canOpenModal && (
        <Modal
          title="Match details"
          trigger={null}
          open={open}
          onOpenChange={setOpen}
          contentClassName="bg-dec-primary border-0 w-screen sm:max-w-5xl lg:max-w-6xl xl:max-w-7xl"
          closeButtonClassName="text-white sm:text-white "
          overlayClassName="bg-white/30 supports-backdrop-filter:backdrop-blur-md"
        >
          <Suspense fallback={<div className="p-4 text-white">Loading…</div>}>
            <LazyMatchView matchId={id} embedded />
          </Suspense>
        </Modal>
      )}
      {error?.message && (
        <div className="absolute top-0 w-full pt-1 text-center items-center z-1">
          <p>Oops, something went wrong. Please, try again</p>
        </div>
      )}

      {isLarge ? (
        <div className="flex items-center gap-3 flex-nowrap overflow-x-auto no-scrollbar">
          {matchLink}
          {dateTime}
          {!finished ? <BetFormView /> : <ScoreDisplayView />}
        </div>
      ) : (
        <div className="w-full flex items-center justify-between gap-3">
          <div className="min-w-0 flex-1">
            {!finished ? (
              <BetFormView
                layout="rows"
                inputClassName="outline-none border-solid rounded-sm border-2 w-8 h-8 text-center bg-white text-black"
                homeRow={
                  isLink ? (
                    <Link to={`/matches/${id}`} className="block min-w-0">
                      <div className="min-w-0 flex items-center gap-2">
                        {iconHost}
                        <span className="truncate">{hostTeam}</span>
                      </div>
                    </Link>
                  ) : canOpenModal ? (
                    <button
                      type="button"
                      onClick={() => setOpen(true)}
                      className="min-w-0 flex items-center gap-2 text-left cursor-pointer"
                    >
                      {iconHost}
                      <span className="truncate">{hostTeam}</span>
                    </button>
                  ) : (
                    <div className="min-w-0 flex items-center gap-2">
                      {iconHost}
                      <span className="truncate">{hostTeam}</span>
                    </div>
                  )
                }
                awayRow={
                  isLink ? (
                    <Link to={`/matches/${id}`} className="block min-w-0">
                      <div className="min-w-0 flex items-center gap-2">
                        {iconGuest}
                        <span className="truncate">{guestTeam}</span>
                      </div>
                    </Link>
                  ) : canOpenModal ? (
                    <button
                      type="button"
                      onClick={() => setOpen(true)}
                      className="min-w-0 flex items-center gap-2 text-left cursor-pointer"
                    >
                      {iconGuest}
                      <span className="truncate">{guestTeam}</span>
                    </button>
                  ) : (
                    <div className="min-w-0 flex items-center gap-2">
                      {iconGuest}
                      <span className="truncate">{guestTeam}</span>
                    </div>
                  )
                }
              />
            ) : (
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-3">
                  {isLink ? (
                    <Link
                      to={`/matches/${id}`}
                      className="block min-w-0 flex-1"
                    >
                      <div className="min-w-0 flex items-center gap-2">
                        {iconHost}
                        <span className="truncate">{hostTeam}</span>
                      </div>
                    </Link>
                  ) : canOpenModal ? (
                    <button
                      type="button"
                      onClick={() => setOpen(true)}
                      className="block min-w-0 flex-1 text-left cursor-pointer"
                    >
                      <div className="min-w-0 flex items-center gap-2">
                        {iconHost}
                        <span className="truncate">{hostTeam}</span>
                      </div>
                    </button>
                  ) : (
                    <div className="block min-w-0 flex-1 text-left">
                      <div className="min-w-0 flex items-center gap-2">
                        {iconHost}
                        <span className="truncate">{hostTeam}</span>
                      </div>
                    </div>
                  )}
                  <div className="tabular-nums w-8 text-right">
                    {hostTeamScore ?? "-"}
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  {isLink ? (
                    <Link
                      to={`/matches/${id}`}
                      className="block min-w-0 flex-1"
                    >
                      <div className="min-w-0 flex items-center gap-2">
                        {iconGuest}
                        <span className="truncate">{guestTeam}</span>
                      </div>
                    </Link>
                  ) : canOpenModal ? (
                    <button
                      type="button"
                      onClick={() => setOpen(true)}
                      className="block min-w-0 flex-1 text-left cursor-pointer"
                    >
                      <div className="min-w-0 flex items-center gap-2">
                        {iconGuest}
                        <span className="truncate">{guestTeam}</span>
                      </div>
                    </button>
                  ) : (
                    <div className="block min-w-0 flex-1 text-left">
                      <div className="min-w-0 flex items-center gap-2">
                        {iconGuest}
                        <span className="truncate">{guestTeam}</span>
                      </div>
                    </div>
                  )}
                  <div className="tabular-nums w-8 text-right">
                    {guestTeamScore ?? "-"}
                  </div>
                </div>
              </div>
            )}
          </div>

          {!finished ? (
            <div className="flex flex-col justify-center items-center gap-2">
              <BetFormView
                layout="compact"
                handleBet={() =>
                  handleBetSubmit({ home: homeValue, away: awayValue })
                }
                handleEdit={() =>
                  handleEditSubmit({ home: homeValue, away: awayValue })
                }
              />
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <ScoreDisplayView layout="compact" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Match;
