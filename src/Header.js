import parrot from "./parrot.jpg";

export default function Header() {
  return (
    <>
      <div className=" container container-fluid position-absolute  top-0 end-0 ">
        <img src={parrot} alt="parrot-logo" className="parrotLogo float-end" />

        <h1 className="float-end " style={{ color: "red" }}>
          Parrot
        </h1>
        <form className="d-flex align-center w-25  searchForm ">
          <input
            className="form-control me-2 "
            type="search"
            placeholder="Search keyword"
            aria-label="Search"
          />
          <button class="btn btn-danger" type="submit">
            Search
          </button>
        </form>
      </div>
    </>
  );
}
