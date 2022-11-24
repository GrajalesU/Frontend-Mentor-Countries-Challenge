import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
export default function CountryCard({
  img,
  name,
  population,
  region,
  capital,
}) {
  return (
    <Link to={`/${name}`}>
      <div className={styles.card}>
        <img
          className={styles.cardImg}
          src={img}
          alt="country flag"
          loading="lazy"
        />
        <div className={styles.cardDetail}>
          <h2 className={styles.cardTitle}>{name}</h2>
          <div className={styles.cardElement}>
            <h3>Population:</h3>
            <p>{population?.toLocaleString()}</p>
          </div>
          <div className={styles.cardElement}>
            <h3>Region:</h3>
            <p>{region}</p>
          </div>
          <div className={styles.cardElement}>
            <h3>Capital:</h3>
            <p>{capital}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
