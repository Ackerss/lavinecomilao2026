const axios = require('axios');
const fs = require('fs');
const path = require('path');

const apiKey = 'sk_faf68656506ea07f1cf47c790ee62acd01436df683bc36a3';
const voiceId = 'Xb7hH8MSUJpSbSDYk0k2'; // Alice - Notícias
const outputDir = path.join(__dirname, 'mp3');

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const fruitsData = {
    'morango': { p: 'morangos', g: 'm' },
    'banana': { p: 'bananas', g: 'f' },
    'maca': { s: 'maçã', p: 'maçãs', g: 'f' },
    'uva': { p: 'uvas', g: 'f' },
    'laranja': { p: 'laranjas', g: 'f' },
    'pera': { p: 'peras', g: 'f' },
    'melancia': { p: 'melancias', g: 'f' },
    'abacaxi': { p: 'abacaxis', g: 'm' },
    'kiwi': { p: 'kiwis', g: 'm' },
    'mirtilo': { p: 'mirtilos', g: 'm' },
    'cereja': { p: 'cerejas', g: 'f' },
    'pessego': { s: 'pêssego', p: 'pêssegos', g: 'm' }
};

const phrasesToGenerate = {};

for (const [key, data] of Object.entries(fruitsData)) {
    for (let currentCount = 1; currentCount <= 5; currentCount++) {
        let numText = '';
        if (currentCount === 1) numText = data.g === 'm' ? 'um' : 'uma';
        if (currentCount === 2) numText = data.g === 'm' ? 'dois' : 'duas';
        if (currentCount === 3) numText = 'três';
        if (currentCount === 4) numText = 'quatro';
        if (currentCount === 5) numText = 'cinco';

        const fruitName = currentCount === 1 ? (data.s || key) : data.p;
        const text = `Eu quero ${numText} ${fruitName}!`;
        const filename = `req_${currentCount}_${key}`;

        phrasesToGenerate[filename] = text;
    }
}

async function generateTTS(filename, text) {
    const filePath = path.join(outputDir, filename + '.mp3');
    try {
        console.log(`Generating: ${filename} - "${text}"`);

        const response = await axios.post(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
            text: text,
            model_id: 'eleven_multilingual_v2',
            voice_settings: {
                stability: 0.5,
                similarity_boost: 0.75
            }
        }, {
            headers: {
                'xi-api-key': apiKey,
                'Content-Type': 'application/json',
                'accept': 'audio/mpeg'
            },
            responseType: 'arraybuffer'
        });

        fs.writeFileSync(filePath, response.data);
        console.log(`Successfully saved: ${filename}.mp3`);
    } catch (e) {
        console.error(`Error generating ${filename}:`, e.response ? e.response.data.toString() : e.message);
    }
}

async function main() {
    console.log("Starting ElevenLabs Voice Generation for Fluid Sentences...");
    for (const [filename, text] of Object.entries(phrasesToGenerate)) {
        await generateTTS(filename, text);
        // Small delay to avoid API limits
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    console.log("Done generating ElevenLabs audios.");
}

main();
