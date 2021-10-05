import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function VideoPreview(props) {
    const videoPlayPause = useRef(null);
    const [playPause, setPlayPause] = useState(false);

    const handelPlayPause = () => {
        playPause ? setPlayPause(false) : setPlayPause(true);
    };

    useEffect(() => {
        playPause
            ? videoPlayPause.current.play()
            : videoPlayPause.current.pause();
    }, [playPause]);

    return (
        <div>
            <VideoPlayer>
                <video width={"100%"} ref={videoPlayPause} controls>
                    <source
                        src={URL.createObjectURL(props.shareVideo)}
                        type="video/mp4"
                    />
                </video>
            </VideoPlayer>
            {!playPause && (
                <PlayPauseButton onClick={handelPlayPause}>
                    <img
                        src="https://static-exp1.licdn.com/sc/h/619c8cuelm7gdzt2xvzgwfu9n"
                        alt=""
                    />
                </PlayPauseButton>
            )}
        </div>
    );
}

export default VideoPreview;

const PlayPauseButton = styled.button`
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.9);
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    cursor: pointer;
    transition: box-shadow 300ms, width 300ms, height 300ms;
    &:hover {
        box-shadow: 0 0 0 2px #fff;
        width: 55px;
        height: 55px;
    }
`;

const VideoPlayer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
