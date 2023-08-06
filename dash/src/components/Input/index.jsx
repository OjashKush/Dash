const Input = ({ value, onChange, label, labelProps={}, inputProps={} }) => {
    return (
        <div className="w-full flex flex-col gap-1">
            <label 
                className="mb-1"
                {...labelProps}
            >
                {label}
            </label>
            <input
                className="py-2 px-4 rounded-[0.625rem] bg-[#f5f5f5] focus:outline-none focus:bg-[#eaeaea] transition w-full"
                value={value}
                onChange={onChange}
                {...inputProps}
            />
        </div>
    )
}

export default Input