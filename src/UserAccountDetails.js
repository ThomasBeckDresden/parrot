import React from "react";

export default function UserAccountDetails() {
  return (
    <div className="col-2 profiletext ">
      <div class="card" style={{ width: "18rem", height: "30rem" }}>
        <div className="card-body">
          <p className="card-text ">
            <div className="row FullName">FullName</div>
            <br />
            <div className="row Nickname">Nickname</div>
            <br />
            <div className="row UserPicture">UserPicture</div>
            <br />
            <div className="row UserDescription">UserDescription</div>
            <br />
            <div className="row UserLocation">UserLocation</div>
            <br />
            <div className="row NumberOfWhistles">NumberOfWhistles</div>
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
