import './styles.css';


function Paginacao ({pages,setpageAtual}){
    return(
        <div className="paginacao">
            {Array.from(Array(pages), (vaga,index) => {
                return (
                <button value={index} 
                    onClick={(e) => setpageAtual(Number(e.target.value))}
                    >{index + 1}
                </button>
                )
            })}
        </div>
    )
}

export default Paginacao;