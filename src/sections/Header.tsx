import BContainer from "@/components/BContainer";
import { BSelect } from "@/components/BSelect";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";
import BNavigation from "@/components/header/BNavigation";
import Notice from "./Notice";

const officeOptions = [
  "মন্ত্রণালয়/বিভাগ",
  "অধিদপ্তর বাতায়ন",
  "বিভাগীয় বাতায়ন",
  "জেলা বাতায়ন",
  "উপজেলা বতায়ন",
];

const Header = () => {
  return (
    <div>
      <div className="pt-4 pb-3 bg-primaryColor">
        <BContainer>
          <div className="flex items-center justify-between">
            <div className="items-center gap-4 flex text-white">
              <p className="md:block hidden">Bangladesh National Portal</p>
              <div className="flex items-center gap-3 text-black max-w-[200px]">
                <BSelect options={officeOptions} placeholder={"অফিসের ধরন"} />
                <Button>Go</Button>
              </div>
            </div>
            <div className="items-center gap-3 flex justify-between">
              <Button>English</Button>
              <Notice />
            </div>
          </div>
        </BContainer>
      </div>
      <div className=" py-3 border-b">
        <BContainer>
          <div className="flex items-center justify-between">
            <div>
              <a href="/">
                <img className="md:w-full w-[60px]" src={logo} alt="" />
              </a>
            </div>

            {/* desktop menu */}
            <div className="lg:block hidden">
              <BNavigation />
            </div>

            {/* mobile menu */}

            <div className="lg:hidden flex items-center justify-center">
              <Drawer direction="right">
                <DrawerTrigger>
                  <Menu />
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerClose className="ml-auto pr-6">
                    <X />
                  </DrawerClose>
                  <BNavigation />
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </BContainer>
      </div>
    </div>
  );
};

export default Header;
