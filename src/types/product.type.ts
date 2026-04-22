import { TMaker } from "./maker.type";

export type TProduct = {
  id: number;
  title: string;
  category: string;
  subTitle: string;
  servicesTitle: string,
  servicesDescription: string;
  description: string;
  questions: TQuestion[];
  kinds: string[];
  merit: string[];
  tips: string[];
  purchaseeProductTitle: string;
  cameraImagesGallery: TImage[]
  webImagesGallery: TImage[]
  makers: TMaker[]
}

export type TNewProduct = {
  id: number;
  title: string;
  category: string;
  types: string[] | { title: string; items?: string[] }[]
  purchaseProductTitle: string;
  webImagesGallery: TImage[]
  makers: TMaker[];
  cameraImagesGallery: TImage[]
  information: string[];
  questions: TQuestion[];
  servicesDescription: string;
}

export type TImage = {
  title: string,
  imageSrc: string
  isCenter?: boolean
}

export type TQuestion = {
  id: number;
  question: string;
  answer: string;
}