import {
	Button,
	ButtonGroup,
	CardMedia,
	Container,
	Grid,
	Rating,
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
import CircularProgress from "@mui/material/CircularProgress";

const Reviews = () => {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		fetch(`https://${process.env.REACT_APP_SERVER_API}/reviews`)
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
		arrows: false,
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
	const slider = React.useRef(null);
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
				style={{ minHeight: "100vh" }}>
				<>
					<Typography
						className='color-theme'
						sx={{ mb: 4, fontWeight: 900 }}
						variant='h3'
						component='div'
						gutterBottom>
						REVIEWS
					</Typography>
					<Container sx={{ mx: "auto" }}>
						{reviews?.length > 0 ? (
							<>
								<Box sx={{ my: 2 }}>
									<ButtonGroup disableElevation variant='contained'>
										<Button
											className='button border'
											sx={{
												borderRadius: "15px 0 0 15px ",
												backgroundColor: "transparent",
												border: "2px solid",
											}}
											onClick={() => slider?.current?.slickPrev()}>
											Prev
										</Button>
										<Button
											className='button border'
											sx={{
												borderRadius: " 0 15px 15px 0",
												backgroundColor: "transparent",
												border: "2px solid",
											}}
											onClick={() => slider?.current?.slickNext()}>
											Next
										</Button>
									</ButtonGroup>
								</Box>
								<Slider ref={slider} {...settings}>
									{reviews?.map((review) => (
										<Box key={review?._id}>
											<Card
												className='color-text border'
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
													backgroundColor: "transparent",
													border: "2px solid",
												}}>
												<CardMedia
													component='img'
													className='border'
													style={{
														width: "80px",
														marginTop: -35,
														borderRadius: "50%",
														border: "5px solid",
													}}
													image={review?.userPhoto}
													alt=''
												/>
												<Typography
													gutterBottom
													variant='h6'
													component='div'
													className='color-theme'>
													{review?.userName}
												</Typography>
												<Box
													sx={{
														display: "flex",
														alignItems: "center",
													}}>
													<Rating
														className='color-theme'
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
										</Box>
									))}
								</Slider>
								<Link to='addreview' style={{ textDecoration: "none" }}>
									<Button
										variant='contained'
										className='button border'
										sx={{
											px: 3,
											fontWeight: "bold",
											borderRadius: "25px",
											backgroundColor: "transparent",
											border: "2px solid",
											my: 3.7,
										}}>
										<RateReviewIcon sx={{ mr: 1.5 }} />
										Leave A Review
									</Button>
								</Link>
							</>
						) : (
							<Box sx={{ mx: "auto", width: "72vw", mt: 3 }}>
								{Array.from({ length: 5 }).map((_, idx) => (
									<CircularProgress
										key={idx}
										sx={{ mx: 0.5 }}
										className='color-theme'
									/>
								))}
							</Box>
						)}
					</Container>
				</>
			</Grid>
		</Box>
	);
};
export default Reviews;
