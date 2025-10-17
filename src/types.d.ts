type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N ? Acc[number] : Enumerate<N, [...Acc, Acc['length']]>
type BuildRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>> | F
type DD = BuildRange<1, 32>
type MM = BuildRange<1, 13>
type YY = '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19'
type Date = `${DD}.${MM}.${YY}`

export type Link = {
    title: string,
    link: string,
    label?: string
}

export type Episode = {
    number: number,
    title: string,
    release: Date,
    link: string
}

export type Season = {
    number: number,
    title: string,
    description?: string,
    link: string,
    start: Date,
    end: Date,
    nEpisodes: number,
    episodes: Episode[]
}