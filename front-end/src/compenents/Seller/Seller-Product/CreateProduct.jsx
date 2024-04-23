import React, { useState } from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegSave } from "react-icons/fa";
import './Product.css'

function CreateProduct() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [images, setImages] = useState([]);
    // const [selectedFileName, setSelectedFileName] = useState(null);

    // const handleFileInput = (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //         setSelectedFileName(file.name);
    //         onFileSelected(file); // Pass the file to the parent component
    //     }
    // };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };
    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };
    const handleImageChange = (event) => {
        setImages(event.target.files);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log('Product Name:', name);
        // console.log('Product Description:', description);
        // console.log('Product Quantity:', quantity);
        // Submit product data to backend here
        setName('');
        setDescription('');
        setQuantity(0);
        setPrice(0);
        setImages([]);
    };
    return (
        <>
            <h2 className='createproduct'>Create product</h2>
            <form onSubmit={handleSubmit} className="product-form">
                <div className='product-info'>
                    <div className="form-group">
                        <label htmlFor="name" className='label-product-group'>
                            Product name:
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={handleNameChange}
                                placeholder="   Name (Ex: Blue summer shirt..)"
                                className="input-product-group"
                                required
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description" className='label-product-description'>
                            Description product:
                            <textarea
                                id="description"
                                value={description}
                                cols="500"
                                onChange={handleDescriptionChange}
                                placeholder="  type something"
                                className="input-product-description"
                                required
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <div className='quantity'>
                            <label htmlFor="quantity" className='label-product-group'>
                                Quantity:
                                <input
                                    type="number"
                                    id="quantity"
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                    min="0"
                                    className="input-product-group"
                                    required
                                />
                            </label>
                            <label htmlFor="price" className='label-product-group'>
                                Price:
                                <input
                                    type="number"
                                    id="price"
                                    value={price}
                                    onChange={handlePriceChange}
                                    min="0"
                                    className="input-product-group"
                                    required
                                />
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className='label-product-group'>Product Category :</label>
                        <select name="product-category" id="product-category" className="input-product-group">
                            <option value=''>choose product category</option>
                        </select>
                    </div>
                </div >
                <div className="image-info">
                    <div className="image-group">
                        <label htmlFor="images" className='label-image'>
                            Images
                        </label>
                        <input
                            type="file"
                            id="images"
                            className='input-image'
                            multiple // Allow multiple file selection
                            onClick={handleImageChange}
                            // onChange={handleFileInput}
                            accept="image/*" // Only accept image files
                        />
                        {/* <button htmlFor="fileInput" className='button-image'>
                                {handleFileInput || 'Upload images'}
                            </button> */}

                        <hr />
                    </div>
                </div>
                <div className="variant-info">
                    <div className="variant-group">
                        <label htmlFor="variant-check" className='label-variant'>
                            Variants
                        </label>
                        <input
                            type="checkbox"
                            id="variant-check"
                            name='variant-check'
                            className='input-variant'
                        />
                        <hr />
                        <div className='variant-option'>
                            <label htmlFor='variants' className='label-variant-option'>
                                Value
                            </label>
                            <div className='value-group'>

                                <input
                                    type='text'
                                    id='variant'
                                    name='variant'
                                    placeholder='  size,capacity...'
                                    className='input-variant-option'
                                />
                                <button> <RiDeleteBinLine /></button>

                            </div>
                        </div>
                        <button className='button-variant'>+  Add an Variant</button>

                    </div>
                    <div className="variant-group">
                        <label htmlFor="variant-check" className='label-variant'>
                            Color
                        </label>
                        <input
                            type="checkbox"
                            id="variant-check"
                            name='variant-check'
                            className='input-variant'
                        />
                        <hr />
                        <div className='variant-option'>
                            <label htmlFor='variants' className='label-variant-option'>
                                Value
                            </label>
                            <div className='value-group'>

                                <input
                                    type='text'
                                    id='variant'
                                    name='variant'
                                    placeholder='  Add an color'
                                    className='input-variant-option'
                                />
                                <button> <RiDeleteBinLine /></button>

                            </div>
                        </div>
                        <button className='button-variant'>+  Add an Color</button>

                    </div>
                </div>
                <footer className='footer-seller'>
                    <button>
                        <FaRegSave />
                        <span> Save</span>
                    </button>
                </footer>

            </form >
        </>
    );
}

export default CreateProduct