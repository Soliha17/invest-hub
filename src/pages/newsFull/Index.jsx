import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Index";
import { newsInfos } from "../../utils/newsInfo";
import { commentsData } from "../../utils/commentsData";

import "./style.scss";

import copyIcon from "../../assets/icons/copy-icon.svg";
import spamIcon from "../../assets/icons/spam-icon.svg";
import heartIcon from "../../assets/icons/heart-icon.svg";
import commentIcon from "../../assets/icons/comment-icon.svg";
import eyeIcon from "../../assets/icons/eye-icon.svg";
import sendIcon from "../../assets/icons/send-icon.svg";
import savedIcon from "../../assets/icons/saved-icon.svg";
import plusIcon from "../../assets/icons/kvd-plus-icon.svg";
import threeDotsIcon from "../../assets/icons/three-dots-icon.svg";
import watchIcon from "../../assets/icons/small-watch-icon.svg";
import fullHeartIcon from "../../assets/icons/full-heart-icon.svg";
import noComment from "../../assets/images/no-comment.svg";

function NewsFull() {
  const { id } = useParams();
  const [dots, setDots] = useState(false);
  const [openComments, setOpenComments] = useState(false);
  function openCommentsFn() {
    setOpenComments(!openComments);
  }

  const [news, setNews] = useState([]);
  useEffect(() => {
    let result = newsInfos.filter((item) => {
      return item.id == id;
    });
    setNews(result);
  }, []);
  return (
    <>
      <div className="main wrapper">
        <Sidebar />
        <div className="main-full">
          <div className="news-main news-full-main">
            {news.map((item) => (
              <span className="new" key={item.id}>
                <span className="top__news-main flex">
                  <span className="info__top flex">
                    <img src={item.logoImg} alt="" />
                    <span className="date-group flex">
                      <img src={watchIcon} alt="" />
                      <p>{item.newsDate}</p>
                    </span>
                  </span>
                  <span className="action__top flex">
                    <img src={plusIcon} alt="" />
                    <span className="three-dots">
                      <img
                        src={threeDotsIcon}
                        onClick={() => setDots(!dots)}
                        alt=""
                      />
                      <span
                        className="dots-content"
                        style={
                          dots ? { display: "block" } : { display: "none" }
                        }
                      >
                        <Link to="">
                          <img src={copyIcon} alt="" />
                          Nusxalash
                        </Link>
                        <Link to="">
                          <img src={spamIcon} alt="" />
                          Shikoyat qilish
                        </Link>
                      </span>
                    </span>
                  </span>
                </span>
                <span className="news__text">
                  <h6 className="f-1619">{item.newsType}</h6>
                  <h4 className="f-2431">{item.newsTitle}</h4>
                  <p className="f-2024">{item.newsText}</p>
                </span>
                <Link className="news__img">
                  <img src={item.img} alt="" />
                </Link>
                <span className="full-text-box">
                  {item.fullInfo.split("\n").map((text) => (
                    <p className="full-text f-2024">{text}</p>
                  ))}
                </span>
                <span className="footer__news-main flex">
                  <div className="left__footer flex">
                    <p className="flex">
                      <img src={heartIcon} alt="" />
                      55
                    </p>
                    <p className="flex">
                      <img
                        src={commentIcon}
                        className="hov"
                        onClick={openCommentsFn}
                        alt=""
                      />
                      35
                    </p>
                    <p className="flex">
                      <img src={eyeIcon} alt="" />
                      100
                    </p>
                  </div>
                  <span className="right__footer flex">
                    <img src={sendIcon} alt="" />
                    <img src={savedIcon} alt="" />
                  </span>
                </span>
              </span>
            ))}
            <span
              className="comment-group"
              style={openComments ? { display: "block" } : { display: "none" }}
            >
              <h3 className="f-2431">Izohlar</h3>
              <textarea
                className="f-1619"
                cols="30"
                rows="10"
                placeholder="Izoh qoldirish ..."
              ></textarea>
              <button className="send-btn f-1619">Yuborish</button>
              <span className="comments-box">
                {commentsData.length>0 ? (
                  commentsData.map((comment) => (
                    <span className="comment">
                      <span className="top__comment flex">
                        <img src={comment.profileImg} alt="" />
                        <span className="profile-info">
                          <h6 className="f-1619">{comment.userName}</h6>
                          <p className="flex f-1215">
                            <img src={watchIcon} alt="" />
                            {comment.commentDate}
                          </p>
                        </span>
                      </span>
                      <span className="middle__comment">
                        <p className="f-1619">{comment.commentText}</p>
                      </span>
                      <span className="bottom__comment flex">
                        <p className="f-1215">Javob qoldirish...</p>
                        <p className="f-1215 flex">
                          <img src={fullHeartIcon} alt="" />
                          {comment.numberOfLike} ta like
                        </p>
                      </span>
                    </span>
                  ))
                ) : (
                  <span className="no-comment">
                    <img src={noComment} alt="" />
                    <h4 className="f-3239">Bu maqolada izohlar mavjud emas</h4>
                  </span>
                )}
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsFull;
