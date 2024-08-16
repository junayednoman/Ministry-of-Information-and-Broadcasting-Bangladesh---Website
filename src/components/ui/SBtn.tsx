import { ReactNode } from "react";
import { Button } from "./button";

type TSbuttonProps = {
  children: ReactNode;
};

const SBtn = ({ children }: TSbuttonProps) => {
  return <Button className="bg-primaryColor hover:bg-[#007d44] py-4" size={'lg'}>{children}</Button>;
};

export default SBtn;
