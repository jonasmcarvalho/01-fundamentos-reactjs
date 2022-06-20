import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.Post}>
            <header>
                <div className={styles.author}>
                    <img src="https://github.com/jonasmcarvalho.png" />
                    <div className={styles.authorInfo}>
                        <strong>Jonas Carvalho</strong>
                        <span>Cloud Developer</span>
                    </div>
                </div>

                <time title='20 de Junho às 06:51' dateTime='2022-06-20 06:51:00'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
              <p>Fala galeraa 👋</p>        
              <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
              <p>👉 <a href="">jane.design/doctorcare</a></p>
              <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
            </div>

        </article>
    )
}