import Image from "next/image";
import { Member } from "./Member";
import H2 from "../common/H2";

const MembersList = [
  {
    name: "Gustavo Ochoa",
    position: "Presidente",
    image: "/members/president.png",
  },
  {
    name: "Vanessa Reynaga",
    position: "Vicepresidenta",
    image: "/members/vicepresident.png",
  },
  {
    name: "Milton Achahui",
    position: "Tesorero",
    image: "/members/tesorero.png",
  },
  {
    name: "Wilger Aucapuri",
    position: "Memberships",
    image: "/members/memberships.png",
  },
  {
    name: "Yerson Chirinos",
    position: "Redes Sociales",
    image: "/members/social-media.png",
  },
];

const MembersSection = () => {
  return (
    <section className="mb-20 flex w-full flex-col items-center justify-center gap-16">
      <div className="flex w-full justify-center text-white-azul">
        <H2 title="Lideres" />
      </div>
      <div className="flex w-auto flex-col items-center justify-between gap-6 text-white-azul md:mx-28 lg:mb-20 lg:flex-row">
        <div>
          <Image
            className="relative transition-all duration-300 hover:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="/AcmLogo.png"
            alt="ACM Logo"
            width={224}
            height={221}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {MembersList.map((member, index) => (
            <Member
              key={index}
              name={member.name}
              position={member.position}
              img={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembersSection;
