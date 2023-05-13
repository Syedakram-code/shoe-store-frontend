import React, { useState } from 'react'

const about = () => {
    const [hover, setHover] = useState(false);
    return (
        <div>
            <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                    About Us
                </div>
                <div className="text-md md:text-xl">
                    <b onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} className={hover ? `text-blue-500 underline` : ''}>Nike, Inc.</b> is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services. The company is headquartered near Beaverton, Oregon, in the Portland metropolitan area. It is the world's largest supplier of athletic shoes and apparel and a major manufacturer of sports equipment, with revenue in excess of US$46 billion in its fiscal year 2022.

                    The company was founded on January 25, 1964, as "Blue Ribbon Sports", by Bill Bowerman and Phil Knight, and officially became Nike, Inc. on May 30, 1971. The company takes its name from Nike, the Greek goddess of victory. Nike markets its products under its own brand, as well as Nike Golf, Nike Pro, Nike+, Air Jordan, Nike Blazers, Air Force 1, Nike Dunk, Air Max, Foamposite, Nike Skateboarding, Nike CR7, and subsidiaries including Air Jordan and Converse. Nike also owned Bauer Hockey from 1995 to 2008, and previously owned Cole Haan, Umbro, and Hurley International. In addition to manufacturing sportswear and equipment, the company operates retail stores under the Niketown name. Nike sponsors many high-profile athletes and sports teams around the world, with the highly recognized trademarks of "Just Do It" and the Swoosh logo.

                    As of 2020, it employed 76,700 people worldwide. In 2020, the brand alone was valued in excess of $32 billion, making it the most valuable brand among sports businesses. Previously, in 2017, the Nike brand was valued at $29.6 billion. Nike ranked 89th in the 2018 Fortune 500 list of the largest United States corporations by total revenue.
                </div>
            </div>
        </div>
    )
}

export default about;

