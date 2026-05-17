import { readFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

export async function getGlobalEntry() {
  const currentDir = dirname(fileURLToPath(import.meta.url))
  const configPath = resolve(currentDir, '../content/global/config.yml')
  const source = await readFile(configPath, 'utf8')
  const yamlModule = (await import('js-yaml')) as { load: (input: string) => unknown }
  const data = yamlModule.load(source)

  if (!data || typeof data !== 'object') {
    throw new Error('Failed to load global config from src/content/global/config.yml')
  }

  return {
    id: 'config',
    collection: 'global',
    data,
  }
}
