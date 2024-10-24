import './index.css'

interface IProps {
    listLanguage: string[],
    languageSelected: string,
    onSelectLanguage: (lang: string) => void,
}

const ButtonFilter = ({languageSelected, listLanguage, onSelectLanguage}: IProps) => {
    return (
        <div className='Filter'>
            {
                listLanguage.map((lang, index) => (
                    <button className={languageSelected === lang ? 'active' : ''} key={index}
                            onClick={() => onSelectLanguage(lang)}>{lang}</button>
                ))
            }
        </div>
    )
}

export default ButtonFilter;