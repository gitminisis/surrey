import React, { useRef, useEffect, useCallback, useState } from "react";
import PropTypes from "prop-types";
import {
  useReactMediaRecorder,
  ReactMediaRecorder,
} from "react-media-recorder";
export function useUserMedia(
  requestedMedia = { audio: false, video: { mediaSource: "screen" } }
) {
  const [mediaStream, setMediaStream] = useState(null);

  useEffect(() => {
    async function enableStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(
          requestedMedia
        );
        setMediaStream(stream);
      } catch (err) {
        // Removed for brevity
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
const CameraRecording = ({ hidden, mediaOption }) => {
  console.log(mediaOption);

  if (hidden) return null;

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
            <VideoPreview stream={previewStream} />
            <p>{status}</p>
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop Recording</button>
            <video src={mediaBlobUrl} controls autoPlay loop />
          </div>
        )}
      />
    </div>
  );
};

CameraRecording.propTypes = {
  hidden: PropTypes.bool,
  mediaOption: PropTypes.object,
};

export default CameraRecording;
