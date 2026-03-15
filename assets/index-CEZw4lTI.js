(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={idle:`
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
  `,focusing:`
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
  `,failed:`
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
      <!-- Tail (droopy) -->
      <path d="M35 135 Q20 140 18 155" stroke="#1a9aaa" stroke-width="8" stroke-linecap="round" fill="none" />
    </svg>
  `,success:`
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
  `},t={idle:[`Sleeping... waiting for you to start`,`Zzz... wake me up when it's focus time`,`Just napping here... no rush`],focusing:[`Coding alongside you — let's go!`,`Deep focus mode activated`,`Working hard... don't distract me`,`Typing furiously on tiny keyboard`],failed:[`We were doing so well...`,`Maybe next time we can finish`,`Don't give up on me...`],success:[`We did it! Amazing focus session`,`You're a focus champion`,`Great work — another session conquered`,`Time well spent!`]},n=1500,r=300,i=900,a=25,o=`focus-pet-data`,ee=[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],s=[`#1a9aaa`,`#5ec6d0`,`#f472b6`,`#34d399`,`#fbbf24`,`#8dd8e0`,`#0e7a8a`],c=15,l=f(),u=null;function d(){return{petName:`Bubbles`,xp:0,level:1,totalFocusMinutes:0,sessions:[],timerSeconds:n,isRunning:!1,isPaused:!1,mode:`focus`,pomodoroCount:0,petState:`idle`,currentTask:``}}function f(){try{let e=localStorage.getItem(o);if(e){let t=JSON.parse(e);return t.isRunning=!1,t.isPaused=!1,t.mode=t.mode||`focus`,t.timerSeconds=t.mode===`focus`?n:t.mode===`shortBreak`?r:i,t.petState=`idle`,{...d(),...t}}}catch(e){console.warn(`Failed to load state:`,e)}return d()}function p(){try{localStorage.setItem(o,JSON.stringify(l))}catch(e){console.warn(`Failed to save state:`,e)}}var m=e=>document.querySelector(e),h=m(`#pet-container`),te=m(`#pet-status-text`),g=m(`#pet-glow`),_=m(`#timer-display`),v=m(`#session-mode-label`),y=m(`#pomodoro-tracker`),b=m(`#start-btn`),x=m(`#giveup-btn`),S=m(`#skip-btn`),C=m(`#pause-btn`),w=m(`#pause-icon`),T=m(`#resume-icon`),E=m(`#pause-text`),D=m(`#task-input`),O=m(`#current-task-label`),k=m(`#xp-bar-fill`),ne=m(`#xp-label`),re=m(`#stats-btn`),A=m(`#stats-panel`),j=m(`#stats-backdrop`),M=m(`#stats-close-btn`),N=m(`#confetti-container`);function P(){l.mode===`focus`?(v.textContent=`Focus Session`,document.body.className=``):l.mode===`shortBreak`?(v.textContent=`Short Break`,document.body.className=`theme-short-break`):(v.textContent=`Long Break`,document.body.className=`theme-long-break`)}function F(){y.querySelectorAll(`.pomo-dot`).forEach((e,t)=>{t<l.pomodoroCount?e.classList.add(`active`):e.classList.remove(`active`)})}function I(){h.innerHTML=e[l.petState]||e.idle;let n=t[l.petState];te.textContent=n[Math.floor(Math.random()*n.length)],g.className=``,l.petState===`success`?g.classList.add(`success-glow`):l.petState===`failed`&&g.classList.add(`danger-glow`)}function L(){let e=Math.floor(l.timerSeconds/60),t=l.timerSeconds%60;_.textContent=`${String(e).padStart(2,`0`)}:${String(t).padStart(2,`0`)}`,_.classList.remove(`timer-running`,`timer-danger`,`timer-success`),l.petState===`success`?_.classList.add(`timer-success`):l.petState===`failed`?_.classList.add(`timer-danger`):l.isRunning&&(_.classList.add(`timer-running`),l.timerSeconds<=60&&(_.classList.remove(`timer-running`),_.classList.add(`timer-danger`)))}function R(){let e=q(l.level),t=l.xp-J(l.level-1),n=Math.min(t/e*100,100);k.style.width=`${n}%`,ne.textContent=`Lv. ${l.level}`}function z(){if(l.isRunning)b.classList.add(`hidden`),C.classList.remove(`hidden`),D.disabled=!0,S.classList.remove(`hidden`),l.mode===`focus`?x.classList.remove(`hidden`):x.classList.add(`hidden`),l.isPaused?(w.classList.add(`hidden`),T.classList.remove(`hidden`),E.textContent=`Resume`,C.classList.add(`blinking`)):(w.classList.remove(`hidden`),T.classList.add(`hidden`),E.textContent=`Pause`,C.classList.remove(`blinking`)),l.currentTask&&l.mode===`focus`?(O.innerHTML=`Focusing on: <span>${se(l.currentTask)}</span>`,O.classList.remove(`hidden`)):l.mode!==`focus`&&(O.innerHTML=`Taking a break...`,O.classList.remove(`hidden`));else{b.classList.remove(`hidden`),x.classList.add(`hidden`),C.classList.add(`hidden`),S.classList.add(`hidden`),D.disabled=!1,O.classList.add(`hidden`);let e=`<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;l.mode===`focus`?b.innerHTML=`${e} Start Focus`:l.mode===`shortBreak`?b.innerHTML=`${e} Start Short Break`:b.innerHTML=`${e} Start Long Break`}}function B(){m(`#stat-total-time`).textContent=ce(l.totalFocusMinutes),m(`#stat-level`).textContent=`Level ${l.level}`;let e=l.sessions.filter(e=>e.completed).length;m(`#stat-sessions`).textContent=`${e}`;let t=q(l.level),n=l.xp-J(l.level-1);m(`#stat-xp`).textContent=`${n} / ${t} XP`,V()}function V(){let e=m(`#weekly-chart`),t=m(`#chart-labels`);e.innerHTML=``,t.innerHTML=``;let n=new Date,r=[];for(let e=6;e>=0;e--){let t=new Date(n);t.setDate(t.getDate()-e);let i=t.toISOString().slice(0,10),a=l.sessions.filter(e=>e.completed&&e.date&&e.date.startsWith(i)).length;r.push({date:t,count:a,dateStr:i})}let i=Math.max(...r.map(e=>e.count),1);r.forEach(n=>{let r=document.createElement(`div`);r.className=`chart-bar-wrapper`;let a=document.createElement(`span`);a.className=`chart-bar-count`,a.textContent=n.count||``;let o=document.createElement(`div`);o.className=`chart-bar`;let s=n.count>0?Math.max(n.count/i*100,8):4;o.style.height=`${s}%`,n.count===0&&(o.style.opacity=`0.2`),r.appendChild(a),r.appendChild(o),e.appendChild(r);let c=document.createElement(`span`);c.className=`chart-label`,c.textContent=ee[n.date.getDay()],t.appendChild(c)})}function H(){l.isRunning&&(l.isPaused=!l.isPaused,z(),l.isPaused?l.petState=`idle`:l.petState=l.mode===`focus`?`focusing`:`idle`,I())}function U(){l.isRunning||(l.isRunning=!0,l.isPaused=!1,l.mode===`focus`?(l.timerSeconds=n,l.petState=`focusing`):l.mode===`shortBreak`?(l.timerSeconds=r,l.petState=`idle`):(l.timerSeconds=i,l.petState=`idle`),l.currentTask=D.value.trim(),P(),F(),I(),L(),z(),Y(`pet-bounce`),u=setInterval(()=>{l.isPaused||(l.timerSeconds--,L(),l.timerSeconds<=0&&K())},1e3))}function W(){clearInterval(u),u=null,l.isRunning=!1,l.isPaused=!1,l.petState=`failed`,l.mode===`focus`?(l.timerSeconds=n,l.sessions.push({date:new Date().toISOString(),task:l.currentTask||`Unknown`,completed:!1})):l.mode===`shortBreak`?l.timerSeconds=r:l.timerSeconds=i,p(),I(),L(),z(),Y(`pet-shake`),setTimeout(()=>{l.petState=`idle`,I(),L()},4e3)}function G(){clearInterval(u),u=null,l.isRunning=!1,l.isPaused=!1,l.mode===`focus`?(l.pomodoroCount++,l.pomodoroCount>=4?(l.mode=`longBreak`,l.timerSeconds=i):(l.mode=`shortBreak`,l.timerSeconds=r)):(l.mode===`longBreak`&&(l.pomodoroCount=0),l.mode=`focus`,l.timerSeconds=n),l.petState=`idle`,p(),P(),F(),I(),L(),z()}function K(){if(clearInterval(u),u=null,l.isRunning=!1,l.isPaused=!1,l.petState=`success`,l.mode===`focus`){let e=l.level;for(l.xp+=a,l.totalFocusMinutes+=25,l.pomodoroCount++;l.xp>=J(l.level);)l.level++;l.sessions.push({date:new Date().toISOString(),task:l.currentTask||`Focus session`,completed:!0}),l.pomodoroCount>=4?l.mode=`longBreak`:l.mode=`shortBreak`,ie(),l.level>e&&setTimeout(()=>ae(l.level),800)}else l.mode===`longBreak`&&(l.pomodoroCount=0),l.mode=`focus`;p(),P(),F(),I(),R(),z(),Y(`pet-celebrate`),l.mode===`focus`?l.timerSeconds=n:l.mode===`shortBreak`?l.timerSeconds=r:l.timerSeconds=i,setTimeout(()=>{l.petState=`idle`,I(),L()},5e3)}function q(e){return e*100}function J(e){return e*(e+1)/2*100}function Y(e){h.classList.remove(`pet-bounce`,`pet-shake`,`pet-celebrate`),h.offsetWidth,h.classList.add(e),setTimeout(()=>h.classList.remove(e),1e3)}function ie(){for(let e=0;e<60;e++){let e=document.createElement(`div`);e.className=`confetti-piece`,e.style.backgroundColor=s[Math.floor(Math.random()*s.length)],e.style.left=`${Math.random()*100}%`,e.style.top=`-10px`,e.style.width=`${6+Math.random()*8}px`,e.style.height=`${6+Math.random()*8}px`,e.style.borderRadius=Math.random()>.5?`50%`:`2px`,e.style.animationDuration=`${2+Math.random()*2}s`,e.style.animationDelay=`${Math.random()*.8}s`,N.appendChild(e)}setTimeout(()=>{N.innerHTML=``},5e3)}function ae(e){let t=document.createElement(`div`);t.className=`level-up-flash`,document.body.appendChild(t);let n=document.createElement(`div`);n.className=`level-up-text`,n.textContent=`⭐ Level ${e}!`,document.body.appendChild(n),setTimeout(()=>{t.remove(),n.remove()},2e3)}function oe(){B(),A.classList.remove(`hidden`),j.classList.remove(`hidden`),requestAnimationFrame(()=>{A.classList.add(`visible`),j.classList.add(`visible`)})}function X(){A.classList.remove(`visible`),j.classList.remove(`visible`),setTimeout(()=>{A.classList.add(`hidden`),j.classList.add(`hidden`)},300)}function se(e){let t=document.createElement(`div`);return t.textContent=e,t.innerHTML}function ce(e){if(e<60)return`${e}m`;let t=Math.floor(e/60),n=e%60;return n>0?`${t}h ${n}m`:`${t}h`}b.addEventListener(`click`,U),x.addEventListener(`click`,W),S.addEventListener(`click`,G),C.addEventListener(`click`,H),re.addEventListener(`click`,oe),M.addEventListener(`click`,X),j.addEventListener(`click`,X),D.addEventListener(`keydown`,e=>{e.key===`Enter`&&!l.isRunning&&U()}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&X()});var Z=m(`#pet-name`),Q=m(`#pet-name-input`);Z.addEventListener(`click`,()=>{l.isRunning||(Z.classList.add(`hidden`),Q.classList.remove(`hidden`),Q.value=l.petName,Q.focus(),Q.select())});function le(){let e=Q.value.trim()||`Bubbles`;l.petName=e,Z.textContent=e,Z.classList.remove(`hidden`),Q.classList.add(`hidden`),p()}Q.addEventListener(`blur`,le),Q.addEventListener(`keydown`,e=>{e.key===`Enter`?Q.blur():e.key===`Escape`&&(Q.value=l.petName,Q.blur())});function $(){let e=document.createElement(`div`);e.id=`cursor-glow`,document.body.appendChild(e);let t=window.innerWidth/2,n=window.innerHeight/2,r=t,i=n,a=!0;document.addEventListener(`mouseenter`,()=>e.classList.add(`visible`)),document.addEventListener(`mouseleave`,()=>e.classList.remove(`visible`)),document.addEventListener(`mousemove`,o=>{t=o.clientX,n=o.clientY,a&&=(r=t,i=n,!1),e.classList.contains(`visible`)||e.classList.add(`visible`)});function o(){r+=(t-r)*.25,i+=(n-i)*.25,e.style.left=`${r}px`,e.style.top=`${i}px`,requestAnimationFrame(o)}o()}function ue(){for(let e=0;e<c;e++){let e=document.createElement(`div`);e.className=`floating-particle`;let t=2+Math.random()*3;e.style.width=`${t}px`,e.style.height=`${t}px`,e.style.left=`${Math.random()*100}%`,e.style.animationDuration=`${12+Math.random()*20}s`,e.style.animationDelay=`${Math.random()*15}s`,e.style.opacity=`${.1+Math.random()*.15}`,document.body.appendChild(e)}}function de(){let e=document.querySelector(`#pet-name`);e&&(e.textContent=l.petName),P(),F(),I(),L(),R(),z(),$(),ue()}de();