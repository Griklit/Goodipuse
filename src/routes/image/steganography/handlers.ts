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

export type handler = {
    name: string,
    func: handlerFunc
}

export const handlers: Array<handler> = [
    {
        name: 'raw',
        func: async (data: Uint8ClampedArray) => {
        }
    },
    {
        name: 'contrastStretching 0~63',
        func: async (data: Uint8ClampedArray) => {
            await contrastStretching(data, 0, 64)
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
    }
]
