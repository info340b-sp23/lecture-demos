import React from 'react';

import { HeaderBar } from './Header.js';
import { CourseCardDeck } from './CourseCards.js';

export default function App(props) {
  return (
    <div>
      <HeaderBar/>
      <CourseCardDeck />
    </div>
  )
}
