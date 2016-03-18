var AddListItemForm = require('./AddItemForm.jsx'),
    BucketListItemContainer = require('./itemContainer.jsx'),
    React = require('react');

module.exports = React.createClass({
    getInitialState: function() {
      return {data:[]};
    },
    handleItemSubmit: function( item ) {
      listItemData.push( item );
      this.setState({ data: listItemData });
    },
    render: function() {
      return (
        <div className="row">
          <div id="addFormContainer" className="col-md-4">
            <AddListItemForm onItemSubmit={this.handleItemSubmit}/>
          </div>
          <div id="listContainer" className="col-md-8">
            <BucketListItemContainer data={this.props.data}/>
          </div>
        </div>
      )
    }
  })
