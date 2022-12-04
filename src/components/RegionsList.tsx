import RegionItem from "./RegionItem";

interface RegionsListProps {
  regions: string[];
}

const RegionsList = (props: RegionsListProps) => {
  return (
    <ul>
      {props.regions.map((region: string) => (
        <RegionItem name={region} key={region} />
      ))}
    </ul>
  );
};

export default RegionsList;
