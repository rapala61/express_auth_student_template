var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <li>
        <div className="form-group">
          <label>{this.props.title}</label>
          <p>{this.props.description}</p>
        </div>
        <div className="form-group form-actions">
          <button className="btn btn-primary">Complete</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </li>
    )
  }
});
