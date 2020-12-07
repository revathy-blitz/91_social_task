import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ArrowLeft, ArrowRight, Reddit  } from '@material-ui/icons';
import { IconButton } from '@material-ui/core'

import Layout from '../_layout';
import { Container, HeroContainer, HistoryContainer, Card } from '../../components/style';
import HistoryImage from '../../assests/history.jpg'
import { getHistoryAction } from '../../redux/history/actions';

const History = (props) => {
    const { getHistory, historyData } = props
    
    const [increment, setIncrement] = useState(0);
    
    useEffect(() => {
        getHistory();
    }, []);

    return (
        <Layout>
            <Container>
                <HeroContainer>
                    <div className="infoContainer">
                        <div className="title">
                        Welcome to SpaceX Dashboard
                        </div>
                        <div className="subtitle">
                            An open platform to see SpaceX History data.
                        </div>
                    </div>
                </HeroContainer>
                {historyData && historyData.length > 0
                    && <HistoryContainer>
                        <div className="nav-button">
                            <IconButton disabled={increment === 0} onClick={() => setIncrement(increment-1)}>
                                <ArrowLeft />
                            </IconButton>
                            <span>{increment+1}</span>
                            <IconButton disabled={increment === historyData.length-1 } onClick={() => setIncrement(increment+1)}>
                                <ArrowRight />
                            </IconButton>
                        </div>
                        <Card onClick={() => {}}>
                            <div className="image">
                                <img src={HistoryImage} alt="SpaceX History" />
                            </div>
                            <div className="infoBox">
                                <div className="title">{historyData[increment].title}</div>
                                <div className="content">
                                    {historyData[increment].details}
                                </div>
                                <div className="detail">
                                    Flight #: {historyData[increment].flight_number || 'NA'}
                                </div>
                                <div className="detail">
                                    Event date: {historyData[increment].event_date_utc}
                                </div>
                                <div className="links">
                                    <div>
                                        {historyData[increment].links.article && <a href={historyData[increment].links.article}>Reference link </a>}
                                        {historyData[increment].links.wikipedia && <a href={historyData[increment].links.wikipedia}>wiki link </a>}
                                    </div>
                                    {historyData[increment].links.reddit && 
                                    <IconButton onClick={() => window.open(historyData[increment].links.reddit)}>
                                        <Reddit style={{ fontSize: 40, color: '#2D6C97' }} />
                                    </IconButton>
                                    }
                                </div>
                            </div>
                        </Card>
                    </HistoryContainer>}
            </Container>
        </Layout>
    );
};

const mapStateToProps = state => ({
    historyData: state.history.history,
});

const mapDispatchToProps = dispatch => ({
    getHistory: () => dispatch(getHistoryAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(History);

