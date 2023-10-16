import React from "react";
import "./PhotoDetail.css";

function PhotoDetail({ photo, onClose }) {
  return (
    <div className="photo-detail">
      <div className="photo-detail-content">
        <button onClick={onClose} className="close-button">
          Close
        </button>
        <div className="photo-header">
          <img
            src={photo.user.profile_image.large}
            alt=""
            className="user-profile-photo"
          />
          <p className="user-name">{photo.user.name}</p>
        </div>
        <img
          src={photo.urls.regular}
          alt={photo.alt_description}
          className="photo-image"
        />
        <div className="photo-info">
          <p className="alt-description">{photo.alt_description}</p>
          <div className="photo-details">
            <p className="likes-count">{photo.likes} Likes</p>
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
