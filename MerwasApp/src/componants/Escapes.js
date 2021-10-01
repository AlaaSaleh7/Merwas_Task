import React from 'react'

export default function Escapes() {

  // the rest of the cards
  let escapes = [
    {
      title: "Five-Star Luxury Canterbury Getaway",
      text: "Terrace Downs Resort",
      word: "Christchurch",
      oldPrice: "$715",
      newPrice: " $356",
      bought: 180,
      img: "//main-cdn.grabone.co.nz/goimage/325x225/a3c912cb9f2b24036e8d6315fd775511699a82b8.jpg",
    },
    {
        title: "4.5 Star Stay for Two in Wellington",
        text: "Rydges Wellington Airport",
        word: "Wellington City",
        oldPrice: "$904",
        newPrice: " $199",
        bought: 17,
        img: "//main-cdn.grabone.co.nz/goimage/325x225/6ee18302a653461ae2594bd2cf23140e43339615.jpg",
      },
      {
        title: "Queenstown Four-Star Getaway for Two People",
        text: "Queenstown Mystery 4 Star Hotel",
        word: "Frankton",
        oldPrice: "$244",
        newPrice: " $129",
        bought: 623,
        img: "//main-cdn.grabone.co.nz/goimage/325x225/687d57cf67e1d56ca6aa5272034a0561d54dacb6.jpg",
      },
      {
        title: "Central Queenstown Stay for Two People",
        text: "Rydges Lakeland Resort Queenstown",
        word: "Queenstown",
        oldPrice: "$402",
        newPrice: " $179",
        bought: 80,
        img: "//main-cdn.grabone.co.nz/goimage/325x225/837a005e256befcb4caa3074c588a1ee88a55b76.jpg",
      },
  ];

    return (
        <div>
            <div className="headerBtn">
        <span className="header">Escapes</span>
        <button type="button" class="btn btn" id="buttonMore">
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
                <img src={card.img} class="card-img-top" alt="..." />
                <div className="heart">
                  <svg style={{
  top: "4px",
  right: "4px",
  opacity: "1",
  position: "absolute"}}
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
        </div>
    )
}
