import { useEffect, useReducer, useState } from "react";

import "./AlternateRanking.css";
import EditBox from "../../Components/EditBox/EditBox";

function reducer(state, action) {
  const newNumber = state.dataArray.length + 1;
  switch (action.type) {
    case "addItem":
      return {
        dataArray: [
          ...state.dataArray,
          { rank: newNumber, title: "", dots: true, editMode: false },
        ],
        rankLimit: newNumber,
      };

    case "deleteItem":
      return {
        dataArray: state.dataArray
          .filter((e) => e.rank !== action.id)
          .map((e) => {
            if (e.rank < action.id) return e;
            return { ...e, rank: e.rank - 1 };
          }),
        rankLimit: state.rankLimit - 1,
      };

    case "editItem":
      return {
        dataArray: state.dataArray.map((e) => {
          if (e.rank !== action.id) return e;
          return { ...e, title: action.text, dots: true, editMode: false };
        }),
        rankLimit: state.rankLimit,
      };

    case "editMode":
      return {
        dataArray: state.dataArray.map((e) => {
          if (e.rank !== action.id) return e;
          return { ...e, dots: false, editMode: true };
        }),
        rankLimit: state.rankLimit,
      };

    case "editText":
      return {
        dataArray: state.dataArray.map((e) => {
          if (e.rank === action.id) {
            return { ...e, title: action.text };
          }
          return e;
        }),
        rankLimit: state.rankLimit,
      };
  }
}

function AlternateRanking() {
  const initialValue = JSON.parse(localStorage.getItem("rankings")) || [
    { rank: 1, title: "", dots: true, editMode: false },
  ];

  const [state, dispatch] = useReducer(reducer, {
    dataArray: initialValue,
    rankLimit: 1,
  });

  const [clicks, setClicks] = useState(true);

  useEffect(() => {
    localStorage.setItem("rankings", JSON.stringify(state.dataArray));
  }, [clicks]);

  function showMore(id) {
    dispatch({
      type: "editMode",
      id,
    });
  }

  function handleAdd() {
    dispatch({
      type: "addItem",
    });
  }

  return (
    <>
      {/* <div className="heading">
        <h2>Heading</h2>
      </div> */}
      <ul>
        <li>
          <div className="heading">
            <h2>heading</h2>
          </div>
        </li>
        {state.dataArray.map((e, i) => {
          return (
            <li key={i}>
              <div className="rank" data-id={e?.rank}>
                # {e?.rank}
              </div>
              <div className="image"></div>
              <div className="title">{e?.title}</div>
              {e.dots && (
                <button
                  className="buttons"
                  aria-roledescription="show edit and delete button"
                  onClick={() => showMore(e?.rank)}
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 34C22.2091 34 24 32.2091 24 30C24 27.7909 22.2091 26 20 26C17.7909 26 16 27.7909 16 30C16 32.2091 17.7909 34 20 34Z"
                      fill="#FF4000"
                    />
                    <path
                      d="M20 24C22.2091 24 24 22.2091 24 20C24 17.7909 22.2091 16 20 16C17.7909 16 16 17.7909 16 20C16 22.2091 17.7909 24 20 24Z"
                      fill="#FF4000"
                    />
                    <path
                      d="M20 14C22.2091 14 24 12.2091 24 10C24 7.79086 22.2091 6 20 6C17.7909 6 16 7.79086 16 10C16 12.2091 17.7909 14 20 14Z"
                      fill="#FF4000"
                    />
                  </svg>
                </button>
              )}
              {e.editMode && (
                <div className="edits">
                  <EditBox
                    id={e?.rank}
                    dispatch={dispatch}
                    setClicks={setClicks}
                  />
                </div>
              )}
            </li>
          );
        })}
      </ul>
      <br />
      {state.rankLimit < 10 && (
        <button
          className="add"
          aria-roledescription="Add more to rankings"
          onClick={handleAdd}
        >
          Add
        </button>
      )}
    </>
  );
}

export default AlternateRanking;
