import AppBody from "./AppBody";
import AppHeader from "./Components/AppHeader";
import { GlobalStyleLayer } from "./Globalstyles/GlobalstyleLayer";

function App() {
  return (
    <div>
      <GlobalStyleLayer/>
        <AppHeader />
          <AppBody/>
    </div>
  );
}

export default App;
