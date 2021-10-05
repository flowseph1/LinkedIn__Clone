import React from "react";
import styled from "styled-components";

function Rightside() {
    return (
        <Container>
            <FollowCard>
                <Tittle>
                    <h2>Add your feed</h2>
                    <img src="/images/feed-icon.svg" alt="" />
                </Tittle>

                <FeedList>
                    <li>
                        <a>
                            <Avatar>
                                <img
                                    src="https://media-exp1.licdn.com/dms/image/C4D03AQE8tuDC7QL-Nw/profile-displayphoto-shrink_100_100/0/1555526594402?e=1638403200&v=beta&t=O0xBRj_EmS6r6siS-cukRDL8Rfla2Mucp1h_KiZn65M"
                                    alt=""
                                />
                            </Avatar>
                        </a>
                        <div>
                            <span>
                                Simon Sinek
                                <img src="/images/linkedin-icon.svg" alt="" />
                            </span>
                            <span>Optimist and Author at Simon Sinex Inc.</span>

                            <button>
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
                                    <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
                                </svg>
                                Follow
                            </button>
                        </div>
                    </li>
                    <li>
                        <a>
                            <Avatar>
                                <img
                                    src="https://media-exp1.licdn.com/dms/image/C4D03AQHqRRhVsnaziA/profile-displayphoto-shrink_100_100/0/1626063510328?e=1638403200&v=beta&t=J-K9QCPq5ZOSzQ6Zt9NOV-LrJNEBmeFdUMtmwIrtTyU"
                                    alt=""
                                />
                            </Avatar>
                        </a>
                        <div>
                            <span>
                                Bill Gates
                                <img src="/images/linkedin-icon.svg" alt="" />
                            </span>
                            <span>
                                Co-chair, Bill & Melinda Gates Foundation
                            </span>
                            <button>
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
                                    <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
                                </svg>
                                Follow
                            </button>
                        </div>
                    </li>
                    <li>
                        <a>
                            <Avatar>
                                <img
                                    src="https://media-exp1.licdn.com/dms/image/C4D0BAQFvS7f5pecgDw/company-logo_100_100/0/1519862823951?e=1640822400&v=beta&t=9XWHhI6FxnlRLw7e0FGRQ63dZgd4bRAuHTbMAR09nM8"
                                    alt=""
                                />
                            </Avatar>
                        </a>
                        <div>
                            <span>Tigo</span>
                            <span>Empresa Telecomunicaciones</span>
                            <button>
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
                                    <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
                                </svg>
                                Follow
                            </button>
                        </div>
                    </li>
                </FeedList>

                <Recommendation>
                    <span>
                        View all recommendations
                        <img src="/images/arrow-icon.svg" alt="" />
                    </span>
                </Recommendation>
            </FollowCard>
            <BannerCard>
                <img
                    src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
                    alt=""
                />
            </BannerCard>
        </Container>
    );
}

export default Rightside;

const Container = styled.div`
    grid-area: rightside;
    @media (max-width: 896px) {
        display: none;
    }
`;

const FollowCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 7px;
    position: relative;
    border: none;
    box-shadow: 0 0 0 0.5px rgba(0 0 0 / 15%), 0 0 0 rgba(0 0 0 / 20%);
    padding: 12px;
`;

const Tittle = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    width: 100%;
    color: rgba(0, 0, 0, 0.6);
`;

const FeedList = styled.ul`
    margin-top: 16px;
    li {
        display: flex;
        margin: 12px 0;
        position: relative;
        font-size: 14px;

        & > div {
            display: flex;
            flex-direction: column;
            text-align: left;
            cursor: pointer;
            span:first-child {
                font-weight: bold;
                margin-bottom: 5px;
                display: flex;
                align-items: center;
                img {
                    margin-left: 5px;
                }
            }

            span:nth-child(2) {
                font-size: 12px;
                color: rgba(0, 0, 0, 0.5);
                margin-bottom: 5px;
            }
        }

        button {
            background-color: transparent;
            color: rgba(0, 0, 0, 0.6);
            box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.5);
            padding: 16px;
            align-items: center;
            border-radius: 1rem;
            box-sizing: border-box;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
            max-height: 32px;
            max-width: fit-content;
            text-align: center;
            outline: none;
            border: none;
            cursor: pointer;
            transition: background-color 167ms, box-shadow 167ms;
            &:hover {
                box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.5);
                background-color: rgba(0, 0, 0, 0.08);
            }
        }
    }
`;

const Avatar = styled.div`
    width: 48px;
    height: 48px;
    margin-right: 8px;
    cursor: pointer;
    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`;

const Recommendation = styled.a`
    color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    font-size: 16px;
    cursor: pointer;
    font-size: 14px;

    span {
        display: flex;
        align-items: center;
        padding: 5px 8px;
        color: rgba(0, 0, 0, 0.7);
        img {
            margin-left: 3px;
        }
        &:hover {
            background-color: rgba(0, 0, 0, 0.1);
            border-radius: 3px;
        }
    }
`;

const BannerCard = styled(FollowCard)`
    cursor: pointer;
    img {
        width: 100%;
        height: 100%;
    }
`;
