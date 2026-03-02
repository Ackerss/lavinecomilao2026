const axios = require('axios');
const fs = require('fs');
const path = require('path');

const apiKey = 'sk_faf68656506ea07f1cf47c790ee62acd01436df683bc36a3';
const voiceId = 'Xb7hH8MSUJpSbSDYk0k2'; // Alice - Notícias
const outputDir = path.join(__dirname, 'mp3');

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const phrasesToFix = {
    // Fruits 
    'fruit_kiwi': 'kiwi', 'fruit_kiwis': 'kiwis',
    'kiwi': 'kiwi', 'kiwis': 'kiwis',
    'req_1_kiwi': 'Eu quero um kiwi!',
    'req_2_kiwi': 'Eu quero dois kiwis!',
    'req_3_kiwi': 'Eu quero três kiwis!',
    'req_4_kiwi': 'Eu quero quatro kiwis!',
    'req_5_kiwi': 'Eu quero cinco kiwis!',

    'fruit_cereja': 'cereja', 'fruit_cerejas': 'cerejas',
    'cereja': 'cereja', 'cerejas': 'cerejas',
    'req_1_cereja': 'Eu quero uma cereja!',
    'req_2_cereja': 'Eu quero duas cerejas!',
    'req_3_cereja': 'Eu quero três cerejas!',
    'req_4_cereja': 'Eu quero quatro cerejas!',
    'req_5_cereja': 'Eu quero cinco cerejas!',

    // Feedbacks/Others
    'erro': 'Oops! Essa fruta não!',
    'praise_1': 'Muito bem!',
    'praise_2': 'Isso aí!',
    'praise_3': 'Incrível!',
    'praise_4': 'Você conseguiu!',
    'delicia': 'Que delícia!',
    'misturando': 'Misturando...',
    'da_pra_mim': 'Dê para o monstro!',
    'falta': 'Ainda falta',
    'e': 'e',
    'num_1': 'uma', 'num_2': 'duas', 'num_3': 'três', // Regenerate numbers just in case
    'num_4': 'quatro', 'num_5': 'cinco', 'num_6': 'seis'
};

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
    console.log("Starting script to regenerate bugged MP3s...");
    for (const [filename, text] of Object.entries(phrasesToFix)) {
        await generateTTS(filename, text);
        await new Promise(resolve => setTimeout(resolve, 800)); // Be careful with API limits
    }
    console.log("Done fixing ElevenLabs audios!");
}

main();
