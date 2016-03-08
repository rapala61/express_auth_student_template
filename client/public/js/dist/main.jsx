console.log("scripts loaded");

// TODO: DELETE AND COMPLETE AN ITEM

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
]

var InputComponent = React.createClass({
  render: function(){
    var className = this.props.className || "form-control";
    var type = this.props.type || "text";

    return (
      <input
        className={className}
        type={type}
        value={this.props.value}
        onChange={this.props.onChange}
        placeholder={this.props.placeholder} />
    )
  }
})

// BucketListItemTitle
var BucketListItemTitle = React.createClass({
  render: function() {
    return (<label>{this.props.title}</label>)
  }
});

// BucketListItemDesc
var BucketListItemDesc = React.createClass({
  render: function() {
    return (<p>{this.props.description}</p>)
  }
});

// BucketListItemActionsContainer
var BucketListItemActionsContainer = React.createClass({
  render: function() {
    return (
      <div className="form-group form-actions">
        <button className="btn btn-primary">Complete</button>
        <button className="btn btn-danger">Delete</button>
      </div>
    )
  }
});

// BucketListItem
var BucketListItem = React.createClass({
  render: function() {
    return (
      <li>
        <div className="form-group">
          <BucketListItemTitle title={this.props.title}/>
          <BucketListItemDesc description={this.props.description}/>
        </div>
        <BucketListItemActionsContainer />
      </li>
    )
  }
});

// BucketListItemContainer
var BucketListItemContainer = React.createClass({
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

// addListItemForm
var AddListItemForm = React.createClass({
  getInitialState: function() {
    return {title: '', description: ''}
  },
  handleTitleChange: function(e) {
    this.setState({ title: e.target.value });
  },
  handleDescriptionChange: function(e) {
    this.setState({ description: e.target.value });
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var title = this.state.title.trim();
    var description = this.state.description.trim();

    if (!title || !description) {
      return;
    }
    this.props.onItemSubmit({ id: listItemData.length + 1, title: title, description:description });

    // TODO: push to data
    this.setState({ title: '', description: ''});
  },
  render: function() {
    return (
      <form className="addListItemForm" onSubmit={this.handleSubmit}>
        <div className="form-group form-inputs">
          <InputComponent
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
          <InputComponent
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          />
        </div>
        <div className="form-group form-actions">
          <button className="btn btn-primary" type="submit" value="Post">Add</button>
        </div>
      </form>
    )
  }
});

var BucketListContainer = React.createClass({
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
});

$(function() {
  ReactDOM.render(
    <BucketListContainer data={listItemData}/>,
    document.querySelector('.main.container')
  );
});
