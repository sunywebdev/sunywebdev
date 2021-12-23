import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Blogs = () => {
	return (
		<Container sx={{ mt: { md: 0, xs: 7 } }}>
			<Grid
				data-aos='zoom-in'
				container
				direction='column'
				alignItems='center'
				justifyContent='center'
				className='color-theme'
				style={{ minHeight: "100vh" }}>
				<Typography variant='h1' component='div' sx={{ fontWeight: 900 }}>
					Blogs
				</Typography>
				{/* <Typography
				variant='h3'
				component='div'
				gutterBottom
				sx={{ fontWeight: 900 }}>
				Comming Soon!
			</Typography> */}
				<Container sx={{ textAlign: "left" }}>
					<Box sx={{ my: 5 }}>
						<Typography variant='h6' component='div' sx={{ fontWeight: 900 }}>
							Differences between props and state:
						</Typography>
						<Typography
							variant='body2'
							component='div'
							sx={{ fontWeight: 900 }}>
							Props are read only. It allows passing data from parent component
							to child component. Props are immutable. It can be changed by
							parent component. And States are immutable. It holds data about
							components but it can’t pass to the child component. Its value
							changes over time. It makes components reusable. Here State is
							internal and controlled by the React Component itself.
						</Typography>
					</Box>
					<Box sx={{ my: 5 }}>
						<Typography variant='h6' component='div' sx={{ fontWeight: 900 }}>
							JSX:
						</Typography>
						<Typography
							variant='body2'
							component='div'
							sx={{ fontWeight: 900 }}>
							JSX stands for JavaScript XML. Its allows to write HTML within
							JavaScript code. It uses the JS6 version to work. Browser doesn't
							JSX. Because it's not a valid Javascript code. Browsers need to
							use tools like Babel compiler/transpiler to run JSX code on
							browsers. React jsx code are look like:
							<blockquote>
								<pre>
									<code>
										{`class JSXDemo extends React.Component {
    render() {
        return <h1>This is JSX</h1>;
    }
}
ReactDOM.render(<JSXDemo />, document.getElementById('root'));
`}
									</code>
								</pre>
							</blockquote>
						</Typography>
					</Box>
					<Box sx={{ my: 5 }}>
						<Typography variant='h6' component='div' sx={{ fontWeight: 900 }}>
							Custom hook:
						</Typography>
						<Typography
							variant='body2'
							component='div'
							sx={{ fontWeight: 900 }}>
							Hooks are like a function which is reusable. When we need to use
							some code in many components then we use a custom hook.like when
							we make a react app we build many hooks and call it from index.js
							. its use state without writing a new class. Custom Hooks start
							with "use". Like: useFetch().
						</Typography>
					</Box>
					<Box sx={{ my: 5 }}>
						<Typography variant='h6' component='div' sx={{ fontWeight: 900 }}>
							Context API:
						</Typography>
						<Typography
							variant='body2'
							component='div'
							sx={{ fontWeight: 900 }}>
							The best way to pass data 4-5 layers down using context API
							Context API is the way to make global variables. It helps us to
							pass data in components without props drilling. On props drilling
							it sends data from parent component to child component and that
							child component sends it to that component's child components.
							That way data travels too much and needs more code. So context api
							solves that problem. It can send data from the parent component to
							any sub component without passing data to the child components.
						</Typography>
					</Box>
					<Box sx={{ my: 5 }}>
						<Typography variant='h6' component='div' sx={{ fontWeight: 900 }}>
							Component Lifecycle:
						</Typography>
						<Typography
							variant='body2'
							component='div'
							sx={{ fontWeight: 900 }}>
							Each react component has a lifecycle. After component
							Initialization they Mounted to the dom then Update by user needs
							and at last when it completed its work it got Unmounted from dom.
							Initial Phase, Mounting Phase, Updating Phase, Unmounting Phase
							are the four phases of the Component Lifecycle.
						</Typography>
					</Box>
					<Box sx={{ my: 5 }}>
						<Typography variant='h6' component='div' sx={{ fontWeight: 900 }}>
							CRUD Operations:
						</Typography>
						<Typography
							variant='body2'
							component='div'
							sx={{ fontWeight: 900 }}>
							CRUD Operations are basically create, read, update and delete
							operations on storage. This operation creates or adds data , read
							data , update data and delete data by user command. In node js we
							use:
							<ul>
								<li>Create (POST) - Add something </li>
								<li>Read (GET)- Read something</li>
								<li>Update (PUT) - Change something</li>
								<li>Delete (DELETE)- Remove something</li>
							</ul>
						</Typography>
					</Box>
					<Box sx={{ my: 5 }}>
						<Typography variant='h6' component='div' sx={{ fontWeight: 900 }}>
							JWT:
						</Typography>
						<Typography
							variant='body2'
							component='div'
							sx={{ fontWeight: 900 }}>
							JWT full form JSON Web Token. It's a kind of signature of a
							requester. when someone wants to access a databaseJWT token
							verifies the user token if the request comes from the right way.
							If the database server does not detect the right jwt token, the
							database blocks the access from that request.
						</Typography>
					</Box>
					<Box sx={{ my: 5 }}>
						<Typography variant='h6' component='div' sx={{ fontWeight: 900 }}>
							Nodejs:
						</Typography>
						<Typography
							variant='body2'
							component='div'
							sx={{ fontWeight: 900 }}>
							Node.js is an open-source, cross-platform, back-end JavaScript
							runtime environment. It is used for back-end server side and
							networking development. It runs on a V8 engine. It runs on various
							platforms like : Windows, Linux, Unix, Mac OS X, etc. Node js
							helps to create or add data , read data , update data and delete
							data on the database by user command.
						</Typography>
					</Box>
					<Box sx={{ my: 5 }}>
						<Typography variant='h6' component='div' sx={{ fontWeight: 900 }}>
							Relational database:
						</Typography>
						<Typography
							variant='body2'
							component='div'
							sx={{ fontWeight: 900 }}>
							A relational database is a collection of data items with
							pre-defined relationships between them. It is also called by
							Relational Database Management Systems (RDBMS) or SQL
							databases.SQL databases have static schema. It is vertically
							scalable.It saves data on table row columns.
						</Typography>
					</Box>
					<Box sx={{ my: 5 }}>
						<Typography variant='h6' component='div' sx={{ fontWeight: 900 }}>
							Nosql:
						</Typography>
						<Typography
							variant='body2'
							component='div'
							sx={{ fontWeight: 900 }}>
							It is a Non-relational or distributed database. NoSQL databases
							have dynamic schema. It's horizontally scalable. It saves data in
							json format. So in CRUD operation we can create, read, update and
							delete data using json format.
						</Typography>
					</Box>
					<Box sx={{ my: 5 }}>
						<Typography variant='h6' component='div' sx={{ fontWeight: 900 }}>
							Express.js:
						</Typography>
						<Typography
							variant='body2'
							component='div'
							sx={{ fontWeight: 900 }}>
							It is a back end web application framework for Node.js. It allows
							setting up middlewares to respond to HTTP Requests on the backend
							server. It is used for building single-page, multi-page, and
							hybrid web applications for better user experience.
						</Typography>
					</Box>
				</Container>
			</Grid>
		</Container>
	);
};

export default Blogs;
