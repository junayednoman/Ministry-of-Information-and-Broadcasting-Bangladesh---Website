import checkImg from "@/assets/check.png";
type TLinkProps = {
  text: string;
};

const BLink = ({ text }: TLinkProps) => {
  return (
    <div className="flex items-center gap-2 mb-2">
      <img
        src={checkImg}
        className="text-primaryColor"
        width={15}
        height={15}
      />
      <a href="#" className="hover:underline text-sm font-medium hover:text-primaryColor">
        {text}
      </a>
    </div>
  );
};

export default BLink;
