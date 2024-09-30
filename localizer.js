function update () {
  const t11n = {"Deutsch":
                { vocabulary: {passive: "Vokabular", active: "vocabulario", image: "✏"},
                  expression: {passive: "Ausdrück", active: "expresión", image: "👭"},
                  pronunciation: {passive: "Aussprache", active: "pronunciación", image: "🗣"},
                  fillInTheBlanks: {passive: "Fülle die Lüken aus", topic:", zum Thema", image: "⎁"},
                  translation: {passive: "den Satz übersetz", active: "traduce la frase", image: "💱"},
                  rewrite: {passive: "den Satz umformulieren", active: "den Satz umformulieren", image: "✍"}},
                "Булгарски":
                { vocabulary: {passive: "речников", active: "vocabulario", image: "✏"},
                  expression: {passive: "", active: "", image: "👭"},
                  pronunciation: {passive: "", active: "", image: "🗣"},
                  fillInTheBlanks: {passive: "", topic:"", image: "⎁"},
                  translation: {passive: "", active: "", image: "💱"},
                  rewrite: {passive: "", active: "", image: "✍"}},
                "Português":
                { vocabulary: {passive: "vocabulário", active: "vocabulario", image: "✏"},
                  expression: {passive: "", active: "", image: "👭"},
                  pronunciation: {passive: "", active: "", image: "🗣"},
                  fillInTheBlanks: {passive: "", topic:"", image: "⎁"},
                  translation: {passive: "", active: "", image: "💱"},
                  rewrite: {passive: "", active: "", image: "✍"}}
               };
  const grammar = {"Deutsch":
                   { general: { passive: "Grammatik", active: "gramática"},
                     vocabulary: {passive: "Grammatik - Vokabular", active: "gramática - vocabulario", image: "🔧"}},
                   "Булгарски":
                   { general: { passive: "граматика", active: "gramática"},
                     vocabulary: {passive: "граматика - речников", active: "gramática - vocabulario", image: "🔧"}},
                   "Português":
                   { general: { passive: "gramática", active: "gramática"},
                     vocabulary: {passive: "gramática - vocabulário", active: "gramática - vocabulario", image: "🔧"}}
                  };

  const is_grammar = globalThis.tags.includes("type_grammar");
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

  const is_translation = globalThis.tags.includes("type_translation"); const is_rewrite = globalThis.tags.includes("type_rewrite");
  const optionals = Array.from(document.getElementsByClassName("optional"));
  if (is_translation) { optionals.forEach(e => e.id = e.id.replace("optional", "translation")); }
  else if (is_rewrite) { optionals.forEach(e => e.id = e.id.replace("optional", "rewrite")); }
  else if (optionals) { optionals.forEach(e => e.remove()); }

  for (const [category, fields] of Object.entries(t11n[globalThis.deck[0]])) {
    for (const [fName, fValue] of Object.entries(fields)) {
      let element = document.getElementById(`${category}:${fName}`);
      var value = fValue;
      if (["passive", "active"].includes(fName)) value = `<span class="field-image">${fields.image}</span> ${value}`;
      if (element) element.innerHTML = value;
    }
  }
}
update();
