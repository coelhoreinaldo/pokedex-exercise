import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  render() {
    const { children, className, onClick, disabled } = this.props;
    return (
      <button className={ className } onClick={ onClick } disabled={ disabled }>
        { children }
      </button>
    );
  }
}

Button.defaultProps = {
  className: '',
  disabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
