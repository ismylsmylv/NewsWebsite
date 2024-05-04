import React from "react";
import "./style.scss";
import { v4 as uuidv4 } from "uuid";
import ChevronRight from "../../img/chevron-right-solid green.svg";
import { useNavigate } from "react-router-dom";

function LocalNews({ news }: Props) {
  let formattedDate;
  let localCount: number = 0;
  const navigate = useNavigate();
  return (
    <div className="localNews" style={{ width: "100%" }}>
      <div
        className="heading"
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/local");
        }}
      >
        Local News <img src={ChevronRight} alt="" />
      </div>
      {news &&
        news.map((elem) => {
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
          if (elem.category == "local" && localCount < 3) {
            localCount++;
            return (
              <div key={uuidv4()}>
                <div className="line"></div>

                <div
                  className="cardLocal"
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

export default LocalNews;
