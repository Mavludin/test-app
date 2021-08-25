import React from "react";
import styles from "./Locations.module.css";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { ReviewCard } from "./components/ReviewCard/ReviewCard";

export const Locations = () => {
  const { data, status } = useQuery("locations", async () => {
    const res = await fetch("https://finalspaceapi.com/api/v0/location/");
    return res.json();
  });

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
    <div className="locations">
      <h1>Locations</h1>

      {status === "loading" && <div>Loading data...</div>}

      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <>
          <section className={styles.cards}>
            {currentData.map((location) => {
              return (
                <ReviewCard
                  key={location.id}
                  name={location.name}
                  type={location.type}
                  inhabitants={location.inhabitants}
                  img_url={location.img_url}
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
                to={`/locations${item.page === 1 ? "" : `?page=${item.page}`}`}
                {...item}
              />
            )}
          />
        </>
      )}
    </div>
  );
};
