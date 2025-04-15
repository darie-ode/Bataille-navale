// src/Utils.ts
import * as fs from "fs";

export function readJSON(filePath: string): any {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
}

export function parseArguments(args: string[]): { [key: string]: string } {
    const parsedArgs: { [key: string]: string } = {};
    for (let i = 0; i < args.length; i += 2) {
        parsedArgs[args[i].replace("--", "")] = args[i + 1];
    }
    return parsedArgs;
}
