<section>
    {#each baseList as base,i}
        <div>
            <h1>{(i + 2).toString()}</h1>
            <input bind:value={base} on:input={()=>aaa(i)}/>
        </div>
    {/each}
</section>


<script lang="ts">
    let num: bigint = 0xffn;
    let baseList: Array<string> = Array.from({length: 61}, (_, i) => BitIntToString(num, i + 2));

    function charToNumber(char: string, caseSensitive: boolean = false) {
        let code = char.charCodeAt(0);
        if (code >= 0x30 && code <= 0x39) {
            return code - 0x30;
        } else if (code >= 0x61 && code <= 0x7a) {
            return code - 0x61 + 10;
        } else if (code >= 0x41 && code <= 0x5a) {
            return caseSensitive ? code - 0x41 + 10 : code - 0x41 + 36;
        } else {
            throw new Error('Invalid character');
        }
    }

    function numberToChar(number: number, caseSensitive: boolean = false) {
        if (number >= 0 && number <= 9) {
            return String.fromCharCode(number + 0x30);
        } else if (number >= 10 && number <= 35) {
            return String.fromCharCode(number + 0x61 - 10);
        } else if (number >= 36 && number <= 61) {
            return caseSensitive ? String.fromCharCode(number + 0x41 - 10) : String.fromCharCode(number + 0x41 - 36);
        } else {
            throw new Error('Invalid number');
        }
    }

    function BitIntToString(value: bigint, radix: number): string {
        let caseSensitive = radix <= 36;
        let result = '';
        while (value > 0n) {
            result = numberToChar(Number(value % BigInt(radix)), caseSensitive) + result;
            value = value / BigInt(radix);
        }
        return result;
    }

    function parseBigInt(value: string, radix: number): bigint {
        let caseSensitive = radix <= 36;
        let num = BigInt(0);
        for (let i = 0; i < value.length; i++) {
            num = num * BigInt(radix) + BigInt(charToNumber(value[i], caseSensitive));
        }
        return num
    }


    function updateResults() {
        baseList.map((_, key) => {
            baseList[key] = BitIntToString(num, key + 2);
        });
    }

    function aaa(key: number) {
        let value = baseList[key];
        if (!value) return;
        num = parseBigInt(value, key + 2);
        updateResults();
    }

</script>


<style>
    section {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    div {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
    }

    h1 {
        width: 1.5rem;
        text-align: right;
        align-content: center;
    }

    input {
        font-family: var(--font-mono), monospace;
        flex-grow: 1;
    }
</style>
