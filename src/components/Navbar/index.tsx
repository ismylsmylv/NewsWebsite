/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Bars from "../../img/bars-solid.svg";
import Settings from "../../img/gear-solid.svg";
import SearchIcon from "../../img/magnifying-glass-solid.svg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { searchNews } from "../../redux/slices/connectSlice";
import "./style.scss";
import { useEffect } from "react";
import { getnews } from "../../redux/slices/connectSlice";
import { RootState } from "../../redux/store/store";
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
function Navbar() {
  const [checked, setchecked] = useState(false);
  const [empty, setempty] = useState("");
  useAppSelector((state: RootState) => state.connect);
  const backnews: any = useAppSelector((state) => state.connect.backnews);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getnews());
  }, []);
  return (
    <div className="navbar">
      <div className="upperNavbar">
        <div className="logo">
          <Link to={"/"}>
            {" "}
            <h2>Google News </h2>
          </Link>
        </div>
        <div className="searchBar">
          <div className="icon">
            <img src={SearchIcon} alt="" />
          </div>
          <input
            type="text"
            placeholder="Search for topics, locations & sources"
            onChange={(e) => {
              dispatch(searchNews(e.target.value));
              setempty(e.target.value);
            }}
          />
          <ul className="results">
            {backnews &&
              empty != "" &&
              backnews.map((elem: Elem) => {
                return <li key={elem.id}>{elem.title}</li>;
              })}
          </ul>
        </div>
        <div className="admin">
          <Link to={"/admin"}>
            {" "}
            <img src={Settings} alt="" />
          </Link>
        </div>
        <div className="navMobile">
          <button
            onClick={() => {
              setchecked(!checked);
            }}
          >
            <img src={Bars} alt="" />
          </button>
        </div>
      </div>
      {checked && (
        <div className="navList">
          <div className="searchMobileBar">
            <div className="icon">
              <img src={SearchIcon} alt="" />
            </div>
            <input
              type="text"
              placeholder="Search for topics, locations & sources"
            />
          </div>
          <div className="catBtns">
            <button
              onClick={() => {
                setchecked(!checked);
              }}
            >
              <Link to={"/"}>Home</Link>
            </button>
            <button
              onClick={() => {
                setchecked(!checked);
              }}
            >
              <Link to={"/world"}>World</Link>
            </button>
            <button
              onClick={() => {
                setchecked(!checked);
              }}
            >
              <Link to={"/local"}>Local</Link>
            </button>
            <button
              onClick={() => {
                setchecked(!checked);
              }}
            >
              <Link to={"/business"}>Business</Link>
            </button>
            <button
              onClick={() => {
                setchecked(!checked);
              }}
            >
              <Link to={"/tech"}>Technology</Link>
            </button>
            <button
              onClick={() => {
                setchecked(!checked);
              }}
            >
              <Link to={"/entertainment"}>Entertainment</Link>
            </button>
            <button
              onClick={() => {
                setchecked(!checked);
              }}
            >
              <Link to={"/sport"}>Sports</Link>
            </button>
            <button
              onClick={() => {
                setchecked(!checked);
              }}
            >
              <Link to={"/science"}>Science</Link>
            </button>
            <button
              onClick={() => {
                setchecked(!checked);
              }}
            >
              <Link to={"/health"}>Health</Link>
            </button>
          </div>
        </div>
      )}
      <div className="lowerNavbar">
        <NavLink
          to={"/"}
          className="link"
          activeclassname="active"
          style={{
            paddingBottom: "9px",
            color: "white",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to={"/world"}
          className="link"
          activeclassname="active"
          style={{
            paddingBottom: "9px",
            color: "white",
          }}
        >
          World
        </NavLink>
        <NavLink
          to={"/local"}
          className="link"
          activeclassname="active"
          style={{
            paddingBottom: "9px",
            color: "white",
          }}
        >
          Local
        </NavLink>
        <NavLink
          to={"/business"}
          className="link"
          activeclassname="active"
          style={{
            paddingBottom: "9px",
            color: "white",
          }}
        >
          Business
        </NavLink>
        <NavLink
          to="/tech"
          className="link"
          activeclassname="active"
          style={{
            paddingBottom: "9px",
            color: "white",
          }}
        >
          Technology
        </NavLink>
        <NavLink
          to={"/entertainment"}
          className="link"
          activeclassname="active"
          style={{
            paddingBottom: "9px",
            color: "white",
          }}
        >
          Entertainment
        </NavLink>
        <NavLink
          to={"/sport"}
          className="link"
          activeclassname="active"
          style={{
            paddingBottom: "9px",
            color: "white",
          }}
        >
          Sports
        </NavLink>
        <NavLink
          to={"/science"}
          className="link"
          activeclassname="active"
          style={{
            paddingBottom: "9px",
            color: "white",
          }}
        >
          Science
        </NavLink>
        <NavLink
          to={"/health"}
          className="link"
          activeclassname="active"
          style={{
            paddingBottom: "9px",
            color: "white",
          }}
        >
          Health
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
