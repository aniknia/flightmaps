import React, { useContext, useState, useEffect } from 'react';
import * as d3 from "d3";
import { Routes } from './RoutesProvider';
import LineChart from './LineChart';

// TODO: put map svg behind a viewer for scaling and viewing on small devices

function makeChart(data, height, width) {
    return LineChart(data, {
        x: d => d.x,
        y: d => d.y,
        z: d => d.route,
        defined: undefined,
        //xDomain: [0, 1920],
        yDomain: [1080, 0],
        height: 1080,
        width: 1920,
        //height: String({height}['height'] - 65),
        //width: String({width}['width']),
        marginTop: -25,
        marginRight: 160,
        marginBottom: 30,
        marginLeft: 110,
        viewbox: '100',
        color: "red",
        strokeWidth: 3
    })
}

function cleanData(routes) {
    let data = new Array(routes['routes'].length * 1000);
    let x = 0
    let y = 0
    let temp = 0
    if (routes.length === 0) {
        return data
    } else {
        let i = 0;
        routes['routes'].forEach(item => {
            for (let j = 0; j < 1000; j++) {
                let route = String(item['start'] + " to " + item['end']);

                if (j === 0) {
                    x = item['x'][j];
                    y = item['y'][j];
                } else if (Math.abs(temp - item['x'][j]) > 2) {
                    x = item['x'][j];
                    y = NaN;
                    console.log("We got null")
                } else {
                    x = item['x'][j];
                    y = item['y'][j];
                }
                
                temp = item['x'][j]
                data[(i * 1000) + j] = {route: route, x: x, y: y};
            }
            i++;
        })
        return data
    }
}

export default function Map() {
    const value = useContext(Routes);
    const [ data, setData ] = useState(cleanData(value))
    const graph = {}
    
    const [svg, setSvg] = useState(
        makeChart(data)
    );

    useEffect(() => {
        setData(cleanData(value));

        d3.select('#map')
        .selectAll("*")
        .remove();

        setSvg(
            makeChart(data)
        );

        d3.select('#map')
        .append(() => svg);
    }, [value]);

    return (
        <div id="map">
        </div>
    )
}