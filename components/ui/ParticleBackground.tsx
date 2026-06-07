"use client";

import Particles from "@tsparticles/react";
import { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  return (
    <ParticlesProvider init={loadSlim}>
      <Particles
        id="tsparticles"
        className="absolute inset-0 z-0"
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              resize: { enable: true },
            },
            modes: {
              grab: { distance: 140, links: { opacity: 0.3 } },
            },
          },
          particles: {
            color: { value: "#c0c0c0" },
            links: {
              color: "#c0c0c0",
              distance: 150,
              enable: true,
              opacity: 0.08,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: true,
              speed: 0.6,
              straight: false,
            },
            number: {
              density: { enable: true },
              value: 80,
            },
            opacity: { value: { min: 0.1, max: 0.4 } },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2 } },
          },
          detectRetina: true,
        }}
      />
    </ParticlesProvider>
  );
}
