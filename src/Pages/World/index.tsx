/* eslint-disable @typescript-eslint/no-explicit-any */
import CardTemplate from "../../components/CardTemplate";
import Earth from "../../img/earth-americas-solid.svg";
import { RootState } from "../../redux/store/store";
import "./style.scss";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { getnews } from "../../redux/slices/connectSlice";
interface Elem {
  id: string;
  title: string;
  category: string;
  topic: string;
  likes: string;
  dislikes: string;
  views: string;
  image: string;
}
function World() {
  useAppSelector((state: RootState) => state.connect);
  const news = useAppSelector((state) => state.connect.news);

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
        {news.map((elem: Elem & any) => {
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
