import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import points from "../../../assets/images/point.svg";
import useQuery from "../../../hooks/useQuery";
function Creators() {
  const query = useQuery();
  const text = query.get("text");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      fetch(
        `${process.env.REACT_APP_API_URL}/users?page=1&perPage=10&name=${
          text || ""
        }`,
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result.list);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    };
    fetchData();
  }, [text]);
  return (
    <div className="creators-page">
      <h1 className="heading">Top Creators</h1>
      <section className="creators">
        {data.length > 0 ? (
          <>
            {data.map((user, index) => (
              <article className="creator" key={index}>
                <Link to={`/profile/${user.login}`}>
                  <img className="avatar" src={user.avatar_url} alt="" />
                </Link>
                <div className="aside">
                  <Link to={`/profile/${user.login}`} className="username">
                    {user.name}
                  </Link>
                  <div className="details">
                    <div className="points-tag">
                      <img src={points} alt="" /> 0
                    </div>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          fill="currentColor"
                          d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
                        />
                      </svg>
                      {user.location}
                    </span>
                  </div>
                </div>
                <Link
                  to={`/profile/${user.login}`}
                  className="button button--secondary"
                >
                  Visit profile
                </Link>
              </article>
            ))}
          </>
        ) : (
          "not found"
        )}
      </section>
      {/* <button className="button button--secondary">Show top 50</button> */}
    </div>
  );
}

export default Creators;
