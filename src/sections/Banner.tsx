import BContainer from "@/components/BContainer";
import { Input } from "@/components/ui/input";
import SBtn from "@/components/ui/SBtn";

const Banner = () => {
  return (
    <div className="lg:py-36 md:py-20 py-16">
      <BContainer>
        <div className="text-center">
          <h1 className="md:text-7xl text-5xl font-bold md:leading-[100px] leading-[65px]">
            Ministry of Information and Broadcasting
          </h1>
          <h5 className="font-medium md:text-3xl text-2xl mt-3">
            Government of the People's Republic of Bangladesh
          </h5>
          <div className="flex items-center gap-3 mt-8 md:w-[500px] w-full mx-auto">
            <Input className="h-[44px]" type="text" placeholder="search..." />
            <SBtn>Search</SBtn>
          </div>
        </div>
      </BContainer>
    </div>
  );
};

export default Banner;
