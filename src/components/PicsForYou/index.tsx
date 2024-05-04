/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./style.scss";
type Props = { news: any };
interface Elem {
  date: any;
  id: string;
  title: string;
  category: string;
  topic: string;
  likes: string;
  dislikes: string;
  views: string;
  image: string;
}
function PicsForYou({ news }: Props) {
  let formattedDate;
  let pickCount: number = 0;
  const navigate = useNavigate();
  return (
    <div className="PicsForYou" style={{ width: "100%" }}>
      <div
        className="heading"
        // style={{ cursor: "pointer" }}
        // onClick={() => {
        //   navigate("/local");
        // }}
      >
        Picks for you
      </div>
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

            formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;
          }
          if (elem.topic == "picked" && pickCount < 3) {
            pickCount++;
            return (
              <div key={uuidv4()}>
                <div className="line"></div>

                <div
                  className="cardPicks"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    console.log(elem.id);
                    navigate(`/details/${elem.id}`);
                  }}
                >
                  <div className="left">
                    <div className="head">{elem.title}</div>
                    <div className="date">{formattedDate}</div>
                  </div>
                  <div className="right">
                    <img src={elem.image} alt="" />
                  </div>
                </div>
                {/* <div className="line"></div> */}
              </div>
            );
          }
        })}
    </div>
  );
}

export default PicsForYou;
