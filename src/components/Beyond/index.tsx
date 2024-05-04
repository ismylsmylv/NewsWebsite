import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./style.scss";
import ChevronRight from "../../img/chevron-right-solid.svg";
import { Link, useNavigate } from "react-router-dom";
type Props = { news: object[] };

function Beyond({ news }: Props) {
  const navigate = useNavigate();
  let beyCount: number = 0;

  const url =
    "https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/08/How-to-Find-Out-Where-a-Picture-Was-Taken-1.png?fit=1200%2C675&ssl=1";
  return (
    <div className="beyond container">
      <div className="heading">
        Beyond the front page
        <img src={ChevronRight} alt="" />
      </div>
      <div className="info">Notable stories and conversation starters</div>
      {news &&
        news.map((elem) => {
          let formattedDate;

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
          if (elem.topic == "beyond" && beyCount < 3) {
            beyCount++;
            return (
              <div
                className="cardsBeyond"
                style={{
                  backgroundImage: `url(${elem.image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  cursor: "pointer",
                }}
                key={uuidv4()}
                onClick={() => {
                  console.log(elem.id);
                  navigate(`/details/${elem.id}`);
                }}
              >
                <div className="darkOverlay"></div>
                <div className="cardBeyond">
                  <div className="left">
                    <div className="head">{elem.title}</div>
                    <div className="footer">
                      <div className="date">{formattedDate}</div>
                      <div className="author" style={{ display: "flex" }}>
                        {/* {" "}
                        {elem.authors.map((auth) => {
                          return ( */}
                        <div
                          className="author"
                          key={uuidv4()}
                          style={{ marginRight: "10px" }}
                        >
                          {elem.authors}
                        </div>
                        {/* ); */}
                        {/* })} */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
    </div>
  );
}

export default Beyond;
