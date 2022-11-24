import React, { useState } from "react";
import { useLoaderData } from "react-router";
import CountryCard from "../../components/Card";
import styles from "./styles.module.scss";
export default function HomePage() {
  const { countries } = useLoaderData();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const handleFilter = (filter) => {
    const currentFilteredCountries = countries.filter(
      (country) => country.region === filter
    );

    setFilteredCountries(currentFilteredCountries);
  };

  const handleSearch = () => {
    const currentFilteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    );
    setFilter("");
    setFilteredCountries(currentFilteredCountries);
  };

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.searchGroup}>
          <div className={styles.search} id="search">
            <span
              className="material-icons"
              style={{ cursor: "pointer" }}
              onClick={handleSearch}
            >
              search
            </span>
            <input
              type="text"
              placeholder="Search for a country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
          </div>
          <select
            name="region"
            id="filter"
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
              handleFilter(e.target.value);
            }}
            className={styles.filter}
          >
            <option value="" disabled style={{ display: "none" }}>
              Filter by region
            </option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
        <ul className={styles.countryList}>
          {filteredCountries.map((country) => (
            <li
              className={styles.countryListElement}
              key={country?.name?.common}
            >
              <CountryCard
                name={country?.name?.common}
                capital={country.capital ? country.capital[0] : "Unknown"}
                img={country?.flags.png}
                population={country?.population}
                region={country?.region}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
