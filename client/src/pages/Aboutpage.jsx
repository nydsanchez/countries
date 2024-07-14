import styles from "../styles/About.module.css";
import PageNav from "../components/navpage/NavPage";
import NavSimplePage from "../components/navpage/NavSimplePage";
import Footer from "../components/footer/Footer";
import LogosFooter from "../components/footer/LogosFooter";

function Aboutpage() {
  return (
    <div className={styles.about}>
      <header className={styles.about__header}>
        <PageNav />
        <NavSimplePage />
      </header>
      <main className={styles.about__content}>
        <section className={styles.content__text}>
          <p>
            This web application is the result of a final project at Henry, a
            technology education academy with a strong focus on employability.
            The application has been built as a Single Page Application (SPA)
            using modern technologies such as React, Redux, Node, Express, and
            Sequelize.
          </p>

          <p>
            The development of this application has allowed for the application
            of basic styling and design resources, focusing on user experience
            (UX) and user interface (UI). Additionally, it has been an
            opportunity to affirm and connect the concepts learned throughout
            the course, integrating best practices in the development process.
          </p>
        </section>
        <div className={styles.content__image}>
          <img src="/bk2.gif" alt="Banderas del mundo" />
        </div>
      </main>
      <footer className={styles.about__footer}>
        <LogosFooter />
        <Footer />
      </footer>
    </div>
  );
}

export default Aboutpage;
