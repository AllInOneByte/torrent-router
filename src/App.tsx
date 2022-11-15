import { ProgressBar } from "react-step-progress-bar";

function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        margin: 0,
        padding: 0,
        border: 0,
      }}
    >
      Hello
      <ProgressBar
        percent={75}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      />
    </div>
  );
}

export default App;
