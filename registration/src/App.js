import { FormattedMessage, useIntl, IntlProvider } from "react-intl"
import { useEffect, useState } from "react";
import './App.css';

  function loadMessages(locale) {
    switch (locale) {
      case "fi":
        return import("./messages/fi.json");
      case "en":
        return import("./messages/en.json");
      default :
        return import("./messages/fi.json");
    }
  }

    let initLocale = "fi";
  if (navigator.language === "en") {
    initLocale = "en";
  }

  function LocalizationWrapper() {
    const [locale, setLocale] = useState(initLocale);
    const [messages, setMessages] = useState(null);

    useEffect(() => loadMessages(locale).then(setMessages), [locale]);

    return messages ? (
      <IntlProvider locale = { locale } messages={message}>
        <App locale={locale} onLocaleChange={(locale) => setLocale(locale)} />
      </IntlProvider>
    ) : null;
  }


function App({locale, onLocaleChange}) {
  const intl = useIntl();
  return (
    <div className="App">
      <select value={locale} onChange={(e) => onLocaleChange(e.target.value)}>
        <option value="fi">Finnish</option>
        <option value="en">English</option>
      </select>
      <div>
        <label for="firstName"><FormattedMessage id="messages.firstName"></FormattedMessage></label>
        <input type="text" id="firstName"></input>
      </div>

    </div>
  );
}

export default App;
