import BContainer from "@/components/BContainer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import nahidImage from "@/assets/IMG.jpg";
import secretaryImage from "@/assets/secretary.jpg";
import BLink from "@/components/ui/BLink";
import {
  importantLinks,
  innovationLinks,
  otherImportantLinks,
  otherLinks,
} from "@/constant";
import eDirectoryImg from "@/assets/e-directory.jpg";
import portal_enImg from "@/assets/National-portal_en.gif";
import services_enImg from "@/assets/National-portal-digital-services_en (1).gif";
import hotlineImg from "@/assets/hotline.gif";
import hotline2Img from "@/assets/hotline_v.2_bn.png";
import fbImg from "@/assets/facebook.png";
import youtubeImg from "@/assets/youtube.png";
import anthem from "@/assets/anthem.mp3";

const ImportantLinks = () => {
  return (
    <div className="md:pb-24 pb-16">
      <BContainer>
        <Tabs
          defaultValue="Chief Adviser"
          className="flex justify-center flex-col"
        >
          <TabsList className="mx-auto justify-center w-full py-2 bg-lightGreenColor rounded-b-none flex-wrap h-auto">
            <TabsTrigger value="Chief Adviser">
              Honorable Adviser
            </TabsTrigger>
            <TabsTrigger value="Senior Secretary">Senior Secretary</TabsTrigger>
            <TabsTrigger value="Important Links">Important Links</TabsTrigger>
            <TabsTrigger value="Hotline">Hotline</TabsTrigger>
            <TabsTrigger value="Innovation">Innovation Corner</TabsTrigger>
            <TabsTrigger value="Others">Others</TabsTrigger>
          </TabsList>
          <div className="p-4 border rounded-b-md">
            <TabsContent value="Chief Adviser">
              <div className="flex items-center gap-6">
                <img className="w-[150px] rounded-md" src={nahidImage} alt="" />
                <div className="space-y-2">
                  <h6 className="font-semibold md:text-xl text-lg">
                  Md. Nahid Islam
                  </h6>
                  <p className="md:text-base text-sm">Honorable Adviser, Ministry of Information and Broadcasting</p>
                  <p className="font-semibold underline text-primaryColor">
                    <a href="#">Details</a>
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="Senior Secretary">
              <div className="flex items-center gap-6">
                <img
                  className="w-[150px] rounded-md"
                  src={secretaryImage}
                  alt=""
                />
                <div className="space-y-2">
                  <h6 className="font-semibold md:text-xl text-lg">
                    Md. Humayun Kabir Khandaker
                  </h6>
                  <p className="md:text-base text-sm">
                    Senior Secretary, Ministry of Information and Broadcasting
                  </p>
                  <p className="font-semibold underline text-primaryColor">
                    <a href="#">Details</a>
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="Important Links">
              <div className="flex md:flex-row flex-col md:gap-20 gap-6">
                <div>
                  <h5 className="font-semibold text-lg mb-3">
                    Internal eServices
                  </h5>
                  {importantLinks.map((item) => (
                    <BLink key={item} text={item} />
                  ))}
                  <a
                    href="#"
                    className="block bg-lightGreenColor p-1 pt-2  underline px-4 font-semibold text-center mt-3 text-sm rounded-sm"
                  >
                    View All Links
                  </a>
                  <div className="space-y-3 mt-6">
                    <a href="#" target="_blank" className="block">
                      <img className="w-[280px]" src={eDirectoryImg} alt="" />
                    </a>
                    <a href="#" target="_blank" className="block">
                      <img className="w-[280px]" src={portal_enImg} alt="" />
                    </a>
                    <a href="#" target="_blank" className="block">
                      <img className="w-[280px]" src={services_enImg} alt="" />
                    </a>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-3">Other Links</h5>
                  {otherImportantLinks.map((item) => (
                    <BLink key={item} text={item} />
                  ))}
                  <a
                    href="#"
                    className="block bg-lightGreenColor p-1 pt-2  underline px-4 font-semibold text-center mt-3 text-sm rounded-sm"
                  >
                    View All Links
                  </a>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="Hotline">
              <div className="flex md:flex-row flex-col gap-8">
                <div>
                  <h5 className="font-semibold text-lg mb-2">
                    General Hotline
                  </h5>
                  <img
                    className="md:w-[250px] w-full"
                    src={hotlineImg}
                    alt=""
                  />
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-2">
                    Emergency Hotline
                  </h5>
                  <img className="md:w-[250px]" src={hotline2Img} alt="" />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="Innovation">
              {innovationLinks.map((item) => (
                <BLink key={item} text={item} />
              ))}
            </TabsContent>
            <TabsContent value="Others">
              <div className="flex lg:flex-row flex-col lg:gap-12 gap-5">
                <div>
                  {otherLinks.map((item) => (
                    <BLink key={item} text={item} />
                  ))}
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-2">Social Media</h5>
                  <div className="flex items-center gap-3">
                    <a href="#">
                      <img className="w-[35px]" src={fbImg} alt="" />
                    </a>
                    <a href="#">
                      <img className="w-[35px]" src={youtubeImg} alt="" />
                    </a>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-2">
                    National Anthem
                  </h5>
                  <audio controls>
                    <source src={anthem} type="audio/mpeg" />
                  </audio>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </BContainer>
    </div>
  );
};

export default ImportantLinks;
