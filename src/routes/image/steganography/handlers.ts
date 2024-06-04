export type handlerFunc = (data: Uint8ClampedArray) => Promise<void>;


async function contrastStretching(data: Uint8ClampedArray, le: number, gt: number) {
    const range = gt - le;
    for (let i = 0; i < data.length; i += 1) {
        if (i % 4 === 3) continue;
        data[i] = Math.floor((data[i] - le) / range * 255) | 0;
    }
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

export const fullRed: handlerFunc = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        if (data[i] === 255) {
            data[i] = data[i + 1] = data[i + 2] = 255;
        } else {
            data[i] = data[i + 1] = data[i + 2] = 0;
        }
        data[i + 3] = 255;
    }
}

export const notRed: handlerFunc = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        if (data[i] === 0) {
            data[i] = data[i + 1] = data[i + 2] = 255;
        } else {
            data[i] = data[i + 1] = data[i + 2] = 0;
        }
        data[i + 3] = 255;
    }
}

export const fullGreen: handlerFunc = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        if (data[i + 1] === 255) {
            data[i] = data[i + 1] = data[i + 2] = 255;
        } else {
            data[i] = data[i + 1] = data[i + 2] = 0;
        }
        data[i + 3] = 255;
    }
}

export const notGreen: handlerFunc = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        if (data[i + 1] === 0) {
            data[i] = data[i + 1] = data[i + 2] = 255;
        } else {
            data[i] = data[i + 1] = data[i + 2] = 0;
        }
        data[i + 3] = 255;
    }
}

export const fullBlue: handlerFunc = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        if (data[i + 2] === 255) {
            data[i] = data[i + 1] = data[i + 2] = 255;
        } else {
            data[i] = data[i + 1] = data[i + 2] = 0;
        }
        data[i + 3] = 255;
    }
}

export const notBlue: handlerFunc = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        if (data[i + 2] === 0) {
            data[i] = data[i + 1] = data[i + 2] = 255;
        } else {
            data[i] = data[i + 1] = data[i + 2] = 0;
        }
        data[i + 3] = 255;
    }
}

export const fullAlpha: handlerFunc = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        if (data[i + 3] === 255) {
            data[i] = data[i + 1] = data[i + 2] = 255;
        } else {
            data[i] = data[i + 1] = data[i + 2] = 0;
        }
        data[i + 3] = 255;
    }
}

export const notAlpha: handlerFunc = async (data: Uint8ClampedArray) => {
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


export type handler = {
    name: string,
    func: handlerFunc
}

export const handlers: Array<handler> = [
    {
        name: 'raw',
        func: async (_) => {
        }
    },
    {
        name: 'contrastStretching 0~31',
        func: async (data: Uint8ClampedArray) => {
            await contrastStretching(data, 0, 32)
        }
    },
    {
        name: 'contrastStretching 32~63',
        func: async (data: Uint8ClampedArray) => {
            await contrastStretching(data, 32, 64)
        }
    },
    {
        name: 'contrastStretching 64~95',
        func: async (data: Uint8ClampedArray) => {
            await contrastStretching(data, 64, 96)
        }
    },
    {
        name: 'contrastStretching 96~127',
        func: async (data: Uint8ClampedArray) => {
            await contrastStretching(data, 96, 128)
        }
    },
    {
        name: 'contrastStretching 128~159',
        func: async (data: Uint8ClampedArray) => {
            await contrastStretching(data, 128, 160)
        }
    },
    {
        name: 'contrastStretching 160~191',
        func: async (data: Uint8ClampedArray) => {
            await contrastStretching(data, 160, 192)
        }
    },
    {
        name: 'contrastStretching 192~223',
        func: async (data: Uint8ClampedArray) => {
            await contrastStretching(data, 192, 224)
        }
    },
    {
        name: 'contrastStretching 224~255',
        func: async (data: Uint8ClampedArray) => {
            await contrastStretching(data, 224, 256)
        }
    },
    {
        name: 'redChannel',
        func: redChannel,
    },
    {
        name: 'greenChannel',
        func: greenChannel,
    },
    {
        name: 'blueChannel',
        func: blueChannel,
    },
    {
        name: 'alphaChannel',
        func: alphaChannel,
    },
    {
        name: 'fullRed',
        func: fullRed,
    },
    {
        name: 'notRed',
        func: notRed,
    },
    {
        name: 'fullGreen',
        func: fullGreen,
    },
    {
        name: 'notGreen',
        func: notGreen,
    },
    {
        name: 'fullBlue',
        func: fullBlue,
    },
    {
        name: 'notBlue',
        func: notBlue,
    },
    {
        name: 'fullAlpha',
        func: fullAlpha,
    },
    {
        name: 'notAlpha',
        func: notAlpha,
    },
    {
        name: 'redOdd',
        func: redOdd,
    },
    {
        name: 'greenOdd',
        func: greenOdd,
    },
    {
        name: 'blueOdd',
        func: blueOdd,
    },
    {
        name: 'grayPixel',
        func: grayPixel,
    },
]
