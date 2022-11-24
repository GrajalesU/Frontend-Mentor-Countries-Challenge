import React from "react";
import BackButton from "../../components/BackButton";
import styles from "./styles.module.scss";
import { useLoaderData } from "react-router";

export default function CountryDetail() {
  const { country } = useLoaderData();

  const nativeNames = country?.name?.nativeName;
  const nativeName = nativeNames && nativeNames[Object.keys(nativeNames)[0]];

  const currencies = country?.currencies;
  const currenciesNames = [];
  for (let currency in currencies) {
    currenciesNames.push(currencies[currency]?.name);
  }

  const languages = country?.languages;
  const languagesNames = [];
  for (let language in languages) {
    languagesNames.push(languages[language]);
  }

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <BackButton />
        <div className={styles.pageFlex}>
          <img className={styles.countryFlag} src={country?.flags.png} alt="" />
          <div className={styles.country}>
            <h1 className={styles.countryTitle}>{country?.name?.common}</h1>
            <div className={styles.countryFlex}>
              <div className={styles.countryDetail}>
                <div className={styles.countryDetailElement}>
                  <h2>Native name:</h2>
                  <p>{nativeName ? nativeName?.common : "Unknown"}</p>
                </div>
                <div className={styles.countryDetailElement}>
                  <h2>Population:</h2>
                  <p>{country?.population.toLocaleString()}</p>
                </div>
                <div className={styles.countryDetailElement}>
                  <h2>Region:</h2>
                  <p>{country?.region}</p>
                </div>
                <div className={styles.countryDetailElement}>
                  <h2>Sub Region:</h2>
                  <p>{country.subregion ? country?.subregion : "Unknown"}</p>
                </div>
                <div className={styles.countryDetailElement}>
                  <h2>Capital:</h2>
                  <p>{country.capital ? country?.capital[0] : "Unknown"}</p>
                </div>
              </div>
              <div className={styles.countryDetail}>
                <div className={styles.countryDetailElement}>
                  <h2>Top Level Domain:</h2>
                  <p>{country?.tld[0]}</p>
                </div>
                <div className={styles.countryDetailElement}>
                  <h2>Currencies:</h2>
                  {currenciesNames.length > 0
                    ? currenciesNames.map((name) => <p key={name}>{name}</p>)
                    : "Unknown"}
                </div>
                <div className={styles.countryDetailElement}>
                  <h2>Languages:</h2>
                  {languagesNames.length > 0
                    ? languagesNames.map((name, idx) => {
                        if (idx === languagesNames.length - 1)
                          return <p key={name}>{name}</p>;
                        return <p key={name}>{name},</p>;
                      })
                    : "Unknown"}
                </div>
              </div>
            </div>
            <div className={styles.countryFrontier}>
              <h2 className={styles.countryFrontierTitle}>Border Countries:</h2>
              <ul className={styles.countryFrontierList}>
                {country.borders
                  ? country?.borders?.map((element, idx) => (
                      <li
                        key={idx}
                        className={styles.countryFrontierListElement}
                      >
                        {element}
                      </li>
                    ))
                  : "Unknown"}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
