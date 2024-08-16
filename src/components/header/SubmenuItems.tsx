import { TSubmenuItem, TSubmenuItems } from "@/constant";

const SubmenuItems = ({ items }: { items: TSubmenuItems[] }) => {
  return (
    <div>
      <div className="grid gap-3 p-4 md:w-[400px] lg:w-[550px] lg:grid-cols-3">
        {items.map((item: TSubmenuItems) => (
          <div>
            <h4 className="text-sm font-semibold text-primaryColor mb-2">
              {item.title}
            </h4>
            <div>
              {item.items.map((d: TSubmenuItem) => (
                <a
                  className="hover:text-primaryColor text-sm block mb-2"
                  href={d.link}
                >
                  {d.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubmenuItems;
