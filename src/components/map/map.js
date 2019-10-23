import React, { useState } from 'react';
import axios from 'axios';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries
} from 'react-vis';
function WorldMap() {
  const [worldmap, setRooms] = useState({});

  axios
    .get('http://lambda-mud-test.herokuapp.com/api/adv/rooms/')
    .then(res => {
      setRooms({
        ...worldmap,
        rooms: JSON.parse(res.data.rooms)
      });
    })
    .catch(err => {
      console.log(err);
    });

  //   if (worldmap.rooms !== undefined) {
  //     console.log('Sample Rooms', worldmap.rooms);
  //   }
  return (
    <XYPlot width={300} height={300}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <LineMarkSeries
        className='linemark-series-example'
        style={{
          strokeWidth: '3px'
        }}
        lineStyle={{ stroke: 'red' }}
        markStyle={{ stroke: 'blue' }}
        data={[{ x: 1, y: 10 }, { x: 2, y: 5 }, { x: 3, y: 15 }]}
      />
    </XYPlot>
  );
}

export default WorldMap;
