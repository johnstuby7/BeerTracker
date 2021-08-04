import React from "react";
import BottleScrew from "../image/BottleScrew.jpg"
import CivicTavern from "../image/civicTavern.jpg"
import ColdGarden from "../image/ColdGarden.jpg"
import Dickens from "../image/Dickens.jpg"
import Palomino from "../image/Palomino.jpg"
import ShipAndAnchor from "../image/ShipAndAnchor.jpg"

// Get angular react and vue logos. 
function Pub() {
  return (
    <div className="pub">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-6">
            <img
            height="500"
            width="500"
              class="img-fluid rounded mb-4 mb-lg-0"
              src={ BottleScrew }
              alt="Bottlescrew Bills"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="font-weight-light">Bottlescrew Bills</h1>
            <a class="contact-links contact-links:hover" href="https://g.page/BottlescrewBill?share" target="_blank">Map</a> &nbsp;
            <a class="contact-links contact-links:hover" href="https://www.bottlescrewbill.com/" target="_blank">Site</a><br></br>
            <p class="text-left text-color">
              Bottlescrew Bills is one of my go to hangouts, its localated pretty centrally downtown on 10th ave and first street. They have a great protected outdoor patio
              and huge amounts of space inside. They occasionally do live shows. The beer selection is probably the best in town, they have over 400 beers in house. <br></br>
              <br></br>

              The fun thing to do at Bottlescrews is to work on a passport, essentially you try 80ish beers from around the world and fill in each beer that you have tried 
              from a specific country <br></br><br></br>
            </p>
          </div>
        </div>
        <div class="row align-items-center my-5">
          <div class="col-lg-6">
            <h1 class="font-weight-light">Civic Tavern</h1>
            <a class="contact-links contact-links:hover" href="https://goo.gl/maps/TdoAZQj9vDMqwNvr6" target="_blank">Map</a> &nbsp;
            <a class="contact-links contact-links:hover" href="https://civic-tavern.square.site/" target="_blank">Site</a><br></br> <br></br>
            <p class="text-left text-color">
              Civic Tavern is a unique pub in Calgary, it is inside of a old house in the downtown core. Its a super chill establishement
              that has pool and fooseball available. It also has a small outdoor patio that is great for hanging out at. <br></br> <br></br>

              The food is pretty decent, Pizza is the thing to get. Their Beer selection is very good, it is unfortunate they no longer
              carry GoldSpur since that was the strongest/best beer in calgary. 
            </p>
          </div>
          <div class="col-lg-6">
            <img
            height="500"
            width="500"
              class="img-fluid rounded mb-4 mb-lg-0"
              src={ CivicTavern  }
              alt=""
            />
          </div>
        </div>
        <div class="row align-items-center my-5">
          <div class="col-lg-6">
            <img
            height="500"
            width="500"
              class="img-fluid rounded mb-4 mb-lg-0"
              alt="Cold Garden"
              src={ ColdGarden }
            />
          </div>
          <div class="col-lg-6">
            <h1 class="font-weight-light">Cold Garden</h1>
            <a class="contact-links contact-links:hover" href="https://goo.gl/maps/yaAUD1LzUsnLn65C9" target="_blank">Map</a> &nbsp;
            <a class="contact-links contact-links:hover" href="https://www.coldgarden.ca/" target="_blank">Site</a><br></br>
            <p class="text-left text-color">
              Cold Garden is a relatively new Brewery in Calgary, they are located in Inglewood just east of downtown. They have a great setup with a large
              patio and a suprising amount of space inside the brewery. They are known for having dance parties and being a chill hangout spot.  <br></br>

              Their beer selection is limited but good quality. they also have a growler refill program that is quite reasonable <br></br>
            </p>
          </div>
        </div>
        <div class="row align-items-center my-5">
          <div class="col-lg-6">
            <h1 class="font-weight-light">Dickens</h1>
            <a class="contact-links contact-links:hover" href="https://g.page/dickensyyc?share" target="_blank">Map</a><br></br>
            <p class="text-left text-color">
              Dickens is probably one of if not the chillest pub in Calgary. Its home to a whole bunch of different meetup groups and is hands down one of the best places
              to people watch. Some of the different groups that go to Dickens include, DND, Super smash bros, Street fighter, Board game Clubs. <br></br>
              
              They also have a interesting dance night, where it is different music genres every couple hours, such as punk, metal, pop, emo. So you can just chill there 
              at night and watch a rotating door of people coming and going<br></br>
            </p>
          </div>
          <div class="col-lg-6">
            <img
            height="500"
            width="500"
              class="img-fluid rounded mb-4 mb-lg-0"
              src={ Dickens }
              alt="Dickens Pub"
            />
          </div>
        </div>
        <div class="row align-items-center my-5 ">
        <div class="col-lg-6">
            <img
            height="500"
            width="500"
              class="img-fluid rounded mb-4 mb-lg-0"
              src={ Palomino }
              alt="Palomino Pub"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="font-weight-light">Palomino Smokehouse</h1>
            <a  data-message="Palomino Map" class="contact-links contact-links:hover" href="https://goo.gl/maps/xLethsZTCoqkAfZo9" target="_blank">Map</a> &nbsp;
            <a class="contact-links contact-links:hover" href="https://thepalomino.ca/" target="_blank">Site</a><br></br>
            <p class="text-left text-color">
              The Palomino Smokehouse is one of Calgarys oldest holes in the wall located off 7th ave downtown on the train line. It has some truly delicious food
              and is known for having great live music. <br></br>
            </p>
          </div>
        </div>
        <div class="row align-items-center my-5">
          <div class="col-lg-6">
            <h1 class="font-weight-light">Ship and Anchor</h1>
            <a class="contact-links contact-links:hover" href="https://g.page/shipandanchorpub?share" target="_blank">Map</a> &nbsp;
            <a class="contact-links contact-links:hover" href="https://www.shipandanchor.com/" target="_blank">Site</a><br></br> <br></br>
            <p class="text-left text-color">
              Ship and Anchor is a great lowkey pub that has a great music scene in Calgary, it is located on 17th ave. Its a super chill establishment that has a big 
              outdoor patio, darts and lots of activity every week like punkrock bingo, live shows or DND night. <br></br> <br></br>

              The food is great, The loaded ship burger is the thing to get. Their Beer selection is pretty decent, has a ok selection.
            </p>
          </div>
          <div class="col-lg-6">
            <img
            height="500"
            width="500"
              class="img-fluid rounded mb-4 mb-lg-0"
              src={ ShipAndAnchor }
              alt="Ship and Anchor Pub"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pub;