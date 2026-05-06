import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

type Myth = {
  id: string;
  title: string;
  tag: string;
  tagStyle?: React.CSSProperties;
  date: string;
  short: string;
  image: string;
  fullStory: string;
  facts: string[];
};

const MYTHS: Myth[] = [
  {
    id: "underground",
    title: "Подземный город",
    tag: "Самый известный",
    date: "XVIII в.",
    short:
      "Сеть тайных ходов под центром Омска, соединяющих крепость, собор и купеческие особняки. Карты до сих пор не найдены.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    fullStory:
      "Легенда о подземном Омске возникла ещё во времена Второй Омской крепости. Купцы прятали в катакомбах товары, военные — оружие, а в годы Гражданской войны — документы и казну. Краеведы регулярно находят кирпичные арки в подвалах старых домов на Любинском проспекте, но карта системы туннелей ни разу не была опубликована.",
    facts: [
      "Первые упоминания о тоннелях встречаются в дневниках 1830-х годов",
      "В 1996 году при ремонте Тарских ворот рабочие наткнулись на засыпанный ход",
      "Один из ходов якобы вёл от особняка Батюшкина к берегу Иртыша",
      "Городские диггеры насчитали более 20 точек входа в исторической части",
    ],
  },
  {
    id: "kolchak",
    title: "Призрак Колчака",
    tag: "Жуть",
    tagStyle: { background: "var(--secondary)" },
    date: "1919",
    short:
      "В резиденции Верховного правителя по ночам слышат шаги и видят силуэт у окна. Где спрятано золото — не знает никто.",
    image:
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    fullStory:
      "Особняк Батюшкина, где жил адмирал Колчак, считается самым мистическим зданием Омска. Сотрудники музея фиксируют необъяснимые звуки, скрип паркета и движение теней. Главная загадка — судьба части золотого запаса Российской империи, которая, по одной из версий, осталась в Омске.",
    facts: [
      "Адмирал прожил в особняке с 1918 по 1919 годы",
      "Свидетели описывают силуэт высокого мужчины в шинели у окна второго этажа",
      "Часть золотого запаса так и не нашли — версии указывают на Омск, Тайгу и Байкал",
      "В 2019 году в здании сняли несколько документальных фильмов про аномалии",
    ],
  },
  {
    id: "ebeity",
    title: "Озеро Эбейты",
    tag: "Аномалия",
    tagStyle: { background: "var(--accent)", color: "var(--dark)" },
    date: "∞ лет",
    short:
      "Солёное озеро с целебной грязью. Старожилы говорят: в полнолуние вода светится, а звуки уходят в небо.",
    image:
      "https://images.unsplash.com/photo-1502209524164-acea936639a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    fullStory:
      "Эбейты — крупнейшее солёное озеро Омской области, памятник природы. Местные жители считают его местом силы: сюда ездят лечиться грязью и заряжаться. Аномалии связаны с резким изменением минерализации, миражами над поверхностью и необычным акустическим эффектом — звуки будто гасятся в воздухе.",
    facts: [
      "Площадь озера достигает 113 км² — оно крупнейшее в регионе",
      "Концентрация соли в десять раз выше, чем в среднем море",
      "Грязь Эбейты с 1980-х применяют в санаториях для лечения суставов",
      "Орнитологи фиксируют здесь редкие виды птиц, в том числе фламинго-залётных",
    ],
  },
];

export default function Index() {
  const [openMyth, setOpenMyth] = useState<Myth | null>(null);

  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">МИФЫ*ОМСКА</div>
        <nav>
          <a href="#legends">Легенды</a>
          <a href="#legends">Места</a>
          <a href="#vibe">Истории</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <button className="btn-cta" onClick={() => setOpenMyth(MYTHS[0])}>
          Экскурсия
        </button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ОМСКА НЕТ,
              <br />
              А <span>МИФЫ</span> ЕСТЬ
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Подземные ходы, призраки крепости и Любинский проспект, где время течёт по-другому. Собрали все легенды Прииртышья в одном месте.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button
                className="btn-cta"
                style={{ background: "var(--primary)", color: "white" }}
                onClick={() => setOpenMyth(MYTHS[0])}
              >
                Узнать тайны
              </button>
              <a
                href="#legends"
                className="btn-cta"
                style={{ background: "white", textDecoration: "none", textAlign: "center" }}
              >
                Все легенды
              </a>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              МИСТИКА
              <br />
              КАЖДЫЙ ДЕНЬ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ПРИИРТЫШЬЕ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ТАЙНА
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ПОДЗЕМНЫЙ ОМСК * ПРИЗРАК ГЕНЕРАЛ-ГУБЕРНАТОРА * ЛЮБИНСКИЙ ПОРТАЛ * ОЗЕРО ЭБЕЙТЫ * ПЯТЬ УГЛОВ ЛЕГЕНДЫ *
            ПОДЗЕМНЫЙ ОМСК * ПРИЗРАК ГЕНЕРАЛ-ГУБЕРНАТОРА * ЛЮБИНСКИЙ ПОРТАЛ * ОЗЕРО ЭБЕЙТЫ
          </div>
        </div>

        <section className="section-padding" id="legends">
          <div className="section-header">
            <h2 className="section-title">ТОП ЛЕГЕНД</h2>
            <a
              href="#legends"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Все мифы
            </a>
          </div>

          <div className="menu-grid">
            {MYTHS.map((myth) => (
              <div
                key={myth.id}
                className="menu-card"
                onClick={() => setOpenMyth(myth)}
                style={{ cursor: "pointer" }}
              >
                <span className="menu-tag" style={myth.tagStyle}>
                  {myth.tag}
                </span>
                <img src={myth.image} alt={myth.title} />
                <div className="menu-card-body">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <h3>{myth.title}</h3>
                    <span className="price">{myth.date}</span>
                  </div>
                  <p style={{ fontSize: "14px", color: "#666" }}>{myth.short}</p>
                  <p
                    style={{
                      marginTop: "14px",
                      fontWeight: 800,
                      fontSize: "12px",
                      textTransform: "uppercase",
                      color: "var(--primary)",
                    }}
                  >
                    Читать миф →
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="retro-vibe" id="vibe">
          <div>
            <h2 className="vibe-title">ВАЙБ ПРИИРТЫШЬЯ.</h2>
            <p className="vibe-text">
              Мы не просто пересказываем сказки. Мы собираем свидетельства, документы и пугающие совпадения. От казачьих преданий до историй таксистов с Левого берега — каждый миф проверен и описан. Подключайся и узнай свой Омск заново.
            </p>
            <button
              className="btn-cta"
              style={{ background: "var(--dark)", color: "white", borderColor: "white" }}
              onClick={() => setOpenMyth(MYTHS[1])}
            >
              Наша история
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @MIFY.OMSK
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1520637836862-4d197d17c55a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Старый Омск"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Туман над Иртышом"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1551845728-6820a30c64e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Крепость"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Заброшка"
              />
            </div>
          </div>
        </section>
      </main>

      <footer id="contacts">
        <div>
          <div className="footer-logo">МИФЫ*ОМСКА</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Архив легенд, тайн и аномалий Омской области. Собираем с 2024, но истории — со времён Бухгольца.
          </p>
        </div>
        <div className="footer-links">
          <h4>Разделы</h4>
          <ul>
            <li>
              <a href="#legends" style={{ color: "inherit", textDecoration: "none" }}>
                Легенды
              </a>
            </li>
            <li>
              <a href="#legends" style={{ color: "inherit", textDecoration: "none" }}>
                Места
              </a>
            </li>
            <li>
              <a href="#vibe" style={{ color: "inherit", textDecoration: "none" }}>
                Экскурсии
              </a>
            </li>
            <li>
              <a href="#contacts" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Экскурсии</h4>
          <ul>
            <li>Сб-Вс: 14:00 - мистический пешком</li>
            <li>Пт: 21:00 - ночь призраков</li>
            <li>По заявке: подземный Омск</li>
            <li>Пн-Чт: онлайн-аудио</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>2025 МИФЫ ОМСКА</span>
          <span>ТАЙНЫ ПРИИРТЫШЬЯ</span>
          <span>VK / TG / YT</span>
        </div>
      </footer>

      <Dialog open={!!openMyth} onOpenChange={(o) => !o && setOpenMyth(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto border-[3px] border-black shadow-[8px_8px_0px_#1a1a1a] bg-[#fdf9f0] rounded-none">
          {openMyth && (
            <>
              <img
                src={openMyth.image}
                alt={openMyth.title}
                className="w-full h-56 object-cover border-[3px] border-black"
              />
              <DialogHeader>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span
                    className="inline-block px-3 py-1 text-xs font-extrabold uppercase border-[3px] border-black"
                    style={openMyth.tagStyle ?? { background: "var(--primary)", color: "white" }}
                  >
                    {openMyth.tag}
                  </span>
                  <span className="font-extrabold text-lg">{openMyth.date}</span>
                </div>
                <DialogTitle className="font-['Unbounded'] uppercase text-3xl md:text-4xl leading-none text-left">
                  {openMyth.title}
                </DialogTitle>
                <DialogDescription className="text-base text-[#333] leading-relaxed pt-2 text-left">
                  {openMyth.fullStory}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4">
                <h4 className="font-['Unbounded'] uppercase text-xl mb-3">Факты</h4>
                <ul className="space-y-2">
                  {openMyth.facts.map((fact, i) => (
                    <li key={i} className="flex gap-3 text-[#333] leading-snug">
                      <span className="font-extrabold text-[var(--primary)]">0{i + 1}</span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
