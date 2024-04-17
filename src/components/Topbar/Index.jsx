import React, { useState } from "react";
import styles from "./Topbar.module.css";

const Topbar = () => {
  const [avatar, setAvatar] = useState(false);
  return (
    <>
      <header className={styles.topbar}>
        <div className={styles.logo}>
          <h1>
            <a href="/">TravelSoft</a>
          </h1>
        </div>
        <nav>
          <div className={styles.account}>
            {avatar ? (
              <img src="" alt="" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            )}
            <span className={styles.user}>Admin</span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Topbar;