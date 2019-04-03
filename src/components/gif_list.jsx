import React, { Component } from 'react';
import Gif from './gif';

const GifList = ({ gifs, updateFunction }) => {
  return (
    <div className="gif-list">
      {gifs.map(gif => <Gif id={gif.id} key={gif.id} updateFunction={updateFunction} />)}
    </div>
  );
};

export default GifList;