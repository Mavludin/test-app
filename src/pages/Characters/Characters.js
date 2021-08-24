import React from "react";
import { useQuery } from "react-query";
import styles from "./Characters.module.css";
import { ReviewCard } from "./components/ReviewCard/ReviewCard";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from '@material-ui/lab/PaginationItem';
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Characters = () => {
  const { data, status } = useQuery("characters", async () => {
    const res = await fetch("https://finalspaceapi.com/api/v0/character/");
    return res.json();
  });

  const location = useLocation()
  const query = new URLSearchParams(location.search);

  const [page, setPage] = useState(parseInt(query.get('page') || '1', 10))

  const DATA_PER_PAGE = 6

  const count = data !== undefined ? Math.ceil(data.length / DATA_PER_PAGE) : 0

  const indexOfLastItem = page * DATA_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - DATA_PER_PAGE;
  const currentData = data !== undefined ? data.slice(indexOfFirstItem, indexOfLastItem) : []

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="characters">
      <h1>Characters</h1>

      {status === "loading" && <div>Loading data...</div>}

      {status === "error" && <div>Error fetching data</div>}

      <section className={styles.cards}>
        {status === "success" &&
          currentData.map((char) => {
            return (
              <ReviewCard
                key={char.id}
                name={char.name}
                gender={char.gender}
                origin={char.origin}
                species={char.species}
                status={char.status}
                abilities={char.abilities}
                aliases={char.alias}
                img_url={char.img_url}
              />
            );
          })}
      </section>
      <Pagination
        variant="outlined"
        color="primary"
        classes={{root: styles.pagination}}
        page={page}
        count={count}
        onChange={handleChange}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`/characters${item.page === 1 ? "" : `?page=${item.page}`}`}
            {...item}
          />
        )}
      />
    </div>
  );
};
