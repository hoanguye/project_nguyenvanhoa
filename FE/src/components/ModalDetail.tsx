import {IRepository} from "../type.ts";
import './index.css'

interface IProps {
    repo: IRepository,
    handleCloseModal: () => void,
}

const ModalDetail = ({repo, handleCloseModal}: IProps) => {
    return (
        <div className='ModalDetail-wraper'>
            <div className='ModalDetail'>
                <span className='close-button' onClick={handleCloseModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="12"
                         height="100" viewBox="0 0 24 24">
                        <path
                            d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
                    </svg>
                </span>
                <h2>Repository: {repo.name}</h2>
                <p className='commit-author'>Author: {repo.full_name}</p>
                <p className='commit-date'>Date: {new Date(repo.pushed_at).toLocaleDateString()}</p>
                <p className='commit-message'>Message: {repo.description}</p>
            </div>
        </div>
    )
}

export default ModalDetail;