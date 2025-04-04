import type {GetServerSideProps} from "next";
import Link from "next/link";

const Failed = ({data}: {data: number}) => {
  return <div>
    <h1>This is NOT OK</h1>
    <div>Page data: {data}</div>
  </div>
};

export default Failed;

export const getServerSideProps: GetServerSideProps = async (props) => {
  return {
    props: {
      data: Math.random(),
    },
  };
};
