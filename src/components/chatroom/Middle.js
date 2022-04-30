import React from "react";
import "./Middle.css";

function Middle() {
  let handleModalClose = () => {
    let imageModal = document.querySelector(".imageModal");
    imageModal.style.display = "none";
  };
  let handleFileSelect = (e) => {
    console.log(e.target.value);
  };
  let handleFileUpload = () => {};
  //======================== MiddlePart start here ============================
  let handleMessageSend = () => {};
  let handleSelectOhers = () => {
    let others = document.querySelector(".selectOthers");
    others.style.display = "block";
  };
  let handleSelectOthersClose = () => {
    let others = document.querySelector(".selectOthers");
    others.style.display = "none";
  };
  //======================== MiddlePart end here ==============================
  return (
    <>
      {/* ==================================================================
                                MiddlePart start here 
        ================================================================== */}
      <h2>Chatting Application part will come here</h2>
      {/*================== Image Modal Popup start here =======================*/}
      <div className="imageModal">
        <span
          onClick={handleModalClose}
          class="material-icons-sharp"
          title="Close"
        >
          close
        </span>
        <div className="imageModalDesign">
          <input onChange={handleFileSelect} type="file" name="file" />
          <button
            onClick={handleFileUpload}
            className="loginbtn"
            title="Click to upload your image"
          >
            Upload
          </button>
        </div>
      </div>
      {/*================== Image Modal Popup end here =======================*/}
      {/*================== upload others Popup start here =======================*/}

      <div className="selectOthers">
        <span onClick={handleSelectOthersClose} class="material-icons-sharp">
          cancel
        </span>
        <ul>
          <li>Images</li>
          <li>Documents</li>
          <li>Cards</li>
        </ul>
      </div>
      {/*================== upload others Popup end here =======================*/}

      <div className="textArea">
        <div className="textAreaicons">
          <div className="textAreaiconsPosition">
            <span
              onClick={handleMessageSend}
              class="material-icons-sharp mover"
              title="Send Messages"
            >
              send
            </span>
            <span
              className="othersSelection"
              onClick={handleSelectOhers}
              class="material-icons-sharp"
            >
              more_vert
            </span>
          </div>
          <input type="text" placeholder="Plase type your message here" />
        </div>
      </div>
      {/* ==================================================================
                                MiddlePart end here 
        ================================================================== */}
    </>
  );
}

export default Middle;
