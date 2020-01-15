import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core';

const images = {
  LogoGithub: require('../../assets/github.png'),
  LogoInstagram: require('../../assets/instagram.png'),
  LogoLinkedIn: require('../../assets/linkedin.png'),
  LogoMail: require('../../assets/email.png'),
  LogoTwitter: require('../../assets/twitter.png')
};

const KsAvatar = withStyles({
  root: {
    background: 'transparent'
  }
})(Avatar);

const Footer = () => (
  <footer>
    <a href="https://kyliestewart.tech">
      <KsAvatar>KS</KsAvatar>
    </a>
    <a href="https://twitter.com/kyliestew">
      <Avatar alt="Link to Kylie's Twitter account" src={images.LogoTwitter} />
    </a>
    <a href="https://www.linkedin.com/in/kylieastewart/">
      <Avatar
        alt="Link to Kylie's LinkedIn account"
        src={images.LogoLinkedIn}
      />
    </a>
    <a href="https://instagram.com/kalestews">
      <Avatar
        alt="Link to Kylie's Instagram account"
        src={images.LogoInstagram}
      />
    </a>
    <a href="mailto:kylie@kyliestewart.tech">
      <Avatar alt="Link to email Kylie" src={images.LogoMail} />
    </a>
  </footer>
);

export default Footer;
