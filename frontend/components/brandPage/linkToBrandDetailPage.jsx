import Link from "next/link";

const LinkToBrandDetailPage = (props) => {
  return (
    <Link
      href={{
        pathname: "/merkesidedetalj",
        query: { id: props.LinkToBrandDetailPage.id },
      }}
    ></Link>
  );
};

export default LinkToBrandDetailPage;
