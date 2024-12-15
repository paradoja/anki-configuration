function update() {
  const tagsToRemove = ['aws', 'tech', 'saa_c03'];
  const tagTransformations =
  {
    'fundamentals': 'Fundamentals',
    'organizations': 'Organizations',
    'cloudtrail': 'CloudTrail',
    'controltower': 'Control Tower',
    'cwlogs': 'CW Logs',
    'cloudtrail': 'CloudTrail',
    'eventbridge': 'EventBridge',
    'aurora': 'Aurora'
  };
  const transformTag = tag => tagTransformations[tag] || tag.toUpperCase();
  const addTopic = tag => `<span class="topic">${tag}</span>`;

  tags = globalThis.tags.filter(t => !tagsToRemove.includes(t));
  const individualTags = tags.map(transformTag).map(addTopic);
  tagElements = Array.from(document.getElementsByClassName('tags'));

  tagElements.forEach(function (tagElement) {
    tagElement.innerHTML = `<span class="card-type">${individualTags.join('')}</span>`;
    tagElement.classList.add('category');
  });

  const optionals = Array.from(document.getElementsByClassName("optional"));
  optionals.forEach(e => e.remove());
}
globalThis.updater = update;

update();
