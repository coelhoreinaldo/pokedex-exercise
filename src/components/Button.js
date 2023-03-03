import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  render() {
    const { children, className, onClick } = this.props;
    return (
      <button className={ className } onClick={ onClick }>
        { children }
      </button>
    );
  }
}

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
