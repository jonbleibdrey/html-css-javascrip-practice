import React, {useState} from 'react'

const Body = () => {
  const [toggle, setToggle] = useState(false)

  

    return (
        <div>
            <button onClick={()=> setToggle(!toggle)}>Options 
            {toggle ? (
            <div>
            <select name="" id="">
                <option value="">about</option>
                <option value="">create</option>
                <option value="">read</option>
            </select>
            </div>
             ) : (
            null
            )}
            </button>
           
        </div>
    )
}

export default Body
