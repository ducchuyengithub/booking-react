import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class OrderHistoryItem extends PureComponent {

	viewOrderHistoryDetail = e => {
		const { order } = this.props;
		const event = this.props.onViewOrderHistoryDetail;

		e.preventDefault();

		if (event) {
			event(order);
		}
	};

	render() {
		const { order: { hotelName, customerName, price } } = this.props;

		return (
			<tr>
				<th>{hotelName}</th>
				<td>
					<a href="#" onClick={this.viewOrderHistoryDetail}>
						{customerName}
					</a>
				</td>
				<td>5</td>
				<td>{price}</td>
			</tr>
		);
	}
}

OrderHistoryItem.propTypes = {
	onViewOrderHistoryDetail: PropTypes.func,
	order: PropTypes.shape({
		hotelName: PropTypes.string,
		customerName: PropTypes.string,
		price: PropTypes.string
	})
};

export default OrderHistoryItem;
