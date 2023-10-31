import PropTypes from "prop-types";

import "./Ranking.css";
import EditMode from "../../Components/EditMode/EditMode";

function Ranking({ contents }) {
  return (
    <>
      <ul>
        <li>{contents.heading}</li>
        {contents?.names?.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
      <EditMode />
    </>
  );
}

export default Ranking;

Ranking.propTypes = {
  contents: PropTypes.object,
};
