import closecircle from "../images/closecircle.png";
import { PrimaryButton } from "./button.component";
import { useState } from "react";
import uploadIcon from "../images/folderIcon.png";
import layer from "../images/layer.svg";
import arrowDown from "../images/arrowdown.png";
import arrowUp from "../images/arrowup.png";
import PauseIcon from "../images/PauseCircle.png";
import SolidCloseIcon from "../images/solidcircle.png";

export function Modal({ closeModal }) {
  const [showUploadProgress, setShowUploadProgress] = useState(false);
  const [showProgressList, setShowProgressList] = useState(false);
  const [showDropDownIcon, setShowDropDownIcon] = useState(true);

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-header">
          <h3>Upload audio files</h3>
          <p>Upload agent records to transcribe</p>
          <div className="close">
            <img src={closecircle} alt="" onClick={() => closeModal(false)} />
          </div>
        </div>
        <div className="modal-body-container">
          <div className="modal-body">
            <DragAndDrop setShowUploadProgress={setShowUploadProgress} />
            {showUploadProgress && showDropDownIcon && <UploadProgress />}
            {showUploadProgress && (
              <DropDown
                showDropDownIcon={showDropDownIcon}
                setShowDropDownIcon={setShowDropDownIcon}
                setShowProgressList={setShowProgressList}
              />
            )}
            {showProgressList && !showDropDownIcon && <UploadProgressList />}
          </div>
        </div>
      </div>
    </div>
  );
}

function DropDown({
  setShowDropDownIcon,
  showDropDownIcon,
  setShowProgressList,
}) {
  const action = () => {
    setShowDropDownIcon(!showDropDownIcon);
    setShowProgressList(true);
  };

  return (
    <div className="files-toggle">
      <p>All Files</p>
      <div className="arrow-down">
        {showDropDownIcon && (
          <img src={arrowDown} alt="down-chevron" onClick={() => action()} />
        )}
        {!showDropDownIcon && (
          <img src={arrowUp} alt="up-chevron" onClick={() => action()} />
        )}
      </div>
    </div>
  );
}

function DragAndDrop({ setShowUploadProgress }) {
  const showUploadProgress = () => {
    setShowUploadProgress(true);
  };
  return (
    <section className="drag-and-drop">
      <img src={layer} alt="" />
      <h3>Drag and drop agent audio call recordings</h3>
      <div className="or-wrapper">
        <div className="left-or"></div>
        <div className="or">
          <p>OR</p>
        </div>
        <div className="right-or"></div>
      </div>
      <p className="small-text">Audio files must be smaller than 10mb</p>
      {/* <button>Browse Files</button> */}
      {/* <input type="file" hidden style={{ display: "none" }} /> */}
      <PrimaryButton text="Browse Files" onClick={showUploadProgress} />
    </section>
  );
}

function UploadProgress() {
  const progress = 80;
  return (
    <section className="upload-progress">
      <div className="upload-progress-wrapper">
        <div className="upload-icon">
          <img src={uploadIcon} alt="folder-icon" />
          <p>12/30</p>
        </div>
        <div className="upload-progress-status1">
          <p>Uploading...</p>
          <p>File name</p>
          <div className="progress-wrapper">
            <div
              className="progress-bar"
              style={{ width: progress + "%" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function UploadProgressList() {
  return (
    <section className="upload-progress-list">
      {[1, 2].map((i) => (
        <SubUploadProgress key={i} />
      ))}
    </section>
  );
}

function SubUploadProgress() {

  return (
    <div className="upload-progress-wrapper">
      <div className="upload-icon">
        <img src={uploadIcon} alt="folder-icon" />
      </div>
      <div className="upload-progress-status2">
        <p className="text-bold">ALICE AUDIO RECORDING</p>
        <p className="small-text-light" >12 June 2022 at 12:00 pm. 1.4 Mb / 4.2 Mb</p>
      </div>
      <div className="action-wrapper">
        <img src={PauseIcon} alt="pause-icon-button" />
        <img src={SolidCloseIcon} alt="close-icon-button" />
      </div>
    </div>
  );
}
