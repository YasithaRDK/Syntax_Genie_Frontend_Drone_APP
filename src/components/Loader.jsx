import { Spinner } from "reactstrap";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center">
      <Spinner color="primary" />
    </div>
  );
};

export default Loader;
