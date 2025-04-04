import type {GetServerSideProps} from "next";
import Link from "next/link";

const Ok = ({data}: {data: number}) => {
  return <div>
    <h1>This is OK</h1>
    <div>Page data: {data}</div>
  </div>
};

export default Ok;

export const getServerSideProps: GetServerSideProps = async (props) => {
  return {
    props: {
      data: Math.random(),
    },
  };
};
