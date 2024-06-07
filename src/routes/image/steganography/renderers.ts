export type renderer = (data: Uint8ClampedArray) => Promise<void>;


export async function contrastStretching(data: Uint8ClampedArray, le: number, gt: number) {
    const range = gt - le;
    for (let i = 0; i < data.length; i += 1) {
        if (i % 4 === 3) continue;
        data[i] = Math.floor((data[i] - le) / range * 255) | 0;
    }
}

export const autoContrastStretching: renderer = async (data: Uint8ClampedArray) => {
    let min = 255, max = 0;
    for (let i = 0; i < data.length; i += 1) {
        if (i % 4 === 3) continue;
        min = Math.min(min, data[i]);
        max = Math.max(max, data[i]);
    }
    await contrastStretching(data, min, max);
}

export const redChannelAutoContrastStretching: renderer = async (data: Uint8ClampedArray) => {
    let redMin = 255, redMax = 0;
    for (let i = 0; i < data.length; i += 4) {
        let red = data[i];
        data[i + 1] = data[i + 2] = red;
        redMin = Math.min(redMin, red);
        redMax = Math.max(redMax, red);
        data[i + 3] = 255;
    }
    await contrastStretching(data, redMin, redMax);
}

export const greenChannelAutoContrastStretching: renderer = async (data: Uint8ClampedArray) => {
    let greenMin = 255, greenMax = 0;
    for (let i = 0; i < data.length; i += 4) {
        let green = data[i + 1];
        data[i] = data[i + 2] = green;
        greenMin = Math.min(greenMin, green);
        greenMax = Math.max(greenMax, green);
        data[i + 3] = 255;
    }
    await contrastStretching(data, greenMin, greenMax);
}

export const blueChannelAutoContrastStretching: renderer = async (data: Uint8ClampedArray) => {
    let blueMin = 255, blueMax = 0;
    for (let i = 0; i < data.length; i += 4) {
        let blue = data[i + 2];
        data[i] = data[i + 1] = blue;
        blueMin = Math.min(blueMin, blue);
        blueMax = Math.max(blueMax, blue);
        data[i + 3] = 255;
    }
    await contrastStretching(data, blueMin, blueMax);
}

export const alphaChannelAutoContrastStretching: renderer = async (data: Uint8ClampedArray) => {
    let alphaMin = 255, alphaMax = 0;
    for (let i = 0; i < data.length; i += 4) {
        let alpha = data[i + 3];
        data[i] = data[i + 1] = data[i + 2] = alpha;
        alphaMin = Math.min(alphaMin, alpha);
        alphaMax = Math.max(alphaMax, alpha);
        data[i + 3] = 255;
    }
    await contrastStretching(data, alphaMin, alphaMax);
}

// export const redChannel: renderer = async (data: Uint8ClampedArray) => {
//     for (let i = 0; i < data.length; i += 4) {
//         data[i + 1] = data[i + 2] = data[i];
//         data[i + 3] = 255;
//     }
// }
//
// export const greenChannel: renderer = async (data: Uint8ClampedArray) => {
//     for (let i = 0; i < data.length; i += 4) {
//         data[i] = data[i + 2] = data[i + 1];
//         data[i + 3] = 255;
//     }
// }
//
// export const blueChannel: renderer = async (data: Uint8ClampedArray) => {
//     for (let i = 0; i < data.length; i += 4) {
//         data[i] = data[i + 1] = data[i + 2];
//         data[i + 3] = 255;
//     }
// }
//
// export const alphaChannel: renderer = async (data: Uint8ClampedArray) => {
//     for (let i = 0; i < data.length; i += 4) {
//         data[i] = data[i + 1] = data[i + 2] = data[i + 3];
//         data[i + 3] = 255;
//     }
// }

export const pureRed: renderer = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        if (data[i] === 255) {
            data[i] = data[i + 1] = data[i + 2] = 255;
        } else {
            data[i] = data[i + 1] = data[i + 2] = 0;
        }
        data[i + 3] = 255;
    }
}

export const pureGreen: renderer = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        if (data[i + 1] === 255) {
            data[i] = data[i + 1] = data[i + 2] = 255;
        } else {
            data[i] = data[i + 1] = data[i + 2] = 0;
        }
        data[i + 3] = 255;
    }
}

export const pureBlue: renderer = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        if (data[i + 2] === 255) {
            data[i] = data[i + 1] = data[i + 2] = 255;
        } else {
            data[i] = data[i + 1] = data[i + 2] = 0;
        }
        data[i + 3] = 255;
    }
}

export const pureAlpha: renderer = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        if (data[i + 3] === 255) {
            data[i] = data[i + 1] = data[i + 2] = 255;
        } else {
            data[i] = data[i + 1] = data[i + 2] = 0;
        }
        data[i + 3] = 255;
    }
}

export const withoutRed: renderer = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        if (data[i] === 0) {
            data[i] = data[i + 1] = data[i + 2] = 255;
        } else {
            data[i] = data[i + 1] = data[i + 2] = 0;
        }
        data[i + 3] = 255;
    }
}

export const withoutGreen: renderer = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        if (data[i + 1] === 0) {
            data[i] = data[i + 1] = data[i + 2] = 255;
        } else {
            data[i] = data[i + 1] = data[i + 2] = 0;
        }
        data[i + 3] = 255;
    }
}

export const withoutBlue: renderer = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        if (data[i + 2] === 0) {
            data[i] = data[i + 1] = data[i + 2] = 255;
        } else {
            data[i] = data[i + 1] = data[i + 2] = 0;
        }
        data[i + 3] = 255;
    }
}

export const withoutAlpha: renderer = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        if (data[i + 3] === 0) {
            data[i] = data[i + 1] = data[i + 2] = 255;
        } else {
            data[i] = data[i + 1] = data[i + 2] = 0;
        }
        data[i + 3] = 255;
    }
}

export const redOdd: renderer = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        if (data[i] % 2 === 1) {
            data[i + 1] = data[i + 2] = data[i] = 255;
        } else {
            data[i] = data[i + 1] = data[i + 2] = 0;
        }
        data[i + 3] = 255;
    }
}
export const greenOdd: renderer = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        if (data[i + 1] % 2 === 1) {
            data[i + 1] = data[i + 2] = data[i] = 255;
        } else {
            data[i] = data[i + 1] = data[i + 2] = 0;
        }
        data[i + 3] = 255;
    }
}
export const blueOdd: renderer = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        if (data[+2] % 2 === 1) {
            data[i + 1] = data[i + 2] = data[i] = 255;
        } else {
            data[i] = data[i + 1] = data[i + 2] = 0;
        }
        data[i + 3] = 255;
    }
}

export const alphaOdd: renderer = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        if (data[i + 3] % 2 === 1) {
            data[i + 1] = data[i + 2] = data[i] = 255;
        } else {
            data[i] = data[i + 1] = data[i + 2] = 0;
        }
        data[i + 3] = 255;
    }
}

export const grayPixel: renderer = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        if (data[i] === data[i + 1] && data[i + 1] === data[i + 2]) {
            data[i] = data[i + 1] = data[i + 2] = 255;
        } else {
            data[i] = data[i + 1] = data[i + 2] = 0;
        }
        data[i + 3] = 255;
    }
}

export async function hash(data: Uint8ClampedArray, a: number, b: number) {
    for (let i = 0; i < data.length; i += 1) {
        data[i] = (a * data[i] + b) % 255;
    }
}


export const noiseBit4: renderer = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 1) {
        data[i] = data[i] % 16 * 16;
    }
}

