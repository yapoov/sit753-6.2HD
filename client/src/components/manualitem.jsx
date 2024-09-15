import React, { useState } from 'react';
import "../App.css";

const ManualItemEntry = () => {
  const [itemName, setItemName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemName || !expiryDate) {
      alert("Please enter both item name and expiry date.");
      return;
    }

    console.log("Item Name:", itemName);
    console.log("Expiry Date:", expiryDate);

    setItemName('');
    setExpiryDate('');
  };

  return (
    <div>
      <div className="my-modal modal-sm">
        <div className="logo">
          <h2 className="text-center">Enter Food Item</h2>
        </div>
        <div className='login-group'>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                className="form-control text-center" 
                placeholder="Food Item Name" 
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                required 
              />
              <span className="input-icon"><i className='icon-check-double-fill'></i></span>
            </div>
            <div className="form-group">
              <input 
                type="date" 
                className="form-control text-center" 
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                required 
              />
              <span className="input-icon"><i className='icon-calendar'></i></span>
            </div>

            <div className="float-right p-t-30">
              <button type="submit" className="btn btn-success">Submit Item</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManualItemEntry;
