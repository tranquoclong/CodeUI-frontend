import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPost } from "../../store/actions/post.action";

function Cards() {
  const pathname = window.location.pathname.slice(1);
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.post);
  useEffect(
    () => {
      dispatch(getPost(pathname));
    },
    // eslint-disable-next-line
    [pathname]
  );
  return (
    post && (
      <section className="cards-container cards-container--all">
        {post.list.length > 0
          ? post.list.map((post, index) => (
              <article
                className="card card--checkbox dark-background false"
                key={index}
              >
                <div className="card-content">
                  <style
                    dangerouslySetInnerHTML={{
                      __html: `.${"red" + post._id} ` + post.css,
                    }}
                  />
                  <Link
                    to={`/detail/${post._id}`}
                    className="clickable-wrapper"
                  >
                    <div
                      id="container"
                      className={`card__button-container ${"red" + post._id}`}
                      dangerouslySetInnerHTML={{ __html: post.html }}
                    ></div>
                  </Link>
                </div>
                <button type="submit" className="card__bookmark false">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1zm13 2H6v15.432l6-3.761 6 3.761V4z"
                    />
                  </svg>{" "}
                  <span>Save</span>
                </button>
                <div className="card__footer">
                  <a href="/profile/bimbx">
                    <span className="card__nickname text-color">
                      {post.postedBy.name}
                    </span>
                  </a>
                  <div className="card__views">1000 views</div>
                </div>
              </article>
            ))
          : "not found"}
      </section>
    )
  );
}

export default Cards;
