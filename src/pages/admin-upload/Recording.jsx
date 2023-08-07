import React, { useRef, useEffect, useCallback, useState } from "react";
import PropTypes from "prop-types";
import {
  useReactMediaRecorder,
  ReactMediaRecorder,
} from "react-media-recorder";
import { Button, Box } from "@mui/material";
export function useUserMedia(requestedMedia = { video: true, screen: true }) {
  const [mediaStream, setMediaStream] = useState(null);

  useEffect(() => {
    async function enableStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(
          requestedMedia
        );
        setMediaStream(stream);
      } catch (err) {
        console.log("useUserMedia error");
      }
    }

    if (!mediaStream) {
      enableStream();
    } else {
      return function cleanup() {
        mediaStream.getTracks().forEach((track) => {
          track.stop();
        });
      };
    }
  }, [mediaStream, requestedMedia]);
  return mediaStream;
}

const VideoPreview = ({ stream }) => {
  const preview = useUserMedia();

  const videoRef = useRef();
  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    } else if (videoRef.current && preview) {
      videoRef.current.srcObject = preview;
      videoRef.current.play();
    }
  }, [stream, preview]);

  return (
    <video
      ref={videoRef}
      height={600}
      style={{ borderRadius: "40px" }}
      autoPlay
      controls={false}
    />
  );
};

const Recording = ({ hidden, mediaOption, permission, setPermission }) => {
  const { screen } = mediaOption;

  if (hidden) return null;

  if (!permission) {
    const message = screen
      ? "Allow the browser to access screenshare"
      : "Allow the browser to use your camera/mic";
    return (
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button
          variant="contained"
          size="large"
          onClick={(_) => setPermission(true)}
        >
          {message}
        </Button>
      </Box>
    );
  }

  return (
    <div>
      <ReactMediaRecorder
        {...mediaOption}
        video={mediaOption.video}
        screen={mediaOption.screen}
        audio={mediaOption.audio}
        render={({
          status,
          startRecording,
          stopRecording,
          mediaBlobUrl,
          previewStream,
        }) => (
          <div>
            {!screen && <VideoPreview stream={previewStream} />}
            {screen && <VideoPreview stream={previewStream} />}
            <p>{status}</p>
            <Button variant="contained" onClick={startRecording}>
              Start Recording
            </Button>
            <Button variant="contained" onClick={stopRecording}>
              Stop Recording
            </Button>
            <video src={mediaBlobUrl} controls autoPlay loop />
          </div>
        )}
      />
    </div>
  );
};

Recording.propTypes = {
  hidden: PropTypes.bool,
  mediaOption: PropTypes.object,
  permission: PropTypes.bool,
  setPermission: PropTypes.func,
};
VideoPreview.propTypes = {
  stream: PropTypes.object,
};

export default Recording;
