import { FC } from "react";
import { Language } from "./Language";
import { GB, UA, DE, BY, RU, FlagComponent } from 'country-flag-icons/react/3x2'

export interface ILanguage {
  Flag: FlagComponent;
  level: number;
  lang: string;
}

const langs: ILanguage[] = [{
  lang: 'English',
  Flag: GB,
  level: 4
}, {
  lang: 'German',
  Flag: DE,
  level: 4
}, {
  lang: 'Ukrainian',
  Flag: UA,
  level: 5
}, {
  lang: 'Belarusian',
  level: 5,
  Flag: BY,
}, {
  lang: 'Russian',
  level: 5,
  Flag: RU,
}]

export const Languages: FC = () => {
 return <>
    {langs.map(lang => <Language {...lang} /> )}
 </>
}