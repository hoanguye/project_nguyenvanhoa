import {useEffect, useState} from 'react'
import axiosConfig from "../axiosConfig.ts";
import {IRepository} from "../type.ts";
import RepoItem from "./RepoItem.tsx";
import ModalDetail from "./ModalDetail.tsx";
import ButtonFilter from "./ButtonFilter.tsx";

import './index.css'


const Home = () => {
    const [repos, setRepos] = useState<IRepository[]>([])
    const [repoSelect, setRepoSelect] = useState<IRepository | undefined>();
    const [typeLanguage, setTypeLanguage] = useState<string[]>([]);
    const [currentLanguage, setCurrentLanguage] = useState<string>('All');
    const [reposFilter, setReposFilter] = useState<IRepository[]>([]);

    const handleSelectRepo = (repo: IRepository) => {
        setRepoSelect(repo)
    }
    const handleCloseModal = () => {
        setRepoSelect(undefined)
    }
    const onSelectLanguage = (lang: string) => {
        setCurrentLanguage(lang)
    }

    const handleGetData = async () => {
        try {
            const response = await axiosConfig.get('/repos');
            const dataRepos = response.data.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            const listLanguage = [...new Set(dataRepos.map(r => r.language))].filter(l => !!l)
            setTypeLanguage(['All', ...listLanguage])
            setRepos(dataRepos)
        } catch (error) {
            console.error('Error:', error)
        }
    }

    useEffect(() => {
        const data = repos.filter(repo => repo.language === currentLanguage || currentLanguage === 'All');
        setReposFilter(data);
    }, [currentLanguage, repos])

    useEffect(() => {
        handleGetData()
    }, [])

    return (
        <>
            {repoSelect?.id && <ModalDetail repo={repoSelect} handleCloseModal={handleCloseModal}/>}
            {typeLanguage.length > 0 &&
                <ButtonFilter
                    listLanguage={typeLanguage}
                    languageSelected={currentLanguage}
                    onSelectLanguage={onSelectLanguage}
                />
            }
            <div className='Home'>
                {reposFilter.map((repo) => (
                        <RepoItem
                            key={repo.id}
                            repo={repo}
                            handleSelectRepo={handleSelectRepo}
                            handleCloseModal={handleCloseModal}
                        />
                    )
                )}
            </div>
        </>
    )
}

export default Home