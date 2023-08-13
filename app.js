import React from "react"
import ReactDOM from "react-dom/client"
// React.createElement => object => html(dom)
// const heading = React.createElement(
//     "h1",
//     { id : "title",
//     key:"h1"  
//     },
//     "heading 1 for parcel"
// )

// this is simple react element
const head = (
 <h1 id="title" key="h2">app2.js
    namaste react
 </h1>)

 //React Component

 // functional comp is normal function which returns react element or jsx code

 const Title = ()=>(
    <>
     <h1>this is title</h1>
     <h2> hello akshay bhaiya</h2>
    </>
    
 )
    
 const stringxyz = "xyz"
 const HeadingComponent = ()=>{
    
   return(
     <div>
        {console.log("akasay")}
        {stringxyz} 
         {head}
         <Title/>
         {Title()}
         <h1>this is  my fist Component</h1>
         <h2> hello all world</h2>
        
    </div>  
   )
    
 }

//  function Aj(){
//   return(
//     <>
//     <h3>this is new fun</h3>
//     <h4>this is also a new function</h4>
//     </>
//   )
//  }

//  const HeadingComponent2 = () =>(
//     <div>
//     <h1>this is  my fist Component</h1>
//     <h2> hello all world</h2>
// </div>
//  )

const  root = ReactDOM.createRoot(document.getElementById("root"))

// #TO render react element we use this 
root.render(head)

// to render functional component we use
root.render(<HeadingComponent/>) 