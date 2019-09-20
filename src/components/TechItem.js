import React from 'react';
import PropTypes from 'prop-types';

function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">Remover</button>
    </li>
  );
}

TechItem.defaultProps = { // caso tech não seja informado, ele recebe esse valor default que escolhemos
  tech: 'Oculto',
};

TechItem.propTypes = {
  tech: PropTypes.string, // tech requer string
  onDelete: PropTypes.func.isRequired // onDelete requer receber uma função
};

export default TechItem;