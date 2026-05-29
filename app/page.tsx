import "./globals.css";
export default function Home() {
    const orangeGlow = {
    textShadow: "0 0 8px rgba(249, 115, 22, 0.9), 0 0 20px rgba(234, 88, 12, 0.5)"
    };
  return (
<div>
    <div>
    <h1 style={{ color: 'blue' }}> Welcome! </h1>
    </div>

    <div>
      <p style={orangeGlow} > I am a dutch developer who has a fascination for computers and everything around it.
        I have landed on programming really quickly because of that and I ain't stopping anytime soon!
      </p>
    </div>

    <hr></hr>

    <div>
      <h2> My projects</h2>
      <p> I have made a lot of projects so far and I am always looking for new challenges to take on!</p>
    </div>
</div>

  );
}
