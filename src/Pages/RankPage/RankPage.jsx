// rank characters, arcs, songs, etc.

import { useReducer, useState } from "react";
import EditMode from "../../Components/EditMode/EditMode";

import "./RankPage.css";

function reducer(state, action) {
  switch (action.type) {
    case "add": {
      return {
        contents: [
          ...state.contents,
          {
            heading: action.heading,
            names: action.names,
            editMode: action.editMode,
          },
        ],
      };
    }

    case "edit": {
      return {
        contents: state.contents.map((content, i) => {
          if (action.id === i)
            return {
              ...content,
              heading: action.heading,
              names: action.names,
              editMode: false,
            };
          return content;
        }),
      };
    }

    default: {
      return { contents: state.contents };
    }
  }
}

const initialValue = {
  contents: [
    {
      heading: "",
      names: ["", "", "", "", ""],
      editMode: false,
    },
  ],
};

function RankPage() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const [addNumber, setAddNumber] = useState(1);

  function addNewRankings(e) {
    e.preventDefault();
    dispatch({
      type: "add",
      heading: "",
      names: ["", "", "", "", ""],
      editMode: true,
    });
    setAddNumber((prev) => prev + 1);
  }

  return (
    <>
      <div className="rank-page">
        {state.contents.map((content, i) => {
          return (
            <div className="cover" key={i}>
              <div className="head">
                <h2>{content.heading}</h2>
              </div>
              <ul className="ranks">
                {content?.names?.map((name, j) => {
                  return (
                    <li key={j}>
                      <div className="rank" data-id={j + 1}>
                        # {j + 1}
                      </div>
                      <div className="name">{name}</div>
                    </li>
                  );
                })}
              </ul>
              {content.editMode && <EditMode dispatch={dispatch} id={i} />}
            </div>
          );
        })}
        {addNumber < 4 && (
          <button className="add" onClick={addNewRankings}>
            add
          </button>
        )}
      </div>
    </>
  );
}

export default RankPage;
