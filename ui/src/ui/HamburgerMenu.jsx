import { Close, Menu, NewBadge } from "../components/icons/index.jsx";
import { MenuNavLink } from "./MenuItem";

// TODO: set to true when topscorer and champion backend endpoints are ready
const SHOW_TOP_SCORER_AND_CHAMPION_MENU = false;
const SHOW_TEAMS_MENU = false;

function HamburgerMenu({ children }) {
  return <div className="grid items-start gap-2">{children}</div>;
}

function HamburgerMenuItems({ onItemClick }) {
  const handleClick = () => {
    onItemClick?.();
  };

  return (
    <>
      <MenuNavLink to="/" end onClick={handleClick}>
        Home
      </MenuNavLink>
      <MenuNavLink to="/groups" onClick={handleClick}>
        Groups
      </MenuNavLink>
      <MenuNavLink to="/matches" onClick={handleClick}>
        Matches
      </MenuNavLink>
      <MenuNavLink to="/standings" onClick={handleClick}>
        Standings
      </MenuNavLink>
      {SHOW_TEAMS_MENU && (
        <MenuNavLink to="/teams" onClick={handleClick}>
          <span className="inline-flex items-center gap-1.5">
            Teams
            <NewBadge
              className="h-6 w-6 shrink-0 rotate-35 text-red-600"
              aria-hidden
            />
          </span>
        </MenuNavLink>
      )}
      {SHOW_TOP_SCORER_AND_CHAMPION_MENU && (
        <MenuNavLink to="/topscorer" onClick={handleClick}>
          Top-scorer
        </MenuNavLink>
      )}
      {SHOW_TOP_SCORER_AND_CHAMPION_MENU && (
        <MenuNavLink to="/champion" onClick={handleClick}>
          Champion
        </MenuNavLink>
      )}
      <MenuNavLink to="/rules" onClick={handleClick}>
        Rules
      </MenuNavLink>
    </>
  );
}

function HamburgerMenuToggle({ open, ...props }) {
  return (
    <div className="bg-white text-black w-12 h-12 relative">
      <button
        className="absolute right-3 text-black top-3 smd-focus-visible-primary rounded outline-none items-center"
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
HamburgerMenu.Items = HamburgerMenuItems;

export default HamburgerMenu;
