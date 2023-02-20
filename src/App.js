import "./App.css";
import { Addtask } from "./Component/AddTask";
import { ListTask } from "./Component/ListTask";

function App() {
  return (
    <div className="appp">
      <br></br> <br></br>
    
      <div className="bkg">
        <Addtask />
        </div>
        <ListTask />
      
    </div>
  );
}

export default App;
