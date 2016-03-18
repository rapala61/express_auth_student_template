var React = require('react'),
    ReactDOM = require('react-dom'),
    BucketListContainer = require('./list.jsx');

var listItemData = [
  {
    id: 1,
    title: "Travel to Peru",
    description: "I want to checkout Machu Pichu"
  },
  {
    id: 2,
    title: "Travel to Zimbabwe",
    description: "I want to checkout the Victoria Falls"
  }
];

$(function() {
  ReactDOM.render(
    <BucketListContainer data={listItemData}/>,
    document.querySelector('.main.container')
  );
});
