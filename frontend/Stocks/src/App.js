import React from 'react';
import { Route, Routes} from "react-router-dom"
import DrugInputs from './pages/druginput';
import routes from './routes/routes';
import Showdrugs from './pages/showdrugs';


function App() {
  return (
    <div className="App"> 
    
<Routes>
    
   {routes.map((route) => (
                <Route
                path={route.path}
                element={route.e}
                />
               ))}
 </Routes>
    


    </div>
  
    
  
  );
}

export default App;
