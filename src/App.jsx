import { useEffect, useState } from "react"
import Button from "./components/Button"
import Post from "./components/Post"
import useFetch from "./hooks/useFetch"


function App() {
  const[number, setNumber]=useState(1)
  // const[post, setPost]=useState("")
  // const fetchPost = async(id) => {
  //   try{
  //     const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
  //     const data= await response.json()

  //     setPost(data)
  //   } catch(error){
  //     console.log(error)
  //   } finally{
  //     console.log('Done')
  //   }

  // }

  const {data}=useFetch('https://jsonplaceholder.typicode.com/posts/', number)

  // useEffect(()=>{
    // fetch('https://jsonplaceholder.typicode.com/posts/' + number)
    // .then((response) => response.json())
    // .then((data)=>setPost(data))
    // .catch((error)=> console.log(error))
    // fetchPost(number)
  // }, [number])

  useEffect(()=>{
    console.log("Mounted")
    return()=>{
      console.log('Remove')
    }
  },[])

  
  
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      {data && <Post title={data.title} body={data.body}/>}
      {number}
      <div className="flex items-center gap-3 mt-3">
      {Array.from({length:5}).map((value, index) => {
        return(
          <div key={`pagination-${index+1}`} className="p-4 border font-bold hover:cursor-pointer" onClick={()=> setNumber(index+1)}>
            {index+1}
            
          </div>
        )
      })}
      </div>

    </div>
    
      // {/* <h1>sdfsafasdf</h1> */}
      // {/* <Button variant="alternative"></Button>
      // <h4 className="font-bold text-xl">Hello</h4>
      // <Button variant="alternative" text="IGMG"/>
      //  */}
      //  <Post/>
      //  {/* <h1 class="bg-black w-50 h-50 text-yellow-200 text-center text">Hello hatdog</h1> */}
    
  )
}

export default App
