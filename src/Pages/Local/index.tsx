/* eslint-disable @typescript-eslint/no-explicit-any */
import CardTemplate from "../../components/CardTemplate";
import LocalIcon from "../../img/location-dot-solid.svg";
import "./style.scss";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { getnews } from "../../redux/slices/connectSlice";
import { RootState } from "../../redux/store/store";
function Local() {
  useAppSelector((state: RootState) => state.connect);
  const news = useAppSelector((state) => state.connect.news);

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
        {news.map((elem: any) => {
          return elem.category === "local" && <CardTemplate elem={elem} />;
        })}
      </div>
    </div>
  );
}

export default Local;
