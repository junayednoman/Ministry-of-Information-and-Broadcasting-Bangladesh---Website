import { Card } from "./ui/card";
type TInfoCardProps = {
  text: string;
  image: string;
};

const InfoItem = ({ text, image }: TInfoCardProps) => {
  return (
    <>
      <Card className="p-4 py-6 text-center cursor-pointer hover:border-primaryColor duration-200 hover:bg-lightGreenColor flex flex-col items-center justify-between">
        <a href="#">
          <img className="w-[60px] mx-auto mb-3" src={image} alt="" />
          <h5 className="font-semibold md:text-lg sm:text-base text-sm">
            {text}
          </h5>
        </a>
      </Card>
    </>
  );
};

export default InfoItem;
