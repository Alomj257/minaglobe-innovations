import React from "react";
import './Achivement.css';
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

const cards = [
	{
		count: "141",
		title: "Completed Event",
	},
	{
		count: "17k",
		title: "Game Completed",
	},
	{
		count: "641",
		title: "Completed Fund",
	},
	{
		count: "54",
		title: "Completed Ticket",
	},
];

const CardItem = ({ item }) => (
	<>
		<h3 className="mb-3 mb-md-4">{item.count}</h3>
		<h5>{item.title}</h5>
	</>
);

CardItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const Achivement = () => {
	return (
		<section className="ezy__numbers7 light">
			<Container>
				<Row className="justify-content-center text-center">
					<Col xs={12} md={9}>
						<h1 className="ezy__numbers7-heading mb-4">
							Lorem ipsum, dolor sit amet consectetur
						</h1>
						<p className="ezy__numbers7-sub-heading">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
							quod perferendis nihil cupiditate aliquid qui exercitationem
							labore veritatis eaque nobis libero earum.
						</p>
					</Col>
				</Row>
				<Row className="text-center mt-5">
					{cards.map((item, i) => (
						<Col xs={12} sm={6} lg={3} className="mb-5 mb-lg-0" key={i}>
							<CardItem item={item} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};
export default Achivement;