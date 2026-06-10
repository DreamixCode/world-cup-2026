import classNames from "classnames";
import { Tick } from "../icons";
import { Pencil } from "lucide-react";
import BtnLoader from "../BtnLoader";

export default function BetForm({
  layout = "desktop",
  homeRow,
  awayRow,
  homeRegister,
  awayRegister,
  inactive,
  handleBet,
  handleEdit,
  isLoading,
  editMode,
  canEnterEdit,
  canSubmitEdit,
  canSubmitBet,
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
    if (sanitized && secondInputRef?.current) {
      const scrollY = window.scrollY;
      requestAnimationFrame(() => {
        secondInputRef.current?.select();
        secondInputRef.current?.focus({ preventScroll: true });
        window.scrollTo(0, scrollY);
      });
    }
  };

  const handleAwayChange = (e) => {
    const sanitized = sanitizeScore(e.target.value);
    e.target.value = sanitized;
    awayRegister.onChange(e);
    e.target.blur();

    if (secondInputRef?.current) {
      const scrollY = window.scrollY;
      requestAnimationFrame(() => {
        secondInputRef.current?.select();
        secondInputRef.current?.focus({ preventScroll: true });
        window.scrollTo(0, scrollY);
      });
    }
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

  const buttonBaseClassName =
    "relative flex items-center justify-center text-white bg-black rounded-sm cursor-pointer disabled:cursor-not-allowed disabled:text-gray-400";

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
        <button
          type="button"
          className={classNames(buttonBaseClassName, "w-12 h-8")}
          onClick={handleBet}
          disabled={!canSubmitBet}
        >
          {isLoading && !editMode ? <BtnLoader /> : "Bet"}
        </button>

        <button
          type="button"
          className={classNames(buttonBaseClassName, "w-8 h-8")}
          onClick={editMode ? handleEdit : onEdit}
          disabled={editMode ? !canSubmitEdit : !canEnterEdit}
        >
          {isLoading && editMode ? (
            <BtnLoader />
          ) : editMode ? (
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

      <button
        type="button"
        className={classNames(buttonBaseClassName, "lg:w-16 w-10 h-8")}
        onClick={handleBet}
        disabled={!canSubmitBet}
      >
        {isLoading && !editMode ? <BtnLoader /> : "Bet"}
      </button>

      <button
        type="button"
        className={classNames(buttonBaseClassName, "w-6 h-8")}
        onClick={editMode ? handleEdit : onEdit}
        disabled={editMode ? !canSubmitEdit : !canEnterEdit}
      >
        {isLoading && editMode ? (
          <BtnLoader />
        ) : editMode ? (
          <Tick className="w-6 h-6" />
        ) : (
          <Pencil className="w-6 h-6" />
        )}
      </button>
    </form>
  );
}
