import { Form, Input } from "reactstrap";

const SearchInput = () => {
  return (
    <div className="d-flex justify-content-center">
      <Form className="search-form w-50">
        <Input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          width={75}
        />
      </Form>
    </div>
  );
};

export default SearchInput;
