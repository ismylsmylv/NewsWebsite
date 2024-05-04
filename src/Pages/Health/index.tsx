/* eslint-disable @typescript-eslint/no-explicit-any */
import CardTemplate from "../../components/CardTemplate";
import Flask from "../../img/heart-pulse-solid.svg";
import "./style.scss";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { getnews } from "../../redux/slices/connectSlice";
import { RootState } from "../../redux/store/store";
function Health() {
  useAppSelector((state: RootState) => state.connect);
  const news = useAppSelector((state) => state.connect.news);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getnews());
  }, []);
  return (
    <div className="Health container">
      <div className="heading">
        <div className="imgCont">
          <img src={Flask} alt="" />
        </div>
        <h1>Health</h1>
      </div>
      <div className="cards ">
        {news.map((elem: any) => {
          return elem.category === "world" && <CardTemplate elem={elem} />;
        })}
      </div>
    </div>
  );
}

export default Health;
