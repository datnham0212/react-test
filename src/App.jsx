import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faStickyNote } from "@fortawesome/free-solid-svg-icons";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { faRulerHorizontal } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import './App.css'

import Expense from './sections/Expense';
import Timetable from './sections/Timetable';
import Todo from './sections/Todo';
import Notes from './sections/Notes';
import Calculator from './sections/Calculator';
import UnitConverter from './sections/UnitConverter';
import Dictionary from './sections/Dictionary';
import Translator from './sections/Translator';

const Sidebar = ({ onSectionClick, activeSection }) => {
  return (
    <div className="left half">
      <ul>
        <li><a href="#todo" onClick={(e) => onSectionClick(e, 'todo')} className={activeSection === 'todo' ? 'active' : ''}><FontAwesomeIcon icon={faTasks} /></a></li>
        <li><a href="#timetable" onClick={(e) => onSectionClick(e, 'timetable')} className={activeSection === 'timetable' ? 'active' : ''}><FontAwesomeIcon icon={faCalendarDays} /></a></li>
        <li><a href="#notes" onClick={(e) => onSectionClick(e, 'notes')} className={activeSection === 'notes' ? 'active' : ''}><FontAwesomeIcon icon={faStickyNote} /></a></li>
        <li><a href="#expense" onClick={(e) => onSectionClick(e, 'expense')} className={activeSection === 'expense' ? 'active' : ''}><FontAwesomeIcon icon={faCoins} /></a></li>
        <li><a href="#calculator" onClick={(e) => onSectionClick(e, 'calculator')} className={activeSection === 'calculator' ? 'active' : ''}><FontAwesomeIcon icon={faCalculator} /></a></li>
        <li><a href="#unit-converter" onClick={(e) => onSectionClick(e, 'unit-converter')} className={activeSection === 'unit-converter' ? 'active' : ''}><FontAwesomeIcon icon={faRulerHorizontal} /></a></li>
        <li><a href="#dictionary" onClick={(e) => onSectionClick(e, 'dictionary')} className={activeSection === 'dictionary' ? 'active' : ''}><FontAwesomeIcon icon={faBook} /></a></li>
        <li><a href="#translator" onClick={(e) => onSectionClick(e, 'translator')} className={activeSection === 'translator' ? 'active' : ''}><FontAwesomeIcon icon={faLanguage} /></a></li>
      </ul>
    </div>
  );
};

const Section = ({ id, content, isVisible }) => {
  return (
    <section id={id} style={{ display: isVisible ? 'block' : 'none' }}>
      {id === 'todo' && <Todo />}
      {id === 'timetable' && <Timetable />}
      {id === 'notes' && <Notes />}
      {id === 'expense' && <Expense />}
      {id === 'calculator' && <Calculator />}
      {id === 'unit-converter' && <UnitConverter />}
      {id === 'dictionary' && <Dictionary /> }
      {id === 'translator' && <Translator /> }
    </section>
  );
};


function App() {
  const [visibleSection, setVisibleSection] = useState('todo');

  const handleSectionClick = (event, sectionId) => {
    event.preventDefault();
    setVisibleSection(sectionId);
  };

  return (
    <div className="app">
      <Sidebar onSectionClick={handleSectionClick} activeSection={visibleSection}/>
      <div className="right half">
        <header>
          {/* <Profile /> */}
        </header>
        <main>
          <Section id="todo" isVisible={visibleSection === 'todo'} />
          <Section id="timetable" isVisible={visibleSection === 'timetable'} />
          <Section id="notes" isVisible={visibleSection === 'notes'} />
          <Section id="expense" isVisible={visibleSection === 'expense'} />
          <Section id ="calculator" isVisible={visibleSection === 'calculator'} />
          <Section id="unit-converter" isVisible={visibleSection === 'unit-converter'} />
          <Section id="dictionary" isVisible={visibleSection === 'dictionary'} />
          <Section id="translator" isVisible={visibleSection === 'translator'} />
        </main>
      </div>
    </div>
  );
}

export default App
