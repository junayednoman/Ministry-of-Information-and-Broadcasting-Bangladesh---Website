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
import SBtn from "@/components/ui/SBtn";

const infoItems = [
  { text: "About us", img: aboutImg },
  { text: "Notice/Order/Circular", img: noticeImg },
  { text: "Policies and Publications", img: policiesImg },
  { text: "Citizen e-Services", img: eServiceImg },
  { text: "Citizen Charter", img: CharterImg },
  { text: "Annual Performance Agreement", img: performanceAgreementImg },
  { text: "National Integrity Strategy (NIS)", img: NISImg },
  { text: "Grievance Redress System (GRS)", img: GRSImg },
];

const Information = () => {
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
          {infoItems.map((item) => (
            <InfoItem text={item.text} image={item.img} />
          ))}
        </div>
        <div className="mt-10">
          <SBtn>View All</SBtn>
        </div>
      </BContainer>
    </div>
  );
};

export default Information;
