import { useDispatch } from "react-redux";
import { clearData } from "../redux/actions";
import { useEffect } from "react";

import styles from "../styles/About.module.css";
import PageNav from "../components/navpage/NavPage";
import SimpleOpt from "../components/smartbar/SimpleOp";
import Footer from "../components/footer/Footer";
import flags from "../assets/bk2.gif";
import Henry from "../assets/Henrylogo.png";
import awwwards from "../assets/awwards.png";
import Jonas from "../assets/JonasLogo.png";
import {
  SiReact,
  SiRedux,
  SiSequelize,
  SiExpress,
  SiNodedotjs,
} from "react-icons/si";

function Aboutpage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearData());
  }, [dispatch]);

  return (
    <div className={styles.about}>
      <header>
        <PageNav />
        <SimpleOpt />
      </header>
      <main className={styles.about__content}>
        <section className={styles.content__text}>
          <p>
            Esta aplicación web es el resultado del proyecto individual en
            Henry, una academia de educación en tecnología con un fuerte enfoque
            en la empleabilidad. La aplicación ha sido construida como una
            Aplicación de Página Única (SPA) utilizando tecnologías modernas
            como React, Redux, Node, Express y Sequelize.
            <br /> <br /> El desarrollo de esta aplicación ha sido una
            oportunidad para afirmar y consolidar los conceptos aprendidos a lo
            largo del curso.
          </p>
        </section>
        <div className={styles.content__image}>
          <img src={flags} alt="Banderas del mundo" />
        </div>
      </main>

      <div className={styles.logosFooter}>
        <section className={styles.SectionIcoApp}>
          <SiReact className={styles.IcoApp} />
          <SiRedux className={styles.IcoApp} />
          <SiNodedotjs className={styles.IcoApp} />
          <SiExpress className={styles.IcoApp} />
          <SiSequelize className={styles.IcoApp} />
        </section>
        <section className={styles.SectionIcoApp__img}>
          <img
            src={Henry}
            alt="Henrys logo"
            className={`${styles.IcoApp_img__H} ${styles.filter_image}`}
          />
          <img
            src={awwwards}
            alt="awwwards logo"
            className={`${styles.IcoApp_img} ${styles.filter_image}`}
          />
          <img
            src={Jonas}
            alt="Coding heroes logo"
            className={`${styles.IcoApp_img__Jonas} ${styles.filter_image}`}
          />
        </section>
      </div>

      <footer className={styles.about__footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default Aboutpage;
