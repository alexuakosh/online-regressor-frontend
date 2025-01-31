export default function getLinkBranch(option: string, arr: any, lastInclude = true) {
    let res = [];
    let founded = false;
    function func(arr: any) {
      for (let i = 0; i < arr.length && !founded; i++) {
        let item = arr[i];
        if (item[0] === option) {
          founded = true;
          break;
        } else if (Array.isArray(item[1])) {
          func(item[1]);
          if (founded) res.push(item[0]);
        }
      }
    }
    func(arr);
    if(res.length > 0 && lastInclude)res.push(option)
    return res;
  }
