import useSWR from 'swr';

async function getCommands(url: string) {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error('Network response was not ok.')
    }
    const commands = await response.json()
    return commands
} 

const route_url = `${process.env.BASE_URL}/api/adventure`
export function useGameData(new_commands: string[]) {
    const { data, error, isLoading, mutate } = useSWR(`${route_url}?commands=${JSON.stringify({
        commands: new_commands
    })}`, (url: string) => getCommands(url)
    )

    const updateGameData = async (commands: string[]) => {
        const new_data = await getCommands(`${route_url}?commands=${JSON.stringify({
            commands
        })}`)
        mutate([...new_data])
        if (new_data.includes("Try Again!")) {
            await delay(3000)
        }
        return new_data
    }

    return {
        data,
        error,
        isLoading,
        updateGameData
    }
}
export function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }