const axios = require('axios');

async function getVoices() {
    try {
        const response = await axios.get('https://api.elevenlabs.io/v1/voices', {
            headers: {
                'xi-api-key': 'sk_faf68656506ea07f1cf47c790ee62acd01436df683bc36a3'
            }
        });

        const voices = response.data.voices;
        for (const voice of voices) {
            if (voice.name.toLowerCase().includes('alice')) {
                console.log(`Found Alice: ${voice.name} - ID: ${voice.voice_id}`);
            }
        }
        console.log("Total voices fetched. Search completed.");
    } catch (e) {
        console.error("Error fetching voices:", e.message);
    }
}

getVoices();
