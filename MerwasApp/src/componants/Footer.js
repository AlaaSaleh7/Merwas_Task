import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div class="card w-100">
          <div class="card-body">
          <div class="row">
    <div class="col-lg-3 col-md-4 col-sm-6" style={{backgroundColor:"red", border:"1px solid black"}}>
      One of four columns
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6" style={{backgroundColor:"green", border:"1px solid black"}}>
      One of four columns
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6" style={{backgroundColor:"yellow", border:"1px solid black"}}>
      One of four columns
  	</div>
    <div class="col-lg-3 col-md-4 col-sm-6" style={{backgroundColor:"white", border:"1px solid black"}}>
      One of four columns
  	</div>
  </div>
              {/* <div>
                  <h5>Newsletter Signup</h5>
                  <span>Sign up for our daily emails and we'll send you all the best deals, tailored for you.</span>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
