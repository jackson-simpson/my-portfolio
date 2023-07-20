function About() {
  return (
    <div className="container about-page">
      <div className="bio">
        <h2>More About Me</h2>
        <p>
          For most of my employed life, I have worked in the health sector;
          specifically in medical laboratories. I feel strongly about how we
          care for others and always strive to do the best job I can in every
          aspect of my work. Something I try to bring to a more recent endeavor,
          software development.
        </p>
        <p>
          I see myself as constantly learning, being curious about new ideas,
          and approaching new scenarios with an open mind. My time within the
          labs and during my education at Dev Academy have taught me that I
          enjoy working within teams and being around people as well as working
          alone where I can focus in on the task at hand.
        </p>
        <p>
          I am forthcoming with input, starkly honest, and always strive for
          excellence in my work. I am always open to feedback and always use it
          as a way to constantly improve myself to the betterment of those in my
          life, both within and outside of the workplace.
        </p>
        <p>
          In my free time, I will devour novels (mainly fantasy), watch films,
          play games, both table-top and online with friends and family.
        </p>
      </div>

      <div className="bio">
        <h2>Future Goals</h2>
        <p>
          My current goals are to learn a few more languages, namely C#, Python
          and .NET Framework; as well as work on a few personal projects, namely
          the Library App for my personal use.
        </p>
      </div>
      <div className="skills">
        <h2>My Skills</h2>
        <div className="skills-wrapper">
          <div className="first-set animate__animated animate__pulse">
            <img
              src="client/public/images/html5-icon.png"
              alt="html5 icon"
              loading="lazy"
              className="icon icon-card"
            />
            <img
              src="client/public/images/css3-icon.png"
              alt="css icon"
              loading="lazy"
              className="icon icon-card"
            />
            <img
              src="client/public/images/javascript-icon.png"
              alt="javascript icon"
              loading="lazy"
              className="icon icon-card"
            />
            <img
              src="client/public/images/typescript-icon.png"
              alt="typescript icon"
              loading="lazy"
              className="icon icon-card"
            />
          </div>
        </div>
        <div className="skills-wrapper">
          <div className="second-set animate__animated animate__pulse">
            <img
              src="client/public/images/icons8-git-240.png"
              alt="git icon"
              loading="lazy"
              className="icon icon-card"
            />
            <img
              src="client/public/images/sass-icon.png"
              alt="sass icon"
              loading="lazy"
              className="icon icon-card"
            />
            <img
              src="client/public/images/react-icon.png"
              alt="react icon"
              loading="lazy"
              className="icon icon-card"
            />
            <img
              src="client/public/images/icons8-redux-240.png"
              alt="redux icon"
              loading="lazy"
              className="icon icon-card"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
