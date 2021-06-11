import parrot from "./parrot.jpg";

export default function Header() {
  return (
    <div class="container-fluid header-part d-flex">
      <div className="me-auto">
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search keyword"
            aria-label="Search"
            name="search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="  justify-content-end ">
        <h1 className="align-self-center">Parrot</h1>
        <img src={parrot} alt="parrot-logo" className="parrotLogo" />
      </div>
    </div>
  );
}
