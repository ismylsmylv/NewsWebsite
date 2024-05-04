import React from "react";
import "./style.scss";
import CardTemplate from "../../components/CardTemplate";
import LocalIcon from "../../img/location-dot-solid.svg";

import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks/hooks";
import { useEffect } from "react";
import { getNews, getnews } from "../../redux/slices/connectSlice";
import axios from "axios";
type Props = {};

function Local({}: Props) {
  const { loading, error } = useAppSelector(
    (state: RootState) => state.connect
  );
  const news = useAppSelector((state) => state.connect.news);
  const [data, setdata] = useState([]);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getnews());
  }, []);
  return (
    <div className="Local container">
      <div className="heading">
        <div className="imgCont">
          <img src={LocalIcon} alt="" />
        </div>
        <h1>Local</h1>
      </div>
      <div className="cards ">
        {news.map((elem) => {
          return elem.category === "local" && <CardTemplate elem={elem} />;
        })}
      </div>
    </div>
  );
}

export default Local;
