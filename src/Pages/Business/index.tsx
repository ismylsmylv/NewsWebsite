import React from "react";
import "./style.scss";
import CardTemplate from "../../components/CardTemplate";
import Charts from "../../img/scale-unbalanced-solid.svg";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks/hooks";
import { useEffect } from "react";
import { getNews, getnews } from "../../redux/slices/connectSlice";
type Props = {};

function Business({}: Props) {
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
    <div
      className="Business
 container"
    >
      <div className="heading">
        <div className="imgCont">
          <img src={Charts} alt="" />
        </div>
        <h1>Business</h1>
      </div>
      <div className="cards ">
        {news.map((elem) => {
          return elem.category === "business" && <CardTemplate elem={elem} />;
        })}
      </div>
    </div>
  );
}

export default Business;
