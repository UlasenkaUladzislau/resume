import { FC } from "react";
import { FlagNameValues } from "semantic-ui-react";

export interface ILanguage {
  name: FlagNameValues;
  level: number;
  lang: string;
}

const langs: ILanguage[] = [{
  lang: 'English',
  name: 'gb eng',
  level: 4
}, {
  lang: 'German',
  name: 'de',
  level: 4
}, {
  lang: 'Ukrainian',
  name: 'ua',
  level: 5
}, {
  lang: 'Belarusian',
  level: 5,
  name: 'by',
}, {
  lang: 'Russian',
  level: 5,
  name: 'ru',
}]

export const Socials: FC = () => {
 return <>
 </>
}