import axios from "axios"
import { BASE_URL } from "../constants.js"
import path from "path"
import fs from "fs-extra"
import chalk from "chalk"
import { execSync } from "child_process"

export const getPackageManager = () => {
  if (fs.existsSync(path.join(process.cwd(), 'yarn.lock'))) return 'yarn'
  else if (fs.existsSync('pnpm-lock.yaml')) return 'pnpm'
  return 'npm'
}

export const installDependencies = async (name: string) => {
  try {
    if (!name) {
      throw new Error('Please provide a name for the component')
    }
    const { data: dep_content } = await axios.get(`${BASE_URL}${name}/dependencies.txt`)
    const dependencies = dep_content.split('\n').filter(Boolean)
    const packageManager = getPackageManager()
    console.log(chalk.yellow(`⏳ Installing dependencies...`))
    const install_command = packageManager === 'yarn' ? `yarn add ${dependencies.join(' ')}` : packageManager === 'pnpm' ? `pnpm add ${dependencies.join(' ')}` : `npm install ${dependencies.join(' ')}`
    execSync(install_command, { stdio: 'inherit' })
    console.log(chalk.green(`✅ Dependencies installed successfully!`))
  } catch (error) {
    console.error(chalk.red(`❌ Error: ${(error as Error).message}`))
  }
}

export const addComponent = async (name: string) => {
  try {
    if (!name) {
      throw new Error('Please provide a name for the component')
    }
    const { data: code } = await axios.get(`${BASE_URL}${name}/code.tsx`)
    const checkPath = path.dirname(path.join(process.cwd(), 'src', 'components', 'temp.tsx'))
    let destPath = fs.pathExistsSync(checkPath) ? path.join(process.cwd(), 'src', 'components', 'velvix', `${name}.tsx`) : path.join(process.cwd(), 'components', 'velvix', `${name}.tsx`)
    fs.outputFileSync(destPath, code)
    await installDependencies(name)
    console.log(chalk.green(`✅ ${name} added successfully!`))
  } catch (error) {
    console.error(chalk.red(`❌ Error: ${(error as Error).message}`))
  }
}