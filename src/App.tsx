import Button from "@mui/material/Button";
import { useModal } from "mui-modal-provider";
import SimpleDialog from "./SimpleDialog";

function App() {
  const { showModal } = useModal();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Vite</h1>
      <Button
        variant="contained"
        onClick={() => showModal(SimpleDialog)}
        color="primary"
      >
        simple dialog
      </Button>
    </div>
  );
}

export default App;
