<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&amp;size=30&amp;duration=3000&amp;pause=1200&amp;center=true&amp;vCenter=true&amp;width=900&amp;color=415EFC&amp;lines=Rock+Paper+Scissors;You+against+the+computer;Score+tracking+and+instant+replay" alt="Rock Paper Scissors" />

<p><strong>A browser version of the classic hand game with a live score and a one-click replay.</strong></p>

</div>

<div align="center">

<a href="https://github.com/mohammed-laabidi/rock-paper-scissors-game"><img src="https://img.shields.io/github/stars/mohammed-laabidi/rock-paper-scissors-game?style=for-the-badge&amp;logo=github&amp;label=Stars" alt="GitHub stars" /></a>
<a href="https://github.com/mohammed-laabidi/rock-paper-scissors-game/fork"><img src="https://img.shields.io/github/forks/mohammed-laabidi/rock-paper-scissors-game?style=for-the-badge&amp;logo=github&amp;label=Forks" alt="GitHub forks" /></a>
<a href="https://github.com/mohammed-laabidi/rock-paper-scissors-game/issues"><img src="https://img.shields.io/github/issues/mohammed-laabidi/rock-paper-scissors-game?style=for-the-badge&amp;logo=github&amp;label=Issues" alt="GitHub issues" /></a>
<img src="https://img.shields.io/github/last-commit/mohammed-laabidi/rock-paper-scissors-game?style=for-the-badge&amp;logo=git&amp;label=Last%20Commit" alt="Last commit" />

</div>

<div align="center">

<a href="https://mohammed-laabidi.github.io/rock-paper-scissors-game/"><strong>Live Demo</strong></a>
&nbsp;&nbsp;|&nbsp;&nbsp;
<a href="https://github.com/mohammed-laabidi/rock-paper-scissors-game">Repository</a>

</div>

## Overview

Rock Paper Scissors is a two-panel game in which the player picks a hand and the computer answers with a random one. The chosen images are shown side by side under the labels You and Computer, and the running score is displayed between them.

The logic compares the two choices using the standard rules: rock beats scissors, scissors beats paper, and paper beats rock. Each round updates the score, and the Replay button reloads the page to start a fresh match.

The project is intentionally small and dependency-free, and it is a compact example of DOM updates driven by a random choice.

## Features

<table>
<tr>
<td width="50%" valign="top">

<img src="https://api.iconify.design/lucide/hand.svg?color=%23415EFC" width="28" height="28" alt="Choice" />

### Three hand choices

Paper, rock, and scissors thumbnails let the player pick a hand with a single click.

</td>
<td width="50%" valign="top">

<img src="https://api.iconify.design/lucide/cpu.svg?color=%23415EFC" width="28" height="28" alt="Computer" />

### Random computer move

The opponent picks one of the three hands at random on every round.

</td>
</tr>
<tr>
<td width="50%" valign="top">

<img src="https://api.iconify.design/lucide/trophy.svg?color=%23415EFC" width="28" height="28" alt="Score" />

### Live scoreboard

The score for the player and the computer is updated after each round and displayed in the center column.

</td>
<td width="50%" valign="top">

<img src="https://api.iconify.design/lucide/refresh-cw.svg?color=%23415EFC" width="28" height="28" alt="Replay" />

### Replay button

A single button resets the match by reloading the page.

</td>
</tr>
</table>

## Technology Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=html,css,js,git,github" alt="HTML, CSS, JavaScript, Git, and GitHub" />

</div>

| Technology | Purpose |
| --- | --- |
| HTML5 | Game board, hand thumbnails, and score markup |
| CSS3 | Two-panel layout, image sizing, and three responsive breakpoints |
| JavaScript | Random computer choice, rule evaluation, and score updates |
| PNG assets | Hand illustrations stored in `images/` |
| GitHub Pages | Static hosting of the live demo |

## Architecture

The game state is a pair of counters and the two hand images. All logic runs in the browser.

```mermaid
flowchart TD
    Player["Player select<br/>paper, rock, scissors"] --> Script["script.js"]
    Script --> Random["Random computer hand"]
    Random --> Compare["Apply rules"]
    Compare -->|Win| PlayerScore["Increment player score"]
    Compare -->|Lose| ComputerScore["Increment computer score"]
    Compare -->|Draw| NoChange["Score unchanged"]
    PlayerScore --> DOM["Update hand images and score"]
    ComputerScore --> DOM
    NoChange --> DOM
```

## Application Flow

```mermaid
flowchart LR
    Open["Open the page"] --> Pick["Select a hand"]
    Pick --> Show["Display player and computer hands"]
    Show --> Evaluate{"Round result"}
    Evaluate -->|Win| AddPlayer["Player score +1"]
    Evaluate -->|Lose| AddComputer["Computer score +1"]
    Evaluate -->|Draw| Same["Both scores unchanged"]
    AddPlayer --> Again["Pick another hand or replay"]
    AddComputer --> Again
    Same --> Again
    Again --> Pick
```

## Project Structure

```text
rock-paper-scissors-game/
├── index.html
├── style.css
├── script.js
├── images/
│   ├── paper_hand.png
│   ├── rock_hand.png
│   └── scissors_hand.png
└── README.md
```

## Getting Started

### Prerequisites

A modern browser. No dependencies or build step are required.

### Installation

```bash
git clone https://github.com/mohammed-laabidi/rock-paper-scissors-game.git
cd rock-paper-scissors-game
```

Open `index.html` in a browser, or serve the folder locally:

```bash
python -m http.server 8000
```

## Usage

1. Select paper, rock, or scissors in the left panel.
2. Read the computer hand in the right panel and the updated score in the middle.
3. Continue playing; the counters keep the total for the current match.
4. Select Replay to reset the score and start again.

## Deployment

The live demo is served by GitHub Pages from the repository root. Any static host can serve the folder directly.

## Author

<table>
<tr>
<td valign="top">

**Mohammed Laabidi**

<a href="https://github.com/mohammed-laabidi"><img src="https://api.iconify.design/lucide/github.svg?color=%23415EFC" width="18" height="18" alt="GitHub" /> GitHub</a>
&nbsp;&nbsp;
<a href="https://www.linkedin.com/in/mohammed-laabidi-793a40436"><img src="https://api.iconify.design/lucide/linkedin.svg?color=%23415EFC" width="18" height="18" alt="LinkedIn" /> LinkedIn</a>
&nbsp;&nbsp;
<a href="mailto:mohammed-laabidi@gmail.com"><img src="https://api.iconify.design/lucide/mail.svg?color=%23415EFC" width="18" height="18" alt="Email" /> Email</a>

</td>
</tr>
</table>

---

If this project is useful to you, consider giving the repository a star.
