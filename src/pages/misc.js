import React from 'react'
import Link from 'gatsby-link'
import LazyLoad from 'react-lazyload'

import m1 from './photo/misc/1.jpg'
import m2 from './photo/misc/2.jpg'
import m3 from './photo/misc/3.jpg'
import m4 from './photo/misc/4.jpg'
import m5 from './photo/misc/5.jpg'
import m6 from './photo/misc/6.jpg'
import m7 from './photo/misc/7.jpg'

export default class People extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <LazyLoad height={200}><img src={m1} alt={"m1"}/></LazyLoad>
                <LazyLoad height={200}><img src={m2} alt={"m2"}/></LazyLoad>
                <LazyLoad height={200}><img src={m3} alt={"m3"}/></LazyLoad>
                <LazyLoad height={200}><img src={m4} alt={"m4"}/></LazyLoad>
                <LazyLoad height={200}><img src={m5} alt={"m5"}/></LazyLoad>
                <LazyLoad height={200}><img src={m6} alt={"m6"}/></LazyLoad>
                <LazyLoad height={200}><img src={m7} alt={"m7"}/></LazyLoad>
            </div>
        );
    }
}


