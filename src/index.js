import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let members = [
  {
    id: 1,
    name: "Caelin",
    spiritURL: 'https://www.desertusa.com/animals/photos2/IMG_8040a.jpg',
    quote:"Don't spank my hams baby",
    display: false,
  },
  {
    id: 2,
    name: "Sean",
    spiritURL: 'http://i0.kym-cdn.com/entries/icons/mobile/000/023/879/distorteddd.jpg',
    quote:"Have you ever thought about how bologna and pony rhyme, like help me english.",
    display: false,
  },
  {
    id: 3,
    name: "Nigel",
    spiritURL: 'https://i.imgur.com/1eJ1q0V.jpg',
    quote:"Oh, What? A quote? - Nigel 2018",
    display: false,
  },
  {
    id: 4,
    name: "Neal",
    spiritURL: 'https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-11ej849_779819a7.jpeg',
    quote:"Your killin me smalls.",
    display: false,
  },
  {
    id: 5,
    name: "Judah",
    spiritURL: 'https://www.tellwut.com/uploads/media/image/682e1365734338o9209.jpg',
    quote:"JI am a stable genius.",
    display: false,
  },
  {
    id: 6,
    name: "Patrick",
    spiritURL: 'https://img.purch.com/h/1000/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAwOS82Nzkvb3JpZ2luYWwvMDkwNTExLXBsYXR5cHVzLTAyLmpwZw==',
    quote:"Trap or Die.",
    display: false,
  },
  {
    id: 7,
    name: "Olivia",
    spiritURL: 'http://assets.nydailynews.com/polopoly_fs/1.3273154.1498258195!/img/httpImage/image.jpg_gen/derivatives/article_750/nup-101558-1371.jpg',
    quote:"I've got to make sure that Youtube comes down to tape this",
    display: false,
  }]

ReactDOM.render(<App members={members} />, document.getElementById('root'));
registerServiceWorker();
