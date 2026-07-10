export default function ExperienceItem({ title, role, location, dates, description, contributions, skillsUsed }) {
  return (
    <div className="experience-item">
      <div className="experience-header">
        <h3>{title}</h3>
        <span className="experience-role">{role}</span>
      </div>
      <div className="experience-meta">
        <span>{location}</span>
        <span>{dates}</span>
      </div>
      <p className="experience-description">{description}</p>

      <p className="experience-subheading">Key Contributions</p>
      <ul className="experience-list">
        {contributions.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <p className="experience-skills">
        <strong>Skills Used:</strong> {skillsUsed}
      </p>
    </div>
  );
}