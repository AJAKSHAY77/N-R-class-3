import React from "react"
import  ReactDOM from "react-dom"


const Title = ()=>(
    
    <>
       <a href="/">

      <img className="img"
       alt="Food_villa"
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUgV4ITetYVZB2Pzbp_3k-feriyr6obtnk0g&usqp=CAU"/>

      </a>
    </>  
      
)
// const styleobj = {
//     backgroundColor : "red"
// }
const HeaderComponent = ()=>(
    <div className="heading">
    <Title/>
    <div className="nav-list">
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>

    </div>
)

const Burger  = {
    image :"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/gqw0tko9ewge1fsfr2wi",
    name:"Burger King",
    cousines:["Burgers","American"],
    rating:"4.2"
}

const Restaurantcard= ()=>(
    
        <div className="card">
         <img src={Burger.image}/>
          <h2>{Burger.name}</h2>
          <h3>{Burger.cousines.join(", ")}</h3> 
          <h4>{Burger.rating}stars</h4> 

        </div>
    
)



const Body = ()=>(
   <div className="restlist">
    <Restaurantcard/>
    <Restaurantcard/>
    <Restaurantcard/>
    <Restaurantcard/>
    <Restaurantcard/>
    <Restaurantcard/>
    <Restaurantcard/>
    <Restaurantcard/>
    <Restaurantcard/>
    <Restaurantcard/>
    <Restaurantcard/>
    <Restaurantcard/>
    <Restaurantcard/>
    <Restaurantcard/>
    <Restaurantcard/>
    <Restaurantcard/>
    <Restaurantcard/>
    <Restaurantcard/>
    <Restaurantcard/>
    <Restaurantcard/>
    <Restaurantcard/>
   </div>
)
const Footer = ()=>{
    return(
        <>
         <h1>Footer</h1>
        </> 
    )
    }


const Applayout =()=>(  
   
    <>
    <HeaderComponent/>
    <Body/>
    <Footer/>
    </>

     
)




const  root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Applayout/>)
