import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  const [isHoverFacebook, setHoverFacebook] = useState(false);
  const [isHoverInstagram, setHoverInstagram] = useState(false);
  const [isHoverMail, setHoverMail] = useState(false);

  return (
    <footer className="bg-gray-900 w-full">
      <div className="mt-2 max-w-xl mx-auto py-2 flex flex-col justify-between items-center">
        <div className="flex justify-center w-full sm:justify-around">
          <div className="flex space-x-4">
            <div
              onMouseEnter={() => setHoverFacebook(true)}
              onMouseLeave={() => setHoverFacebook(false)}
            >
              <SocialIcon
                network="facebook"
                url="https://www.facebook.com/swift.dispatch.company/"
                bgColor={isHoverFacebook ? "#4267B2" : "#FFFFFF"}
                fgColor={isHoverFacebook ? "#FFFFFF" : "#4267B2"}
                style={{ height: 50, width: 50 }}
              />
            </div>
            <div
              onMouseEnter={() => setHoverInstagram(true)}
              onMouseLeave={() => setHoverInstagram(false)}
            >
              <SocialIcon
                network="instagram"
                url="https://www.instagram.com/swift.dispatch.company/"
                bgColor={isHoverInstagram ? "#833AB4" : "#FFFFFF"}
                fgColor={isHoverInstagram ? "#FFFFFF" : "#833AB4"}
                style={{ height: 50, width: 50 }}
              />
            </div>
            <div
              onMouseEnter={() => setHoverMail(true)}
              onMouseLeave={() => setHoverMail(false)}
            >
              <SocialIcon
                network="mailto"
                url="mailto:swift.dispatch.info@gmail.com"
                bgColor={isHoverMail ? "#ff0000" : "#FFFFFF"}
                fgColor={isHoverMail ? "#FFFFFF" : "#ff0000"}
                style={{ height: 50, width: 50 }}
              />
            </div>
          </div>
        </div>
        <div className="text-white mb-3 font-sans font-semibold mt-3">
          &copy; Swift Dispatch {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
