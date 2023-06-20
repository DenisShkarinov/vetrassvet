import {doctors, typeOfAnimal} from '../data'
import {Props} from "@/utils/utils";
export default function Select (props: Props) {
    return (
        <select name={props.name} id={props.name} >
            {
                props.name ==='animal' ?
                    typeOfAnimal.map(option => (
                        <option key={Math.random() * 100000} value="">{ option }</option>
                    )) :
                    doctors.map(option => (
                        <option key={Math.random() * 100000} value="">{ option }</option>
                    ))
            }
        </select>
    )
}