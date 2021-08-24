import React from "react";
import styles from "./Episodes.module.css";
import { ReviewCard } from "./components/ReviewCard/ReviewCard";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGetEpisodes } from "../../hooks/useGetEpisodes";

export const Episodes = () => {

  const { data, status } = useGetEpisodes()

  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const [page, setPage] = useState(parseInt(query.get("page") || "1", 10));

  const DATA_PER_PAGE = 6;

  const count = data !== undefined ? Math.ceil(data.length / DATA_PER_PAGE) : 0;

  const indexOfLastItem = page * DATA_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - DATA_PER_PAGE;
  const currentData =
    data !== undefined ? data.slice(indexOfFirstItem, indexOfLastItem) : [];

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="episodes">
      <h1>Episodes</h1>

      {status === "loading" && <div>Loading data...</div>}

      {status === "error" && <div>Error fetching data</div>}

      <section className={styles.cards}>
        {status === "success" &&
          currentData.map((episode) => {
            return (
              <ReviewCard
                key={episode.id}
                name={episode.name}
                air_date={episode.air_date}
                director={episode.director}
                writer={episode.writer}
                characters={episode.characters.map((char) =>
                  char.substr(char.lastIndexOf("/") + 1)
                )}
                img_url={episode.img_url}
              />
            );
          })}
      </section>
      <Pagination
        variant="outlined"
        color="primary"
        classes={{ root: styles.pagination }}
        page={page}
        count={count}
        onChange={handleChange}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`/episodes${item.page === 1 ? "" : `?page=${item.page}`}`}
            {...item}
          />
        )}
      />
    </div>
  );
};
