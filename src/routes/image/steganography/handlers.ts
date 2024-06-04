export type handler = (data: Uint8ClampedArray) => Promise<void>;


async function contrastStretching(data: Uint8ClampedArray, le: number, gt: number) {
    const range = gt - le;
    for (let i = 0; i < data.length; i += 1) {
        if (i % 4 === 3) continue;
        data[i] = Math.floor((data[i] - le) / range * 255) | 0;
    }
}

export const redChannel: handler = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        data[i + 1] = data[i + 2] = data[i];
        data[i + 3] = 255;
    }
}

export const greenChannel: handler = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        data[i] = data[i + 2] = data[i + 1];
        data[i + 3] = 255;
    }
}

export const blueChannel: handler = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        data[i] = data[i + 1] = data[i + 2];
        data[i + 3] = 255;
    }
}

export const alphaChannel: handler = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        data[i] = data[i + 1] = data[i + 2] = data[i + 3];
        data[i + 3] = 255;
    }
}

export type handlerWithInfo = {
    name: string,
    handler: handler
}

export const handlers: Array<handlerWithInfo> = [
    {
        name: 'raw',
        handler: async (data: Uint8ClampedArray) => {
        }
    },
    {
        name: 'contrastStretching',
        handler: async (data: Uint8ClampedArray) => {
            await contrastStretching(data, 0, 64)
        }
    },
    {
        name: 'redChannel',
        handler: redChannel,
    },
    {
        name: 'greenChannel',
        handler: greenChannel,
    },
    {
        name: 'blueChannel',
        handler: blueChannel,
    },
    {
        name: 'alphaChannel',
        handler: alphaChannel,
    }
]
