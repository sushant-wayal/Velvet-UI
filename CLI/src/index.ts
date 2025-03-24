import { Command } from "commander";
import { addComponent } from "./utils/addComponent";

const program = new Command();

program
  .command('add <name>')
  .description('Add a new component')
  .action((name) => {
    addComponent(name);
  });

program.parse(process.argv);