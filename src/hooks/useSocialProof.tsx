"use client";

import { useEffect } from "react";

const cities = [
  "Spokane",
  "Spokane Valley",
  "Liberty Lake",
  "Airway Heights",
  "Medical Lake",
  "Cheney",
];

const firstNames = [
  "James",
  "Sarah",
  "Mike",
  "Emily",
  "David",
  "Lisa",
  "Chris",
  "Amanda",
  "Brian",
  "Rachel",
];

const actions = [
  "just requested a free quote",
  "booked a lawn mowing service",
  "scheduled a shrub trimming",
  "signed up for the fertilizer program",
  "booked a fall cleanup",
  "scheduled a landscaping consult",
];

function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function showToast() {
  const name = randomItem(firstNames);
  const city = randomItem(cities);
  const action = randomItem(actions);
  const minutesAgo = Math.floor(Math.random() * 30) + 2;

  // Mobile sits ABOVE the StickyCTABar (bottom: 0, ~64px tall)
  const isMobile = window.matchMedia("(max-width: 720px)").matches;
  const bottomPx = isMobile ? 90 : 90;
  const leftPx = isMobile ? 12 : 24;

  const toast = document.createElement("div");
  toast.style.cssText = `
    position: fixed;
    bottom: ${bottomPx}px;
    left: ${leftPx}px;
    right: ${leftPx}px;
    z-index: 9999;
    max-width: ${isMobile ? "calc(100vw - 24px)" : "340px"};
    padding: 12px 16px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.14);
    border: 1px solid #E5E7EB;
    font-family: 'DM Sans', system-ui, sans-serif;
    font-size: 13.5px;
    color: #111827;
    opacity: 0;
    transform: translateX(-20px);
    transition: all 0.4s ease;
    box-sizing: border-box;
  `;

  toast.innerHTML = `
    <div style="display:flex;align-items:center;gap:10px;min-width:0;">
      <div style="width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,#0F6B3A,#16A34A);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:13.5px;flex-shrink:0;">
        ${name[0]}
      </div>
      <div style="min-width:0;flex:1;">
        <div style="font-weight:600;line-height:1.2;">${name} from ${city}</div>
        <div style="color:#6B7280;font-size:12.5px;line-height:1.35;margin-top:2px;">${action} ${minutesAgo}m ago</div>
      </div>
    </div>
  `;

  document.body.appendChild(toast);

  // Fade in
  requestAnimationFrame(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translateX(0)";
  });

  // Dismiss after 4s
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(-20px)";
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 4000);
}

export default function useSocialProof(): void {
  useEffect(() => {
    // First toast at 12s
    const initialTimer = setTimeout(() => {
      showToast();
    }, 12000);

    // Repeat every 45s
    const interval = setInterval(() => {
      showToast();
    }, 45000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);
}
