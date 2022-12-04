import RegionItem from "./RegionItem";
import RegionApiData from "./RegionApiData";

interface RegionsListProps {
  regions: RegionApiData[];
}

const RegionsList = (props: RegionsListProps) => {
  return (
    <ul>
      {props.regions.map((region: RegionApiData) => (
        <RegionItem name={region.name} apiUrl={region.url} key={region.name} />
      ))}
    </ul>
  );
};

export default RegionsList;
