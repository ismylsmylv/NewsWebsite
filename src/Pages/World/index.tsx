import React from "react";
import "./style.scss";
import CardTemplate from "../../components/CardTemplate";
import Earth from "../../img/earth-americas-solid.svg";
import { RootState } from "../../redux/store/store";

import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks/hooks";
import { useEffect } from "react";
import { getNews, getnews } from "../../redux/slices/connectSlice";
import axios from "axios";
type Props = {};

function World({}: Props) {
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
    <div className="world container">
      <div className="heading">
        <div className="imgCont">
          <img src={Earth} alt="" />
        </div>
        <h1>World</h1>
      </div>
      <div className="cards ">
        {news.map((elem) => {
          return (
            (elem.category === "world" || elem.category === "topStory") && (
              <CardTemplate elem={elem} />
            )
          );
        })}
      </div>
    </div>
  );
}

export default World;
