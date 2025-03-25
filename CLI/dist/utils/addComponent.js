import axios from "axios";
import { BASE_URL } from "../constants.js";
import path from "path";
import fs from "fs-extra";
import chalk from "chalk";
export const addComponent = async (name) => {
    try {
        if (!name) {
            throw new Error('Please provide a name for the component');
        }
        const { data: code } = await axios.get(`${BASE_URL}${name}.tsx`);
        const checkPath = path.dirname(path.join(process.cwd(), 'src', 'components', 'temp.tsx'));
        let destPath = fs.pathExistsSync(checkPath) ? path.join(process.cwd(), 'src', 'components', 'velvet', `${name}.tsx`) : path.join(process.cwd(), 'components', 'velvet', `${name}.tsx`);
        fs.outputFileSync(destPath, code);
        console.log(chalk.green(`✅ ${name} added successfully!`));
    }
    catch (error) {
        console.error(chalk.red(`❌ Error: ${error.message}`));
    }
};
