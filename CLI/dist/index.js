#!/usr/bin/env node
import { Command } from "commander";
import { addComponent } from "./utils/addComponent.js";
const program = new Command();
program
    .command('add <name>')
    .description('Add a new component')
    .action((name) => {
    addComponent(name);
});
program.parse(process.argv);
