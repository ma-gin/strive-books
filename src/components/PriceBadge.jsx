import { Badge } from "react-bootstrap"

const PriceBadge = (props) => <Badge variant={props.color}>€{props.text}</Badge>

export default PriceBadge
