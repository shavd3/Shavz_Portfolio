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
              onClick: { enable: true, mode: "push" },
              resize: { enable: true },
            },
            modes: {
              grab: { distance: 200, links: { opacity: 0.5 } },
              push: { quantity: 3 },
            },
          },
          particles: {
            color: { value: "#c0c0c0" },
            links: {
              color: "#c0c0c0",
              distance: 130,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: true,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: { enable: true },
              value: 140,
            },
            opacity: { value: { min: 0.15, max: 0.5 } },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2.5 } },
          },
          detectRetina: true,
        }}
      />
    </ParticlesProvider>
  );
}
