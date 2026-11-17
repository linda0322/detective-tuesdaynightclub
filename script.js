// 1. Tuesday Night Club 成員資料 (Tab 1)
const clubMembers = [
  { name: "👵🏻 Miss Marple", desc: "溫和慈愛而明察秋毫的老婆婆" },
  { name: "👱🏻‍♂️ Raymond", desc: "Miss Marple 的姪子，溫文爾雅而具完美主義的年輕作家" },
  { name: "👩🏻‍🦰 Joyce", desc: "年輕而很有個性的短髮畫家" },
  { name: "👮🏼‍♂️ Sir Henry", desc: "倫敦警察局的前任局長" },
  { name: "👴🏻 Dr. Pender", desc: "了解人性罪惡的老牧師" },
  { name: "👨🏻‍💼 Mr. Petherick", desc: "重視事實與邏輯的律師" }
];

// 2. 謎題相關角色初始資料 (Tab 2)
const puzzleCharacters = [
  { id: "Mrs. Jones", role: "💀 死者", title: "Mrs. Jones (45 歲)", type: "victim" },
  { id: "Mr. Jones", role: "❓ 嫌疑人", title: "死者丈夫 Mr. Jones（50 多歲）", type: "suspect" },
  { id: "Milly", role: "❓ 嫌疑人", title: "死者的貼身女伴 Milly（60 多歲）", type: "suspect" },
  { id: "醫生", role: "❓ 嫌疑人", title: "醫生（50 多歲）", type: "suspect" },
  { id: "醫生女兒", role: "❓ 嫌疑人", title: "醫生女兒（33 歲）", type: "suspect" },
  { id: "Gladys", role: "❓ 嫌疑人", title: "女傭 Gladys（20 多歲）", type: "suspect" }
];

// 3. 遊戲每一頁的劇本與互動設定
const pages = [
  // Page 1
  {
    image: null,
    speaker: "📖 旁白",
    text: "Miss Marple 穿着黑色禮服，腰束得很緊，裙子下擺的花邊像瀑布般垂下，她沒戴黑色的露指手套，卻在盤起的白髮上戴了頂黑帽子，直直地坐在壁爐邊的椅子上，手裡正編織雪白且柔軟的羊絨線，用上帝恩賜的藍眼睛慈愛地看着姪子及他的好友淺笑。",
    vocab: {
      "禮服": "gown",
      "壁爐": "fireplace",
      "編織": "knit",
      "羊絨": "Cashmere",
      "姪子": "nephew"
    },
    question: {
      type: "task",
      prompt: "✏️ 任務：這是肖像和行動描寫，請根據以上描述在紙上描繪 Miss Marple 的樣子。",
      buttonText: "我已完成繪畫（領取 +50 分）",
      points: 50
    }
  },
  // Page 2
  {
    image: "men.webp",
    speaker: "🔎 人物配對",
    text: "Mr. Petherick 是一位戴眼鏡的律師，Sir Henry 是一名身材魁梧的退休警察，Dr. Pender 則是一位慈祥的老牧師。圖片上有三個人，你能判斷他們分別是誰嗎？",
    question: {
      type: "matching",
      prompt: "請選擇圖片中左、中、右對應的人物：",
      positions: [
        { label: "左方人物", answer: "Sir Henry" },
        { label: "中間人物", answer: "Dr. Pender" },
        { label: "右方人物", answer: "Mr. Petherick" }
      ],
      options: ["Sir Henry", "Dr. Pender", "Mr. Petherick"],
      points: 0
    }
  },
  // Page 3
  {
    image: "creator.webp",
    speaker: "👱🏻‍♂️ Raymond",
    text: "不解之謎⋯⋯不解之謎呀。",
    vocab: {
      "不解之謎": "unsolved mystery"
    },
    question: {
      type: "input",
      prompt: "❓ 問題：這句用了甚麼修辭手法？",
      answers: ["反復", "反覆"],
      points: 10
    }
  },
  // Page 4
  {
    image: "men.webp",
    speaker: "👨🏻‍💼 Mr. Petherick",
    text: "你說什麼不解之謎？"
  },
  // Page 5
  {
    image: "creator.webp",
    speaker: "👱🏻‍♂️ Raymond",
    text: "我在說一宗令人費解的謀殺案，謀殺者消失得無影無蹤，目前為止還沒有人找到答案。如果 Sir Henry 有興致的話，也許能為我們找到答案。",
    vocab: {
      "令人費解": "puzzling"
    }
  },
  // Page 6
  {
    image: "men.webp",
    speaker: "👮🏼‍♂️ Sir Henry",
    text: "不，過獎了，我也不是很懂。",
    question: {
      type: "mc",
      prompt: "❓ 問題：Sir Henry 這句話展現了怎樣的性格特點？",
      options: ["謙虛", "驕傲", "溫柔", "無知"],
      answer: "謙虛",
      points: 0
    }
  },
  // Page 7
  {
    image: "creator.webp",
    speaker: "👩🏻‍🦰 Joyce",
    text: "我們都是各自職業的代言人，既然有機會聚在一起，何不成立一個每週見一次面的俱樂部呢？每次見面的時候，大家輪流講述一個親身經歷的謎題。",
    vocab: {
      "代言人": "spokesperson"
    }
  },
  // Page 8
  {
    image: "marple.webp",
    speaker: "👵🏻 Miss Marple",
    text: "肯定很有趣，尤其有這麼多睿智的人參加。恐怕我不如各位那麼聰明。",
    vocab: {
      "睿智": "clever"
    }
  },
  // Page 9
  {
    image: "creator.webp",
    speaker: "👩🏻‍🦰 Joyce",
    text: "那麼從誰開始呢？"
  },
  // Page 10
  {
    image: "men.webp",
    speaker: "👴🏻 Dr. Pender",
    text: "既然我們有幸與 Sir Henry 這樣傑出的人聚在一起⋯⋯（恭敬地點了點頭）"
  },
  // Page 11
  {
    image: "men.webp",
    speaker: "👮🏼‍♂️ Sir Henry",
    text: "也許你們曾聽說過這案子，一年前的報紙登過，但當時找不到真相。碰巧幾天前，我掌握了答案。",
    vocab: {
      "碰巧": "coincidentally"
    }
  },
  // Page 12
  {
    image: "men.webp",
    speaker: "👮🏼‍♂️ Sir Henry",
    text: "事情的經過很簡單，三個人同桌共進晚餐，桌上還有罐裝大蝦。夜裡三個人都病了，一個醫生趕來急救，兩人恢復了健康，第三個人卻死了，死因是食物中毒，死者隨後就下葬了，但事情並沒有結束。",
    clues: [
      { target: "Mrs. Jones", text: "死因是食物中毒" }
    ],
    items: ["🦐 罐裝大蝦"]
  },
  // Page 13
  {
    image: "men.webp",
    speaker: "👮🏼‍♂️ Sir Henry",
    text: "現在我來介紹這悲劇中的人物，我把那丈夫和妻子暫且稱作 Mr. Jones 和 Mrs. Jones，還有一位是陪伴 Mrs. Jones 的 Milly 小姐。"
  },
  // Page 14
  {
    image: "men.webp",
    speaker: "👮🏼‍♂️ Sir Henry",
    text: "Mr. Jones 是化工製造公司的推銷員，50 歲，打扮華麗但為人粗俗。",
    vocab: {
      "化工製造公司的推銷員": "Salesperson at a chemical manufacturing company",
      "粗俗": "vulgar"
    }
  },
  // Page 15
  {
    image: "men.webp",
    speaker: "👮🏼‍♂️ Sir Henry",
    text: "Mrs. Jones 45歲左右，沒甚麼特別。Milly 已 60 歲，一副樂天知命的樣子，笑容可掬。",
    vocab: {
      "樂天知命": "cheerful and contented",
      "笑容可掬": "wore a warm, beaming smile"
    }
  },
  // Page 16
  {
    image: "men.webp",
    speaker: "👮🏼‍♂️ Sir Henry",
    text: "出事前一晚，Mr. Jones 在一家旅館留宿。"
  },
  // Page 17
  {
    image: "men.webp",
    speaker: "👮🏼‍♂️ Sir Henry",
    text: "那天旅館換信紙，女職員閑着無聊，就以設法讀出信紙上殘留的字痕來打發時間。Mr. Jones 頭天晚上剛好寫過一封信，信紙上因此留下了一些字痕。幾天以後，報紙刊登了 Mrs. Jones 因食物中毒死亡的消息。"
  },
  // Page 18
  {
    image: "men.webp",
    speaker: "👮🏼‍♂️ Sir Henry",
    text: "職員把她從信紙上辨認出來的那些字告訴同伴們：「有賴於我妻子⋯⋯當她死後，我將幾百⋯⋯幾千⋯⋯送⋯⋯蜜餞」",
    clues: [
      { target: "Mr. Jones", text: "信中提到妻子死後可獲得一筆遺產" },
      { target: "Mr. Jones", text: "信中提及蜜餞，意義不明" }
    ],
    items: ["📨 Mr. Jones 的可疑信件"]
  },
  // Page 19
  {
    image: "men.webp",
    speaker: "👮🏼‍♂️ Sir Henry",
    text: "當時剛好有一宗丈夫毒死妻子的案件，星星之火就能點燃職員的想像力：Mr. Jones 想弄死妻子，然後獲得幾百幾千英鎊。剛好職員有親戚住在 the Jones 一家居住的小鎮上，她寫信告訴他們，親戚回信告訴她 Mr. Jones 似乎傾情於當地一個醫生的女兒——長得很漂亮，約 33 歲。"
  },
  // Page 20
  {
    image: "men.webp",
    speaker: "👮🏼‍♂️ Sir Henry",
    text: "謠言四起，人們向內政部長請願，舉報信像雪片一樣飛到倫敦警察局，指控 Mr. Jones 毒殺妻子。我們一直認為閑言碎語後一定有點甚麼，為了平息謠言，當局準備開棺驗屍。"
  },
  // Page 21
  {
    image: "men.webp",
    speaker: "👮🏼‍♂️ Sir Henry",
    text: "公眾的懷疑是正確的，屍體解剖證明了已故的 Mrs. Jones 是因砒霜中毒死亡，於是倫敦警察局和地方警察聯手調查到底是誰下的毒。第一嫌疑犯自然是她丈夫，因為他可從妻子的死亡中得到好處，可能不像女職員想像的那麼多，但有據可查的是八千鎊。"
  },
  // Page 22
  {
    image: "men.webp",
    speaker: "👮🏼‍♂️ Sir Henry",
    text: "他不是有錢人，除了每月的薪水，再沒有別的進賬，況且他還喜歡到處鬼混。我們仔細調查了他與醫生女兒的傳聞，他們曾有過超越友誼的關係，但出事前兩個月卻突然鬧崩了，從那以後似乎就沒見過面。",
    clues: [
      { target: "醫生女兒", text: "出事前兩個月發生了一些事，此後再沒聯繫" }
    ]
  },
  // Page 23
  {
    image: "men.webp",
    speaker: "👮🏼‍♂️ Sir Henry",
    text: "那位老醫生是一個正人君子，當他聽到屍體解剖報告時大吃一驚。事發當天半夜，就是他被喚去給那三個人診治的。他一到 Mr. Jones 的家，就立即發現 Mrs. Jones 的情況很嚴重，馬上叫人到診所取麻醉藥以減輕她的痛苦，但她最後還是死了。他認為她的死是因為誤食了某種有毒的食物引起的。",
    clues: [
      { target: "醫生", text: "曾叫人到診所拿麻醉藥救 Mrs. Jones" }
    ]
  },
  // Page 24
  {
    image: "men.webp",
    speaker: "👮🏼‍♂️ Sir Henry",
    text: "那天晚餐吃的是罐裝大蝦、沙律、蛋糕、麵包及乳酪。不巧的是罐裝大蝦一點都沒剩下，全被吃光了，連罐子都給扔了。",
    items: ["🥗 沙律", "🍰 蛋糕", "🍞 麵包", "🍦 乳酪"]
  },
  // Page 25
  {
    image: "men.webp",
    speaker: "👮🏼‍♂️ Sir Henry",
    text: "醫生當時問負責煮食的年輕女傭 Gladys，她慌張得不斷哭，他發現她根本無法直接回答問題，只會重複發誓那罐頭完全沒鼓起來，蝦沒變質。這就是我們了解到的所有情況，假設 Mr. Jones 想給妻子下毒的話，他不能在晚餐中做手腳，因為三個人都吃了同樣的食物。而且 Mr. Jones 是晚餐都已擺上桌子的時候才趕回來的，所以他不可能事先在食物中搞鬼。",
    clues: [
      { target: "Gladys", text: "事發時非常驚慌，只能重複強調蝦沒變壞" }
    ]
  },
  // Page 26
  {
    image: "men.webp",
    speaker: "👮🏼‍♂️ Sir Henry",
    text: "至於 Milly，她完全沒有殺人動機，Mrs. Jones 沒給她留下任何遺產，主人死了只會把她置於失業的境地。那天晚飯後，Mr. Jones 曾下樓去過廚房，太太說不太舒服，想喝一碗玉米粥，他在廚房等着，直到女傭把玉米粥煮好，他親自端上樓去給他的妻子。",
    clues: [
      { target: "Milly", text: "死者的離開對她沒有好處" },
      { target: "Mrs. Jones", text: "晚飯後覺得不太舒服，想喝一碗玉米粥" },
      { target: "Mr. Jones", text: "曾為死者親自端上一碗玉米粥" },
      { target: "Gladys", text: "曾為死者烹煮玉米粥" }
    ],
    items: ["🥣 玉米粥"]
  },
  // Page 27
  {
    image: "men.webp",
    speaker: "👮🏼‍♂️ Sir Henry",
    text: "動機，再加上機會，一個化工廠的推銷員弄點毒藥也許不是甚麼難事。但 Mr. Jones 至今尚未被捕，Milly 告訴我們，Mrs. Jones 最後並沒有喝那碗玉米粥，是她喝的。她到房間的時候，Mrs. Jones 正坐在床上，太太說可能是因為今晚吃了蝦，有點不適，她叫丈夫給她端了碗粥上來，但現在一點也不想吃了。"
  },
  // Page 28
  {
    image: "men.webp",
    speaker: "👮🏼‍♂️ Sir Henry",
    text: "當時正在節食減肥的 Milly 覺得很可惜，現今很少人能煮出這麼好的粥，她都眼饞了。Mrs. Jones 勸克拉拉不要節食：「如果主讓你胖，你是無法改變的，喝下那碗粥吧。」Milly 一口氣吃了那碗粥，這就完全否定了丈夫是殺人犯的推測。",
    clues: [
      { target: "Milly", text: "正在節食減肥，但在死者勸說下替她吃掉了玉米粥，最後安然無恙" }
    ]
  },
  // Page 29
  {
    image: "men.webp",
    speaker: "👮🏼‍♂️ Sir Henry",
    text: "關於信紙上那些字，他毫不費勁地解釋說，那信是給他弟弟的回信。澳洲的弟弟向他借錢，所以他告訴對方家裡的財權在妻子手上，除非妻子去世，他才會有錢。他很抱歉現在不能幫他，同時也安慰弟弟這個世界上有數以百計、千計的人和他一樣處在貧困中。",
    clues: [
      { target: "Mr. Jones", text: "聲稱信件是給弟弟的回信，說明自己對接濟他無能為力" }
    ]
  },
  // Page 30
  {
    image: "men.webp",
    speaker: "👮🏼‍♂️ Sir Henry",
    text: "案子的線索到此就斷了，我們沒有證據不能逮捕 Mr. Jones。去年的調查到這裡就停滯了，現在這宗疑案的答案在倫敦警察局手中，過兩三天，你們就能從報紙上知道結果的。"
  },
  // Page 31
  {
    image: "creator.webp",
    speaker: "👩🏻‍🦰 Joyce",
    text: "我們每個人考慮五分鐘，再把看法說出來。"
  },
  // Page 32
  {
    image: null,
    speaker: "⏳ 思考時間",
    text: "請點擊左上角「記事簿」檢視所有角色的線索與物品，倒數五分鐘後發表你的推理！",
    timer: 300
  },
  // Page 33
  {
    image: "men.webp",
    speaker: "👴🏻 Dr. Pender",
    text: "我總覺得那丈夫有罪，但我想不到他是怎麼幹的，我猜是以某種方式給他妻子下毒，只不過沒被發現罷了。"
  },
  // Page 34
  {
    image: "creator.webp",
    speaker: "👩🏻‍🦰 Joyce",
    text: "完全有可能是 Milly。我們怎麼會知道她的動機呢？也許她暗戀 Mr. Jones，作為意中人妻子的陪伴員，她不得不壓抑自己，等到一天她忍無可忍的時候，就殺了她的主人，也許就是她把砒霜放進碗裡，她是在撒謊。"
  },
  // Page 35
  {
    image: "men.webp",
    speaker: "👨🏻‍💼 Mr. Petherick",
    text: "就目前的證據很難判斷。在我的辦案生涯中，我碰過許多類似的案子，都是丈夫有罪。使大家看不清事實真相的唯一解釋，是由於某種原因 Milly 故意掩護 Mr. Jones，也許是他們之間有什麼關於金錢的協議。他估計自己會被懷疑，而她看到有一個富足的前程在等着她，就同意編造一個自己喝了粥的故事。"
  },
  // Page 36
  {
    image: "creator.webp",
    speaker: "👱🏻‍♂️ Raymond",
    text: "你們都忘了醫生的女兒。我覺得那罐裝大蝦是壞的，就是它引起食物中毒。醫生被請來，發現 Mrs. Jones 情況最嚴重，是因為她比別人吃得都多，之後再派人去診所取麻醉藥，所以不是他親自去的，那麼誰會把藥拿來？當然是醫生的女兒。她愛着 Mr. Jones，她知道使他獲得自由的機會就掌握在她手中，藥或許含有砒霜，這就是我的結論。"
  },
  // Page 37
  {
    image: "marple.webp",
    speaker: "👵🏻 Miss Marple",
    text: "這故事讓我想起住在山上的 Mr. Hargraves，他的妻子從沒懷疑過他，但他死後將所有財產留給一個與他生活了很久的女人，甚至與這個女人生了五個孩子——她曾經做過管家，太太以前還說她是個很能幹的人。"
  },
  // Page 38
  {
    image: "creator.webp",
    speaker: "👱🏻‍♂️ Raymond",
    text: "姑姑，你這個故事跟本來的案子有關係嗎？不要離題。"
  },
  // Page 39
  {
    image: "marple.webp",
    speaker: "👵🏻 Miss Marple",
    text: "事情是如此相似，難道不是嗎？我猜那女人招供了，Sir Henry，對嗎？",
    question: {
      type: "mc",
      prompt: "❓ 問題：誰是 Miss Marple 說的「那女人」？",
      options: ["女傭 Gladys", "女伴 Milly", "醫生女兒"],
      answer: "女傭 Gladys",
      points: 50
    }
  },
  // Page 40
  {
    image: "creator.webp",
    speaker: "👱🏻‍♂️ Raymond",
    text: "姑姑，你究竟在說甚麼？"
  },
  // Page 41
  {
    image: "marple.webp",
    speaker: "👵🏻 Miss Marple",
    text: "那苦命的孩子，醫生盤問她時顯得非常緊張的那個女孩。唉！我真希望給那可惡的 Mr. Jones 上絞刑，他慫恿那女孩成了謀殺犯，我想他們也會把她處死的，真可憐啊！"
  },
  // Page 42
  {
    image: "men.webp",
    speaker: "👮🏼‍♂️ Sir Henry",
    text: "Miss Marple，你還真是觀察入微。"
  },
  // Page 43
  {
    image: "food.webp",
    speaker: "👵🏻 Miss Marple",
    text: "請不要忽略這個東西。",
    question: {
      type: "mc",
      prompt: "❓ 問題：桌子哪個才是真正有毒的食物？",
      options: ["蛋糕", "沙律", "麵包", "乳酪", "大蝦"],
      answer: "蛋糕",
      points: 50
    }
  },
  // Page 44
  {
    image: "marple.webp",
    speaker: "👵🏻 Miss Marple",
    text: "不該忽略撒在蛋糕上的東西。廚師們總愛在蛋糕上放些小蜜餞，我一聽到他們那天晚餐吃了蛋糕，做丈夫的曾給某人寫過蜜餞之類的話，我很自然地把兩件事聯繫起來，砒霜放在蜜餞裏，他把毒藥給了女傭，並讓她把有毒的蜜餞撒在蛋糕上。"
  },
  // Page 45
  {
    image: "creator.webp",
    speaker: "👱🏻‍♂️ Raymond",
    text: "但他們不是都吃了蛋糕嗎？"
  },
  // Page 46
  {
    image: "marple.webp",
    speaker: "👵🏻 Miss Marple",
    text: "Milly 在節食減肥，大概不會吃蛋糕這類甜食的。而 Mr. Jones 一定是把那些蜜餞刮下來，放在盤子一邊。"
  },
  // Page 47
  {
    image: "men.webp",
    speaker: "👮🏼‍♂️ Sir Henry",
    text: "Miss Marple 猜對了，Mr. Jones 讓年輕的 Gladys 懷孕了，想擺脫妻子的 Mr. Jones 答應她，如果妻子死了，就會娶她，可事成後他卻撇下了她，另謀新歡去了。Gladys 上禮拜離世了，孩子夭折，虛弱的她臨死前說出了真相。"
  },
  // Page 48
  {
    image: null,
    speaker: "🎉 破案完成",
    text: "恭喜你完成了 Tuesday Night Club 的第一道難題！",
    isEnding: true
  }
];

// 遊戲狀態管理
let currentPage = 0;
let maxReachedPage = 0;
let score = 0;
const answeredPages = new Set();
let timerInterval = null;
let remainingSeconds = 300;

// DOM 元素
const imageStage = document.getElementById("image-stage");
const sceneImage = document.getElementById("scene-image");
const imageFallback = document.getElementById("image-fallback");
const speakerTag = document.getElementById("speaker-tag");
const dialogueText = document.getElementById("dialogue-text");
const interactionArea = document.getElementById("interaction-area");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const pageIndicator = document.getElementById("page-indicator");
const scoreVal = document.getElementById("score-val");
const clueBadge = document.getElementById("clue-badge");
const vocabBubble = document.getElementById("vocab-bubble");
const vocabWord = document.getElementById("vocab-word");
const vocabMeaning = document.getElementById("vocab-meaning");

// 記事簿 Modal DOM
const notebookBtn = document.getElementById("notebook-btn");
const notebookModal = document.getElementById("notebook-modal");
const closeModalBtn = document.getElementById("close-modal-btn");
const clubMembersGrid = document.getElementById("club-members-grid");
const suspectsGrid = document.getElementById("suspects-grid");
const itemsGallery = document.getElementById("items-gallery");

// 初始化俱樂部成員卡片
function initClubMembers() {
  clubMembersGrid.innerHTML = clubMembers
    .map(
      (m) => `
      <div class="char-card">
        <div class="char-title">${m.name}</div>
        <div class="char-desc">${m.desc}</div>
      </div>
    `
    )
    .join("");
}

// 更新記事簿內的線索與物品（根據玩家已到達的最高頁數）
function updateNotebookContent() {
  const clueMap = {};
  puzzleCharacters.forEach((c) => {
    clueMap[c.id] = [];
  });
  const unlockedItems = [];

  for (let i = 0; i <= maxReachedPage; i++) {
    const p = pages[i];
    if (p.clues) {
      p.clues.forEach((c) => {
        if (clueMap[c.target] && !clueMap[c.target].includes(c.text)) {
          clueMap[c.target].push(c.text);
        }
      });
    }
    if (p.items) {
      p.items.forEach((item) => {
        if (!unlockedItems.includes(item)) {
          unlockedItems.push(item);
        }
      });
    }
  }

  // 渲染 Tab 2：謎題相關角色
  suspectsGrid.innerHTML = puzzleCharacters
    .map((char) => {
      const clues = clueMap[char.id] || [];
      const cluesHtml =
        clues.length > 0
          ? `<ul class="clue-list">${clues.map((text) => `<li>${text}</li>`).join("")}</ul>`
          : `<div class="clue-empty">暫無線索</div>`;

      return `
        <div class="char-card ${char.type}">
          <div class="char-role-badge">${char.role}</div>
          <div class="char-title">${char.title}</div>
          ${cluesHtml}
        </div>
      `;
    })
    .join("");

  // 渲染 Tab 3：謎題相關物品 (2 個一 row)
  if (unlockedItems.length === 0) {
    itemsGallery.innerHTML = `<div class="clue-empty">目前尚未發現任何證物。</div>`;
  } else {
    itemsGallery.innerHTML = unlockedItems
      .map((item) => `<div class="item-card">${item}</div>`)
      .join("");
  }
}

// 將對白文字加上英文翻譯虛線標記
function formatDialogueWithVocab(text, vocab) {
  if (!vocab) return text;
  let formatted = text;
  Object.entries(vocab).forEach(([term, meaning]) => {
    const safeMeaning = meaning.replace(/"/g, "&quot;");
    const span = `<span class="vocab-term" data-term="${term}" data-meaning="${safeMeaning}">${term}</span>`;
    formatted = formatted.split(term).join(span);
  });
  return formatted;
}

// 渲染當前頁面
function renderPage() {
  hideVocabBubble();
  clearTimer();

  const pageData = pages[currentPage];
  if (currentPage > maxReachedPage) {
    const prevMax = maxReachedPage;
    maxReachedPage = currentPage;
    // 若新頁面有線索或物品，顯示記事簿 NEW 提示
    for (let i = prevMax + 1; i <= maxReachedPage; i++) {
      if (pages[i].clues || pages[i].items) {
        clueBadge.classList.remove("hidden");
      }
    }
  }

  updateNotebookContent();

  // 頁碼與按鈕狀態
  pageIndicator.textContent = `第 ${currentPage + 1} / ${pages.length} 頁`;
  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage === pages.length - 1;

  // 圖片顯示處理
  if (pageData.image) {
    imageStage.classList.remove("hidden");
    sceneImage.classList.remove("hidden");
    imageFallback.classList.add("hidden");
    sceneImage.src = pageData.image;
    sceneImage.onerror = () => {
      sceneImage.classList.add("hidden");
      imageFallback.classList.remove("hidden");
      imageFallback.textContent = `🖼️ 圖片載入位置：${pageData.image}（請確保圖片已放進同資料夾）`;
    };
  } else {
    imageStage.classList.add("hidden");
  }

  // 說話角色與對白
  speakerTag.textContent = pageData.speaker || "📖 旁白";
  dialogueText.innerHTML = formatDialogueWithVocab(pageData.text, pageData.vocab);

  // 互動區（問題／計時器／結尾）
  interactionArea.innerHTML = "";
  if (pageData.question) {
    interactionArea.classList.remove("hidden");
    renderQuestion(pageData.question, currentPage);
  } else if (pageData.timer) {
    interactionArea.classList.remove("hidden");
    renderTimer(pageData.timer);
  } else if (pageData.isEnding) {
    interactionArea.classList.remove("hidden");
    renderEnding();
  } else {
    interactionArea.classList.add("hidden");
  }
}

// 渲染各類問題
function renderQuestion(q, pageIdx) {
  const isAnswered = answeredPages.has(pageIdx);
  const promptEl = document.createElement("div");
  promptEl.className = "question-prompt";
  promptEl.textContent = q.prompt;
  interactionArea.appendChild(promptEl);

  const feedbackEl = document.createElement("div");
  feedbackEl.className = "feedback-msg";

  // 類型 1：繪畫／完成任務加分
  if (q.type === "task") {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "action-btn";
    btn.textContent = isAnswered ? "✅ 已完成並獲得 50 分！" : q.buttonText;
    btn.disabled = isAnswered;

    btn.addEventListener("click", () => {
      if (!answeredPages.has(pageIdx)) {
        answeredPages.add(pageIdx);
        addScore(q.points);
        btn.textContent = "✅ 已完成並獲得 50 分！";
        btn.disabled = true;
      }
    });
    interactionArea.appendChild(btn);
  }

  // 類型 2：人物配對題
  if (q.type === "matching") {
    const grid = document.createElement("div");
    grid.className = "matching-grid";
    const selects = [];

    q.positions.forEach((pos) => {
      const box = document.createElement("div");
      box.className = "matching-item";
      const label = document.createElement("label");
      label.textContent = pos.label;

      const select = document.createElement("select");
      select.className = "match-select";
      select.disabled = isAnswered;
      select.innerHTML =
        `<option value="">-- 請選擇 --</option>` +
        q.options
          .map(
            (opt) =>
              `<option value="${opt}" ${isAnswered && opt === pos.answer ? "selected" : ""}>${opt}</option>`
          )
          .join("");

      selects.push({ select, answer: pos.answer });
      box.appendChild(label);
      box.appendChild(select);
      grid.appendChild(box);
    });

    const checkBtn = document.createElement("button");
    checkBtn.type = "button";
    checkBtn.className = "action-btn";
    checkBtn.textContent = isAnswered ? "✅ 配對正確" : "確認配對";
    checkBtn.disabled = isAnswered;

    checkBtn.addEventListener("click", () => {
      const allCorrect = selects.every((s) => s.select.value === s.answer);
      if (allCorrect) {
        answeredPages.add(pageIdx);
        selects.forEach((s) => (s.select.disabled = true));
        checkBtn.disabled = true;
        checkBtn.textContent = "✅ 配對正確";
        feedbackEl.className = "feedback-msg success";
        feedbackEl.textContent = "🎉 完全正確！左：Sir Henry，中：Dr. Pender，右：Mr. Petherick。";
      } else {
        feedbackEl.className = "feedback-msg error";
        feedbackEl.textContent = "❌ 配對有誤，請再根據眼鏡、體型與牧師特徵觀察一次！";
      }
    });

    interactionArea.appendChild(grid);
    interactionArea.appendChild(checkBtn);
    interactionArea.appendChild(feedbackEl);
  }

  // 類型 3：文字輸入題
  if (q.type === "input") {
    const group = document.createElement("div");
    group.className = "input-group";

    const input = document.createElement("input");
    input.type = "text";
    input.className = "text-input";
    input.placeholder = "請輸入答案⋯⋯";
    input.value = isAnswered ? q.answers[0] : "";
    input.disabled = isAnswered;

    const submitBtn = document.createElement("button");
    submitBtn.type = "button";
    submitBtn.className = "action-btn";
    submitBtn.textContent = isAnswered ? "✅ 已答對" : "提交答案";
    submitBtn.disabled = isAnswered;

    const verifyInput = () => {
      const val = input.value.trim();
      if (q.answers.includes(val)) {
        if (!answeredPages.has(pageIdx)) {
          answeredPages.add(pageIdx);
          addScore(q.points);
        }
        input.disabled = true;
        submitBtn.disabled = true;
        submitBtn.textContent = "✅ 已答對";
        feedbackEl.className = "feedback-msg success";
        feedbackEl.textContent = `🎉 答對了！答案是「${q.answers[0]}」(+${q.points}分)`;
      } else {
        feedbackEl.className = "feedback-msg error";
        feedbackEl.textContent = "❌ 答案不正確，提示：重複使用了相同的詞語。";
      }
    };

    submitBtn.addEventListener("click", verifyInput);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.stopPropagation();
        verifyInput();
      }
    });

    group.appendChild(input);
    group.appendChild(submitBtn);
    interactionArea.appendChild(group);
    interactionArea.appendChild(feedbackEl);
  }

  // 類型 4：選擇題 (Multiple Choice)
  if (q.type === "mc") {
    const optionsWrap = document.createElement("div");
    optionsWrap.className = "mc-options";

    q.options.forEach((optText) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-btn";
      btn.textContent = optText;

      if (isAnswered) {
        btn.disabled = true;
        if (optText === q.answer) btn.classList.add("correct");
      }

      btn.addEventListener("click", () => {
        if (answeredPages.has(pageIdx)) return;

        if (optText === q.answer) {
          answeredPages.add(pageIdx);
          btn.classList.add("correct");
          if (q.points > 0) addScore(q.points);
          Array.from(optionsWrap.children).forEach((b) => (b.disabled = true));
          feedbackEl.className = "feedback-msg success";
          feedbackEl.textContent =
            q.points > 0
              ? `🎉 答對了！獲得 +${q.points} 分！`
              : "🎉 答對了！";
        } else {
          btn.classList.add("wrong");
          btn.disabled = true;
          feedbackEl.className = "feedback-msg error";
          feedbackEl.textContent = "❌ 再想一想，試試其他選項！";
        }
      });

      optionsWrap.appendChild(btn);
    });

    interactionArea.appendChild(optionsWrap);
    interactionArea.appendChild(feedbackEl);
  }
}

// 渲染 5 分鐘計時器
function renderTimer(seconds) {
  remainingSeconds = seconds;
  const box = document.createElement("div");
  box.className = "timer-box";

  const display = document.createElement("div");
  display.className = "timer-display";
  display.textContent = formatTime(remainingSeconds);

  const controls = document.createElement("div");
  controls.className = "timer-controls";

  const startPauseBtn = document.createElement("button");
  startPauseBtn.type = "button";
  startPauseBtn.className = "action-btn";
  startPauseBtn.textContent = "▶ 開始計時";

  const resetBtn = document.createElement("button");
  resetBtn.type = "button";
  resetBtn.className = "action-btn";
  resetBtn.textContent = "🔄 重設 5:00";

  startPauseBtn.addEventListener("click", () => {
    if (timerInterval) {
      clearTimer();
      startPauseBtn.textContent = "▶ 繼續計時";
    } else {
      startPauseBtn.textContent = "⏸ 暫停計時";
      timerInterval = setInterval(() => {
        if (remainingSeconds > 0) {
          remainingSeconds--;
          display.textContent = formatTime(remainingSeconds);
        } else {
          clearTimer();
          display.textContent = "00:00";
          startPauseBtn.textContent = "⏰ 時間到！";
        }
      }, 1000);
    }
  });

  resetBtn.addEventListener("click", () => {
    clearTimer();
    remainingSeconds = seconds;
    display.textContent = formatTime(remainingSeconds);
    startPauseBtn.textContent = "▶ 開始計時";
  });

  controls.appendChild(startPauseBtn);
  controls.appendChild(resetBtn);
  box.appendChild(display);
  box.appendChild(controls);
  interactionArea.appendChild(box);
}

// 渲染最後一頁結算
function renderEnding() {
  const summary = document.createElement("div");
  summary.className = "timer-box";
  summary.innerHTML = `
    <div class="question-prompt" style="font-size: 1.2rem; text-align:center;">
      🏆 你的最終總分為：<span style="color: var(--gold-accent); font-size: 1.6rem;">${score}</span> / 160 分
    </div>
  `;

  const restartBtn = document.createElement("button");
  restartBtn.type = "button";
  restartBtn.className = "action-btn";
  restartBtn.textContent = "🔄 重新開始遊戲";
  restartBtn.addEventListener("click", () => {
    currentPage = 0;
    maxReachedPage = 0;
    score = 0;
    scoreVal.textContent = "0";
    answeredPages.clear();
    renderPage();
  });

  summary.appendChild(restartBtn);
  interactionArea.appendChild(summary);
}

function formatTime(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, "0");
  const s = String(sec % 60).padStart(2, "0");
  return `${m}:${s}`;
}

function clearTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function addScore(pts) {
  score += pts;
  scoreVal.textContent = score;
}

// 英文翻譯氣泡定位與顯示
function showVocabBubble(targetEl) {
  const term = targetEl.getAttribute("data-term");
  const meaning = targetEl.getAttribute("data-meaning");

  vocabWord.textContent = term;
  vocabMeaning.textContent = meaning;
  vocabBubble.classList.remove("hidden");

  const rect = targetEl.getBoundingClientRect();
  const bubbleRect = vocabBubble.getBoundingClientRect();

  let top = rect.top - bubbleRect.height - 10;
  let left = rect.left + rect.width / 2 - bubbleRect.width / 2;

  if (top < 10) top = rect.bottom + 10;
  if (left < 10) left = 10;
  if (left + bubbleRect.width > window.innerWidth - 10) {
    left = window.innerWidth - bubbleRect.width - 10;
  }

  vocabBubble.style.top = `${top}px`;
  vocabBubble.style.left = `${left}px`;
}

function hideVocabBubble() {
  vocabBubble.classList.add("hidden");
}

// 點擊事件：英文翻譯觸發與關閉
document.addEventListener("click", (e) => {
  const vocabEl = e.target.closest(".vocab-term");
  if (vocabEl) {
    e.stopPropagation();
    showVocabBubble(vocabEl);
    return;
  }
  if (!e.target.closest("#vocab-bubble")) {
    hideVocabBubble();
  }
});

// 上／下一頁導覽
prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    renderPage();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    renderPage();
  }
});

// 電腦鍵盤按 Enter 前往下一頁
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    // 若記事簿打開中，或焦點在文字輸入框內則不直接跳頁
    if (!notebookModal.classList.contains("hidden")) return;
    if (document.activeElement && document.activeElement.tagName === "INPUT") return;

    if (currentPage < pages.length - 1) {
      currentPage++;
      renderPage();
    }
  }
});

// 記事簿 Modal 開關與 Tab 切換
notebookBtn.addEventListener("click", () => {
  clueBadge.classList.add("hidden");
  notebookModal.classList.remove("hidden");
  notebookModal.setAttribute("aria-hidden", "false");
});

closeModalBtn.addEventListener("click", () => {
  notebookModal.classList.add("hidden");
  notebookModal.setAttribute("aria-hidden", "true");
});

notebookModal.addEventListener("click", (e) => {
  if (e.target === notebookModal) {
    notebookModal.classList.add("hidden");
    notebookModal.setAttribute("aria-hidden", "true");
  }
});

document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"));

    btn.classList.add("active");
    const targetId = btn.getAttribute("data-tab");
    document.getElementById(targetId).classList.add("active");
  });
});

// 啟動遊戲
initClubMembers();
renderPage();
