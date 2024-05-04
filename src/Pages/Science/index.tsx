import React from "react";
import "./style.scss";
import CardTemplate from "../../components/CardTemplate";
import FlaskS from "../../img/flask-solid.svg";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks/hooks";
import { useEffect } from "react";
import { getNews, getnews } from "../../redux/slices/connectSlice";
type Props = {};

function Science({}: Props) {
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
    <div className="Science container">
      <div className="heading">
        <div className="imgCont">
          <img src={FlaskS} alt="" />
        </div>
        <h1>Science</h1>
      </div>
      <div className="cards ">
        {news.map((elem) => {
          return elem.category === "science" && <CardTemplate elem={elem} />;
        })}
      </div>
    </div>
  );
}

export default Science;
