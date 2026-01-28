import {nanoid} from "nanoid";
export interface LinksType {
    id: number;
    href: string;
    text: string;
}
export const links=[
    {id: nanoid(), href:'#home', text:'home'},
    {id: nanoid(), href:'#about', text:'about'},
    {id: nanoid(), href:'#contact', text:'contact'},
    {id: nanoid(), href:'#skills', text:'skills'},
    {id: nanoid(), href:'#projects', text:'projects'},
]