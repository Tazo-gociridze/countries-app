import { useState } from "react";

export interface CountryData {
  name: string;
  capital: string;
  population: string;
  flagName: string,
  id: string;
  likes: number; 
}

export const countryCharacteristics: CountryData[] = [
    { 
      name: "Country: Georgia",
      capital: "capital: Tbilisi",
      population: "population: 3 736,4 thousand",
      flagName: 'georgia',
      id: '1',
      likes: 0,
    },
  
    {
      name: "Country: Armenia",
      capital: "capital: Yerevan",
      population: "population: 2 973,8 thousand",
      flagName: 'armenia',
      id: '2',
      likes: 0,
    },

    {
      name: "Country: Denmark",
      capital: "capital: Copenhagen",
      population: "population: 5 910,9 thousand",
      flagName: 'denmark',
      id: '3',
      likes: 0,
    },
];
