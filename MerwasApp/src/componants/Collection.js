import React from "react";
import "./collections.css";
export default function Collection() {
  let collects = [
    {
      title: "Best of September",
      text: "Multiple deals",
      img: "https://mediacdn.grabone.co.nz/asset/o4qZGwubHT",
    },
    {
      title: "Tasty Tipples",
      text: "Multiple deals",
      img: "https://mediacdn.grabone.co.nz/asset/YugEJF3paH",
    },
    {
      title: "Free Shipping",
      text: "Multiple deals",
      img: "https://mediacdn.grabone.co.nz/asset/0sgXNkite4",
    },
    {
      title: "$20 Treats",
      text: "Multiple deals",
      img: "https://mediacdn.grabone.co.nz/asset/Ko9mLzvNBi",
    },
  ];
  return (
    <div>
      <div className="headerBtn">
        <span className="header">Collections</span>
        <button type="button" class="btn btn" id="buttonMore">
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
                  justifyContent: "center",
                }}
              >
                <img src={card.img} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h6 class="card-title">{card.title}</h6>
                  <span class="card-text">{card.text}</span>
                  <br />
                  <button type="button" class="btn btn" id="btnColl">
                    view collection{" "}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
