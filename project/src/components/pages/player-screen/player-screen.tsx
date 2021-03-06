import { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../../hooks';
import { getFilmById } from '../../../store/selectors';
import { getRemainingTime } from '../../../utils';
import { store } from '../../../store/';
import { fetchFilmAction } from '../../../store/api-actions';

import PlayButton from './play-button/play-button';
import PauseButton from './pause-button/pause-button';

function PlayerScreen(): JSX.Element {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [percent, setPercent] = useState(0);
  const [isActive, setActive] = useState(true);
  const { id } = useParams<{id: string}>();
  const film = useAppSelector(getFilmById(Number(id)));
  const videoRef = useRef<HTMLVideoElement | null>(null);
  let video = videoRef.current;

  useEffect (() => {
    if (!film && id) {
      store.dispatch(fetchFilmAction(id));
    }
  }, [film, id]);

  const handleExitButtonClick = () => navigate(-1);

  const handlePlayButtonClick = () => {
    if (isActive) {
      videoRef.current?.pause();
      setActive(false);
    } else {
      videoRef.current?.play();
      setActive(true);
    }
  };

  const handleFullScreenToggle = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div className="player">
      <video
        ref={videoRef}
        className="player__video"
        src={film?.videoLink}
        poster={film?.backgroundImage}
        width="100%"
        height="100%"
        muted={false}
        autoPlay
        onTimeUpdate={() => {
          video = videoRef.current;

          if (!video) {
            return;
          }

          if(!isNaN(video.duration)) {
            const currentPercent = video.currentTime / video.duration * 100;
            setPercent(currentPercent);
          }
        }}
        onLoadedData={() => {
          setIsLoading(false);
        }}
      />

      <button
        type="button"
        className="player__exit"
        onClick={handleExitButtonClick}
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={percent} max="100"></progress>
            <div className="player__toggler" style={{ left: `${percent}%` }}>Toggler</div>
          </div>
          <div className="player__time-value">
            {isLoading || !video ? 'loading...' : getRemainingTime(percent, video.duration)}
          </div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={handlePlayButtonClick}
          >
            {isActive? <PauseButton /> : <PlayButton />}
          </button>
          <div className="player__name">{film?.name}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={handleFullScreenToggle}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerScreen;
