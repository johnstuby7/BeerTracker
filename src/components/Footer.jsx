import React from "react";
import '../App.css';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, RedditShareButton, EmailShareButton } from "react-share";
import { FacebookIcon, TwitterIcon, LinkedinIcon, RedditIcon, EmailIcon } from "react-share";

function Footer() {
  return (
    <div className="footer page-padding">
      <footer class="footer-padding bg-dark fixed-bottom">
        <h3 class="previous-employee"> Share with Friends</h3> <br></br>
        <EmailShareButton
          url={"https://gmail.com/"}
          quote={"gmail Share Button"}
          hashtag={"#hashtag"}
          description={"Gmail Share Button"}
          className="Demo__some-network__share-button"
        >
         <p class="App-link"><EmailIcon size={32} round /> Email </p> 
        </EmailShareButton>
        &nbsp; &nbsp;
        &nbsp; &nbsp;
        <FacebookShareButton
          url={"https://facebook.com/"}
          quote={"Facebook Share Button"}
          hashtag={"#hashtag"}
          description={"Facebook Share Button"}
          className="Demo__some-network__share-button"
        >
         <p class="App-link"><FacebookIcon size={32} round /> Facebook </p> 
        </FacebookShareButton>
        &nbsp; &nbsp;
        &nbsp; &nbsp;
        <TwitterShareButton
          title={"Johns Beer Blog"}
          url={"twitter.com/"}
          quote={"Twitter Share Button"}
          description={"Twitter Share Button"}
          hashtags={["hashtag1", "hashtag2"]}
        >
        <p class="App-link"><TwitterIcon size={32} round /> Twitter </p>
        </TwitterShareButton>
        &nbsp; &nbsp;
        &nbsp; &nbsp;
        <LinkedinShareButton
          title={"test"}
          url={"https://linkedin.com"}
          quote={"LinkedIn Share Button"}
          description={"LinkedIn Share Button"}
          hashtags={["hashtag1", "hashtag2"]}
        >
        <p class="App-link"><LinkedinIcon size={32} round /> LinkedIn </p>
        </LinkedinShareButton>
        &nbsp; &nbsp;
        &nbsp; &nbsp;
        <RedditShareButton
          title={"test"}
          url={"https://linkedin.com"}
          quote={"LinkedIn Share Button"}
          description={"LinkedIn Share Button"}
          hashtags={["hashtag1", "hashtag2"]}
        >
        <p class="App-link"><RedditIcon size={32} round /> Reddit </p>
        </RedditShareButton>
    
      </footer>
    </div>
  );
}

export default Footer;