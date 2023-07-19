function About() {
  return (
    <section className="container about-page">
      <div>
        <h2>More About Me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          nesciunt excepturi quos obcaecati incidunt voluptatem ipsam sunt
          ipsum, autem deleniti cupiditate molestias quis unde quae totam porro
          dicta iure animi inventore, veniam hic! Omnis nulla, delectus a
          voluptatibus
        </p>
      </div>
      <h2>My Skills</h2>
      <div className="skills-wrapper">
        <div className="first-set animate__animated animate__pulse">
          <img
            src="assets/icons/icons8-html-5.svg"
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
          <img
            src="assets/icons/icons8-css3.svg"
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
          <img
            src="assets/icons/icons8-javascript.svg"
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
        </div>

        <div className="second-set animate__animated animate__pulse">
          <img
            src="assets/icons/icons8-bootstrap.svg"
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
          <img
            src="assets/icons/icons8-react-native.svg"
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
          <img
            src="assets/icons/icons8-git.svg"
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
        </div>
      </div>
    </section>
  )
}

export default About
