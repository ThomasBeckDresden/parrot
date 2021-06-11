import parrot from "./parrot.jpg";

export default function Header() {
  return (
    <>
      <div className="row justify-content-between p-3">
        <div className="col-4 align-self-end">
          <form className="row">
            <input
              className="form-control col m-3"
              type="search"
              placeholder="Search keyword"
              aria-label="Search"
              name="search"
            />
            <button class="btn btn-danger col m-3" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="col-2 ">
          <div className="row  justify-content-end">
            <div className="row">
              {" "}
              <img src={parrot} alt="parrot-logo" className="parrotLogo" />{" "}
            </div>
            <div className="row">
              <h1 className="" style={{ color: "red" }}>
                Parrot
              </h1>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
