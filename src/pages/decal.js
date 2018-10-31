import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { CSSTransitionGroup } from 'react-transition-group'
import '../layouts/decal.scss'
import syllabus from '../../docs/syllabus-fa18.pdf'

export default class Decal extends React.Component {
    render() {
        if (this.props.errors && this.props.errors.length) {
            this.props.error.forEach(({ message }) => {
                console.error(`Rendering error: ${message}`);
            });
            return <h1>Errors found: Check the console for details</h1>;
        }

        return (
            <div className="teaching">
            <CSSTransitionGroup
                transitionName="fade"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}>
            <h1>photography principles, <br/><br/><br/>fall 2018</h1>
            <p> Tuesday, 6-8PM (Evans 3) </p>
                <div className="navigation">
                    <div className="left">
                        Contact:
                    </div>
                    <div className="info">
                        OH: InnoD Table—W, F 12-1PM (Alan) <br/>
                        <a href="mailto:nguyenalan@berkeley.edu">nguyenalan@berkeley.edu</a><br/>
                        <a href="mailto:jackiexu@berkeley.edu">jackiexu@berkeley.edu</a>
                    </div>
                    <div className="resources">
                        <b>Resources:</b> <br/>
                        <a href="https://innovativedesign.club/">Innovative Design</a><br/>
                        <a href="https://docs.google.com/spreadsheets/d/1hSR9HlZYljofU44mXLsjmLFbuUJcmW7Vofw_o5-ivqI/edit?usp=sharing">Inspiration Sheet</a><br/>
                        <a href="https://docs.google.com/spreadsheets/d/1PArD1oQ9y4Q8LU_dOfJamlJugfHgSzqSV2-zaDdFen8/edit?usp=sharing">Final Topics</a><br/>
                        <a href={syllabus}>Syllabus</a>
                    </div>
                    <div className="slides">
                        <b>Slides:</b> <br/>
                        <a href="https://docs.google.com/presentation/d/1Njo6M9OSyVV9uivp_pY2f6Os_TA-RzCYrcpkzD5BLko/edit?usp=sharing">Week 1: Introduction</a><br/>
                        <a href="https://docs.google.com/presentation/d/1cjM1qIWg2gW6wZgC9QS1Rtz_LA9vsflEZNi23Z6wuqk/edit?usp=sharing">Week 2: Exposure, Composition</a><br/>
                        <a href="https://docs.google.com/presentation/d/1qO2upR4d_E56yqIfYJulNcLOBvjQuHZwqFP9lUjHucQ/edit?usp=sharing">Week 3: Composition, Lighting, Lightroom</a><br/>
                        <a href="https://docs.google.com/presentation/d/1wdaT1fnmnFPaHToxCh_Z2l1SdeEVB9qy_cvirKl0EG0/edit?usp=sharing">Week 4: Color</a><br/>
                        <a href="https://docs.google.com/presentation/d/1EUK8ZrfB3UcYvBnBACY4LRXqHZygrZbj0s3Dsm74g_Y/edit?usp=sharing">Week 5: Portraits</a><br/>
                        <a href="https://docs.google.com/presentation/d/1L8Hl8JxSBghpcUBrlt6YASNfsca3h87fD_nQ1ExQr5E/edit?usp=sharing">Week 6: Portraits, Landscape</a><br/>
                        <a href="https://docs.google.com/presentation/d/1YiKsoH8M44m0hMMD9CsgBI_ipIRqxftc7c_bgC74PLk/edit?usp=sharing">Week 7: Street, Photojournalism</a><br/>
                        <a href="https://docs.google.com/presentation/d/14o40kcqThuf2wK4tjzF_-i2Dl2jrXyBC9bhfLP2bR7M/edit?usp=sharing">Week 8: Presentations</a><br/>
                        <a href="https://docs.google.com/presentation/d/1FQIpoIpxR_1PGuZy95E5MCfF5sqz37vruprG2AzU550/edit?usp=sharing">Week 9: Editing Styles, Layout</a><br/>
                        Week 10: Studio<br/>
                        Week 11: Gear, Film<br/>
                    </div>
                </div>
            </CSSTransitionGroup>
            </div>
        );
    }
}

