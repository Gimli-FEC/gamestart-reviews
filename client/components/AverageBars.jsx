import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Row = styled.div`
  display: flex;
  margin: 15px 5px 5px 2px;
  width: 75%;
  span:first-of-type {
    width: 45%;
  }
  meter {
    width: 100%;
    height: 10px;
    margin: auto;
  }
  meter::-webkit-meter-optimum-value {
    background: #da291c;
  }
  span:nth-of-type(2) {
    width: 100px;
    text-align: center;
  }
`;

const AverageBars = ({ name, rating }) => {
  const width = (rating / 5).toString();
  return (
    <Row>
      <span>{name}</span>
      <meter value={width} />
      <span>{rating}</span>
    </Row>
  );
};

AverageBars.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default AverageBars;
