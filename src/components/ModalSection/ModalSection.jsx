import React, { useState } from 'react'
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import toast from 'react-hot-toast';

const ModalSection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    address: '',
    mobileNo: '',
    pincode: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  }

  const handleSubmit = () => {
    if (!orderDetails.name || !orderDetails.address || !orderDetails.mobileNo || !orderDetails.pincode) {
      return toast.error("All fields are required!");
    } else {
      toast.success("Order  Successful!");
      onCloseModal();
    }
  }

  function onCloseModal() {
    setOpenModal(false);
    setOrderDetails({ name: '', address: '', mobileNo: '', pincode: '' });
  }

  return (
    <>
      <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full" onClick={() => setOpenModal(true)}>Checkout</button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Enter Your Name" />
              </div>
              <TextInput
                name="name"
                id="name"
                value={orderDetails.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="address" value="Enter Your Address" />
              </div>
              <TextInput
                name="address"
                id="address"
                value={orderDetails.address}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="number" value="Enter Your Mobile No." />
              </div>
              <TextInput
                name="mobileNo"
                id="mobile"
                value={orderDetails.mobileNo}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="number" value="Enter Your Pincode" />
              </div>
              <TextInput
                name="pincode"
                id="pincode"
                value={orderDetails.pincode}
                onChange={handleChange}
                required
              />
            </div>

            <div className="w-full">
              <Button className='w-full' onClick={handleSubmit}>Order Now</Button>
            </div>

          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalSection