import MultilineTextFields from "../elements/myDropdown";
import CustomizedTables from "../elements/myTable";
import "../styles/output.css"
import {Line} from "react-chartjs-2"
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774"
    }
  ]
};
function App() {
  return (
    <div className="p4">
    <div className="flex items-center justify-between w-full bg-grey">
      <MultilineTextFields/>
      <p>Hi John Dow</p>
    </div>
    {/* <Line data={data} /> */}
    <CustomizedTables/>
    </div>
  );
}

export default App;
