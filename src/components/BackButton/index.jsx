import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
export default function BackButton() {
  return (
    <Link to={"/"}>
      <button className={styles.back}>
        <span className="material-icons">arrow_back</span>Back
      </button>
    </Link>
  );
}
