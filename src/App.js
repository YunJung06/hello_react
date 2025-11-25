import Header from "./component/Header";
import DayList from "./component/DayList";
import Day from "./component/Day";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Error404Page from "./component/Error404Page";

function App() {
  return (
     <BrowserRouter>
      <div className="App">
          <Header/>
          <Routes>
            <Route exact path="/" element={ <DayList/> }/>
            <Route path="/day/:param_day" element={ <Day/> }/> 
            <Route path="/*" element={<Error404Page/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
