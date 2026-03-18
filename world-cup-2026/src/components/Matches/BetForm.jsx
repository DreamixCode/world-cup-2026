import classNames from "classnames";
import Button from "../Button";
import { Tick } from "../icons";
import { Pencil } from "lucide-react";
import BtnLoader from "../BtnLoader";

export default function BetForm({
  layout = "desktop",
  homeRow,
  awayRow,
  homeRegister,
  awayRegister,
  bet,
  homeValue,
  awayValue,
  inactive,
  handleBet,
  handleEdit,
  isLoading,
  editMode,
  canEnterEdit,
  canSubmitEdit,
  onEdit,
  firstInputRef,
  secondInputRef,
  sanitizeScore,
  className,
  inputClassName,
  styles,
}) {
  const handleHomeChange = (e) => {
    const sanitized = sanitizeScore(e.target.value);
    e.target.value = sanitized;
    homeRegister.onChange(e);
    if (sanitized) {
      secondInputRef.current?.select();
      secondInputRef.current?.focus();
    }
  };

  const handleAwayChange = (e) => {
    const sanitized = sanitizeScore(e.target.value);
    e.target.value = sanitized;
    awayRegister.onChange(e);
    e.target.blur();
  };

  const homeInput = (
    <input
      id="home"
      type="number"
      name="home"
      className={classNames(inputClassName, styles, "bg-white text-black")}
      min={0}
      max={9}
      {...homeRegister}
      ref={(element) => {
        homeRegister.ref(element);
        firstInputRef.current = element;
      }}
      onChange={handleHomeChange}
      disabled={inactive}
    />
  );

  const awayInput = (
    <input
      id="away"
      type="number"
      name="away"
      className={classNames(inputClassName, styles, "bg-white text-black")}
      min={0}
      max={9}
      {...awayRegister}
      ref={(element) => {
        awayRegister.ref(element);
        secondInputRef.current = element;
      }}
      onChange={handleAwayChange}
      disabled={inactive}
    />
  );

  if (layout === "compact") {
    return (
      <div className="flex items-center justify-center gap-2 whitespace-nowrap">
        <Button
          type="button"
          className={classNames(
            "w-12 h-8 border-2 text-dec-primary-darkBlue rounded-sm bg-white",
            (homeValue || awayValue || inactive || editMode || isLoading) &&
              "text-dec-primary-inactive",
          )}
          onClick={handleBet}
          disabled={
            !homeValue || !awayValue || inactive || bet || editMode || isLoading
          }
        >
          {isLoading && !editMode && <BtnLoader />}
          Bet
        </Button>

        <button
          type="button"
          className={classNames(
            "w-8 h-8 flex items-center justify-center text-white bg-black rounded-sm",
            ((editMode && !canSubmitEdit) || (!editMode && !canEnterEdit)) &&
              "text-dec-primary-inactive",
          )}
          onClick={editMode ? handleEdit : onEdit}
          disabled={editMode ? !canSubmitEdit : !canEnterEdit}
        >
          {editMode ? (
            <Tick className="w-5 h-5" />
          ) : (
            <Pencil className="w-5 h-5" />
          )}
        </button>
      </div>
    );
  }

  if (layout === "rows") {
    return (
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0 flex-1">{homeRow}</div>
          {homeInput}
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0 flex-1">{awayRow}</div>
          {awayInput}
        </div>
      </div>
    );
  }

  return (
    <form
      id="bet-form"
      className="text-center flex items-center gap-2 text-dec-primary-darkBlue whitespace-nowrap"
    >
      <div className="flex items-center">
        {homeInput}
        <div className={className ?? "text-white"}>:</div>
        {awayInput}
      </div>

      <Button
        type="button"
        className={classNames(
          "lg:w-16 w-10 h-8 border-2 text-dec-primary-darkBlue rounded-sm",
          (homeValue || awayValue || inactive || editMode || isLoading) &&
            "text-dec-primary-inactive",
        )}
        onClick={handleBet}
        disabled={
          !homeValue || !awayValue || inactive || bet || editMode || isLoading
        }
      >
        {isLoading && !editMode && <BtnLoader />}
        Bet
      </Button>

      <button
        type="button"
        className={classNames(
          "w-6 h-8 text-white bg-black",
          ((editMode && !canSubmitEdit) || (!editMode && !canEnterEdit)) &&
            "text-dec-primary-inactive",
        )}
        onClick={editMode ? handleEdit : onEdit}
        disabled={editMode ? !canSubmitEdit : !canEnterEdit}
      >
        {editMode ? (
          <Tick className="w-6 h-6" />
        ) : (
          <Pencil className="w-6 h-6" />
        )}
      </button>
    </form>
  );
}
