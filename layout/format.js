import Navbar from '../components/navbar';

export default function Format({children}) {
  return (
    <>
      <Navbar>
      </Navbar>
      <main className="h-screen" style={{"background-color": "rgb(17 24 39)", "min-height" : "100%"}} > 
         {children}
      </main>
    </>
  )
}