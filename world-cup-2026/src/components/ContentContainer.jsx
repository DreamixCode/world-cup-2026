import classnames from "classnames";

function ContentContainer({ children, maxWidthClassName, className, ...rest }) {
  return (
    <div
      className={classnames(
        "relative mx-auto w-full",
        maxWidthClassName,
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export default ContentContainer;
