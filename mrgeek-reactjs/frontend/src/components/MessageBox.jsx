import Alert from 'react-bootstrap/Alert';

function MessageBox(props) {
  return (
 <Alert variant={props.variant || 'info'}>{props.childre}</Alert>
  );
}

export default MessageBox;
