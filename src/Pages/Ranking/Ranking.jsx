import { useState } from "react"

import "./Ranking.css"
import Delete from "../../Components/Buttons/Delete/Delete"
import Edit from "../../Components/Buttons/Edit/Edit"

// const fakeData = [
//     {rank:1, title:"ore"},
//     {rank:2, title:"bore"},
//     // {rank:3, title:"bote"},
//     // {rank:4, title:"cote"},
//     // {rank:5, title:"dote"},
//   ]


function Ranking() {

  const [dataArray, setDataArray] = useState([{rank:1, title:""}])

  const [dots, setDots] = useState(true)
  const [deleteButton, setDeleteButton] = useState(false)

  function handleText(e) {
    e.preventDefault()
    const currentRank = parseInt(e.target.parentNode.firstChild.getAttribute("data-id"))

    const aa = dataArray.map(f => {
      if (currentRank === f.rank) {
        return {rank:f.rank, title:e.target.value}}
      return f
    })

    setDataArray(aa)
  }
  
  function showMore() {
    setDots(false)
    setDeleteButton(true)
  }

  function handleAdd() {
    setDataArray(prev => [...prev, {rank:dataArray.length + 1, title:""}])
  }

  return (
    <>
      <ul>
        {dataArray.map((e,i) => {
          return (
                <li key={i}>
                    <div className="rank" data-id={e?.rank}># {e?.rank}</div>
                    <div className="image"></div>
                    <div className="title">{e?.title}</div>
                    {/* <input type="text" onChange={handleText} /> */}
                    {dots && <button className="buttons" aria-roledescription="show edit and delete button" onClick={showMore}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 34C22.2091 34 24 32.2091 24 30C24 27.7909 22.2091 26 20 26C17.7909 26 16 27.7909 16 30C16 32.2091 17.7909 34 20 34Z" fill="#FF4000"/>
                            <path d="M20 24C22.2091 24 24 22.2091 24 20C24 17.7909 22.2091 16 20 16C17.7909 16 16 17.7909 16 20C16 22.2091 17.7909 24 20 24Z" fill="#FF4000"/>
                            <path d="M20 14C22.2091 14 24 12.2091 24 10C24 7.79086 22.2091 6 20 6C17.7909 6 16 7.79086 16 10C16 12.2091 17.7909 14 20 14Z" fill="#FF4000"/>
                        </svg>
                    </button>}
                    {deleteButton && 
                    <div className="edits">
                      <Edit setDots={setDots} setDeleteButton={setDeleteButton}/>
                      <Delete setDots={setDots} setDeleteButton={setDeleteButton}/>
                    </div>}
                </li>
            )
          })}
      </ul>
      <br />
      <button className="add" aria-roledescription="Add more to rankings" onClick={handleAdd}>Add</button>
    </>
  )
}

export default Ranking