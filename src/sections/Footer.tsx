import BContainer from "@/components/BContainer";
import FooterItem from "@/components/footer/FooterItem";
import { importantLinkItems, planningItems } from "@/constant";
import technicalImg from "@/assets/np-logo-set.png";

const Footer = () => {
  return (
    <div>
      <div className="border-y py-12">
        <BContainer>
          <div className="grid md:grid-cols-3 gap-6">
            <FooterItem
              items={importantLinkItems}
              heading={"Important Links"}
            />
            <FooterItem
              items={planningItems}
              heading={"Planning and Implementation"}
            />
            <div>
              <h5 className="font-semibold text-lg mb-2">Technical Support</h5>
              <img src={technicalImg} alt="" />
            </div>
          </div>
        </BContainer>
      </div>
      <div className="py-6 text-center text-sm text-gray-500">
        <p>
          Copyright © {new Date().getFullYear()} All Rights Reserved Government
          of the People's Republic of Bangladesh
        </p>
      </div>
    </div>
  );
};

export default Footer;
