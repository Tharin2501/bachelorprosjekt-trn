import React from "react"
import Articles, { ArticleAuthor } from "../components/articles/articles";
import ARTICLE_QUERY from "../apollo/queries/article/article";
import Query from "../components/query";
import { useRouter } from "next/router";
import Head from 'next/head'

// Side for en Artikkel
const artikkel = () => {

    const router = useRouter();

    return (
        <div>

            <Query query={ARTICLE_QUERY} id={router.query.id}>
                {({ data: { article } }) => {
                    return (
                        <div>
                            <Head>
                                <title> {article.title} </title>
                            </Head>
                            <Articles artikkel={article} />
                        </div>
                    )
                }}
            </Query>
        </div>
    );
};

export default artikkel;
