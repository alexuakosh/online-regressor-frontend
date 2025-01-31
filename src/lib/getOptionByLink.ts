export default function getOptionByLink(pairs: [string[]], root: string){
    return pairs.find(pair => pair[1] === root)?.[0] ?? ""
  }