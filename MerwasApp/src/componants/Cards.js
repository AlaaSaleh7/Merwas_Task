import React from 'react'

export default function Cards() {
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
        <div>
             {cards.map((card) => {
            return (
              <div className="col-3">
                <div class="card">
                  <img
                    alt="One-Night Midweek Kiwi Spotting Tour &amp; Stay for Two People on Kapiti Island incl. Ferry Transport, Introductory Talk, DOC Permits, Dinner, Breakfast &amp; Lunch - Three Options Available"
                    src={card.img}
                  />
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
        </div>
    )
}
