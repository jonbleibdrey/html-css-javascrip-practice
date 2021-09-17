import React, {useState} from 'react'

const Body = () => {
  const [toggle, setToggle] = useState(false)

  

    return (
        <>
        <div>
            <button onClick={()=> setToggle(!toggle)}>Options 
            </button> 
        </div>
        <div>
        {toggle ? (
            <div style={{backgroundColor:"blue",boxShadow:"7px 10px 20px 1px",borderRadius:"20px" , padding:"20px", width:"200px", marginLeft:"45%", marginTop:"20px"}}>
            <select name="" id="">
                <option value="">about</option>
                <option value="">create</option>
                <option value="">read</option>
            </select>
            </div>
             ) : (
            null
            )}
        </div>
        </>
    )
}

export default Body
