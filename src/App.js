import { useSelector, useDispatch } from "react-redux";
import { deleteData } from "./store/actions/detailsAction";

function App() {
     const state = useSelector((state) => state.details);
     const dispatch = useDispatch();
     return (
          <div className="App">
               <ul>
                    {state.map((person) => {
                         return <li key={person.id}>{person.name}</li>;
                    })}
               </ul>
               <button onClick={() => dispatch(deleteData())}>Clear All</button>
          </div>
     );
}

export default App;
