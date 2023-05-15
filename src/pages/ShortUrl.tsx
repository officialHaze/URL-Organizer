import { useParams } from "react-router-dom";
import { useState, useMemo } from "react";
import { axiosInstance } from "../lib/axiosConfig";
import "./ShortUrl.css";

interface ShortUrlInstance {
  link: string;
  logo: string;
}

export default function ShortUrl() {
  const { urlId } = useParams();
  const [urlList, setUrlList] = useState<ShortUrlInstance[] | null>(null);
  useMemo(() => {
    axiosInstance
      .get(`/${urlId}/`)
      .then((res) => {
        setUrlList(res.data.links);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [urlId]);
  return (
    <main
      className="main"
      style={{
        backgroundImage: "url('https://wallpaperaccess.com/full/6272395.gif')",
        justifyContent: "center",
      }}
    >
      <div className="short-url-list-container">
        <div className="short-url-container">
          {urlList?.map((instance, i) => {
            return (
              <div className="short-url-wrapper" key={i}>
                <div className="site-logo-wrapper">
                  <img
                    className="site-logo"
                    src={instance.logo}
                    alt="site logo"
                  />
                </div>
                <a href={instance.link}>{instance.link}</a>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
