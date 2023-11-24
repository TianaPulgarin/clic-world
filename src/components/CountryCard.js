import React, { useState, useEffect } from "react";
import unsplashService from "./Unsplash";
import '../assets/styles.css';
import CountryModal from '../modals/CountryModal';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Modal } from "reactstrap";

const CountryCard = ({ country, onImageError }) => {
  const { name, continent, image } = country;
  const [imageUrl, setImageUrl] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    unsplashService
      .get(`/search/photos?query=${country.name}`)
      .then((response) => {
        const image = response.data.results[0];
        setImageUrl(image ? image.urls.regular : "defaultImageUrl");
      })
      .catch((error) =>{ console.error("Error fetching Unsplash image:", error);
      onImageError(name);
    });
  }, [country.name, name, onImageError]);

  return (
    <>
    <Card className="country-card" onClick={toggleModal}>
      <CardImg top width="100%" src={imageUrl} alt={country.name} />
      <CardBody>
        <CardTitle className="title">{country.name}</CardTitle>
        <CardSubtitle className="subtitle">{country.continent.name}</CardSubtitle>
      </CardBody>
    </Card>
    <CountryModal isOpen={modalOpen} toggle={toggleModal} country={country} />
    </>
  );
};
export default CountryCard;
