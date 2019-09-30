import React from 'react';
import Link from 'next/link';

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a href="/">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/counter">
            <a href="Counter">Counter</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;