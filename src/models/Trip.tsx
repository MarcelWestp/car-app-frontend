import Car from "./Car"

interface Trip{
    car: Car,
    from: Date | null,
    until: Date | null
}

export default Trip