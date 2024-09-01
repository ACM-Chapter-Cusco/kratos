import Image from "next/image";
import { Member } from './Member'

const MembersList = [
  {
    name: "John Doe",
    position: "Chairperson",
    image: "/members/member.jpeg",
  },
  {
    name: "Jane Doe",
    position: "Vice Chairperson",
    image: "/members/member.jpeg",
  },
  {
    name: "John Doe",
    position: "Secretary",
    image: "/members/member.jpeg",
  },
  {
    name: "Jane Doe",
    position: "Treasurer",
    image: "/members/member.jpeg",
  },
  {
    name: "John Doe",
    position: "Member",
    image: "/members/member.jpeg",
  },
  {
    name: "Jane Doe",
    position: "Member",
    image: "/members/member.jpeg",
  },
];

const MembersSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-12 gap-6 w-auto md:mx-28 text-white-azul">
      <div>
        <Image
          className="relative hover:drop-shadow-[0_0_0.3rem_#ffffff70] transition-all duration-300"
          src="/AcmLogo.png"
          alt="ACM Logo"
          width={224}
          height={221}
        />
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" >
        {MembersList.map((member, index) => (
          <Member key={index} name={member.name} position={member.position} img={member.image} />
        ))}
      </div>
    </section>
  )
}

export default MembersSection;
