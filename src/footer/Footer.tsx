// Filename - components/Footer.js

import {Box, Column, FooterContainer, FooterLink, Heading, Row,} from "./FooterStyles";
import "./footer.css";

const Footer = () => {
    return (
        <Box>
            <h1 className="app-name" style={{
                color: "#019879",
                textAlign: "center",
                marginTop: "20px",
            }}
            >
                Libyear-ORT
            </h1>
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading>Legal Notice</Heading>
                        <FooterLink href="#">
                            Security Policy
                        </FooterLink>
                        <FooterLink href="#">
                            Terms of Service
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>About The App</Heading>
                        <FooterLink href="#">
                            Information
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="https://www.iem.fraunhofer.de/">
                            <i className="website">
								<span>
									Website
								</span>
                            </i>
                        </FooterLink>
                        <FooterLink href="https://www.instagram.com/fraunhofer.iem/">
                            <i className="fab fa-instagram">
								<span>
									Instagram
								</span>
                            </i>
                        </FooterLink>
                        <FooterLink href="https://www.youtube.com/@FraunhoferIEM">
                            <i className="fab fa-youtube">
								<span>
									Youtube
								</span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );
};
export default Footer;