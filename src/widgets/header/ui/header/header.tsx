import Logo from "@/shared/assets/newsLogo.png";
import Burger from "@/shared/assets/burger.svg";
import styles from "./style.module.css";
import useAuth from "@/shared/hooks/useAuth";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu } from "../consts";
import { Button } from "@/shared/button/Button";

function Header() {
  const { isAuthenticated, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate("/login");
  };

  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

  return (
    <section className={styles.header}>
      <div className="header_logo">
        <img src={Logo} />
      </div>
      <ul className={styles.header_menuList}>
        {Menu.map((menu, indx) => (
          <li className={styles.header_menuList_item} key={indx}>
            <NavLink to={menu.to} className={styles.header_menuList_link}>
              {menu.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className={styles.header_burgerMenu}>
        <div className={styles.loginBlock}>
          {isAuthenticated ? (
            <Button value="Log Out" handleClick={handleLogOut} />
          ) : (
            <Button value="Log In" handleClick={handleLogIn} />
          )}
        </div>
        <img src={Burger} className={styles.header_burger} />
      </div>
    </section>
  );
}

export default Header;
