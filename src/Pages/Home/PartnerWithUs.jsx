import p1 from "../../../public/assets/Group 25.png";
import p2 from "../../../public/assets/Group 26.png";
const PartnerWithUs = () => {
  return (
    <div>
      <h2 className=" flex justify-center text-5xl font-bold text-[#03081F] my-14">
        Share with us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="">
          <img src={p1} className="w-full bg-cover" />
          <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]"></div>
        </div>
        <div>
          <img src={p2} className="w-full bg-cover" />
          <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]"></div>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;
