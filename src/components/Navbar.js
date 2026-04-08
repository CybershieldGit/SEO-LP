import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-logo">
        <Image 
          src="/Group.svg" 
          alt="IDS Logo" 
          width={152} 
          height={40} 
          priority 
          style={{ height: 'auto', width: '152px' }}
        />
      </div>
      <a href="#register" className="nav-cta">
        Reserve Free Seat →
      </a>
    </nav>
  );
}
