import shapes from './shapes';

const shapes2 = [
    {
      id: 'circle2',
      name: 'Circle2',
      img: './images/circle.png'
    },
    {
      id: 'pentagon2',
      name: 'Pentagon2',
      img: './images/pentagon.png'
    },
    {
      id: 'triangle2',
      name: 'Triangle2',
      img: './images/triangle.png'
    },
    {
      id: 'square2',
      name: 'Square2',
      img: '/images/square.png'
    },
    {
      id: 'heart2',
      name: 'Heart2',
      img: './images/heart.png'
    }
  ];

const columns = [
    {
        id: 1,
        title: 'column1',
        cards: shapes,
    },
    {
        id: 2,
        title: 'column2',
        cards: shapes2,
    }
];

export default columns;
