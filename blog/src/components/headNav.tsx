import { useLocation, useNavigate } from "react-router-dom";
import Card from "./card/card";
import { menus } from "@/assets/menus";

export default function HeadNav() {
  const path = useLocation();
  const navigate = useNavigate();
  //  width: "180px"
  return (
    <div
      style={{ width: "90px", position: "sticky", top: "10px", zIndex: 100 }}
    >
      <Card style={{ marginBottom: "20px" }}>
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
      </Card>
    </div>
  );
}
