import axios from "axios";
import { useState } from "react";
import { newsClass } from "../../assets/class/addNews";
import { RootState } from "../../redux/store/store";
import "./style.scss";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";

import { deleteNews, getnews } from "../../redux/slices/connectSlice";
type Props = {};

//input title, text, author,image link | select category, topic
function Admin({}: Props) {
  const { loading, error } = useAppSelector(
    (state: RootState) => state.connect
  );
  let news = useAppSelector((state) => state.connect.news);
  const [data, setdata] = useState([]);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getnews());
  }, []);
  const [InpTitle, setInpTitle] = useState("");
  const [InpText, setInpText] = useState("");
  const [InpAuthor, setInpAuthor] = useState([]);
  const [InpImg, setInpImg] = useState("");
  const [InpCat, setInpCat] = useState("");
  const [InpTop, setInpTop] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  console.log(news);
  return (
    <div className="admin container">
      <h1>Admin page</h1>
      <h2>Add new</h2>
      <form className="dataInput">
        <div className="row1">
          <input
            type="text"
            placeholder="Title"
            value={InpTitle}
            onChange={(e) => {
              setInpTitle(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Content text"
            value={InpText}
            onChange={(e) => {
              setInpText(e.target.value);
            }}
          />
        </div>
        <div className="row2">
          <input
            type="text"
            placeholder="Authors"
            value={InpAuthor}
            onChange={(e) => {
              setInpAuthor(e.target.value);
            }}
          />
          <input
            type="url"
            placeholder="Image link"
            value={InpImg}
            onChange={(e) => {
              setInpImg(e.target.value);
            }}
          />
        </div>
        <div className="row3">
          <div
            className="selectOpt"
            value={InpCat}
            onChange={(e) => {
              setInpCat(e.target.value);
            }}
          >
            <select name="" id="">
              <option value="null">Category</option>
              <option value="world">World</option>
              <option value="local">Local</option>
              <option value="business">Business</option>
              <option value="technology">Technology</option>
              <option value="entertainment">Entertainment</option>
              <option value="sports">Sports</option>
              <option value="science">Science</option>
              <option value="health">Health</option>
            </select>
          </div>
          <div
            className="selectOpt"
            value={InpTop}
            onChange={(e) => {
              setInpTop(e.target.value);
            }}
          >
            <select name="" id="">
              <option value="null">Topic</option>
              <option value="beyond">Beyond</option>
              <option value="business">Business</option>
              <option value="sports">Sports</option>
              <option value="technology">Technology</option>
              <option value="picked">Picked</option>
              <option value="entertainment">Entertainment</option>
              <option value="science">Science</option>
              <option value="health">Health</option>
              <option value="topStory">Top Story</option>
            </select>
          </div>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            const data = newsClass(
              InpTitle,
              InpText,
              InpAuthor,
              InpImg,
              InpCat,
              InpTop
            );
            console.log(data);
            axios.post(
              "https://6576df5f197926adf62ca419.mockapi.io/news",
              data
            );
            setInpAuthor("");
            setInpImg("");
            setInpTitle("");
            setInpText("");
          }}
        >
          Send
        </button>
      </form>
      <div className="table">
        <div className="table-header">
          <div className="header__item">
            <a id="name" className="filter__link" href="#">
              title
            </a>
          </div>

          <div className="header__item">
            <a
              id="draws"
              className="filter__link filter__link--number"
              href="#"
            >
              image
            </a>
          </div>
          <div className="header__item">
            <a
              id="draws"
              className="filter__link filter__link--number"
              href="#"
            >
              category
            </a>
          </div>
          <div className="header__item">
            <a
              id="total"
              className="filter__link filter__link--number"
              href="#"
            >
              topic
            </a>
          </div>
          <div className="header__item">
            <a
              id="losses"
              className="filter__link filter__link--number"
              href="#"
            >
              likes
            </a>
          </div>
          <div className="header__item">
            <a
              id="total"
              className="filter__link filter__link--number"
              href="#"
            >
              dislikes
            </a>
          </div>
          <div className="header__item">
            <a
              id="total"
              className="filter__link filter__link--number"
              href="#"
            >
              views
            </a>
          </div>
          <div className="header__item">
            <a
              id="total"
              className="filter__link filter__link--number"
              href="#"
            >
              delete
            </a>
          </div>
        </div>
        <div className="table-content">
          {news &&
            news.map((elem) => {
              return (
                <div className="table-row" key={elem.id}>
                  <div className="table-data">{elem.title}</div>
                  <div className="table-data">
                    <img src={elem.image} alt="" />
                  </div>
                  <div className="table-data">{elem.category}</div>
                  <div className="table-data">{elem.topic}</div>
                  <div className="table-data">{elem.likes}</div>
                  <div className="table-data">{elem.dislikes}</div>
                  <div className="table-data">{elem.views}</div>
                  <div className="table-data">
                    <button
                      onClick={() => {
                        dispatch(deleteNews(elem.id));
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Admin;
