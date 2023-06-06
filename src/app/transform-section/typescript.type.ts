interface TransformerMessage {
    heading: string[];
    message: string;
    redirectLink: string[];
}

type BehindImages = string[];

interface SwiperData {
    title: string;
    image: string;
}

interface TransformSectionData {
    transformerMessage: TransformerMessage;
    swiperData: SwiperData[];
    behindImages:BehindImages
}

export{
    TransformerMessage,
    BehindImages,
    SwiperData,
    TransformSectionData
}