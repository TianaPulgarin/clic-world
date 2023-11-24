import React, { useState } from "react";
import { Input, Button, Col, Row } from "reactstrap";
import "../assets/styles.css";

const CountryFilter = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onFilterChange(newSearchTerm);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onFilterChange(searchTerm);
    }
  };

  return (
    <>
      <Row>
        <Input
          className="input-field"
          type="text"
          placeholder="Escribe el pais que deseas ver"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <Button
          className="search-button"
          divor="blue"
          onClick={() => onFilterChange(searchTerm)}
        >
          Buscar
        </Button>
        </Row>
    </>
  );
};
export default CountryFilter;
