import '../css/Card.css';
// import thorImg from '../images/thor_love_and_thunder.jpg';

function Card() {
    return (
        <>
        <section>
            <div className="card">
                <div id="thorImg" className="front"></div>
                <div className="back">
                    <p className="movieTitle">토르:러브 앤 썬더</p>
                    <p>Thor: Love and Thunder, 2022</p>
                </div>
            </div>
        </section>
        <section>
            <div className="card">
                <div id="topGunImg" className="front"></div>
                <div className="back">
                    <p className="movieTitle">탑건:매버릭</p>
                    <p>Top Gun: Maverick, 2021</p>
                </div>
            </div>
        </section>
        <section>
            <div className="card">
                <div id="minionsImg" className="front"></div>
                <div className="back">
                    <p className="movieTitle">미니언즈2</p>
                    <p>Minions: The Rise of Gru, 2022</p>
                </div>
            </div>
        </section>
        <section>
            <div className="card">
                <div id="breakUpImg" className="front"></div>
                <div className="back">
                    <p className="movieTitle">헤어질 결심</p>
                    <p>Decision To Leave, 2021</p>
                </div>
            </div>
        </section>
        <section>
            <div className="card">
                <div id="witchImg" className="front"></div>
                <div className="back">
                    <div>
                        <p className="movieTitle">마녀2</p>
                        <p>The Witch : Part2. The Other One, 2021</p>
                    </div>
                </div>
            </div>
        </section>
        {/* <div className="container">
            <div className="box">
                <div className="body">
                    <div className="imgContainer front">
                        <img src={thorImg} alt="토르"/>
                    </div>
                    <div className="content d-flex flex-column justify-content-center">
                        <div>
                            <p className="movieTitle">토르:러브 앤 썬더</p>
                            <p>Thor: Love and Thunder, 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        </>
    )
}

export default Card;