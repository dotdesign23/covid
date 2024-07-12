import axios from "axios";
import { useState, useEffect } from "react";
import Box from "../components/Box/Box";
import Covido from "../components/Covido/Covido";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import DataTable from "../components/DataTable/DataTable";

function IndonesiaPage() {
  const [dataIndonesia, setdataIndonesia] = useState([]);
  const [dataRegions, setDataRegions] = useState([]);

  useEffect(() => {
    axios
      .get("https://covid-fe-2023.vercel.app/api/indonesia.json")
      .then((response) => {
        setdataIndonesia(response.data.indonesia);
        setDataRegions(response.data.regions);
      })
      .catch((error) => {
        console.error(error);
        alert("Error");
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Box />
      <Covido
        title="Indonesia Situation"
        subtitle="Data Covid Berdasarkan Indonesia"
        data={dataIndonesia}
      />
      <DataTable
        title="Situation by Provinces"
        subtitle="Data Covid Berdasarkan Provinsi"
        data={dataRegions}
      />
      <Footer />
    </div>
  );
}

export default IndonesiaPage;
