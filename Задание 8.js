let map = new Map();
map.set(`EN`, `Английския язык`);
map.set(`RU`, `Русский язык`);
map.set(`DE`, `Немецкий язык`);
for (let [key, value] of map) {
   console.log(`Ключ - ` + key + `, ` + `значение - ` + value)
}