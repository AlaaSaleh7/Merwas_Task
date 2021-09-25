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
          <div className="col">
            <ul class="list-group">
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
          <div className="col">
            
          </div>
          <div className="col">3 of 3</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
