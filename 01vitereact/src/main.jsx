/*
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custome App</h1>
    </div>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
)


/*
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custome App</h1>
    </div>
  )
}

// const ReactElement = {
//   type : 'a',
//   props : { // properties
//       href : 'https://google.com',
//       target : '_blank'
//   },
//   children : 'Click me to visite google'
// }

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visite google</a>
)

const anotherUser = 'chai aur react'

const ReactElement = React.createElement(
  'a',
  {href : 'https://google.com', target : '_blank'},
  'click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <>
    // <App/>
  //   <MyApp /> {/*it is an function*/ //}
  //             {/* MyApp() */}
    // anotherElement
    // ReactElement
  // </>,
//)
