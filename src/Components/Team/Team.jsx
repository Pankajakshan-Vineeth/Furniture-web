import "./Team.css";
import person1 from "../../assets/person_1.jpg";
import person2 from "../../assets/person_2.jpg";
import person3 from "../../assets/person_3.jpg";
import person4 from "../../assets/person_4.jpg";

const teamData = [
  {
    name: "Lawson Arnold",
    role: "CEO, Founder, Atty.",
    description:
      "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    image: person1,
  },
  {
    name: "Jeremy Walker",
    role: "CEO, Founder, Atty.",
    description:
      "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    image: person2,
  },
  {
    name: "Patrik White",
    role: "CEO, Founder, Atty.",
    description:
      "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    image: person3,
  },
  {
    name: "Kathryn Ryan",
    role: "CEO, Founder, Atty.",
    description:
      "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    image: person4,
  },
];

const Team = () => {
  return (
    <section className="team-section">
      <h2 className="team-title">Our Team</h2>
      <div className="team-grid">
        {teamData.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.image} alt={member.name} className="team-image" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p className="team-description">{member.description}</p>
            <a href="#" className="learn-more" >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
