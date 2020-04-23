import React from "react"
import Articles from "../components/articles/articles";
import {useRouter} from "next/router";
import Query from "../components/query";
import ARTICLE_QUERY from "../apollo/queries/article/article";

// Side for en Artikkel
const Artikkel = () => {

    const router = useRouter();
    {/* articles = props i articles.jsx*/}
    return (
        /*
        <Query query={ARTICLE_QUERY} id={router.query.id}>
            {({data: {article} }) => {
                return (
                    <div>

                        <Articles articles ={article}/>
                    </div>
                )
            }}
        </Query>
            */
        <Articles/>
    );
};

export default Artikkel;
