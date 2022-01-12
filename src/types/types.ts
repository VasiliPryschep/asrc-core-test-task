export type PixabayDataType = {
    total: number,
    totalHits: number,
    hits: Array<HitType>
}

export type HitType = {
    id: number,
    previewURL: string,
    previewWidth: number,
    previewHeight: number,
    webformatURL: string,
    webformatWidth: number,
    webformatHeight: number,
    imageURL: string,
    imageWidth: number,
    imageHeight: number,
    largeImageURL: string,
    tags: string
}