import React from "react";
import './collections.css'
export default function Collection() {
  let collects = [
    {
      title: "Inclusive Hanmer Springs Getaway",
      text: "Hanmer Springs Hotel",
      img: "https://mediacdn.grabone.co.nz/asset/o4qZGwubHT",
    },
  ];
  return (
    <div>
      <div className="headerBtn">
        <span className="header">Collections</span>
        <button type="button" class="btn btn">
          view more ..{" "}
        </button>
      </div>

      <div class="row" id="rowCards">
        {collects.map((card) => {
          return (
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div
                class="card"
                style={{
                  width: "22rem",
                  marginLeft: "2rem",
                  marginTop: "1rem",
                  justifyContent: "center"
                }}
              >
                <img src={card.img} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h6 class="card-title">{card.title}</h6>
                  <span class="card-text">{card.text}</span>
                  <br />
                  <button type="button" class="btn btn" id="btnColl">view collection </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
