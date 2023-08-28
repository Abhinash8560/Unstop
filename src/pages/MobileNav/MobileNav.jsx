import React from 'react';
import Styles from "./MobileNav.module.css";
import { TbArticle } from "react-icons/tb";
import { FiEdit } from "react-icons/fi";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { PiLinkSimpleFill } from "react-icons/pi";

function MobileNav({ onClose }) {

    const menuItems = [
        {
          title: "Dashboard",
          url: "#",
          cName: "nav-links"
        },
        {
          title: "Assessment",
          url: "#",
          cName: "nav-links"
        },
        {
          title: "My Library",
          url: "#",
          cName: "nav-links"
        },
        {
          title: "Round Status",
          url: "#",
          cName: "nav-links"
        },
   
      ];

  return (
    <div className={Styles.cardOverlay}>
      <div className={Styles.card}>
        <div className={Styles.cardHeader}>
          <h2 className={Styles.cardTitle}>Menu</h2>
          <button onClick={onClose} className={Styles.closeButton}>
            X
          </button>
        </div>
        <div className={Styles.cardContent}>
           {/* <ul>
           {menuItems.map((item, index) => {
            return (
              <li key={index}>
                  {item.title}
              </li>
            );
          })}
           </ul> */}
           <section className={Styles.left}>
          <div id={Styles.sidebarparent}>
            <div>
              <TbArticle className={Styles.dashboardfirst1} />
            </div>
            <p className={Styles.dashboardfirst}>Dashboard</p>
          </div>

          <div id={Styles.sidebarparentMain}>
            <div>
              <FiEdit className={Styles.dashboardfirst1MainTask} />
            </div>
            <p className={Styles.dashboardfirst}>Assessment</p>
          </div>

          <div id={Styles.sidebarparent}>
            <div>
              <MdOutlineLibraryAddCheck className={Styles.dashboardfirst1} />
            </div>
            <span className={Styles.dashboardfirstLibrary}>My Library</span>
          </div>

          <div id={Styles.sidebarparentGrid}>
            <div>
              <PiLinkSimpleFill className={Styles.dashboardfirstinnerclass} />
            </div>
            <p className={Styles.dashboardfirstWrapperGrid}>Round Status</p>
            <label className={Styles.labelAdmin}>Admin</label><br />

          </div>
        </section>
         </div>
      </div>
    </div>
  );
}

export default MobileNav;
