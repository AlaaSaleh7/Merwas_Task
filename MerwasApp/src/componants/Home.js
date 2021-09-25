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
  let cards = [
    {
      title: " Kiwi Spotting Tour &amp; Stay for Two People",
      text: "Kapiti Island Nature Tours",
      word: "Wellington",
      oldPrice: "$790",
      newPrice: " $499",
      bought: 79,
      img: "//main-cdn.grabone.co.nz/goimage/495x343/8666386e76e761c42bf3bdef48a3007819885416.jpg",
    },
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
            <ul class="list-group" style={{ width: "18rem" }}>
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
          {cards.map((card) => {
            return (
              <div className="col-4">
                <div class="card" style={{ width: "32rem" }}>
                  <img
                    alt="One-Night Midweek Kiwi Spotting Tour &amp; Stay for Two People on Kapiti Island incl. Ferry Transport, Introductory Talk, DOC Permits, Dinner, Breakfast &amp; Lunch - Three Options Available"
                    src={card.img}
                  />
                  <div class="card-body">
                    <h4 class="card-title">{card.title}</h4>
                    <span class="card-text">{card.text}</span>
                    <br />
                    <span
                      style={{
                        fontWeight: "300",
                        color: "#92a2ad",
                      }}
                    >
                      {card.word}
                    </span>
                    <div>
                      <span id="from">from</span>
                    </div>

                    <div id="twoPrice">
                      <span
                        style={{
                          fontSize: "14px",
                          textDecoration: "line-through",
                          color: "#727986",
                          textAlign: "right",
                        }}
                      >
                        {card.oldPrice}
                      </span>
                      <span className="price">{card.newPrice}</span>
                    </div>
                    <div class="bought">{card.bought} bought</div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="col-4">
            <div class="card" style={{ width: "32rem", marginLeft: "10.5rem" }}>
              <img
                alt="Mesh Reusable Face Mask with Dual Respirators - Option for Three or Five Masks"
                src="//main-cdn.grabone.co.nz/goimage/495x343/32286725841603f9c33fc6257a8b797d24738be8.jpg"
              />
              <div class="card-body">
                <h5 class="card-title">Mesh Reusable Face Mask</h5>
                <p class="card-text"></p>
                <br/>
                <br/>
                <div id="twoPrice">
                      <span
                        style={{
                          fontSize: "14px",
                          textDecoration: "line-through",
                          color: "#727986",
                          textAlign: "right",
                        }}
                      >
                       
                      </span>
                      <div>
                      <span id="from">from</span>
                    </div>
                      <span className="price">$9</span>
                    </div>
                    <div class="bought">43 bought</div>
                  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
