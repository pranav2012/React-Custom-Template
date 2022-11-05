import MultilineTextFields from "../elements/myDropdown";
import CustomizedTables from "../elements/myTable";
import React, {useEffect, useState} from "react";
import {Line} from "react-chartjs-2"
import {
  Chart as ChartJS,
  registerables,
} from 'chart.js';
import 'chartjs-adapter-date-fns';
//this sets the display language. In the documentation it uses "de", which will display dates in German.
ChartJS.register(...registerables);

function App() {

  const [data, setdata] = useState([]);
  const [activeType, setActiveType] = useState("All");
  const [chartData, setChartData] = useState({});

  const fetchData = async () => {
    const res = await fetch('http://fetest.pangeatech.net/data');
    const data = await res.json();
    setdata(data);
    setChartData( {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: 
      [
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
    });
  }

  useEffect(() => {
   fetchData();
  }, [])
  
  return (
    <div className="">
    <div className="flex items-center justify-between w-full bg-gray-100 p-4">
      <MultilineTextFields setActiveType={setActiveType} revenuetype={[...new Set(data.map(e=>e.revenue_type.split('-')[1]))].map(e2=>{
        return {
          value:e2,
          label:e2
        }
      })}/>
      <p>Hi John Doe</p>
    </div>
    <div className="mx-auto max-w-[1280px]">
    <Line data={chartData} options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }} />
    <CustomizedTables data={data} activeType={activeType}/>
    </div>
    </div>
  );
}

export default App;
