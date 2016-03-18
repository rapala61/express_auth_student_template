var BucketListItem = require('./item.jsx'),
    React = require('react');

module.exports = React.createClass({
    render: function() {
      var itemNodes = this.props.data.map(function(item) {
        return (
          <BucketListItem title={item.title} description={item.description} key={item.id}/>
        )
      })
      return (
        <ul className="listItemContainer">
          {itemNodes}
        </ul>
      )
    }
  });
