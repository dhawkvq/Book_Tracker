import { IndustryIdentifiers } from "./IndustryIdentifiers";
import { ReadingModes } from "./ReadingModes";
import { PanelizationSummary } from "./PanelizationSummary";
import { ImageLinks } from "./ImageLinks";
import { ValueOf } from "./ValueOf";
import { Shelf } from "./Shelf";

export interface Book {
  title: string;
  subtitle: string;
  authors?: string[];
  publisher: string;
  publishDate: string;
  description: string;
  industryIdentifiiers: IndustryIdentifiers[];
  readingModes: ReadingModes[];
  pageCount: number;
  printType: string;
  categories: string[];
  averageRating: number;
  ratingsCount: number;
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary: PanelizationSummary;
  imageLinks?: ImageLinks;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
  id: string;
  shelf?: ValueOf<Shelf>;
}
