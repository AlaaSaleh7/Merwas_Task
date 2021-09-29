import React from "react";
import "./Cards.css";
export default function Cards() {
  let cards = [
    {
      title: "Dental Service Treatment",
      text: "Guardian Dental Care Manukau",
      word: "Auckland",
      oldPrice: "$85",
      newPrice: " $35",
      bought: 3,
      img: "//main-cdn.grabone.co.nz/goimage/325x225/7924c273fb12bb368da0b0f63090e2ec32d3d34d.jpg",
    },
    {
      title: "Premium Hairdressing Packages",
      text: "Vivo Hair and Skin Clinic",
      word: "hhhh",
      oldPrice: "$239",
      newPrice: " $139",
      bought: 148,
      img: "//main-cdn.grabone.co.nz/goimage/325x225/7dfa01c8a9d3cfb631e0ee1c4e4860b326b5e9cf.jpg",
    },
    {
      title: "Five-Pack Reusable Face Mask",
      text: "eeee",
      word: "rrrr",
      oldPrice: "",
      newPrice: " $15",
      bought: 2258,
      img: "//main-cdn.grabone.co.nz/goimage/325x225/8474177dfa86046a7e4ef34caecdfbd6ebbc5884.jpg",
    },
    {
      title: "Gutter Cleaning Service",
      text: "TNT Home Maintenance",
      word: "Auckland",
      oldPrice: "$220",
      newPrice: " $89",
      bought: 27,
      img: "//main-cdn.grabone.co.nz/goimage/325x225/87c916e53543a9336913a0325427947725b8080f.jpg",
    },
    {
      title: "Inclusive Hanmer Springs Getaway",
      text: "Hanmer Springs Hotel",
      word: "Christchurch",
      oldPrice: "$420",
      newPrice: " $189",
      bought: 331,
      img: "//main-cdn.grabone.co.nz/goimage/325x225/d3162da6dbd501bca97675ef50ed44b23cffd04f.jpg",
    },
    {
      title: "Annual Pass to Sculptureum Attractions",
      text: "Sculptureum",
      word: "Matakana",
      oldPrice: "$99",
      newPrice: " $50",
      bought: 38,
      img: "//main-cdn.grabone.co.nz/goimage/325x225/34bad9d09aa77e6057a5c4ddd543cebb0abd54a2.jpg",
    },
    {
      title: "HelloFresh Special Offer for all people",
      text: "HelloFresh",
      word: "Auckland",
      oldPrice: "$129",
      newPrice: " $108",
      bought: 203,
      img: "//main-cdn.grabone.co.nz/goimage/495x343/6009bcbb5ab263035368b7d3fd11b64f45353e8b.jpg",
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
        <span className="header">Featured Auckland deals</span>
        <button type="button" class="btn btn">
          view more ..{" "}
        </button>
      </div>

      <div class="row" id="rowCards">
        {cards.map((card) => {
          return (
            <div
              class="col-lg-3 col-md-4 col-sm-6" >
              <div class="card" style={{ width: "22rem" ,marginLeft:"2rem",marginTop:"1rem"}}>
                <img src={card.img} class="card-img-top" alt="..." />
                <div className="heart">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
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
  );
}
