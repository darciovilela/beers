export interface Beer {
    name: string,
    country: string,
    style: string

}

export interface Item extends Beer {
    id: number
}