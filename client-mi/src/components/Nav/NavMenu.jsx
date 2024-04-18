import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Container, Nav, Navbar } from "react-bootstrap";
import logoPng from '../../assets/minaglobe1.png';
import './NavMenu.css'

const NavMenu = () => {
	const [expanded, setExpanded] = React.useState(false);

	const handleToggle = () => {
		setExpanded(!expanded);
	}

	return (
		<div className="ezy__nav2 light">
			<Navbar expand="lg" className="py-3">
				<Container>
					<Navbar.Brand href="/">
                    <img src={logoPng} alt="Logo" height="58" />
                    </Navbar.Brand>
					<Navbar.Toggle aria-controls="ezy__nav2-navbar-nav" onClick={handleToggle}>
						{expanded ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
					</Navbar.Toggle>
					<Navbar.Collapse id="ezy__nav2-navbar-nav">
						<Nav className="ms-auto mb-2 mb-lg-0 mt-4 mt-lg-0">
							<Nav.Item>
								<Nav.Link href="/">Home</Nav.Link>
							</Nav.Item>
                            <Nav.Item>
								<Nav.Link href="/about">Why us?</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href="/services">Services</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href="/works">How It Works</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href="/contact-us">Contact us</Nav.Link>
							</Nav.Item>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavMenu;
