import type { RootState } from '../app/store';

export interface MultiLangQuestion {
  category: string;
  difficulty: string;
  question: { en: string; sk: string };
  options: { en: string[]; sk:string[] };
  correct_answer: { en: string; sk: string };
}


export interface Question {
    question: string;
    options: string[];
    correct_answer: string;
}

const shuffleArray = <T>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const allMultiLangQuestions: MultiLangQuestion[] = [
  // =================================================================
  // Science 
  // =================================================================
  { category: "Science", difficulty: "easy", question: { en: "What is the chemical symbol for water?", sk: "Aký je chemický symbol pre vodu?" }, options: { en: ["H2O", "O2", "CO2", "NaCl"], sk: ["H2O", "O2", "CO2", "NaCl"] }, correct_answer: { en: "H2O", sk: "H2O" } },
  { category: "Science", difficulty: "easy", question: { en: "Which planet is known as the Red Planet?", sk: "Ktorá planéta je známa ako Červená planéta?" }, options: { en: ["Mars", "Jupiter", "Venus", "Saturn"], sk: ["Mars", "Jupiter", "Venuša", "Saturn"] }, correct_answer: { en: "Mars", sk: "Mars" } },
  { category: "Science", difficulty: "easy", question: { en: "What is the largest organ in the human body?", sk: "Aký je najväčší orgán v ľudskom tele?" }, options: { en: ["Skin", "Liver", "Heart", "Brain"], sk: ["Koža", "Pečeň", "Srdce", "Mozog"] }, correct_answer: { en: "Skin", sk: "Koža" } },
  { category: "Science", difficulty: "medium", question: { en: "What is the powerhouse of the cell?", sk: "Čo je 'elektrárňou' bunky?" }, options: { en: ["Mitochondrion", "Nucleus", "Ribosome", "Lysosome"], sk: ["Mitochondria", "Jadro", "Ribozóm", "Lyzozóm"] }, correct_answer: { en: "Mitochondrion", sk: "Mitochondria" } },
  { category: "Science", difficulty: "medium", question: { en: "What does DNA stand for?", sk: "Čo znamená skratka DNA?" }, options: { en: ["Deoxyribonucleic acid", "Deoxyribogenetic acid", "Dynamic natural acid", "Di-nano-acid"], sk: ["Kyselina deoxyribonukleová", "Kyselina deoxyribogenetická", "Dynamická prírodná kyselina", "Di-nano-kyselina"] }, correct_answer: { en: "Deoxyribonucleic acid", sk: "Kyselina deoxyribonukleová" } },
  { category: "Science", difficulty: "medium", question: { en: "How many bones are in the adult human body?", sk: "Koľko kostí je v tele dospelého človeka?" }, options: { en: ["206", "201", "212", "198"], sk: ["206", "201", "212", "198"] }, correct_answer: { en: "206", sk: "206" } },
  { category: "Science", difficulty: "hard", question: { en: "What is the speed of light in a vacuum (km/s)?", sk: "Aká je rýchlosť svetla vo vákuu (km/s)?" }, options: { en: ["299,792", "150,000", "450,500", "399,821"], sk: ["299 792", "150 000", "450 500", "399 821"] }, correct_answer: { en: "299,792", sk: "299 792" } },
  { category: "Science", difficulty: "hard", question: { en: "Who proposed the theory of general relativity?", sk: "Kto navrhol teóriu všeobecnej relativity?" }, options: { en: ["Albert Einstein", "Isaac Newton", "Stephen Hawking", "Galileo Galilei"], sk: ["Albert Einstein", "Isaac Newton", "Stephen Hawking", "Galileo Galilei"] }, correct_answer: { en: "Albert Einstein", sk: "Albert Einstein" } },
  { category: "Science", difficulty: "hard", question: { en: "What is the most abundant element in the universe?", sk: "Aký je najhojnejší prvok vo vesmíre?" }, options: { en: ["Hydrogen", "Helium", "Oxygen", "Carbon"], sk: ["Vodík", "Hélium", "Kyslík", "Uhlík"] }, correct_answer: { en: "Hydrogen", sk: "Vodík" } },
  { category: "Science", difficulty: "hard", question: { en: "What does the 'C' in 'E=mc^2' stand for?", sk: "Čo znamená 'C' vo vzorci 'E=mc^2'?" }, options: { en: ["The speed of light", "Mass of a particle", "Energy", "A constant"], sk: ["Rýchlosť svetla", "Hmotnosť častice", "Energia", "Konštanta"] }, correct_answer: { en: "The speed of light", sk: "Rýchlosť svetla" } },

  // =================================================================
  // History 
  // =================================================================
  { category: "History", difficulty: "easy", question: { en: "Who was the first man to walk on the moon?", sk: "Kto bol prvým človekom, ktorý kráčal po Mesiaci?" }, options: { en: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"], sk: ["Neil Armstrong", "Buzz Aldrin", "Jurij Gagarin", "Michael Collins"] }, correct_answer: { en: "Neil Armstrong", sk: "Neil Armstrong" } },
  { category: "History", difficulty: "easy", question: { en: "In which city were the ancient Olympic Games founded?", sk: "V ktorom meste boli založené antické olympijské hry?" }, options: { en: ["Olympia, Greece", "Athens, Greece", "Rome, Italy", "Sparta, Greece"], sk: ["Olympia, Grécko", "Atény, Grécko", "Rím, Taliansko", "Sparta, Grécko"] }, correct_answer: { en: "Olympia, Greece", sk: "Olympia, Grécko" } },
  { category: "History", difficulty: "easy", question: { en: "Who discovered America in 1492?", sk: "Kto objavil Ameriku v roku 1492?" }, options: { en: ["Christopher Columbus", "Leif Erikson", "Ferdinand Magellan", "Marco Polo"], sk: ["Krištof Kolumbus", "Leif Erikson", "Fernão de Magalhães", "Marco Polo"] }, correct_answer: { en: "Christopher Columbus", sk: "Krištof Kolumbus" } },
  { category: "History", difficulty: "medium", question: { en: "In which year did World War II end?", sk: "V ktorom roku skončila druhá svetová vojna?" }, options: { en: ["1945", "1939", "1918", "1941"], sk: ["1945", "1939", "1918", "1941"] }, correct_answer: { en: "1945", sk: "1945" } },
  { category: "History", difficulty: "medium", question: { en: "The Renaissance began in which European country?", sk: "Renesancia začala v ktorej európskej krajine?" }, options: { en: ["Italy", "France", "Spain", "England"], sk: ["Taliansko", "Francúzsko", "Španielsko", "Anglicko"] }, correct_answer: { en: "Italy", sk: "Taliansko" } },
  { category: "History", difficulty: "medium", question: { en: "What ancient civilization built the pyramids at Giza?", sk: "Ktorá staroveká civilizácia postavila pyramídy v Gíze?" }, options: { en: ["Ancient Egyptians", "Ancient Romans", "Ancient Greeks", "Persians"], sk: ["Starovekí Egypťania", "Starovekí Rimania", "Starovekí Gréci", "Peržania"] }, correct_answer: { en: "Ancient Egyptians", sk: "Starovekí Egypťania" } },
  { category: "History", difficulty: "hard", question: { en: "The Battle of Waterloo in 1815 led to the final defeat of which leader?", sk: "Bitka pri Waterloo v roku 1815 viedla ku konečnej porážke ktorého vodcu?" }, options: { en: ["Napoleon Bonaparte", "Julius Caesar", "Alexander the Great", "Genghis Khan"], sk: ["Napoleon Bonaparte", "Július Cézar", "Alexander Veľký", "Džingischán"] }, correct_answer: { en: "Napoleon Bonaparte", sk: "Napoleon Bonaparte" } },
  { category: "History", difficulty: "hard", question: { en: "In what year did the Berlin Wall fall, leading to the reunification of Germany?", sk: "V ktorom roku padol Berlínsky múr, čo viedlo k zjednoteniu Nemecka?" }, options: { en: ["1989", "1991", "1987", "1990"], sk: ["1989", "1991", "1987", "1990"] }, correct_answer: { en: "1989", sk: "1989" } },
  { category: "History", difficulty: "hard", question: { en: "What was the name of the ship on which the Pilgrims sailed to America in 1620?", sk: "Ako sa volala loď, na ktorej sa pútnici plavili do Ameriky v roku 1620?" }, options: { en: ["Mayflower", "Santa Maria", "Discovery", "Titanic"], sk: ["Mayflower", "Santa Maria", "Discovery", "Titanic"] }, correct_answer: { en: "Mayflower", sk: "Mayflower" } },
  { category: "History", difficulty: "hard", question: { en: "The ancient city of Rome was built on how many hills?", sk: "Staroveký Rím bol postavený na koľkých kopcoch?" }, options: { en: ["Seven", "Five", "Nine", "Three"], sk: ["Siedmich", "Piatich", "Deviatich", "Troch"] }, correct_answer: { en: "Seven", sk: "Siedmich" } },

  // =================================================================
  // Technology 
  // =================================================================
  { category: "Technology", difficulty: "easy", question: { en: "What does 'CPU' stand for?", sk: "Čo znamená skratka 'CPU'?" }, options: { en: ["Central Processing Unit", "Central Program Unit", "Computer Personal Unit", "Central Power Unit"], sk: ["Centrálna procesorová jednotka", "Centrálna programová jednotka", "Osobná počítačová jednotka", "Centrálna napájacia jednotka"] }, correct_answer: { en: "Central Processing Unit", sk: "Centrálna procesorová jednotka" } },
  { category: "Technology", difficulty: "easy", question: { en: "What company makes the iPhone?", sk: "Ktorá spoločnosť vyrába iPhone?" }, options: { en: ["Apple", "Samsung", "Google", "Nokia"], sk: ["Apple", "Samsung", "Google", "Nokia"] }, correct_answer: { en: "Apple", sk: "Apple" } },
  { category: "Technology", difficulty: "easy", question: { en: "What does 'Wi-Fi' stand for?", sk: "Čo znamená skratka 'Wi-Fi'?" }, options: { en: ["It is a trademark name", "Wireless Fidelity", "Wireless Functionality", "Wide-area Fidelity"], sk: ["Je to obchodná značka", "Bezdrôtová vernosť", "Bezdrôtová funkcionalita", "Širokopásmová vernosť"] }, correct_answer: { en: "It is a trademark name", sk: "Je to obchodná značka" } },
  { category: "Technology", difficulty: "medium", question: { en: "Who is the founder of Microsoft?", sk: "Kto je zakladateľom Microsoftu?" }, options: { en: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos"], sk: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos"] }, correct_answer: { en: "Bill Gates", sk: "Bill Gates" } },
  { category: "Technology", difficulty: "medium", question: { en: "What does 'URL' stand for?", sk: "Čo znamená skratka 'URL'?" }, options: { en: ["Uniform Resource Locator", "Universal Resource Link", "Uniform Record Locator", "Universal Record Link"], sk: ["Jednotný lokátor zdrojov", "Univerzálny odkaz na zdroj", "Jednotný lokátor záznamov", "Univerzálny odkaz na záznam"] }, correct_answer: { en: "Uniform Resource Locator", sk: "Jednotný lokátor zdrojov" } },
  { category: "Technology", difficulty: "medium", question: { en: "In what year was the first personal computer, the Kenbak-1, introduced?", sk: "V ktorom roku bol predstavený prvý osobný počítač, Kenbak-1?" }, options: { en: ["1971", "1981", "1965", "1975"], sk: ["1971", "1981", "1965", "1975"] }, correct_answer: { en: "1971", sk: "1971" } },
  { category: "Technology", difficulty: "hard", question: { en: "Who is considered the 'father of the World Wide Web'?", sk: "Kto je považovaný za 'otca World Wide Webu'?" }, options: { en: ["Tim Berners-Lee", "Vint Cerf", "Robert Kahn", "Linus Torvalds"], sk: ["Tim Berners-Lee", "Vint Cerf", "Robert Kahn", "Linus Torvalds"] }, correct_answer: { en: "Tim Berners-Lee", sk: "Tim Berners-Lee" } },
  { category: "Technology", difficulty: "hard", question: { en: "What does 'HTTP' stand for?", sk: "Čo znamená skratka 'HTTP'?" }, options: { en: ["HyperText Transfer Protocol", "High Transfer Text Protocol", "HyperText Transmission Protocol", "Hyperlink Transfer Protocol"], sk: ["HyperText Transfer Protocol", "High Transfer Text Protocol", "HyperText Transmission Protocol", "Hyperlink Transfer Protocol"] }, correct_answer: { en: "HyperText Transfer Protocol", sk: "HyperText Transfer Protocol" } },
  { category: "Technology", difficulty: "hard", question: { en: "What was the first commercially successful video game?", sk: "Aká bola prvá komerčne úspešná videohra?" }, options: { en: ["Pong", "Space Invaders", "Pac-Man", "Donkey Kong"], sk: ["Pong", "Space Invaders", "Pac-Man", "Donkey Kong"] }, correct_answer: { en: "Pong", sk: "Pong" } },
  { category: "Technology", difficulty: "hard", question: { en: "What is the name of the open-source operating system kernel created by Linus Torvalds?", sk: "Ako sa volá open-source jadro operačného systému vytvorené Linusom Torvaldsom?" }, options: { en: ["Linux", "Unix", "Windows", "MacOS"], sk: ["Linux", "Unix", "Windows", "MacOS"] }, correct_answer: { en: "Linux", sk: "Linux" } },

  // =================================================================
  // Geography
  // =================================================================
  { category: "Geography", difficulty: "easy", question: { en: "What is the capital of France?", sk: "Aké je hlavné mesto Francúzska?" }, options: { en: ["Paris", "London", "Berlin", "Rome"], sk: ["Paríž", "Londýn", "Berlín", "Rím"] }, correct_answer: { en: "Paris", sk: "Paríž" } },
  { category: "Geography", difficulty: "easy", question: { en: "Which is the largest continent by area?", sk: "Ktorý je najväčší kontinent podľa rozlohy?" }, options: { en: ["Asia", "Africa", "North America", "Europe"], sk: ["Ázia", "Afrika", "Severná Amerika", "Európa"] }, correct_answer: { en: "Asia", sk: "Ázia" } },
  { category: "Geography", difficulty: "easy", question: { en: "What is the longest river in the world?", sk: "Aká je najdlhšia rieka na svete?" }, options: { en: ["The Nile", "The Amazon", "The Yangtze", "The Mississippi"], sk: ["Níl", "Amazonka", "Jang-c’-ťiang", "Mississippi"] }, correct_answer: { en: "The Nile", sk: "Níl" } },
  { category: "Geography", difficulty: "medium", question: { en: "What is the capital of Australia?", sk: "Aké je hlavné mesto Austrálie?" }, options: { en: ["Canberra", "Sydney", "Melbourne", "Perth"], sk: ["Canberra", "Sydney", "Melbourne", "Perth"] }, correct_answer: { en: "Canberra", sk: "Canberra" } },
  { category: "Geography", difficulty: "medium", question: { en: "What is the highest mountain in the world?", sk: "Aká je najvyššia hora na svete?" }, options: { en: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"], sk: ["Mount Everest", "K2", "Káčaňdžunga", "Lhoce"] }, correct_answer: { en: "Mount Everest", sk: "Mount Everest" } },
  { category: "Geography", difficulty: "medium", question: { en: "Which desert is the largest in the world?", sk: "Ktorá púšť je najväčšia na svete?" }, options: { en: ["Antarctic Polar Desert", "Sahara Desert", "Arctic Polar Desert", "Arabian Desert"], sk: ["Antarktická polárna púšť", "Sahara", "Arktická polárna púšť", "Arabská púšť"] }, correct_answer: { en: "Antarctic Polar Desert", sk: "Antarktická polárna púšť" } },
  { category: "Geography", difficulty: "hard", question: { en: "What is the smallest country in the world by area?", sk: "Ktorá je najmenšia krajina na svete podľa rozlohy?" }, options: { en: ["Vatican City", "Monaco", "Nauru", "Tuvalu"], sk: ["Vatikán", "Monako", "Nauru", "Tuvalu"] }, correct_answer: { en: "Vatican City", sk: "Vatikán" } },
  { category: "Geography", difficulty: "hard", question: { en: "What is the only city in the world located on two continents?", sk: "Ktoré je jediné mesto na svete nachádzajúce sa na dvoch kontinentoch?" }, options: { en: ["Istanbul", "Suez", "Panama City", "Magnitogorsk"], sk: ["Istanbul", "Suez", "Panama", "Magnitogorsk"] }, correct_answer: { en: "Istanbul", sk: "Istanbul" } },
  { category: "Geography", difficulty: "hard", question: { en: "What is the name of the deepest point in Earth's oceans?", sk: "Ako sa volá najhlbší bod v oceánoch Zeme?" }, options: { en: ["Mariana Trench", "Tonga Trench", "Philippine Trench", "Kermadec Trench"], sk: ["Mariánska priekopa", "Tonžská priekopa", "Filipínska priekopa", "Kermadecká priekopa"] }, correct_answer: { en: "Mariana Trench", sk: "Mariánska priekopa" } },
  { category: "Geography", difficulty: "hard", question: { en: "Which country has the most time zones?", sk: "Ktorá krajina má najviac časových pásiem?" }, options: { en: ["France", "Russia", "USA", "China"], sk: ["Francúzsko", "Rusko", "USA", "Čína"] }, correct_answer: { en: "France", sk: "Francúzsko" } },

  // =================================================================
  // Art & Literature 
  // =================================================================
  { category: "Art & Literature", difficulty: "easy", question: { en: "Who painted the Mona Lisa?", sk: "Kto namaľoval Monu Lisu?" }, options: { en: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"], sk: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"] }, correct_answer: { en: "Leonardo da Vinci", sk: "Leonardo da Vinci" } },
  { category: "Art & Literature", difficulty: "easy", question: { en: "Who wrote 'Hamlet'?", sk: "Kto napísal 'Hamleta'?" }, options: { en: ["William Shakespeare", "Charles Dickens", "Leo Tolstoy", "Mark Twain"], sk: ["William Shakespeare", "Charles Dickens", "Lev Tolstoj", "Mark Twain"] }, correct_answer: { en: "William Shakespeare", sk: "William Shakespeare" } },
  { category: "Art & Literature", difficulty: "easy", question: { en: "What is the first book in the 'Harry Potter' series?", sk: "Aká je prvá kniha v sérii 'Harry Potter'?" }, options: { en: ["The Philosopher's Stone", "The Chamber of Secrets", "The Prisoner of Azkaban", "The Goblet of Fire"], sk: ["Kameň mudrcov", "Tajomná komnata", "Väzeň z Azkabanu", "Ohnivá čaša"] }, correct_answer: { en: "The Philosopher's Stone", sk: "Kameň mudrcov" } },
  { category: "Art & Literature", difficulty: "medium", question: { en: "Which artist is known for co-founding the Cubist movement?", sk: "Ktorý umelec je známy ako spoluzakladateľ kubizmu?" }, options: { en: ["Pablo Picasso", "Salvador Dalí", "Claude Monet", "Andy Warhol"], sk: ["Pablo Picasso", "Salvador Dalí", "Claude Monet", "Andy Warhol"] }, correct_answer: { en: "Pablo Picasso", sk: "Pablo Picasso" } },
  { category: "Art & Literature", difficulty: "medium", question: { en: "In which novel would you find the character Atticus Finch?", sk: "V ktorom románe by ste našli postavu Atticusa Fincha?" }, options: { en: ["To Kill a Mockingbird", "The Great Gatsby", "1984", "Pride and Prejudice"], sk: ["Nezabíjajte vtáčika", "Veľký Gatsby", "1984", "Pýcha a predsudok"] }, correct_answer: { en: "To Kill a Mockingbird", sk: "Nezabíjajte vtáčika" } },
  { category: "Art & Literature", difficulty: "medium", question: { en: "Who painted 'The Starry Night'?", sk: "Kto namaľoval 'Hviezdnu noc'?" }, options: { en: ["Vincent van Gogh", "Edvard Munch", "Paul Cézanne", "Rembrandt"], sk: ["Vincent van Gogh", "Edvard Munch", "Paul Cézanne", "Rembrandt"] }, correct_answer: { en: "Vincent van Gogh", sk: "Vincent van Gogh" } },
  { category: "Art & Literature", difficulty: "hard", question: { en: "Who wrote the epic poem 'The Odyssey'?", sk: "Kto napísal epickú báseň 'Odysea'?" }, options: { en: ["Homer", "Virgil", "Dante", "Sophocles"], sk: ["Homér", "Vergílius", "Dante", "Sofokles"] }, correct_answer: { en: "Homer", sk: "Homér" } },
  { category: "Art & Literature", difficulty: "hard", question: { en: "Which Russian author wrote 'War and Peace'?", sk: "Ktorý ruský autor napísal 'Vojnu a mier'?" }, options: { en: ["Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov", "Alexander Pushkin"], sk: ["Lev Tolstoj", "Fiodor Dostojevskij", "Anton Čechov", "Alexander Puškin"] }, correct_answer: { en: "Leo Tolstoy", sk: "Lev Tolstoj" } },
  { category: "Art & Literature", difficulty: "hard", question: { en: "The art movement Surrealism is most associated with which artist?", sk: "S ktorým umelcom je najviac spojený umelecký smer surrealizmus?" }, options: { en: ["Salvador Dalí", "Frida Kahlo", "René Magritte", "Max Ernst"], sk: ["Salvador Dalí", "Frida Kahlo", "René Magritte", "Max Ernst"] }, correct_answer: { en: "Salvador Dalí", sk: "Salvador Dalí" } },
  { category: "Art & Literature", difficulty: "hard", question: { en: "What is the name of the protagonist in George Orwell's '1984'?", sk: "Ako sa volá hlavný hrdina v románe Georgea Orwella '1984'?" }, options: { en: ["Winston Smith", "O'Brien", "Big Brother", "Emmanuel Goldstein"], sk: ["Winston Smith", "O'Brien", "Veľký Brat", "Emmanuel Goldstein"] }, correct_answer: { en: "Winston Smith", sk: "Winston Smith" } },

  // =================================================================
  // Movies & TV 
  // =================================================================
  { category: "Movies & TV", difficulty: "easy", question: { en: "Who is the director of 'Jurassic Park'?", sk: "Kto je režisérom filmu 'Jurský park'?" }, options: { en: ["Steven Spielberg", "George Lucas", "James Cameron", "Martin Scorsese"], sk: ["Steven Spielberg", "George Lucas", "James Cameron", "Martin Scorsese"] }, correct_answer: { en: "Steven Spielberg", sk: "Steven Spielberg" } },
  { category: "Movies & TV", difficulty: "easy", question: { en: "In 'The Matrix', does Neo take the blue pill or the red pill?", sk: "Vezme si Neo v 'Matrixe' modrú alebo červenú pilulku?" }, options: { en: ["Red pill", "Blue pill", "He takes both", "He takes neither"], sk: ["Červenú pilulku", "Modrú pilulku", "Vezme si obe", "Nevezme si žiadnu"] }, correct_answer: { en: "Red pill", sk: "Červenú pilulku" } },
  { category: "Movies & TV", difficulty: "easy", question: { en: "What is the name of the fictional city where Batman operates?", sk: "Ako sa volá fiktívne mesto, v ktorom operuje Batman?" }, options: { en: ["Gotham City", "Metropolis", "Star City", "Central City"], sk: ["Gotham City", "Metropolis", "Star City", "Central City"] }, correct_answer: { en: "Gotham City", sk: "Gotham City" } },
  { category: "Movies & TV", difficulty: "medium", question: { en: "Who played the character of Jack Dawson in 'Titanic'?", sk: "Kto hral postavu Jacka Dawsona vo filme 'Titanic'?" }, options: { en: ["Leonardo DiCaprio", "Tom Cruise", "Brad Pitt", "Johnny Depp"], sk: ["Leonardo DiCaprio", "Tom Cruise", "Brad Pitt", "Johnny Depp"] }, correct_answer: { en: "Leonardo DiCaprio", sk: "Leonardo DiCaprio" } },
  { category: "Movies & TV", difficulty: "medium", question: { en: "Which TV show is famous for the line, 'Winter is coming'?", sk: "Ktorý televízny seriál je známy vetou 'Zima sa blíži'?" }, options: { en: ["Game of Thrones", "The Walking Dead", "Breaking Bad", "Stranger Things"], sk: ["Hra o tróny", "The Walking Dead", "Breaking Bad", "Stranger Things"] }, correct_answer: { en: "Game of Thrones", sk: "Hra o tróny" } },
  { category: "Movies & TV", difficulty: "medium", question: { en: "What is the highest-grossing film of all time (unadjusted for inflation)?", sk: "Aký je najziskovejší film všetkých čias (bez úpravy o infláciu)?" }, options: { en: ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars: The Force Awakens"], sk: ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars: Sila sa prebúdza"] }, correct_answer: { en: "Avatar", sk: "Avatar" } },
  { category: "Movies & TV", difficulty: "hard", question: { en: "In the movie 'Pulp Fiction', what is in the mysterious briefcase?", sk: "Čo sa nachádza v záhadnom kufríku vo filme 'Pulp Fiction'?" }, options: { en: ["It is never revealed", "Gold", "Diamonds", "The soul of Marsellus Wallace"], sk: ["Nikdy sa to neukáže", "Zlato", "Diamanty", "Duša Marsellusa Wallacea"] }, correct_answer: { en: "It is never revealed", sk: "Nikdy sa to neukáže" } },
  { category: "Movies & TV", difficulty: "hard", question: { en: "Which film won the first-ever Academy Award for Best Picture in 1929?", sk: "Ktorý film získal prvú Cenu Akadémie za najlepší film v roku 1929?" }, options: { en: ["Wings", "The Jazz Singer", "Metropolis", "Sunrise: A Song of Two Humans"], sk: ["Wings", "The Jazz Singer", "Metropolis", "Východ slnka: Pieseň dvoch ľudí"] }, correct_answer: { en: "Wings", sk: "Wings" } },
  { category: "Movies & TV", difficulty: "hard", question: { en: "Who directed the movie 'Parasite', which won the Academy Award for Best Picture?", sk: "Kto režíroval film 'Parazit', ktorý získal Oscara za najlepší film?" }, options: { en: ["Bong Joon-ho", "Park Chan-wook", "Kim Jee-woon", "Hong Sang-soo"], sk: ["Pon Džun-ho", "Pak Čchan-uk", "Kim Či-un", "Hong Sang-su"] }, correct_answer: { en: "Bong Joon-ho", sk: "Pon Džun-ho" } },
  { category: "Movies & TV", difficulty: "hard", question: { en: "What is the name of the supercomputer in '2001: A Space Odyssey'?", sk: "Ako sa volá superpočítač vo filme '2001: Vesmírna odysea'?" }, options: { en: ["HAL 9000", "WOPR", "Skynet", "Colossus"], sk: ["HAL 9000", "WOPR", "Skynet", "Colossus"] }, correct_answer: { en: "HAL 9000", sk: "HAL 9000" } },
];

export const fetchQuestions = async (
  amount: number,
  category: string,
  difficulty: string,
  language: RootState['ui']['language']
): Promise<Question[]> => {

  const filtered = allMultiLangQuestions.filter(q => {
    return (category === 'any' || q.category === category) &&
           (difficulty === 'any' || q.difficulty === difficulty);
  });
  
  const selectedQuestions = shuffleArray(filtered).slice(0, amount);
  
  return selectedQuestions.map(q => ({
      question: q.question[language],
      options: shuffleArray(q.options[language]),
      correct_answer: q.correct_answer[language]
  }));
};