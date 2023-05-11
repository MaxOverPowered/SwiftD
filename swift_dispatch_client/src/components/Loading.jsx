import React from 'react';
import logo from "../company_Icon/new/text_element.png";

const Loading = () => (
    <div className="flex justify-center items-center h-screen">
        <div className="flex items-center item-left sm:h-15 ml-12 -mt-5">
            <a>
                <img
                    src={logo}
                    alt="swift_Dispatch"
                    className="object-contain max-w-full h-auto -ml-35 animate-pulse"
                    style={{maxWidth: "200px", maxHeight: "200px"}}
                />
            </a>
        </div>
    </div>
);

export default Loading;