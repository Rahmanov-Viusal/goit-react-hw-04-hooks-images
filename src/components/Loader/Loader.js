import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function Preloader() {
  return (
    <div>
      <Loader type="Circles" color="#00BFFF" height={80} width={80} />
    </div>
  );
}
