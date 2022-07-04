import { FormattedMessage, useIntl, IntlProvider } from "react-intl"
import { useEffect, useState } from "react";
import './App.css';

function App() {
  let initLocale = "fi";
  if (navigator.language === "en") {
    initLocale = "en";
  }

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

  function LocalizationWrapper() {
    const [locale, setLocale] = useState(initLocale);
    const [messages, setMessages] = useState(null);

    useEffect(() => loadMessages(locale).then(setMessages), [locale]);
  }
  return (
    <div className="App">

    </div>
  );
}

export default App;
