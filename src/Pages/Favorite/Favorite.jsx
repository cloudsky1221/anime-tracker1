import "./Favorite.css";

import data from "../../current.json";
import { useState } from "react";

function debounce() {
  let dbtimer;
  return (a, fakeData, setSearchBox) => {
    clearInterval(dbtimer);
    dbtimer = setTimeout(() => {
      if (a.length < 1) {
        setSearchBox([]);
        return;
      }
      const another = fakeData?.filter((e) =>
        e?.title.toLowerCase().includes(a.toLowerCase())
      );
      console.log(another);
      setSearchBox(another);
      return;
    }, 2000);
  };
}

const fc = debounce();

function Favorite() {
  const [fakeData] = useState(data.data);

  const [searchBox, setSearchBox] = useState([]);

  function handleChange(e) {
    e.preventDefault();
    const text = e.target.value;
    fc(text, fakeData, setSearchBox);
  }

  function score(index) {
    // 🙂😐😔
    switch (true) {
      case index > 8 && index < 10:
        return "😃 " + index;

      case index > 5:
        return "😐 " + index;

      case index > 0:
        return "🙁 " + index;

      case index === null:
      case index === undefined:
      case isNaN(index):
        return "🤔 not scored";
    }
  }
  return (
    <>
      <div className="search">
        <input type="text" id="search" onChange={handleChange} />
        {searchBox?.map((e, i) => (
          <a href="" className="boxin" key={i}>
            {e.title}
          </a>
        ))}
      </div>
      <ul>
        {fakeData?.map((e, i) => {
          // const pop = score(e?.score);
          // console.log(pop);
          return (
            <li key={i}>
              <div className="title">{e?.title}</div>
              <div className="info-box">
                <div className="status">{e?.status}</div>
                <div className="type">{e?.type}</div>
                <div className="source">{e?.source}</div>
                <div className="duration">{e?.duration}</div>
                <div className="rating">{e?.rating}</div>
                <div className="score">{score(e?.score)}</div>
                {e?.studios?.map((f, j) => (
                  <div className="studio" key={j}>
                    {f?.name}
                  </div>
                ))}
                {e?.genres?.map((g, k) => (
                  <div className="genres" key={k}>
                    {g?.name}
                  </div>
                ))}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Favorite;
