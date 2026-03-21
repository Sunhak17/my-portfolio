import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "../styles/Skills.css";

import c from "../assets/skills/c.png";
import cpp from "../assets/skills/cpp.png";
import java from "../assets/skills/java.svg";
import js from "../assets/skills/js.jpg";
import dart from "../assets/skills/dart.png";
import python from "../assets/skills/python.png";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";

import flutter from "../assets/skills/flutter.png";
import react from "../assets/skills/react.png";
import node from "../assets/skills/nodejs.svg";
import express from "../assets/skills/expressjs.png";
import vite from "../assets/skills/vite.svg";
import ui from "../assets/skills/material_ui.png";

import git from "../assets/skills/git.png";
import github from "../assets/github.png";
import vscode from "../assets/skills/vscode.png";
import android from "../assets/skills/android.png";

import mysql from "../assets/skills/mysql.png";
import postgreSQL from "../assets/skills/postgresql.png";

const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "C Program", level: "Intermediate", icon: c },
      { name: "C++", level: "Intermediate", icon: cpp },
      { name: "Java", level: "Intermediate", icon: java },
      { name: "Dart", level: "Advanced", icon: dart },
      { name: "JavaScript", level: "Intermediate", icon: js },
      { name: "Python", level: "Intermediate", icon: python },
      { name: "HTML", level: "Advanced", icon: html },
      { name: "CSS", level: "Advanced", icon: css }
    ]
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "Flutter", level: "Advanced", icon: flutter },
      { name: "React", level: "Advanced", icon: react },
      { name: "Node.js", level: "Intermediate", icon: node },
      { name: "Express", level: "Intermediate", icon: express },
      { name: "Vite", level: "Intermediate", icon: vite },
      { name: "Material-UI", level: "Intermediate", icon: ui }
    ]
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git", level: "Advanced", icon: git },
      { name: "GitHub", level: "Advanced", icon: github },
      { name: "VS Code", level: "Advanced", icon: vscode },
      { name: "Android Studio", level: "Intermediate", icon: android }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", level: "Intermediate", icon: mysql },
      { name: "PostgreSQL", level: "Intermediate", icon: postgreSQL }
    ]
  }
];

// Reusable SkillCategory component
const SkillCategory = ({ category, skills }) => (
  <div className="skill-category">
    <h2 className="category-title">{category}</h2>
    <div className="skills-list">
      {skills.map((skill) => (
        <div key={skill.name} className="skill-item">
          <div className="skill-icon">
            {typeof skill.icon === "string" && skill.icon.length <= 2 ? (
              skill.icon // emoji
            ) : (
              <img src={skill.icon} alt={skill.name} />
            )}
          </div>
          <div className="skill-name">{skill.name}</div>
          <div className="skill-level">{skill.level}</div>
        </div>
      ))}
    </div>
  </div>
);

export default function SkillsPage() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div className={`skills-page scroll-animate ${isVisible ? 'visible' : ''}`} ref={ref}>
      <h1 className="section-title">Technical Skills</h1>
      <div className="skills-container">
        {skillsData.map((category) => (
          <SkillCategory
            key={category.category}
            category={category.category}
            skills={category.skills}
          />
        ))}
      </div>
    </div>
  );
}