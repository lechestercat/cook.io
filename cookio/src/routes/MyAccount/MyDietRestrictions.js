import React, { useEffect, useState } from 'react';
import DefaultAvatar from '../../img/img5.png';
import { Link } from 'react-router-dom';
import { Form, Button, Col } from 'react-bootstrap';

const MyAccount = (props) => {
	const [ recipe, setRecipe ] = useState({ recipeID: props.match.params.id });

	return (
		<div>
			<div className='myaccount-container'>
				<div className='myaccount-top-bar'>
					<h1 className='display-4'>My Account</h1>
					<div className='avatar-container'>
						<img src={DefaultAvatar} alt='' id='my-account-avatar' />
					</div>
				</div>

				<hr />
				<div className='myaccount-content-container'>
					<div className='myaccount-sidebar'>
						<Link to='/myaccount/'>
							<button type='button' className='btn btn-light btn-block'>
								<h3>My Dashboard</h3>
							</button>
						</Link>
						<Link to='/myaccount/recipes'>
							<button type='button' className='btn btn-light btn-block'>
								<h3>My Recipes</h3>
							</button>
						</Link>
						<Link to='/myaccount/shoppingcart'>
							<button type='button' className='btn btn-light btn-block'>
								<h3>My Shopping Cart</h3>
							</button>
						</Link>
						<Link to='/myaccount/favorite'>
							{' '}
							<button type='button' className='btn btn-light btn-block'>
								<h3>My Favourite Recipes</h3>
							</button>
						</Link>
						<Link to='/myaccount/diet'>
							<button type='button' className='btn btn-dark btn-block'>
								<h3>My Diet Restrictions</h3>
							</button>
						</Link>
						<hr />
						<h2 className='center-text'>Settings</h2>
						<Link to='/myaccount/changepassword'>
							<button type='button' className='btn btn-light btn-block'>
								<h3>Change Password</h3>
							</button>
						</Link>
						<Link to='/myaccount/changeemail'>
							<button type='button' className='btn btn-light btn-block'>
								<h3>Change Email</h3>
							</button>
						</Link>
					</div>
					<div className='myaccount-content container'>
						<h1 className='display-4 center-text'>Dietary Restrictions</h1>
						<h2 className='currently-empty'>Currently empty...</h2>
						<hr />
						<h1 className='display-4'>Add New Diet Restriction</h1>

						<Form.Row>
							<Form as={Col}>
								<Form.Group controlId='exampleForm.SelectCustom'>
									<Form.Label>Add Restriction:</Form.Label>
									<Form.Control as='select' custom>
										<option>Vegan</option>
										<option>Vegetarian</option>
										<option>Pescatarian</option>
									</Form.Control>
								</Form.Group>

								<Button variant='primary' type='submit'>
									Add +
								</Button>
							</Form>

							<Form as={Col}>
								<Form.Group controlId='exampleForm.SelectCustom'>
									<Form.Label>Add Allergy:</Form.Label>
									<Form.Control as='select' custom>
										<option>Peanuts</option>
										<option>Gluten</option>
										<option>Shellfish</option>
									</Form.Control>
								</Form.Group>

								<Button variant='primary' type='submit'>
									Add +
								</Button>
							</Form>
						</Form.Row>
					</div>{' '}
				</div>
			</div>
		</div>
	);
};

export default MyAccount;
