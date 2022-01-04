declare module "*.svg" {
    const src: string;
    export default src;
}

declare module '*.svg?inline' {
    const content: any
    export default content
}
