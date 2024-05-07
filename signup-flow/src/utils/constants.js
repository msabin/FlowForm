import arcadeSVG from '/src/assets/images/icon-arcade.svg';
import advancedSVG from '/src/assets/images/icon-advanced.svg';
import proSVG from '/src/assets/images/icon-pro.svg';


export const planOptions = [
  {name: "Arcade", price: 9, picture: arcadeSVG},
  {name: "Advanced", price: 12, picture: advancedSVG},
  {name: "Pro", price: 15, picture: proSVG}
]

export const addOns = [
  {name: "Online Service", 
  description: "Access to multiplayer games",
  price: 1},
  {name: "Larger Storage", 
  description: "Extra 1TB of cloud save",
  price: 2},
  {name: "Customizable Profile", 
  description: "Custom theme on your profile",
  price: 2}

]