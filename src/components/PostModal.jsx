import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import firebase from "firebase/compat/app";
import { postArticleAPI } from "../actions";

import VideoPreview from "./VideoPreview";
import ImageUpload from "./ImageUpload";
import VideoUpload from "./VideoUpload";

function PostModel(props) {
    const [editorText, setEditorText] = useState("");
    const [shareImage, setShareImage] = useState("");
    const [shareVideo, setShareVideo] = useState("");
    const [assetArea, setAssetArea] = useState("modal");

    const inputTextArea = useRef(null);

    const handleChange = e => {
        if (e.target.id === "image") {
            const image = e.target.files[0];
            image === "" || image === "undefined"
                ? alert("Please select an image")
                : setShareImage(image);
        } else if (e.target.id === "video") {
            const video = e.target.files[0];
            video === "" || video === "undefined"
                ? alert("Please select a Video")
                : setShareVideo(video);
        }
    };

    const switchAssetArea = area => {
        setShareImage("");
        setShareVideo("");
        setAssetArea(area);
    };

    const postArticle = e => {
        e.preventDefault();
        if (e.target !== e.currentTarget) {
            return;
        }

        const payload = {
            image: shareImage,
            video: shareVideo,
            user: props.user,
            description: editorText,
            timestamp: firebase.firestore.Timestamp.now(),
        };

        props.postArticle(payload);
        reset(e);
    };

    const reset = e => {
        setEditorText("");
        setShareImage("");
        setShareVideo("");
        setAssetArea("");
        props.handleClick(e);
    };

    const addHashtag = e => {
        setEditorText(`${editorText}#`);
        inputTextArea.current.focus();
    };

    useEffect(() => {
        props.mediaModal && setAssetArea(props.mediaModal);
    }, [props.mediaModal]);

    useEffect(() => {
        props.showModal === "open" &&
            assetArea === "modal" &&
            inputTextArea.current.focus();
    }, [props.showModal, assetArea]);

    useEffect(() => {
        setAssetArea("modal");
    }, []);

    return (
        <>
            {props.showModal === "open" && (
                <Container>
                    {assetArea === "modal" && (
                        <Content>
                            <Header>
                                <h2>Create a post</h2>
                                <button onClick={event => reset(event)}>
                                    <img
                                        src="/images/close-icon.svg"
                                        alt=""
                                        onClick={event => reset(event)}
                                    />
                                </button>
                            </Header>
                            <SharedContent>
                                <UserInfo>
                                    <img
                                        src={
                                            props.user
                                                ? props.user.photoURL
                                                : "/images/user.svg"
                                        }
                                        alt=""
                                    />
                                    <div>
                                        <a>
                                            {props.user
                                                ? props.user.displayName
                                                : "Name"}
                                        </a>
                                        <a>
                                            <button>
                                                <span>
                                                    <img
                                                        src="/images/world-icon.svg"
                                                        alt=""
                                                    />
                                                </span>
                                                <span>Any</span>
                                                <span>
                                                    <img
                                                        src="/images/down-icon.svg"
                                                        alt=""
                                                    />
                                                </span>
                                            </button>
                                        </a>
                                    </div>
                                </UserInfo>
                                <Editor>
                                    <textarea
                                        value={editorText}
                                        onChange={e =>
                                            setEditorText(e.target.value)
                                        }
                                        placeholder="What do you want to talk about?"
                                        cols="30"
                                        rows="5"
                                        ref={inputTextArea}
                                        spellCheck="false"
                                    ></textarea>
                                </Editor>
                                <MediaLoaded>
                                    {shareImage && (
                                        <>
                                            <div>
                                                <img
                                                    src={URL.createObjectURL(
                                                        shareImage
                                                    )}
                                                    alt=""
                                                />
                                                <span>
                                                    <button>
                                                        <img
                                                            src="/images/edit-icon.svg"
                                                            alt=""
                                                        />
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            switchAssetArea(
                                                                "modal"
                                                            )
                                                        }
                                                    >
                                                        <img
                                                            src="/images/close-white-icon.svg"
                                                            alt=""
                                                        />
                                                    </button>
                                                </span>
                                            </div>
                                        </>
                                    )}
                                    {shareVideo && (
                                        <>
                                            <div>
                                                <VideoPreview
                                                    shareVideo={shareVideo}
                                                />
                                                <span>
                                                    <button>
                                                        <img
                                                            src="/images/edit-icon.svg"
                                                            alt=""
                                                        />
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            switchAssetArea(
                                                                "modal"
                                                            )
                                                        }
                                                    >
                                                        <img
                                                            src="/images/close-white-icon.svg"
                                                            alt=""
                                                        />
                                                    </button>
                                                </span>
                                            </div>
                                        </>
                                    )}
                                </MediaLoaded>
                                <AddHastag>
                                    <div>
                                        <a>
                                            <button onClick={addHashtag}>
                                                Add Hashtag
                                            </button>
                                        </a>
                                    </div>
                                </AddHastag>
                            </SharedContent>
                            <ShareCreations>
                                <AttachAssets>
                                    <AssetButton
                                        onClick={() => switchAssetArea("image")}
                                    >
                                        <LiButton>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                data-supported-dps="24x24"
                                                fill="currentColor"
                                                class="mercado-match"
                                                width="24"
                                                height="24"
                                                focusable="false"
                                            >
                                                <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                                            </svg>
                                        </LiButton>
                                    </AssetButton>

                                    <AssetButton
                                        onClick={() => switchAssetArea("video")}
                                    >
                                        <LiButton>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                data-supported-dps="24x24"
                                                fill="currentColor"
                                                class="mercado-match"
                                                width="24"
                                                height="24"
                                                focusable="false"
                                            >
                                                <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
                                            </svg>
                                        </LiButton>
                                    </AssetButton>
                                </AttachAssets>
                                <ShareComment>
                                    <AssetCommentButton>
                                        <LiButton>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 16 16"
                                                data-supported-dps="16x16"
                                                fill="currentColor"
                                                class="mercado-match"
                                                width="16"
                                                height="16"
                                                focusable="false"
                                            >
                                                <path d="M5 8h5v1H5zm11-.5v.08a6 6 0 01-2.75 5L8 16v-3H5.5A5.51 5.51 0 010 7.5 5.62 5.62 0 015.74 2h4.76A5.5 5.5 0 0116 7.5zm-2 0A3.5 3.5 0 0010.5 4H5.74A3.62 3.62 0 002 7.5 3.53 3.53 0 005.5 11H10v1.33l2.17-1.39A4 4 0 0014 7.58zM5 7h6V6H5z"></path>
                                            </svg>
                                            Any
                                        </LiButton>
                                    </AssetCommentButton>
                                </ShareComment>
                                <PostButton
                                    disabled={!editorText}
                                    onClick={postArticle}
                                >
                                    Publicar
                                </PostButton>
                            </ShareCreations>
                        </Content>
                    )}

                    {assetArea === "image" && (
                        <ImageUpload
                            handleClick={props.handleClick}
                            sharedImage={shareImage}
                            handleChange={handleChange}
                            setAssetArea={setAssetArea}
                            switchAssetArea={switchAssetArea}
                            setShareImage={setShareImage}
                        />
                    )}
                    {assetArea === "video" && (
                        <VideoUpload
                            handleClick={props.handleClick}
                            sharedVideo={shareVideo}
                            handleChange={handleChange}
                            setAssetArea={setAssetArea}
                            switchAssetArea={switchAssetArea}
                            setShareVideo={setShareVideo}
                        />
                    )}
                </Container>
            )}
        </>
    );
}

const mapStateToProps = state => ({
    user: state.userState.user,
});

const mapDispatchToProps = dispatch => ({
    postArticle: payload => dispatch(postArticleAPI(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostModel);

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    color: black;
    background-color: rgba(0, 0, 0, 0.6);
    animation: fadeIn 0.3s;
`;

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

const SharedContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: auto;
    vertical-align: baseline;
    background: transparent;
    max-height: 650px;
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 24px;
    color: rgba(0, 0, 0, 0.8);
    svg,
    img {
        width: 48px;
        height: 48px;
        background-clip: content-box;
        border: 2px solid transparent;
        border-radius: 50%;
    }
    div {
        display: flex;
        flex-direction: column;
        font-weight: 600;
        font-size: 16px;
        margin-left: 5px;
        line-height: 1.5;
        a:last-child {
            button {
                cursor: pointer;
                padding: 5px 10px;
                border-radius: 16px;
                background-color: transparent;
                border: none;
                box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.7);
                display: flex;
                align-items: center;
                transition: box-shadow 167ms, background-color 167ms;
                &:hover {
                    box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.7);
                    background-color: rgba(0, 0, 0, 0.08);
                }

                span {
                    display: flex;
                    align-items: center;
                    color: rgba(0, 0, 0, 0.5);
                    font-weight: 600;
                }

                span:first-child {
                    margin-right: 3px;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }

                span:last-child {
                    margin-left: 3px;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
`;

const ShareCreations = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 24px 12px 16px;
`;

const AssetButton = styled.button`
    display: flex;
    align-items: center;
    height: 40px;
    min-width: auto;
    border: none;
    background: none;
    justify-content: center;
    cursor: pointer;
    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
        border-radius: 50%;
    }
`;

const AttachAssets = styled.div`
    align-items: center;
    display: flex;
    padding-right: 8px;
    ${AssetButton} {
        width: 40px;
    }
`;

const ShareComment = styled.div`
    padding-left: 8px;
    margin-right: auto;
    border-left: 1px solid rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
`;

const LiButton = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(0, 0, 0, 0.5);
`;

const AssetCommentButton = styled.button`
    display: flex;
    align-items: center;
    min-width: auto;
    border: none;
    background: none;
    justify-content: center;
    font-size: 13px;
    padding: 5px 10px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
        border-radius: 16px;
    }

    & svg {
        margin-right: 5px;
    }
`;

const PostButton = styled.button`
    min-width: 60px;
    height: fit-content;
    border-radius: 1.6rem;
    padding: 8px 16px;
    border: none;
    background-color: ${props =>
        props.disabled ? "rgba(0,0,0,0.08)" : "#0a66c2"};
    color: ${props => (props.disabled ? "rgba(0,0,0,0.3)" : "white")};
    font-weight: bold;
    font-size: 14px;

    transition: background 0.5s ease-out;
    &:hover {
        ${props =>
            props.disabled
                ? "rgba(0,0,0,0.15)"
                : "background: #004182; cursor: pointer;"};
    }
`;

const Editor = styled.div`
    margin: 12px 24px;

    textarea {
        font-size: 15px;
        width: 100%;
        min-height: 100px;
        resize: none;
        border: none;
        outline: none;
    }

    input {
        width: 100%;
        height: 35px;
        font-size: 16px;
        margin-bottom: 20px;
    }
`;

const AddHastag = styled.div`
    position: sticky;
    bottom: 0px;
    background-color: white;

    div {
        padding: 12px 24px 4px 16px;
        width: 100%;
        height: 100%;
        a {
            width: 100%;

            button {
                transition: background-color 167ms;
                background-color: transparent;
                outline: none;
                border: none;
                cursor: pointer;
                color: #0a66c2;
                padding: 6px 8px;
                border-radius: 0.4rem;
                &:hover {
                    background-color: rgb(112 181 249 / 20%);
                }
            }
        }
    }
`;

const MediaLoaded = styled.div`
    width: 100%;
    padding: 12px 24px;

    div {
        video {
            border-radius: 1rem;
            width: 100%;
            height: 100%;
        }
        position: relative;
        span {
            position: absolute;
            top: 1rem;
            right: 1rem;
            display: flex;
            flex-direction: row;
            button {
                cursor: pointer;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 32px;
                height: 32px;
                background-color: rgba(0, 0, 0, 0.5);
                border: none;
                transition: background-color 167ms;
                &:hover {
                    background-color: rgba(0, 0, 0, 0.9);
                }

                img {
                    width: 16px;
                    height: 16px;
                }
            }
            button:last-child {
                margin-left: 5px;
            }
        }
        img {
            border-radius: 1rem;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;
