/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import CardTemplate from "../../components/CardTemplate";
import FlaskS from "../../img/flask-solid.svg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { getnews } from "../../redux/slices/connectSlice";
import { RootState } from "../../redux/store/store";
import "./style.scss";

function Science() {
  useAppSelector((state: RootState) => state.connect);
  const news = useAppSelector((state) => state.connect.news);

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
        {news.map((elem: any) => {
          return elem.category === "science" && <CardTemplate elem={elem} />;
        })}
      </div>
    </div>
  );
}

export default Science;
