export default function About() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        width: '100vw',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0 20px',
          maxWidth: '800px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <img src="\images\avatar-522.jpg" alt="Eric Neff" style={{ width: "100%", maxWidth: "200px", borderRadius: "50%", marginTop: "75px" }} />
        <h1>About Me</h1>
        <p>
          I am a 33 year old software development student. I am currently enrolled in the Full Stack Web Development Bootcamp through edX and Case Western Reserve University. I am proficient in HTML, CSS, Javascript, TypeScript, Node.js, Express.js, React, SQL and PostgresSQL. I have worked for the last 13 and a half years as a Land Surveyor and am looking forward to transitioning into the field of software development. In my free time, I enjoy playing guitar, which I have done for 27 years, playing video games, and livestreaming on Twitch.
        </p>
      </div>
    </div>
  )
}
