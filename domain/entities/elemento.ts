export interface Elemento {
    appearance?: string
    atomic_mass?: number
    cpk_hex?: string
    density?: number
    xpos: number
    ypos: number
    electron_affinity: number | null
    melt: number | null
    molar_heat: number | null
    number: number | null
    period: number | null
    phase: string | null
    name: string | null
    named_by: string | null
    shells: number[]
    electron_configuration: string | null
    discovered_by: string | null
    symbol: string | null
    summary: string | null
}