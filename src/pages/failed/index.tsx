import type {GetServerSideProps} from "next";
import Link from "next/link";

const Failed = () => {
  return <div>
    <h1>This is NOT OK</h1>
  </div>
};

export default Failed;

export const getServerSideProps: GetServerSideProps = async (props) => {
  return {
    props: {},
  };
};
