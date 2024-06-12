<svelte:head>
    <title>{$_('title') + ' | ' + $_('module.encoding.morse.title')}</title>
    <meta name="description" content={$_('module.encoding.morse.description')}/>
</svelte:head>

<section>
    <label class="win11-ui-textarea text">
        <span class="win11-ui-input">{$_('module.encoding.morse.cipher_text')}</span>
        <textarea class="win11-ui-textarea" bind:value={cipherText} on:input={decode}
                  placeholder="--. .- .-.. .-.. --- --..--   --. --- --- -.. .. .--. ..- ... . -.-.--"/>
    </label>
    <!--{$_('module.encoding.morse.cipher_text')}-->
    <!--<textarea class="text" bind:value={cipherText} on:input={decode}-->
    <!--          placeholder="&#45;&#45;· ·- ·-·· ·-·· -&#45;&#45; &#45;&#45;··&#45;&#45;   &#45;&#45;· -&#45;&#45; -&#45;&#45; -·· ·· ·&#45;&#45;· ··- ··· · -·-·&#45;&#45;"/>-->
    <div class="option">
        <div class="win11-ui-input inline mini">
            <span class="win11-ui-input inline mini">{$_('module.encoding.morse.dit')}</span>
            <label class="win11-ui-input inline mini">
                <input class="win11-ui-input inline mini" bind:value={dit}/>
            </label>
        </div>
        <div class="win11-ui-input inline mini">
            <span class="win11-ui-input inline mini">{$_('module.encoding.morse.dah')}</span>
            <label class="win11-ui-input inline mini">
                <input class="win11-ui-input inline mini" bind:value={dah}/>
            </label>
        </div>
        <div class="win11-ui-input inline mini">
            <span class="win11-ui-input inline mini">{$_('module.encoding.morse.letter_space')}</span>
            <label class="win11-ui-input inline mini">
                <input class="win11-ui-input inline mini" bind:value={letterSpace}/>
            </label>
        </div>
        <div class="win11-ui-input inline mini">
            <span class="win11-ui-input inline mini">{$_('module.encoding.morse.word_space')}</span>
            <label class="win11-ui-input inline mini">
                <input class="win11-ui-input inline mini" bind:value={wordSpace}/>
            </label>
        </div>
        <!--{$_('module.encoding.morse.dit')}-->
        <!--<input bind:value={dit}/>-->
        <!--{$_('module.encoding.morse.dah')}-->
        <!--<input bind:value={dah}/>-->
        <!--{$_('module.encoding.morse.letter_space')}-->
        <!--<input bind:value={letterSpace}/>-->
        <!--{$_('module.encoding.morse.word_space')}-->
        <!--<input bind:value={wordSpace}/>-->
    </div>
    <label class="win11-ui-textarea text">
        <span class="win11-ui-input">{$_('module.encoding.morse.plain_text')}</span>
        <textarea class="win11-ui-textarea" bind:value={plainText} on:input={encode}
                  placeholder="GALLO, GOODIPUSE!"/>
    </label>
    <!--{$_('module.encoding.morse.plain_text')}-->
    <!--<textarea class="text" bind:value={plainText} on:input={encode}-->
    <!--          placeholder="GALLO, GOODIPUSE!"/>-->
</section>

<script lang="ts">
    import {_} from "svelte-i18n";

    import '$lib/styles/win11-ui/input.css'
    import '$lib/styles/win11-ui/textarea.css'

    let morseMap = new Map<string, string>([
        [".-", "A"], ["-...", "B"], ["-.-.", "C"], ["-..", "D"], [".", "E"], ["..-.", "F"], ["--.", "G"],
        ["....", "H"], ["..", "I"], [".---", "J"], ["-.-", "K"], [".-..", "L"], ["--", "M"], ["-.", "N"],
        ["---", "O"], [".--.", "P"], ["--.-", "Q"], [".-.", "R"], ["...", "S"], ["-", "T"],
        ["..-", "U"], ["...-", "V"], [".--", "W"], ["-..-", "X"], ["-.--", "Y"], ["--..", "Z"],

        [".----", "1"], ["..---", "2"], ["...--", "3"], ["....-", "4"], [".....", "5"],
        ["-....", "6"], ["--...", "7"], ["---..", "8"], ["----.", "9"], ["-----", "0"],

        [".-.-.-", "."], ["---...", ":"], ["--..--", ","], ["-.-.-.", ";"], ["..--..", "?"], ["-...-", "="],
        [".----.", "'"], ["-..-.", "/"], ["-.-.--", "!"], ["-....-", "-"], ["..--.-", "_"], [".-..-.", "\""],
        ["-.--.", "("], ["-.--.-", ")"], ["...-..-", "$"], [".-...", "&"], [".--.-.", "@"], [".-.-.", "+"],

        // [".-.-.-.-.-", "[AAAAA]"], [".-.-.-", "[AAA]"], ["........", "[HH]"], [".-.-.", "[AR]"],
        // [".-...", "[AS]"], ["-----", "[TTTTT]"], ["..--..", "[IMI]"], ["...-.-", "[SK]"], ["-...-", "[BT]"],
        // ["...---...", "[SOS]"],
    ]);

    let morseMapReverse = new Map<string, string>(
        Array.from(morseMap).map(([key, value]) => [value, key])
    );


    let cipherText: string = "";
    let plainText: string = "";

    let dit = ".";
    let dah = "-";
    let letterSpace = " ";
    let wordSpace = "   ";


    function replace(str: string, search: string, replace: string) {
        return str.split(search).join(replace);
    }

    function decode() {
        let words = cipherText.split(wordSpace);
        plainText = words.map((word) => {
            return word.split(letterSpace).map((letter) => {
                let letterR = replace(replace(letter, dit, '.'), dah, '-');
                return morseMap.get(letterR) || letter;
            }).join('');
        }).join(' ');
    }

    function encode() {
        let words = plainText.split(' ');
        cipherText = words.map((word) => {
            return word.split('').map((letter) => {
                let result = morseMapReverse.get(letter.toUpperCase()) || letter;
                return replace(replace(result, '.', dit), '-', dah);
            }).join(letterSpace);
        }).join(wordSpace);
    }


</script>

<style>
    section {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 100%;
    }

    label.text {
        width: 100%;
        flex-grow: 1;
    }
</style>
