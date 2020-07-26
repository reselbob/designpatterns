export class Utilities{
    ping (): string{
        return `Running on platform ${process.platform} on process ID ${process.pid} at ${new Date()}.`
    }
}