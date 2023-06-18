export default function MakeAnAppointment () {
    return (
        <div className='appointment-form'>
            <div className="form-title">
                <h2>Записаться на приём</h2>
            </div>
            <form action="/">
                <div className="inputfield">
                    <label htmlFor="username"></label>
                    <input name='usernamae' type="text" placeholder='Ваше имя'/>
                </div>


            </form>
        </div>
    )
}