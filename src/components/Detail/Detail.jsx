import { PropTypes } from 'prop-types';
import React from 'react';

const Detail = ({ icon, text, link }) => (
  <div className="my-2 text-sm text-gray-50">
    {link ? (
      <a
        href={link}
        target="_blank"
        className="items-center flex hover:text-blue-400"
        rel="noreferrer"
      >
        {icon} {text}
      </a>
    ) : (
      <span className="items-center flex">
        {' '}
        {icon} {text}{' '}
      </span>
    )}
  </div>
);

Detail.defaultProps = {
  link: null
};

Detail.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired
};

export default Detail;
