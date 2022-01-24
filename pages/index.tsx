import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

const Home = () => {
    return (
        <>
            <Layout pageTitle='Home'>
                <Image
                    src='/squirtle.png'
                    width={300}
                    height={300}
                    alt='Squirtle.png'
                />
                <h1 className={styles.title}>Hi All</h1>
                <div>lorem ipsum dolor sit amet, consectetur adipis</div>
                <div>lorem ipsum dolor sit amet, consectetur adipis</div>
                <div>lorem ipsum dolor sit amet, consectetur adipis</div>
                <div>lorem ipsum dolor sit amet, consectetur adipis</div>
                <div>lorem ipsum dolor sit amet, consectetur adipis</div>
                <div>lorem ipsum dolor sit amet, consectetur adipis</div>
                <div>lorem ipsum dolor sit amet, consectetur adipis</div>
                <div>lorem ipsum dolor sit amet, consectetur adipis</div>
                <div>lorem ipsum dolor sit amet, consectetur adipis</div>
                <div>lorem ipsum dolor sit amet, consectetur adipis</div>
                <div>lorem ipsum dolor sit amet, consectetur adipis</div>
                <div>lorem ipsum dolor sit amet, consectetur adipis</div>
                <div>lorem ipsum dolor sit amet, consectetur adipis</div>
                <div>lorem ipsum dolor sit amet, consectetur adipis</div>
                <div>lorem ipsum dolor sit amet, consectetur adipis</div>
                <div>lorem ipsum dolor sit amet, consectetur adipis</div>
                <div>lorem ipsum dolor sit amet, consectetur adipis</div>
                <div>lorem ipsum dolor sit amet, consectetur adipis</div>
                <div>lorem ipsum dolor sit amet, consectetur adipis</div>
                <div>lorem ipsum dolor sit amet, consectetur adipis</div>
                <div>lorem ipsum dolor sit amet, consectetur adipis</div>
                <div>lorem ipsum dolor sit amet, consectetur adipis</div>
                <div>lorem ipsum dolor sit amet, consectetur adipis</div>
                <div>lorem ipsum dolor sit amet, consectetur adipis</div>
                <div>lorem ipsum dolor sit amet, consectetur adipis</div>
                <div>lorem ipsum dolor sit amet, consectetur adipis</div>
                <div>lorem ipsum dolor sit amet, consectetur adipis</div>
                <div>lorem ipsum dolor sit amet, consectetur adipis</div>
                <div>lorem ipsum dolor sit amet, consectetur adipis</div>
                <div>lorem ipsum dolor sit amet, consectetur adipis</div>
                <div>lorem ipsum dolor sit amet, consectetur adipis</div>
                <div>lorem ipsum dolor sit amet, consectetur adipis</div>
                <div>lorem ipsum dolor sit amet, consectetur adipis</div>
                <div>lorem ipsum dolor sit amet, consectetur adipis</div>
                <Image
                    src='/charmander.png'
                    width={300}
                    height={300}
                    alt='charmander.png'
                />
            </Layout>
        </>
    );
};

export default Home;
