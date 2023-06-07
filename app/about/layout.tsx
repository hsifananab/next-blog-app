import Link from "next/link";
import React from "react";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>About Us</h1>
      <ul>
        <li>
          <Link href="/about/contacts">Contacts</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default AboutLayout;
