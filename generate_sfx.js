require('dotenv').config();
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const API_KEY = process.env.ELEVENLABS_API_KEY || 'sk_faf68656506ea07f1cf47c790ee62acd01436df683bc36a3';
const OUTPUT_DIR = path.join(__dirname, 'mp3');

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
}

const sfxToGenerate = [
    { text: "crunchy bite into a fresh apple", name: "sfx_bite" },
    { text: "blender smoothly mixing fruits", name: "sfx_blender" },
    { text: "water splashing and soap bubbles popping", name: "sfx_bath" },
    { text: "short funny cartoon burp", name: "sfx_burp" },
    { text: "gargling water in mouth and spitting", name: "sfx_gargle" },
    { text: "a comical cartoon sneeze", name: "sfx_sneeze" }
];

async function generateSFX() {
    console.log("Starting SFX generation via ElevenLabs API...");

    for (const sfx of sfxToGenerate) {
        const filePath = path.join(OUTPUT_DIR, `${sfx.name}.mp3`);
        if (fs.existsSync(filePath)) {
            console.log(`[SKIP] SFX already exists: ${sfx.name}.mp3`);
            continue;
        }

        try {
            console.log(`Generating SFX: ${sfx.name} ("${sfx.text}")`);
            const response = await axios({
                method: 'post',
                url: 'https://api.elevenlabs.io/v1/sound-generation',
                headers: {
                    'Accept': 'audio/mpeg',
                    'xi-api-key': API_KEY,
                    'Content-Type': 'application/json'
                },
                data: {
                    text: sfx.text,
                    duration_seconds: 2 // Short duration for SFX
                },
                responseType: 'arraybuffer'
            });

            fs.writeFileSync(filePath, response.data);
            console.log(`[OK] Saved ${sfx.name}.mp3`);
        } catch (error) {
            console.error(`[ERROR] Failed to generate ${sfx.name}:`, error.message);
            if (error.response && error.response.data) {
                console.error("  Response:", error.response.data.toString());
            }
        }
    }
}

generateSFX().then(() => {
    console.log("SFX generation complete.");
});
