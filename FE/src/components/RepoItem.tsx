import {IRepository} from "../type.ts";


import './index.css'

interface IProps {
    repo: IRepository,
    handleSelectRepo: (repo: IRepository) => void,
}

const RepoItem = ({repo, handleSelectRepo}: IProps) => {
    return (
        <div className='RepoItem' onClick={() => {
            handleSelectRepo(repo)
        }}>
            <h4>Name: {repo.name ?? '---'}</h4>
            <p>Description: {repo.description ?? '---'}</p>
            <p>Language: {repo.language ?? '---'}</p>
            <p>Forks: {repo.forks ?? '---'}</p>
        </div>
    )
}
export default RepoItem;
