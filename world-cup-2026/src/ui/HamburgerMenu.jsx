import { Close, Menu } from "../components/icons/index.jsx";

function HamburgerMenu({ children }) {
  return <div className="grid items-start gap-2">{children}</div>;
}

function HamburgerMenuToggle({ open, ...props }) {
  return (
    <div className="bg-dec-primary text-black w-12 h-12 relative">
      <button
        className="absolute right-3 text-dec-background top-3 smd-focus-visible-primary rounded outline-none items-center"
        {...props}
      >
        {open ? (
          <Close className="h-8 w-8 stroke-2" />
        ) : (
          <Menu className="h-8 w-8" />
        )}
      </button>
    </div>
  );
}

HamburgerMenu.Toggle = HamburgerMenuToggle;

export default HamburgerMenu;
