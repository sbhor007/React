import Chai from "./chai"; // inpoting chai componunt or function
                  //  (./chai -> file name)

function App() {

  const username = 'Santosh'
  return (
    <>
    <Chai/>
    <h1>With | {username}</h1>  {/* inject/use variables using --{variable}-- it is an evaluated expretion (final Outcome/Output)  */}
    </>
  )
}

export default App
