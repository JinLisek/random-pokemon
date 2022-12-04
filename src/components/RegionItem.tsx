import { Link } from "react-router-dom";

interface RegionProps {
  name: string;
}

const RegionItem = (props: RegionProps) => (
  <li>
    <Link to={`regions/${props.name}`}>{props.name}</Link>
  </li>
);

export default RegionItem;
