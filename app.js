const characters = [
  ["1980s", "龍貓", "宮崎駿動畫", "soft", "守護", "草地綠", "橡果", "慢慢呼吸，你的步伐已經在往光的地方走。"],
  ["1980s", "哆啦A夢", "未來道具夥伴", "spark", "創意", "天空藍", "口袋", "先把心裡的門打開，辦法就會跟著出現。"],
  ["1980s", "孫悟空", "熱血冒險", "brave", "突破", "夕陽橘", "能量球", "再難也可以再試一次，你比剛才更強了。"],
  ["1980s", "阿拉蕾", "搞怪天才", "spark", "好奇", "糖果粉", "圓框眼鏡", "把世界看得有趣一點，答案就會跳出來。"],
  ["1980s", "希瑞", "奇幻英雄", "brave", "勇敢", "銀白色", "星光劍", "站直一點，你心裡本來就有力量。"],
  ["1980s", "希曼", "奇幻英雄", "brave", "守護", "金黃色", "盾牌", "把害怕變成責任，你就能往前跨一步。"],
  ["1980s", "米老鼠", "經典動畫", "team", "樂觀", "亮紅色", "白手套", "保持笑容，今天會有人被你的好心情點亮。"],
  ["1980s", "加菲貓", "幽默日常", "soft", "鬆弛", "薑橘色", "千層麵", "先照顧好自己，才有力氣把世界變可愛。"],
  ["1980s", "藍色小精靈", "森林群像", "team", "合作", "莓果藍", "小白帽", "一個人很棒，一起努力會更有魔法。"],
  ["1980s", "史努比", "溫柔哲思", "dream", "自在", "黑白色", "屋頂", "把今天躺平一下也沒關係，靈感會自己降落。"],
  ["1980s", "查理布朗", "成長日常", "soft", "真誠", "暖黃色", "棒球手套", "就算沒打中，也值得為自己鼓掌。"],
  ["1980s", "忍者龜", "街頭英雄", "team", "默契", "披薩綠", "護腕", "找到你的隊友，今天的難題就會變小。"],
  ["1990s", "櫻木花道", "運動熱血", "brave", "自信", "櫻花紅", "球鞋", "別急著否定自己，今天就是你上場的時候。"],
  ["1990s", "流川楓", "冷靜王牌", "focus", "專注", "深海藍", "籃球", "少說一點，多做一步，實力會替你發光。"],
  ["1990s", "木之本櫻", "魔法少女", "dream", "希望", "櫻粉色", "星之杖", "相信自己，溫柔也能成為很強的魔法。"],
  ["1990s", "皮卡丘", "冒險夥伴", "spark", "元氣", "閃電黃", "小背包", "把電力留給重要的事，你今天會亮起來。"],
  ["1990s", "小智", "旅途挑戰", "brave", "行動", "帽簷紅", "地圖", "先出發，答案會在路上跟你會合。"],
  ["1990s", "美少女戰士", "月光守護", "brave", "信念", "月光銀", "緞帶", "用愛和勇氣站穩，今天的你很閃耀。"],
  ["1990s", "蠟筆小新", "搞笑日常", "spark", "自由", "番茄紅", "小短褲", "別太緊張，換個表情事情就沒那麼可怕。"],
  ["1990s", "櫻桃小丸子", "生活觀察", "soft", "幽默", "蜜桃粉", "便當袋", "小事也值得開心，今天先對自己好一點。"],
  ["1990s", "柯南", "推理少年", "focus", "洞察", "偵探藍", "放大鏡", "線索一直都在，冷靜下來你就看得見。"],
  ["1990s", "酷企鵝", "三麗鷗經典", "soft", "反差", "冰川藍", "小冰塊", "不用討好全世界，保留一點自己的酷。"],
  ["1990s", "飛天小女警", "小小英雄", "team", "守護", "亮粉色", "星星貼紙", "把善良聚在一起，小小的你也能改變局面。"],
  ["1990s", "辛普森家庭", "諷刺日常", "dream", "彈性", "檸檬黃", "甜甜圈", "今天不必完美，只要誠實面對就能前進。"],
  ["2000s", "海綿寶寶", "海底喜劇", "spark", "快樂", "海綿黃", "泡泡", "把笑聲打開，壞心情會先被你嚇跑。"],
  ["2000s", "派大星", "天真好友", "soft", "放空", "珊瑚粉", "海星", "有時慢一點，反而能看見真正重要的事。"],
  ["2000s", "魯夫", "海上冒險", "brave", "自由", "草帽黃", "草帽", "想去的地方很遠也沒關係，先握緊你的夢。"],
  ["2000s", "娜美", "航海智囊", "focus", "判斷", "橘金色", "海圖", "算清方向再出手，你的直覺值得信任。"],
  ["2000s", "鳴人", "忍者成長", "brave", "韌性", "火焰橘", "護額", "被看輕的日子，會變成你站起來的理由。"],
  ["2000s", "佐助", "孤高追尋", "focus", "決心", "靛紫色", "黑手環", "把雜音放遠，真正想要的答案會更清楚。"],
  ["2000s", "我愛羅", "孤獨守護", "soft", "安定", "沙棕色", "葫蘆", "把自己接住以後，你也能溫柔地守護別人。"],
  ["2000s", "大雄", "普通人的勇氣", "soft", "誠實", "暖藍色", "竹蜻蜓", "不用一下子變厲害，願意開始就已經很勇敢。"],
  ["2000s", "小夫", "社交玩家", "team", "表達", "湖水綠", "玩具車", "把話說清楚，你會找到更適合的位置。"],
  ["2000s", "魔法咪路咪路", "甜點魔法", "dream", "甜度", "棉花粉", "馬克杯", "用一點甜，替今天補上剛剛好的勇氣。"],
  ["2000s", "喜羊羊", "機智夥伴", "spark", "反應", "青草綠", "鈴鐺", "腦筋轉一下，困難就會露出縫隙。"],
  ["2000s", "灰太狼", "不放棄代表", "brave", "執著", "煙灰色", "補丁帽", "今天沒成功也不丟臉，明天再漂亮回來。"],
  ["2010s", "艾莎", "冰雪女王", "dream", "釋放", "冰晶藍", "雪花", "把真實的自己放出來，你會比想像更自由。"],
  ["2010s", "安娜", "暖心冒險", "team", "陪伴", "莓紅色", "圍巾", "願意靠近的人，會替寒冷的日子點火。"],
  ["2010s", "探險活寶阿寶", "奇幻冒險", "brave", "探索", "檸檬綠", "背包", "世界很怪，但你剛好也很適合冒險。"],
  ["2010s", "老皮", "彈性夥伴", "soft", "彈性", "蜂蜜黃", "遊戲機", "伸縮一下想法，難題會變成新的形狀。"],
  ["2010s", "阿甘妙世界", "荒誕校園", "spark", "腦洞", "湖藍色", "筆記本", "今天的怪想法，也可能是最棒的出口。"],
  ["2010s", "熊大", "森林日常", "soft", "療癒", "可可棕", "蜂蜜罐", "先讓心安靜，事情會慢慢回到你的節奏。"],
  ["2010s", "兔兔", "冷面可愛", "focus", "界線", "純白色", "手機", "溫柔不等於退讓，你可以清楚說出需要。"],
  ["2010s", "杯麵", "暖心機器人", "soft", "照護", "雲朵白", "貼布", "先檢查自己的心，疲憊也需要被照顧。"],
  ["2010s", "小小兵", "搞笑團隊", "team", "歡樂", "香蕉黃", "護目鏡", "一起笑一下，今天的壓力就會少一半。"],
  ["2010s", "妖怪手錶吉胖喵", "妖怪喜劇", "spark", "轉念", "紅白色", "鈴鐺項圈", "怪事也有怪可愛的一面，別急著皺眉。"],
  ["2010s", "寶石之國磷葉石", "成長寓言", "dream", "蛻變", "薄荷綠", "碎晶", "變化會痛，但新的你正在被雕刻出來。"],
  ["2010s", "波比", "音樂樂觀", "team", "明亮", "彩虹粉", "髮帶", "把一點音樂放進心裡，步伐就會輕起來。"],
  ["2020s", "安妮亞", "超能力小孩", "spark", "直覺", "玫瑰粉", "花生", "你的可愛也是能力，今天勇敢說出想法。"],
  ["2020s", "洛伊德", "冷靜任務", "focus", "規劃", "墨綠色", "領帶", "先穩住節奏，你能把複雜的事拆開。"],
  ["2020s", "約兒", "溫柔戰力", "brave", "保護", "酒紅色", "髮飾", "別懷疑你的力量，溫柔的人也能很強。"],
  ["2020s", "竈門炭治郎", "溫柔劍士", "brave", "仁心", "格紋綠", "耳飾", "帶著善意前進，堅定會替你開路。"],
  ["2020s", "禰豆子", "沉默守護", "soft", "守護", "竹粉色", "髮帶", "不必說太多，你的存在已經很有力量。"],
  ["2020s", "五條悟", "自信導師", "spark", "氣場", "霧白色", "墨鏡", "把頭抬高一點，今天輪到你的氣場說話。"],
  ["2020s", "虎杖悠仁", "熱血新星", "brave", "善念", "珊瑚紅", "運動鞋", "即使害怕，也可以選擇做正確的事。"],
  ["2020s", "波奇塔", "忠誠夥伴", "soft", "陪伴", "橙黃色", "小拉環", "小小的願望也值得被珍惜，別弄丟它。"],
  ["2020s", "鏈鋸人淀治", "野性生命力", "brave", "渴望", "鐵鏽橘", "吐司", "先活得像自己，夢想才會開始長大。"],
  ["2020s", "孤獨搖滾小波奇", "內向搖滾", "dream", "表達", "電吉他粉", "吉他撥片", "就算聲音很小，也可以成為一首歌。"],
  ["2020s", "藍色監獄潔世一", "球場覺醒", "focus", "覺醒", "電光藍", "足球", "看清自己的武器，下一步就會變準。"],
  ["2020s", "葬送的芙莉蓮", "長旅魔法", "dream", "沉澱", "銀紫色", "花冠", "慢一點也很好，重要的事會留下痕跡。"],
  ["2020s", "間諜過家家彭德", "預感守護", "soft", "預感", "奶油白", "項圈", "跟著直覺走，今天會避開不必要的麻煩。"],
  ["2020s", "我推的孩子星野愛", "舞台光芒", "spark", "魅力", "星光紫", "星星髮飾", "把光留給自己一點，你值得被看見。"],
].map(([era, name, source, energy, keyword, color, item, quote], index) => ({
  id: index,
  era,
  name,
  source,
  energy,
  keyword,
  color,
  item,
  quote,
}));

const zodiacScores = {
  aries: 3,
  taurus: 8,
  gemini: 14,
  cancer: 21,
  leo: 29,
  virgo: 35,
  libra: 41,
  scorpio: 47,
  sagittarius: 53,
  capricorn: 57,
  aquarius: 61,
  pisces: 66,
};

const choiceScores = {
  brave: 5,
  soft: 11,
  spark: 17,
  focus: 23,
  run: 7,
  think: 13,
  team: 19,
  dream: 29,
  work: 31,
  love: 37,
  money: 41,
  health: 43,
};

const zodiacNames = {
  aries: "牡羊座",
  taurus: "金牛座",
  gemini: "雙子座",
  cancer: "巨蟹座",
  leo: "獅子座",
  virgo: "處女座",
  libra: "天秤座",
  scorpio: "天蠍座",
  sagittarius: "射手座",
  capricorn: "摩羯座",
  aquarius: "水瓶座",
  pisces: "雙魚座",
};

const eraWeight = {
  "1980s": 1,
  "1990s": 2,
  "2000s": 3,
  "2010s": 4,
  "2020s": 5,
};

function getFormValue(name) {
  return document.querySelector(`input[name="${name}"]:checked`).value;
}

function pickCharacter() {
  const zodiac = document.getElementById("zodiac").value;
  const age = Number(document.getElementById("age").value);
  const energy = getFormValue("energy");
  const reaction = getFormValue("reaction");
  const wish = getFormValue("wish");
  const preferredEnergy = [energy, reaction].includes("team") ? "team" : energy;

  const baseScore = zodiacScores[zodiac] + age * 3 + choiceScores[energy] + choiceScores[reaction] + choiceScores[wish];
  const matching = characters.filter((character) => character.energy === preferredEnergy);
  const pool = matching.length >= 4 ? matching : characters;
  const character = pool[baseScore % pool.length];
  const secondary = characters[(baseScore + age + eraWeight[character.era]) % characters.length];

  return {
    character,
    secondary,
    zodiac,
    age,
    energy,
    wish,
  };
}

function initials(name) {
  return name.replace(/[A-Za-z0-9\s]/g, "").slice(0, 2) || name.slice(0, 2);
}

function gradientFor(character) {
  const palettes = {
    "1980s": ["#2e7f88", "#f5b84b"],
    "1990s": ["#d95f8d", "#5e4db2"],
    "2000s": ["#5e9f62", "#f0a43b"],
    "2010s": ["#4e79c7", "#7bc7b4"],
    "2020s": ["#8b5cf6", "#ff6f91"],
  };
  const [a, b] = palettes[character.era];
  return `linear-gradient(145deg, ${a}, ${b})`;
}

function renderResult(result) {
  const { character, secondary, zodiac, age } = result;
  const badge = document.getElementById("characterBadge");
  badge.textContent = initials(character.name);
  badge.style.background = gradientFor(character);

  document.getElementById("resultEra").textContent = `${character.era} 幸運角色`;
  document.getElementById("resultName").textContent = character.name;
  document.getElementById("resultMeta").textContent =
    `${zodiacNames[zodiac]}、${age} 歲的你，今天和「${character.source}」的 ${character.keyword} 頻率最合拍。備用守護角色是 ${secondary.name}。`;
  document.getElementById("resultQuote").textContent = `「${character.quote}」`;
  document.getElementById("luckyColor").textContent = character.color;
  document.getElementById("luckyItem").textContent = character.item;
  document.getElementById("keyword").textContent = character.keyword;

  document.getElementById("resultCard").animate(
    [
      { transform: "translateY(10px)", opacity: 0.75 },
      { transform: "translateY(0)", opacity: 1 },
    ],
    { duration: 260, easing: "ease-out" },
  );
}

function renderCollection(era = "all") {
  const grid = document.getElementById("characterGrid");
  const visible = era === "all" ? characters : characters.filter((character) => character.era === era);
  grid.innerHTML = visible
    .map(
      (character) => `
      <article class="mini-card">
        <div class="mini-top">
          <div class="mini-avatar" style="background:${gradientFor(character)}">${initials(character.name)}</div>
          <div>
            <h3>${character.name}</h3>
            <p>${character.source}</p>
          </div>
        </div>
        <p>「${character.quote}」</p>
        <div class="tag-row">
          <span>${character.era}</span>
          <span>${character.keyword}</span>
          <span>${character.color}</span>
        </div>
      </article>
    `,
    )
    .join("");
}

document.getElementById("quizForm").addEventListener("submit", (event) => {
  event.preventDefault();
  renderResult(pickCharacter());
});

document.querySelectorAll("#zodiac, #age, .quiz-form input[type='radio']").forEach((control) => {
  control.addEventListener("change", () => renderResult(pickCharacter()));
});

document.querySelectorAll(".filter-buttons button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-buttons button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderCollection(button.dataset.era);
  });
});

renderCollection();
renderResult(pickCharacter());
