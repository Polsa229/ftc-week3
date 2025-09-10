import PoodleTinyYellow1 from "../assets/dogs/PoodleTinyYellow1.png";
import PoodleTinyYellow2 from "../assets/dogs/PoodleTinyYellow2.png";
import PoodleTinyYellow3 from "../assets/dogs/PoodleTinyYellow3.png";
import PoodleTinyYellow4 from "../assets/dogs/PoodleTinyYellow4.png";
import PoodleTinyYellow5 from "../assets/dogs/PoodleTinyYellow5.png";

import PoodleTinySepia1 from "../assets/dogs/PoodleTinySepia1.png";
import PoodleTinySepia2 from "../assets/dogs/PoodleTinySepia2.png";
import PoodleTinySepia3 from "../assets/dogs/PoodleTinySepia3.png";
import PoodleTinySepia4 from "../assets/dogs/PoodleTinySepia4.png";
import PoodleTinySepia5 from "../assets/dogs/PoodleTinySepia5.png";

import AlaskanMalamute1 from "../assets/dogs/AlaskanMalamute1.png";
import AlaskanMalamute2 from "../assets/dogs/AlaskanMalamute2.png";
import AlaskanMalamute3 from "../assets/dogs/AlaskanMalamute3.png";
import AlaskanMalamute4 from "../assets/dogs/AlaskanMalamute4.png";
import AlaskanMalamute5 from "../assets/dogs/AlaskanMalamute5.png";

import ShibaInu1 from "../assets/dogs/ShibaInu1.png";

export const dogs = [
  {
    sku: "MO502",
    name: "Poodle Tiny Yellow",
    breed: "Poodle",
    age: "02 months",
    gender: "Female",
    location: "Vietnam",
    color: "Yellow",
    size: "Small",
    price: 3900000,
    gallery: [
      PoodleTinyYellow1,
      PoodleTinyYellow2,
      PoodleTinyYellow3,
      PoodleTinyYellow4,
      PoodleTinyYellow5,
    ],
    Publicate_date: "12-oct-2022",
    Additionnal_Informations:
      "Pure breed shih Tzu, Godd body structure. With MKA cert and Microchip. Father from champion lineage",
    vaccinated: true,
    dewormed: true,
    microchip: false,
    cert: true,
    reviews: [
      {
        author: "Customer 1",
        comment: "Très joueur et affectueux, parfait pour la famille !",
        photo: "../assets/dogs/review1.jpg",
      },
      {
        author: "Customer 2",
        comment: "Un chiot adorable, en bonne santé.",
        photo: "../assets/dogs/review2.jpg",
      },
    ],
  },
  {
    sku: "MO102",
    name: "Poodle Tiny Sepia",
    breed: "Poodle",
    age: "02 months",
    gender: "Male",
    location: "Vietnam",
    color: "Sepia",
    size: "Small",
    price: 6000000,
    gallery: [
      PoodleTinySepia1,
      PoodleTinySepia2,
      PoodleTinySepia3,
      PoodleTinySepia4,
      PoodleTinySepia5,
    ],
    Publicate_date: "12-oct-2022",
    Additionnal_Informations:
      "Pure breed shih Tzu, Godd body structure. With MKA cert and Microchip. Father from champion lineage",
    vaccinated: true,
    dewormed: true,
    microchip: true,
    cert: true,
    reviews: [
      {
        author: "Customer 3",
        comment: "Très calme et bien dressé dès le début.",
        photo: "../assets/dogs/review3.jpg",
      },
    ],
  },
  {
    sku: "MO512",
    name: "Alaskan Malamute Grey",
    breed: "Alaskan Malamute",
    age: "02 months",
    gender: "Male",
    location: "Vietnam",
    color: "Grey",
    size: "Small",
    price: 8900000,
    gallery: [
      AlaskanMalamute1,
      AlaskanMalamute2,
      AlaskanMalamute3,
      AlaskanMalamute4,
      AlaskanMalamute5,
    ],
    Publicate_date: "12-oct-2022",
    Additionnal_Informations:
      "Pure breed shih Tzu, Godd body structure. With MKA cert and Microchip. Father from champion lineage",
    vaccinated: true,
    dewormed: true,
    microchip: true,
    cert: true,
    reviews: [
      {
        author: "Customer 4",
        comment: "Très énergique, mais tellement affectueux.",
        photo: "../assets/dogs/review4.png",
      },
    ],
  },
  {
    sku: "MO10078",
    name: "Shiba Inu Sepia",
    breed: "Shiba Inu",
    age: "02 months",
    gender: "Female",
    location: "Vietnam",
    color: "Apricot & Tan",
    size: "Small",
    price: 34000000,
    gallery: [ShibaInu1, ShibaInu1],
    Publicate_date: "12-oct-2022",
    Additionnal_Informations:
      "Pure-bred Shiba Inu. Good body structure. With MKA cert and Microchip. Father from champion lineage.",
    vaccinated: true,
    dewormed: true,
    microchip: true,
    cert: true,
    reviews: [
      {
        author: "Customer 5",
        comment: "Un chien magnifique et plein d'énergie.",
        photo: "../assets/dogs/review5.jpg",
      },
      {
        author: "Customer 6",
        comment: "Très sociable, il adore jouer avec les enfants.",
        photo: "../assets/dogs/review6.jpg",
      },
    ],
  },
];
