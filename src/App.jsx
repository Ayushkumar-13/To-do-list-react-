import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';


function App() {

   // todo is an input text.


  const [todo , setTodo] = useState("")

  // todos is an array which holds every todo



  const [todos , setTodos] = useState([])

useEffect (() => {
  let todoString = localStorage.getItem("todos")
  if (todoString){
  let todos = JSON.parse(localStorage.getItem("todos"))
  setTodos(todos)
  }
},[])

  const saveToLS = (params) => {
    
    localStorage.setItem("todos", JSON.stringify(todos) )
  }
  


  const handleEdit = (e, id) => {
  let t = todos.filter(i=>i.id === id)
    setTodo(t[0].todo)
  }


  const handleDelete = (e, id) => {

    let index = todos.findIndex(item=>{
      return item.id===id;
    })
  
  let newTodos = todos.filter(item => {
    return item.id !== id
  });
  
  setTodos(newTodos)
  saveToLS()

  }

  const handleAdd = () => {
   setTodos([...todos,{ id:uuidv4(), todo, isCompleted: false}])
   setTodo("")
   saveToLS()
  }
  
  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
  let id= e.target.name; 
  let index = todos.findIndex(item=>{
    return item.id===id;
  })

let newTodos = [...  todos];
newTodos[index].isCompleted = !newTodos[index].isCompleted
setTodos(newTodos)
saveToLS()
  }
  

  return (
    <>
      <Navbar />
      <div className="container mx-6 my-6 rounded-xl p-5 bg-violet-100 min-h-[80vh] ">
        <div className="addTodo  ">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input onChange={handleChange} value={todo}  type="text" className='w-1/2  ' />
          <button onClick={handleAdd} className='bg-violet-500 hover:bg-violet-700 px-2  py-0.5 text-base font-bold text-white rounded-md mx-6'>Add</button>
        </div >
       <h2 className='text-lg font-bold '>Your Todos</h2>

          <div className="todos">
          {todos.length===0 &&  <div> No todos to display </div> }
        {todos.map(item => {

          return<div key={item.id} className="todo flex w-1/4 my-3 justify-between">
            <div className='flex gap-4'>
            <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={todo.isCompleted}  id="" />
          <div className={item.isCompleted ? "line-through" : ""}> {item.todo}</div>
          </div>
          <div className="buttons flex h-full">
            <button onClick={(e) => handleEdit(e,item.id)} className='bg-violet-500 hover:bg-violet-700 px-2  py-0.5 text-base font-bold text-white rounded-md mx-6'>Edit</button>
            <button onClick={(e)=> {handleDelete (e,item.id)}} className='bg-violet-500 hover:bg-violet-700 px-2  py-0.5 text-base font-bold text-white rounded-md mx-6'>Delete</button>
          </div>
         </div>
          })}
        
        

       </div>
        </div>
      
                                
    </>
  )
}

export default App
