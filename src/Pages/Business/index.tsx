/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import CardTemplate from "../../components/CardTemplate";
import Charts from "../../img/scale-unbalanced-solid.svg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { getnews } from "../../redux/slices/connectSlice";
import { RootState } from "../../redux/store/store";
import "./style.scss";

function Business() {
  useAppSelector((state: RootState) => state.connect);
  const news = useAppSelector((state) => state.connect.news);

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
        {news.map((elem: any) => {
          return elem.category === "business" && <CardTemplate elem={elem} />;
        })}
      </div>
    </div>
  );
}

export default Business;
