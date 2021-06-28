import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  // SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  // Img,
} from "./FooterElements";

const Footer = () => {
  // const toggleHome = () => {
  //   scroll.scrollToTop();
  // };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>
                Have any questions you'd like to ask me?
                <FooterLink to="/contact"> Contact me here!</FooterLink>
              </FooterLinkTitle>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            {/* <SocialLogo to="/" onClick={toggleHome}></SocialLogo> */}
            <SocialIcons>
              <SocialIconLink
                href="https://www.github.com/namddanh"
                target="_blank"
                aria-label="GitHub"
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/NamDanh"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
            <WebsiteRights>© Nam Danh {new Date().getFullYear()}</WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
