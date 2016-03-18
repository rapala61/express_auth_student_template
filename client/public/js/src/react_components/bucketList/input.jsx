var React = require('react');

module.exports = React.createClass({
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
  });
