export function handleError(error : unknown, setError : any) {
    if (error instanceof Error && error.message) {
        console.error(error.message);
        console.log("error new")
        setError(error)
    } else {
        console.log("error fix")
        setError(error)
    }
}