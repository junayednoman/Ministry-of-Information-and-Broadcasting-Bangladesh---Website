import BContainer from "@/components/BContainer";
import InfoItem from "@/components/InfoItem";
import aboutImg from "@/assets/aboutus2.png";
import noticeImg from "@/assets/notice (1).png";
import policiesImg from "@/assets/POLICY_PUBLICATION-New.png";
import eServiceImg from "@/assets/Eservice.png";
import CharterImg from "@/assets/charter.jpg";
import performanceAgreementImg from "@/assets/APA.png";
import NISImg from "@/assets/nis_logo3.jpg";
import GRSImg from "@/assets/complain.png";
import RTIImg from "@/assets/infocom.png";
import innovationImg from "@/assets/INNOVATION (1).png";
import SPSImg from "@/assets/SPS-3.png";
import budgetImg from "@/assets/budget2 (1).png";
import SDGImg from "@/assets/FinalLogoSDG.png";
import formsImg from "@/assets/forms.jpg";
import safetynetImg from "@/assets/Untitled-edited-7.png";
import filmImg from "@/assets/film.jpg";
import televisionImg from "@/assets/download.png";
import pressImg from "@/assets/14n.jpg";
import policyImg from "@/assets/Untitled-1.jpg";
import othersImg from "@/assets/others.jpg";

import SBtn from "@/components/ui/SBtn";
import { useState } from "react";

const infoItems = [
  { text: "About us", img: aboutImg },
  { text: "Notice/Order/Circular", img: noticeImg },
  { text: "Policies and Publications", img: policiesImg },
  { text: "Citizen e-Services", img: eServiceImg },
  { text: "Citizen Charter", img: CharterImg },
  { text: "Annual Performance Agreement", img: performanceAgreementImg },
  { text: "National Integrity Strategy (NIS)", img: NISImg },
  { text: "Grievance Redress System (GRS)", img: GRSImg },
  { text: "Right to Information (RTI)", img: RTIImg },
  { text: "Innovative Activities", img: innovationImg },
  { text: "Service Simplification", img: SPSImg },
  { text: "Budget and Projects", img: budgetImg },
  { text: "SDG & Dev Plan", img: SDGImg },
  { text: "Forms", img: formsImg },
  { text: "Social Sefetynet", img: safetynetImg },
  { text: "Film", img: filmImg },
  { text: "Television", img: televisionImg },
  { text: "Press", img: pressImg },
  { text: "Act/Policy", img: policyImg },
  { text: "Others", img: othersImg },
];

const Information = () => {
  const [allItemsOpen, setAllItemsOpen] = useState(false);
  console.log(allItemsOpen);

  const handleClick = () => {
    setAllItemsOpen(!allItemsOpen);
  };

  return (
    <div className="md:py-20 py-14 md:pb-24 pb-16 text-center">
      <BContainer>
        <div className="md:mb-12 mb-10">
          <h4 className="md:text-4xl text-3xl font-semibold mb-2">
            At a Glance
          </h4>
          <p>Resources and Services Overview</p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-6 gap-4">
          {infoItems
            .slice(0, allItemsOpen ? infoItems.length : 8)
            .map((item) => (
              <InfoItem text={item.text} image={item.img} />
            ))}
        </div>
        <div className="mt-10">
          <SBtn handleClick={handleClick}>
            {allItemsOpen ? "View Less" : "View All"}
          </SBtn>
        </div>
      </BContainer>
    </div>
  );
};

export default Information;
