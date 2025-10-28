import React from 'react'

interface Props {
    props: string;
}

const Benefit: React.FC<Props> = ({ props }) => {
    return (
        <>
            <div className="container">
                <div className={`benefit-block ${props}`}>
                    <div className="list-benefit grid items-start lg:grid-cols-4 grid-cols-2 gap-[30px]">
                        <div className="benefit-item flex flex-col items-center justify-center">
                            <i className="icon-phone-call lg:text-7xl text-5xl"></i>
                            <div className="heading6 text-center mt-5">Expert Design Support</div>
                            <div className="caption1 text-secondary text-center mt-3">Our design team works with you to create perfect branded products for your business.</div>
                        </div>
                        <div className="benefit-item flex flex-col items-center justify-center">
                            <i className="icon-return lg:text-7xl text-5xl"></i>
                            <div className="heading6 text-center mt-5">Bulk Order Discounts</div>
                            <div className="caption1 text-secondary text-center mt-3">Save more when you order in larger quantities. Contact us for volume pricing.</div>
                        </div>
                        <div className="benefit-item flex flex-col items-center justify-center">
                            <i className="icon-guarantee lg:text-7xl text-5xl"></i>
                            <div className="heading6 text-center mt-5">Quality Guarantee</div>
                            <div className="caption1 text-secondary text-center mt-3">Maine-crafted quality you can trust. We stand behind every product we create.</div>
                        </div>
                        <div className="benefit-item flex flex-col items-center justify-center">
                            <i className="icon-delivery-truck lg:text-7xl text-5xl"></i>
                            <div className="heading6 text-center mt-5">Fast Turnaround</div>
                            <div className="caption1 text-secondary text-center mt-3">Quick production and reliable shipping to meet your deadlines.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Benefit