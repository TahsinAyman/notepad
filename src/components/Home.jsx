function Home() {
  return (
    <>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 font-weight-normal">Notepad</h1>
          <p className="lead font-weight-normal">
            Make your own Notes for free. And Save it here. Totally Free
          </p>
          <a className="btn btn-outline-secondary" href="/notes/">
            Make your own notes now
          </a>
        </div>
        <div className="product-device box-shadow d-none d-md-block"></div>
        <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
      </div>
      <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
        <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">Notes</h2>
            <p className="lead">An Application to keep notes</p>
          </div>
          <div
            className="bg-light box-shadow mx-auto"
            style={{
              width: "80%",
              height: "300px",
              "border-radius": "21px 21px 0 0",
            }}
          ></div>
        </div>
        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Free for use</h2>
            <p className="lead">Good Editing for free</p>
          </div>
          <div
            className="bg-dark box-shadow mx-auto"
            style={{
              width: "80%",
              height: "300px",
              "border-radius": "21px 21px 0 0",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Home;
