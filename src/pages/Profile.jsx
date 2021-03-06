import React, { Component } from "react";

import ItemCard3 from "../components/ItemCard/ItemCard-3";
import ItemCard4 from "../components/ItemCard/ItemCard-4";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
	selectCartItems,
	selectCartTotal,
	selectWishlistItems
} from "../redux/cart/cart.selector";

// TODO: Re-style profile field

class Profile extends Component {
	render() {
		const { cartItems, total, wishListItems } = this.props;

		const mostRecentBought =
			cartItems &&
			cartItems.length > 0 &&
			cartItems.slice(0, Math.min(4, cartItems.length)).map(item => {
				console.log("item", item);
				return <ItemCard3 {...item} />;
			});

		console.log("wishListItems", wishListItems);

		const mostRecentAddedWishlist =
			wishListItems &&
			wishListItems.length > 0 &&
			wishListItems
				.slice(0, Math.min(4, wishListItems.length))
				.map(item => {
					return <ItemCard3 {...item} />;
				});

		const shoppingCarts =
			cartItems &&
			cartItems.length > 0 &&
			cartItems.slice(0, Math.min(10, cartItems.length)).map(item => {
				return <ItemCard4 item={item} />;
			});

		return (
			<section className="profile-page">
				<div className="background-layer">
					<img src={require("../static/img/bg6.jpg")} alt="" />
				</div>

				<div className="container">
					<div className="profile-page__user-infor">
						<div className="user__infor d-flex flex-column align-items-center">
							<div className="user__image">
								<img
									src={require("../static/img/faces/avatar.jpg")}
									alt="user"
									className="img-raised rounded-circle img-fluid"
								></img>
							</div>
							<div className="user__name">
								<h3>Rikikudo</h3>
							</div>
							<div className="user__address">
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit.
								</p>
							</div>
							<div className="user__phone">
								<p>0948733748</p>
							</div>
						</div>
						<div className="user__sumary">
							<div className="user__expense--all-time">
								<p>
									Tổng chi tiêu: <span>$9999.9999</span>
								</p>
							</div>
							<div className="user__expense--this-month">
								<p>
									Tổng chi tiêu tháng: <span> $843.994</span>
								</p>
							</div>
						</div>
					</div>

					{shoppingCarts && shoppingCarts.length > 0 ? (
						<div className="shopping-cart table-responsive">
							<h1 className="shopping-cart__heading section-heading">
								Shoppping Cart
							</h1>
							<table className="table table-shopping">
								<thead>
									<tr>
										<th class="text-center"></th>
										<th>
											<p>Product</p>
										</th>
										<th class="text-right">
											<p>Price</p>
										</th>
										<th class="text-right">
											<p>Quantity</p>
										</th>
										<th class="text-right">
											<p>Amount</p>
										</th>
										<th></th>
									</tr>
								</thead>

								<tbody>
									{shoppingCarts}
									<tr>
										<td class="td-total">
											<p>Total</p>
										</td>
										<td colspan="1" class="td-price">
											<p>
												<small>$</small>
												{total}
											</p>
										</td>
										<td colspan="1"></td>
										<td colspan="2" class="text-right">
											<button
												type="button"
												class="btn btn-info btn-round"
											>
												Complete Purchase{" "}
												<i class="material-icons">
													keyboard_arrow_right
												</i>
												<div class="ripple-container"></div>
											</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					) : null}
					{mostRecentBought && mostRecentBought.length > 0 ? (
						<div className="profile-page__user-most-recent-bought">
							<h1 className="profile-page__user-most-recent-bought__heading section-heading">
								Most Recent Bought Items
							</h1>
							<div className="profile-page__user-most-recent-bought__items grid-4-columns">
								{mostRecentBought}
							</div>
						</div>
					) : null}

					{mostRecentAddedWishlist &&
					mostRecentAddedWishlist.length > 0 ? (
						<div className="profile-page__user-most-recent-added-wishlist text-center">
							<h1 className="profile-page__user-most-recent-added-wishlist__heading section-heading">
								Most Recent Added To Wishlist
							</h1>
							<div className="profile-page__user-most-recent-added-wishlist__items grid-4-columns">
								{mostRecentAddedWishlist}
							</div>
						</div>
					) : null}
				</div>
			</section>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
	wishListItems: selectWishlistItems
});

export default connect(mapStateToProps)(Profile);
