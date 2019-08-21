import React from 'react';
import Link from 'next/link';

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/counter">Counter</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;