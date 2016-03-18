var React = require('react'),
    InputComponent = require('./input.jsx');

module.exports = React.createClass({
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
