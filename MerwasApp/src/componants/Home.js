import "./Home.css";
function Home() {
  let list = [
    { Name: "Discover" },
    { Name: "Featured Auckland deals", quantity: 133 },
    { Name: "Collections", quantity: 47 },
    { Name: "Escapes", quantity: 73 },
    { Name: "Picked for You", quantity: "" },
    { Name: "Activities, Events & Outdoors", quantity: 88 },
    { Name: "Store", quantity: 1441 },
    { Name: "Restaurants, Bars, Cafes", quantity: 36 },
    { Name: "Beauty, Massage & Spa", quantity: 193 },
    { Name: "House & Garden", quantity: 725 },
    { Name: "Fitness & Sports", quantity: 81 },
    { Name: "Automotive", quantity: 46 },
  ];
  return (
    <div className="Home">
      <img
        id="image"
        src="https://mediacdn.grabone.co.nz/asset/yDjZTGuDg1"
        class="desktopheaderimage"
        alt="Spring Collection"
      ></img>
      <p>
        {" "}
        <span>Covid 19 Update:</span>Covid 19 Update: We encourage you to shop
        as normal for all your products but shipping delays may occur. Stay safe
        NZ!
      </p>
      <div className="container">
        <div class="row">
          <div className="col-3">
            <ul class="list-group"style={{width:"18rem"}}>
              {list.map((elem) => {
                return (
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    {elem.Name}
                    <span class="badge badge-pill">{elem.quantity}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-4">
            <div class="card" style={{ width: "32rem"}}>
              <img
                alt="One-Night Midweek Kiwi Spotting Tour &amp; Stay for Two People on Kapiti Island incl. Ferry Transport, Introductory Talk, DOC Permits, Dinner, Breakfast &amp; Lunch - Three Options Available"
                src="//main-cdn.grabone.co.nz/goimage/495x343/8666386e76e761c42bf3bdef48a3007819885416.jpg"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div class="card" style={{ width: "32rem",marginLeft: "10.5rem"}}>
              <img
                alt="Mesh Reusable Face Mask with Dual Respirators - Option for Three or Five Masks"
                src="//main-cdn.grabone.co.nz/goimage/495x343/32286725841603f9c33fc6257a8b797d24738be8.jpg"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
