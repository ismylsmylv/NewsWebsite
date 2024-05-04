/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Views from "../../img/eye-regular.svg";
import ThumbDownEmp from "../../img/thumbs-down-regular.svg";
import ThumbDownFill from "../../img/thumbs-down-solid.svg";
import ThumbUpEmp from "../../img/thumbs-up-regular.svg";
import ThumbUpFill from "../../img/thumbs-up-solid.svg";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { dislike, like } from "../../redux/slices/connectSlice";
import "./style.scss";
type Props = { elem: Elem };
interface Elem {
  date: any;
  authors: ReactNode;
  text: ReactNode;
  id: string;
  title: string;
  category: string;
  topic: string;
  likes: string;
  dislikes: string;
  views: string;
  image: string;
}
function CardTemplate({ elem }: Props) {
  const navigate = useNavigate();
  let formattedDate;
  const [likes, setlikes] = useState(elem.likes);
  const [liked, setliked] = useState(false);
  const [dislikes, setdislikes] = useState(elem.dislikes);
  const [disliked, setdisliked] = useState(false);
  console.log(likes);
  const dispatch = useAppDispatch();
  {
    const unixTimestamp = elem.date;
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
    <div className="CardTemplate">
      <div className="line"></div>

      <div
        className="card"
        onClick={() => {
          console.log(elem.id);
          navigate(`/details/${elem.id}`);
        }}
      >
        <div className="left">
          <img src={elem.image} alt="" />
          <div className="heading">
            <p>{elem.title}</p>
          </div>
          <div className="details">
            <div className="date detail">{formattedDate}</div>
            <div className="dislikes detail">
              <img src={Views} alt="" style={{ width: "auto" }} />
              {elem.views}
            </div>
            <div
              className="views detail like"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(like(elem as any));
                const liked = elem.likes;
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
                dispatch(dislike(elem as any));
                const disliked: any = elem.dislikes;
                setdislikes((disliked - 1) as any);
                setdisliked(true);
                setliked(false);
              }}
            >
              <img src={disliked ? ThumbDownFill : ThumbDownEmp} alt="" />
              {dislikes}
            </div>
          </div>
        </div>
        <div className="right">
          <div className="authors">
            {/* {?.map((auth) => {
              return ( */}
            <div className="author" key={uuidv4()}>
              {elem.authors}
            </div>
            {/* ); */}
            {/* })} */}
          </div>
          <div className="content">{elem.text}</div>
        </div>
      </div>
    </div>
  );
}

export default CardTemplate;
