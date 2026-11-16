import { useState } from 'react';
import './App.css';

export default function App() {
  const studentName = 'Колчанов Антон';
  const group = 'РПО-1';
  const skills = ['HTML', 'CSS', 'JavaScript', 'C++', 'C#', 'Python', 'Unity', 'Node JS'];

  const [showSkills, setShowSkills] = useState(false);

  return (
    <main className="card">
      <h1>Карточка студента</h1>

      <p>
        <strong>Студент:</strong> {studentName}
      </p>
      <p>
        <strong>Группа:</strong> {group}
      </p>

      <p>Изучаю React</p>

      <button onClick={() => setShowSkills(!showSkills)}>
        {showSkills ? 'Скрыть навыки' : 'Показать навыки'}
      </button>

      {showSkills && (
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      )}
    </main>
  );
}