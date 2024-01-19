import Alert from 'react-bootstrap/Alert';


const Alerts = ({ mensaje, color }) => {
  return (
    <Alert variant={color}>{mensaje}</Alert>
  )
}

export default Alerts;