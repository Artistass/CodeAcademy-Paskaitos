import React from "react"

function Card({children, title}) {

  const childrenArray = React.Children.toArray(children);


  return (
    <div>
      <h1>{title}</h1>
      <div>
      {children}
      <div>{childrenArray[0]}</div>
      </div>
    </div>
  )
}

 function Header ({text}) {
  return (
    <>
    <h1>{text}</h1>
    <hr />
    </>
  )
}

function Body ({text}) {
  return (
    <>
    <h1>{text}</h1>
    <hr />
    </>
  )
}

Card.Header = Header
Card.Body = Body

export default Card;
