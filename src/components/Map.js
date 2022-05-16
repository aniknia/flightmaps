import React, { useContext, useState, useEffect, useRef } from 'react';
import * as d3 from "d3";
import useWindowDimensions from './useWindowDimension';
import { Routes } from './RoutesProvider';
import LineChart from './LineChart';

function makeChart(data, height, width) {
    return LineChart(data, {
        x: d => d.x,
        y: d => d.y,
        z: d => d.route,
        xDomain: [0, 1920],
        yDomain: [0, 1080],
        height: String({height}['height'] - 65),
        width: String({width}['width']),
        viewbox: '100',
        color: "steelblue"
    })
}

function cleanData(routes) {
    if (routes.length === 0) {
        return [{route: '', x: 0, y: 0}]
    } else {
        let data = new Array(routes.length * 1000);
        let i = 0;
        /*routes.forEach(item => {
            for (let j = 0; j < 1000; j++) {
                let route = String(item['start'] + " to " + item['end']);
                let x = item['x'][j];
                let y = item['y'][j];
                data[(i * 1000) + j] = {route: route, x: x, y: y};
            }
            i++;
        })*/
        return [{route: '', x: 0, y: 0}]
    }
}

export default function Map() {
    const routes = useContext(Routes);
    const { height, width } = useWindowDimensions();
    const data = useRef(cleanData(routes['routes']));
    
    const [svg, setSvg] = useState(
        makeChart(data.current, height, width)
    );

    useEffect(() => {
        d3.select('#map')
        .selectAll("*")
        .remove();

        setSvg(
            makeChart(data.current, height, width)
        );

        d3.select('#map')
        .append(() => svg);

    }, [routes]);

    return (
        <div id="map">
        </div>
    )
}