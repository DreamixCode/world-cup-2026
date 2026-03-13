import classNames from "classnames";
import { format, isAfter, parseISO } from "date-fns";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useCreateBet } from "../../api";
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
  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);

  const [bet, setBet] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const today = new Date();

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

  const { register, handleSubmit, watch, reset } = useForm({
    mode: "onChange",
    defaultValues: {
      home: "",
      away: "",
    },
  });

  const homeRegister = register("home", { required: true });
  const awayRegister = register("away", { required: true });

  const homeValue = watch("home");
  const awayValue = watch("away");

  useEffect(() => {
    if (myBet && !editMode) {
      reset({
        home: String(myBet?.bet?.home ?? ""),
        away: String(myBet?.bet?.away ?? ""),
      });
      return;
    }
    if (!myBet) {
      reset({ home: "", away: "" });
    }
  }, [myBet, editMode, id, reset]);

  useEffect(() => {
    if (myBet && editMode) {
      firstInputRef.current?.focus();
      firstInputRef.current?.select();
    }
  }, [myBet, editMode]);

  const { createBet, isLoadingCreate, error } = useCreateBet();

  useEffect(() => {
    if (error?.message) {
      setBet(false);
    }
  }, [setBet, error?.message]);

  const started = isAfter(today, new Date(date));
  const finished = longStatus === "Match Finished";
  const inactive = started || (Boolean(myBet) && !editMode);

  const sanitizeScore = (value) => value.replace(/\D/g, "").slice(0, 1);

  const submitBet = handleSubmit(({ home, away }) => {
    setBet(true);
    createBet({
      matchId: id,
      home,
      away,
    });
  });

  const onEdit = () => {
    setEditMode(true);
  };

  const submitEdit = handleSubmit(({ home, away }) => {
    setBet(true);
    createBet({
      matchId: id,
      home,
      away,
    });
    setEditMode(false);
  });

  const iconHost = getFlag(hostTeam);
  const iconGuest = getFlag(guestTeam);

  const inputClassName = classNames(
    "outline-none m-0.5 p-0.5 border-solid border-2 w-7 h-7 text-center text-dec-h4",
    editMode && "ring-2 ring-dec-primary-inactive",
    inactive ? "" : "border-dec-primary",
  );

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
        className ? className : "bg-dec-primary text-dec-background",
      )}
    >
      {error?.message && (
        <div className="absolute top-0 w-full pt-1 text-center items-center z-1">
          <p>Oops, something went wrong. Please, try again</p>
        </div>
      )}

      <div className="flex items-center gap-3 flex-nowrap overflow-x-auto no-scrollbar">
        <div className="min-w-[18rem]">
          <Link to={`/matches/${id}`}>
            <div className="flex items-center gap-2">
              {iconHost}
              <span className="whitespace-nowrap">{hostTeam}</span>
              <span>-</span>
              <span>{guestTeam}</span>
              {iconGuest}
            </div>
          </Link>
        </div>
        <div className="whitespace-nowrap">{parsedDate}</div>
        <div className="whitespace-nowrap">{parsedTime}</div>

        {!finished ? (
          <form
            id="bet-form"
            className="text-center flex items-center gap-2 text-dec-primary-darkBlue whitespace-nowrap"
          >
            <div className="flex items-center">
              <input
                id="home"
                type="number"
                name="home"
                className={classNames(
                  inputClassName,
                  styles,
                  "bg-white text-black",
                )}
                min={0}
                max={9}
                {...homeRegister}
                ref={(element) => {
                  homeRegister.ref(element);
                  firstInputRef.current = element;
                }}
                onChange={(e) => {
                  const sanitized = sanitizeScore(e.target.value);
                  e.target.value = sanitized;
                  homeRegister.onChange(e);

                  if (sanitized) {
                    secondInputRef.current?.select();
                    secondInputRef.current?.focus();
                  }
                }}
                disabled={inactive}
              />
              <div className={className ? className : "text-white"}>:</div>
              <input
                id="away"
                type="number"
                name="away"
                className={classNames(
                  inputClassName,
                  styles,
                  "bg-white text-black",
                )}
                min={0}
                max={9}
                {...awayRegister}
                ref={(element) => {
                  awayRegister.ref(element);
                  secondInputRef.current = element;
                }}
                onChange={(e) => {
                  const sanitized = sanitizeScore(e.target.value);
                  e.target.value = sanitized;
                  awayRegister.onChange(e);
                  e.target.blur();
                }}
                disabled={inactive}
              />
            </div>

            <div className="flex items-center justify-center">
              <Button
                type="button"
                className={classNames(
                  "lg:w-16 w-10 h-8 border-2 text-dec-primary-darkBlue",
                  (bet || inactive || editMode) && "text-dec-primary-inactive",
                )}
                onClick={submitBet}
                disabled={
                  !homeValue ||
                  !awayValue ||
                  inactive ||
                  bet ||
                  editMode ||
                  isLoadingCreate
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
                  "w-6 h-8",
                  ((editMode && !canSubmitEdit) ||
                    (!editMode && !canEnterEdit)) &&
                    "text-dec-primary-inactive",
                )}
                onClick={editMode ? submitEdit : onEdit}
                disabled={editMode ? !canSubmitEdit : !canEnterEdit}
              >
                {editMode ? (
                  <Tick className="w-6 h-6" />
                ) : (
                  <Pencil className="w-6 h-6" />
                )}
              </button>
            </div>
          </form>
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
    </div>
  );
}

export default Match;
