/**
 * Польские тексты сайта (основной язык).
 *
 * Разметка внутри строк:
 *   [[текст]]  — заметная заглушка «do uzupełnienia» (данные, которые Олена должна подтвердить);
 *   **текст**  — жирный.
 * Другие языки повторяют эту же структуру (тип Dictionary ниже).
 */
export const pl = {
  meta: {
    siteName: 'Olena Vagner — finansowanie i nieruchomości',
    defaultDescription:
      'Wsparcie przy kredycie hipotecznym i zakupie nieruchomości w Polsce. Poznań i okolice, także zdalnie. Po polsku i po ukraińsku.',
  },

  nav: {
    skip: 'Przejdź do treści',
    services: 'Usługi',
    process: 'Jak pracuję',
    about: 'O mnie',
    blog: 'Blog',
    faq: 'FAQ',
    contact: 'Kontakt',
    cta: 'Umów konsultację',
    menu: 'Menu',
    close: 'Zamknij menu',
    language: 'Wybierz język',
    languageSoon: 'wkrótce',
  },

  common: {
    learnMore: 'Dowiedz się więcej',
    readArticle: 'Czytaj artykuł',
    allServices: 'Wszystkie usługi',
    location: 'Poznań i okolice · także zdalnie',
    consultationLanguages: 'Konsultacje po polsku i po ukraińsku',
    placeholderTitle: 'Do uzupełnienia',
    breadcrumbHome: 'Strona główna',
    onThisPage: 'Na tej stronie',
    soon: 'Wkrótce',
    minutes: 'min czytania',
    prototypeBanner:
      'Wersja robocza strony. Fragmenty oznaczone kolorem tła czekają na uzupełnienie i nie są jeszcze danymi.',
  },

  footer: {
    about:
      'Pomagam przejść przez finansowanie i zakup nieruchomości w Polsce: spokojnie, krok po kroku, w zrozumiałym języku.',
    navTitle: 'Strona',
    servicesTitle: 'Usługi',
    contactTitle: 'Kontakt',
    legalTitle: 'Informacje',
    rights: 'Wszelkie prawa zastrzeżone.',
    disclaimer:
      'Informacje na stronie mają charakter ogólny i nie są poradą prawną, podatkową ani ofertą kredytową. Decyzję kredytową podejmuje bank.',
  },

  services: {
    mortgage: {
      title: 'Kredyty hipoteczne',
      short:
        'Wyjaśniam, jak wygląda proces kredytowy, i pomagam przygotować się do rozmowy z bankiem lub pośrednikiem.',
    },
    purchase: {
      title: 'Wsparcie przy zakupie nieruchomości',
      short:
        'Pomagam zrozumieć kolejne etapy zakupu i uporządkować sprawy, także gdy mieszkanie zostało już znalezione.',
    },
    language: {
      title: 'Wsparcie językowe i organizacyjne',
      short:
        'Pomagam w rozmowach, spotkaniach i korespondencji, gdy porozumiewanie się po polsku jest trudne.',
    },
    search: {
      title: 'Pomoc w znalezieniu nieruchomości',
      short:
        'Pomagam doprecyzować kryteria, przejrzeć oferty i zorganizować kontakt ze sprzedającym lub jego agentem.',
    },
  },

  home: {
    seo: {
      title: 'Kredyt i zakup mieszkania w Polsce — Olena Vagner, Poznań',
      description:
        'Pomagam zrozumieć kredyt hipoteczny i zakup nieruchomości w Polsce. Spokojnie, krok po kroku, po polsku i po ukraińsku. Poznań i okolice, także zdalnie.',
    },
    hero: {
      eyebrow: 'Finansowanie i nieruchomości w Polsce',
      title: 'Kredyt i zakup mieszkania w Polsce — spokojnie, krok po kroku.',
      lead:
        'Pomagam zrozumieć proces, przygotować się do rozmowy z bankiem i załatwić sprawy związane z zakupem nieruchomości. Bez pośpiechu i w języku, który rozumiesz.',
      ctaPrimary: 'Umów konsultację',
      ctaSecondary: 'Poznaj moje usługi',
      cardRole: 'Kredyty i finanse · nieruchomości',
      cardLanguages: 'Po polsku · Po ukraińsku',
    },
    audience: {
      title: 'Z czym możesz do mnie przyjść',
      lead: 'Każda sytuacja jest inna. Najczęściej zaczynamy od jednej z tych.',
      items: [
        {
          title: 'Myślisz o kredycie hipotecznym',
          text: 'Chcesz wiedzieć, od czego zacząć, jakie dokumenty mogą być potrzebne i o co zapytać bank.',
        },
        {
          title: 'Masz już upatrzone mieszkanie',
          text: 'Oferta jest znaleziona, ale nie wiesz, co dalej i w jakiej kolejności.',
        },
        {
          title: 'Polski jest dla Ciebie wyzwaniem',
          text: 'Rozmowy z agencją, sprzedającym czy bankiem są trudne, gdy każdy szczegół ma znaczenie.',
        },
        {
          title: 'Dopiero szukasz nieruchomości',
          text: 'Potrzebujesz pomocy w ustaleniu kryteriów i w uporządkowaniu poszukiwań.',
        },
      ],
    },
    servicesBlock: {
      title: 'Usługi',
      lead: 'Cztery obszary, w których mogę pomóc. Zakres zawsze ustalamy przed rozpoczęciem współpracy.',
    },
    principles: {
      title: 'Jak pracuję',
      items: [
        {
          title: 'Zrozumiale',
          text: 'Tłumaczę procedury prostym językiem. Pytania są mile widziane, także te „oczywiste”.',
        },
        {
          title: 'Przejrzyście',
          text: 'Zanim zaczniemy, mówię, w jakiej roli działam, kto kogo reprezentuje i jakie są koszty.',
        },
        {
          title: 'Uczciwie',
          text: 'Nie obiecuję decyzji banku ani najniższej stopy. Pomagam dobrze się przygotować.',
        },
        {
          title: 'Spokojnie',
          text: 'Duża decyzja finansowa wymaga czasu. Działamy według planu, bez presji.',
        },
      ],
    },
    process: {
      title: 'Jak wygląda współpraca',
      lead: 'Cztery proste kroki. Szczegóły zależą od usługi i konkretnej transakcji.',
      cta: 'Więcej o współpracy',
    },
    about: {
      title: 'Kilka słów o mnie',
      text:
        'Nazywam się Olena Vagner. Pracuję w Poznaniu i pomagam osobom, które chcą kupić nieruchomość w Polsce, a szczególnie tym, dla których polski nie jest pierwszym językiem.',
      textPlaceholder: '[[Krótko o doświadczeniu i drodze zawodowej — do uzupełnienia przez Olenę]]',
      cta: 'Poznaj mnie bliżej',
    },
    blog: {
      title: 'Z bloga',
      cta: 'Wszystkie artykuły',
    },
    faq: {
      title: 'Częste pytania',
      cta: 'Wszystkie pytania',
    },
    contact: {
      title: 'Opowiedz mi o swojej sytuacji',
      lead: 'Wypełnij krótki formularz. Odpowiem i zaproponuję, jak możemy zacząć.',
    },
  },

  steps: [
    { title: 'Zostawiasz zgłoszenie', text: 'Przez formularz, e-mail lub WhatsApp. Wystarczy kilka zdań o Twojej sytuacji.' },
    { title: 'Rozmawiamy o celu', text: 'Omawiamy, co chcesz osiągnąć, na jakim etapie jesteś i czego potrzebujesz.' },
    { title: 'Ustalamy zasady', text: 'Zakres usługi, role wszystkich stron, koszt i warunki. Wszystko przed rozpoczęciem pracy.' },
    { title: 'Działamy według planu', text: 'Realizujemy uzgodnione kroki. Wiesz, co się dzieje i co będzie dalej.' },
  ],

  servicesPage: {
    seo: {
      title: 'Usługi — kredyt, zakup i poszukiwanie nieruchomości | Olena Vagner',
      description:
        'Wsparcie przy kredycie hipotecznym, zakupie nieruchomości, wsparcie językowe oraz pomoc w znalezieniu mieszkania. Poznań i cała Polska zdalnie.',
    },
    title: 'Usługi',
    lead:
      'Pomagam na różnych etapach: od pierwszych pytań o kredyt, przez poszukiwanie mieszkania, po organizację zakupu. Możesz skorzystać z jednej usługi albo połączyć kilka.',
    boundariesTitle: 'Czego nie robię',
    boundaries: [
      'Nie udzielam porad prawnych i nie sprawdzam prawnie umów ani stanu prawnego nieruchomości. Pomogę znaleźć odpowiedniego specjalistę.',
      'Nie zastępuję notariusza, adwokata, radcy prawnego ani doradcy podatkowego.',
      'Nie obiecuję decyzji kredytowej. Decyzję zawsze podejmuje bank.',
    ],
  },

  mortgage: {
    seo: {
      title: 'Kredyt hipoteczny — konsultacja i przygotowanie, Poznań | Olena Vagner',
      description:
        'Konsultacja kredytowa w Poznaniu i zdalnie: wyjaśniam etapy kredytu hipotecznego i pomagam przygotować się do rozmowy z bankiem. Po polsku i po ukraińsku.',
    },
    lead:
      'Kredyt hipoteczny to zwykle największa decyzja finansowa w życiu. Pomagam zrozumieć proces i dobrze przygotować się do rozmowy z bankiem lub pośrednikiem kredytowym.',
    helpTitle: 'W czym pomagam',
    help: [
      'Pierwsza konsultacja: omawiamy Twoją sytuację i cel.',
      'Wyjaśniam etapy procesu kredytowego od wniosku do wypłaty środków.',
      'Pomagam przygotować listę pytań i dokumentów do rozmowy z bankiem.',
      'Tłumaczę pojęcia z ofert, np. RRSO, marża, wkład własny, ubezpieczenia.',
      'Pomagam porównać oferty według kryteriów ważnych dla Ciebie.',
    ],
    roleTitle: 'W jakiej roli działam',
    role:
      '[[Opis statusu zawodowego: np. współpraca z pośrednikiem kredytowym lub samodzielna działalność — do potwierdzenia. Od tego zależy, czy i jak mogę pośredniczyć w złożeniu wniosku kredytowego.]]',
    notTitle: 'Ważne',
    not: [
      'Nie gwarantuję przyznania kredytu ani konkretnej stopy procentowej.',
      'Nie twierdzę, że mam dostęp do ofert wszystkich banków.',
      'Na pierwszym etapie nie proszę o skany dokumentów ani szczegółowe dane finansowe.',
    ],
    forWhomTitle: 'Dla kogo',
    forWhom: [
      'Osoby, które kupują pierwsze mieszkanie.',
      'Cudzoziemcy i osoby z Ukrainy mieszkające w Polsce.',
      'Osoby, które chcą zrozumieć ofertę, zanim podejmą decyzję.',
    ],
  },

  purchase: {
    seo: {
      title: 'Wsparcie przy zakupie mieszkania w Polsce | Olena Vagner, Poznań',
      description:
        'Pomoc przy zakupie mieszkania w Polsce: wyjaśnienie etapów, przygotowanie pytań, koordynacja spotkań i komunikacji z agencją lub sprzedającym.',
    },
    lead:
      'Znalezienie mieszkania to dopiero początek. Pomagam zrozumieć kolejne kroki, uporządkować sprawy i dogadać się ze wszystkimi stronami transakcji.',
    helpTitle: 'W czym pomagam',
    help: [
      'Wyjaśniam etapy zakupu: od rezerwacji, przez umowę przedwstępną, po akt notarialny.',
      'Pomagam w komunikacji z agencją nieruchomości lub sprzedającym.',
      'Przygotowuję z Tobą pytania przed oglądaniem, negocjacjami i podpisaniem umów.',
      'Koordynuję terminy spotkań i pilnuję, by nic nie umknęło.',
      'Tłumaczę organizacyjne kroki: co, kiedy i u kogo trzeba załatwić.',
      'Wskazuję, do jakiego specjalisty zwrócić się z konkretnym pytaniem (notariusz, prawnik, doradca podatkowy).',
    ],
    foundTitle: 'Mieszkanie już znalezione?',
    found:
      'To częsta sytuacja. Oferta jest, ale pojawiają się pytania o umowę, terminy i formalności, a rozmowy po polsku są trudne. Możemy zacząć dokładnie od miejsca, w którym jesteś.',
    notTitle: 'Granice mojej roli',
    not: [
      'Nie jestem prawnikiem ani notariuszem i nie przeprowadzam prawnej weryfikacji umów ani nieruchomości.',
      'Weryfikację prawną powinien wykonać uprawniony specjalista. Pomogę go znaleźć i przygotować pytania.',
    ],
  },

  language: {
    seo: {
      title: 'Pomoc językowa przy zakupie mieszkania w Polsce | Olena Vagner',
      description:
        'Wsparcie językowe i organizacyjne przy zakupie nieruchomości: rozmowy telefoniczne, spotkania, korespondencja i koordynacja kontaktów. Po polsku i po ukraińsku.',
    },
    lead:
      'Gdy rozmowa toczy się w obcym języku, łatwo coś przeoczyć. Pomagam w kontaktach z agencją, sprzedającym, bankiem czy zarządcą, abyś wiedział, o czym rozmawiacie i co zostało ustalone.',
    helpTitle: 'W czym pomagam',
    help: [
      'Towarzyszę w rozmowach telefonicznych i spotkaniach.',
      'Pomagam sformułować pytania i odpowiedzi.',
      'Wyjaśniam ogólny sens korespondencji i dokumentów.',
      'Koordynuję kontakty z uczestnikami transakcji.',
      'Pomagam w organizacji całego procesu.',
    ],
    formatsTitle: 'Formy współpracy',
    formatsLead: 'Do wyboru, w zależności od potrzeb. Ceny podam po krótkiej rozmowie.',
    formats: [
      { title: 'Pomoc godzinowa', text: 'Konkretna sprawa: rozmowa, e-mail, przygotowanie pytań.', price: '[[cena do ustalenia]]' },
      { title: 'Jedno spotkanie', text: 'Obecność na oglądaniu, w agencji lub w banku, wraz z przygotowaniem.', price: '[[cena do ustalenia]]' },
      { title: 'Pakiet wsparcia', text: 'Stałe wsparcie od pierwszej rozmowy do podpisania umowy.', price: '[[cena do ustalenia]]' },
    ],
    importantTitle: 'Ważne rozróżnienie',
    important:
      'Wsparcie językowe nie jest tłumaczeniem przysięgłym, poradą prawną ani pośrednictwem kredytowym. Jeśli dokument wymaga tłumacza przysięgłego lub oceny prawnej, powiem o tym i pomogę znaleźć specjalistę.',
    languagesNote: 'Wsparcie prowadzę po polsku i po ukraińsku.',
  },

  search: {
    seo: {
      title: 'Pomoc w znalezieniu mieszkania w Poznaniu | Olena Vagner',
      description:
        'Pomoc w znalezieniu mieszkania w Poznaniu i okolicach: kryteria i budżet, wstępna selekcja ofert, organizacja oglądania. Jasne zasady i przejrzyste prowizje.',
    },
    lead:
      'Szukanie mieszkania zajmuje dużo czasu, zwłaszcza gdy nie znasz dobrze rynku ani języka. Pomagam uporządkować poszukiwania i zorganizować kontakt ze sprzedającymi.',
    helpTitle: 'W czym pomagam',
    help: [
      'Doprecyzowanie kryteriów i budżetu.',
      'Wstępna selekcja ofert.',
      'Organizacja kontaktów i oglądania.',
      'Kontakt z agentem sprzedającego lub innym pośrednikiem.',
      'Koordynacja całego procesu poszukiwań.',
    ],
    rolesTitle: 'Kto kogo reprezentuje i kto płaci prowizję',
    rolesLead:
      'Na rynku nieruchomości łatwo pomylić role. Dlatego przed rozpoczęciem współpracy ustalamy na piśmie odpowiedzi na te pytania.',
    roles: [
      {
        q: 'Kto reprezentuje sprzedającego?',
        a: 'Zwykle agent lub biuro nieruchomości, z którym sprzedający podpisał umowę. Działa w interesie sprzedającego.',
      },
      {
        q: 'Kto reprezentuje kupującego?',
        a: 'Kupujący może działać sam albo podpisać umowę z własnym pośrednikiem. To osobna umowa i osobne warunki.',
      },
      {
        q: 'W jakiej roli działam ja?',
        a: '[[Do potwierdzenia: model współpracy i status (np. współpraca z licencjonowanym biurem nieruchomości). Opiszę go przed rozpoczęciem pracy.]]',
      },
      {
        q: 'Kto płaci prowizję?',
        a: 'To zależy od umów. Prowizję może płacić sprzedający, kupujący albo obie strony. Zawsze mówię, kto płaci i ile, zanim cokolwiek podpiszesz.',
      },
      {
        q: 'Czy może pojawić się dodatkowa prowizja?',
        a: 'Tak, jest to możliwe, np. gdy biuro sprzedającego pobiera prowizję także od kupującego. Nie obiecuję braku podwójnej prowizji. Obiecuję, że poznasz wszystkie koszty z góry.',
      },
      {
        q: 'Co ustalamy przed startem?',
        a: 'Zakres pomocy, wynagrodzenie, kto je płaci, możliwe dodatkowe koszty i sposób postępowania przy konflikcie interesów.',
      },
    ],
    note:
      'Nie przedstawiam się jako licencjonowany pośrednik w obrocie nieruchomościami, dopóki nie potwierdzę wymogów i modelu współpracy.',
  },

  processPage: {
    seo: {
      title: 'Jak wygląda współpraca | Olena Vagner',
      description:
        'Cztery kroki współpracy: zgłoszenie, rozmowa o celu, ustalenie zasad i kosztów, działanie według planu. Przejrzyście i bez presji.',
    },
    title: 'Jak wygląda współpraca',
    lead:
      'Zaczynamy od rozmowy, a nie od umowy. Zanim podejmiesz jakiekolwiek zobowiązanie, wiesz, kto jest kim, ile to kosztuje i co dokładnie zrobię.',
    note: 'Szczegóły zależą od usługi i konkretnej transakcji.',
    transparencyTitle: 'Co zawsze ustalamy na początku',
    transparency: [
      'Zakres usługi: co robię, a czego nie.',
      'Role wszystkich stron: kto kogo reprezentuje.',
      'Koszt i sposób rozliczenia, w tym kto płaci prowizje.',
      'Sposób kontaktu i terminy.',
    ],
    firstContactTitle: 'Pierwsza rozmowa',
    firstContact: '[[Czy pierwsza konsultacja jest płatna czy bezpłatna i ile trwa — do uzupełnienia]]',
  },

  aboutPage: {
    seo: {
      title: 'O mnie — Olena Vagner | Poznań',
      description:
        'Olena Vagner: wsparcie przy finansowaniu i zakupie nieruchomości w Polsce. Poznań i okolice, po polsku i po ukraińsku.',
    },
    title: 'O mnie',
    intro:
      'Nazywam się Olena Vagner. Pomagam osobom, które chcą kupić nieruchomość w Polsce, przejść przez finansowanie i formalności spokojnie i ze zrozumieniem.',
    story: '[[Historia: skąd pomysł na tę pracę, doświadczenie, wykształcenie — tylko prawdziwe fakty, do uzupełnienia przez Olenę]]',
    valuesTitle: 'Na czym mi zależy',
    values: [
      { title: 'Zrozumienie', text: 'Chcę, żebyś rozumiał każdą decyzję, którą podejmujesz.' },
      { title: 'Przejrzystość', text: 'Jasne role, jasne koszty, bez drobnego druku.' },
      { title: 'Szacunek do czasu', text: 'Konkretne kroki i jasna komunikacja.' },
      { title: 'Niezależność', text: 'To moja własna marka. Nie jest stroną internetową banku ani pośrednika.' },
    ],
    languagesTitle: 'Języki',
    languages: 'Konsultacje prowadzę po polsku i po ukraińsku.',
  },

  faqPage: {
    seo: {
      title: 'Częste pytania — kredyt i zakup mieszkania | Olena Vagner',
      description:
        'Odpowiedzi na częste pytania o kredyt hipoteczny, zakup mieszkania w Polsce, wsparcie językowe i prowizje pośredników.',
    },
    title: 'Częste pytania',
    lead: 'Nie ma tu Twojego pytania? Napisz do mnie.',
  },

  faq: [
    {
      q: 'Czy pomożesz mi dostać kredyt?',
      a: 'Pomogę zrozumieć proces i dobrze przygotować się do rozmowy z bankiem. Decyzję kredytową zawsze podejmuje bank, więc nie mogę jej zagwarantować.',
      home: true,
    },
    {
      q: 'Mieszkanie jest już znalezione. Czy nadal możesz pomóc?',
      a: 'Tak. Możemy zacząć od etapu, na którym jesteś: od pytań do sprzedającego, przez umowę przedwstępną, po organizację wizyty u notariusza.',
      home: true,
    },
    {
      q: 'W jakich językach prowadzisz konsultacje?',
      a: 'Po polsku i po ukraińsku.',
      home: true,
    },
    {
      q: 'Ile kosztuje współpraca?',
      a: 'To zależy od usługi i zakresu. Koszt i zasady ustalamy przed rozpoczęciem pracy. [[Informacja o pierwszej konsultacji — do uzupełnienia]]',
      home: true,
    },
    {
      q: 'Czy sprawdzasz umowy od strony prawnej?',
      a: 'Nie. Nie jestem prawnikiem. Mogę pomóc zrozumieć ogólny sens dokumentu i przygotować pytania, a weryfikację prawną powinien wykonać prawnik lub notariusz.',
      home: true,
    },
    {
      q: 'Czy pracujesz tylko w Poznaniu?',
      a: 'Najczęściej w Poznaniu i okolicach, ale wiele spraw możemy załatwić zdalnie, także z innych miast.',
      home: false,
    },
    {
      q: 'Jakie dane muszę podać na początku?',
      a: 'Wystarczy krótki opis sytuacji i dane kontaktowe. Na pierwszym etapie nie proszę o skany dokumentów ani szczegółowe dane finansowe.',
      home: false,
    },
    {
      q: 'Kto płaci prowizję agentowi nieruchomości?',
      a: 'To zależy od umów zawartych przez sprzedającego i kupującego. Zawsze wyjaśniam to przed rozpoczęciem współpracy.',
      home: false,
    },
  ],

  contactPage: {
    seo: {
      title: 'Kontakt — umów konsultację | Olena Vagner, Poznań',
      description:
        'Umów konsultację w sprawie kredytu hipotecznego lub zakupu nieruchomości. Formularz, e-mail lub WhatsApp. Poznań i zdalnie.',
    },
    title: 'Kontakt',
    lead: 'Napisz kilka zdań o swojej sytuacji. Odpowiem i zaproponuję, jak możemy zacząć.',
    directTitle: 'Bezpośrednio',
    emailLabel: 'E-mail',
    whatsappLabel: 'WhatsApp',
    instagramLabel: 'Instagram',
    emailPlaceholder: '[[adres e-mail do uzupełnienia]]',
    whatsappPlaceholder: '[[numer WhatsApp do uzupełnienia]]',
    areaTitle: 'Obszar',
    area: 'Poznań i okolice. Spotkania zdalne z całej Polski.',
  },

  form: {
    title: 'Formularz zgłoszenia',
    required: 'pole wymagane',
    optional: 'opcjonalnie',
    name: 'Imię',
    email: 'E-mail',
    phone: 'Telefon',
    preferredLanguage: 'Preferowany język kontaktu',
    languageOptions: { pl: 'Polski', uk: 'Ukraiński' },
    service: 'Czego dotyczy sprawa?',
    serviceOptions: {
      mortgage: 'Kredyt hipoteczny',
      purchase: 'Wsparcie przy zakupie',
      language: 'Wsparcie językowe i organizacyjne',
      search: 'Pomoc w znalezieniu nieruchomości',
      other: 'Inne / jeszcze nie wiem',
    },
    city: 'Miasto lub region',
    message: 'Krótko o Twojej sytuacji',
    messageHint: 'Bez numerów dokumentów i szczegółowych danych finansowych.',
    contactMethod: 'Preferowany sposób kontaktu',
    contactOptions: { email: 'E-mail', phone: 'Telefon', whatsapp: 'WhatsApp' },
    propertyStatus: 'Czy masz już upatrzoną nieruchomość?',
    propertyOptions: {
      found: 'Tak, nieruchomość jest znaleziona',
      searching: 'Nie, potrzebuję pomocy w szukaniu',
      notYet: 'Jeszcze nie zaczynam szukać',
    },
    agencyContact: 'Czy masz już kontakt z agencją lub sprzedającym?',
    agencyOptions: { yes: 'Tak', no: 'Nie', unsure: 'Nie wiem' },
    select: 'Wybierz…',
    consent:
      'Zgadzam się na przetwarzanie moich danych w celu odpowiedzi na zgłoszenie. Szczegóły w [polityce prywatności].',
    privacyNote:
      'Administratorem danych jest [[dane administratora do uzupełnienia]]. Dane są wykorzystywane wyłącznie do kontaktu w sprawie zgłoszenia.',
    submit: 'Przygotuj wiadomość',
    errors: {
      summary: 'Sprawdź zaznaczone pola.',
      name: 'Wpisz imię.',
      email: 'Wpisz poprawny adres e-mail.',
      phone: 'Wpisz poprawny numer telefonu albo zostaw pole puste.',
      service: 'Wybierz, czego dotyczy sprawa.',
      message: 'Napisz kilka słów o swojej sytuacji (co najmniej 10 znaków).',
      phoneRequired: 'Podaj numer telefonu, jeśli wolisz kontakt telefoniczny lub przez WhatsApp.',
      consent: 'Zaznacz zgodę, aby wysłać zgłoszenie.',
    },
    ready: {
      title: 'Wiadomość jest gotowa',
      text: 'Wybierz, jak chcesz ją wysłać. Otworzy się Twoja aplikacja z gotowym tekstem, wystarczy nacisnąć „Wyślij”.',
      email: 'Wyślij e-mailem',
      whatsapp: 'Wyślij przez WhatsApp',
      missingContact: 'Dane kontaktowe są jeszcze uzupełniane. Ta opcja zadziała po ich dodaniu.',
      edit: 'Wróć do formularza',
    },
    messageTemplate: {
      greeting: 'Dzień dobry, piszę przez stronę internetową.',
      subject: 'Zgłoszenie ze strony',
    },
  },

  blogPage: {
    seo: {
      title: 'Blog — kredyt hipoteczny i zakup mieszkania w Polsce | Olena Vagner',
      description:
        'Praktyczne artykuły o kredycie hipotecznym, zakupie mieszkania w Polsce i współpracy z pośrednikiem nieruchomości.',
    },
    title: 'Blog',
    lead: 'Praktyczne wyjaśnienia krok po kroku. Bez żargonu.',
    all: 'Wszystkie',
    categories: {
      kredyt: 'Kredyt',
      zakup: 'Zakup',
      posrednik: 'Współpraca z pośrednikiem',
    },
    upcomingTitle: 'Wkrótce na blogu',
    disclaimer:
      'Artykuł ma charakter informacyjny i nie jest poradą prawną, podatkową ani finansową.',
    related: 'Powiązana usługa',
    back: 'Wróć do bloga',
  },

  privacyPage: {
    seo: { title: 'Polityka prywatności | Olena Vagner', description: 'Zasady przetwarzania danych osobowych na stronie Olena Vagner.' },
    title: 'Polityka prywatności',
    draftNote:
      'Szablon do weryfikacji przez prawnika. Nie stanowi ostatecznego dokumentu.',
    sections: [
      {
        h: 'Administrator danych',
        p: 'Administratorem danych osobowych jest [[imię i nazwisko / nazwa działalności, adres, NIP — do uzupełnienia]]. Kontakt w sprawach danych: [[adres e-mail]].',
      },
      {
        h: 'Jakie dane zbieramy',
        p: 'Dane podane w formularzu: imię, e-mail, opcjonalnie telefon, miasto lub region oraz krótki opis sytuacji. Nie prosimy o dokumenty ani szczegółowe dane finansowe.',
      },
      {
        h: 'Cel i podstawa przetwarzania',
        p: 'Odpowiedź na zgłoszenie i kontakt przed ewentualnym zawarciem umowy (art. 6 ust. 1 lit. b RODO) oraz zgoda (art. 6 ust. 1 lit. a RODO). [[Do weryfikacji przez prawnika]]',
      },
      {
        h: 'Jak długo przechowujemy dane',
        p: '[[Okres przechowywania — do ustalenia]]',
      },
      {
        h: 'Odbiorcy danych',
        p: 'Dostawcy usług technicznych: hosting, poczta e-mail, komunikator. [[Lista dostawców do uzupełnienia po wyborze narzędzi]]',
      },
      {
        h: 'Twoje prawa',
        p: 'Masz prawo do dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia, sprzeciwu oraz cofnięcia zgody. Możesz też złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych.',
      },
    ],
  },

  cookiesPage: {
    seo: { title: 'Polityka cookies | Olena Vagner', description: 'Informacje o plikach cookies na stronie Olena Vagner.' },
    title: 'Polityka cookies',
    draftNote: 'Szablon do weryfikacji. Treść zależy od narzędzi, które zostaną podłączone.',
    sections: [
      {
        h: 'Stan obecny',
        p: 'Strona nie używa obecnie analitycznych ani marketingowych plików cookies. Zapamiętujemy jedynie wybrany język w pamięci przeglądarki.',
      },
      {
        h: 'Po podłączeniu analityki',
        p: 'Jeśli zostanie podłączone Google Analytics 4 lub podobne narzędzie, strona wyświetli baner zgody, a ta polityka zostanie uzupełniona. [[Do uzupełnienia]]',
      },
    ],
  },

  legalPage: {
    seo: { title: 'Informacje prawne | Olena Vagner', description: 'Dane działalności, status zawodowy i partnerzy.' },
    title: 'Informacje prawne',
    sections: [
      { h: 'Dane działalności', p: '[[Nazwa, adres, NIP, REGON — do uzupełnienia, gdy będą dostępne]]' },
      { h: 'Status zawodowy', p: '[[Opis statusu zawodowego i uprawnień — do uzupełnienia po konsultacji z prawnikiem]]' },
      { h: 'Partnerzy', p: '[[Lista partnerów i charakter współpracy — jeśli dotyczy]]' },
      {
        h: 'Charakter informacji na stronie',
        p: 'Treści na stronie mają charakter ogólny i informacyjny. Nie stanowią porady prawnej, podatkowej ani oferty w rozumieniu przepisów prawa.',
      },
    ],
  },

  notFound: {
    title: 'Nie znaleziono strony',
    text: 'Ta strona nie istnieje lub została przeniesiona.',
    cta: 'Wróć na stronę główną',
  },
};

export type Dictionary = typeof pl;
