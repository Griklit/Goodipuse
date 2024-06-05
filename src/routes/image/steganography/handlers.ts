export type handlerFunc = (data: Uint8ClampedArray) => Promise<void>;


export async function contrastStretching(data: Uint8ClampedArray, le: number, gt: number) {
    const range = gt - le;
    for (let i = 0; i < data.length; i += 1) {
        if (i % 4 === 3) continue;
        data[i] = Math.floor((data[i] - le) / range * 255) | 0;
    }
}

export const autoContrastStretching: handlerFunc = async (data: Uint8ClampedArray) => {
    let min = 255, max = 0;
    for (let i = 0; i < data.length; i += 1) {
        if (i % 4 === 3) continue;
        min = Math.min(min, data[i]);
        max = Math.max(max, data[i]);
    }
    await contrastStretching(data, min, max);
}

export const redChannel: handlerFunc = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        data[i + 1] = data[i + 2] = data[i];
        data[i + 3] = 255;
    }
}

export const greenChannel: handlerFunc = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        data[i] = data[i + 2] = data[i + 1];
        data[i + 3] = 255;
    }
}

export const blueChannel: handlerFunc = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        data[i] = data[i + 1] = data[i + 2];
        data[i + 3] = 255;
    }
}

export const alphaChannel: handlerFunc = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        data[i] = data[i + 1] = data[i + 2] = data[i + 3];
        data[i + 3] = 255;
    }
}

export const pureRed: handlerFunc = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        if (data[i] === 255) {
            data[i] = data[i + 1] = data[i + 2] = 255;
        } else {
            data[i] = data[i + 1] = data[i + 2] = 0;
        }
        data[i + 3] = 255;
    }
}

export const pureGreen: handlerFunc = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        if (data[i + 1] === 255) {
            data[i] = data[i + 1] = data[i + 2] = 255;
        } else {
            data[i] = data[i + 1] = data[i + 2] = 0;
        }
        data[i + 3] = 255;
    }
}

export const pureBlue: handlerFunc = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        if (data[i + 2] === 255) {
            data[i] = data[i + 1] = data[i + 2] = 255;
        } else {
            data[i] = data[i + 1] = data[i + 2] = 0;
        }
        data[i + 3] = 255;
    }
}

export const pureAlpha: handlerFunc = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        if (data[i + 3] === 255) {
            data[i] = data[i + 1] = data[i + 2] = 255;
        } else {
            data[i] = data[i + 1] = data[i + 2] = 0;
        }
        data[i + 3] = 255;
    }
}

export const withoutRed: handlerFunc = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        if (data[i] === 0) {
            data[i] = data[i + 1] = data[i + 2] = 255;
        } else {
            data[i] = data[i + 1] = data[i + 2] = 0;
        }
        data[i + 3] = 255;
    }
}

export const withoutGreen: handlerFunc = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        if (data[i + 1] === 0) {
            data[i] = data[i + 1] = data[i + 2] = 255;
        } else {
            data[i] = data[i + 1] = data[i + 2] = 0;
        }
        data[i + 3] = 255;
    }
}

export const withoutBlue: handlerFunc = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        if (data[i + 2] === 0) {
            data[i] = data[i + 1] = data[i + 2] = 255;
        } else {
            data[i] = data[i + 1] = data[i + 2] = 0;
        }
        data[i + 3] = 255;
    }
}

export const withoutAlpha: handlerFunc = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        if (data[i + 3] === 0) {
            data[i] = data[i + 1] = data[i + 2] = 255;
        } else {
            data[i] = data[i + 1] = data[i + 2] = 0;
        }
        data[i + 3] = 255;
    }
}

export const redOdd: handlerFunc = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        if (data[i] % 2 === 1) {
            data[i + 1] = data[i + 2] = data[i] = 255;
        } else {
            data[i] = data[i + 1] = data[i + 2] = 0;
        }
        data[i + 3] = 255;
    }
}
export const greenOdd: handlerFunc = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        if (data[i + 1] % 2 === 1) {
            data[i + 1] = data[i + 2] = data[i] = 255;
        } else {
            data[i] = data[i + 1] = data[i + 2] = 0;
        }
        data[i + 3] = 255;
    }
}
export const blueOdd: handlerFunc = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        if (data[+2] % 2 === 1) {
            data[i + 1] = data[i + 2] = data[i] = 255;
        } else {
            data[i] = data[i + 1] = data[i + 2] = 0;
        }
        data[i + 3] = 255;
    }
}

export const alphaOdd: handlerFunc = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        if (data[i + 3] % 2 === 1) {
            data[i + 1] = data[i + 2] = data[i] = 255;
        } else {
            data[i] = data[i + 1] = data[i + 2] = 0;
        }
        data[i + 3] = 255;
    }
}

export const grayPixel: handlerFunc = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        if (data[i] === data[i + 1] && data[i + 1] === data[i + 2]) {
            data[i] = data[i + 1] = data[i + 2] = 255;
        } else {
            data[i] = data[i + 1] = data[i + 2] = 0;
        }
        data[i + 3] = 255;
    }
}
