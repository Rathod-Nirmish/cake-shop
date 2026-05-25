import React from "react";
import { TeamMember } from "@/lib/types";

const team: TeamMember[] = [
  {
    id: "1",
    name: "Isabella Moreau",
    role: "Founder & Head Pastry Chef",
    bio: "Trained in Paris and New York, with 15+ years crafting bespoke cakes for weddings and celebrations.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB76jV3_xiIjLOYByRmPbM8qUEAotQKxfRGyjKLHjSwziJE-WnKQk-3AsStcgcP7MrHuVN3n5_AuxfQywUmV2UHnOX37JKLv2-l7WNLKsdOfAgth7a_6Or5QbnCIrLPNXD9JDSksHgblWjNK2XbqfVg3o2Wdav3D4znlzbb1t6jzDAF7sXdN1AT8P54sBM8ctNWKn2IzGFRe8KkLpwtanBHswqsygyS3eVs-TDc10O1V8XV7GVXyFEFLJjBsamrvAFoS9l1mATzgAgw",
  },
  {
    id: "2",
    name: "Marcus Delacroix",
    role: "Senior Cake Artist",
    bio: "Specialises in sugar sculpting and hand-painted designs that turn cakes into gallery pieces.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuByup1t0B3Iwoi9DVquAw4I1DtyRa1jE3L9zBZ5b_tERGw_sqF8x7EXxpGy9QnBmunA42g8MtsNuHUw8WqkBy04fwxnZYHuCQGp_X1EtE6H-ZKo6mIj5F_p2W9pkG4h32W4H-MRcmVK3GwcGHTz3bKr9MHoZcLqPZAgcxfgd8TaTgPVr7RFvbwW3cFcqveyUVohsJShsNJFClD1UxeNiJQ7QxBZpg98FYAkhb4Dygc4zyG9WfRR1zGrgrcnK-4h095pbrxTPd4QfHhd",
  },
  {
    id: "3",
    name: "Amara Osei",
    role: "Flavour Development Chef",
    bio: "Creates unique seasonal flavour profiles using locally sourced botanicals and organic produce.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAKNHFUGaVYhQ2xXn5-mzZug9mh04m_K80PlBJ4xbMQ3fzaaqbz4g8ASlUYVUirRvM5OJf9Ek4eLyU2BSSjJC33kPCneTkQ1pjRSMYFKEhNXym29BqWHUqWV1Hwfb6vPpzhZ0uo1IrWXvaBVvc18HgOuG4XSGgNYtFd5vdmKtFbr0qk-FdWSLhtqozZun5vx3KQAGvE_ouMci8FbHO85jeNrRxzg5N72yx468GLD_eyUmAPhI_bD9duJ8aeYhQHpkvKHdBmIFTxh8Si",
  },
];

export function TeamSection() {
  return (
    <section className="py-24 px-6 lg:px-20 bg-section">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-brand font-bold tracking-widest text-xs uppercase">
            The People
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mt-3">
            Meet the Team
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member) => (
            <div key={member.id} className="flex flex-col items-center text-center gap-4">
              <div className="aspect-square w-40 rounded-full overflow-hidden shadow-lg">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform hover:scale-110 duration-700"
                  title={member.name}
                  style={{ backgroundImage: `url('${member.image}')` }}
                />
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground">{member.name}</h3>
                <p className="text-sm font-medium text-primary mt-1">{member.role}</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-xs mx-auto">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
