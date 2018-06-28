import React from 'react'
import Link from 'gatsby-link'
import LazyLoad from 'react-lazyload'

import p1 from './photo/lost/1.jpg'
import p2 from './photo/lost/2.jpg'
import p3 from './photo/lost/3.jpg'
import p4 from './photo/lost/4.jpg'
import p5 from './photo/lost/5.jpg'
import p6 from './photo/lost/6.jpg'
import p7 from './photo/lost/7.jpg'
import p8 from './photo/lost/8.jpg'
import p9 from './photo/lost/9.jpg'

export default class Solitude extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <LazyLoad height={200}><img src={p1} alt={"p1"}/></LazyLoad>
                <LazyLoad height={200}><img src={p2} alt={"p2"}/></LazyLoad>
                <LazyLoad height={200}><img src={p3} alt={"p3"}/></LazyLoad>
                <LazyLoad height={200}><img src={p4} alt={"p4"}/></LazyLoad>
                <LazyLoad height={200}><img src={p5} alt={"p5"}/></LazyLoad>
                <LazyLoad height={200}><img src={p6} alt={"p6"}/></LazyLoad>
                <LazyLoad height={200}><img src={p7} alt={"p7"}/></LazyLoad>
                <LazyLoad height={200}><img src={p8} alt={"p8"}/></LazyLoad>
                <LazyLoad height={200}><img src={p9} alt={"p9"}/></LazyLoad>
            </div>
        );
    }
}

