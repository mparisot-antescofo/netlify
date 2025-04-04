import type {GetServerSideProps} from "next";
import Link from "next/link";

const Home = () => {
  return <div>
    <h1>This is the home!</h1>
    <h2>EN</h2>
    <p><Link href="/good" prefetch={false}>This page should be ok</Link></p>
    <p><Link href="/bad" prefetch={false}>This page should NOT be ok</Link></p>
    <h2>FR</h2>
    <p><Link href="/fr/bien" prefetch={false}>This page should be ok</Link></p>
    <p><Link href="/fr/mauvais" prefetch={false}>This page should NOT be ok</Link></p>
  </div>
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (props) => {
  return {
    props: {},
  };
};
