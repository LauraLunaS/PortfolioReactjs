import './PageOne.css'
import post from './post.svg'
import color from './color.svg'
import loginho from './loginho.svg'

function PageOne () {

    return (
        <>
        <div className='section'>
            <div className='one'>1</div>
            <div className='two'>2</div>
            <div className='three'>3</div>
        </div>

        <div className='fts'>
            <div className='col'>
                <img src={post}></img>
                <p className='top'>Case Study</p>
                <p className='bottom'>design each step taken during the <br></br>project, its challenges, problems <br></br>and the whole story covered during <br></br>the project.</p>
            </div>
            <div className='col'>
                <img src={loginho}></img>
                <p className='top'>Criação de logo</p>
                <p className='bottom'>solid and well-built <br></br>identity.</p>
            </div>
            <div className='col'>
                <img src={color}></img>
                <p className='top'>Identidade Visual</p>
                <p className='bottom'>construction of graphic sets that <br></br>define your brand and distinguish <br></br>it from others.</p>
            </div>
        </div>

        </>

    );

}
export default PageOne;