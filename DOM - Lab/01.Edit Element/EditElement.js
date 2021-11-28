function editElement(ref,match,replace) {
    const matcher = new RegExp(match, 'g');
    const result = ref.textContent.replace(matcher, replace);
    ref.textContent = result
}