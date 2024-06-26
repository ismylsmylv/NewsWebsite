/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./style.scss";
type Props = { news: any };
interface Elem {
  date: any;
  id: number;
  title: string;
  category: string;
  topic: string;
  likes: string;
  dislikes: string;
  views: string;
  image: string;
}
function ForYou({ news }: Props) {
  const navigate = useNavigate();
  const pickCount: number = 0;
  let pickCountLeft: number = 0;
  let pickCountRight: number = 0;
  const usedId: number[] = [];
  let formattedDateRight;
  let formattedDateLeft;

  return (
    <div className="forYou container">
      <div className="heading">For you</div>
      {/* <img src={ChevronRight} alt="" /> */}
      <div className="info">Recommended based on your interests</div>

      <div className="cards">
        <div className="left">
          {news &&
            news.map((elem: Elem) => {
              {
                const unixTimestamp = elem.date;
                const milliseconds = unixTimestamp * 1000;

                const dateObject = new Date(milliseconds);

                const year = dateObject.getFullYear();
                const month = dateObject.getMonth() + 1;
                const day = dateObject.getDate();
                const hours = dateObject.getHours();
                const minutes = dateObject.getMinutes();

                formattedDateRight = `${day}/${month}/${year} ${hours}:${minutes}`;
              }
              if (
                elem.topic == "picked" &&
                pickCountLeft < 3 &&
                pickCount < 3
              ) {
                pickCountLeft++;
                usedId.push(elem.id);
                console.log(usedId);
                return (
                  <div key={uuidv4()}>
                    <div
                      className="card"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        console.log(elem.id);
                        navigate(`/details/${elem.id}`);
                      }}
                    >
                      <div className="left">
                        <div className="head">{elem.title}</div>
                        <div className="date">{formattedDateRight}</div>
                      </div>
                      <div className="right">
                        <img src={elem.image} alt="" />
                      </div>
                    </div>
                    <div className="line"></div>
                  </div>
                );
              }
            })}
        </div>
        <div className="longLine"></div>
        <div className="right">
          {news &&
            news.map((elem: Elem) => {
              {
                const unixTimestamp = elem.date;
                const milliseconds = unixTimestamp * 1000;

                const dateObject = new Date(milliseconds);

                const year = dateObject.getFullYear();
                const month = dateObject.getMonth() + 1;
                const day = dateObject.getDate();
                const hours = dateObject.getHours();
                const minutes = dateObject.getMinutes();

                formattedDateLeft = `${day}/${month}/${year} ${hours}:${minutes}`;
              }
              if (
                elem.topic == "picked" &&
                pickCountRight < 3 &&
                !usedId.includes(elem.id)
              ) {
                pickCountRight++;
                return (
                  <div key={uuidv4()}>
                    <div
                      className="card"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        console.log(elem.id);
                        navigate(`/details/${elem.id}`);
                      }}
                    >
                      <div className="left">
                        <div className="head">{elem.title}</div>
                        <div className="date">{formattedDateLeft}</div>
                      </div>
                      <div className="right">
                        <img src={elem.image} alt="" />
                      </div>
                    </div>
                    <div className="line"></div>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
}

export default ForYou;
