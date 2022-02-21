import process from "process";

export function hasMessage(value: unknown): value is { message: string } {
    return typeof value === 'object' && value !== null && 'message' in value;
}

export const isDevelopment: boolean = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';