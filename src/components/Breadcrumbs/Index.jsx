import React from "react";
import styles from "./Breadcrumbs.module.css";

const Breadcrumbs = ({ root, category, subcategory }) => {
  const arrowHead = (
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
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );

  return (
    <p className={styles.breadcrumbs}>
      {root}
      {category && (
        <>
          {arrowHead} {category}
        </>
      )}
      {subcategory && (
        <>
          {arrowHead} {subcategory}
        </>
      )}
    </p>
  );
};

export default Breadcrumbs;
