import { useLocation, useNavigate } from "react-router-dom";
import Card from "./card";
import { menus } from "@/assets/menus";

export default function HeadNav() {
  const path = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <Card>
        {menus.map((menu) => (
          <button
            key={menu.title}
            className={
              path.pathname === menu.route ||
              path.pathname.startsWith(`${menu.route}/`)
                ? "active"
                : ""
            }
            onClick={() => {
              navigate(menu.route);
            }}
          >
            {menu.icon}
          </button>
        ))}
        <button> try it kkkk</button>
      </Card>
    </>
  );
}
