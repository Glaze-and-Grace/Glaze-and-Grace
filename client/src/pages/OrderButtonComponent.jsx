import React from 'react';
import axios from 'axios';

const OrderButtonComponent = ({ orderDetails, onOrderPlaced }) => {
  const handlePlaceOrder = () => {

    axios.post('/', orderDetails)
      .then(response => {
        console.log('Order placed successfully:', response.data);
        onOrderPlaced();
      })
      .catch(error => {
        console.error('Error placing order:', error);
      });
  };

  return (
    <div>
      <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
};

export default OrderButtonComponent;