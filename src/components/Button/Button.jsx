import { useHistory } from 'react-router-dom';

export default function Button() {
  const history = useHistory();

  return <button onClick={() => history.goBack()}>Go Back</button>;
}
