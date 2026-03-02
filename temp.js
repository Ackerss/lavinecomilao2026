
        // --- DADOS DAS FRUTAS (ATUALIZADO COM IMAGENS SVG MELHORES E DETALHADAS) ---
        // Mantive as chaves, cores e gêneros iguais para não quebrar a lógica de áudio/jogo.
        // A propriedade 'shape' agora contém desenhos SVG mais bonitos e "reais" (cartoon).
        const fruitsData = {
            'morango': {
                color: '#ef4444',
                gender: 'm',
                shape: `
                    <g transform="translate(5,5)">
                        <defs><radialGradient id="m-grad" cx="30%" cy="30%" r="70%"><stop offset="0%" stop-color="#fca5a5"/><stop offset="50%" stop-color="#ef4444"/><stop offset="100%" stop-color="#b91c1c"/></radialGradient></defs>
                        <path d="M30,55 C10,45 2,25 2,15 C2,5 15,0 30,5 C45,0 58,5 58,15 C58,25 50,45 30,55 Z" fill="url(#m-grad)" stroke="#991b1b" stroke-width="1.5" />
                        <circle cx="15" cy="18" r="2" fill="#fef08a"/><circle cx="28" cy="28" r="2" fill="#fef08a"/><circle cx="42" cy="18" r="2" fill="#fef08a"/>
                        <circle cx="48" cy="30" r="2" fill="#fef08a"/><circle cx="30" cy="42" r="2" fill="#fef08a"/><circle cx="18" cy="35" r="2" fill="#fef08a"/>
                        <circle cx="20" cy="8" r="2" fill="#fef08a" opacity="0.6"/><circle cx="40" cy="8" r="2" fill="#fef08a" opacity="0.6"/>
                        <path d="M15,5 L30,12 L45,5 L40,0 L30,4 L20,0 Z" fill="#22c55e" stroke="#14532d" stroke-width="1.5" stroke-linejoin="round"/>
                        <path d="M15,15 Q25,8 35,15" stroke="rgba(255,255,255,0.4)" stroke-width="3" fill="none" stroke-linecap="round"/>
                    </g>
                `
            },
            'banana': {
                color: '#facc15',
                gender: 'f',
                shape: `
                    <g transform="translate(5,5)">
                        <defs><linearGradient id="b-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fef08a"/><stop offset="50%" stop-color="#facc15"/><stop offset="100%" stop-color="#eab308"/></linearGradient></defs>
                        <path d="M5,60 Q15,35 40,15 Q60,5 65,10 Q60,40 35,60 Q10,70 5,60 Z" fill="url(#b-grad)" stroke="#a16207" stroke-width="2" stroke-linejoin="round"/>
                        <path d="M15,45 Q18,48 20,45 M30,35 Q33,38 35,35 M45,25 Q48,28 50,25" stroke="#78350f" stroke-width="2.5" stroke-linecap="round" opacity="0.7" fill="none"/>
                        <path d="M5,60 Q2,63 6,65" stroke="#78350f" stroke-width="4" fill="none" stroke-linecap="round"/>
                        <path d="M65,10 L68,5" stroke="#16a34a" stroke-width="5" stroke-linecap="round"/>
                        <path d="M15,55 Q30,35 55,15" stroke="rgba(255,255,255,0.5)" stroke-width="2" fill="none" stroke-linecap="round"/>
                    </g>
                `
            },
            'maçã': {
                color: '#ef4444',
                gender: 'f',
                shape: `
                    <g transform="translate(5,5)">
                        <defs><radialGradient id="a-grad" cx="25%" cy="25%" r="75%"><stop offset="0%" stop-color="#fca5a5"/><stop offset="60%" stop-color="#ef4444"/><stop offset="100%" stop-color="#b91c1c"/></radialGradient></defs>
                        <path d="M30,60 C10,60 5,40 5,25 C5,10 20,5 30,15 C40,5 55,10 55,25 C55,40 50,60 30,60 Z" fill="url(#a-grad)" stroke="#7f1d1d" stroke-width="1.5"/>
                        <ellipse cx="20" cy="22" rx="4" ry="8" fill="white" opacity="0.4" transform="rotate(-20 20 22)"/>
                        <ellipse cx="45" cy="22" rx="3" ry="6" fill="white" opacity="0.2" transform="rotate(20 45 22)"/>
                        <path d="M30,15 Q30,5 35,0" fill="none" stroke="#78350f" stroke-width="3.5" stroke-linecap="round"/>
                        <path d="M32,5 C40,-2 55,5 45,15 C35,15 30,10 32,5 Z" fill="#22c55e" stroke="#14532d" stroke-width="1.5"/>
                    </g>
                `
            },
            'uva': {
                color: '#a855f7',
                gender: 'f',
                shape: `
                    <g transform="translate(10,5)">
                        <defs><radialGradient id="g-grad" cx="30%" cy="30%" r="70%"><stop offset="0%" stop-color="#d8b4fe"/><stop offset="60%" stop-color="#a855f7"/><stop offset="100%" stop-color="#7e22ce"/></radialGradient></defs>
                        <circle cx="25" cy="50" r="10" fill="url(#g-grad)" stroke="#581c87" stroke-width="1.5"/>
                        <circle cx="15" cy="35" r="10" fill="url(#g-grad)" stroke="#581c87" stroke-width="1.5"/>
                        <circle cx="35" cy="35" r="10" fill="url(#g-grad)" stroke="#581c87" stroke-width="1.5"/>
                        <circle cx="25" cy="20" r="10" fill="url(#g-grad)" stroke="#581c87" stroke-width="1.5"/>
                        <circle cx="10" cy="20" r="9" fill="url(#g-grad)" stroke="#581c87" stroke-width="1.5"/>
                        <circle cx="40" cy="20" r="9" fill="url(#g-grad)" stroke="#581c87" stroke-width="1.5"/>
                        <circle cx="25" cy="6" r="8" fill="url(#g-grad)" stroke="#581c87" stroke-width="1.5"/>
                        <path d="M25,6 Q10,-2 15,10 Q25,16 25,6 Z" fill="#22c55e" stroke="#16a34a" stroke-width="1.5"/>
                        <path d="M25,6 L25,0" stroke="#78350f" stroke-width="2.5" stroke-linecap="round"/>
                        <!-- Highlights -->
                        <circle cx="22" cy="47" r="2" fill="white" opacity="0.4"/>
                        <circle cx="12" cy="32" r="2" fill="white" opacity="0.4"/>
                        <circle cx="32" cy="32" r="2" fill="white" opacity="0.4"/>
                        <circle cx="22" cy="17" r="2" fill="white" opacity="0.4"/>
                    </g>
                `
            },
            'laranja': {
                color: '#f97316',
                gender: 'f',
                shape: `
                    <g transform="translate(5,5)">
                        <defs><radialGradient id="o-grad" cx="30%" cy="30%" r="70%"><stop offset="0%" stop-color="#fdba74"/><stop offset="50%" stop-color="#f97316"/><stop offset="100%" stop-color="#c2410c"/></radialGradient></defs>
                        <circle cx="30" cy="30" r="28" fill="url(#o-grad)" stroke="#9a3412" stroke-width="1.5"/>
                        <circle cx="20" cy="20" r="1.5" fill="#9a3412" opacity="0.4"/>
                        <circle cx="40" cy="35" r="1.5" fill="#9a3412" opacity="0.4"/>
                        <circle cx="15" cy="40" r="1.5" fill="#9a3412" opacity="0.4"/>
                        <circle cx="45" cy="15" r="1.5" fill="#9a3412" opacity="0.4"/>
                        <circle cx="30" cy="50" r="1.5" fill="#9a3412" opacity="0.4"/>
                        <circle cx="28" cy="40" r="1.5" fill="#9a3412" opacity="0.4"/>
                        <circle cx="18" cy="30" r="1.5" fill="#9a3412" opacity="0.4"/>
                        <path d="M15,15 Q30,5 45,15" stroke="rgba(255,255,255,0.4)" stroke-width="4" fill="none" stroke-linecap="round"/>
                        <circle cx="30" cy="3" r="2.5" fill="#16a34a"/>
                        <path d="M30,3 C45,-2 50,15 35,12 C32,11 30,3 30,3 Z" fill="#22c55e" stroke="#14532d" stroke-width="1"/>
                    </g>
                `
            },
            'pera': {
                color: '#a3e635',
                gender: 'f',
                shape: `
                    <g transform="translate(10,5)">
                        <defs>
                            <radialGradient id="p-grad" cx="35%" cy="60%" r="65%">
                                <stop offset="0%" stop-color="#d9f99d"/>
                                <stop offset="60%" stop-color="#84cc16"/>
                                <stop offset="100%" stop-color="#4d7c0f"/>
                            </radialGradient>
                        </defs>
                        <path d="M25,5 Q35,5 35,25 Q35,35 45,45 Q50,55 40,65 Q25,70 10,65 Q0,55 5,45 Q15,35 15,25 Q15,5 25,5 Z" fill="url(#p-grad)" stroke="#4d7c0f" stroke-width="1.5"/>
                        <ellipse cx="18" cy="48" rx="4" ry="8" fill="white" opacity="0.3" transform="rotate(-20 18 48)"/>
                        <circle cx="38" cy="55" r="1.5" fill="#4d7c0f" opacity="0.3"/>
                        <circle cx="42" cy="48" r="1.5" fill="#4d7c0f" opacity="0.3"/>
                        <circle cx="12" cy="58" r="1.5" fill="#4d7c0f" opacity="0.3"/>
                        <path d="M25,5 L26,-2" stroke="#78350f" stroke-width="3.5" stroke-linecap="round"/>
                        <path d="M26,-1 C38,-5 42,8 30,10 Z" fill="#22c55e" stroke="#14532d" stroke-width="1"/>
                    </g>
                `
            },
            'melancia': {
                color: '#22c55e',
                gender: 'f',
                shape: `
                    <g transform="translate(0,10)">
                        <defs>
                            <linearGradient id="wm-flesh" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stop-color="#fca5a5"/>
                                <stop offset="50%" stop-color="#ef4444"/>
                                <stop offset="100%" stop-color="#b91c1c"/>
                            </linearGradient>
                            <linearGradient id="wm-rind" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stop-color="#15803d"/>
                                <stop offset="50%" stop-color="#22c55e"/>
                                <stop offset="100%" stop-color="#15803d"/>
                            </linearGradient>
                        </defs>
                        <!-- Casca Forte -->
                        <path d="M5,20 Q35,65 65,20 Z" fill="url(#wm-rind)" stroke="#14532d" stroke-width="6" stroke-linejoin="round"/>
                        <!-- Polpa -->
                        <path d="M7,20 Q35,60 63,20 Z" fill="url(#wm-flesh)" stroke="none"/>
                        <!-- Reflexo -->
                        <path d="M12,24 Q35,45 58,24" stroke="rgba(255,255,255,0.3)" stroke-width="3" fill="none" stroke-linecap="round"/>
                        <!-- Sementes -->
                        <ellipse cx="25" cy="30" rx="2" ry="3.5" fill="#1e293b" transform="rotate(-20 25 30)"/>
                        <ellipse cx="45" cy="30" rx="2" ry="3.5" fill="#1e293b" transform="rotate(20 45 30)"/>
                        <ellipse cx="35" cy="40" rx="2" ry="3.5" fill="#1e293b"/>
                        <ellipse cx="15" cy="25" rx="1.5" ry="3" fill="#1e293b" transform="rotate(-40 15 25)"/>
                        <ellipse cx="55" cy="25" rx="1.5" ry="3" fill="#1e293b" transform="rotate(40 55 25)"/>
                    </g>
                `
            },
            'abacaxi': {
                color: '#eab308',
                gender: 'm',
                shape: `
                    <g transform="translate(10,5)">
                        <defs>
                            <radialGradient id="px-grad" cx="30%" cy="40%" r="60%">
                                <stop offset="0%" stop-color="#fef08a"/>
                                <stop offset="60%" stop-color="#eab308"/>
                                <stop offset="100%" stop-color="#a16207"/>
                            </radialGradient>
                        </defs>
                        <!-- Coroa Superior -->
                        <path d="M25,25 L10,5 L20,15 L25,-2 L30,15 L40,5 L25,25 Z" fill="#22c55e" stroke="#14532d" stroke-width="1.5" stroke-linejoin="round"/>
                        <path d="M25,25 L5,15 L15,20 M25,25 L45,15 L35,20" fill="none" stroke="#22c55e" stroke-width="2" stroke-linecap="round"/>
                        <!-- Corpo -->
                        <ellipse cx="25" cy="45" rx="22" ry="26" fill="url(#px-grad)" stroke="#854d0e" stroke-width="1.5"/>
                        <!-- Textura Losangos (Melhorada) -->
                        <path d="M10,35 L40,60 M10,48 L35,68 M18,25 L45,45" stroke="#b45309" stroke-width="1.5" opacity="0.6"/>
                        <path d="M40,35 L10,60 M40,48 L15,68 M32,25 L5,45" stroke="#b45309" stroke-width="1.5" opacity="0.6"/>
                        <!-- Reflexo Direito -->
                        <path d="M38,30 Q44,45 38,60" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="4" stroke-linecap="round"/>
                    </g>
                `
            },
            'limão': {
                color: '#84cc16',
                gender: 'm',
                shape: `
                    <g transform="translate(5,15)">
                        <defs>
                            <radialGradient id="l-grad" cx="30%" cy="30%" r="70%">
                                <stop offset="0%" stop-color="#bef264"/>
                                <stop offset="50%" stop-color="#84cc16"/>
                                <stop offset="100%" stop-color="#4d7c0f"/>
                            </radialGradient>
                        </defs>
                        <path d="M5,25 Q15,5 35,5 Q55,5 65,25 Q55,45 35,45 Q15,45 5,25 Z" fill="url(#l-grad)" stroke="#3f6212" stroke-width="1.5"/>
                        <circle cx="20" cy="20" r="1.5" fill="#4d7c0f" opacity="0.4"/>
                        <circle cx="45" cy="30" r="1.5" fill="#4d7c0f" opacity="0.4"/>
                        <circle cx="35" cy="15" r="1.5" fill="#4d7c0f" opacity="0.4"/>
                        <circle cx="28" cy="35" r="1.5" fill="#4d7c0f" opacity="0.4"/>
                        <circle cx="50" cy="20" r="1.5" fill="#4d7c0f" opacity="0.4"/>
                        <path d="M20,12 Q35,8 50,12" stroke="rgba(255,255,255,0.5)" stroke-width="3" fill="none" stroke-linecap="round"/>
                        <circle cx="5" cy="25" r="2" fill="#65a30d"/>
                        <circle cx="65" cy="25" r="2" fill="#65a30d"/>
                    </g>
                `
            },
            'pimenta': {
                color: '#dc2626',
                gender: 'f',
                shape: `
                    <g transform="translate(15,-5)">
                        <defs>
                            <linearGradient id="pim-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="#f87171"/>
                                <stop offset="50%" stop-color="#ef4444"/>
                                <stop offset="100%" stop-color="#991b1b"/>
                            </linearGradient>
                        </defs>
                        <!-- Corpo da Pimenta tortinha -->
                        <path d="M15,20 Q25,25 30,40 Q35,60 25,75 Q15,85 10,80 Q5,75 15,60 Q20,40 5,20 Z" fill="url(#pim-grad)" stroke="#7f1d1d" stroke-width="1.5" stroke-linejoin="round"/>
                        <!-- Cabinho Verde -->
                        <path d="M12,5 Q18,10 15,20" stroke="#166534" stroke-width="4" fill="none" stroke-linecap="round"/>
                        <path d="M5,20 Q15,15 25,20 Z" fill="#22c55e" stroke="#14532d" stroke-width="1.5" stroke-linejoin="round"/>
                        <!-- Brilho -->
                    </g>
                `
            },
            'kiwi': {
                color: '#65a30d',
                gender: 'm',
                shape: `
                    <g transform="translate(10,10)">
                        <defs>
                            <radialGradient id="kiwi-grad" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stop-color="#fef08a"/>
                                <stop offset="30%" stop-color="#bef264"/>
                                <stop offset="70%" stop-color="#a3e635"/>
                                <stop offset="100%" stop-color="#854d0e"/>
                            </radialGradient>
                        </defs>
                        <ellipse cx="25" cy="25" rx="22" ry="25" fill="url(#kiwi-grad)" stroke="#422006" stroke-width="2"/>
                        <circle cx="25" cy="25" r="5" fill="#fef08a" opacity="0.8"/>
                        <!-- Sementes radiais -->
                        <g fill="#1c1917">
                            <circle cx="25" cy="15" r="1.5"/><circle cx="25" cy="35" r="1.5"/>
                            <circle cx="15" cy="25" r="1.5"/><circle cx="35" cy="25" r="1.5"/>
                            <circle cx="18" cy="18" r="1.5"/><circle cx="32" cy="18" r="1.5"/>
                            <circle cx="18" cy="32" r="1.5"/><circle cx="32" cy="32" r="1.5"/>
</g>
                    </g>
                `
            },
            'mirtilo': {
                color: '#3b82f6',
                gender: 'm',
                shape: `
                    <g transform="translate(15,15)">
                        <defs>
                            <radialGradient id="blu-grad" cx="30%" cy="30%" r="70%">
                                <stop offset="0%" stop-color="#93c5fd"/>
                                <stop offset="50%" stop-color="#3b82f6"/>
                                <stop offset="100%" stop-color="#1e3a8a"/>
                            </radialGradient>
                        </defs>
                        <circle cx="20" cy="20" r="18" fill="url(#blu-grad)" stroke="#1e3a8a" stroke-width="1.5"/>
                        <!-- Coroa em forma de estrela d'água -->
                        <path d="M20,5 L23,10 L28,8 L24,13 L29,18 L23,16 L20,21 L17,16 L11,18 L16,13 L12,8 L17,10 Z" fill="#1e3a8a" stroke="#0f172a" stroke-width="1" opacity="0.8"/>
                        <path d="M12,12 Q20,5 28,12" stroke="rgba(255,255,255,0.4)" stroke-width="2" fill="none" stroke-linecap="round"/>
                    </g>
                `
            },
            'cereja': {
                color: '#e11d48',
                gender: 'f',
                shape: `
                    <g transform="translate(10,5)">
                        <defs>
                            <radialGradient id="cherry-grad" cx="30%" cy="30%" r="70%">
                                <stop offset="0%" stop-color="#fca5a5"/>
                                <stop offset="40%" stop-color="#e11d48"/>
                                <stop offset="100%" stop-color="#881337"/>
                            </radialGradient>
                        </defs>
                        <!-- Cabinhos -->
                        <path d="M25,5 Q20,15 15,30 M25,5 Q30,15 35,30" stroke="#166534" stroke-width="2" fill="none" stroke-linecap="round"/>
                        <!-- Folhinha -->
                        <path d="M25,5 Q35,0 40,5 Q35,10 25,5 Z" fill="#22c55e" stroke="#14532d" stroke-width="1"/>
                        <!-- Frutas -->
                        <circle cx="15" cy="35" r="12" fill="url(#cherry-grad)" stroke="#881337" stroke-width="1.5"/>
                        <circle cx="35" cy="35" r="12" fill="url(#cherry-grad)" stroke="#881337" stroke-width="1.5"/>
                        <!-- Brilhos -->
                        <circle cx="11" cy="31" r="3" fill="rgba(255,255,255,0.6)"/>
                        <circle cx="31" cy="31" r="3" fill="rgba(255,255,255,0.6)"/>
                    </g>
                `
            },
            'pêssego': {
                color: '#f97316',
                gender: 'm',
                shape: `
                    <g transform="translate(10,10)">
                        <defs>
                            <radialGradient id="peach-grad" cx="40%" cy="30%" r="60%">
                                <stop offset="0%" stop-color="#fef08a"/>
                                <stop offset="30%" stop-color="#fca5a5"/>
                                <stop offset="70%" stop-color="#f97316"/>
                                <stop offset="100%" stop-color="#c2410c"/>
                            </radialGradient>
                        </defs>
                        <path d="M25,5 C40,5 50,20 45,40 C40,55 25,45 25,45 C25,45 10,55 5,40 C0,20 10,5 25,5 Z" fill="url(#peach-grad)" stroke="#9a3412" stroke-width="1.5"/>
                        <!-- Fenda do pêssego -->
                        <path d="M25,5 Q20,25 25,45" stroke="#c2410c" stroke-width="1.5" fill="none" stroke-linecap="round"/>
                        <!-- Folhinha -->
                        <path d="M25,5 Q15,0 10,8 Q20,12 25,5 Z" fill="#4ade80" stroke="#166534" stroke-width="1"/>
                        <circle cx="15" cy="20" r="4" fill="rgba(255,255,255,0.4)"/>
                    </g>
                `
            }
        };

        const monsterColors = [
            { fill: '#7bed9f', stroke: '#2ecc71' }, { fill: '#ff7675', stroke: '#d63031' },
            { fill: '#74b9ff', stroke: '#0984e3' }, { fill: '#a29bfe', stroke: '#6c5ce7' }, { fill: '#ffeaa7', stroke: '#fdcb6e' }
        ];
        let colorIndex = 0;

        let state = {
            mode: 'normal', targetCount: 0, eatenCount: 0, targetType: '',
            blenderRecipe: {}, blenderReady: false,
            poopMeter: 0, isPlaying: false, needsPoop: false, activeDrag: null,
            justActivatedBlender: false, lastSoundTime: 0, lastAmbientSpeechTime: 0,
            dirtSpots: [], lastCleanTime: 0,
            audioQueue: [],
            fruitsEatenTotal: 0, needsTeethBrushing: false, dirtyTeethSpots: [],
            currentColor: null // New state for paint mode
        };

        const MAX_POOP = 6;
        const els = {
            instruction: document.getElementById('instruction-bubble'),
            monster: document.getElementById('monster-container'),
            monsterBody: document.getElementById('monster-body'),
            bellyCounter: document.getElementById('belly-counter'),
            eatenFruits: document.getElementById('eaten-fruits-visuals'),
            blenderWrapper: document.getElementById('blender-wrapper'),
            blenderContainer: document.getElementById('blender-container'),
            blenderLiquid: document.getElementById('blender-liquid'),
            blenderSensor: document.getElementById('blender-sensor'),
            blenderItems: document.getElementById('blender-items-visuals'),
            mouthSensor: document.getElementById('mouth-sensor'),
            poopBtn: document.getElementById('poop-btn'),
            gameContainer: document.getElementById('game-container'),
            btnBlender: document.getElementById('btn-blender'),
            btnHeart: document.getElementById('btn-heart'),
            btnBath: document.getElementById('btn-bath'),
            btnTeeth: document.getElementById('btn-teeth'),
            btnPaint: document.getElementById('btn-paint'),
            paintPanel: document.getElementById('paint-panel'),
            bushContainer: document.getElementById('bush-container'),
            shelf: document.getElementById('fruit-shelf'),
            sponge: document.getElementById('sponge-cursor'),
            brushCursor: document.getElementById('brush-cursor'),
            dirtGroup: document.getElementById('dirt-group'),
            dirtyTeethGroup: document.getElementById('dirty-teeth-group')
        };

        // --- SISTEMA DE ÁUDIO OTIMIZADO (WEB AUDIO API) ---
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const audioBufferCache = {};
        let currentSequenceNodes = []; // Para poder cancelar áudios em andamento

        // Carrega um audio para memoria
        async function loadAudioBuffer(name) {
            if (audioBufferCache[name]) return audioBufferCache[name];
            try {
                const response = await fetch(`mp3/${name}.mp3`);
                const arrayBuffer = await response.arrayBuffer();
                const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
                audioBufferCache[name] = audioBuffer;
                return audioBuffer;
            } catch (e) {
                console.error("Erro ao carregar audio:", name, e);
                return null;
            }
        }

        function getTrimmedDetails(buffer) {
            const data = buffer.getChannelData(0);
            const len = data.length;
            const threshold = 0.002;
            let start = 0; let end = len - 1;

            while (start < len && Math.abs(data[start]) < threshold) start++;
            while (end > start && Math.abs(data[end]) < threshold) end--;

            const duration = (end - start) / buffer.sampleRate;
            if (end <= start || duration < 0.15) {
                return { offset: 0, duration: buffer.duration };
            }
            return { offset: start / buffer.sampleRate, duration: duration };
        }

        // Toca lista de audios em sequencia (Cancelável)
        async function playAudioSequence(list, interrupt = true) {
            if (!list || list.length === 0) return;
            if (audioCtx.state === 'suspended') await audioCtx.resume();

            // Se for uma fala principal, interrompe a fala anterior
            if (interrupt) {
                currentSequenceNodes.forEach(node => {
                    try { node.stop(); } catch (e) { }
                });
                currentSequenceNodes = [];
            }

            const promises = list.map(name => loadAudioBuffer(name));
            const buffers = await Promise.all(promises);

            let nextStartTime = audioCtx.currentTime + 0.05;

            buffers.forEach((buffer, index) => {
                if (buffer) {
                    const source = audioCtx.createBufferSource();
                    source.buffer = buffer;
                    source.connect(audioCtx.destination);

                    const trim = getTrimmedDetails(buffer);
                    source.start(nextStartTime, trim.offset, trim.duration);

                    if (interrupt) currentSequenceNodes.push(source);
                    nextStartTime += trim.duration;
                }
            });
        }

        function playVoice(input, isAmbient = false) {
            if (isAmbient && (Date.now() - state.lastAmbientSpeechTime < 2000)) return;
            if (isAmbient) state.lastAmbientSpeechTime = Date.now();

            const isInterrupt = !isAmbient; // Sons de ambiente não calam a voz principal

            if (Array.isArray(input)) {
                playAudioSequence(input, isInterrupt);
            } else {
                playAudioSequence([input], isInterrupt);
            }
        }

        async function playSFX(name, vol = 1.0) {
            if (audioCtx.state === 'suspended') await audioCtx.resume();
            const buffer = await loadAudioBuffer(name);
            if (!buffer) return;
            const source = audioCtx.createBufferSource();
            const gainNode = audioCtx.createGain();
            source.buffer = buffer;
            gainNode.gain.value = vol;
            source.connect(gainNode);
            gainNode.connect(audioCtx.destination);

            const trim = getTrimmedDetails(buffer);
            source.start(0, trim.offset, trim.duration);
        }

        // Sintetizador de efeitos sonoros
        function playSound(type) {
            if (audioCtx.state === 'suspended') audioCtx.resume();

            const now = audioCtx.currentTime;
            if (type === 'water' && now - state.lastSoundTime < 0.15) return;
            state.lastSoundTime = now;

            const osc = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            osc.connect(gainNode); gainNode.connect(audioCtx.destination);

            if (type === 'eat') {
                osc.type = 'triangle'; osc.frequency.setValueAtTime(300, now);
                osc.frequency.linearRampToValueAtTime(100, now + 0.1);
                gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
                osc.start(); osc.stop(now + 0.15);
            } else if (type === 'fart') {
                osc.type = 'sawtooth'; osc.frequency.setValueAtTime(120, now);
                osc.frequency.exponentialRampToValueAtTime(40, now + 0.5);
                gainNode.gain.setValueAtTime(0.4, now); gainNode.gain.linearRampToValueAtTime(0, now + 0.5);
                osc.start(); osc.stop(now + 0.5);
            } else if (type === 'heart') {
                osc.type = 'sine'; osc.frequency.setValueAtTime(523.25, now);
                osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.2);
                gainNode.gain.setValueAtTime(0.3, now); gainNode.gain.linearRampToValueAtTime(0, now + 0.3);
                osc.start(); osc.stop(now + 0.3);
            } else if (type === 'water') {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(400 + Math.random() * 200, now);
                osc.frequency.linearRampToValueAtTime(800 + Math.random() * 200, now + 0.1);
                gainNode.gain.setValueAtTime(0.1, now);
                gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
                osc.start(); osc.stop(now + 0.1);
            } else {
                osc.type = 'sine'; osc.frequency.setValueAtTime(600, now);
                gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
                osc.start(); osc.stop(now + 0.1);
            }
        }

        function startGame() {
            document.getElementById('start-screen').style.display = 'none';
            if (audioCtx.state === 'suspended') audioCtx.resume();
            setupBlenderDrag();
            setupInteractionEvents();
            setupPaintMode(); // Setup paint mode events
            startRound();
            scheduleNextDirt();
        }

        function scheduleNextDirt() {
            const delay = 30000 + Math.random() * 20000;
            setTimeout(() => {
                tryAddDirt();
                scheduleNextDirt();
            }, delay);
        }

        function tryAddDirt() {
            if (state.dirtSpots.length > 8) return;
            let attempts = 0;
            let success = false;
            let x, y, r;

            while (!success && attempts < 10) {
                x = 60 + Math.random() * 180;
                y = 100 + Math.random() * 200;
                if (y < 160) { attempts++; continue; } // Avoid mouth area
                r = 15 + Math.random() * 15;
                let overlap = false;
                for (let spot of state.dirtSpots) {
                    const dx = spot.x - x;
                    const dy = spot.y - y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < (spot.r + r + 5)) { overlap = true; break; }
                }
                if (!overlap) success = true;
                attempts++;
            }
            if (success) addDirtSpot(x, y, r);
        }

        function addDirtSpot(x, y, r) {
            const spot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            spot.setAttribute("cx", x);
            spot.setAttribute("cy", y);
            spot.setAttribute("r", r);
            spot.setAttribute("class", "dirt-spot");
            els.dirtGroup.appendChild(spot);
            state.dirtSpots.push({ x, y, r, el: spot });
        }

        function removeDirtSpot(spotData) {
            const index = state.dirtSpots.indexOf(spotData);
            if (index > -1) {
                spotData.el.style.opacity = '0';
                spotData.el.style.transform = 'scale(1.5)';
                setTimeout(() => {
                    if (spotData.el.parentNode) spotData.el.parentNode.removeChild(spotData.el);
                }, 500);
                state.dirtSpots.splice(index, 1);
                createParticle(spotData.x, spotData.y, 'bubble');
                playSFX('sfx_bath');
            }
        }

        // Removido toggleColor() antigo. Implementado na logica de paint.

        function checkPoopStatus() {
            if (state.poopMeter >= MAX_POOP) {
                state.needsPoop = true;
                els.monster.className = 'sick-face';
                els.instruction.innerHTML = "Ai minha barriga!";
                playVoice('dor_barriga');
                els.poopBtn.style.display = 'flex';
                els.shelf.style.opacity = '0.3';
                els.shelf.style.pointerEvents = 'none';
                return true;
            }
            return false;
        }

        function doPoop() {
            playSFX('sfx_burp');
            const poopVisual = document.createElement('div');
            poopVisual.innerHTML = '💩';
            poopVisual.className = 'poop-drop';
            const mRect = els.monster.getBoundingClientRect();
            poopVisual.style.left = (mRect.left + mRect.width / 2) + 'px';
            poopVisual.style.top = (mRect.bottom - 40) + 'px';
            els.gameContainer.appendChild(poopVisual);
            setTimeout(() => poopVisual.remove(), 2500);

            state.poopMeter = 0; state.needsPoop = false;
            els.poopBtn.style.display = 'none';
            els.monster.className = 'monster-idle';
            els.shelf.style.opacity = '1';
            els.shelf.style.pointerEvents = 'auto';
            playVoice('alivio');
            els.bellyCounter.innerText = '';
            els.eatenFruits.innerHTML = '';
            setTimeout(startRound, 2500);
        }

        function clearModeVisuals() {
            els.btnHeart.classList.remove('btn-active');
            els.btnBlender.classList.remove('btn-active');
            els.btnBath.classList.remove('btn-active');
            if (els.btnPaint) els.btnPaint.classList.remove('btn-active');
            els.monster.classList.remove('heart-face');
            els.monster.classList.remove('interactive');
            els.blenderWrapper.style.display = 'none';
            els.paintPanel.style.display = 'none';
            resetBlender();
            els.sponge.style.display = 'none';
            els.brushCursor.style.display = 'none';
            els.shelf.style.opacity = '1';
            els.shelf.style.pointerEvents = 'auto';
            if (state.needsTeethBrushing) els.btnTeeth.style.display = 'flex';

            // Reset monster color to default
            els.monsterBody.style.fill = 'url(#monster-body-grad)';
            els.monsterBody.style.stroke = '#15803d';
            state.currentColor = null;
            els.paintPanel.querySelectorAll('.paint-pot').forEach(pot => pot.classList.remove('active'));
        }

        function setMode(newMode) {
            if (state.needsPoop) return;

            if (state.mode === newMode) {
                state.mode = 'normal';
                clearModeVisuals();
                startRound();
                return;
            }

            clearModeVisuals();
            state.mode = newMode;

            if (state.mode === 'blender') {
                els.blenderWrapper.style.display = 'block';
                els.btnBlender.classList.add('btn-active');
                state.justActivatedBlender = true;
                startRound();
            }
            else if (state.mode === 'heart') {
                els.btnHeart.classList.add('btn-active');
                els.monster.classList.add('heart-face');
                els.monster.classList.add('interactive');
                els.instruction.innerHTML = "Dê carinho no monstro!";

                playVoice('quero_carinho');
                if (Math.random() > 0.5) setTimeout(() => playVoice('instrucao_carinho'), 2000);

                hideShelf();
            }
            else if (state.mode === 'bath') {
                els.btnBath.classList.add('btn-active');
                els.monster.classList.add('interactive');
                els.instruction.innerHTML = "Hora do banho!";

                playVoice('modo_banho');
                if (Math.random() > 0.5) setTimeout(() => playVoice('instrucao_banho'), 2000);

                els.sponge.style.display = 'block';
                hideShelf();
            }
            else if (state.mode === 'teeth') {
                els.monster.classList.add('interactive');
                els.instruction.innerHTML = "Hora de escovar os dentes!";

                // Vamos tocar a voz da Alice depois:
                playVoice('instr_teeth');

                els.brushCursor.style.display = 'block';
                els.btnTeeth.style.display = 'none'; // Esconde botão enquanto escova
                els.btnTeeth.classList.add('btn-active');
                els.dirtyTeethGroup.style.display = 'block';

                // Reinicia as manchas
                state.dirtyTeethSpots = Array.from(els.dirtyTeethGroup.querySelectorAll('.dirty-tooth'));
                state.dirtyTeethSpots.forEach(spot => {
                    spot.style.opacity = '0.9';
                    spot.dataset.cleaned = 'false';
                });

                hideShelf();
            }
            else if (state.mode === 'paint') {
                els.btnPaint.classList.add('btn-active');
                els.instruction.innerHTML = "Pinte o monstrinho!";
                playVoice('instr_paint');
                els.paintPanel.style.display = 'flex';
                hideShelf();
            }
            else {
                startRound();
            }
        }

        function hideShelf() {
            els.shelf.style.opacity = '0.3';
            els.shelf.style.pointerEvents = 'none';
            const oldFruits = els.shelf.querySelectorAll('.basket-item');
            oldFruits.forEach(el => el.remove());
        }

        function setupInteractionEvents() {
            const container = document.getElementById('game-container');
            const bathSounds = ["banho_1", "banho_2", "banho_3", "banho_4", "banho_5", "banho_6"];
            const heartSounds = ["carinho_1", "carinho_2", "carinho_3", "carinho_4"];

            const handleTap = (e) => {
                if (state.mode !== 'heart') return;
                if (e.type === 'touchstart') e.preventDefault();

                const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                const clientY = e.touches ? e.touches[0].clientY : e.clientY;

                const mRect = els.monster.getBoundingClientRect();
                if (clientX >= mRect.left && clientX <= mRect.right &&
                    clientY >= mRect.top && clientY <= mRect.bottom) {

                    createParticle(clientX, clientY, 'heart');
                    playSound('heart');
                    if (Math.random() > 0.7) {
                        playVoice(heartSounds[Math.floor(Math.random() * heartSounds.length)], true);
                    }
                }
            };

            const handleMove = (e) => {
                const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                const clientY = e.touches ? e.touches[0].clientY : e.clientY;

                if (state.mode === 'bath') {
                    els.sponge.style.left = (clientX - 30) + 'px';
                    els.sponge.style.top = (clientY - 30) + 'px';

                    const isTouching = (e.type === 'touchmove') || (e.buttons === 1);
                    if (!isTouching) return;

                    const mRect = els.monster.getBoundingClientRect();
                    const isOverMonster = clientX >= mRect.left && clientX <= mRect.right &&
                        clientY >= mRect.top && clientY <= mRect.bottom;

                    if (isOverMonster) {
                        const now = Date.now();
                        if (state.dirtSpots.length > 0 && now - state.lastCleanTime > 800) {
                            const randomSpotIndex = Math.floor(Math.random() * state.dirtSpots.length);
                            removeDirtSpot(state.dirtSpots[randomSpotIndex]);
                            state.lastCleanTime = now;
                        }

                        if (Math.random() > 0.8) {
                            createParticle(clientX, clientY, 'bubble');
                            if (Math.random() > 0.5) playSFX('sfx_bath', 0.5);
                        }

                        if (Math.random() > 0.98) {
                            playVoice(bathSounds[Math.floor(Math.random() * bathSounds.length)], true);
                        }
                    }
                }
                else if (state.mode === 'teeth') {
                    els.brushCursor.style.left = (clientX - 10) + 'px';
                    els.brushCursor.style.top = (clientY - 60) + 'px';

                    const isTouching = (e.type === 'touchmove') || (e.buttons === 1);
                    if (!isTouching) {
                        els.brushCursor.style.animationPlayState = 'paused';
                        return;
                    }

                    els.brushCursor.style.animationPlayState = 'running';

                    const mouth = els.mouthSensor.getBoundingClientRect();
                    const isOverMouth = clientX >= mouth.left && clientX <= mouth.right &&
                        clientY >= mouth.top && clientY <= mouth.bottom;

                    if (isOverMouth) {
                        const now = Date.now();
                        if (Math.random() > 0.7) createParticle(clientX, clientY, 'bubble');

                        // Sonzinho de gargarejo/escovação
                        if (Math.random() > 0.6) playSFX('sfx_gargle', 0.6);

                        // Limpa manchas se passar por cima
                        if (now - state.lastCleanTime > 400 && state.dirtyTeethSpots.length > 0) {
                            const uncleaned = state.dirtyTeethSpots.filter(s => s.dataset.cleaned !== 'true');
                            if (uncleaned.length > 0) {
                                const spot = uncleaned[Math.floor(Math.random() * uncleaned.length)];
                                spot.style.opacity = '0';
                                spot.dataset.cleaned = 'true';
                                state.lastCleanTime = now;

                                if (uncleaned.length === 1) {
                                    // Terminou de limpar
                                    state.needsTeethBrushing = false;
                                    els.dirtyTeethGroup.style.display = 'none';
                                    els.brushCursor.style.animationPlayState = 'paused';
                                    els.btnTeeth.classList.remove('btn-active');
                                    // playVoice('monster_bath_laugh'); ou pling
                                    setTimeout(() => setMode('normal'), 1500);
                                }
                            }
                        }
                    } else {
                        els.brushCursor.style.animationPlayState = 'paused';
                    }
                }
            };

            els.monster.addEventListener('mousedown', handleTap);
            els.monster.addEventListener('touchstart', handleTap, { passive: false });

            container.addEventListener('mousemove', handleMove);
            container.addEventListener('touchmove', handleMove, { passive: false });
        }

        function setupPaintMode() {
            const pots = els.paintPanel.querySelectorAll('.paint-pot');
            pots.forEach(pot => {
                pot.addEventListener('mousedown', handlePaintDragStart);
                pot.addEventListener('touchstart', handlePaintDragStart, { passive: false });
            });
        }

        function handlePaintDragStart(e) {
            if (state.mode !== 'paint') return;
            e.preventDefault();
            const sourceElement = e.currentTarget;
            const color = sourceElement.dataset.color;
            const sound = sourceElement.dataset.sound;
            const hexColor = sourceElement.style.background;

            const touch = e.type === 'touchstart' ? e.touches[0] : e;

            // Toca a voz em inglês da cor (ex: "Blue!")
            if (sound) playVoice(sound);

            const dragEl = document.createElement('div');
            dragEl.className = 'paint-pot-drag';
            dragEl.style.background = hexColor;
            dragEl.dataset.hex = hexColor;
            dragEl.style.left = (touch.clientX - 32) + 'px';
            dragEl.style.top = (touch.clientY - 32) + 'px';
            els.gameContainer.appendChild(dragEl);

            const moveHandler = (me) => {
                const mt = me.type === 'touchmove' ? me.touches[0] : me;
                dragEl.style.left = (mt.clientX - 32) + 'px';
                dragEl.style.top = (mt.clientY - 32) + 'px';
            };

            const endHandler = (ee) => {
                document.removeEventListener('mousemove', moveHandler);
                document.removeEventListener('mouseup', endHandler);
                document.removeEventListener('touchmove', moveHandler);
                document.removeEventListener('touchend', endHandler);

                const endTouch = ee.type === 'touchend' ? ee.changedTouches[0] : ee;
                checkPaintDrop(dragEl, endTouch.clientX, endTouch.clientY);
            };

            document.addEventListener('mousemove', moveHandler);
            document.addEventListener('mouseup', endHandler);
            document.addEventListener('touchmove', moveHandler, { passive: false });
            document.addEventListener('touchend', endHandler);
        }

        function checkPaintDrop(dragEl, cx, cy) {
            const mRect = els.monsterBody.getBoundingClientRect();

            // Checa se soltou em cima do monstro
            if (cx >= mRect.left && cx <= mRect.right && cy >= mRect.top && cy <= mRect.bottom) {
                const hex = dragEl.dataset.hex;

                // Mágica das Cores: se soltou na parte de cima ou de baixo
                const isHead = cy < (mRect.top + mRect.height / 2);

                // Nós pintamos mudando a cor do stop no radialGradient principal
                // O svg usa #monster-body-grad com 3 stops
                const stops = document.getElementById('monster-body-grad').querySelectorAll('stop');

                if (isHead) {
                    stops[2].setAttribute('stop-color', hex);
                    // Para ficar um gradiente bonito, a cor do meio pode ser a mesma mas mais clara, mas vamos simplificar:
                    stops[1].setAttribute('stop-color', hex);
                } else {
                    stops[0].setAttribute('stop-color', hex);
                    stops[1].setAttribute('stop-color', hex);
                }

                // Som de aplicar a tinta
                playSFX('sfx_sneeze', 0.8);
                createParticle(cx, cy, 'bubble');
            } else {
                playSound('pop');
            }
            dragEl.remove();
        }

        function createParticle(x, y, type) {
            const p = document.createElement('div');
            p.className = (type === 'heart' ? 'heart-particle' : (type === 'fire' ? 'fire-particle' : 'bubble-particle'));

            if (type === 'heart') p.innerHTML = ['❤️', '💖', '✨', '💕'][Math.floor(Math.random() * 4)];
            if (type === 'fire') {
                p.innerHTML = '🔥';
                p.style.fontSize = '40px';
                p.style.animation = 'float-up 1s forwards';
            }

            const randX = (Math.random() - 0.5) * 40;
            p.style.left = (x + randX) + 'px';
            p.style.top = y + 'px';

            els.gameContainer.appendChild(p);
            setTimeout(() => p.remove(), 2000);
        }

        function handleBlenderClick() {
            if (!state.blenderReady || state.isPlaying) return;
            state.blenderReady = false;
            els.blenderContainer.classList.remove('blender-ready');
            els.blenderItems.innerHTML = '';
            els.blenderLiquid.style.opacity = 0;

            playSFX('sfx_blender', 1.0);
            els.blenderContainer.style.animation = 'shake 0.5s infinite';
        }

        function startRound() {
            if (checkPoopStatus()) return;
            state.isPlaying = true;
            state.blenderReady = false;
            els.blenderContainer.classList.remove('blender-ready');
            els.blenderItems.innerHTML = '';

            const oldFruits = els.shelf.querySelectorAll('.basket-item');
            oldFruits.forEach(el => el.remove());

            if (state.mode === 'normal') setupNormalRound();
            else if (state.mode === 'blender') setupBlenderRound();
        }

        // --- FUNÇÃO AUXILIAR PARA EMBARALHAR ARRAY ---
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        function fillBasket(requiredTypes, exactQuantity = 1) {
            // A prateleira precisa ter a quantidade exata pedida + frutas aleatórias para preencher
            let basketContents = [];

            // Adiciona as frutas obrigatórias (ex: 3 maçãs)
            requiredTypes.forEach(type => {
                for (let i = 0; i < exactQuantity; i++) basketContents.push(type);
            });

            const allTypes = Object.keys(fruitsData);
            // Preenche o resto da cesta até ter no máximo 4 ou 5 itens (depende de quantas pediram)
            const maxItems = Math.max(4, basketContents.length + 1);

            while (basketContents.length < maxItems) {
                const randomType = allTypes[Math.floor(Math.random() * allTypes.length)];
                if (!basketContents.includes(randomType) || requiredTypes.length > 1) {
                    basketContents.push(randomType);
                }
            }

            basketContents = shuffleArray(basketContents);

            basketContents.forEach(type => {
                const item = document.createElement('div');
                item.className = 'basket-item';
                item.innerHTML = `<svg viewBox="0 0 70 70" style="width:100%; height:100%; pointer-events:none;">${fruitsData[type].shape}</svg>`;
                item.dataset.type = type;
                item.addEventListener('touchstart', handleFruitDragStart, { passive: false });
                item.addEventListener('mousedown', handleFruitDragStart);
                els.shelf.appendChild(item);
            });
        }

        function handleFruitDragStart(e) {
            if (!state.isPlaying || state.needsPoop) return;
            e.preventDefault();
            const sourceElement = e.currentTarget;
            const type = sourceElement.dataset.type;
            const touch = e.type === 'touchstart' ? e.touches[0] : e;

            // Esconde a fruta original na prateleira (mas não deleta ainda)
            sourceElement.style.opacity = '0';
            sourceElement.style.pointerEvents = 'none';

            const dragEl = document.createElement('div');
            dragEl.className = 'fruit-drag';
            dragEl.dataset.type = type;
            dragEl.dataset.sourceId = Math.random().toString(36).substr(2, 9); // ID único para reconectar
            sourceElement.dataset.dragId = dragEl.dataset.sourceId;

            dragEl.innerHTML = `<svg viewBox="0 0 70 70">${fruitsData[type].shape}</svg>`;
            dragEl.style.left = (touch.clientX - 45) + 'px';
            dragEl.style.top = (touch.clientY - 45) + 'px';
            els.gameContainer.appendChild(dragEl);
            state.activeDrag = dragEl;

            // Feedback visual: boca abre se for comida
            if (state.mode === 'normal') els.monster.classList.add('mouth-open');

            const moveHandler = (me) => {
                const mt = me.type === 'touchmove' ? me.touches[0] : me;
                state.activeDrag.style.left = (mt.clientX - 45) + 'px';
                state.activeDrag.style.top = (mt.clientY - 45) + 'px';
            };

            const endHandler = () => {
                document.removeEventListener('mousemove', moveHandler);
                document.removeEventListener('mouseup', endHandler);
                document.removeEventListener('touchmove', moveHandler);
                document.removeEventListener('touchend', endHandler);
                els.monster.classList.remove('mouth-open');

                if (state.activeDrag) {
                    checkDrop(state.activeDrag, sourceElement);
                    state.activeDrag = null;
                }
            };

            document.addEventListener('mousemove', moveHandler);
            document.addEventListener('mouseup', endHandler);
            document.addEventListener('touchmove', moveHandler, { passive: false });
            document.addEventListener('touchend', endHandler);
        }

        function checkDrop(dragEl, sourceElement) {
            const rect = dragEl.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            let dropped = false;

            if (state.mode === 'normal') {
                const mouth = els.mouthSensor.getBoundingClientRect();
                if (cx >= mouth.left && cx <= mouth.right && cy >= mouth.top && cy <= mouth.bottom) {
                    const droppedType = dragEl.dataset.type;

                    if (droppedType === 'pimenta') {
                        eatSpicy(dragEl, sourceElement);
                        dropped = true;
                    } else if (droppedType === 'limão') {
                        eatSour(dragEl, sourceElement);
                        dropped = true;
                    } else if (droppedType === state.targetType) {
                        eatFruitNormal(dragEl, sourceElement);
                        dropped = true;
                    } else {
                        playVoice('erro'); playSound('pop');
                    }
                }
            } else if (state.mode === 'blender') {
                const blenderRect = els.blenderSensor.getBoundingClientRect();
                if (cx >= blenderRect.left && cx <= blenderRect.right && cy >= blenderRect.top && cy <= blenderRect.bottom) {
                    checkBlenderIngredient(dragEl, sourceElement);
                    dropped = true;
                }
            }

            if (!dropped) {
                // Animação de volta para a prateleira / sumiço do drag
                dragEl.style.transition = '0.3s'; dragEl.style.transform = 'scale(0)';
                // Devolve a opacidade da fruta original na prateleira
                sourceElement.style.opacity = '1';
                sourceElement.style.pointerEvents = 'auto';
                setTimeout(() => dragEl.remove(), 300);
            }
        }

        function eatSpicy(dragEl, sourceElement) {
            dragEl.remove(); sourceElement.remove();

            // Fica vermelho, cospe fogo e chora
            els.monster.className = 'sick-face mouth-open';
            els.monsterBody.style.fill = '#fca5a5';
            playSound('water'); // sibilado ou fogo
            playVoice('pimenta_fogo'); // precisava ter um som tipo aaaah kkkk

            // Fogo saindo da boca
            for (let i = 0; i < 15; i++) {
                setTimeout(() => createParticle(150, 150, 'fire'), i * 100);
            }

            setTimeout(() => {
                els.monster.className = 'monster-idle';
                els.monsterBody.style.fill = 'url(#monster-body-grad)';
            }, 2500);
        }

        function eatSour(dragEl, sourceElement) {
            dragEl.remove(); sourceElement.remove();

            els.monster.className = 'sick-face';
            els.monsterBody.style.fill = '#bef264';
            playVoice('limao_azedo'); // Som de arrepio/azedo

            // Tremidinha e rosto amassado
            els.monster.style.animation = 'shake 0.5s infinite';

            setTimeout(() => {
                els.monster.style.animation = 'none';
                els.monster.className = 'monster-idle';
                els.monsterBody.style.fill = 'url(#monster-body-grad)';
            }, 2500);
        }

        // --- FUNÇÃO AUXILIAR PARA GERAR NOME NO PLURAL CORRETO ---
        function getFruitName(rawType, count) {
            // Remove acentos e caracteres especiais para nome de arquivo
            let safeName = rawType.replace(/[ãáàâ]/g, "a").replace("ç", "c").replace("ê", "e").replace("õ", "o");

            // Se for plural (mais de 1), adiciona "s" ou trata irregularidades
            if (count > 1) {
                if (safeName === 'limao') return 'limoes'; // Irregular
                // Para os demais, apenas adiciona 's' (maca -> macas, morango -> morangos)
                return safeName + 's';
            }

            // Singular
            return safeName;
        }

        function setupNormalRound() {
            // Remove limão e pimenta da escolha de frutas alvo e as novas para não complicar tanto por enquanto, ou deixa
            const types = Object.keys(fruitsData).filter(t => t !== 'limão' && t !== 'pimenta');
            state.targetType = types[Math.floor(Math.random() * types.length)];
            state.targetCount = Math.floor(Math.random() * 5) + 1; // 1 a 5
            state.eatenCount = 0;

            const name = getFruitName(state.targetType, state.targetCount);
            playVoice(['instr_feed', 'num_' + state.targetCount, 'fruit_' + name]);

            els.bellyCounter.innerText = state.eatenCount;
            els.instruction.innerHTML = `Eu quero <b>${state.targetCount}</b> ${name.toUpperCase()}!`;
            els.instruction.style.display = 'block';

            let hasTarget = false;
            // Gera 5 frutas na bancada (aumentamos de 4 para 5)
            for (let i = 0; i < 5; i++) {
                let type;
                if (!hasTarget && i === 4) {
                    type = state.targetType;
                    hasTarget = true;
                } else {
                    // Maior chance de pimenta e limão
                    if (Math.random() > 0.8) {
                        type = Math.random() > 0.5 ? 'pimenta' : 'limão';
                    } else {
                        type = types[Math.floor(Math.random() * types.length)];
                    }
                    if (type === state.targetType) hasTarget = true;
                }
                createShelfFruit(type, 10 + i * 20); // Distribui no CSS left (10% a 90%)
            }

            // Esconde-esconde (Moitinha)
            if (Math.random() > 0.7) {
                // Atraso randomizado (3 a 5 segundos)
                setTimeout(() => {
                    if (state.mode !== 'normal' || state.targetCount <= 0) return; // cancela se o jogo virou ou acabou

                    const fruitsOnShelf = els.shelf.querySelectorAll('.fruit-item');
                    if (fruitsOnShelf.length > 0) {
                        playVoice('instr_hide_seek', true);
                        els.bushContainer.style.display = 'block';
                        els.bushContainer.style.bottom = '10px';

                        fruitsOnShelf.forEach(f => {
                            f.style.transition = '0.5s ease-in';
                            f.style.transform = 'translateY(150px) scale(0)';
                            setTimeout(() => {
                                f.style.display = 'none';
                                f.classList.add('hidden-in-bush');
                            }, 500);
                        });
                        setTimeout(() => playSFX('sfx_sneeze', 0.3), 300);
                    }
                }, 3000 + Math.random() * 2000);
            }
        }

        function findHiddenFruits() {
            // Clicou no arbusto
            els.bushContainer.style.display = 'none';
            // Efeito sonoro engraçado de descobrir (Agudo)
            playSound('water'); // placeholder ou aui
            if (audioCtx.state !== 'suspended') {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.connect(gain); gain.connect(audioCtx.destination);
                osc.type = 'sine'; osc.frequency.setValueAtTime(800, audioCtx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(1500, audioCtx.currentTime + 0.2);
                gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
                gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.2);
                osc.start(); osc.stop(audioCtx.currentTime + 0.2);
            }

            let pluralText = state.targetType;
            if (state.targetCount > 1) {
                if (state.targetType === 'limão') pluralText = 'limões';
                else if (state.targetType === 'melancia') pluralText = 'melancias';
                else if (state.targetType === 'abacaxi') pluralText = 'abacaxis';
                else pluralText = state.targetType + 's';
            }
            els.instruction.innerHTML = `Quero <span class="highlight-num">${state.targetCount}</span> ${pluralText}!`;

            const gender = fruitsData[state.targetType].gender;
            let numAudio = state.targetCount.toString();
            if (state.targetCount === 1) numAudio = (gender === 'm') ? '1' : 'uma';
            if (state.targetCount === 2) numAudio = (gender === 'm') ? '2' : 'duas';
            if (state.targetCount === 3) numAudio = '3';

            const audioFruitName = getFruitName(state.targetType, state.targetCount);

            // "Achei você!" ou similar. Vamos reaproveitar a risada ou só pedir
            playVoice(['quero', numAudio, audioFruitName]);

            fillBasket([state.targetType], state.targetCount);
        }

        function eatFruitNormal(dragEl, sourceElement) {
            const bellyClone = dragEl.cloneNode(true);
            bellyClone.className = 'eaten-fruit';
            bellyClone.style.left = 'auto'; bellyClone.style.top = 'auto'; // Remove propriedades absolutas do drag
            els.eatenFruits.appendChild(bellyClone);

            dragEl.remove();
            sourceElement.remove(); // Agora sim deleta da prateleira permanentemente

            playSFX('sfx_bite');
            state.targetCount--; state.eatenCount++;
            state.fruitsEatenTotal++;
            els.bellyCounter.innerText = state.eatenCount;

            // Mostrar notificação de escovar os dentes a cada 6 frutas comidas
            if (state.fruitsEatenTotal % 6 === 0) {
                state.needsTeethBrushing = true;
                els.btnTeeth.style.display = 'flex';
                els.btnTeeth.classList.remove('btn-active');
                els.dirtyTeethGroup.style.display = 'block'; // Mostra sujeira no dente já
            }

            // Fala apenas o numeral ao comer (1, 2, 3)
            playVoice(state.eatenCount.toString());

            if (state.targetCount <= 0) {
                const cheerVoice = Math.random() > 0.5 ? 'delicia' : 'praise_' + (Math.floor(Math.random() * 4) + 1);
                setTimeout(() => playVoice(cheerVoice), 1000);
                setTimeout(() => playSFX(Math.random() > 0.5 ? 'monster_cheer_1' : 'monster_cheer_2'), 1500);
                state.poopMeter++; state.isPlaying = false; setTimeout(startRound, 2500);
            }
        }

        function setupBlenderRound() {
            els.instruction.innerHTML = "Faça uma vitamina!";
            els.instruction.style.display = 'block';

            state.blenderRecipe = {};
            const availableTypes = Object.keys(fruitsData).filter(t => t !== 'limão' && t !== 'pimenta');
            const type1 = availableTypes[Math.floor(Math.random() * availableTypes.length)];
            let type2 = availableTypes[Math.floor(Math.random() * availableTypes.length)];
            while (type2 === type1) type2 = availableTypes[Math.floor(Math.random() * availableTypes.length)];

            state.blenderRecipe[type1] = 1; // Simplificamos para 1 novamente por causa do audio e dificuldade
            state.blenderRecipe[type2] = 1;

            const f1Safe = getFruitName(type1, 1);
            const f2Safe = getFruitName(type2, 1);
            const num1 = (fruitsData[type1].gender === 'm') ? 'num_1' : 'uma';
            const num2 = (fruitsData[type2].gender === 'm') ? 'num_1' : 'uma';

            // Voltamos ao estilo original de audio encadeado que soava nativo antes da fase 8
            playVoice(['modo_vitamina', 'vitamina_de', num1, f1Safe, num2, f2Safe]);

            let itemsHtml = '';
            for (let [t, q] of Object.entries(state.blenderRecipe)) {
                for (let i = 0; i < q; i++) {
                    itemsHtml += `<div class="blender-fruit-req"><svg viewBox="0 0 70 70">${fruitsData[t].shape}</svg></div>`;
                }
            }
            els.blenderItems.innerHTML = itemsHtml;

            const shelfTypes = [type1, type2];
            while (shelfTypes.length < 5) {
                shelfTypes.push(availableTypes[Math.floor(Math.random() * availableTypes.length)]);
            }
            shelfTypes.sort(() => Math.random() - 0.5);

            shelfTypes.forEach(type => {
                const item = document.createElement('div');
                item.className = 'basket-item';
                item.innerHTML = `<svg viewBox="0 0 70 70" style="width:100%; height:100%; pointer-events:none;">${fruitsData[type].shape}</svg>`;
                item.dataset.type = type;
                item.addEventListener('touchstart', handleFruitDragStart, { passive: false });
                item.addEventListener('mousedown', handleFruitDragStart);
                els.shelf.appendChild(item);
            });
        }

        function checkBlenderIngredient(dragEl, sourceElement) {
            const type = dragEl.dataset.type;
            if (state.blenderRecipe[type] && state.blenderRecipe[type] > 0) {
                state.blenderRecipe[type]--;
                playSFX('sfx_bath', 0.3); const tinyFruit = document.createElement('div');
                tinyFruit.className = 'blender-fruit-tiny';
                tinyFruit.innerHTML = `<svg viewBox="0 0 70 70">${fruitsData[type].shape}</svg>`;
                els.blenderItems.appendChild(tinyFruit);

                dragEl.remove(); sourceElement.remove(); // Deleta da prateleira

                const remaining = [];
                for (let [t, q] of Object.entries(state.blenderRecipe)) { if (q > 0) remaining.push(t); }

                if (remaining.length > 0) {
                    // Toca "Falta" + Um/Uma + Fruta (singular)
                    const gender = fruitsData[remaining[0]].gender;
                    const numAudio = (gender === 'm') ? '1' : 'uma'; // Use '1.mp3' para masculino
                    const fSafe = getFruitName(remaining[0], 1); // Singular

                    playVoice(['falta', numAudio, fSafe]);
                }

                if (Object.values(state.blenderRecipe).every(v => v === 0)) finishBlender();
            } else {
                playVoice('erro');
                dragEl.style.transition = '0.3s'; dragEl.style.transform = 'scale(0)';
                sourceElement.style.opacity = '1'; sourceElement.style.pointerEvents = 'auto'; // Devolve pra prateleira
                setTimeout(() => dragEl.remove(), 300);
            }
        }

        function finishBlender() {
            els.instruction.innerHTML = "Misturando...";
            playVoice('misturando');
            els.blenderContainer.classList.add('blender-ready');
            setTimeout(() => {
                els.blenderItems.innerHTML = '';
                els.blenderLiquid.style.opacity = 1;
                state.blenderReady = true;
                els.instruction.innerHTML = "Dê para o monstro!";
                playVoice('da_pra_mim');
            }, 1500);
        }

        function setupBlenderDrag() {
            let startX, startY;
            const wrapper = els.blenderWrapper;
            function onStart(e) {
                if (!state.blenderReady) return;
                e.preventDefault();
                const touch = e.type === 'touchstart' ? e.touches[0] : e;
                startX = touch.clientX; startY = touch.clientY;
                wrapper.style.zIndex = 1000;
                function onMove(me) {
                    const mt = me.type === 'touchmove' ? me.touches[0] : me;
                    wrapper.style.transform = `translate(${mt.clientX - startX}px, ${mt.clientY - startY}px)`;
                    const mRect = els.mouthSensor.getBoundingClientRect();
                    const bRect = wrapper.getBoundingClientRect();
                    if (bRect.left < mRect.right && bRect.right > mRect.left && bRect.top < mRect.bottom) els.monster.classList.add('mouth-open');
                    else els.monster.classList.remove('mouth-open');
                }
                function onEnd() {
                    document.removeEventListener('mousemove', onMove);
                    document.removeEventListener('mouseup', onEnd);
                    document.removeEventListener('touchmove', onMove);
                    document.removeEventListener('touchend', onEnd);
                    const mRect = els.mouthSensor.getBoundingClientRect();
                    const bRect = wrapper.getBoundingClientRect();
                    if (bRect.left < mRect.right && bRect.right > mRect.left && bRect.top < mRect.bottom) feedMonsterJuice();
                    else { wrapper.style.transition = '0.3s'; wrapper.style.transform = 'none'; setTimeout(() => wrapper.style.transition = '', 300); }
                }
                document.addEventListener('mousemove', onMove); document.addEventListener('mouseup', onEnd);
                document.addEventListener('touchmove', onMove, { passive: false }); document.addEventListener('touchend', onEnd);
            }
            els.blenderSensor.addEventListener('mousedown', onStart);
            els.blenderSensor.addEventListener('touchstart', onStart, { passive: false });
        }

        function feedMonsterJuice() {
            state.blenderReady = false;
            els.blenderContainer.classList.remove('blender-ready');
            const mRect = els.mouthSensor.getBoundingClientRect();
            const bRect = els.blenderWrapper.getBoundingClientRect();
            const moveX = (mRect.left + mRect.width / 2 - (bRect.left + bRect.width / 2)) - 20;
            const moveY = (mRect.top + mRect.height / 2 - (bRect.top + bRect.height / 2)) - 40;
            els.blenderWrapper.style.transition = 'transform 1s ease-in-out';
            els.blenderWrapper.style.transform = `translate(${moveX}px, ${moveY}px) rotate(-100deg)`;
            setTimeout(() => {
                els.blenderLiquid.style.opacity = 0;
                playSound('eat');

                playVoice('obrigado_vitamina');

                setTimeout(() => {
                    els.blenderWrapper.style.transition = 'transform 0.5s ease';
                    els.blenderWrapper.style.transform = 'none';
                    state.poopMeter += 2;
                    setTimeout(startRound, 3500);
                }, 1000);
            }, 1000);
        }

        function resetBlender() {
            els.blenderWrapper.style.transform = 'none';
            els.blenderContainer.classList.remove('blender-ready');
            els.blenderLiquid.style.opacity = 0;
            els.blenderItems.innerHTML = '';
        }
    