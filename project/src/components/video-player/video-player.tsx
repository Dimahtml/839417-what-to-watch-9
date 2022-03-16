import { useState, useEffect, useRef } from 'react';

const PREVIEW_DELAY = 1000;

type VideoPlayerProps = {
  isPlaying: boolean;
  src: string;
  muted: boolean;
  poster: string;
  width: number;
  height: number;
}

function VideoPlayer({isPlaying, src, muted, poster, width, height}: VideoPlayerProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current !== null) {
      videoRef.current.onloadeddata = () => setIsLoading(false);
    }

    return () => {
      if (videoRef.current !== null) {
        videoRef.current.onloadeddata = null;
        videoRef.current = null;
      }
    };
  }, [src]);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    let timeout: ReturnType<typeof setTimeout>;

    if (isPlaying) {
      timeout = setTimeout(() => {
        if (videoRef.current !== null) {
          videoRef.current.play();
        }
      }, PREVIEW_DELAY);

      return () => {
        clearTimeout(timeout);
      };
    }

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    videoRef.current.load();
  }, [isPlaying]);

  return (
    <video src={src} ref={videoRef} poster={poster} width={width} height={height} muted={muted} />
  );
}

export default VideoPlayer;
