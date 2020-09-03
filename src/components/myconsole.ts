const mylog = (value: any) => {
    if (process.env.REACT_CONSOLE_DEBUG) {
        console.log(value)
    })
}