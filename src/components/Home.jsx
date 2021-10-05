import React from "react";
import styled from "styled-components";
import Leftside from "./Leftside";
import Mainside from "./Mainside";
import Rightside from "./Rightside";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

function Home(props) {
    return (
        <Container>
            {!props.user && <Redirect to={"/"} />}
            <Section>
                <h5>
                    <a>Hiring in a Hurry? - </a>
                    <p>
                        Find talented pros in record time with Upwork and Keep
                        business moving.
                    </p>
                </h5>
            </Section>
            <Layout>
                <Leftside />
                <Mainside />
                <Rightside />
            </Layout>
        </Container>
    );
}

const mapStateToProps = state => {
    return {
        user: state.userState.user,
    };
};

export default connect(mapStateToProps)(Home);

const Container = styled.div`
    padding-top: 43px;
    width: 100%;
`;

const Content = styled.div`
    max-width: 1128px;
    margin-left: auto;
    margin-right: auto;
`;

const Section = styled.section`
    padding: 16px 0px;
    box-sizing: content-box;
    text-align: center;
    text-decoration: underline;
    width: 100%;
    display: flex;
    justify-content: center;
    h5 {
        display: flex;
        color: #0a66c2;
        font-size: 14px;
        a {
            font-weight: 700;
        }
    }

    p {
        font-size: 14px;
        color: #434646;
        font-weight: 600;
    }
`;

const Layout = styled.div`
    display: grid;
    grid-template-areas: "leftside main rightside";
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
    column-gap: 25px;
    row-gap: 25px;
    grid-template-rows: auto;
    margin-right: auto;
    margin-left: auto;

    @media (max-width: 731px) {
        display: flex;
        flex-direction: column;
        padding: 0 5px;
    }

    @media (max-width: 896px) {
        width: 700px;
        grid-template-areas: "leftside main";
        grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
    }

    @media (min-width: 962px) {
        width: 960px;
    }

    @media (min-width: 1194px) {
        width: 960px;
    }

    @media (min-width: 1200px) {
        width: 1128px;
    }
`;
