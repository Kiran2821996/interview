import React,{useState,useEffect} from "react";

function App() {
    const [recievedData,setRecievedData]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts/")
        .then(res=>res.json())
        .then(data=>setRecievedData(data))
    })
    return(
        {recievedData.map((elemnet)=>{
        <h1 key={element.id}>{elemnet}</h1>
        })}
    )
} 
export default App()


//store


//slice
const slice=createSlice({
    name:"slice",
    initialValues:Boolean,
    action:(state,action)
})
)

//app