const Info = () => {
    return (
        <div className="about__info grid">

            <div className="about__box">
                <i class='bx bxl-react about__icon'></i>
                <h3 className="about__title">React JS</h3>
            </div>

            <div className="about__box">
                <i class='bx bxl-javascript about__icon' ></i>
                <h3 className="about__title">Javascript</h3>
            </div>

            <div className="about__box">
                <i class='bx bx-chat about__icon' ></i>
                <h3 className="about__title">Atendimento ao cliente</h3>
            </div>

        </div>

    )
}

export default Info;