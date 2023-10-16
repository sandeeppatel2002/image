import React, { useState } from "react";
import PhotoDetail from "../photodetail/PhotoDetail";
import "./PhotoList.css"; // Import the CSS file

function PhotoList({ photos }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openPhotoDetail = (photo) => {
    setSelectedPhoto(photo);
  };

  const closePhotoDetail = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="photo-list">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="photo-card"
          onClick={() => {
            openPhotoDetail(photo);
          }}
        >
          <img
            src={photo.urls.regular}
            alt={photo.alt_description}
            className="photo-img"
          />
          <div className="user-info">
            <div className="user">
              <img
                src={photo.user.profile_image.large}
                alt=""
                className="user-profile-photo"
              />
              <p>{photo.user.name}</p>
            </div>
            <p className="likes">{photo.likes} Likes</p>
          </div>
        </div>
      ))}
      {selectedPhoto && (
        <PhotoDetail photo={selectedPhoto} onClose={closePhotoDetail} />
      )}
    </div>
  );
}

export default PhotoList;
