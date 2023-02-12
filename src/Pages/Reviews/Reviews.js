import {
	Button,
	ButtonGroup,
	CardMedia,
	Box,
	Grid,
	Rating,
	Container,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import RateReviewIcon from "@mui/icons-material/RateReview";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddReview from "../AddReview/AddReview";
import { useRef } from "react";

const Reviews = () => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		fetch(`${process.env.REACT_APP_SERVER_API}/reviews`)
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, [reviews]);
	const swiperRef = useRef();

	return (
		<Box
			id='reviews'
			sx={{
				overflowX: "hidden",
				px: { md: 5, xs: 2 },
				width: { md: "100%", xs: "100vw" },
				minHeight: { md: "100vh", xs: "auto" },
				mt: 5,
			}}>
			<Box sx={{ textAlign: "left" }}>
				<Typography
					component='div'
					className='color-theme'
					sx={{
						fontWeight: 900,
						fontSize: { md: "5.5rem", xs: "3.7rem" },
						lineHeight: 1,
					}}>
					Reviews
				</Typography>
				<Typography
					variant='h5'
					component='div'
					className='color-text'
					gutterBottom>
					What my clients say about me.
				</Typography>
			</Box>
			{reviews?.length > 0 ? (
				<Box sx={{ my: 3 }}>
					<Swiper
						onBeforeInit={(swiper) => {
							swiperRef.current = swiper;
						}}
						loop={true}
						autoHeight={true}
						autoplay={{ delay: 4000 }}
						grabCursor={true}
						slidesPerView={3}
						spaceBetween={30}
						pagination={{
							clickable: true,
						}}
						breakpoints={{
							300: {
								slidesPerView: 1,
							},
							550: {
								slidesPerView: 2,
							},
							900: {
								slidesPerView: 3,
							},
							1400: {
								slidesPerView: 4,
							},
						}}
						className='mySwiper'>
						{reviews?.map((review) => (
							<SwiperSlide key={review?._id}>
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
										borderRadius: "15px",
										cursor: "grab",
									}}>
									<CardMedia
										component='img'
										className='border'
										style={{
											width: "90px",
											height: "90px",
											marginTop: -40,
											borderRadius: "50%",
											border: "3px solid",
										}}
										image={`${review?.userPhoto}`}
										alt=''
									/>
									<Typography
										sx={{ fontWeight: "bold", mt: 1 }}
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
											defaultValue={review?.star || 5}
											precision={0.1}
											readOnly
										/>
									</Box>
									<Typography variant='body2' sx={{ mt: 1, px: 1 }}>
										{review?.userReview}
									</Typography>
								</Card>
							</SwiperSlide>
						))}
					</Swiper>
					<Box sx={{ my: 2 }}>
						<ButtonGroup disableElevation variant='contained'>
							<Button
								onClick={() => swiperRef.current?.slidePrev()}
								className='button border'
								sx={{
									borderRadius: "7px 0 0 7px",
									backgroundColor: "transparent",
									border: "2px solid",
									fontWeight: "bold",
								}}>
								<ArrowBackIcon sx={{ mr: 1 }} />
								Prev
							</Button>
							<Box sx={{ border: "1px solid white" }} />
							<Button
								onClick={() => swiperRef.current?.slideNext()}
								className='button border'
								sx={{
									borderRadius: "0 7px 7px 0",
									backgroundColor: "transparent",
									border: "2px solid",
									fontWeight: "bold",
								}}>
								Next
								<ArrowForwardIcon sx={{ ml: 1 }} />
							</Button>
						</ButtonGroup>
					</Box>
					<Button
						onClick={handleOpen}
						variant='contained'
						className='button border'
						sx={{
							px: 3,
							fontWeight: "bold",
							borderRadius: "7px",
							backgroundColor: "transparent",
							border: "2px solid",
						}}>
						<RateReviewIcon sx={{ mr: 1.5 }} />
						Leave A Review
					</Button>
				</Box>
			) : (
				<Grid item md={12} xs={12} sx={{ mx: "auto" }}>
					{Array.from({ length: 5 }).map((_, idx) => (
						<CircularProgress
							key={idx}
							sx={{ mx: 0.5 }}
							className='color-theme'
						/>
					))}
				</Grid>
			)}

			{open && <AddReview open={open} setOpen={setOpen} />}
		</Box>
	);
};
export default Reviews;
