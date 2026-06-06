import "./globals.css";
import Link from 'next/link';
export default function Home() {
  return (
<div>
    <div>
    <h1 style={{ textAlign: 'center', color: 'blue' }}> Welcome! </h1>
    <br></br>
    </div>

    <div className="bg-slate-950 text-amber-300 p-4 rounded-xl border-2 border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.6)]">
      <p> I am a dutch developer who has a fascination for computers and everything around it.
        I have landed on programming really quickly because of that and I ain't stopping anytime soon!
      </p>
    </div>

    <br></br>

    <div className="bg-slate-950 text-amber-300 p-4 rounded-xl border-2 border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.6)]">
      <h2> My projects</h2>
      <p> I have made a lot of projects so far and I am always looking for new challenges to take on!</p>
    </div>
    <br></br>
    <div className="bg-slate-950 text-amber-300 p-4 rounded-xl border-2 border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.6)]">
        <h2> OS </h2>
        <p> This is my OS from scratch I've made in C and Assembly. It is a fully custom kernel with using the limine bootloader. </p>
        <p> The OS has a little custom persistent filesystem, minimal GPU acceleration and a (maybe) functional desktop.</p>
        <p> The os a custom app support and has tools required to run them.</p>
        <Link 
          href="https://github.com/QKing-Official/OS" 
          className="inline-block mt-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-medium rounded-lg text-center no-underline transition">
          Check it out on GitHub!
        </Link>
    </div>
    <br></br>
        <div className="bg-slate-950 text-amber-300 p-4 rounded-xl border-2 border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.6)]">
        <h2> CCPL </h2>
        <p> My own little transpiled programming language. </p>
        <p> This language has bash-like syntax for easy of use..</p>
        <p> It compiles to C and can be run on any system with a C compiler to ensure powerful programs to be made with ease</p>
        <p> It comes with it's own package manager called Barite</p>
        <Link 
          href="https://github.com/QKing-Official/CCPL" 
          className="inline-block mt-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-medium rounded-lg text-center no-underline transition">
          Check it out on GitHub!
        </Link>
    </div>
</div>

  );
}
