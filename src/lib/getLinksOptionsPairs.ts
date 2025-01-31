export default function getLinkOptionPairs(options: any) {
    const res: any = [];
    function isLinkOptionPair(item: any) {
      const conditions = [
        (item: any) => item.length === 2,
        (item: any) => typeof item[0] === "string" && typeof item[1] === "string",
      ];
      return conditions.every((func) => func(item));
    }
    function addPair(pair: string[]) {
      res.push(pair);
      return;
    }
    function iterArr(arr: any) {
      for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (isLinkOptionPair(item)) {
          addPair(item);
        } else {
          iterArr(item[1]);
        }
      }
    }
    iterArr(options);
    return res;
  }