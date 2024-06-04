export type handler = (data: Uint8ClampedArray) => Promise<void>;


async function contrastStretching(data: Uint8ClampedArray, min: number, max: number) {
    let a = 255 / (max - min);
    let b = -min * a;
    for (let i = 0; i < data.length; i += 4) {
        data[i] = a * data[i] + b;
        data[i + 1] = a * data[i + 1] + b;
        data[i + 2] = a * data[i + 2] + b;
    }

}

export const redChannel: handler = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        data[i + 1] = data[i + 2] = data[i];
    }
}

export const greenChannel: handler = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        data[i] = data[i + 2] = data[i + 1];
    }
}

export const blueChannel: handler = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        data[i] = data[i + 1] = data[i + 2];
    }
}

export const alphaChannel: handler = async (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        data[i] = data[i + 1] = data[i + 2] = data[i + 3];
    }
}

export type handlerWithInfo = {
    name: string,
    handler: handler
}

export const handlers: Array<handlerWithInfo> = [
    {
        name: 'redChannel',
        handler: redChannel,
    }, {
        name: 'greenChannel',
        handler: greenChannel,
    }, {
        name: 'blueChannel',
        handler: blueChannel,
    }, {
        name: 'alphaChannel',
        handler: alphaChannel,
    }
]
