import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { SOCIALS } from '../../constants'

const height = 33
const width = 33
const marginRight = '1rem'
const bgColor = '#fff'

export const Footer = () => (
  <footer className="footer">
    <a className="footer-link" href={SOCIALS.Homepage}>
      <b>KS</b>
    </a>
    <SocialIcon
      url={SOCIALS.Twitter}
      bgColor={bgColor}
      style={{ height, width, marginRight }}
    />
    <SocialIcon
      url={SOCIALS.LinkedIn}
      bgColor={bgColor}
      style={{ height, width, marginRight }}
    />
    <SocialIcon
      url={SOCIALS.Instagram}
      bgColor={bgColor}
      style={{ height, width, marginRight }}
    />
    <SocialIcon
      url={SOCIALS.Email}
      network="email"
      bgColor={bgColor}
      style={{ height, width, marginRight }}
    />
  </footer>
)
