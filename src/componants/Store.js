import React from 'react'

export default function Store() {
    // the rest of the cards
  let escapes = [
    {
      title: "Hoverboard with LED Light",
      text: "",
      word: "",
      oldPrice: "",
      newPrice: " $359",
      bought: 2,
      hoverText:" Hoverboard with LED Lights - Three Colours Available",
      img: "//main-cdn.grabone.co.nz/goimage/325x225/ed1615116597ae47171c2df81de9498a3336f96b.jpg",
    },
    {
      title: "Premium Christmas Tree",
      text: "",
      word: "",
      oldPrice: "",
      newPrice: " $35",
      bought: 17,
      hoverText:" Premium Christmas Tree - Four Sizes Available with Delivery or Pick-Up Options - Auckland Only",
      img: "//main-cdn.grabone.co.nz/goimage/325x225/2f7025214f7bf65cf0579af043feca719c0d2661.jpg",
    },
    {
      title: "Petersburg Dining Set",
      text: "",
      word: "",
      oldPrice: "$189",
      newPrice: " $79",
      bought: 62,
      hoverText:"Seven-Piece 600GSM Bamboo Cotton Bath Towel Set - Four Colours Available",
      img: "//main-cdn.grabone.co.nz/goimage/325x225/80594bbb96977547d972f194916b358351936428.jpg",
    },
    {
      title: "Petersburg Dining Set",
      text: "",
      word: "",
      oldPrice: "$1.229",
      newPrice: " $700",
      bought: "",
      hoverText:" Petersburg Seven Piece Dining Set",
      img: "//main-cdn.grabone.co.nz/goimage/325x225/17458de328093a180359f601e41f516786a9190b.jpg",
    },
  ];
// another array to activity
let activities = [
  {
    title: "One Drink &amp; Doughnut",
    text: "Epiphany Café St Lukes &amp; Manukau",
    word: "Christchurch",
    oldPrice: "",
    newPrice: " $7.98",
    bought: 567,
    hoverText:" Any One Regular Frappe, Smoothie, Iced Tea or Iced Drink incl. a Doughnut - Two Locations Available",
    img: "//main-cdn.grabone.co.nz/goimage/325x225/aa2fbeca232b63136d933b7fcd07757183cf09b6.jpg",
  },
  {
    title: "Dig into a Meal at The Lodge Cafe",
    text: "Rydges Wellington Airport",
    word: "Wellington City",
    oldPrice: "",
    newPrice: " $38",
    bought: 22,
    hoverText:"Two Breakfast Meals for Two People - Option for Lunch",
    img: "//main-cdn.grabone.co.nz/goimage/325x225/778d6c8ff16064e42f672161db4aab5c78cbd04c.jpg",
  },
  {
    title: "Coffee of Any Size",
    text: "Epiphany Café St Lukes &amp; Manukau",
    word: "Frankton",
    oldPrice: "",
    newPrice: " $3.50",
    bought: 282,
    hoverText:"One Coffee of Any Size - Options for Two or Four Coffees",
    img: "//main-cdn.grabone.co.nz/goimage/325x225/785a41696cfd9d0c8dfceed8eed432dd31952dba.jpg",
  },
  {
    title: "Watergarden Entry &amp; 10% off Food ",
    text: "Rydges Lakeland",
    word: "Queenstown",
    oldPrice: "$16",
    newPrice: " $8",
    bought: 46,
    hoverText:"Entry For Two Adults incl. 10% off Food &amp; Drinks at The Frog &amp; Lily Cafe - Options for One Child or Family of up to Five People",
    img: "//main-cdn.grabone.co.nz/goimage/325x225/b9482ac1bb587459e1ab17030ecd969184d50082.jpg",
  },
]; 
  return (
    <div>
      <div className="headerBtn">
        <span className="header" style={{marginTop:"20px"}}>Store</span>
        <button type="button" class="btn btn" id="buttonMore" style={{marginTop:"20px"}}>
          view more ..{" "}
        </button>
      </div>
      <div class="row" id="rowCards">
        {escapes.map((card) => {
          return (
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div
                class="card"
                style={{
                  width: "22rem",
                  marginLeft: "2rem",
                  marginTop: "1rem",
                }}
              >
                 <div class="card-img-top"><img src={card.img} class="card-img-top" alt="..."/></div>
                <p class="text-hover">{card.hoverText}</p>
                <div className="heart">
                  <svg
                    style={{
                      top: "4px",
                      right: "4px",
                      opacity: "1",
                      position: "absolute",
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    class="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                </div>
                <div class="card-body">
                  <h5 class="card-title">{card.title}</h5>
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
      </div>
{/* Activity */}
<div className="headerBtn">
        <span className="header" style={{marginTop:"20px"}}>Restaurants, Bars, Cafes </span>
        <button type="button" class="btn btn" id="buttonMore" style={{marginTop:"20px"}}>
          view more ..{" "}
        </button>
      </div>
      <div class="row" id="rowCards">
        {activities.map((activity) => {
          return (
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div
                class="card"
                style={{
                  width: "22rem",
                  marginLeft: "2rem",
                  marginTop: "1rem",
                }}
              >
                 <div class="card-img-top"><img src={activity.img} class="card-img-top" alt="..."/></div>
                <p class="text-hover">{activity.hoverText}</p>
                <div className="heart">
                  <svg
                    style={{
                      top: "4px",
                      right: "4px",
                      opacity: "1",
                      position: "absolute",
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    class="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                </div>
                <div class="card-body">
                  <h5 class="card-title">{activity.title}</h5>
                  <span class="card-text">{activity.text}</span>
                  <br />
                  <span
                    style={{
                      fontWeight: "300",
                      color: "#92a2ad",
                    }}
                  >
                    {activity.word}
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
                      {activity.oldPrice}
                    </span>
                    <span className="price">{activity.newPrice}</span>
                  </div>
                  <div class="bought">{activity.bought} bought</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
