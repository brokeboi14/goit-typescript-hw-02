import css from './ErrorMessage.module.css';

interface ErrorMessageProps {}

const ErrorMessage: React.FC<ErrorMessageProps> = () => {
  return (
    <>
      <p className={css.errorMsg}>
        Something went wrong! Please, reload the page!
      </p>
    </>
  );
};

export default ErrorMessage;