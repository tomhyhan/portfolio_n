export default async function fetchWarpper(url: string, options : any) {
    try{
        const res = await fetch(url, {
            ...options
        })
    
        if (!res.ok) {
            const {message} = await res.json(); 
            console.log(message)
            throw new Error(message);
        }
    } catch (error) {
        console.log(error)
        throw error;
    }
}
