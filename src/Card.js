import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Card.css";

export default function Card({
  image,
  name,
  title,
  href,
  avatar,
  likes,
  comments,
  body,
  username,
  children,
}) {
  const navigate = useNavigate();
  /* const params = useParams();
  console.log(params); */
  return (
    <div
      className="card"
      onClick={() =>
        navigate(`/${username}/${title}`.replace(/ /g, "-"), {
          state: {
            image,
            name,
            title,
            href,
            avatar,
            likes,
            comments,
            body,
            username,
          },
        })
      }
    >
      <img src={image} alt={"cover"} className="imgContainer" />

      <div className="container">
        <div class="crayons-story__meta">
          <div class="crayons-story__author-pic">
            <a href={href} className="crayons-avatar">
              <img
                src={avatar}
                alt={"avatar"}
                className="crayons-avatar__image"
              />
            </a>
          </div>
          <div>
            <div>
              <a href="/#" class="crayons-story__secondary fw-medium m:hidden">
                {name}
              </a>
            </div>
            <a href="/#" class="crayons-story__tertiary fs-xs">
              <time>Nov 21</time>
            </a>
          </div>
        </div>
        <div class="crayons-story__indention">
          <h2 class="crayons-story__title">{title}</h2>
          {children}
          <div class="crayons-story__bottom">
            <div class="crayons-story__details">
              Likes: {likes} {"  "}
              {"  "}
              {"  "}
              Comments: {comments}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
