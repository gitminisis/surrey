import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import ImageViewer from "../ImageViewer";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const ImageGallerySlide = (props) => {
  const { images, audio, video, imageCaptions } = props;
  let data = images.map((e) => {
    return {
      original: e,
      thumbnail: e,
    };
  });

  data = data.concat(
    audio.map((e) => {
      return {
        original: "https://cdn-icons-png.flaticon.com/512/1324/1324071.png",
        thumbnail: "https://cdn-icons-png.flaticon.com/512/1324/1324071.png",
      };
    })
  );
  data = data.concat(
    video.map((e) => {
      return {
        original: "https://cdn-icons-png.flaticon.com/512/1666/1666880.png",
        thumbnail: "https://cdn-icons-png.flaticon.com/512/1666/1666880.png",
      };
    })
  );
  const [show, setShow] = useState(false);
  return (
    <>
      <ImageGallery
        useBrowserFullscreen={false}
        showPlayButton={false}
        renderFullscreenButton={(onClick, isFullscreen) => (
          <button
            type="button"
            className="image-gallery-icon image-gallery-fullscreen-button"
            onClick={(_) => setShow(true)}
            aria-label="Open Fullscreen"
          >
            <FullscreenIcon style={{ fontSize: "2rem" }} />
          </button>
        )}
        renderLeftNav={(onClick, disabled) => (
          <button
            type="button"
            className="image-gallery-icon image-gallery-left-nav"
            disabled={disabled}
            onClick={onClick}
            aria-label="Previous Slide"
          >
            <ArrowBackIosIcon />
          </button>
        )}
        renderRightNav={(onClick, disabled) => (
          <button
            type="button"
            className="image-gallery-icon image-gallery-right-nav"
            disabled={disabled}
            onClick={onClick}
            aria-label="Next Slide"
          >
            <ArrowForwardIosIcon />
          </button>
        )}
        onScreenChange={(e, fn) => {
          setShow(e);
        }}
        items={data}
        onClick={(e) => {
          setShow(true);
        }}
      />
      <ImageViewer
        imageCaptions={imageCaptions}
        images={images}
        audio={audio}
        video={video}
        show={show}
        onClose={(_) => setShow(false)}
      />
    </>
  );
};

export default ImageGallerySlide;
