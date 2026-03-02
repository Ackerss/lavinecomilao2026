const { EdgeTTS } = require('node-edge-tts');
const { execSync } = require('child_process');
const ffmpegPath = require('ffmpeg-static');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, 'mp3');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

// Monster Voice (Game Lav +40Hz +10%)
// We use pt-BR-AntonioNeural as a good base for a male game voice, modified as requested.
const monsterVoice = 'pt-BR-AntonioNeural';
// In Edge TTS, you can apply SSML via the text if needed, but since we are generating static files,
// we can wrap our text in SSML to achieve Pitch +40Hz and Rate +10%

const monsterPhrases = {
    'monster_eat_1': 'Nhac nhac nhac!',
    'monster_eat_2': 'Delícia!',
    'monster_eat_3': 'Hummm... minha barriga tá cheia!',
    'monster_sneeze': 'Aatchim! Mudei de cor!',
    'monster_want_more': 'Quero mais frutinhas!',
    'monster_bath_laugh': 'Hahaha, cócegas!',

    // New exact keys needed for index.html:
    'pimenta_fogo': 'Aaaah! Socorro, muito picante!',
    'limao_azedo': 'Iiiiiish! Que azedo!',
    'erro': 'Bleg!',
    'monster_cheer_1': 'Uhuul!',
    'monster_cheer_2': 'Ihuu!'
};

function trimSilence(filePath) {
    const tempPath = filePath.replace('.mp3', '_trimmed.mp3');
    try {
        console.log(`Trimming ${filePath}...`);
        execSync(
            `"${ffmpegPath}" -y -i "${filePath}" -af "silenceremove=start_periods=1:start_duration=0:start_threshold=-40dB,areverse,silenceremove=start_periods=1:start_duration=0:start_threshold=-40dB,areverse" "${tempPath}"`,
            { stdio: 'pipe' }
        );
        fs.copyFileSync(tempPath, filePath);
        fs.unlinkSync(tempPath);
    } catch (e) {
        console.error("Error trimming audio:", e.message);
    }
}

async function generateMonsterLine(filename, text) {
    const filePath = path.join(outputDir, filename + '.mp3');
    const tts = new EdgeTTS({
        voice: monsterVoice,
        lang: 'pt-BR',
        outputFormat: 'audio-24khz-48kbitrate-mono-mp3'
    });

    const ssml = `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="pt-BR"><voice name="${monsterVoice}"><prosody rate="+10%" pitch="+40Hz">${text}</prosody></voice></speak>`;

    console.log(`Generating: ${filename}`);
    await tts.ttsPromise(ssml, filePath);
    trimSilence(filePath);
}

async function main() {
    console.log("Starting Monster Voice Generation...");
    for (const [filename, text] of Object.entries(monsterPhrases)) {
        await generateMonsterLine(filename, text);
    }
    console.log("Done.");
}

main();
