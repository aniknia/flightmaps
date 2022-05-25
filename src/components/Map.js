import * as d3 from "d3";
import LineChart from './LineChart';
import { Box } from '@chakra-ui/react'
import { useEffect } from "react";
import { image } from "d3";

// TODO: put map svg behind a viewer for scaling and viewing on small devices

function makeChart(data, height, width, font_color, image) {
    return LineChart(data, {
        x: d => d.x,
        y: d => d.y,
        z: d => d.route,
        defined: undefined,
        xDomain: [0, 2048],
        yDomain: [1182, 0],
        height: String(height),
        width: String(width),
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        viewbox: '100',
        color: "red",
        font_color: font_color,
        image: image,
        strokeWidth: 3
    })
}

function cleanData(routes) {
    if (routes.length === 0) {
        return [{route: "", x: 0, y: 0}]
    } else {
        let data = new Array(routes['routes'].length * 1000);
        let x = 0
        let y = 0
        let temp = 0
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

export default function Map(props) {

    useEffect(() => {
        d3.select('#map').selectAll("*").remove()
        let data = cleanData(props.value)
        let svg = makeChart(data, props.height, props.width, props.color, props.image)
        d3.select('#map').append(() => svg)
    })

    return (
        <Box id="map">
        </Box>
    )
}