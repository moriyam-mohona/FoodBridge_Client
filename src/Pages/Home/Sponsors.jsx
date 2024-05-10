import p1 from "../../../public/assets/Group 16.png";
import p2 from "../../../public/assets/Group 17.png";
import p3 from "../../../public/assets/Group 18.png";
import p4 from "../../../public/assets/Group 19.png";
import p5 from "../../../public/assets/Group 20.png";
import p6 from "../../../public/assets/Group 21.png";

const Sponsors = () => {
  return (
    <div>
      <h2 className=" flex justify-center text-5xl font-bold text-[#03081F] my-14">
        Our Sponsors
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        <img src={p1} alt="" />
        <img src={p2} alt="" />
        <img src={p3} alt="" />
        <img src={p4} alt="" />
        <img src={p5} alt="" />
        <img src={p6} alt="" />
      </div>
    </div>
  );
};

export default Sponsors;
