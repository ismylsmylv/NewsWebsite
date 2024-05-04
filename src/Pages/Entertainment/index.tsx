/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

import CardTemplate from "../../components/CardTemplate";
import Masks from "../../img/masks-theater-solid.svg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { getnews } from "../../redux/slices/connectSlice";
import { RootState } from "../../redux/store/store";
import "./style.scss";
function Entertainment() {
  useAppSelector((state: RootState) => state.connect);
  const news = useAppSelector((state) => state.connect.news);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getnews());
  }, []);
  return (
    <div className="Entertainment container">
      <div className="heading">
        <div className="imgCont">
          <img src={Masks} alt="" />
        </div>
        <h1>Entertainment</h1>
      </div>
      <div className="cards ">
        {news.map((elem: any) => {
          return (
            elem.category === "entertainment" && <CardTemplate elem={elem} />
          );
        })}
      </div>
    </div>
  );
}

export default Entertainment;
