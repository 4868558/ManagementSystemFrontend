import moment from "moment";
import "./styles.css";

import Calendar from "./components/Calendar";

export default function App() {
  let users = [
    {
      user: "Ivo",
      events: [
        {
          from: "08-09-2021",
          to: "10-09-2021"
        }
      ]
    }
  ];

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Calendar users={users} />
    </div>
  );
}
