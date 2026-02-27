import classNames from "classnames";
import { useState } from "react";
import GoogleLoginBtn from "./GoogleLoginButton";
import { MenuNavLink } from "./MenuItem";
import { useMedia } from "../hooks";
import HamburgerMenu from "./HamburgerMenu";

function Menu() {
  const isSmall = useMedia(useMedia.MEDIUM);

  const [isListOpen, setIsListOpen] = useState(false);

  const mainMenuItems = (
    <>
      <MenuNavLink to="/" end onClick={() => !isSmall && setIsListOpen(false)}>
        Home
      </MenuNavLink>
      {/* {isSmall && <Separator className="w-4" fill="#faaf3b" />} */}
      <MenuNavLink
        to="/groups"
        onClick={() => !isSmall && setIsListOpen(false)}
      >
        Groups
      </MenuNavLink>
      {/* {isSmall && <Separator className="w-4" fill="#6a22d5" />} */}
      <MenuNavLink
        to="/matches"
        onClick={() => !isSmall && setIsListOpen(false)}
      >
        Matches
      </MenuNavLink>
      {/* {isSmall && <Separator className="w-4" fill="#f11857" />} */}
      <MenuNavLink
        to="/standings"
        onClick={() => !isSmall && setIsListOpen(false)}
      >
        Standings
      </MenuNavLink>
      {/* {isSmall && <Separator className="w-4" fill="#fc7a4c" />} */}
      <MenuNavLink to="/rules" onClick={() => !isSmall && setIsListOpen(false)}>
        Rules
      </MenuNavLink>
    </>
  );

  return (
    <nav>
      <div
        className={classNames(
          "fixed top-0 z-30 h-20 flex w-full text-dec-h3 shrink sm:justify-center lg:z-50 md:px-8 px-4 items-center text-dec-theme bg-dec-theme"
        )}
      >
        {isSmall ? (
          <ul className="uppercase grid grid-flow-col gap-4 lg:gap-8 items-center px-2 text-dec-background">
            {mainMenuItems}
          </ul>
        ) : (
          <HamburgerMenu.Toggle
            open={isListOpen}
            onClick={() => setIsListOpen((prev) => !prev)}
          />
        )}
        {isListOpen && !isSmall && (
          <nav className="absolute right-0 h-auto top-20 bg-dec-background text-dec-theme z-10 overflow-auto md:w-2/3 w-full">
            <div className="grid gap-8 border-b-2 pb-3 font-semibold p-4 text-dec-h3 uppercase tracking-widest">
              {mainMenuItems}
            </div>
          </nav>
        )}
        <div className="fixed top-4 right-4">
          <GoogleLoginBtn />
        </div>
      </div>
    </nav>
  );
}

export default Menu;
