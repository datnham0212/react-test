import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Expense from './sections/Expense';
import Timetable from './sections/Timetable';
import Todo from './sections/Todo';
import Notes from './sections/Notes';
import Calculator from './sections/Calculator';
import UnitConverter from './sections/UnitConverter';
import Dictionary from './sections/Dictionary';
import Translator from './sections/Translator';

const Profile = () => {
  return (
    <div className="profile">
      <h2>Good day, Username!</h2>
      <img src={reactLogo} className="profile-image"/>
    </div>
  ); 
};

const Sidebar = ({ onSectionClick }) => {
  return (
    <div className="left half">
      <ul>
        <li><a href="#todo" onClick={(e) => onSectionClick(e, 'todo')}>Todo list</a></li>
        <li><a href="#timetable" onClick={(e) => onSectionClick(e, 'timetable')}>Timetable</a></li>
        <li><a href="#notes" onClick={(e) => onSectionClick(e, 'notes')}>Notes</a></li>
        <li><a href="#expense" onClick={(e) => onSectionClick(e, 'expense')}>Expense logs</a></li>
        <li><a href="#calculator" onClick={(e) => onSectionClick(e, 'calculator')}>Calculator</a></li>
        <li><a href="#unit-converter" onClick={(e) => onSectionClick(e, 'unit-converter')}>Unit Converter</a></li>
        <li><a href="#dictionary" onClick={(e) => onSectionClick(e, 'dictionary')}>Dictionary</a></li>
        <li><a href="#translator" onClick={(e) => onSectionClick(e, 'translator')}>Translator</a></li>
      </ul>
    </div>
  );
};

const Section = ({ id, content, isVisible }) => {
  return (
    <section id={id} style={{ display: isVisible ? 'block' : 'none' }}>
      {/* {content} */}
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
      <Sidebar onSectionClick={handleSectionClick} />
      <div className="right half">
        <header>
          <Profile />
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
