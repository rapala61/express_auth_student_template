"use strict";

console.log("scripts loaded");

var listItemData = [{
  id: 1,
  title: "Travel to Peru",
  description: "I want to checkout Machu Pichu"
}, {
  id: 2,
  title: "Travel to Zimbabwe",
  description: "I want to checkout the Victoria Falls"
}];

var InputComponent = React.createClass({
  displayName: "InputComponent",

  render: function render() {
    var className = this.props.className || "form-control";
    var type = this.props.type || "text";

    return React.createElement("input", {
      className: className,
      type: type,
      value: this.props.value,
      onChange: this.props.onChange,
      placeholder: this.props.placeholder });
  }
});

// BucketListItemTitle
var BucketListItemTitle = React.createClass({
  displayName: "BucketListItemTitle",

  render: function render() {
    return React.createElement(
      "label",
      null,
      this.props.title
    );
  }
});

// BucketListItemDesc
var BucketListItemDesc = React.createClass({
  displayName: "BucketListItemDesc",

  render: function render() {
    return React.createElement(
      "p",
      null,
      this.props.description
    );
  }
});

// BucketListItemActionsContainer
var BucketListItemActionsContainer = React.createClass({
  displayName: "BucketListItemActionsContainer",

  render: function render() {
    return React.createElement(
      "div",
      { className: "form-group form-actions" },
      React.createElement(
        "button",
        { className: "btn btn-primary" },
        "Complete"
      ),
      React.createElement(
        "button",
        { className: "btn btn-danger" },
        "Delete"
      )
    );
  }
});

// BucketListItem
var BucketListItem = React.createClass({
  displayName: "BucketListItem",

  render: function render() {
    return React.createElement(
      "li",
      null,
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(BucketListItemTitle, { title: this.props.title }),
        React.createElement(BucketListItemDesc, { description: this.props.description })
      ),
      React.createElement(BucketListItemActionsContainer, null)
    );
  }
});

// BucketListItemContainer
var BucketListItemContainer = React.createClass({
  displayName: "BucketListItemContainer",

  render: function render() {
    var itemNodes = this.props.data.map(function (item) {
      return React.createElement(BucketListItem, { title: item.title, description: item.description, key: item.id });
    });
    return React.createElement(
      "ul",
      { className: "listItemContainer" },
      itemNodes
    );
  }
});

// addListItemForm
var AddListItemForm = React.createClass({
  displayName: "AddListItemForm",

  getInitialState: function getInitialState() {
    return { title: '', description: '' };
  },
  handleTitleChange: function handleTitleChange(e) {
    this.setState({ title: e.target.value });
  },
  handleDescriptionChange: function handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  },
  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    var title = this.state.title.trim();
    var description = this.state.description.trim();

    if (!title || !description) {
      return;
    }
    this.props.onItemSubmit({ id: listItemData.length + 1, title: title, description: description });

    // TODO: push to data
    this.setState({ title: '', description: '' });
  },
  render: function render() {
    return React.createElement(
      "form",
      { className: "addListItemForm", onSubmit: this.handleSubmit },
      React.createElement(
        "div",
        { className: "form-group form-inputs" },
        React.createElement(InputComponent, {
          placeholder: "Title",
          value: this.state.title,
          onChange: this.handleTitleChange
        }),
        React.createElement(InputComponent, {
          placeholder: "Description",
          value: this.state.description,
          onChange: this.handleDescriptionChange
        })
      ),
      React.createElement(
        "div",
        { className: "form-group form-actions" },
        React.createElement(
          "button",
          { className: "btn btn-primary", type: "submit", value: "Post" },
          "Add"
        )
      )
    );
  }
});

var BucketListContainer = React.createClass({
  displayName: "BucketListContainer",

  getInitialState: function getInitialState() {
    return { data: [] };
  },
  handleItemSubmit: function handleItemSubmit(item) {
    listItemData.push(item);
    this.setState({ data: listItemData });
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { id: "addFormContainer", className: "col-md-4" },
        React.createElement(AddListItemForm, { onItemSubmit: this.handleItemSubmit })
      ),
      React.createElement(
        "div",
        { id: "listContainer", className: "col-md-8" },
        React.createElement(BucketListItemContainer, { data: this.props.data })
      )
    );
  }
});

$(function () {
  ReactDOM.render(React.createElement(BucketListContainer, { data: listItemData }), document.querySelector('.main.container'));
});
