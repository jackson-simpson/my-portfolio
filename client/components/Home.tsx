import '../public/styles/index.scss'
import profile from '../public/images/profile.jpg'

function Home() {
  return (
    <section className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I&apos;m Jackson Simpson, <br /> Full-Stack Software
          Developer{' '}
        </h1>
      </div>
      <div className="profile-image">
        <img src={profile} alt="headshot" />
      </div>
    </section>
  )
}
export default Home
