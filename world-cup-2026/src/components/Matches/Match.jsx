import classNames from "classnames";
import { format, isAfter, parseISO } from "date-fns";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useCreateBet, useMyBets } from "../../api";
import { useMedia } from "../../hooks";
import { getFlag } from "../../utils.jsx";
import Button from "../Button";
import BtnLoader from "../BtnLoader";
import { Pencil, Tick } from "../icons/index.jsx";
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
  const firstInputRef = useRef();
  const secondInputRef = useRef();

  const [betState, setBetState] = useState({
    matchId: id,
    home: "",
    away: "",
  });

  const [bet, setBet] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [inactive, setInactive] = useState(false);

  const today = Date.now();

  // const { myBets } = useMyBets();

  const myBets = [
    {
      matchId: 1145512,
      user: {
        id: "112529453352592387904",
        firstName: "Tania",
        lastName: "Kasabova",
        email: "tania.kasabova@dreamix.eu",
        picture:
          "https://lh3.googleusercontent.com/a/ACg8ocLm6z4WfWsxrvmyNGHFYGL-BRjOQ5gdeTytvn_jndIghJ9r21Y=s96-c",
      },
      bet: {
        home: 2,
        away: 0,
        symbol: "1",
      },
      points: null,
    },
    {
      matchId: 1189847,
      user: {
        id: "112529453352592387904",
        firstName: "Tania",
        lastName: "Kasabova",
        email: "tania.kasabova@dreamix.eu",
        picture:
          "https://lh3.googleusercontent.com/a/ACg8ocLm6z4WfWsxrvmyNGHFYGL-BRjOQ5gdeTytvn_jndIghJ9r21Y=s96-c",
      },
      bet: {
        home: 1,
        away: 2,
        symbol: "2",
      },
      points: null,
    },
  ];

  const myBet = myBets?.find((bet) => bet.matchId === id);

  useEffect(() => {
    document.querySelectorAll('input[type="number"]').forEach((input) => {
      input.oninput = () => {
        if (input.value.length > input.maxLength) {
          input.value = input.value.slice(0, input.maxLength);
          secondInputRef.current?.select();
          secondInputRef.current?.focus();
        }
        if (firstInputRef?.current?.value === input.value) {
          secondInputRef.current?.select();
          secondInputRef.current?.focus();
        }
      };
      if (secondInputRef?.current?.value === input.value) {
        setBetState((prev) => ({
          ...prev,
          home: firstInputRef.current.value,
          away: secondInputRef.current.value,
        }));
      }
    });
  }, [editMode]);

  useEffect(() => {
    if (firstInputRef?.current?.value && secondInputRef?.current?.value) {
      setBetState({
        matchId: id,
        home: firstInputRef?.current?.value,
        away: secondInputRef?.current?.value,
      });
    }
    return;
  }, [id]);

  useEffect(() => {
    if (isAfter(today, new Date(date))) {
      setInactive(true);
    }
    if (myBet && !editMode) {
      setInactive(true);
    }
    if (myBet && editMode) {
      setInactive(false);
      firstInputRef.current?.focus();
      firstInputRef.current?.select();
    }
  }, [date, today, myBet, editMode]);

  const { createBet, isLoadingCreate, error } = useCreateBet();

  useEffect(() => {
    if (error?.message) {
      setBet(false);
    }
  }, [setBet, error?.message]);

  function handleOnSubmit(e) {
    e.preventDefault();
    setBet(true);
    createBet(betState);
  }

  const onEdit = () => {
    setEditMode(true);
    firstInputRef.current?.select();
    firstInputRef.current?.focus();
  };

  function handleOnEdit(e) {
    e.preventDefault();
    setBet(true);
    createBet(betState);
    setEditMode(false);
  }

  const isSmall = useMedia(useMedia.SMALL);
  const isMedium = useMedia(useMedia.MEDIUM);
  const isLarge = useMedia(useMedia.LARGE);

  const iconHost = getFlag(hostTeam);
  const iconGuest = getFlag(guestTeam);

  const inputClassName = classNames(
    "outline-none m-0.5 p-0.5 border-solid border-2 w-7 h-7 text-center text-dec-h4",
    editMode && "ring-2 ring-dec-theme-inactive",
    inactive ? "" : "border-dec-theme"
  );

  const started = isAfter(today, new Date(date));
  const finished = longStatus === "Match Finished";

  const parsedDate = format?.(parseISO?.(date), "dd-MM-yyyy");
  const parsedTime = format?.(parseISO?.(date), "HH:mm");

  return (
    <div
      className={classNames(
        "w-full grid grid-cols-11 relative  border-b-2 font-extrabold px-2 items-center text-dec-sm sm:text-dec-base py-4",
        error?.message && "h-28",
        className ? className : "bg-dec-theme text-dec-background"
      )}
    >
      {error?.message && (
        <div className="absolute top-0 w-full pt-1 text-center items-center z-1">
          <p>Oops, something went wrong. Please, try again</p>
        </div>
      )}
      <div className="sm:col-span-7 col-span-6 md:col-span-5">
        <Link to={`/matches/${id}`}>
          <div className="flex justify-between items-center md:pr-2 lg:pr-8">
            <div className="flex sm:space-x-2 items-start sm:items-center sm:flex-row flex-col space-y-2 sm:space-y-0">
              <div className="flex space-x-2 items-center">
                {iconHost}
                <span>{hostTeam}</span>
              </div>
              {isSmall && <span>-</span>}
              <div className="flex space-x-2 items-center">
                {!isSmall && iconGuest}
                <span>{guestTeam}</span>
                {isSmall && iconGuest}
              </div>
            </div>
          </div>
        </Link>
      </div>
      {isMedium && <div className="col-span-2">{parsedDate}</div>}
      {isLarge && <div className="col-span-1">{parsedTime}</div>}
      {!finished ? (
        <div className="flex items-center">
          <form
            id="bet-form"
            className="text-center flex md:space-x-2 space-x-1 items-center text-dec-theme-darkBlue sm:items-start"
            onSubmit={handleOnSubmit}
          >
            <div className="flex sm:flex-row flex-col">
              <input
                id="home"
                type="number"
                name="home"
                value={
                  myBet && !editMode && !isLoadingCreate
                    ? myBet?.bet?.home
                    : firstInputRef?.current?.value
                }
                maxLength={1}
                className={classNames(inputClassName, styles)}
                ref={firstInputRef}
                onChange={(e) => {
                  firstInputRef.current.value = e.target.value;
                  if (firstInputRef.current.value) {
                    secondInputRef.current?.select();
                    secondInputRef.current?.focus();
                  }
                  setBetState((prev) => ({
                    ...prev,
                    home: firstInputRef.current.value,
                  }));
                }}
                onKeyDown={({ key }) => {
                  if (key === "Backspace") {
                    firstInputRef.current.value = "";
                    firstInputRef.current.focus();
                  }
                }}
                disabled={inactive}
              />
              {isSmall && (
                <div className={className ? className : "text-white"}>:</div>
              )}
              <input
                id="away"
                type="number"
                name="away"
                value={
                  myBet && !editMode && !isLoadingCreate
                    ? myBet?.bet?.away
                    : secondInputRef?.current?.value
                }
                maxLength={1}
                className={classNames(inputClassName, styles)}
                ref={secondInputRef}
                onChange={(e) => {
                  secondInputRef.current.value = e.target.value;
                  setBetState((prev) => ({
                    ...prev,
                    away: secondInputRef.current.value,
                  }));
                  e.target.blur();
                }}
                disabled={inactive}
                onKeyDown={({ key }) => {
                  if (key === "Backspace") {
                    secondInputRef.current.value = "";
                    secondInputRef.current.focus();
                  }
                }}
              />
            </div>

            <div className="flex items-center justify-center">
              <Button
                type="submit"
                className={classNames(
                  "lg:w-16 w-10 h-8 border-2 text-dec-theme-darkBlue",
                  (bet || inactive || editMode) && "text-dec-theme-inactive"
                )}
                disabled={
                  !betState?.home ||
                  !betState?.away ||
                  inactive ||
                  bet ||
                  editMode
                }
              >
                {isLoadingCreate && !editMode && <BtnLoader />}
                Bet
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="button"
                className={classNames(
                  "lg:w-16 w-10 h-8",
                  (((!bet || !betState?.home || !betState?.away || inactive) &&
                    !Boolean(myBet)) ||
                    started) &&
                    "text-dec-theme-inactive"
                )}
                onClick={editMode ? handleOnEdit : onEdit}
                disabled={
                  ((!bet || !betState?.home || !betState?.away || inactive) &&
                    !Boolean(myBet)) ||
                  started
                }
              >
                {editMode ? (
                  <Tick className="w-6 h-6" />
                ) : (
                  <Pencil className="w-6 h-6" />
                )}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="flex items-center justify-between sm:w-48 space-x-12 sm:space-x-8">
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-1 pl-3">
            <div>{myBet?.bet?.home}</div>
            <div className="hidden sm:flex">{myBet && ":"}</div>
            <div>{myBet?.bet?.away}</div>
          </div>
          <div className="sm:flex sm:flex-row flex-col space-y-2 sm:space-y-0 sm:space-x-2">
            <div>FT</div>
            <div className="w-10">
              <div>
                {hostTeamScore} : {guestTeamScore}
              </div>
            </div>
            {shortStatus === "PEN" && (
              <>
                <div>PEN</div>
                <div className="w-10">
                  {hostTeamPen} : {guestTeamPen}
                </div>
              </>
            )}
            {shortStatus === "AET" && (
              <>
                <div>ET</div>
                <div className="w-10">
                  {Number(hostTeamScore) + Number(hostTeamET)} :{" "}
                  {Number(guestTeamScore) + Number(guestTeamET)}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Match;
