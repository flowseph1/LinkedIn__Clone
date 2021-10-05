import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

function Leftside(props) {
    return (
        <Container>
            <Artcard>
                <Userinfo>
                    <Carbackground />
                    <a>
                        <Photo userPhoto={props.user && props.user.photoURL} />
                        <Link>
                            Welcome,{" "}
                            {props.user ? props.user.displayName : "there"}
                        </Link>
                    </a>
                    <a>
                        <AddPhotoText>Add a photo</AddPhotoText>
                    </a>
                </Userinfo>
                <Widget>
                    <a>
                        <div>
                            <span>Connections</span>
                            <span>Grow your network</span>
                        </div>
                        <img src="/images/widget-icon.svg" alt="" />
                    </a>
                </Widget>
                <TryPremium>
                    <div>
                        <span>
                            Get access to information and exclusive tools
                        </span>
                        <span>
                            <img src="/images/trypremium-icon.svg" alt="" />
                            Try premium free
                        </span>
                    </div>
                </TryPremium>
                <Item>
                    <span>
                        <img src="/images/item-icon.svg" alt="" />
                        My items
                    </span>
                </Item>
            </Artcard>
            <CommunityCard>
                <a>
                    <span>Groups</span>
                </a>
                <a>
                    <span>
                        Events
                        <img src="/images/plus-icon.svg" alt="" />
                    </span>
                </a>
                <a>
                    <span>Follow Hashtags</span>
                </a>
                <a>
                    <span>Discover More</span>
                </a>
            </CommunityCard>
        </Container>
    );
}

const mapStateToProps = state => {
    return {
        user: state.userState.user,
    };
};

export default connect(mapStateToProps)(Leftside);

const Container = styled.div`
    grid-area: "leftside";
`;

const Artcard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 7px;
    transition: box-shadow 83ms;
    position: relative;
    border: none;
    box-shadow: 0 0 0 0.5px rgba(0 0 0 / 15%), 0 0 0 rgba(0 0 0 / 20%);
`;

const Userinfo = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding: 12px 12px 16px;
    word-wrap: break-word;
    word-break: break-word;
`;

const Carbackground = styled.div`
    background: url("/images/card-bg.svg");
    background-position: center;
    background-size: 462px;
    height: 54px;
    margin: -12px -12px 0;
`;

const Photo = styled.div`
    box-shadow: none;
    background: url(${props =>
        props.userPhoto ? props.userPhoto : "/images/photo.svg"});
    width: 72px;
    height: 72px;
    box-sizing: border-box;
    background-clip: content-box;
    background-color: white;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border: 2px solid white;
    margin: -38px auto 12px;
    border-radius: 50%;
`;

const Link = styled.div`
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.9);
    font-weight: 600;
`;

const AddPhotoText = styled.div`
    color: #0a66c2;
    margin-top: 4px;
    font-size: 12px;
    line-height: 1.33;
    font-weight: 400;
    cursor: pointer;
`;

const Widget = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding-top: 12px;
    padding-bottom: 12px;
    cursor: pointer;

    & > a {
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 12px;
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
    }

    div {
        display: flex;
        flex-direction: column;
        text-align: left;

        span {
            font-size: 12px;
            line-height: 1.333;

            &:first-child {
                color: rgba(0, 0, 0, 0.6);
            }

            &:nth-child(2) {
                color: rgba(0, 0, 0, 1);
            }
        }
    }

    svg {
        color: rgba(0, 0, 0, 1);
    }
`;

const Item = styled.a`
    border-color: rgba(0, 0, 0, 0.8);
    text-align: left;
    padding: 12px;
    font-size: 12px;
    display: block;
    cursor: pointer;
    span {
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 1);
        svg {
            color: rgba(0, 0, 0, 0.6);
        }
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
    }
`;

const CommunityCard = styled(Artcard)`
    padding: 8px 0 0;
    text-align: left;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    a {
        color: black;
        padding: 6px 12px 6px 12px;
        font-size: 12px;
        color: #0a66c2;

        &:hover {
            text-decoration: underline;
        }

        span {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &:last-child {
            display: flex;
            justify-content: center;
            color: rgba(0, 0, 0, 0.6);
            text-decoration: none;
            border-top: 1px solid #d6cec2;
            padding: 12px;
            &:hover {
                background-color: rgba(0, 0, 0, 0.08);
            }
        }
    }
`;

const TryPremium = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding-top: 12px;
    padding-bottom: 12px;
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
        span:last-child {
            color: #0a66c2;
        }
    }

    div {
        padding: 4px 12px;
        display: flex;

        flex-direction: column;
        span:first-child {
            text-align: left;
            font-size: 12px;
            color: rgba(0, 0, 0, 0.5);
        }

        span:last-child {
            display: flex;
            align-items: center;
            text-align: left;
            font-size: 12px;

            img {
                width: 16px;
                height: 16px;
                margin-right: 2px;
            }
        }
    }
`;
