import { useState } from "react"

function Input({ placeholder, value, onChange }) {
    return <input 
        className="form-control mt-3 mb-2" 
        type="text" 
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
    />
}

function RangeInput({label, value, onChange}){
    return <>
        <label>{label}</label>
        <input 
            type="range" 
            className="form-range" 
            min={1} max={7} 
            value={value} 
            onChange={(e) => onChange(e.target.value)}
        />
    </>
}

function CheckBox({ label, checked, onChange }) {
    return <div className="mb-3 form-check">
        <input 
            type="checkbox" 
            className="form-check-input" 
            id="check"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="check">{label}</label>
    </div>
}

export function SearchBar({
    searchValue,setSearchValue, isChecked, setIsChecked, rangeValue, setRangeValue}) {

    return <>
        <Input 
            value={searchValue}
            onChange={setSearchValue}
            placeholder="Rechercher..."
        />
        <RangeInput
            label="Prix"
            value={rangeValue}
            onChange={setRangeValue}
        />
        <CheckBox
            label="N'afficher que les produits en stock"
            checked={isChecked}
            onChange={setIsChecked}
        />
    </>
}