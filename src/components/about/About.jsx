import React from "react";
import "./about.css";

const About = () => {
  return (
    <span className="text-span">
      I'm a <b>Full-Stack Software Engineer</b> passionate about building intelligent systems that solve real-world problems.
      Currently, I'm part of the engineering team at <b>Emergent (YC S24)</b>, a Y Combinator startup ranked among the
      world's top 10 fastest-growing companies.
      {" "}
      <br /><br />
      I'm currently architecting an <b>AI-powered diagnostic agent</b> that revolutionizes how engineering teams debug
      production issues on <b>Google Cloud Platform</b>. This autonomous agent understands complex multi-service
      architectures, intelligently analyzes logs across distributed systems, and performs cross-service root cause analysis—reducing
      ticket resolution time by <b>35%</b>.
      {" "}
      <br /><br />
      Beyond AI agents, I've built everything from <b>real-time metaverse platforms</b> with WebRTC and Three.js, to
      <b> RAG-powered chatbots</b>, and <b>Chrome extensions</b> that act as AI copilots for video calls.
      I thrive on challenges that blend <b>backend architecture</b>, <b>AI/ML integration</b>, and <b>intuitive frontend experiences</b>.
      {" "}
      <br /><br />
      <b>Let's build something extraordinary together.</b>
    </span>
  );
};

export default About;
