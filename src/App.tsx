import { ClassState } from "./Components/ClassState";
import { UseState } from "./Components/UseState";
import { GlobalStyle } from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <UseState name="use State" />
      <ClassState name="Class State" />
    </>
  );
}

export default App;
