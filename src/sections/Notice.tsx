import BNoticeItem from "@/components/ui/BNoticeItem";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { noticeItems } from "@/constant";
import { FileText } from "lucide-react";
const Notice = () => {
  return (
    <div>
      <Dialog defaultOpen>
        <DialogTrigger>
          <Button>
            Notice <FileText className="w-[15px] h-[15px] ml-2" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Important Notices</DialogTitle>
          </DialogHeader>
          <div>
            {noticeItems.map((item) => (
              <BNoticeItem key={item.text} text={item.text} href={item.href} />
            ))}
            <a
              href="#"
              className="inline-block bg-lightGreenColor p-1 pt-2  underline px-4 font-semibold text-center mt-3 text-sm rounded-sm"
            >
              View All
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Notice;
