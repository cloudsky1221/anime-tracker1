import PropTypes from "prop-types"

import Delete from "../Buttons/Delete/Delete"
import Edit from "../Buttons/Edit/Edit"
import InputText from "../Buttons/InputText/InputText"

function EditBox({id, dispatch, setClicks}) {
  return (
    <>
      <InputText id={id} dispatch={dispatch}/>
      <Edit id={id} dispatch={dispatch} setClicks={setClicks}/>
      <Delete id={id} dispatch={dispatch} setClicks={setClicks}/>
    </>
  )
}

export default EditBox

EditBox.propTypes = {
    id:PropTypes.number,
    dispatch:PropTypes.func,
    setClicks:PropTypes.func
  }