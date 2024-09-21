import { FallingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={css.loaderContainer} role="alert" aria-live="polite">
      <FallingLines
        color="#86c232"
        width="60"
        visible={true}
      />
    </div>
  );
};

export default Loader;