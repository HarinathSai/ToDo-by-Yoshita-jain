import React, { useState } from 'react'

const TodoList = () => {
  const [activity, setActivity] = useState('');
  const [listData, setlistData] = useState([])
  function addActivity() {
    // setlistData([...listData,activity])
    // console.log(listData) 
    // If we write code in this manner it will work asynchronously. 
    // It means, on first Click it will take empty arrey
    // on second Click it will take listData
    // on third click, it will take first item in list two times and add listData.

    setlistData((listData) => {
      const updatedList = [...listData, activity]
      setActivity('')
      return updatedList
    }
    )
  }

  function RemoveActivity(i) {
    const updatedListData = listData.filter((ele, id) => {

      return i !== id
    })
    setlistData(updatedListData)
  }

  function removeAll(){
    setlistData([])
  }
  return (
    <>
      <div className='container'>
        <div className='header'> ToDo List </div>
        <input type='text' placeholder='Add Task' value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}>Add</button>
        <p className='list-heading'>{setlistData}</p>
        {listData !== [] && listData.map((data, i) => {
          return (
            <>
              <p key={i}>
                <div className='listData'>
                  {data}
                </div>
                <div>
                  <button className='button-position' onClick={() => RemoveActivity(i)}> Remove(-) </button>
                </div>
              </p>
            </>
          )
        })}
        {listData.length >= 1 && <button onClick={removeAll}>Remove All</button>}
        
      </div>
    </>
  )
}

export default TodoList