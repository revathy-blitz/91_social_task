import React from 'react';
import Router from 'next/router';
import Layout from './_layout';
import { Container, HeroContainer, AppContainer, Card } from '../components/style';
import HistoryImage from '../assests/history.jpg'
import PayloadImage from '../assests/payload.jpeg'

const Dashboard = () => {
    const onCardClick = (app) => {
        Router.push(`/${app}`);
    };

    return (
        <Layout withHeader={false} withFooter={false} withSidebar defaultOpen currentApp="dashboard">
            <Container>
                <HeroContainer>
                    <div className="infoContainer">
                        <div className="title">
                        Welcome to SpaceX Dashboard
                        </div>
                        <div className="subtitle">
                            An open platform to see SpaceX History and payload data.
                        </div>
                    </div>
                </HeroContainer>
                <AppContainer>
                    <Card onClick={() => onCardClick('history')}>
                        <div className="image">
                            <img src={HistoryImage} alt="SpaceX History" />
                        </div>
                        <div className="infoBox">
                            <div className="title">SpaceX History</div>
                            <div className="content">
                                Place to view SpaceX History data
                            </div>
                        </div>
                    </Card>
                    <Card onClick={() => onCardClick('payload')}>
                        <div className="image">
                            <img src={PayloadImage} alt="SpaceX Payload" />
                        </div>
                        <div className="infoBox">
                            <div className="title">SpaceX Payload</div>
                            <div className="content">
                                Place to view SpaceX Payload data
                            </div>
                        </div>
                    </Card>
                </AppContainer>
            </Container>
        </Layout>
    );
};

export default Dashboard;
