function translate(translations, key, lang) {
    return translations[key]?.[lang] || translations[key]?.["default"] || key;
}

export { translate };
