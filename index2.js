function recursive(chars, string = "", skip = 0, strings = []) {
  if (chars.length - skip === 1) { //Количество символов
    const res = string + chars[skip];
    strings.push(res);//Добавляет в strings res
  } else {
    const char = chars[skip];
    const next = string + char;
    recursive(chars, next + ".", skip + 1, strings);
    recursive(chars, next, skip + 1, strings);
  }
  console.clear();
  console.log(strings);
  return strings;
}

let chars = "abc";
recursive(chars);
