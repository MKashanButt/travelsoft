import React from "react";
import styles from "../Dashboard.module.css";

const Alerts = ({ clients, earning, expense, payables }) => {
  return (
    <div className={styles.alerts}>
      <div className={styles.options}>
        <p>Clients</p>
        <span>{clients}</span>
      </div>
      <div className={styles.options}>
        <p>Earning</p>
        <span>{earning}</span>
      </div>
      <div className={styles.options}>
        <p>Expense</p>
        <span>{expense}</span>
      </div>
      <div className={styles.options}>
        <p>Payables</p>
        <span>{payables}</span>
      </div>
    </div>
  );
};

export default Alerts;
