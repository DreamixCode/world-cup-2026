import classNames from "classnames";
import BtnLoader from "./BtnLoader";

const classBase = [
  "relative",
  "text-smd-base",
  "focus:outline-none focus-visible:outline-none select-none",
  "disabled:cursor-auto",
  "antialiased",
];

const styles = {
  primary:
    "text-dec-theme bg-dec-background hover:bg-dec-theme-inactive disabled:bg-dec-background",
};

export default function Button({
  color = "primary",
  loading,
  disabled,
  className,
  focusClassName = "smd-focus-visible-primary",
  children,
  as: Element = "button",
  ...props
}) {
  return (
    <Element
      className={classNames(
        classBase,
        styles[color],
        {
          "pointer-events-none overflow-hidden": loading,
        },
        className,
        focusClassName
      )}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      {loading && <BtnLoader />}
      {children}
    </Element>
  );
}
