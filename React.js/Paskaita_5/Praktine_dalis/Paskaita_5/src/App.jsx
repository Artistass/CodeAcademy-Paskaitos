import { useEffect, useState } from 'react'
import './App.css'
import Body from './assets/components/Body/Body';

function App() {

//   const [data, setData] = useState(null);

//   function getData () {
//  fetch("https://jsonplaceholder.typicode.com/users/3")
//  .then(res => res.json())
//  .then(res => {
//   console.log(res);
//   setData(res)
//  })
//   }

//   return (
//     <div className='app'>
//       <div className='infoContainer'>
//       <h1>User name: {data && data.name}</h1>
//       <h1>Email: {data && data.email}</h1>
//       <h1>Phone: {data && data.phone}</h1>
//       <h1>City: {data && data.address.city}</h1>
//       <h1>CatchPhrase: {data && data.company.catchPhrase}</h1>
//       </div>
      
//       <button onClick={getData} >Get User</button>
//     </div>
//   )

  // ///


  // return (
  //   <div className="app">
  //     <div className='infoContainer'>
  //       {data ? (
  //         <div className="userCard">
  //           <h1 className="userName">User name: {data.name}</h1>
  //           <p>Email: {data.email}</p>
  //           <p>Phone: {data.phone}</p>
  //           <p>City: {data.address.city}</p>
  //           <p>CatchPhrase: {data.company.catchPhrase}</p>
  //         </div>
  //       ) : (
  //         <p>Click the button to fetch user data</p>
  //       )}
  //     </div>
  //     <button className="getDataButton" onClick={getData}>Get User</button>
  //   </div>
  // );


//    const [data, setData] = useState([]);

//    useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//     .then(res => res.json())
//     .then(res => {
//       setData(res)
//       console.log(res);
//     })
//    }, [])


//   // return (
//   //   <div>
//   //     <div>
//   //       {data.map((x,) => <img key={x.id} src={x.image}></img>)}
//   //     </div>
//   //     <div>
//   //       {data.map((x,) => <div key={x.id} >{x.title}</div>)}
//   //     </div>
//   //     <div>
//   //       {data.map((x,) => <div key={x.id} >{x.price}</div>)}
//   //     </div>
//   //     <div>
//   //       {data.map((x,) => <div key={x.id} >{x.category}</div>)}
//   //     </div>
//   //   </div>
//   // )

//   /////

//   return (
//     <div className="app">
//       <div className="productGrid">
//         {data.map(product => (
//           <div key={product.id} className="productCard">
//             <img src={product.image} alt={product.title} className="productImage" />
//             <div className="productInfo">
//               <h2 className="productTitle">{product.title}</h2>
//               <p className="productPrice">${product.price}</p>
//               <p className="productCategory">{product.category}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

const [data, setData] = useState([]);

useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/comments")
      .then(res => res.json())
      .then(res => {
        setData(res)
        console.log(res);
      })
     }, [])

return (
  <div>
<div className='container'>
  {data.map((x) => <Body key={x.id} comments={x}/>)}
  </div>
  </div>
)
}

export default App
