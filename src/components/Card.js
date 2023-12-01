import React from 'react'

export default function Card() {
    return (
        <div>
            <div>
                <div className="card mt-3 " style={{ "width": "13rem", "maxHeight": "360px" }} >
                    <img src="/burger-4145977_1280.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Cheese burger</h5>
                        <p className="card-text">Burger, Fast Food, Beverages</p>
                        <div className='container w-100'>
                            <select className='m-2 h-100  btn-outline-secondary rounded'>

                            </select>
                            <select className='m-2 h-100  btn-outline-secondary rounded'>
                                <option value="Half">Half</option>
                                <option value="full">Full</option>
                            </select>
                            <div className='d-inline h-100 fs-5'>
                                Total Price
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="card mt-3" style={{ "width": "13rem", "maxHeight": "360px" }}>
                    <img src="/pizza-386717_640.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Italian Pizza</h5>
                        <p className="card-text">Pizza, Fast Food, Desserts, Beverages</p>
                        <div className='container w-100'>
                            <select className='m-2 h-100  btn-outline-secondary rounded'>

                            </select>
                            <select className='m-2 h-100  btn-outline-secondary rounded'>
                                <option value="Half">Half</option>
                                <option value="full">Full</option>
                            </select>
                            <div className='d-inline h-100 fs-5'>
                                Total Price
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="card mt-3" style={{ "width": "13rem", "maxHeight": "360px" }}>
                    <img src="/ai-generated-8287733_640.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Chicken Biryani</h5>
                        <p className="card-text">Mughlai, North Indian, Biryani, Kebab, Beverages</p>
                        <div className='container w-100'>
                            <select className='m-2 h-100  btn-outline-secondary rounded'>

                            </select>
                            <select className='m-2 h-100  btn-outline-secondary rounded'>
                                <option value="Half">Half</option>
                                <option value="full">Full</option>
                            </select>
                            <div className='d-inline h-100 fs-5'>
                                Total Price
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
