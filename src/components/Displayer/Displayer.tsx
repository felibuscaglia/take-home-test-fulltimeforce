import React, { useEffect, useState } from 'react';
import { Accordion, Card, Spinner } from "react-bootstrap";
import moment from 'moment';
import { Commit } from '../../types';
import { getCommits } from '../../utils';
const style = require('./Displayer.module.css');

function Displayer(): JSX.Element {

    const [commits, setCommits] = useState<Commit[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [fail, setFail] = useState<boolean>(false);

    async function asyncUseEffect() {
        const repositoryCommits: (Commit[] | string) = await getCommits();

        if (typeof repositoryCommits !== 'string') setCommits(repositoryCommits);
        else setFail(true);
        
        setLoading(false);
    }

    useEffect(() => {
        asyncUseEffect();
    }, [])

    if (loading) {
        return (
            <div>
                <Spinner className={style.spinner} animation="grow" variant="dark" />
                <Spinner className={style.spinner} animation="grow" variant="secondary" />
                <Spinner className={style.spinner} animation="grow" variant="light" />
            </div>
        )
    }

    if (fail) {
        return (
            <div>
                <img src="http://31.media.tumblr.com/2e8986a1b1c062623cea1b9edaddcc52/tumblr_mup3qzOPsX1rk0k2jo1_500.gif" />
                <h2 id={style.fail}>Something failed...</h2>
            </div>
        )
    }

    return (
        <Accordion id={style.accordion}>
            {commits.map((commit: Commit, index: number) =>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle id={style.accordionToggle} eventKey={String(index)}>
                            Commit made {moment(commit.date).fromNow()}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={String(index)}>
                        <Card.Body id={style.cardBody}>
                            <p id={style.prBody}>
                                {commit.message}
                                <a target="blank" href={commit.url} id={style.ghBtn}><i className="fab fa-github"></i> Open in GitHub.</a>
                            </p>
                            <div id={style.author}>
                                Commit made by
                                <a target="blank" href={commit.authorGithubLink}><img src={commit.authorProfilePic} id={style.profilePic} /></a>
                                <b className="bolder">@{commit.authorUsername}</b>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            )}
        </Accordion>
    )
}

export default Displayer;