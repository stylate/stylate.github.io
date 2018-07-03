import React from 'react'
import Link from 'gatsby-link'
import LazyLoad from 'react-lazyload'

import o1 from './photo/overseas/1.jpg'
import o2 from './photo/overseas/2.jpg'
import o3 from './photo/overseas/3.jpg'
import o4 from './photo/overseas/4.jpg'
import o5 from './photo/overseas/5.jpg'
import o6 from './photo/overseas/6.jpg'
import o7 from './photo/overseas/7.jpg'
import o8 from './photo/overseas/8.jpg'
import o9 from './photo/overseas/9.jpg'
import o10 from './photo/overseas/10.jpg'
import o11 from './photo/overseas/11.jpg'
import o12 from './photo/overseas/12.jpg'
import o13 from './photo/overseas/13.jpg'

export default class Overseas extends React.Component {
    render() {
        return (
            <div className="wrapper-img">
                <LazyLoad height={200}><img src={o1} alt={"o1"}/></LazyLoad>
                <LazyLoad height={200}><img src={o2} alt={"o2"}/></LazyLoad>
                <LazyLoad height={200}><img src={o3} alt={"o3"}/></LazyLoad>
                <LazyLoad height={200}><img src={o4} alt={"o4"}/></LazyLoad>
                <LazyLoad height={200}><img src={o5} alt={"o5"}/></LazyLoad>
                <LazyLoad height={200}><img src={o6} alt={"o6"}/></LazyLoad>
                <LazyLoad height={200}><img src={o7} alt={"o7"}/></LazyLoad>
                <LazyLoad height={200}><img src={o8} alt={"o8"}/></LazyLoad>
                <LazyLoad height={200}><img src={o9} alt={"o9"}/></LazyLoad>
                <LazyLoad height={200}><img src={o10} alt={"o10"}/></LazyLoad>
                <LazyLoad height={200}><img src={o11} alt={"o11"}/></LazyLoad>
                <LazyLoad height={200}><img src={o12} alt={"o12"}/></LazyLoad>
                <LazyLoad height={200}><img src={o13} alt={"o13"}/></LazyLoad>
            </div>
        );
    }
}


