import Image from "next/image";
import React from "react";

type SectorItem = {
  url: string;
  name: string;
  email: string;
  descrip: string;
};

const SectorItem = ({ url, name, email, descrip }: SectorItem) => {
  return (
    <div className="max-w-96  px-6 py-1 rounded-lg bg-gradient-to-b from-[#b936f533] via-[#B936F51C] to-[#7e11b11f]">
      <div className="text-sm pt-2 pb-4">
        <span className="text-[#F7B603]">starstar</span>
        <span className="text-[#E4E5E7]">star</span>
      </div>
      <div className="text-sm">{descrip}</div>
      <div className="flex items-center mt-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image src={url} alt="Description" layout="fill" objectFit="cover" />
        </div>
        <div className="pl-3">
          <div className="text-sm">{name}</div>
          <div className="text-[#EB4468] text-[11px]">{email}</div>
        </div>
      </div>
    </div>
  );
};

export default SectorItem;
