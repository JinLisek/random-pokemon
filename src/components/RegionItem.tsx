interface RegionProps {
  name: string;
  apiUrl: string;
}

const RegionItem = (props: RegionProps) => (
  <li>
    {props.name}: {props.apiUrl}
  </li>
);

export default RegionItem;
