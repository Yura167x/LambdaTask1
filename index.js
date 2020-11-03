function generateStrings(string) {
    const total = Math.pow(2, string.length - 1);//Вариантов вывода
    const arr = string.split("");//Выдаст массив arr из нескольких индексов
    const strings = new Array(total);//Новый массив
    for (let i = 0; i < total; i++) {
      let mapped = "";
      for (let j = 0; j < arr.length; j++) {
        mapped += arr[j];
        if (j < arr.length - 1) {
          mapped += ((i >> j) & 1) == 1 ? "." : "";
        }
      }
      strings[i] = mapped;
    }
    return strings;
}

let string = "abc";
let cons = generateStrings(string);
console.log(cons);
