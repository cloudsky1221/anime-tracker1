import PropTypes from "prop-types"

function Delete({setDots, setDeleteButton, deleteItem}) {

  function handleClick(e) {
    setDots(true)
    setDeleteButton(false)
    deleteItem(parseInt(e.target.parentNode.firstChild.getAttribute("data-id")))
  }
  return (
    <button aria-roledescription="delete the current item from the list" onClick={handleClick}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.667 35C10.7503 35 9.96533 34.6733 9.31199 34.02C8.65866 33.3667 8.33255 32.5822 8.33366 31.6667V10H6.66699V6.66667H15.0003V5H25.0003V6.66667H33.3337V10H31.667V31.6667C31.667 32.5833 31.3403 33.3683 30.687 34.0217C30.0337 34.675 29.2492 35.0011 28.3337 35H11.667ZM28.3337 10H11.667V31.6667H28.3337V10ZM15.0003 28.3333H18.3337V13.3333H15.0003V28.3333ZM21.667 28.3333H25.0003V13.3333H21.667V28.3333Z" fill="#FF4000"/>
        </svg>

    </button>
  )
}

export default Delete

Delete.propTypes = {
  setDots:PropTypes.func,
  setDeleteButton:PropTypes.func,
  deleteItem:PropTypes.func
}