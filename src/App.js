import { useEffect, useState } from "react";
import "./styles.css";
import dataSource from "./data/dataSource";
import RestaurantCard from "./components/RestaurantCard";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    dataSource().then((data) => setData(data));
  }, []);
  return (
    <div className="app">
      {data.map(({ resId, resName, resOpen, resScore }) => (
        <RestaurantCard
          key={resId}
          name={resName}
          isOpen={resOpen}
          score={resScore}
        />
      ))}
    </div>
  );
}
