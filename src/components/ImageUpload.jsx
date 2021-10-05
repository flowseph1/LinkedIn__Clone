import React, { useEffect, useRef } from "react";
import styled from "styled-components";

function ImageUpload(props) {
    const handleClose = e => {
        props.setShareImage("");
        props.handleClick(e);
    };

    const imageFile = useRef(null);

    useEffect(() => {
        imageFile.current.click();
    }, []);
    return (
        <Content>
            <Header>
                <h2>Edit your image</h2>
                <button onClick={handleClose}>
                    <img
                        src="/images/close-icon.svg"
                        alt=""
                        onClick={handleClose}
                    />
                </button>
            </Header>
            <SharedImageContent image={props.sharedImage}>
                <UploadImage>
                    <input
                        type="file"
                        accept="image/png, image/jpeg, image/gif"
                        name="image"
                        id="image"
                        ref={imageFile}
                        style={{ display: "none" }}
                        onChange={props.handleChange}
                    />
                    {!props.sharedImage && (
                        <p>
                            <label htmlFor="image">Select image to share</label>
                        </p>
                    )}
                    {props.sharedImage && (
                        <>
                            <img
                                src={URL.createObjectURL(props.sharedImage)}
                                alt=""
                            />

                            <ImageOptions>
                                <button>Edit</button>
                                <button>Tag</button>
                                <button>Alternative text</button>
                            </ImageOptions>
                        </>
                    )}
                </UploadImage>
            </SharedImageContent>
            <Footer>
                <>
                    <button onClick={() => props.switchAssetArea("modal")}>
                        Back
                    </button>
                    {props.sharedImage ? (
                        <button
                            className="btn-done"
                            onClick={() => props.setAssetArea("modal")}
                        >
                            Done
                        </button>
                    ) : (
                        <button
                            onClick={() => props.setAssetArea("modal")}
                            disabled
                        >
                            Done
                        </button>
                    )}
                </>
            </Footer>
        </Content>
    );
}

export default ImageUpload;

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
    padding: ${props => (!props.image ? "48px 0px" : "0px")};
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

const ImageOptions = styled.div`
    display: flex;
    align-items: center;

    button {
        padding: 12px 8px;
        border: none;
        width: 100px;
        background-color: transparent;
        cursor: pointer;
        font-size: 15px;
        color: rgba(0, 0, 0, 0.6);
        transition: background 167ms;
        &:hover {
            background-color: rgba(0, 0, 0, 0.1);
        }
    }
`;
