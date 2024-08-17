import checkImg from "@/assets/right-arrow.png";
type TNoticeItemProps = {
  text: string;
  href: string;
};

const BNoticeItem = ({ text }: TNoticeItemProps) => {
  return (
    <div className="flex items-center gap-2 mb-2">
      <img
        src={checkImg}
        className="text-primaryColor"
        width={13}
        height={13}
      />
      <a
        href="#"
        className="hover:underline text-sm font-medium hover:text-primaryColor"
      >
        {text}
      </a>
    </div>
  );
};

export default BNoticeItem;
