import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PostModel from "./PostModal";
import { getArticlesAPI } from "../actions";

function Mainside(props) {
    const [showModal, setShowModal] = useState("close");
    const [mediamodal, setMediaModal] = useState("");
    const handleClick = (e, param) => {
        e.preventDefault();
        setMediaModal(param);
        switch (showModal) {
            case "open":
                setShowModal("close");
                setMediaModal("modal");
                break;
            case "close":
                setShowModal("open");
                break;
            default:
                setShowModal("close");
                break;
        }
    };

    useEffect(() => {
        props.getArticles();
    }, []);

    return (
        <Container>
            <ShareBox>
                <div>
                    <img
                        src={
                            props.user
                                ? props.user.photoURL
                                : "/images/user.svg"
                        }
                        alt=""
                    />
                    <button onClick={handleClick}>Start a post</button>
                </div>
                <div>
                    <button onClick={e => handleClick(e, "image")}>
                        <img src="/images/photo-icon.svg" alt="" />
                        <span>Photo</span>
                    </button>

                    <button onClick={e => handleClick(e, "video")}>
                        <img src="/images/video-icon.svg" alt="" />
                        <span>Video</span>
                    </button>

                    <button>
                        <img src="/images/event-icon.svg" alt="" />
                        <span>Event</span>
                    </button>

                    <button>
                        <img src="/images/article-icon.svg" alt="" />
                        <span>Article</span>
                    </button>
                </div>
            </ShareBox>
            {props.loading && props.mediaType !== "text" && (
                <LoadingStatus loadingBar={props.loadingBar}>
                    <div>
                        <span>
                            <img
                                src={
                                    props.mediaType === "image"
                                        ? "/images/photo-icon.svg"
                                        : props.mediaType === "video" &&
                                          "/images/video-icon.svg"
                                }
                                alt=""
                            />
                        </span>
                    </div>
                    <div>
                        <p>Cargando... Queda menos de 1 minuto</p>
                        <p>
                            0
                            <a>
                                <span>
                                    <span></span>
                                </span>
                            </a>
                            100
                        </p>
                    </div>
                    <div>
                        <span>
                            <img src="/images/ellipsis.svg" alt="" />
                        </span>
                    </div>
                </LoadingStatus>
            )}

            {props.articles.length === 0 ? (
                <NoPost>No post Yet</NoPost>
            ) : (
                <OrderLine>
                    <div></div>
                    <div>
                        <span>Order by:</span>

                        <span>Popular</span>
                        <img src="/images/down-icon.svg" alt="" />
                    </div>
                </OrderLine>
            )}
            <div>
                {props.articles.length > 0 &&
                    props.articles.map((article, key) => (
                        <Article key={key}>
                            <ShareActor>
                                <a>
                                    <img src={article.actor.image} alt="" />
                                    <div>
                                        <span>{article.actor.tittle}</span>
                                        <span>{article.actor.description}</span>
                                        <span>
                                            {" "}
                                            {article.actor.date
                                                .toDate()
                                                .toLocaleDateString()}{" "}
                                            •
                                            <img
                                                src="/images/world-icon.svg"
                                                alt=""
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                }}
                                            />
                                        </span>
                                    </div>
                                </a>
                                <button>
                                    <img src="/images/ellipsis.svg" alt="" />
                                </button>
                            </ShareActor>
                            <Description>{article.description}</Description>
                            <SharedImg>
                                <a>
                                    {article.sharedImg && (
                                        <img
                                            src={article.sharedImg}
                                            alt=""
                                            key={article.sharedImg}
                                        />
                                    )}

                                    {article.sharedVideo && (
                                        <video
                                            controls
                                            style={{ width: "100%" }}
                                            key={article.sharedVideo}
                                        >
                                            <source src={article.sharedVideo} />
                                        </video>
                                    )}
                                </a>
                            </SharedImg>
                            <SocialCounts>
                                <li>
                                    <button>
                                        <img
                                            src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
                                            alt=""
                                        />
                                        <img
                                            src="https://static-exp1.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8"
                                            alt=""
                                        />
                                    </button>
                                </li>
                                <li>
                                    <a>75</a>
                                    <span>•</span>
                                    <a> 2 comments</a>
                                </li>
                            </SocialCounts>
                            <SocialActions>
                                <button>
                                    <img src="/images/like-icon.svg" alt="" />
                                    <span>Like</span>
                                </button>
                                <button>
                                    <img
                                        src="/images/comments-icon.svg"
                                        alt=""
                                    />
                                    <span>Comments</span>
                                </button>
                                <button>
                                    <img src="/images/share-icon.svg" alt="" />
                                    <span>Share</span>
                                </button>
                                <button>
                                    <img src="/images/send-icon.svg" alt="" />
                                    <span>Send</span>
                                </button>
                            </SocialActions>
                        </Article>
                    ))}
            </div>
            <PostModel
                showModal={showModal}
                handleClick={handleClick}
                mediaModal={mediamodal}
            />
        </Container>
    );
}

const mapStateToProps = state => ({
    loading: state.articleState.loading,
    mediaType: state.articleState.mediaType,
    user: state.userState.user,
    articles: state.articleState.articles,
    loadingBar: state.loadingState.loadingPorcent,
});

const mapDispatchToProps = dispatch => ({
    getArticles: () => dispatch(getArticlesAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mainside);

const Container = styled.div`
    grid-area: main;
`;

const CommonCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 7px;
    position: relative;
    border: none;
    box-shadow: 0 0 0 0.5px rgba(0 0 0 / 15%), 0 0 0 rgba(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
    display: flex;
    flex-direction: column;
    color: #958b7b;
    margin: 0 0 8px;
    background: white;

    div {
        button {
            outline: none;
            color: rgba(0, 0, 0, 0.6);
            font-size: 14px;
            line-height: 1.5;
            min-height: 48px;
            background: transparent;
            border: none;
            display: flex;
            align-items: center;
            font-weight: 600;
        }
        &:first-child {
            display: flex;
            align-items: center;
            padding: 8px 16px 0px 16px;

            img {
                width: 48px;
                border-radius: 50%;
                margin-right: 8px;
            }
            button {
                font-size: 13px;
                margin: 4px 0;
                flex-grow: 1;
                border-radius: 35px;
                padding-left: 16px;
                border: 1px solid rgba(0, 0, 0, 0.15);
                background-color: white;
                text-align: left;
                cursor: pointer;
                transition: background-color 167ms;
                &:hover {
                    background-color: rgba(0, 0, 0, 0.1);
                }
            }
        }

        &:nth-child(2) {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding-bottom: 4px;

            button {
                transition: background-color 167ms;
                cursor: pointer;
                &:hover {
                    background-color: rgba(0, 0, 0, 0.08);
                    border-radius: 4px;
                }

                img {
                    margin: 0 4px 0 -2px;
                }

                span {
                    color: rgb(0 0 0 / 60%);
                    font-weight: 400;
                }
            }
        }
    }
`;

const Article = styled(CommonCard)`
    padding: 0;
    margin: 0 0 8px;
    overflow: visible;
`;

const ShareActor = styled.div`
    padding-right: 40px;
    flex-wrap: nowrap;
    padding: 12px 16px 0;
    margin-bottom: 8px;
    align-items: center;
    display: flex;
    a {
        margin-right: 12px;
        flex-grow: 1;
        overflow: hidden;
        display: flex;
        text-decoration: none;

        img {
            width: 48px;
            height: 48px;
        }

        & > div {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            flex-basis: 0;
            margin-left: 8px;
            overflow: hidden;
            justify-content: space-between;
            span:first-child {
                font-weight: bold;
                font-size: 14px !important;
                margin-bottom: 2px;
            }
            span {
                text-align: left;

                &:nth-child(n + 1) {
                    font-size: 12px;
                    color: rgba(0, 0, 0, 0.6);
                }

                &:nth-child(2) {
                    margin-bottom: 3px;
                }

                &:last-child {
                    display: flex;
                    align-items: center;
                    img {
                        margin-left: 5px;
                    }
                }
            }
        }
    }

    button {
        position: absolute;
        cursor: pointer;
        margin-top: 5px;
        right: 12px;
        top: 0;
        background: transparent;
        border: none;
        outline: none;
    }
`;

const Description = styled.div`
    padding: 5px 16px;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.9);
    font-size: 14px;
    text-align: left;
`;

const SharedImg = styled.div`
    margin-top: 8px;
    width: 100%;
    display: block;
    position: relative;
    background-color: #f9fafb;

    img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`;

const SocialCounts = styled.ul`
    line-height: 1.3;
    display: flex;
    align-items: center;
    overflow: auto;
    margin: 0 16px;
    padding: 8px 0;
    border-bottom: 1px solid #e9e5df;
    list-style: none;
    li {
        color: rgba(0, 0, 0, 0.5);
        font-size: 12px;
        button {
            background-color: transparent;
            border: none;
            outline: none;
            display: flex;
            img {
                margin-right: 3px !important;
            }
        }
        span {
            margin: 0 3px 0 3px;
        }
        a {
            margin-right: 3px;
        }
    }
`;

const SocialActions = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    margin: 0;
    min-height: 40px;
    padding: 4px 8px;
    button {
        display: inline-flex;
        align-items: center;
        padding: 10px 8px;
        color: rgba(0, 0, 0, 0.8);
        border: none;
        background-color: transparent;
        cursor: pointer;

        img {
            color: rgba(0, 0, 0, 0.6);
        }

        span {
            margin-left: 8px;
        }
    }

    button:hover {
        background-color: rgba(0, 0, 0, 0.08);
        border-radius: 6px;
        transition: 180ms;
    }
`;

const OrderLine = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    margin-bottom: 8px;
    div:first-child {
        width: 100%;
        height: 1px;
        background-color: rgba(0, 0, 0, 0.15);
        flex: 1;
        margin-right: 8px;
    }

    div:last-child {
        flex: 0;
        display: flex;
        align-items: center;

        span:first-child {
            white-space: nowrap;
            color: rgba(0, 0, 0, 0.6);
        }

        span:nth-child(2) {
            font-weight: bold;
            margin: 0px 5px;
            cursor: pointer;
        }

        img {
            cursor: pointer;
        }
    }
`;

const LoadingStatus = styled(CommonCard)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    div:first-child {
        padding: 15px;
        span {
        }
    }

    div:nth-child(2) {
        padding: 15px 0 10px 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        p:first-child {
            font-size: 13px;
            color: rgba(0, 0, 0, 0.5);
            text-align: left;
        }
        p:last-child {
            display: flex;
            flex-direction: row;
            margin-top: 5px;
            font-size: 14px;
            color: rgba(0, 0, 0, 0.7);
            & a {
                display: flex;
                align-items: center;
                width: 100%;
                margin: 0 5px 0 5px;
                & > span {
                    position: relative;
                    display: flex;
                    background-color: rgba(0, 0, 0, 0.12);
                    border-radius: 1rem;
                    height: 8px;
                    width: 100%;

                    span {
                        position: absolute;
                        background-color: #586879;
                        display: flex;
                        border-radius: 1rem;
                        height: 8px;
                        width: ${props =>
                            props.loadingBar && props.loadingBar}%;
                        trnasition: width 167ms;
                    }
                }
            }
        }
    }

    div:last-child {
        display: flex;
        align-items: center;
        padding: 15px;
    }
`;

const NoPost = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    color: rgba(0, 0, 0, 0.5);
`;
