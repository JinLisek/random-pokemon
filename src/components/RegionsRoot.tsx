import axios from "axios";
import { useEffect, useState } from "react";
import RegionsList from "./RegionsList";
import RegionApiData from "./RegionApiData";

const getRegions = async () => {
  let resp = await axios.get("https://pokeapi.co/api/v2/region/");
  return resp.data.results.map((region: RegionApiData) => region.name);
};

const RegionsRoot = () => {
  const [regions, setRegions] = useState<string[]>([]);
  console.log(regions);

  useEffect(() => {
    getRegions().then((newRegions) => setRegions(newRegions));
  }, []);

  return <RegionsList regions={regions} />;
};

export default RegionsRoot;
