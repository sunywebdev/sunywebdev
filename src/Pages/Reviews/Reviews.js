import {
	Button,
	CardMedia,
	Container,
	Grid,
	Rating,
	Skeleton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import RateReviewIcon from "@mui/icons-material/RateReview";

const Reviews = () => {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		fetch(`https://fast-savannah-56016.herokuapp.com/reviews`)
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, [reviews]);
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		speed: 700,
		autoplaySpeed: 3000,
		cssEase: "linear",
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 2,
					adaptiveHeight: true,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					adaptiveHeight: true,
				},
			},
		],
	};
	return (
		<Box
			sx={{
				mx: "auto",
				overflow: "hidden",
				textAlign: "center",
			}}>
			<Grid
				container
				direction='column'
				alignItems='center'
				justifyContent='center'
				sx={{ minHeight: "95vh" }}>
				<>
					<Typography
						data-aos='fade-down'
						sx={{ mb: 0, fontWeight: 900 }}
						variant='h3'
						component='div'
						gutterBottom>
						TESTIMONIAL
					</Typography>
					<Container sx={{ mx: "auto" }}>
						{reviews?.length > 0 ? (
							<Slider {...settings}>
								{reviews?.map((review) => (
									<>
										<Card
											key={review?._id}
											sx={{
												maxWidth: 345,
												mt: 5,
												mx: 1.5,
												mb: 1,
												pb: 2,
												minHeight: "250px",
												display: "flex",
												flexDirection: "column",
												alignItems: "center",
												alignContent: "center",
												overflow: "visible",
											}}>
											<CardMedia
												component='img'
												style={{
													width: "80px",
													marginTop: -35,
													borderRadius: "50%",
													border: "7px solid white",
												}}
												image={review?.userPhoto}
												alt=''
											/>
											<Typography
												sx={{}}
												gutterBottom
												variant='h6'
												component='div'>
												{review?.userName}
											</Typography>
											<Box
												sx={{
													display: "flex",
													alignItems: "center",
												}}>
												<Rating
													sx={{}}
													name='half-rating-read'
													defaultValue={review?.star}
													precision={0.1}
													readOnly
												/>
											</Box>
											<Typography variant='body2' sx={{ mt: 1, px: 1 }}>
												{review?.userReview}
											</Typography>
										</Card>
									</>
								))}
							</Slider>
						) : (
							<Box sx={{ mx: "auto", width: "72vw", mt: 3 }}>
								{Array.from({ length: 5 }).map((_, idx) => (
									<>
										<Skeleton animation='wave' />
									</>
								))}
							</Box>
						)}
						<Link to='addreview' style={{ textDecoration: "none" }}>
							<Button
								variant='contained'
								sx={{
									mt: 3.7,
									fontWeight: "bold",
									backgroundColor: "#222222",
									"&:hover": {
										backgroundColor: "#222222",
									},
								}}>
								<RateReviewIcon sx={{ mr: 1.5 }} />
								Leave A Review
							</Button>
						</Link>
					</Container>
				</>
			</Grid>
		</Box>
	);
};
export default Reviews;
