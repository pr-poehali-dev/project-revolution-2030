export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">МИФЫ*ОМСКА</div>
        <nav>
          <a href="#">Легенды</a>
          <a href="#">Места</a>
          <a href="#">Истории</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Экскурсия</button>
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
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Узнать тайны
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Все легенды
              </button>
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

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ТОП ЛЕГЕНД</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Все мифы
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Самый известный</span>
              <img
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Подземный Омск"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Подземный город</h3>
                  <span className="price">XVIII в.</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Сеть тайных ходов под центром Омска, соединяющих крепость, собор и купеческие особняки. Карты до сих пор не найдены.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Жуть
              </span>
              <img
                src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Призрак генерал-губернатора"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Призрак Колчака</h3>
                  <span className="price">1919</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  В резиденции Верховного правителя по ночам слышат шаги и видят силуэт у окна. Где спрятано золото — не знает никто.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Аномалия
              </span>
              <img
                src="https://images.unsplash.com/photo-1502209524164-acea936639a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Озеро Эбейты"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Озеро Эбейты</h3>
                  <span className="price">∞ лет</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Солёное озеро с целебной грязью. Старожилы говорят: в полнолуние вода светится, а звуки уходят в небо.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ВАЙБ ПРИИРТЫШЬЯ.</h2>
            <p className="vibe-text">
              Мы не просто пересказываем сказки. Мы собираем свидетельства, документы и пугающие совпадения. От казачьих преданий до историй таксистов с Левого берега — каждый миф проверен и описан. Подключайся и узнай свой Омск заново.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Наша команда
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

      <footer>
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
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Легенды
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Места
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Экскурсии
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
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
    </>
  );
}
