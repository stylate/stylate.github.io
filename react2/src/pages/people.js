import React from 'react'
import Link from 'gatsby-link'
import LazyLoad from 'react-lazyload'

import p2 from './photo/people/2.jpg'
import p3 from './photo/people/3.jpg'
import p4 from './photo/people/4.jpg'
import p5 from './photo/people/5.jpg'
import p6 from './photo/people/6.jpg'
import p7 from './photo/people/7.jpg'
import p8 from './photo/people/8.jpg'

export default class People extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <LazyLoad height={200}><img src={p2} alt={"p2"}/></LazyLoad>
                <LazyLoad height={200}><img src={p3} alt={"p3"}/></LazyLoad>
                <LazyLoad height={200}><img src={p4} alt={"p4"}/></LazyLoad>
                <LazyLoad height={200}><img src={p5} alt={"p5"}/></LazyLoad>
                <LazyLoad height={200}><img src={p6} alt={"p6"}/></LazyLoad>
                <LazyLoad height={200}><img src={p7} alt={"p7"}/></LazyLoad>
                <LazyLoad height={200}><img src={p8} alt={"p8"}/></LazyLoad>
            </div>
        );
    }
}

