import Homepage from "./pages/Homepage";
import { EditModalProvider } from "./context/EditModalCtx";
import { DeleteModalProvider } from "./context/DeleteModalCtx";

function App() {
  return (
    <div className="App">
      <DeleteModalProvider>
        <EditModalProvider>
          <Homepage />
        </EditModalProvider>
      </DeleteModalProvider>
    </div>
  );
}

export default App;
