# Smart Event Dashboard

## Overview
The Smart Event Dashboard is a dynamic web application built using **pure Vanilla JavaScript**, **HTML5**, and **CSS3**. It allows users to create, view, and manage event cards interactively without the use of external libraries or frameworks.

This project demonstrates core DOM manipulation concepts, event handling, and debugging techniques essential for frontend development.

## Features

### 1. Event Management
* **Create Events:** Users can add new events with a title, date, category, and description.
* **Dynamic Rendering:** Event cards are generated and injected into the DOM instantly upon submission.
* **Delete Events:** Users can remove individual events. This feature uses **Event Delegation** for efficient memory usage.
* **Clear All:** A control to remove all events from the dashboard at once.
* **Sample Data:** A button to quickly populate the dashboard with dummy data for testing.

### 2. DOM Manipulation Demo
A dedicated section that visually demonstrates the differences between three commonly confused DOM properties:
* `innerHTML`: Renders HTML tags and text.
* `innerText`: Renders only visible text (respects CSS styling like `display: none`).
* `textContent`: Renders all text (including hidden elements) and preserves raw formatting.

### 3. Keyboard Event Tracker
A real-time interactive section that detects and displays the last key pressed by the user, demonstrating global event listeners.

## Technology Stack
* **HTML5:** Structural markup.
* **CSS3:** Custom styling (No Bootstrap/Tailwind used).
* **JavaScript (Vanilla):** DOM traversal, manipulation, and event handling.

## Project Structure
* `index.html`: Main HTML structure containing the form, event list, and demo sections.
* `style.css`: Custom styles for the dashboard layout and UI components.
* `script.js`: Logic for event handling, DOM updates, and interactivity.

## How to Run
1.  Download the `index.html`, `style.css`, and `script.js` files into the same folder.
2.  Open `index.html` in any modern web browser (Chrome, Firefox, Edge, Safari).
3.  Interact with the form to add events or press keys to test the tracker.
