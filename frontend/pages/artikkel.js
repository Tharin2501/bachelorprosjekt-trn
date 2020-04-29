import React from "react"
import Articles from "../components/articles/articles";
import ARTICLE_QUERY from "../apollo/queries/article/article";
import Query from "../components/query";
import {useRouter} from "next/router";

// Side for en Artikkel
const artikkel = () => {

    const router = useRouter();
    console.log(router.query.id);
    return (
        <Query query={ARTICLE_QUERY} id={router.query.id}>
            {({data: {article} }) => {
                return (
                    <div>
                        <Articles artikkel={article}/>
                    </div>
                )
            }}
        </Query>


    );
};

export default artikkel;
