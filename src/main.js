/* ================================================
   FOCUS PET — Main Application Logic
   Timer · Pet States · XP · Stats · Confetti
   ================================================ */
import './style.css';

// ─── Pet SVG Art ────────────────────────────────
const PET_SVGS = {
  idle: `
    <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Body -->
      <ellipse cx="90" cy="120" rx="55" ry="45" fill="#1a9aaa" />
      <!-- Belly -->
      <ellipse cx="90" cy="128" rx="35" ry="28" fill="#5ec6d0" />
      <!-- Left ear -->
      <polygon points="50,80 35,45 65,70" fill="#1a9aaa" />
      <polygon points="52,78 40,52 62,72" fill="#8dd8e0" />
      <!-- Right ear -->
      <polygon points="130,80 145,45 115,70" fill="#1a9aaa" />
      <polygon points="128,78 140,52 118,72" fill="#8dd8e0" />
      <!-- Head -->
      <circle cx="90" cy="82" r="38" fill="#1a9aaa" />
      <!-- Face -->
      <g id="pet-face-group" style="transition: transform 0.1s ease-out;">
        <!-- Closed eyes (sleeping) — curved lines -->
        <path d="M72 80 Q77 86 82 80" stroke="#0a4e5c" stroke-width="3" stroke-linecap="round" fill="none" />
        <path d="M98 80 Q103 86 108 80" stroke="#0a4e5c" stroke-width="3" stroke-linecap="round" fill="none" />
        <!-- Nose -->
        <ellipse cx="90" cy="88" rx="3" ry="2.5" fill="#f0a6b6" />
        <!-- Mouth -->
        <path d="M86 92 Q90 96 94 92" stroke="#0a4e5c" stroke-width="2" stroke-linecap="round" fill="none" />
        <!-- Blush -->
        <ellipse cx="70" cy="88" rx="7" ry="4" fill="#f0a6b6" opacity="0.3" />
        <ellipse cx="110" cy="88" rx="7" ry="4" fill="#f0a6b6" opacity="0.3" />
      </g>
      <!-- Zzz bubbles -->
      <text x="130" y="60" font-size="14" fill="#8bb5b5" font-family="Nunito, sans-serif" font-weight="700" opacity="0.7">
        <animate attributeName="opacity" values="0;0.7;0" dur="2s" repeatCount="indefinite" />
        z
      </text>
      <text x="142" y="45" font-size="18" fill="#8bb5b5" font-family="Nunito, sans-serif" font-weight="700" opacity="0.5">
        <animate attributeName="opacity" values="0;0.5;0" dur="2s" begin="0.5s" repeatCount="indefinite" />
        z
      </text>
      <text x="155" y="28" font-size="22" fill="#8bb5b5" font-family="Nunito, sans-serif" font-weight="700" opacity="0.3">
        <animate attributeName="opacity" values="0;0.3;0" dur="2s" begin="1s" repeatCount="indefinite" />
        Z
      </text>
      <!-- Tail -->
      <path d="M35 130 Q15 110 25 90" stroke="#1a9aaa" stroke-width="8" stroke-linecap="round" fill="none" />
    </svg>
  `,

  focusing: `
    <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Body -->
      <ellipse cx="90" cy="120" rx="55" ry="45" fill="#1a9aaa" />
      <ellipse cx="90" cy="128" rx="35" ry="28" fill="#5ec6d0" />
      <!-- Left ear -->
      <polygon points="50,80 35,45 65,70" fill="#1a9aaa" />
      <polygon points="52,78 40,52 62,72" fill="#8dd8e0" />
      <!-- Right ear -->
      <polygon points="130,80 145,45 115,70" fill="#1a9aaa" />
      <polygon points="128,78 140,52 118,72" fill="#8dd8e0" />
      <!-- Head -->
      <circle cx="90" cy="82" r="38" fill="#1a9aaa" />
      <!-- Face Features Group -->
      <g id="pet-face-group" style="transition: transform 0.1s ease-out;">
        <!-- Glasses -->
        <circle cx="76" cy="79" r="12" stroke="#0a4e5c" stroke-width="2.5" fill="rgba(26,154,170,0.15)" />
        <circle cx="104" cy="79" r="12" stroke="#0a4e5c" stroke-width="2.5" fill="rgba(26,154,170,0.15)" />
        <line x1="88" y1="79" x2="92" y2="79" stroke="#0a4e5c" stroke-width="2.5" />
        <line x1="64" y1="79" x2="56" y2="75" stroke="#0a4e5c" stroke-width="2.5" />
        <line x1="116" y1="79" x2="124" y2="75" stroke="#0a4e5c" stroke-width="2.5" />
        <!-- Shine on glasses -->
        <circle cx="72" cy="75" r="3" fill="white" opacity="0.4" />
        <circle cx="100" cy="75" r="3" fill="white" opacity="0.4" />
        <!-- Open eyes behind glasses -->
        <circle cx="76" cy="80" r="4" fill="#0a4e5c" />
        <circle cx="104" cy="80" r="4" fill="#0a4e5c" />
        <circle cx="77" cy="79" r="1.5" fill="white" />
        <circle cx="105" cy="79" r="1.5" fill="white" />
        <!-- Nose -->
        <ellipse cx="90" cy="88" rx="3" ry="2.5" fill="#f0a6b6" />
        <!-- Determined mouth -->
        <line x1="84" y1="93" x2="96" y2="93" stroke="#0a4e5c" stroke-width="2" stroke-linecap="round" />
        <!-- Blush -->
        <ellipse cx="70" cy="90" rx="7" ry="4" fill="#f0a6b6" opacity="0.3" />
        <ellipse cx="110" cy="90" rx="7" ry="4" fill="#f0a6b6" opacity="0.3" />
      </g>
      <!-- Tiny laptop -->
      <rect x="68" y="138" rx="3" width="44" height="26" fill="#0a4e5c" />
      <rect x="71" y="141" rx="2" width="38" height="18" fill="#0e7a8a">
        <!-- Screen glow -->
        <animate attributeName="fill" values="#0e7a8a;#1a9aaa;#0e7a8a" dur="3s" repeatCount="indefinite" />
      </rect>
      <!-- Code lines on screen -->
      <line x1="75" y1="147" x2="88" y2="147" stroke="#5ec6d0" stroke-width="1.5" stroke-linecap="round" />
      <line x1="75" y1="151" x2="95" y2="151" stroke="#1a9aaa" stroke-width="1.5" stroke-linecap="round" />
      <line x1="75" y1="155" x2="82" y2="155" stroke="#f0a6b6" stroke-width="1.5" stroke-linecap="round" />
      <!-- Laptop base -->
      <rect x="64" y="164" rx="2" width="52" height="4" fill="#062a33" />
      <!-- Paws on keyboard -->
      <ellipse cx="78" cy="140" rx="8" ry="5" fill="#1a9aaa" />
      <ellipse cx="102" cy="140" rx="8" ry="5" fill="#1a9aaa" />
      <!-- Tail -->
      <path d="M35 130 Q15 120 20 100" stroke="#1a9aaa" stroke-width="8" stroke-linecap="round" fill="none">
        <animate attributeName="d" values="M35 130 Q15 120 20 100;M35 130 Q10 115 22 95;M35 130 Q15 120 20 100" dur="4s" repeatCount="indefinite" />
      </path>
    </svg>
  `,

  failed: `
    <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Body (slightly slumped) -->
      <ellipse cx="90" cy="125" rx="55" ry="42" fill="#1a9aaa" />
      <ellipse cx="90" cy="132" rx="35" ry="26" fill="#5ec6d0" />
      <!-- Left ear (droopy) -->
      <polygon points="52,82 42,50 68,72" fill="#1a9aaa" />
      <polygon points="54,80 46,56 65,73" fill="#8dd8e0" />
      <!-- Right ear (droopy) -->
      <polygon points="128,82 138,50 112,72" fill="#1a9aaa" />
      <polygon points="126,80 134,56 115,73" fill="#8dd8e0" />
      <!-- Head -->
      <circle cx="90" cy="85" r="38" fill="#1a9aaa" />
      <!-- Face Features Group -->
      <g id="pet-face-group" style="transition: transform 0.1s ease-out;">
        <!-- Sad eyes -->
        <path d="M73 76 Q78 72 83 76" stroke="#0a4e5c" stroke-width="2.5" stroke-linecap="round" fill="none" />
        <path d="M97 76 Q102 72 107 76" stroke="#0a4e5c" stroke-width="2.5" stroke-linecap="round" fill="none" />
        <!-- Eyebrows (worried) -->
        <path d="M69 70 Q76 66 83 70" stroke="#0a4e5c" stroke-width="2" stroke-linecap="round" fill="none" />
        <path d="M97 70 Q104 66 111 70" stroke="#0a4e5c" stroke-width="2" stroke-linecap="round" fill="none" />
        <!-- Tear drops -->
        <ellipse cx="72" cy="88" rx="3" ry="5" fill="#60a5fa" opacity="0.8">
          <animate attributeName="cy" values="88;108" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0" dur="1.5s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="108" cy="88" rx="3" ry="5" fill="#60a5fa" opacity="0.8">
          <animate attributeName="cy" values="88;108" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
        </ellipse>
        <!-- Nose -->
        <ellipse cx="90" cy="86" rx="3" ry="2.5" fill="#f0a6b6" />
        <!-- Sad mouth -->
        <path d="M82 96 Q90 90 98 96" stroke="#0a4e5c" stroke-width="2.5" stroke-linecap="round" fill="none" />
        <!-- Blush (more red when sad) -->
        <ellipse cx="70" cy="90" rx="8" ry="4" fill="#f87171" opacity="0.25" />
        <ellipse cx="110" cy="90" rx="8" ry="4" fill="#f87171" opacity="0.25" />
      </g>
      <!-- Tail (droopy) -->
      <path d="M35 135 Q20 140 18 155" stroke="#1a9aaa" stroke-width="8" stroke-linecap="round" fill="none" />
    </svg>
  `,

  success: `
    <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Body (bouncy) -->
      <ellipse cx="90" cy="115" rx="55" ry="45" fill="#1a9aaa">
        <animate attributeName="cy" values="115;110;115" dur="0.6s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="90" cy="123" rx="35" ry="28" fill="#5ec6d0">
        <animate attributeName="cy" values="123;118;123" dur="0.6s" repeatCount="indefinite" />
      </ellipse>
      <!-- Left ear (perky) -->
      <polygon points="48,75 30,38 63,65" fill="#1a9aaa" />
      <polygon points="50,74 36,45 61,67" fill="#8dd8e0" />
      <!-- Right ear (perky) -->
      <polygon points="132,75 150,38 117,65" fill="#1a9aaa" />
      <polygon points="130,74 144,45 119,67" fill="#8dd8e0" />
      <!-- Head -->
      <circle cx="90" cy="78" r="38" fill="#1a9aaa">
        <animate attributeName="cy" values="78;73;78" dur="0.6s" repeatCount="indefinite" />
      </circle>
      <!-- Face Features Group -->
      <g id="pet-face-group" style="transition: transform 0.1s ease-out;">
        <!-- HAPPY eyes (^_^) -->
        <path d="M72 76 Q77 70 82 76" stroke="#0a4e5c" stroke-width="3" stroke-linecap="round" fill="none" />
        <path d="M98 76 Q103 70 108 76" stroke="#0a4e5c" stroke-width="3" stroke-linecap="round" fill="none" />
        <!-- Nose -->
        <ellipse cx="90" cy="83" rx="3" ry="2.5" fill="#f0a6b6" />
        <!-- Big happy smile -->
        <path d="M80 88 Q90 98 100 88" stroke="#0a4e5c" stroke-width="2.5" stroke-linecap="round" fill="none" />
        <!-- Tongue -->
        <ellipse cx="90" cy="92" rx="4" ry="3" fill="#f472b6" />
        <!-- Blush (happy) -->
        <ellipse cx="68" cy="84" rx="8" ry="4" fill="#f472b6" opacity="0.3" />
        <ellipse cx="112" cy="84" rx="8" ry="4" fill="#f472b6" opacity="0.3" />
      </g>
      <!-- Sparkles around -->
      <g>
        <polygon points="30,50 33,40 36,50 33,60" fill="#fbbf24" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1s" repeatCount="indefinite" />
        </polygon>
        <polygon points="28,50 38,47 28,44" fill="#fbbf24" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1s" repeatCount="indefinite" />
        </polygon>
      </g>
      <g>
        <polygon points="150,45 153,35 156,45 153,55" fill="#34d399" opacity="0.8">
          <animate attributeName="opacity" values="0.2;0.8;0.2" dur="1.2s" repeatCount="indefinite" />
        </polygon>
        <polygon points="148,45 158,42 148,39" fill="#34d399" opacity="0.8">
          <animate attributeName="opacity" values="0.2;0.8;0.2" dur="1.2s" repeatCount="indefinite" />
        </polygon>
      </g>
      <g>
        <polygon points="45,25 48,15 51,25 48,35" fill="#f472b6" opacity="0.7">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="0.8s" repeatCount="indefinite" />
        </polygon>
      </g>
      <g>
        <polygon points="138,20 141,10 144,20 141,30" fill="#1a9aaa" opacity="0.7">
          <animate attributeName="opacity" values="0.7;0.3;0.7" dur="1.5s" repeatCount="indefinite" />
        </polygon>
      </g>
      <!-- Star above head -->
      <polygon points="90,20 93,30 103,30 95,36 98,46 90,40 82,46 85,36 77,30 87,30" fill="#fbbf24" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0.4;0.9" dur="1s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="rotate" from="0 90 33" to="360 90 33" dur="4s" repeatCount="indefinite" />
      </polygon>
      <!-- Tail (wagging) -->
      <path d="M35 125 Q15 110 25 90" stroke="#1a9aaa" stroke-width="8" stroke-linecap="round" fill="none">
        <animate attributeName="d" values="M35 125 Q15 110 25 90;M35 125 Q20 100 35 85;M35 125 Q15 110 25 90" dur="0.5s" repeatCount="indefinite" />
      </path>
    </svg>
  `,
};

const PET_STATUS_MESSAGES = {
  idle: [
    "Sleeping... waiting for you to start",
    "Zzz... wake me up when it's focus time",
    "Just napping here... no rush",
  ],
  focusing: [
    "Coding alongside you — let's go!",
    "Deep focus mode activated",
    "Working hard... don't distract me",
    "Typing furiously on tiny keyboard",
  ],
  failed: [
    "We were doing so well...",
    "Maybe next time we can finish",
    "Don't give up on me...",
  ],
  success: [
    "We did it! Amazing focus session",
    "You're a focus champion",
    "Great work — another session conquered",
    "Time well spent!",
  ],
};

// ─── Constants ──────────────────────────────────
const FOCUS_DURATION = 25 * 60; // 25 minutes in seconds
const SHORT_BREAK_DURATION = 5 * 60; // 5 minutes in seconds
const LONG_BREAK_DURATION = 15 * 60; // 15 minutes in seconds
const XP_PER_SESSION = 100;
const STORAGE_KEY = 'focus-pet-data';
const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const CONFETTI_COLORS = ['#1a9aaa', '#5ec6d0', '#f472b6', '#34d399', '#fbbf24', '#8dd8e0', '#0e7a8a'];
const PARTICLE_COUNT = 30;

// ─── State ──────────────────────────────────
let state = loadState();
let timerInterval = null;

function getDefaultState() {
  return {
    petName: 'Bubbles',
    xp: 0,
    level: 1,
    totalFocusMinutes: 0,
    sessions: [], // [{ date: ISO string, task: string, completed: bool }]
    timerSeconds: FOCUS_DURATION,
    isRunning: false,
    isPaused: false,
    mode: 'focus', // 'focus' | 'shortBreak' | 'longBreak'
    pomodoroCount: 0, // 0 to 4
    petState: 'idle', // idle | focusing | failed | success
    currentTask: '',
  };
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      // Reset transient state
      parsed.isRunning = false;
      parsed.isPaused = false;
      parsed.mode = parsed.mode || 'focus';
      parsed.timerSeconds = parsed.mode === 'focus' ? FOCUS_DURATION : (parsed.mode === 'shortBreak' ? SHORT_BREAK_DURATION : LONG_BREAK_DURATION);
      parsed.petState = 'idle';
      return { ...getDefaultState(), ...parsed };
    }
  } catch (e) {
    console.warn('Failed to load state:', e);
  }
  return getDefaultState();
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('Failed to save state:', e);
  }
}

// ─── DOM References ─────────────────────────────
const $ = (sel) => document.querySelector(sel);
const petContainer = $('#pet-container');
const petStatusText = $('#pet-status-text');
const petGlow = $('#pet-glow');
const timerDisplay = $('#timer-display');
const sessionModeLabel = $('#session-mode-label');
const pomodoroTracker = $('#pomodoro-tracker');
const startBtn = $('#start-btn');
const giveupBtn = $('#giveup-btn');
const skipBtn = $('#skip-btn');
const pauseBtn = $('#pause-btn');
const pauseIcon = $('#pause-icon');
const resumeIcon = $('#resume-icon');
const pauseText = $('#pause-text');
const taskInput = $('#task-input');
const currentTaskLabel = $('#current-task-label');
const xpBarFill = $('#xp-bar-fill');
const xpLabel = $('#xp-label');
const statsBtn = $('#stats-btn');
const statsPanel = $('#stats-panel');
const statsBackdrop = $('#stats-backdrop');
const statsCloseBtn = $('#stats-close-btn');
const confettiContainer = $('#confetti-container');

// ─── Render Functions ───────────────────────────
function renderSessionLabel() {
  if (state.mode === 'focus') {
    sessionModeLabel.textContent = 'Focus Session';
    document.body.className = '';
  } else if (state.mode === 'shortBreak') {
    sessionModeLabel.textContent = 'Short Break';
    document.body.className = 'theme-short-break';
  } else {
    sessionModeLabel.textContent = 'Long Break';
    document.body.className = 'theme-long-break';
  }
}

function renderPomodoroTracker() {
  const dots = pomodoroTracker.querySelectorAll('.pomo-dot');
  dots.forEach((dot, index) => {
    if (index < state.pomodoroCount) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}
function renderPet() {
  petContainer.innerHTML = PET_SVGS[state.petState] || PET_SVGS.idle;

  const messages = PET_STATUS_MESSAGES[state.petState];
  petStatusText.textContent = messages[Math.floor(Math.random() * messages.length)];

  // Update glow
  petGlow.className = '';
  if (state.petState === 'success') petGlow.classList.add('success-glow');
  else if (state.petState === 'failed') petGlow.classList.add('danger-glow');
}

function renderTimer() {
  const minutes = Math.floor(state.timerSeconds / 60);
  const seconds = state.timerSeconds % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  // Timer color states
  timerDisplay.classList.remove('timer-running', 'timer-danger', 'timer-success');
  if (state.petState === 'success') {
    timerDisplay.classList.add('timer-success');
  } else if (state.petState === 'failed') {
    timerDisplay.classList.add('timer-danger');
  } else if (state.isRunning) {
    timerDisplay.classList.add('timer-running');
    if (state.timerSeconds <= 60) {
      timerDisplay.classList.remove('timer-running');
      timerDisplay.classList.add('timer-danger');
    }
  }
}

function renderXP() {
  const xpForCurrentLevel = xpToNextLevel(state.level);
  const currentLevelXP = state.xp - totalXPForLevel(state.level - 1);
  const percent = Math.min((currentLevelXP / xpForCurrentLevel) * 100, 100);

  xpBarFill.style.width = `${percent}%`;
  xpLabel.textContent = `Lv. ${state.level}`;
}

function renderButtons() {
  if (state.isRunning) {
    startBtn.classList.add('hidden');
    pauseBtn.classList.remove('hidden');
    taskInput.disabled = true;

    // Skip button is always visible when running
    skipBtn.classList.remove('hidden');

    if (state.mode === 'focus') {
      giveupBtn.classList.remove('hidden');
    } else {
      giveupBtn.classList.add('hidden');
    }

    if (state.isPaused) {
      pauseIcon.classList.add('hidden');
      resumeIcon.classList.remove('hidden');
      pauseText.textContent = 'Resume';
      pauseBtn.classList.add('blinking');
    } else {
      pauseIcon.classList.remove('hidden');
      resumeIcon.classList.add('hidden');
      pauseText.textContent = 'Pause';
      pauseBtn.classList.remove('blinking');
    }

    if (state.currentTask && state.mode === 'focus') {
      currentTaskLabel.innerHTML = `Focusing on: <span>${escapeHTML(state.currentTask)}</span>`;
      currentTaskLabel.classList.remove('hidden');
    } else if (state.mode !== 'focus') {
      currentTaskLabel.innerHTML = `Taking a break...`;
      currentTaskLabel.classList.remove('hidden');
    }
  } else {
    startBtn.classList.remove('hidden');
    giveupBtn.classList.add('hidden');
    pauseBtn.classList.add('hidden');
    skipBtn.classList.add('hidden');
    taskInput.disabled = false;
    currentTaskLabel.classList.add('hidden');

    const btnIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;
    if (state.mode === 'focus') {
      startBtn.innerHTML = `${btnIcon} Start Focus`;
    } else if (state.mode === 'shortBreak') {
      startBtn.innerHTML = `${btnIcon} Start Short Break`;
    } else {
      startBtn.innerHTML = `${btnIcon} Start Long Break`;
    }
  }
}

function renderStats() {
  $('#stat-total-time').textContent = formatFocusTime(state.totalFocusMinutes);
  $('#stat-level').textContent = `Level ${state.level}`;
  const completedSessions = state.sessions.filter(s => s.completed).length;
  $('#stat-sessions').textContent = `${completedSessions}`;
  const xpForLevel = xpToNextLevel(state.level);
  const currentLevelXP = state.xp - totalXPForLevel(state.level - 1);
  $('#stat-xp').textContent = `${currentLevelXP} / ${xpForLevel} XP`;

  renderWeeklyChart();
}

function renderWeeklyChart() {
  const chart = $('#weekly-chart');
  const labelsContainer = $('#chart-labels');
  chart.innerHTML = '';
  labelsContainer.innerHTML = '';

  const today = new Date();
  const days = [];

  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().slice(0, 10);
    const count = state.sessions.filter(
      s => s.completed && s.date && s.date.startsWith(dateStr)
    ).length;
    days.push({ date: d, count, dateStr });
  }

  const maxCount = Math.max(...days.map(d => d.count), 1);

  days.forEach(day => {
    const wrapper = document.createElement('div');
    wrapper.className = 'chart-bar-wrapper';

    const countLabel = document.createElement('span');
    countLabel.className = 'chart-bar-count';
    countLabel.textContent = day.count || '';

    const bar = document.createElement('div');
    bar.className = 'chart-bar';
    const height = day.count > 0 ? Math.max((day.count / maxCount) * 100, 8) : 4;
    bar.style.height = `${height}%`;
    if (day.count === 0) bar.style.opacity = '0.2';

    wrapper.appendChild(countLabel);
    wrapper.appendChild(bar);
    chart.appendChild(wrapper);

    const label = document.createElement('span');
    label.className = 'chart-label';
    label.textContent = DAY_NAMES[day.date.getDay()];
    labelsContainer.appendChild(label);
  });
}

// ─── Timer Engine ───────────────────────────────
function togglePause() {
  if (!state.isRunning) return;

  state.isPaused = !state.isPaused;
  renderButtons();

  if (state.isPaused) {
    state.petState = 'idle';
  } else {
    // If resuming from pause, set pet state to focusing if in focus mode
    state.petState = (state.mode === 'focus') ? 'focusing' : 'idle';
  }
  renderPet();
}

function startTimer() {
  if (state.isRunning) return;

  state.isRunning = true;
  state.isPaused = false;

  if (state.mode === 'focus') {
    state.timerSeconds = FOCUS_DURATION;
    state.petState = 'focusing';
  } else if (state.mode === 'shortBreak') {
    state.timerSeconds = SHORT_BREAK_DURATION;
    state.petState = 'idle';
  } else {
    state.timerSeconds = LONG_BREAK_DURATION;
    state.petState = 'idle';
  }

  state.currentTask = taskInput.value.trim();

  renderSessionLabel();
  renderPomodoroTracker();
  renderPet();
  renderTimer();
  renderButtons();

  // Bounce animation
  triggerPetAnimation('pet-bounce');

  timerInterval = setInterval(() => {
    if (state.isPaused) return;

    state.timerSeconds--;
    renderTimer();

    if (state.timerSeconds <= 0) {
      completeSession();
    }
  }, 1000);
}

function giveUp() {
  clearInterval(timerInterval);
  timerInterval = null;

  state.isRunning = false;
  state.isPaused = false;
  state.petState = 'failed';

  if (state.mode === 'focus') {
    state.timerSeconds = FOCUS_DURATION;
    // Record failed session
    state.sessions.push({
      date: new Date().toISOString(),
      task: state.currentTask || 'Unknown',
      completed: false,
    });
  } else if (state.mode === 'shortBreak') {
    state.timerSeconds = SHORT_BREAK_DURATION;
  } else {
    state.timerSeconds = LONG_BREAK_DURATION;
  }

  saveState();

  renderPet();
  renderTimer();
  renderButtons();
  triggerPetAnimation('pet-shake');

  // Return to idle after 4 seconds
  setTimeout(() => {
    state.petState = 'idle';
    renderPet();
    renderTimer();
  }, 4000);
}

function skipSession() {
  clearInterval(timerInterval);
  timerInterval = null;

  state.isRunning = false;
  state.isPaused = false;

  if (state.mode === 'focus') {
    // Advance to break without XP
    state.pomodoroCount++;
    if (state.pomodoroCount >= 4) {
      state.mode = 'longBreak';
      state.timerSeconds = LONG_BREAK_DURATION;
    } else {
      state.mode = 'shortBreak';
      state.timerSeconds = SHORT_BREAK_DURATION;
    }
  } else {
    // Advance to focus
    if (state.mode === 'longBreak') {
      state.pomodoroCount = 0;
    }
    state.mode = 'focus';
    state.timerSeconds = FOCUS_DURATION;
  }

  state.petState = 'idle';

  saveState();

  renderSessionLabel();
  renderPomodoroTracker();
  renderPet();
  renderTimer();
  renderButtons();
}

function completeSession() {
  clearInterval(timerInterval);
  timerInterval = null;

  state.isRunning = false;
  state.isPaused = false;
  state.petState = 'success';

  if (state.mode === 'focus') {
    // Award XP
    const oldLevel = state.level;
    state.xp += XP_PER_SESSION;
    state.totalFocusMinutes += 25;
    state.pomodoroCount++;

    // Check level up
    while (state.xp >= totalXPForLevel(state.level)) {
      state.level++;
    }

    // Record successful session
    state.sessions.push({
      date: new Date().toISOString(),
      task: state.currentTask || 'Focus session',
      completed: true,
    });

    if (state.pomodoroCount >= 4) {
      state.mode = 'longBreak';
    } else {
      state.mode = 'shortBreak';
    }

    triggerConfetti();
    if (state.level > oldLevel) {
      setTimeout(() => triggerLevelUp(state.level), 800);
    }
  } else {
    // Break finished
    if (state.mode === 'longBreak') {
      state.pomodoroCount = 0;
    }
    state.mode = 'focus';
  }

  saveState();

  renderSessionLabel();
  renderPomodoroTracker();
  renderPet();
  renderXP();
  renderButtons();
  triggerPetAnimation('pet-celebrate');

  // Setup next mode time
  if (state.mode === 'focus') {
    state.timerSeconds = FOCUS_DURATION;
  } else if (state.mode === 'shortBreak') {
    state.timerSeconds = SHORT_BREAK_DURATION;
  } else {
    state.timerSeconds = LONG_BREAK_DURATION;
  }

  // Return to idle and show correct time after 5 seconds
  setTimeout(() => {
    state.petState = 'idle';
    renderPet();
    renderTimer();
  }, 5000);
}

// ─── XP Math ────────────────────────────────────
function xpToNextLevel(level) {
  return level * 100;
}

function totalXPForLevel(level) {
  // Sum of 100 + 200 + 300 + ... + level * 100
  return (level * (level + 1)) / 2 * 100;
}

// ─── Effects ────────────────────────────────────
function triggerPetAnimation(className) {
  petContainer.classList.remove('pet-bounce', 'pet-shake', 'pet-celebrate');
  // Force reflow
  void petContainer.offsetWidth;
  petContainer.classList.add(className);
  setTimeout(() => petContainer.classList.remove(className), 1000);
}

function triggerConfetti() {
  const count = 60;
  for (let i = 0; i < count; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.backgroundColor = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.top = `-10px`;
    piece.style.width = `${6 + Math.random() * 8}px`;
    piece.style.height = `${6 + Math.random() * 8}px`;
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    piece.style.animationDuration = `${2 + Math.random() * 2}s`;
    piece.style.animationDelay = `${Math.random() * 0.8}s`;
    confettiContainer.appendChild(piece);
  }

  setTimeout(() => {
    confettiContainer.innerHTML = '';
  }, 5000);
}

function triggerLevelUp(level) {
  // Flash effect
  const flash = document.createElement('div');
  flash.className = 'level-up-flash';
  document.body.appendChild(flash);

  const text = document.createElement('div');
  text.className = 'level-up-text';
  text.textContent = `⭐ Level ${level}!`;
  document.body.appendChild(text);

  setTimeout(() => {
    flash.remove();
    text.remove();
  }, 2000);
}

// ─── Stats Panel ────────────────────────────────
function openStats() {
  renderStats();
  statsPanel.classList.remove('hidden');
  statsBackdrop.classList.remove('hidden');
  // Trigger animation after display change
  requestAnimationFrame(() => {
    statsPanel.classList.add('visible');
    statsBackdrop.classList.add('visible');
  });
}

function closeStats() {
  statsPanel.classList.remove('visible');
  statsBackdrop.classList.remove('visible');
  setTimeout(() => {
    statsPanel.classList.add('hidden');
    statsBackdrop.classList.add('hidden');
  }, 300);
}

// ─── Utilities ──────────────────────────────────
function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function formatFocusTime(minutes) {
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
}

// ─── Event Listeners ────────────────────────────
startBtn.addEventListener('click', startTimer);
giveupBtn.addEventListener('click', giveUp);
skipBtn.addEventListener('click', skipSession);
pauseBtn.addEventListener('click', togglePause);
statsBtn.addEventListener('click', openStats);
statsCloseBtn.addEventListener('click', closeStats);
statsBackdrop.addEventListener('click', closeStats);

// Keyboard shortcut: Enter to start
taskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !state.isRunning) {
    startTimer();
  }
});

// Escape to close stats
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeStats();
  }
});

// ─── Editable Pet Name ──────────────────────────
const petNameEl = $('#pet-name');
const petNameInput = $('#pet-name-input');

petNameEl.addEventListener('click', () => {
  if (state.isRunning) return; // Don't rename mid-session
  petNameEl.classList.add('hidden');
  petNameInput.classList.remove('hidden');
  petNameInput.value = state.petName;
  petNameInput.focus();
  petNameInput.select();
});

function commitName() {
  const newName = petNameInput.value.trim() || 'Bubbles';
  state.petName = newName;
  petNameEl.textContent = newName;
  petNameEl.classList.remove('hidden');
  petNameInput.classList.add('hidden');
  saveState();
}

petNameInput.addEventListener('blur', commitName);
petNameInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    petNameInput.blur();
  } else if (e.key === 'Escape') {
    petNameInput.value = state.petName;
    petNameInput.blur();
  }
});

// ─── Cursor Glow & Floating Particles ───────────
function initCursorGlow() {
  const glow = document.createElement('div');
  glow.id = 'cursor-glow';
  document.body.appendChild(glow);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let glowX = mouseX;
  let glowY = mouseY;
  let firstMove = true;

  document.addEventListener('mouseenter', () => glow.classList.add('visible'));
  document.addEventListener('mouseleave', () => glow.classList.remove('visible'));

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (firstMove) {
      glowX = mouseX;
      glowY = mouseY;
      firstMove = false;
    }
    if (!glow.classList.contains('visible')) glow.classList.add('visible');
  });

  // Smooth follow with lerp
  function animateGlow() {
    glowX += (mouseX - glowX) * 0.25;
    glowY += (mouseY - glowY) * 0.25;
    glow.style.left = `${glowX}px`;
    glow.style.top = `${glowY}px`;
    requestAnimationFrame(animateGlow);
  }
  animateGlow();
}

function initFloatingParticles() {
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const particle = document.createElement('div');
    particle.className = 'floating-particle';
    const size = 2 + Math.random() * 3;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${12 + Math.random() * 20}s`;
    particle.style.animationDelay = `${Math.random() * 15}s`;
    particle.style.opacity = `${0.1 + Math.random() * 0.15}`;
    document.body.appendChild(particle);
  }
}

// ─── Face Tracking Logic ────────────────────────
// This listens to where the mouse is and shifts the #pet-face-group slightly
document.addEventListener('mousemove', (e) => {
  const faceGroup = document.querySelector('#pet-face-group');
  if (!faceGroup || !petContainer) return;

  const rect = petContainer.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  
  // Calculate distance from center of pet
  const deltaX = mouseX - centerX;
  const deltaY = mouseY - centerY;
  
  // Normalize based on screen size so movement isn't extreme
  // Multiplier determines sensitivity.
  const moveX = (deltaX / window.innerWidth) * 16;
  const moveY = (deltaY / window.innerHeight) * 16;
  
  // Clamp boundaries to prevent crazy dislocated eyes!
  const clampedX = Math.max(-8, Math.min(8, moveX));
  const clampedY = Math.max(-5, Math.min(5, moveY));
  
  faceGroup.setAttribute('transform', `translate(${clampedX}, ${clampedY})`);
});

// ─── Initialize ─────────────────────────────────
function init() {
  // Set the pet name from state
  const petNameDisplay = document.querySelector('#pet-name');
  if (petNameDisplay) petNameDisplay.textContent = state.petName;

  renderSessionLabel();
  renderPomodoroTracker();
  renderPet();
  renderTimer();
  renderXP();
  renderButtons();
  initCursorGlow();
  initFloatingParticles();
}

init();
