import React from "react";
import "./PhotoDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faThumbsUp,
  faMinus,
} from "@fortawesome/fontawesome-free-solid";

function PhotoDetail({ photo, onClose }) {
  const download = async (e) => {
    e.preventDefault(); // Prevent the link from opening in a new tab

    try {
      const blob = await fetch(e.target.href).then((res) => res.blob());
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "image.png"; //or any other extension
      link.click();
    } catch {
      console.error("Unable to download image...");
    }
  };

  return (
    <div className="photo-detail">
      <div className="photo-detail-content">
        <button onClick={onClose} className="close-button">
          <FontAwesomeIcon icon={faMinus} />
        </button>

        <div className="photo-header">
          <div className="user">
            <img
              src={photo.user.profile_image.large}
              alt=""
              className="user-profile-photo"
            />
            <p className="user-name">{photo.user.name}</p>
          </div>
          <div
            className="downlo
          ad"
          >
            <a href={photo.urls.raw} download onClick={download}>
              <button>
                <FontAwesomeIcon icon={faDownload} />
              </button>
            </a>
          </div>
        </div>

        <img
          src={photo.urls.regular}
          alt={photo.alt_description}
          className="photo-image"
        />

        <div className="photo-info">
          <h4 className="alt-description">Image:- {photo.alt_description}</h4>
          <div className="photo-details">
            <p className="likes-count">
              {photo.likes} <FontAwesomeIcon icon={faThumbsUp} />
            </p>
            <p className="created-date">
              Created: {new Date(photo.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoDetail;
