function update () {
  let t11n = {"Deutsch": { vocabulary: {passive: "Vokabular", active: "vocabulario", image: "✏"},
                           expression: {passive: "Ausdrück", active: "expresión", image: "👭"},
                           pronunciation: {passive: "Aussprache", active: "pronunciación", image: "🗣"},
                           fillInTheBlanks: {passive: "Fülle die Lüken aus, zum Thema", image: "⎁"},
                           translation: {passive: "den Satz übersetz", active: "traduce la frase", image: "💱"}}};
  const grammar = {"Deutsch": { general: { passive: "Grammatik", active: "gramática"},
                                vocabulary: {passive: "Grammatik - Vokabular", active: "gramática - vocabulario", image: "🔧"}}};
  const is_grammar = globalThis.tags.includes("type_grammar"); const is_translation = globalThis.tags.includes("type_translation");
  if (is_grammar) {
    Object.assign(t11n, grammar);
    let elements = document.getElementsByClassName("area");
    if (elements.length == 0) {
      first = document.getElementsByClassName("first-line")[0];
      // Horror
      first.innerHTML =
        first.innerHTML = `<span class="area">${grammar[globalThis.deck[0]]["general"]["passive"]}</span>${first.innerHTML}`;
    }
  }
  const optionals = Array.from(document.getElementsByClassName("optional"));
  if (is_translation) { optionals.forEach(e => e.id = e.id.replace("optional", "translation")); }
  else if (optionals) { optionals.forEach(e => e.remove()); }

  for (const [category, fields] of Object.entries(t11n[globalThis.deck[0]])) {
    for (const [fName, fValue] of Object.entries(fields)) {
      let element = document.getElementById(`${category}:${fName}`);
      if (element) element.innerHTML = `<span class="field-image">${fields.image}</span> ${fValue}`;
    }
  }
}
update();
