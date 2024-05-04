/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import CardTemplate from "../../components/CardTemplate";
import Ball from "../../img/table-tennis-paddle-ball-solid.svg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { getnews } from "../../redux/slices/connectSlice";
import "./style.scss";
import { RootState } from "../../redux/store/store";

function Sport() {
  useAppSelector((state: RootState) => state.connect);
  const news = useAppSelector((state) => state.connect.news);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getnews());
  }, []);
  return (
    <div className="Sport container">
      <div className="heading">
        <div className="imgCont">
          <img src={Ball} alt="" />
        </div>
        <h1>Sports</h1>
      </div>
      <div className="cards ">
        {news.map((elem: any) => {
          return elem.category === "sports" && <CardTemplate elem={elem} />;
        })}
      </div>
    </div>
  );
}

export default Sport;
