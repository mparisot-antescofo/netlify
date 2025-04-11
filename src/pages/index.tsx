import type {GetServerSideProps} from "next";
import Link from "next/link";

const Home = () => {
  return <div>
    <h1>This is the home!</h1>
    <p>Hover the links bellow with the devtools network tab opened</p>

    <p><Link href="/ok" prefetch={false}>This page should be ok</Link></p>
    <p><Link href="/bad" prefetch={false}>This page should display a 404 as we rewrite /bad to /failed</Link></p>
  </div>
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (props) => {
  return {
    props: {},
  };
};
