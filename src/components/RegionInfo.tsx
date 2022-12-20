import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

interface LocationApiData {
  name: string;
  url: string;
}

const getLocations = async (regionName: string) => {
  let resp = await axios.get(`https://pokeapi.co/api/v2/region/${regionName}`);
  console.log(resp.data.locations);
  return resp.data.locations;
};

const RegionInfo = () => {
  const { regionName } = useParams();
  const [locations, setLocations] = useState<LocationApiData[]>([]);

  useEffect(() => {
    if (regionName == null) return;
    getLocations(regionName).then((newLocations) => setLocations(newLocations));
  }, [regionName]);

  return (
    <ul>
      {locations?.map((location: LocationApiData) => (
        <li>
          <Link to={`/locations/${location.name}`}>{location.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default RegionInfo;
