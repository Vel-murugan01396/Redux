import Form from "./Form";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./Login";


function App() {
  return (<>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Form/>}> </Route>
    <Route path="/login" element={<Login/>}> </Route>
  </Routes>
  
  </BrowserRouter>
   
    
    
    {/* <Form/> */}
    </>
  );
}

export default App;
