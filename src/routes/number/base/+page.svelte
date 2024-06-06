<section>
    {#each baseList as base,i}
        <div class="line">
            <label class="radix" style={commonRadix.has(i+2)?"font-weight: bold;":undefined}
                   for="radix">{(i + 2).toString()}</label>
            <label class="win11-ui-input" style="flex-grow: 1">
                <input class="win11-ui-input" bind:value={base} on:input={()=>flush(i)}/>
            </label>
        </div>
    {/each}
</section>


<script lang="ts">
    import "$lib/styles/win11-ui/input.css"

    let num: bigint | null = 0xffn;
    let isNegative: boolean = false;
    let baseList: Array<string> = Array.from({length: 61}, (_, i) => num ? bitIntToString(num, i + 2) : '');
    let commonRadix: Set<number> = new Set([2, 8, 10, 16]);

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

    function bitIntToString(value: bigint, radix: number): string {
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
        baseList.map((_, index) => {
            let radix = index + 2;
            let ret = num ? bitIntToString(num, radix) : '';
            baseList[index] = isNegative ? '-' + ret : ret;
        });
    }

    function flush(index: number) {
        let radix = index + 2;
        let value = baseList[index];
        if (!value) {
            num = null;
            isNegative = false;
            updateResults();
            return;
        }
        if (value[0] === '-') {
            isNegative = true;
            value = value.slice(1);
        } else {
            isNegative = false;
        }
        if (!value) {
            num = null;
            updateResults();
            return;
        }
        if (value !== bitIntToString(parseBigInt(value, radix), radix)) {
            let backup = num ? bitIntToString(num, radix) : '';
            baseList[index] = isNegative ? '-' + backup : backup;
            return;
        }
        num = parseBigInt(value, radix);
        updateResults();
    }

</script>


<style>
    section {
        display: flex;
        flex-direction: column;
        gap: 0.75rem 0;
    }

    div.line {
        display: flex;
        flex-direction: row;
        gap: 0 0.875rem;
        align-items: baseline;
        width: 100%;
    }

    label.radix {
        text-align: end;
        width: 1.5rem;
    }

    input {
        font-family: var(--font-mono), monospace;
    }
</style>
