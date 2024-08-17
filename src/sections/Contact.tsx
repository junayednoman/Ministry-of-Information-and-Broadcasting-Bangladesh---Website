import BContainer from "@/components/BContainer";
import { Input } from "@/components/ui/input";
import SBtn from "@/components/ui/SBtn";
import { Textarea } from "@/components/ui/textarea";
import contact from "@/assets/contact.jpg";

const Contact = () => {
  return (
    <div className="pb-20">
      <BContainer>
        <div className="md:mb-8 mb-6 text-center">
          <h4 className="md:text-4xl text-3xl font-semibold mb-2">
            Need Any Help?
          </h4>
          <p> Contact Us</p>
        </div>
        <div className="lg:grid grid-cols-5 items-center gap-6 xl:w-[1000px] mx-auto">
          <div className="col-span-3">
            <form className="space-y-4 w-full">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <Input type="text" id="name" name="name" className="mt-1" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <Input type="email" id="email" name="email" className="mt-1" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium">
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  className="mt-1"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" name="message" className="mt-1" />
              </div>

              <SBtn>Submit</SBtn>
            </form>
          </div>
          <div className="col-span-2 lg:block hidden">
            <img className="" src={contact} alt="" />
          </div>
        </div>
      </BContainer>
    </div>
  );
};

export default Contact;
