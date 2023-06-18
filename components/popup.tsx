import './form.scss'
export default function MakeAnAppointment () {
    return (
        <div className='appointment-form'>
            <div className="form-title">
                <h2>Записаться на приём</h2>
            </div>
            <form action="/">
                <div className="inputfield">
                    <label htmlFor="username"></label>
                    <input name='usernamae' type="text" placeholder='Ваше имя' required={true}/>
                </div>
                <div className="inputfield">
                    <input type="tel" placeholder="(999) 999 99-99" required={true}/>
                </div>
                <div className="inputfield">
                    <label htmlFor="animal">Вид животного</label>
                    <select name="animal" id="animal" required={true}>
                        <option value="dog">Собака</option>
                        <option value="cat">Кошка</option>
                        <option value="bird">Птица</option>
                        <option value="other">Другое</option>
                    </select>
                </div>
                <div className="inputfield">
                    <input type="text" placeholder="Кличка" required={true}/>
                </div>
                <div className="inputfield">
                    <label htmlFor="specialist"></label>
                    <select name="specialist" id="specialist" required={true}>
                        <option value="terapevt">Терапевт</option>
                        <option value="hirurg">Хирург</option>
                        <option value="cardio">Кардиолог</option>
                        <option value="derma">Дерматолог</option>
                        <option value="neuro">Невролог</option>
                        <option value="stoma">Стоматолог</option>
                        <option value="endo">Эндокринолог</option>
                        <option value="onko">Онколог</option>
                    </select>
                </div>
                <div className="inputfield">
                    <label htmlFor="textarea">Опишите проблему:</label>
                    <textarea name="textarea" id="textarea" cols="30" rows="10" required={true}></textarea>
                </div>
                <button type="submit">OK</button>
            </form>
        </div>
    )
}