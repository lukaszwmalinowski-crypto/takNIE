const categories = [
  {
    name: "Rozgrzewka",
    questions: [
      "Czy lubisz zaczynać dzień od kawy albo herbaty?",
      "Czy łatwo zapamiętujesz imiona nowych osób?",
      "Czy umiesz szybko wymyślić żart?",
      "Czy często nucisz coś pod nosem?",
      "Czy masz szczęście w prostych losowaniach?",
      "Czy potrafisz długo milczeć w towarzystwie?",
      "Czy lubisz gry, w których trzeba uważać na słowa?",
      "Czy często śmiejesz się z własnych pomyłek?",
      "Czy masz dobrą pamięć do twarzy?",
      "Czy lubisz być pierwszy w kolejce?",
      "Czy łatwo rozpoznajesz czyjś głos przez telefon?",
      "Czy zdarza ci się mówić za szybko?",
      "Czy potrafisz zachować powagę, gdy inni się śmieją?",
      "Czy wolisz pytania proste od podchwytliwych?",
      "Czy lubisz rywalizację dla zabawy?",
      "Czy często używasz tego samego powiedzonka?",
      "Czy masz ulubiony kolor?",
      "Czy łatwo podejmujesz małe decyzje?",
      "Czy lubisz spontaniczne plany?",
      "Czy umiesz wymyślić odpowiedź w trzy sekundy?",
      "Czy często zapominasz, po co wszedłeś do pokoju?",
      "Czy lubisz zgadywanki?",
      "Czy masz dobrą intuicję?",
      "Czy potrafisz rozśmieszyć grupę jednym zdaniem?",
      "Czy lubisz być kapitanem drużyny?",
      "Czy łatwo dajesz się namówić na zabawę?",
      "Czy zdarza ci się odpowiadać automatycznie?",
      "Czy potrafisz wygrać bez świętowania?",
      "Czy wolisz grać ostrożnie?",
      "Czy ta runda pójdzie ci gładko?"
    ]
  },
  {
    name: "Codzienne wybory",
    questions: [
      "Czy ścielisz łóżko od razu po wstaniu?",
      "Czy wybierasz ubrania dzień wcześniej?",
      "Czy często sprawdzasz pogodę przed wyjściem?",
      "Czy robisz listę zakupów?",
      "Czy lubisz mieć zaplanowany cały dzień?",
      "Czy odkładasz drobne obowiązki na później?",
      "Czy zawsze nosisz przy sobie klucze w tym samym miejscu?",
      "Czy częściej wybierasz schody niż windę?",
      "Czy lubisz porządek na biurku?",
      "Czy śniadanie jest dla ciebie ważne?",
      "Czy zdarza ci się jeść coś na szybko?",
      "Czy wolisz robić jedną rzecz naraz?",
      "Czy często zmieniasz zdanie w sklepie?",
      "Czy masz stałą trasę do pracy albo szkoły?",
      "Czy lubisz robić zakupy przez internet?",
      "Czy odkładasz paragony?",
      "Czy pilnujesz terminów bez przypomnień?",
      "Czy lubisz zaczynać od najtrudniejszego zadania?",
      "Czy często sprawdzasz godzinę?",
      "Czy potrafisz wyjść z domu punktualnie?",
      "Czy lubisz mieć zapas czasu?",
      "Czy segregujesz rzeczy według kategorii?",
      "Czy masz ulubiony kubek?",
      "Czy często zmieniasz ustawienia w telefonie?",
      "Czy łatwo zasypiasz po intensywnym dniu?",
      "Czy lubisz ciszę rano?",
      "Czy planujesz posiłki z wyprzedzeniem?",
      "Czy umiesz szybko znaleźć zgubioną rzecz?",
      "Czy dbasz o pełną baterię przed wyjściem?",
      "Czy codzienna rutyna pomaga ci działać?"
    ]
  },
  {
    name: "Szkoła i praca",
    questions: [
      "Czy lubiłeś/lubiłaś siedzieć w pierwszej ławce?",
      "Czy łatwo uczysz się nowych rzeczy?",
      "Czy potrafisz pracować pod presją czasu?",
      "Czy lubisz prezentacje przed grupą?",
      "Czy wolisz pracę zespołową od samodzielnej?",
      "Czy notatki pomagają ci zapamiętywać?",
      "Czy masz ulubiony przedmiot szkolny?",
      "Czy zdarza ci się odkładać naukę na ostatni moment?",
      "Czy lubisz rozwiązywać łamigłówki?",
      "Czy dobrze pamiętasz daty?",
      "Czy potrafisz skupić się w hałasie?",
      "Czy lubisz robić checklisty?",
      "Czy łatwo prosisz o pomoc?",
      "Czy wolisz krótkie zadania od długich projektów?",
      "Czy uczysz się lepiej rano?",
      "Czy lubisz jasne instrukcje?",
      "Czy umiesz szybko znaleźć błąd?",
      "Czy lubisz porządkować dokumenty?",
      "Czy potrafisz przyznać się do pomyłki?",
      "Czy często zapisujesz ważne rzeczy w kalendarzu?",
      "Czy lubisz zadawać pytania?",
      "Czy przerwa poprawia twoją koncentrację?",
      "Czy łatwo zapamiętujesz definicje?",
      "Czy lubisz kończyć zadania przed czasem?",
      "Czy potrafisz pracować bez muzyki?",
      "Czy masz swój sposób na motywację?",
      "Czy lubisz uczyć kogoś innego?",
      "Czy dokładność jest dla ciebie ważna?",
      "Czy umiesz działać według planu?",
      "Czy lubisz widzieć efekty swojej pracy?"
    ]
  },
  {
    name: "Dom i rodzina",
    questions: [
      "Czy lubisz rodzinne spotkania?",
      "Czy masz w domu swoje ulubione miejsce?",
      "Czy potrafisz ugotować coś bez przepisu?",
      "Czy lubisz oglądać stare zdjęcia?",
      "Czy pamiętasz urodziny bliskich?",
      "Czy łatwo dzielisz się obowiązkami?",
      "Czy domowy obiad wygrywa z restauracją?",
      "Czy lubisz opowiadać rodzinne historie?",
      "Czy zdarza ci się gubić pilot do telewizora?",
      "Czy masz w domu rzecz, której nikt nie może wyrzucić?",
      "Czy lubisz dekorować mieszkanie?",
      "Czy sprzątanie przy muzyce idzie szybciej?",
      "Czy masz ulubione domowe danie?",
      "Czy łatwo dogadujesz się z młodszymi osobami?",
      "Czy potrafisz naprawić drobną usterkę?",
      "Czy lubisz spokojne wieczory w domu?",
      "Czy w rodzinie jest ktoś, kto zawsze żartuje?",
      "Czy tradycje są dla ciebie ważne?",
      "Czy często dzwonisz do bliskich?",
      "Czy lubisz planszówki przy stole?",
      "Czy masz domowy rytuał na weekend?",
      "Czy potrafisz zrobić zakupy dla całej rodziny?",
      "Czy lubisz gości w domu?",
      "Czy łatwo oddajesz ostatni kawałek ciasta?",
      "Czy pamiętasz swój pierwszy pokój?",
      "Czy lubisz wspólne gotowanie?",
      "Czy dom powinien pachnieć świeżym jedzeniem?",
      "Czy potrafisz szybko ogarnąć bałagan przed wizytą?",
      "Czy rodzinne powiedzonka zostają na lata?",
      "Czy lubisz wracać do znanych miejsc?"
    ]
  },
  {
    name: "Hobby i talenty",
    questions: [
      "Czy masz hobby, do którego wracasz od lat?",
      "Czy lubisz próbować nowych zajęć?",
      "Czy potrafisz rysować lepiej niż przeciętnie?",
      "Czy muzyka poprawia ci humor?",
      "Czy lubisz śpiewać, gdy nikt nie słyszy?",
      "Czy sport daje ci energię?",
      "Czy czytasz książki dla przyjemności?",
      "Czy umiesz zrobić coś własnymi rękami?",
      "Czy lubisz uczyć się ciekawostek?",
      "Czy masz talent, o którym mało kto wie?",
      "Czy lubisz układać puzzle?",
      "Czy potrafisz tańczyć bez wstydu?",
      "Czy fotografia cię interesuje?",
      "Czy wolisz hobby w domu od hobby na zewnątrz?",
      "Czy lubisz rywalizację sportową?",
      "Czy potrafisz grać na instrumencie?",
      "Czy masz kolekcję jakichś przedmiotów?",
      "Czy lubisz majsterkowanie?",
      "Czy gry logiczne sprawiają ci frajdę?",
      "Czy często zaczynasz nowe projekty?",
      "Czy kończysz to, co zaczynasz?",
      "Czy lubisz oglądać poradniki?",
      "Czy masz ulubiony gatunek muzyki?",
      "Czy łatwo zapamiętujesz melodie?",
      "Czy lubisz kreatywne zadania?",
      "Czy potrafisz wymyślić coś z niczego?",
      "Czy trening czyni mistrza?",
      "Czy talent bez pracy wystarczy?",
      "Czy lubisz pokazywać swoje umiejętności?",
      "Czy dzisiaj odkryjemy twój ukryty talent?"
    ]
  },
  {
    name: "Jedzenie",
    questions: [
      "Czy pizza smakuje dobrze następnego dnia?",
      "Czy lubisz próbować nowych smaków?",
      "Czy śniadanie może być na kolację?",
      "Czy deser jest osobnym posiłkiem?",
      "Czy potrafisz zjeść ostre jedzenie?",
      "Czy gotowanie cię relaksuje?",
      "Czy herbata pasuje do każdej rozmowy?",
      "Czy kawa bez cukru jest lepsza?",
      "Czy lubisz chrupiące przekąski?",
      "Czy masz ulubione danie z dzieciństwa?",
      "Czy zupa może być daniem głównym?",
      "Czy lubisz jeść poza domem?",
      "Czy potrafisz odgadnąć składniki po smaku?",
      "Czy owoce są dobrą przekąską?",
      "Czy warzywa z grilla są lepsze niż gotowane?",
      "Czy kanapka może być kreatywna?",
      "Czy lubisz gotować dla innych?",
      "Czy potrafisz nie podjadać między posiłkami?",
      "Czy słone wygrywa ze słodkim?",
      "Czy czekolada poprawia humor?",
      "Czy masz ulubiony smak lodów?",
      "Czy makaron pasuje do wszystkiego?",
      "Czy domowe jedzenie smakuje najlepiej?",
      "Czy umiesz zrobić szybki obiad?",
      "Czy lubisz eksperymenty w kuchni?",
      "Czy jedzenie łączy ludzi?",
      "Czy przyprawy są ważniejsze niż przepis?",
      "Czy potrafisz odmówić dokładki?",
      "Czy lubisz wspólne jedzenie przy stole?",
      "Czy ta gra zaostrza apetyt?"
    ]
  },
  {
    name: "Podróże",
    questions: [
      "Czy lubisz pakować walizkę?",
      "Czy wolisz góry od morza?",
      "Czy mapa papierowa ma swój urok?",
      "Czy łatwo odnajdujesz drogę w nowym miejscu?",
      "Czy podróż pociągiem może być wygodna?",
      "Czy lubisz zwiedzać muzea?",
      "Czy robisz zdjęcia na wyjazdach?",
      "Czy lokalne jedzenie jest częścią podróży?",
      "Czy potrafisz spać w drodze?",
      "Czy plan wyjazdu powinien być szczegółowy?",
      "Czy spontaniczna wycieczka brzmi dobrze?",
      "Czy lubisz wracać w to samo miejsce?",
      "Czy pamiątki są warte miejsca w bagażu?",
      "Czy umiesz spakować się lekko?",
      "Czy lotnisko cię stresuje?",
      "Czy wycieczka za miasto wystarczy na reset?",
      "Czy lubisz długie spacery w nowych miejscach?",
      "Czy pogoda może zepsuć wyjazd?",
      "Czy wakacje bez internetu są możliwe?",
      "Czy znasz jakieś zdanie w obcym języku?",
      "Czy łatwo próbujesz lokalnych zwyczajów?",
      "Czy lubisz oglądać zachody słońca w podróży?",
      "Czy dobrze czytasz rozkłady jazdy?",
      "Czy wolisz hotel od namiotu?",
      "Czy wyjazd z paczką jest lepszy niż samotny?",
      "Czy lubisz planować trasę?",
      "Czy zdarza ci się kupić magnes z podróży?",
      "Czy najlepsze wspomnienia powstają przypadkiem?",
      "Czy krótki wyjazd może dać dużo energii?",
      "Czy masz miejsce, do którego chcesz wrócić?"
    ]
  },
  {
    name: "Technologia",
    questions: [
      "Czy telefon ułatwia życie?",
      "Czy potrafisz wytrzymać dzień bez internetu?",
      "Czy robisz kopie zapasowe zdjęć?",
      "Czy masz porządek w aplikacjach?",
      "Czy często używasz trybu cichego?",
      "Czy emotikony pomagają w rozmowie?",
      "Czy wiadomości głosowe są wygodne?",
      "Czy lubisz nowe gadżety?",
      "Czy hasła powinny być trudne?",
      "Czy potrafisz szybko naprawić prosty problem w telefonie?",
      "Czy aparat w telefonie jest ważny?",
      "Czy muzyka w słuchawkach pomaga się skupić?",
      "Czy często robisz zrzuty ekranu?",
      "Czy masz zbyt wiele zdjęć w galerii?",
      "Czy kalendarz w telefonie ratuje terminy?",
      "Czy tryb samolotowy bywa przydatny?",
      "Czy łatwo uczysz się nowych aplikacji?",
      "Czy wolisz pisać niż dzwonić?",
      "Czy powiadomienia rozpraszają?",
      "Czy technologia może zbliżać ludzi?",
      "Czy drukarka zawsze działa wtedy, kiedy trzeba?",
      "Czy inteligentny zegarek jest pomocny?",
      "Czy lubisz personalizować ekran główny?",
      "Czy często aktualizujesz aplikacje?",
      "Czy ładowarka powinna zawsze być pod ręką?",
      "Czy zdjęcia w chmurze są wygodne?",
      "Czy pamiętasz numery telefonów bez kontaktów?",
      "Czy wideo rozmowy są naturalne?",
      "Czy technologia oszczędza czas?",
      "Czy da się wygrać tę grę dzięki refleksowi?"
    ]
  },
  {
    name: "Wyobraźnia",
    questions: [
      "Czy umiesz wymyślić historię z trzech słów?",
      "Czy lubisz marzyć o dalekich miejscach?",
      "Czy potrafisz sobie wyobrazić dom na drzewie?",
      "Czy bajki mają sens w każdym wieku?",
      "Czy chciałbyś/chciałabyś mieć supermoc?",
      "Czy podróż w czasie byłaby dobrym pomysłem?",
      "Czy łatwo wymyślasz nazwy dla rzeczy?",
      "Czy zwykły przedmiot może stać się rekwizytem w zabawie?",
      "Czy lubisz pytania zaczynające się od co by było gdyby?",
      "Czy potrafisz narysować mapę z pamięci?",
      "Czy wymyślony świat może być ciekawszy od realnego?",
      "Czy chciałbyś/chciałabyś mówić wszystkimi językami?",
      "Czy umiesz opisać kolor bez używania jego nazwy?",
      "Czy masz bujną wyobraźnię?",
      "Czy potrafisz wymyślić nowe święto?",
      "Czy lubisz historie z niespodzianką?",
      "Czy świat bez muzyki byłby dziwny?",
      "Czy można zrobić grę z dowolnego pomysłu?",
      "Czy wyobrażasz sobie miasto bez samochodów?",
      "Czy chciałbyś/chciałabyś latać jak ptak?",
      "Czy łatwo tworzysz skojarzenia?",
      "Czy sen może być inspiracją?",
      "Czy lubisz fantastyczne filmy?",
      "Czy wymyślenie nowego smaku lodów jest trudne?",
      "Czy potrafisz udawać narratora?",
      "Czy lubisz zagadki bez oczywistej odpowiedzi?",
      "Czy twoja wyobraźnia pracuje szybciej wieczorem?",
      "Czy magiczny przycisk byłby kuszący?",
      "Czy można opowiedzieć ciekawą historię bez słów?",
      "Czy ta runda wymaga sprytu?"
    ]
  },
  {
    name: "Finał",
    questions: [
      "Czy pamiętasz pierwsze pytanie z tej gry?",
      "Czy ktoś dzisiaj zaskoczył cię odpowiedzią?",
      "Czy potrafisz zakończyć rundę bez pomyłki?",
      "Czy prowadzenie w grze dodaje pewności?",
      "Czy przegrana może być zabawna?",
      "Czy zwycięzca powinien dostać brawa?",
      "Czy ostatnia runda jest najtrudniejsza?",
      "Czy pamiętasz, kto miał najwięcej wpadek?",
      "Czy ktoś powinien dostać nagrodę za kreatywność?",
      "Czy presja czasu pomaga?",
      "Czy warto grać rewanż?",
      "Czy łatwiej odpowiadać na końcu gry?",
      "Czy pytania były podchwytliwe?",
      "Czy udało ci się unikać zakazanych słów?",
      "Czy ktoś ma dziś szczęście do koła?",
      "Czy plansza do mety dodaje emocji?",
      "Czy wolny los potrafi zmienić wynik?",
      "Czy w pojedynku każdy błąd boli bardziej?",
      "Czy najlepszy gracz powinien kręcić ostatni?",
      "Czy publiczność może pomagać miną?",
      "Czy szybka odpowiedź jest lepsza od długiej?",
      "Czy spryt wygrywa z pamięcią?",
      "Czy spokój pomaga przy trudnych pytaniach?",
      "Czy ktoś odkrył nową taktykę?",
      "Czy finał powinien być głośny?",
      "Czy wygrana jednym punktem smakuje najlepiej?",
      "Czy można mieć styl przegrywania?",
      "Czy ta gra nadaje się na kolejne spotkanie?",
      "Czy zwycięzca powinien wymyślić następne pytanie?",
      "Czy kończymy tę partię z uśmiechem?"
    ]
  }
];

const colorSet = ["#ff5c6c", "#33d4bd", "#f6b64c", "#8e72ff", "#71df8a", "#ff8b5f"];
const wheelIcons = ["♕", "⚡", "☆", "✌", "♡", "◐"];
const defaultPlayers = ["Ola", "Bartek", "Kamil", "Natalia"];
const finishScore = 10;

const state = {
  players: loadPlayers(),
  availablePlayers: [],
  activePlayerId: null,
  activeQuestion: null,
  currentRotation: 0,
  round: 1,
  mode: "party",
  timerDuration: 30,
  timerLeft: 30,
  answeredThisRound: [],
  turnsThisRound: 0,
  timerId: null,
  isSpinning: false
};

const els = {
  titleScreen: document.querySelector("#titleScreen"),
  setupScreen: document.querySelector("#setupScreen"),
  gameScreen: document.querySelector("#gameScreen"),
  boardScreen: document.querySelector("#boardScreen"),
  playerForm: document.querySelector("#playerForm"),
  playerName: document.querySelector("#playerName"),
  setupPlayers: document.querySelector("#setupPlayers"),
  removeAfterSpin: document.querySelector("#removeAfterSpin"),
  freePassLast: document.querySelector("#freePassLast"),
  duelMode: document.querySelector("#duelMode"),
  roundTime: document.querySelector("#roundTime"),
  enterSetup: document.querySelector("#enterSetup"),
  startGame: document.querySelector("#startGame"),
  backToSetup: document.querySelector("#backToSetup"),
  resetGame: document.querySelector("#resetGame"),
  roundInfo: document.querySelector("#roundInfo"),
  scoreStrip: document.querySelector("#scoreStrip"),
  wheelBadge: document.querySelector("#wheelBadge"),
  wheel: document.querySelector("#playerWheel"),
  spinButton: document.querySelector("#spinButton"),
  activePlayer: document.querySelector("#activePlayer"),
  timer: document.querySelector("#timer"),
  questionText: document.querySelector("#questionText"),
  currentScore: document.querySelector("#currentScore"),
  playersCount: document.querySelector("#playersCount"),
  successButton: document.querySelector("#successButton"),
  failButton: document.querySelector("#failButton"),
  skipButton: document.querySelector("#skipButton"),
  installAndroid: document.querySelector("#installAndroid"),
  setupInfo: document.querySelector("#setupInfo"),
  boardTitle: document.querySelector("#boardTitle"),
  boardSubtitle: document.querySelector("#boardSubtitle"),
  boardPath: document.querySelector("#boardPath"),
  boardScores: document.querySelector("#boardScores"),
  continueRound: document.querySelector("#continueRound")
};

const ctx = els.wheel.getContext("2d");
let deferredInstallPrompt = null;

function loadPlayers() {
  const saved = localStorage.getItem("nmt_players");
  if (!saved) {
    return defaultPlayers.map(createPlayer);
  }

  try {
    const parsed = JSON.parse(saved);
    return parsed.length ? parsed.map(normalizePlayer) : defaultPlayers.map(createPlayer);
  } catch {
    return defaultPlayers.map(createPlayer);
  }
}

function savePlayers() {
  localStorage.setItem("nmt_players", JSON.stringify(state.players));
}

function createPlayer(name) {
  return {
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    name,
    fails: 0,
    wins: 0,
    skips: 0,
    freePasses: 0,
    answered: 0
  };
}

function normalizePlayer(player) {
  return {
    id: player.id || (crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`),
    name: player.name || "Gracz",
    fails: player.fails || 0,
    wins: player.wins || 0,
    skips: player.skips || 0,
    freePasses: player.freePasses || 0,
    answered: player.answered || 0
  };
}

function renderSetupPlayers() {
  els.setupPlayers.innerHTML = "";

  state.players.forEach((player) => {
    const chip = document.createElement("span");
    chip.className = "player-chip";
    chip.textContent = player.name;

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.setAttribute("aria-label", `Usuń ${player.name}`);
    removeButton.textContent = "x";
    removeButton.addEventListener("click", () => removePlayer(player.id));

    chip.append(removeButton);
    els.setupPlayers.append(chip);
  });
}

function renderScores() {
  if (!els.scoreStrip) return;
  els.scoreStrip.innerHTML = "";

  state.players.forEach((player) => {
    const score = document.createElement("div");
    score.className = "score-pill";
    score.innerHTML = `<strong>${escapeHtml(player.name)}</strong><span>${player.fails} wpadki / ${player.wins} ok</span>`;
    els.scoreStrip.append(score);
  });
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function removePlayer(id) {
  if (state.players.length <= 2) {
    alert("Zostaw minimum 2 graczy.");
    return;
  }

  state.players = state.players.filter((player) => player.id !== id);
  savePlayers();
  renderSetupPlayers();
  syncDuelSettings();
  drawWheel(state.players);
}

function addPlayer(name) {
  const cleanName = name.trim();
  if (!cleanName) return;

  state.players.push(createPlayer(cleanName));
  savePlayers();
  renderSetupPlayers();
  els.playerName.value = "";
  syncDuelSettings();
}

function syncDuelSettings() {
  const hasExactlyTwoPlayers = state.players.length === 2;

  els.duelMode.checked = hasExactlyTwoPlayers;
  els.duelMode.disabled = true;

  const duelActive = els.duelMode.checked;
  if (duelActive) {
    els.removeAfterSpin.checked = false;
    els.freePassLast.checked = false;
  }

  els.removeAfterSpin.disabled = duelActive;
  els.freePassLast.disabled = duelActive;
}

function startGame() {
  if (state.players.length < 2) {
    alert("Dodaj minimum 2 graczy.");
    return;
  }

  state.mode = els.duelMode.checked ? "duel" : "party";
  if (state.mode === "duel" && state.players.length !== 2) {
    alert("Tryb Pojedynek działa tylko dla 2 graczy.");
    return;
  }

  state.timerDuration = Number(els.roundTime.value);
  state.timerLeft = state.timerDuration;
  state.players = state.players.map((player) => ({ ...player, fails: 0, wins: 0, skips: 0, freePasses: 0, answered: 0 }));
  state.availablePlayers = state.mode === "duel" ? [state.players[0]] : [...state.players];
  state.answeredThisRound = [];
  state.turnsThisRound = 0;
  state.activePlayerId = null;
  state.activeQuestion = null;
  state.round = 1;
  savePlayers();
  showScreen("game");
  drawWheel(state.mode === "duel" ? state.players : state.availablePlayers);
  renderScores();
  updateTurnCopy();
  setActionButtons(false);
}

function showScreen(screenName) {
  els.titleScreen.classList.toggle("is-hidden", screenName !== "title");
  els.setupScreen.classList.toggle("is-hidden", screenName !== "setup");
  els.gameScreen.classList.toggle("is-hidden", screenName !== "game");
  els.boardScreen.classList.toggle("is-hidden", screenName !== "board");
}

function drawWheel(players) {
  const wheelPlayers = players.length ? players : state.players;
  const size = els.wheel.width;
  const radius = size / 2;
  const slice = (Math.PI * 2) / wheelPlayers.length;

  ctx.clearRect(0, 0, size, size);

  const baseShadow = ctx.createRadialGradient(radius, radius + 18, 70, radius, radius + 18, radius);
  baseShadow.addColorStop(0, "rgba(255, 92, 108, 0.18)");
  baseShadow.addColorStop(0.62, "rgba(0, 0, 0, 0.22)");
  baseShadow.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.beginPath();
  ctx.ellipse(radius, radius + 20, radius - 12, radius - 2, 0, 0, Math.PI * 2);
  ctx.fillStyle = baseShadow;
  ctx.fill();

  ctx.beginPath();
  ctx.arc(radius, radius, radius - 5, 0, Math.PI * 2);
  ctx.fillStyle = "#0f1118";
  ctx.fill();
  ctx.lineWidth = 10;
  ctx.strokeStyle = "#2a2d38";
  ctx.stroke();

  wheelPlayers.forEach((player, index) => {
    const start = index * slice - Math.PI / 2;
    const end = start + slice;
    const segmentColor = colorSet[index % colorSet.length];
    const gradient = ctx.createRadialGradient(radius - 20, radius - 34, 42, radius, radius, radius - 12);
    gradient.addColorStop(0, lightenColor(segmentColor, 20));
    gradient.addColorStop(0.55, segmentColor);
    gradient.addColorStop(1, shadeColor(segmentColor, -24));

    ctx.beginPath();
    ctx.moveTo(radius, radius);
    ctx.arc(radius, radius, radius - 18, start, end);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgba(15, 17, 24, 0.55)";
    ctx.stroke();

    ctx.save();
    ctx.globalCompositeOperation = "screen";
    ctx.beginPath();
    ctx.moveTo(radius, radius);
    ctx.arc(radius, radius, radius - 25, start + 0.03, end - 0.03);
    ctx.closePath();
    ctx.fillStyle = "rgba(255, 255, 255, 0.12)";
    ctx.fill();
    ctx.restore();

    drawWheelLabel({
      name: player.name,
      icon: wheelIcons[index % wheelIcons.length],
      angle: start + slice / 2,
      radius,
      playerCount: wheelPlayers.length
    });

    const dotAngle = start + 0.05;
    ctx.beginPath();
    ctx.arc(
      radius + Math.cos(dotAngle) * (radius - 17),
      radius + Math.sin(dotAngle) * (radius - 17),
      4,
      0,
      Math.PI * 2
    );
    ctx.fillStyle = "#fff7ec";
    ctx.shadowColor = segmentColor;
    ctx.shadowBlur = 13;
    ctx.fill();
    ctx.shadowBlur = 0;
  });

  const shine = ctx.createLinearGradient(70, 38, 250, 210);
  shine.addColorStop(0, "rgba(255, 255, 255, 0.22)");
  shine.addColorStop(0.44, "rgba(255, 255, 255, 0.04)");
  shine.addColorStop(1, "rgba(255, 255, 255, 0)");
  ctx.beginPath();
  ctx.arc(radius, radius, radius - 24, Math.PI * 1.05, Math.PI * 1.72);
  ctx.lineWidth = 18;
  ctx.strokeStyle = shine;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(radius, radius, radius - 16, 0, Math.PI * 2);
  ctx.lineWidth = 8;
  ctx.strokeStyle = "rgba(255, 255, 255, 0.16)";
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(radius, radius, radius - 7, 0, Math.PI * 2);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "rgba(255, 92, 108, 0.42)";
  ctx.shadowColor = "#ff5c6c";
  ctx.shadowBlur = 10;
  ctx.stroke();
  ctx.shadowBlur = 0;

  ctx.beginPath();
  ctx.arc(radius, radius, 66, 0, Math.PI * 2);
  ctx.fillStyle = "#17171f";
  ctx.fill();
  ctx.strokeStyle = "#ff5c6c";
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fillStyle = "#ff5c6c";
  ctx.font = "950 29px system-ui, sans-serif";
  ctx.textAlign = "center";
}

function drawWheelLabel({ name, icon, angle, radius, playerCount }) {
  const labelRadius = playerCount <= 2 ? radius * 0.62 : radius * 0.66;
  const x = radius + Math.cos(angle) * labelRadius;
  const y = radius + Math.sin(angle) * labelRadius;
  const maxWidth = playerCount <= 2 ? 84 : Math.max(44, Math.min(80, (Math.PI * labelRadius * 0.82) / playerCount));

  ctx.save();
  ctx.translate(x, y);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#fff7ec";
  ctx.shadowColor = "rgba(0, 0, 0, 0.62)";
  ctx.shadowBlur = 4;

  const fittedName = fitWheelName(name, maxWidth);
  ctx.font = `${fittedName.weight} ${fittedName.size}px system-ui, sans-serif`;
  ctx.fillText(fittedName.text, 0, 0);

  if (playerCount <= 4) {
    ctx.font = "900 24px system-ui, sans-serif";
    ctx.globalAlpha = 0.58;
    ctx.fillText(icon, 0, 34);
  }

  ctx.restore();
}

function fitWheelName(name, maxWidth) {
  const cleanName = name.trim() || "Gracz";
  let size = 21;
  const minSize = 12;
  const weight = 950;

  while (size > minSize) {
    ctx.font = `${weight} ${size}px system-ui, sans-serif`;
    if (ctx.measureText(cleanName).width <= maxWidth) {
      return { text: cleanName, size, weight };
    }
    size -= 1;
  }

  ctx.font = `${weight} ${minSize}px system-ui, sans-serif`;
  let shortName = cleanName;
  while (shortName.length > 2 && ctx.measureText(`${shortName}…`).width > maxWidth) {
    shortName = shortName.slice(0, -1);
  }

  return { text: shortName.length > 2 ? `${shortName}…` : cleanName.slice(0, 2), size: minSize, weight };
}

function shadeColor(hex, percent) {
  return shiftColor(hex, -Math.abs(percent));
}

function lightenColor(hex, percent) {
  return shiftColor(hex, Math.abs(percent));
}

function shiftColor(hex, percent) {
  const value = parseInt(hex.replace("#", ""), 16);
  const amount = Math.round(2.55 * percent);
  const red = Math.max(0, Math.min(255, (value >> 16) + amount));
  const green = Math.max(0, Math.min(255, ((value >> 8) & 0x00ff) + amount));
  const blue = Math.max(0, Math.min(255, (value & 0x0000ff) + amount));
  return `#${(0x1000000 + red * 0x10000 + green * 0x100 + blue).toString(16).slice(1)}`;
}

function spinWheel() {
  if (state.isSpinning) return;

  if (!state.availablePlayers.length) {
    showBoard();
    return;
  }

  const wheelPlayers = state.mode === "duel" ? state.players : state.availablePlayers;
  const selectedIndex = state.mode === "duel"
    ? state.turnsThisRound % state.players.length
    : Math.floor(Math.random() * wheelPlayers.length);
  const selectedPlayer = wheelPlayers[selectedIndex];
  const sliceAngle = 360 / wheelPlayers.length;
  const selectedCenter = selectedIndex * sliceAngle + sliceAngle / 2 - 90;
  const currentVisualRotation = normalizeDegrees(state.currentRotation);
  const neededRotation = normalizeDegrees(-90 - selectedCenter - currentVisualRotation);
  const extraSpins = (6 + Math.floor(Math.random() * 4)) * 360;
  const targetRotation = state.currentRotation + extraSpins + neededRotation;

  state.isSpinning = true;
  els.spinButton.disabled = true;
  setActionButtons(false);
  stopTimer();
  state.activePlayerId = null;
  state.activeQuestion = "Koło się kręci...";
  updateTurnCopy();
  els.spinButton.textContent = "Kręci...";
  els.wheel.style.transform = `rotate(${targetRotation}deg)`;
  state.currentRotation = targetRotation;

  window.setTimeout(() => {
    state.isSpinning = false;
    state.activePlayerId = selectedPlayer.id;
    state.activeQuestion = pickQuestion();

    updateTurnCopy();
    setActionButtons(true);
    startTimer();
    els.spinButton.textContent = "Kręć";
    els.spinButton.disabled = false;
  }, 4600);
}

function normalizeDegrees(value) {
  return ((value % 360) + 360) % 360;
}

function pickQuestion() {
  const previous = state.activeQuestion;
  const questionPool = categories[state.round - 1].questions;
  let next = questionPool[Math.floor(Math.random() * questionPool.length)];

  if (questionPool.length > 1) {
    while (next === previous) {
      next = questionPool[Math.floor(Math.random() * questionPool.length)];
    }
  }

  return next;
}

function updateTurnCopy() {
  const player = state.players.find((item) => item.id === state.activePlayerId);
  const category = categories[state.round - 1];
  els.roundInfo.textContent = state.mode === "duel"
    ? `Pojedynek · Runda ${state.round}/10 · ${category.name}`
    : `Runda ${state.round}/10 · ${category.name}`;
  els.activePlayer.textContent = player ? `Gra: ${player.name}` : "Gra: losuj gracza";
  els.wheelBadge.innerHTML = player ? `Gra: <strong>${escapeHtml(player.name)}</strong>` : "Gra: ?";
  els.questionText.textContent = state.activeQuestion || (state.mode === "duel"
    ? `Pojedynek 1 na 1. Kliknij Kręć, żeby rozpocząć turę.`
    : `Kategoria: ${category.name}. Kliknij Kręć, żeby wylosować gracza.`);
  els.playersCount.textContent = `${state.players.length} graczy`;
  els.currentScore.innerHTML = player
    ? scoreMarkup(player.wins, player.fails)
    : scoreMarkup(0, 0);
  updateTimer(state.timerDuration);
}

function scoreMarkup(wins, fails) {
  const total = Math.max(1, wins + fails);
  const okPercent = Math.round((wins / total) * 100);
  return `
    <div class="score-label">Wynik bieżącego gracza</div>
    <span class="score-ok"><i aria-hidden="true">✓</i><strong>${wins}</strong></span>
    <span class="score-fail"><i aria-hidden="true">×</i><strong>${fails}</strong></span>
    <div class="score-bar" aria-hidden="true"><span style="width: ${okPercent}%"></span></div>
  `;
}

function startTimer() {
  stopTimer();
  state.timerLeft = state.timerDuration;
  updateTimer(state.timerLeft);

  state.timerId = window.setInterval(() => {
    state.timerLeft -= 1;
    updateTimer(state.timerLeft);

    if (state.timerLeft <= 0) {
      stopTimer();
      if (state.activePlayerId) {
        finishTurn("fail");
      }
    }
  }, 1000);
}

function stopTimer() {
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }
}

function updateTimer(value) {
  els.timer.textContent = String(value);
  els.timer.classList.toggle("is-low", value <= 5);
}

function setActionButtons(enabled) {
  els.successButton.disabled = !enabled;
  els.failButton.disabled = !enabled;
  els.skipButton.disabled = !enabled;
}

function finishTurn(result) {
  const player = state.players.find((item) => item.id === state.activePlayerId);
  if (!player) return;

  if (result === "success") player.wins += 1;
  if (result === "fail") player.fails += 1;
  if (result === "skip") player.skips += 1;
  player.answered += 1;
  state.answeredThisRound.push(player.id);
  state.turnsThisRound += 1;

  if (state.mode === "duel") {
    state.availablePlayers = state.turnsThisRound >= state.players.length
      ? []
      : [state.players[state.turnsThisRound % state.players.length]];
  } else if (els.removeAfterSpin.checked) {
    state.availablePlayers = state.availablePlayers.filter((item) => item.id !== player.id);
  } else if (state.turnsThisRound >= state.players.length) {
    state.availablePlayers = [];
  } else {
    state.availablePlayers = [...state.players];
  }

  savePlayers();
  stopTimer();
  renderScores();
  setActionButtons(false);
  applyFreePassIfNeeded();
  if (state.availablePlayers.length) {
    drawWheel(state.mode === "duel" ? state.players : state.availablePlayers);
  }
  state.activePlayerId = null;
  state.activeQuestion = state.availablePlayers.length
    ? "Tura zakończona. Kręć dalej."
    : "Runda zakończona. Przechodzicie na planszę.";
  updateTurnCopy();

  if (!state.availablePlayers.length) {
    window.setTimeout(showBoard, 260);
  }
}

function applyFreePassIfNeeded() {
  if (state.mode === "duel" || !els.removeAfterSpin.checked || !els.freePassLast.checked || state.availablePlayers.length !== 1) return;

  const freePlayer = state.availablePlayers[0];
  freePlayer.wins += 1;
  freePlayer.freePasses += 1;
  state.availablePlayers = [];
  state.activeQuestion = `Wolny los dla ${freePlayer.name}: +1 punkt i ruch do mety.`;
  savePlayers();
}

function showBoard() {
  stopTimer();
  setActionButtons(false);
  renderBoard();
  showScreen("board");
}

function renderBoard() {
  const leaders = state.players.filter((player) => player.wins >= finishScore);
  const isFinal = leaders.length > 0 || state.round >= categories.length;
  const leaderText = leaders.length ? `Meta: ${leaders.map((player) => player.name).join(", ")}` : "";
  els.boardTitle.textContent = isFinal && leaders.length ? "Meta!" : `Runda ${state.round} zakończona`;
  els.boardSubtitle.textContent = isFinal
    ? `${leaderText || "Koniec rund."} Punkty przesuwają pionki na planszy do mety.`
    : state.mode === "duel"
      ? `Pojedynek: po jednej turze dla każdego. Dał radę przesuwa pionek o 1 pole.`
      : `Kategoria: ${categories[state.round - 1].name}. Dał radę i wolny los przesuwają pionek o 1 pole.`;
  els.continueRound.textContent = isFinal ? "Nowa gra" : `Runda ${state.round + 1}: ${categories[state.round].name}`;
  els.boardPath.innerHTML = state.players.map((player, index) => playerTrackMarkup(player, index)).join("");

  const ranking = [...state.players].sort((a, b) => b.wins - a.wins || a.fails - b.fails || a.name.localeCompare(b.name));
  els.boardScores.innerHTML = ranking.map((player, index) => `
    <div class="board-score">
      <strong>${index + 1}. ${escapeHtml(player.name)}</strong>
      <span>${Math.min(player.wins, finishScore)}/10 pól · ${player.fails} wpadki · ${player.freePasses} wolne losy</span>
    </div>
  `).join("");
}

function playerTrackMarkup(player, index) {
  const score = Math.min(player.wins, finishScore);
  const cells = Array.from({ length: finishScore + 1 }, (_, cellIndex) => {
    const stateClass = cellIndex < score ? "is-done" : cellIndex === score ? "is-current" : "";
    const label = cellIndex === 0 ? "S" : cellIndex === finishScore ? "META" : cellIndex;
    return `<span class="track-cell ${stateClass}">${label}</span>`;
  }).join("");

  return `
    <div class="player-track">
      <div class="track-head">
        <strong>${escapeHtml(player.name)}</strong>
        <span>${score}/10</span>
      </div>
      <div class="track-cells" style="--track-color: ${colorSet[index % colorSet.length]}">${cells}</div>
    </div>
  `;
}

function continueFromBoard() {
  if (state.round >= categories.length || state.players.some((player) => player.wins >= finishScore)) {
    showScreen("setup");
    renderSetupPlayers();
    return;
  }

  state.round += 1;
  state.availablePlayers = state.mode === "duel" ? [state.players[0]] : [...state.players];
  state.answeredThisRound = [];
  state.turnsThisRound = 0;
  state.activePlayerId = null;
  state.activeQuestion = null;
  drawWheel(state.mode === "duel" ? state.players : state.availablePlayers);
  updateTurnCopy();
  showScreen("game");
}

function resetGame() {
  stopTimer();
  state.players = state.players.map((player) => ({ ...player, fails: 0, wins: 0, skips: 0, freePasses: 0, answered: 0 }));
  state.availablePlayers = state.mode === "duel" ? [state.players[0]] : [...state.players];
  state.answeredThisRound = [];
  state.turnsThisRound = 0;
  state.activePlayerId = null;
  state.activeQuestion = null;
  state.round = 1;
  savePlayers();
  drawWheel(state.mode === "duel" ? state.players : state.availablePlayers);
  renderScores();
  updateTurnCopy();
  setActionButtons(false);
}

els.playerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addPlayer(els.playerName.value);
});

els.duelMode.addEventListener("change", syncDuelSettings);
els.startGame.addEventListener("click", startGame);
els.enterSetup.addEventListener("click", () => {
  showScreen("setup");
  renderSetupPlayers();
});
els.backToSetup.addEventListener("click", () => {
  stopTimer();
  showScreen("setup");
  renderSetupPlayers();
});
els.resetGame.addEventListener("click", resetGame);
els.spinButton.addEventListener("click", spinWheel);
els.successButton.addEventListener("click", () => finishTurn("success"));
els.failButton.addEventListener("click", () => finishTurn("fail"));
els.skipButton.addEventListener("click", () => finishTurn("skip"));
els.continueRound.addEventListener("click", continueFromBoard);

document.querySelectorAll("[data-panel]").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.panel === "iphone") {
      els.setupInfo.classList.remove("is-hidden");
      els.setupInfo.innerHTML = `
        <h2>Instalacja na iPhonie</h2>
        <ol>
          <li>Otwórz grę w Safari.</li>
          <li>Kliknij ikonę udostępniania.</li>
          <li>Wybierz “Do ekranu początkowego”.</li>
          <li>Potwierdź przyciskiem “Dodaj”.</li>
        </ol>
      `;
      return;
    }

    els.setupInfo.classList.remove("is-hidden");
    els.setupInfo.innerHTML = `
      <h2>Instrukcja</h2>
      <ol>
        <li>Dodaj graczy i ustaw czas odpowiedzi.</li>
        <li>Kręć kołem, żeby wylosować osobę.</li>
        <li>Gracz odpowiada bez słów TAK i NIE.</li>
        <li>Dał radę oraz wolny los przesuwają pionek o 1 pole.</li>
        <li>Tryb Pojedynek działa tylko dla 2 graczy: każdy ma po jednej turze w rundzie.</li>
        <li>Pierwsza osoba na polu 10 wygrywa.</li>
      </ol>
    `;
  });
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  els.installAndroid.textContent = "Android";
});

els.installAndroid.addEventListener("click", async () => {
  if (!deferredInstallPrompt) {
    els.setupInfo.classList.remove("is-hidden");
    els.setupInfo.innerHTML = `
      <h2>Instalacja na Androidzie</h2>
      <ol>
        <li>Otwórz menu przeglądarki.</li>
        <li>Wybierz “Zainstaluj aplikację” albo “Dodaj do ekranu głównego”.</li>
        <li>Potwierdź instalację.</li>
      </ol>
    `;
    return;
  }

  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  els.installAndroid.textContent = "Gotowe";
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js?v=38").catch(() => {});
  });
}

renderSetupPlayers();
syncDuelSettings();
drawWheel(state.players);
