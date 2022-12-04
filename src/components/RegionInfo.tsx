import { useParams } from "react-router-dom";

const RegionInfo = () => {
  const { regionName } = useParams();
  return <div>{regionName}</div>;
};

export default RegionInfo;
