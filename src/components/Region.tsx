interface RegionProps {
  name: string;
  apiUrl: string;
}

const Region = (props: RegionProps) => (
  <li>
    {props.name}: {props.apiUrl}
  </li>
);

export default Region;
