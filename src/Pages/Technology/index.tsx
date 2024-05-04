import React from "react";
import "./style.scss";
import CardTemplate from "../../components/CardTemplate";
import Chip from "../../img/microchip-solid.svg";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks/hooks";
import { useEffect } from "react";
import { getNews, getnews } from "../../redux/slices/connectSlice";
type Props = {};

function Tech({}: Props) {
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
    <div className="Tech container">
      <div className="heading">
        <div className="imgCont">
          <img src={Chip} alt="" />
        </div>
        <h1>Technology</h1>
      </div>
      <div className="cards ">
        {news.map((elem) => {
          return elem.category === "technology" && <CardTemplate elem={elem} />;
        })}
      </div>
    </div>
  );
}

export default Tech;
