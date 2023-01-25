import { ClassState } from "./Components/ClassState";
import { UseReducer } from "./Components/UseReducer";
import { GlobalStyle } from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <UseReducer name="use Reducer" />
      <ClassState name="Class State" />
    </>
  );
}

export default App;
