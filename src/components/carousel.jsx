import React from "react";
import InfiniteCarousel from "react-leaf-carousel";

// carousel data object
const ImgData = [
  { alt: "Ale is a type of beer brewed using a warm fermentation method, resulting in a sweet, full-bodied and fruity taste.", src:"../image/Ale.jpg", ClassId:"1"},
  { alt: "Bitter is a British style of pale ale that varies in colour from gold to dark amber, and in strength typically from 3% to 5.5% alcohol by volume.", src:"../image/Bitters.jpg", ClassId:"2" },
  { alt: "India Pale Ale (IPA) They can be bitter and contain high alcohol levels, though the final product depends on the variety of hops used.", src:"../image/IPA.jpg", ClassId:"3" },
  { alt: "Kolsch it is a pale, highly attenuated, hoppy, bright (i.e. filtered and not cloudy) top-fermenting beer, and must be brewed according to the Reinheitsgebot(water, barley, hops).", src:"../image/Kolsch.jpg", ClassId:"4"},
  { alt: "Pilsner is a type of pale lager. It takes its name from the Bohemian city of Pilsen (Plzeň), where it was first produced in 1842 by Bavarian brewer Josef Groll.", src:"../image/Pilsner.jpg" , ClassId:"5"},
  { alt: "Porter is a style of beer that was developed in London, England, in the early 18th century. It was well-hopped and dark in appearance owing to the use of brown malt.", src:"../image/Porter.jpg" , ClassId:"6"},
  { alt: "Saison is often called a farmhouse ale. it is widely accepted that a saison will be “exceptionally dry, highly carbonated, fruity and of moderate strength: 6-8% ABV.", src:"../image/Saison.png" , ClassId:"7" }
];

// carusel data component

function ImgComponent({ src, alt, ClassId }) {
  return (
    <div className={ClassId}>
      <img src={src} alt={alt} height="450px" />
      <p><b>{alt}</b></p> <br></br>
      
      <p></p>
    </div>
  );
}

// carousel data iterator
const ImgDataIterator = ImgData.map((element) => (
  <ImgComponent src={element.src} alt={element.alt} />
));

export default function RLCarousel() {
  return (
    <InfiniteCarousel
      breakpoints={[
        {
          breakpoint: 200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]}
      lazyLoad={false}
      arrows={true}
      dots={true}
      showSides={true}
      sidesOpacity={1}
      sideSize={0.1}
      slidesToScroll={4}
      slidesToShow={4}
      scrollOnDevice={true}
    >
      {ImgDataIterator }
    </InfiniteCarousel>
  );
}
