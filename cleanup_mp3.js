const fs = require('fs');
const path = require('path');

const mp3Dir = path.join(__dirname, 'mp3');

// Whitelist configuration exactly based on the index.html usage
const whitelist = new Set([
    // Numbers
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
    'num_1', 'uma', 'num_2', 'duas', 'num_3', 'num_4', 'num_5', 'num_6',

    // Instructions & Feedbacks
    'instr_teeth', 'instr_paint', 'instr_hide_seek', 'instr_bath', 'instr_play',
    'modo_banho', 'instrucao_banho', 'quero_carinho', 'instrucao_carinho',
    'erro', 'falta', 'delicia', 'praise_1', 'praise_2', 'praise_3', 'praise_4',

    // Game Modes (Blender)
    'modo_vitamina', 'vitamina_de', 'e', 'misturando', 'da_pra_mim', 'obrigado_vitamina',

    // Interactions & State
    'alivio', 'dor_barriga', 'pimenta_fogo', 'limao_azedo',

    // Character specific
    'carinho_1', 'carinho_2', 'carinho_3', 'carinho_4',
    'banho_1', 'banho_2', 'banho_3', 'banho_4', 'banho_5', 'banho_6',

    // SFX (loaded via playSFX or similar)
    'sfx_bath', 'sfx_bite', 'sfx_blender', 'sfx_burp', 'sfx_gargle', 'sfx_sneeze',
    'color_red', 'color_blue', 'color_green', 'color_yellow', 'color_purple', 'color_orange',
    'monster_cheer_1', 'monster_cheer_2'
]);

// Fruits processing logic from index.html
const rawKeys = ['morango', 'banana', 'maçã', 'uva', 'laranja', 'pera', 'melancia',
    'abacaxi', 'limão', 'pimenta', 'kiwi', 'mirtilo', 'cereja', 'pêssego'];

function getSafeName(rawType) {
    return rawType.replace(/[ãáàâ]/g, "a").replace("ç", "c").replace("ê", "e").replace("õ", "o");
}

rawKeys.forEach(key => {
    const safeName = getSafeName(key);
    whitelist.add("fruit_" + safeName);
    for (let i = 1; i <= 5; i++) {
        whitelist.add("req_" + i + "_" + safeName);
    }
});

let deletedCount = 0;
let keptCount = 0;

fs.readdirSync(mp3Dir).forEach(file => {
    if (file.endsWith('.mp3')) {
        const basename = path.basename(file, '.mp3');
        if (!whitelist.has(basename)) {
            console.log("Deletando NÃO UTILIZADO: " + file);
            fs.unlinkSync(path.join(mp3Dir, file));
            deletedCount++;
        } else {
            keptCount++;
        }
    }
});

console.log(`\nLimpeza concluída! Deletados: ${deletedCount} | Mantidos: ${keptCount}`);
