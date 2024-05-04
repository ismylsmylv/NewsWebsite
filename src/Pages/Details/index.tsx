import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Views from "../../img/eye-regular.svg";
import ThumbDownEmp from "../../img/thumbs-down-regular.svg";
import ThumbDownFill from "../../img/thumbs-down-solid.svg";
import ThumbUpEmp from "../../img/thumbs-up-regular.svg";
import ThumbUpFill from "../../img/thumbs-up-solid.svg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { dislike, like, getId } from "../../redux/slices/connectSlice";
import "./style.scss";

import { getnews } from "../../redux/slices/connectSlice";
type Props = { elem: object[] };

function Details({}: Props) {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector(
    (state: RootState) => state.connect
  );
  let idNews = useAppSelector((state) => state.connect.idNews);
  const [data, setdata] = useState([]);

  useEffect(() => {
    dispatch(getId(id));
  }, []);
  console.log("idNews", idNews);
  const [likes, setlikes] = useState(idNews.likes);
  const [liked, setliked] = useState(false);
  const [dislikes, setdislikes] = useState(idNews.dislikes);
  const [disliked, setdisliked] = useState(false);
  let formattedDate;
  {
    const unixTimestamp = idNews.date;
    const milliseconds = unixTimestamp * 1000;
    const dateObject = new Date(milliseconds);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;
    // console.log(formattedDate);
  }
  return (
    <div className="detailsPage container">
      <div className="cardDetail">
        <img src={idNews.image} alt="" />
        <div className="heading">
          <p>{idNews.title}</p>
        </div>
        <div className="authors">
          <div className="author" key={uuidv4()}>
            Author: {idNews.authors}
          </div>
        </div>
        <div className="details">
          <div className="date detail">{formattedDate}</div>
          <div className="opinions">
            <div className="dislikes detail">
              <img src={Views} alt="" style={{ width: "auto" }} />
              {idNews.views}
            </div>
            <div
              className="views detail like"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(like(idNews));
                let liked = idNews.likes;
                setlikes(liked + 1);
                setliked(true);
                setdisliked(false);
              }}
            >
              <img src={liked ? ThumbUpFill : ThumbUpEmp} alt="" />
              {likes}
            </div>
            <div
              className="likes detail dislike"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(dislike(idNews));
                let disliked = idNews.dislikes;
                setdislikes(disliked - 1);
                setdisliked(true);
                setliked(false);
              }}
            >
              <img src={disliked ? ThumbDownFill : ThumbDownEmp} alt="" />
              {dislikes}
            </div>
          </div>
        </div>

        <div className="content">{idNews.text}</div>
      </div>
    </div>
  );
}

export default Details;
