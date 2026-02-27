import { NavLink } from "react-router-dom";

const menuItemStyles = "flex items-center";
const menuItemActiveStyles = "font-extrabold underline";

export function MenuNavLink({ icon: Icon, children, ...props }) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? menuItemActiveStyles : menuItemStyles
      }
      {...props}
    >
      <span className="truncate">{children}</span>
    </NavLink>
  );
}
