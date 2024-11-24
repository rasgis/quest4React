import React from 'react';
import InformationLayout from './InformationLayout';
import PropTypes from 'prop-types';

export default function Information({ currentPlayer, isGameEnded, isDraw }) {
  return <InformationLayout {...{ currentPlayer, isGameEnded, isDraw }} />;
}

Information.propTypes = {
  currentPlayer: PropTypes.string.isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  isDraw: PropTypes.bool.isRequired,
};