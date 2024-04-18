import React from "react";
import './About.css'
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const stories = [
	{
		text: "Beautiful and easy to understand UI.",
	},
	{
		text: "Theme advantages are pixel perfect design & clear code",
	},
	{
		text: "Present your services with flexible",
	},
	{
		text: "Find more creative ideas for your projects",
	},
	{
		text: "Faucibus porta lacus fringilla vel",
	},
];

const StoryItem = ({ item, index }) => {
	const { text } = item;
	return (
		<>
			<div className="mb-3">
				<FontAwesomeIcon icon={faCheck} className="text-primary me-2 small" />
				<span className="opacity-75 small">{text}</span>
			</div>
			{index !== stories.length && <hr className="my-2" />}
		</>
	);
};

StoryItem.propTypes = {
	item: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
};

const AboutUs = () => {
	return (
		<section className="ezy__about9 light" id="ezy__about9">
			<Container>
				<Row className="align-items-center mb-5">
					<Col xs={12} lg={6}>
						<h6 className="ezy__about9-sub-heading">Hello Visitor,</h6>
						<h1 className="ezy__about9-heading">Welcome to MinaGlobe Innovations</h1>
						<hr className="ezy__about9-divider my-4" />
						<p className="ezy__about9-sub-heading">
							Since our inception set out in 2012, TalEx has set out to disrupt
							inception the HR & Talent/Staffing Management industry.
							Purposefully designed by our founders (Amrita Grewal and Julie
							Dacar) to connect great companies and great talent.
						</p>
						<Nav className="flex-column ezy__about9-features mt-5">
							{stories.map((item, i) => (
								<li key={i}>
									<StoryItem item={item} index={i + 1} key={i} />
								</li>
							))}
						</Nav>

						<div className="mt-5">
							<Button variant="" className="ezy__about9-btn">
								Contact
							</Button>
						</div>
					</Col>

					<Col xs={12} lg={6}>
						<div className="mt-5 mt-lg-0">
							<img
								src="https://cdn.easyfrontend.com/pictures/about/about9.jpg"
								alt=""
								className="img-fluid"
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default AboutUs;