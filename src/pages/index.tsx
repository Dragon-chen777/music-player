import styles from '@/styles/Index.module.less';
import '@/styles/globals.module.less'
import Head from 'next/head';
import MusicPlayer from '../components/musicPlayer';

const App = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato&display=swap" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css" />
      </Head>
      <div className={styles.page}>
        <h1>Music Player</h1>
        <MusicPlayer/>
      </div>
    </>
  );
}

export default App;
