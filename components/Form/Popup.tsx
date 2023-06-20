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
                    <label htmlFor="username">Ваше имя:</label>
                    <input id='username' minLength={2} type="text" placeholder='Иван' required={true}/>
                </div>
                {/*
                    should make or find phone validator
                */}
                <div className="inputfield">
                    <label htmlFor="phone">Телефон: </label>
                    <input type="tel" maxLength={13} minLength={11} pattern="^[78]\d+$" id="phone" placeholder="8 (999) 999 99-99" required={true}/>
                </div>

                <div className="inputfield">
                    <label htmlFor="animal">Вид животного:</label>
                    <Select name="animal" />
                </div>
                <div className="inputfield">
                    <label htmlFor="nameOfAnimal">Кличка питомца: </label>
                    <input type="text" minLength={2} id="nameOfAnimal" placeholder="Кличка" required={true}/>
                </div>
                <div className="inputfield">
                    <label htmlFor="specialist">Специалист: </label>
                    <Select name='doctor'></Select>
                </div>
                <div className="inputfield column">
                    <label htmlFor="textarea">Опишите проблему:</label>
                    <textarea name="textarea" id="textarea" minLength={20} cols={20} rows={10} required={true} ></textarea>
                </div>
                <button onSubmit={(e:FormEvent) => handleSubmit (e) } type="submit">записаться на прием</button>
            </form>
        </div>
    )
}