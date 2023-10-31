import PropTypes from "prop-types";

import "./EditMode.css";

function EditMode({ dispatch, id }) {
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const fullList = Object.fromEntries(data);

    dispatch({
      type: "edit",
      id: id,
      heading: fullList.heading,
      names: [
        fullList.first,
        fullList.second,
        fullList.third,
        fullList.fourth,
        fullList.fifth,
      ],
      // editMode: false,
    });
  }
  return (
    <>
      <h1>edits</h1>
      <form className="ranking-form" onSubmit={handleSubmit}>
        <label htmlFor="heading" />
        <input type="text" name="heading" placeholder="heading" />
        <label htmlFor="first" />
        <input type="text" name="first" placeholder="first" />
        <label htmlFor="second" />
        <input type="text" name="second" placeholder="second" />
        <label htmlFor="third" />
        <input type="text" name="third" placeholder="third" />
        <label htmlFor="fourth" />
        <input type="text" name="fourth" placeholder="fourth" />
        <label htmlFor="fifth" />
        <input type="text" name="fifth" placeholder="fifth" />
        <button type="submit">Edit</button>
      </form>
    </>
  );
}

export default EditMode;

EditMode.propTypes = {
  dispatch: PropTypes.func,
  id: PropTypes.number,
};
