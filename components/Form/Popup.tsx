'use client'

import '../form.scss'
import Select from "@/components/Form/Select";
import {FormEvent} from "react";

export default function MakeAnAppointment () {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log(e.target)
    }
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
                    <Select name="animal" />
                </div>
                <div className="inputfield">
                    <input type="text" placeholder="Кличка" required={true}/>
                </div>
                <div className="inputfield">
                    <label htmlFor="specialist"></label>
                    <Select name='doctor'></Select>
                </div>
                <div className="inputfield">
                    <label htmlFor="textarea">Опишите проблему:</label>
                    <textarea name="textarea" id="textarea" cols={30} rows={10} required={true}></textarea>
                </div>
                <button onSubmit={(e:FormEvent) => handleSubmit (e) } type="submit">OK</button>
            </form>
        </div>
    )
}