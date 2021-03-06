import React from "react";
import logo from "../../images/Logo.svg"
import st from "components/Sidebar/SidebarLogo/SidebarLogo.module.css";

const SidebarLogo = () => {
  return (
    <div className={st.sidebarLogo}>
      <div className={st.burger}>
        <div className={st.burgerItem}></div>
        <div className={st.burgerItem}></div>
      </div>

      <div className={st.logo}>
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
};
export default SidebarLogo;
