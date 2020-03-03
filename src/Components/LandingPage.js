import React from 'react';
import {Grid, Cell} from 'react-mdl';
import Ben from './Ben.png';

export class LandingPage extends React.Component{
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src={Ben}
                            alt = "avatar"
                            className="avatar-image"
                        />

                        <div className="banner-text">
                            <h1>Full Stack Developer</h1>
                            <hr/>
                            <p>Java | Spring | Python | React | SQL</p>
                            <div className="social-links">
                                <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-free-code-camp" aria-hidden="true" />
                                </a>

                                <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}