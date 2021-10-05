import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import VideoPreview from "./VideoPreview";

function VideoUpload({
    setAssetArea,
    switchAssetArea,
    handleChange,
    sharedVideo,
    handleClick,
    setShareVideo,
}) {
    const handleClose = e => {
        setShareVideo("");
        handleClick(e);
    };

    const videoFile = useRef(null);

    useEffect(() => {
        videoFile.current.click();
    }, []);

    return (
        <Content>
            <Header>
                <h2>Select/Edit your video</h2>
                <button onClick={() => setAssetArea("modal")}>
                    <img
                        src="/images/close-icon.svg"
                        alt=""
                        onClick={handleClose}
                    />
                </button>
            </Header>
            <SharedImageContent sharedImage={sharedVideo}>
                <UploadVideo>
                    <input
                        type="file"
                        accept="video/*"
                        name="video"
                        id="video"
                        ref={videoFile}
                        style={{ display: "none" }}
                        onChange={handleChange}
                    />
                    {!sharedVideo && (
                        <p>
                            <label htmlFor="video">Select video to share</label>
                        </p>
                    )}
                    {sharedVideo && <VideoPreview shareVideo={sharedVideo} />}
                </UploadVideo>
            </SharedImageContent>
            <Footer>
                {!sharedVideo && (
                    <>
                        <button onClick={() => switchAssetArea("modal")}>
                            Back
                        </button>
                        <button disabled>Done</button>
                    </>
                )}
                {sharedVideo && (
                    <>
                        <button onClick={() => switchAssetArea("modal")}>
                            Back
                        </button>
                        <button
                            className="btn-done"
                            onClick={() => setAssetArea("modal")}
                        >
                            Done
                        </button>
                    </>
                )}
            </Footer>
        </Content>
    );
}

export default VideoUpload;

const Content = styled.div`
    width: 100%;
    max-width: 552px;
    background-color: white;
    overflow: initial;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    top: 32px;
    margin: 0 auto;
`;

const Header = styled.div`
    padding: 16px 24px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    font-size: 16px;
    position: relative;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
        font-size: 18px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.8);
    }

    button {
        position: absolute;
        right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 40px;
        min-width: auto;
        border-radius: 50%;
        border: none;
        background: transparent;
        cursor: pointer;

        &:hover {
            background-color: rgba(0, 0, 0, 0.08);
        }

        img {
            cursor: pointer;
        }
    }
`;

const SharedImageContent = styled.div`
    padding: ${props => (!props.sharedImage ? "48px 0px" : "0px")};
`;

const UploadImage = styled.div`
    text-align: center;
    img {
        width: 100%;
    }

    p {
        margin-top: 12px;
        margin-bottom: 3px;
        padding: 6px 8px;
    }

    label {
        padding: 6px 8px;
        margin-top: 12px;
        margin-bottom: 3px;
        color: #0a66c2;
        border-radius: 0.4rem;
        font-family: "MyriadRegular", sans-serif;
        cursor: pointer;

        &:hover {
            color: #004182;
            background-color: rgb(112 181 249 / 30%);
        }
    }
`;

const UploadVideo = styled(UploadImage)`
    div {
        pdisplay: flex;
        justify-content: center;
        align-items: center;
        padding: 13px;
    }
`;

const Footer = styled.div`
    padding: 12px 24px;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button {
        padding: 6px 16px;
        border-radius: 1.6rem;
        border: none;
        font-size: 16px;
        line-height: 1.3;
        cursor: pointer;
        transition: box-shadow 167ms, background 350ms ease-out;
    }

    button:first-child {
        box-shadow: inset 0 0 0 1px #0a66c2;
        color: #0a66c2;
        background-color: white;

        &:hover {
            background-color: rgb(112 181 249 / 20%);
            box-shadow: inset 0 0 0 2px #0a66c2;
        }
    }

    button:last-child {
        margin-left: 10px;
        cursor: not-allowed;
    }

    .btn-done {
        background-color: #0a66c2;
        color: #fff;
        &:hover {
            background-color: #004182;
            color: white;
        }
        margin-left: 10px;
        cursor: pointer !important;
    }
`;
