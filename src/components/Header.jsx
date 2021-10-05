import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { signOut } from "../actions";

function Header(props) {
    return (
        <Container>
            <Content>
                <Logo>
                    <a href="/home">
                        <img src="/images/home-logo.svg" alt="" />
                    </a>
                </Logo>
                <Search>
                    <div>
                        <input type="text" placeholder="Search" />
                    </div>
                    <SearchIcon>
                        <img src="/images/search-icon.svg" alt="" />
                    </SearchIcon>
                </Search>
                <Nav>
                    <NavlistWrap>
                        <Navlist className="active">
                            <a>
                                <img src="/images/nav-home.svg" alt="" />
                                <span>Home</span>
                            </a>
                        </Navlist>
                        <Navlist>
                            <a>
                                <img src="/images/nav-network.svg" alt="" />
                                <span>My Network</span>
                            </a>
                        </Navlist>
                        <Navlist>
                            <a>
                                <img src="/images/nav-jobs.svg" alt="" />
                                <span>Jobs</span>
                            </a>
                        </Navlist>
                        <Navlist>
                            <a>
                                <img src="/images/nav-messaging.svg" alt="" />
                                <span>Messaging</span>
                            </a>
                        </Navlist>
                        <Navlist>
                            <a>
                                <img
                                    src="/images/nav-notifications.svg"
                                    alt=""
                                />
                                <span>Notifications</span>
                            </a>
                        </Navlist>
                        <User>
                            <a>
                                {props.user && props.user.photoURL ? (
                                    <img src={props.user.photoURL} alt="" />
                                ) : (
                                    <img src="/images/user.svg" alt="" />
                                )}
                                <span>
                                    Me
                                    <img src="/images/down-icon.svg" alt="" />
                                </span>
                            </a>

                            <SignOut onClick={() => props.signOut()}>
                                <a>Sign Out</a>
                            </SignOut>
                        </User>
                        <Work>
                            <a>
                                <img src="/images/nav-work.svg" alt="" />
                                <span>
                                    Products
                                    <img src="/images/down-icon.svg" alt="" />
                                </span>
                            </a>
                        </Work>
                        <TryPremium>
                            <span>Try premium free</span>
                        </TryPremium>
                    </NavlistWrap>
                </Nav>
            </Content>
        </Container>
    );
}

const mapStateToProps = state => ({
    user: state.userState.user,
});

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

const Container = styled.div`
    background-color: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    left: 0;
    padding: 0 24px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 52px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 970px) {
        justify-content: center;
    }
`;

const Logo = styled.span`
    margin-right: 8px;
    font-size: 0px;
`;

const Search = styled.div`
    opacity: 1;
    position: relative;

    input {
        border: none;
        box-shadow: none;
        background-color: #eef3f8;
        color: rgba(0, 0, 0, 0.9);
        width: 232px;
        padding: 0 8px 0 40px;
        line-height: 1.75;
        font-weight: 400;
        font-size: 14px;
        height: 34px;
        border-color: #dce6f1;
        margin-right: 120px;
        border-radius: 5px;

        @media (max-width: 1186px) {
            margin-right: auto;
        }
    }
`;

const SearchIcon = styled.div`
    width: 40px;
    position: absolute;
    z-index: 1;
    top: 10px;
    left: 2px;
    border-radius: 0 2px 2px 0;
    margin: 0;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 960px) {
        position: absolute;
        top: 5px;
        left: 0;
        z-index: 999;

        img {
            width: 24px;
            height: 24px;
        }
    }
`;

const Nav = styled.div`
    display: block;
    @media (max-width: 970px) {
        position: fixed;
        left: 0;
        bottom: 0;
        background: white;
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
`;

const NavlistWrap = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    list-style-type: none;

    .active {
        span:after {
            content: "";
            transform: scale(1);
            border-bottom: 2px solid var(--white, #fff);
            bottom: 0;
            left: 0;
            position: absolute;
            transition: transform 0.2s ease-in-out;
            width: 100%;
            border-color: rgba(0, 0, 0, 0.9);
        }
    }
`;

const Navlist = styled.li`
    display: flex;
    align-items: center;
    a {
        align-items: center;
        background: transparent;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        font-weight: 400;
        justify-content: center;
        line-height: 1.5;
        min-height: 52px;
        min-width: 80px;
        position: relative;
        text-decoration: none;
        cursor: pointer;
    }

    span {
        color: rgb(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
    }

    @media (max-width: 768px) {
        min-width: 70px;
    }

    &:hover,
    &active {
        a {
            span {
                color: rgb(0, 0, 0, 0.9);
            }
        }
    }
`;

const SignOut = styled.div`
    position: absolute;
    top: 50px;
    background: white;
    border-radius: 0 0 5px 5px;
    width: 100px;
    height: 40px;
    font-size: 16px;
    transition-duration: 167ms;
    text-align: center;
    display: none;
    cursor: pointer;
`;

const User = styled(Navlist)`
    a > svg {
        width: 24px;
        border-radius: 50px;
    }

    a > img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }

    span {
        display: flex;
        align-items: center;
    }

    &:hover {
        ${SignOut} {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;

const Work = styled(User)`
    border-left: 1px solid rgba(0, 0, 0, 0.08);
`;

const TryPremium = styled.div`
    display: flex;
    align-items: center;

    span {
        font-size: 12px;
        color: #915907;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }
`;
