import type {GetServerSideProps} from "next";
import Link from "next/link";

const Ok = () => {
  return <div>
    <h1>This is OK</h1>
  </div>
};

export default Ok;

export const getServerSideProps: GetServerSideProps = async (props) => {
  return {
    props: {
    },
  };
};
