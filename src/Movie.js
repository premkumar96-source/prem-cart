import vijay from "./assets/vijay.jpg";
import hollywood from "./assets/Movie.jpg";
function Movie() {
  return (
    <div className="movie-container">
      <div>
        <h1>MOVIE MANIA</h1>
      </div>
      <div className="search-container">
        <input
          type="search"
          className="searchField"
          placeholder="Search a movie"
        />
      </div>
      <div className="container movie-con">
        <div className="row movie-list">
          <div className="col-4 grid-class">
            <div className="movies-img">
              <img src={vijay} width="100%" height="100%" />
              <p style={{ textAlign: "start" }}>texterfreergtrgtrgrtgtrbgr</p>
            </div>
          </div>
          <div className="col-4 grid-class">
            <div className="movies-img">
              <img src={vijay} width="100%" height="100%" />
              <p style={{ textAlign: "start" }}>texterfreergtrgtrgrtgtrbgr</p>
            </div>
          </div>
          <div className="col-4 grid-class">
            <div className="movies-img">
              <img src={vijay} width="100%" height="100%" />
              <p style={{ textAlign: "start" }}>texterbgr</p>
            </div>
          </div>
          <div className="col-4 grid-class">
            <div className="movies-img">
              <img src={hollywood} width="100%" height="100%" />
              <p style={{ textAlign: "start" }}>13 23e2 2e2 2e 34rf3r3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Movie;
