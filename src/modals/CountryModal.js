import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import CountryDetails from './CountryDetails';

const CountryModal = ({ isOpen, toggle, country }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader className="title text-center" toggle={toggle}>Detalles del País</ModalHeader>
      <ModalBody>
        <h2>{country.name}</h2>
        <p>Capital: {country.capital}</p>
        {country.languages && (
          <p>Idiomas: {country.languages.map(lang => lang.name).join(', ')}</p>
        )}
        <p>Moneda: {country.currency}</p>
        {country.states && (
          <div>
            <p>Estados:</p>
            <ul>
              {country.states.map(state => (
                <li key={state.name}>{state.name}</li>
              ))}
            </ul>
          </div>
        )}
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cerrar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CountryModal;
