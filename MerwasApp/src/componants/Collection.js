import React from "react";
import "./collections.css";
export default function Collection() {
  let collects = [
    {
      title: "Best of September",
      text: "Multiple deals",
      img: "https://mediacdn.grabone.co.nz/asset/o4qZGwubHT",
      hoverText:"Best of September",
    },
    {
      title: "Tasty Tipples",
      text: "Multiple deals",
      img: "https://mediacdn.grabone.co.nz/asset/YugEJF3paH",
      hoverText:"Best of September",
    },
    {
      title: "Free Shipping",
      text: "Multiple deals",
      img: "https://mediacdn.grabone.co.nz/asset/0sgXNkite4",
      hoverText:"Best of September",
    },
    {
      title: "$20 Treats",
      text: "Multiple deals",
      img: "https://mediacdn.grabone.co.nz/asset/Ko9mLzvNBi",
      hoverText:"Best of September",
    },
  ];
  return (
    <div>
      <div className="headerBtn">
        <span className="header" style={{marginTop:"20px"}}>Collections</span>
        <button type="button" class="btn btn" id="buttonMore" style={{marginTop:"20px"}}>
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
                <div class="card-img-top"><img src={card.img} class="card-img-top" alt="..."/></div>
                <p class="text-hover">{card.hoverText}</p>
                <div class="card-body">
                  <h6 class="card-title" style={{textAlign:"center"}}>{card.title}</h6>
                  <span class="card-text" style={{marginLeft:"6.5rem"}}>{card.text}</span>
                  <br />
                  <button type="button" class="btn btn" id="btnColl"  style={{marginLeft:"6rem"}}>
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
