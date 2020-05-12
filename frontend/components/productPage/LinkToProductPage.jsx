import Link from "next/link";
const LinkToProductPage = (props) => {
  return (
    <Link
      href={{
        pathname: "/produktside",
        query: { id: props.LinkToProductPage.id },
      }}
    ></Link>
  );
};

export default LinkToProductPage;
//
