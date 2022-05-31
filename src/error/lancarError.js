import chalk from "chalk";

export function lancarError(erro)
{
    throw new Error(chalk.red(erro));
}