
import React, { useEffect, useState } from 'react'
import axios from'axios'
export default function HTTP(){
    const[list,setList]=useState([])
    const[id,setId]=useState('')
    const[name,setName]=useState('')
    const[marks,setMarks]=useState(0)
    useEffect(()=>{
        axios.get('http://localhost:3001/students')
        
    .then(res=>{setList(res.data)})
    .catch(err=>{console.log(err)})
    },[])
//create operation
const handleSubmit=()=>{
    axios.post('http://localhost:3001/students',{
        id:id,name:name,marks:marks
    })
    .then(res=>{console.log(res)})
    .catch(err=>{console.log(err)})

}
//delete operation
const handleDelete=(id1)=>{
    axios.delete(`http://localhost:3001/students/${id1}`)
    .then(res=>{console.log(res)
    alert('DELETED SUCCESSFULLY')})
    .catch(err=>{console.log(err)})
}

return (
       <div>
        <h1>StaffPage</h1>
        <div className='form-1'>
            <form onSubmit={handleSubmit}>
                <label>ID:</label>
                <input type='text'value={id}
                onChange={(e)=>{setId(e.target.value)}}/>
                <br></br>
                <label>Name:</label>
                <input type='text'value={name}
                onChange={(e)=>{setName(e.target.value)}}/>
                <br></br>
                <label>Marks:</label>
                <input type='number' value={marks}
                onChange={(e)=>{setMarks(e.target.value)}}/>
                <br></br>
                <button type='submit'>Add data</button>
            </form>
        
        </div>
        {/*Table to display the userdata*/}
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Marks</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {list.map(x=>(
                    <tr key={x.id}>
                        <td>{x.id}</td>
                        <td>{x.name}</td>
                        <td>{x.marks}</td>
                    
                    <td>
                    <button>UPDATE</button>
                    <button onClick={()=>handleDelete(x.id)}>Delete</button>
                    </td>
                    </tr>
                ))}

            </tbody>
        </table>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>  

</div>
)
                                                                                                                                                                                               
}







