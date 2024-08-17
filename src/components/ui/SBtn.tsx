/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { Button } from "./button";

type TSbuttonProps = {
  children: ReactNode;
  handleClick?: any;
};

const SBtn = ({ children, handleClick }: TSbuttonProps) => {
  return (
    <Button
      onClick={handleClick}
      className="bg-primaryColor hover:bg-[#007d44] py-4"
      size={"lg"}
    >
      {children}
    </Button>
  );
};

export default SBtn;
