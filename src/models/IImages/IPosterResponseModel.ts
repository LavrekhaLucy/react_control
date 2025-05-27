import type {IBackdrops} from "./IBackdrops.ts";
import type {ILogos} from "./ILogos.ts";
import type {IPoster} from "./IPoster.ts";

export interface IPosterResponseModel {
  backdrops: IBackdrops[];
  logos: ILogos[];
  posters: IPoster[];
}
