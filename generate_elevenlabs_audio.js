const axios = require('axios');
const fs = require('fs');
const path = require('path');

const apiKey = 'sk_faf68656506ea07f1cf47c790ee62acd01436df683bc36a3';
const voiceId = 'Xb7hH8MSUJpSbSDYk0k2'; // Alice - Notícias
const outputDir = path.join(__dirname, 'mp3');

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const phrases = {
    // English Colors
    'color_red': 'Red!',
    'color_blue': 'Blue!',
    'color_green': 'Green!',
    'color_yellow': 'Yell-low',
    'color_purple': 'Purple!',
    'color_orange': 'Orange!',

    // PT-BR Instructions
    'instr_teeth': 'Agora ele precisa escovar os dentes!',
    'instr_bath': 'Hora do banho! Vamos limpar essa sujeira!',
    'instr_blender': 'Vamos preparar uma vitamina deliciosa?',
    'instr_heart': 'O monstrinho adora carinho!',
    'instr_hide_seek': 'Onde estão as frutinhas?',
    'instr_play': 'Clique em JOGAR para começar!',
    'instr_feed': 'Arraste as frutas para a boca do monstro!',
    'instr_paint': 'Arraste os potinhos para pintar o monstrinho!',

    // New Praise Phrases
    'praise_1': 'Muito bem!',
    'praise_2': 'Isso aí!',
    'praise_3': 'Incrível!',
    'praise_4': 'Você conseguiu!',

    // Numbers
    'num_1': 'uma', 'num_2': 'duas', 'num_3': 'três',
    'num_4': 'quatro', 'num_5': 'cinco', 'num_6': 'seis',
    'num_7': 'sete', 'num_8': 'oito', 'num_9': 'nove', 'num_10': 'dez',

    // Fruits 
    'fruit_morango': 'morango', 'fruit_morangos': 'morangos',
    'fruit_banana': 'banana', 'fruit_bananas': 'bananas',
    'fruit_maca': 'maçã', 'fruit_macas': 'maçãs',
    'fruit_uva': 'uva', 'fruit_uvas': 'uvas',
    'fruit_laranja': 'laranja', 'fruit_laranjas': 'laranjas',
    'fruit_pera': 'pera', 'fruit_peras': 'peras',
    'fruit_melancia': 'melancia', 'fruit_melancias': 'melancias',
    'fruit_abacaxi': 'abacaxi', 'fruit_abacaxis': 'abacaxis',
    'fruit_limao': 'limão', 'fruit_limoes': 'limões',
    // New Fruits
    'fruit_kiwi': 'kiwi', 'fruit_kiwis': 'kiwis',
    'fruit_mirtilo': 'mirtilo', 'fruit_mirtilos': 'mirtilos',
    'fruit_cereja': 'cereja', 'fruit_cerejas': 'cerejas',
    'fruit_pessego': 'pêssego', 'fruit_pessegos': 'pêssegos',

    'want_more': 'Eu quero...',
    'want_blender': 'Vitamina de...'
};

async function generateTTS(filename, text) {
    const filePath = path.join(outputDir, filename + '.mp3');
    try {
        console.log(`Generating: ${filename} - "${text}"`);
        const isEnglish = filename.startsWith('color_');
        // Setting model ID. For multi-lingual, we use eleven_multilingual_v2

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
    console.log("Starting ElevenLabs Voice Generation...");
    // Just sequentially request
    for (const [filename, text] of Object.entries(phrases)) {
        await generateTTS(filename, text);
        // Add a small delay to avoid rate limits
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    console.log("Done generating ElevenLabs audios.");
}

main();
