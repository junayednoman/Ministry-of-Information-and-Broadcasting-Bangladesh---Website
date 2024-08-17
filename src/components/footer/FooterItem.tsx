import { TFooterLinkItem } from "@/constant";

type TFooterItemProps = {
  heading: string;
  items: TFooterLinkItem[];
};

const FooterItem = ({ heading, items }: TFooterItemProps) => {
  return (
    <div>
      <h5 className="font-semibold text-lg">{heading}</h5>
      <div className="flex flex-col mt-2 space-y-1">
        {items.map((item) => (
          <div key={item.text}>
            <a
              className="inline-block text-sm font-medium hover:underline duration-200 hover:text-primaryColor"
              href={item.href}
            >
              {item.text}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterItem;
