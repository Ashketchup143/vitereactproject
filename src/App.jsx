import Button from "./components/Button"
import Post from "./components/Post"


function App() {

  console.log(Array.from({length:5}))
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <Post/>
      <div className="flex items-center gap-3 mt-3">
      {Array.from({length:5}).map((value, index) => {
        return(
          <div className="p-4 border font-bold hover:cursor-pointer">
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
