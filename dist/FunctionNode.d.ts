export declare class FunctionNode {
    private args;
    private lines;
    exports: string[];
    private localImports;
    private libraries;
    private dependencies;
    constructor(args: FunctionNode.Arguments);
    build(): FunctionNode.Descriptor;
    private buildCode;
    private filterUnnecessaryLines;
    private filterImports;
    private filterExports;
}
export declare namespace FunctionNode {
    interface Arguments {
        name: string;
        module: string;
        code: string;
    }
    interface LocalImport {
        var: string;
        module: string;
        type: string;
    }
    interface Dependency {
        var: string;
        module: string;
    }
    class Descriptor {
        id: string;
        name: string;
        type: "function";
        func: string;
        x: number;
        y: number;
        z: string;
        libs: any[];
        wires: any[];
        outputs: number;
        noerr: number;
        initialize: string;
        finalize: string;
        static of(args?: {
            id?: string;
            name?: string;
            z?: string;
        }): Descriptor;
    }
}
